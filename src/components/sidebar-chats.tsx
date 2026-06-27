"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare, Plus, Search, MoreVertical, Trash2, Edit3,
  Copy, Pin, Archive, PanelLeftClose, PanelLeftOpen, X
} from "lucide-react";
import { GlassCard, Pill } from "@/components/platform";

export interface Session {
  id: string;
  name: string;
  pinned?: boolean;
  archived?: boolean;
  createdAt: number;
}

interface SidebarChatsProps {
  activeSessionId: string;
  onSelectSession: (id: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export function SidebarChats({
  activeSessionId,
  onSelectSession,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarChatsProps) {
  // 1. Initial State with LocalStorage memory
  const [sessions, setSessions] = useState<Session[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Load from local storage or set defaults
  useEffect(() => {
    const stored = localStorage.getItem("fm-tutor-sessions");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.some((s: any) => s.id === "fractions" || s.name === "Fractions help")) {
          initializeDefaults();
        } else {
          setSessions(parsed);
        }
      } catch (e) {
        initializeDefaults();
      }
    } else {
      initializeDefaults();
    }
  }, []);

  const initializeDefaults = () => {
    const now = Date.now();
    const dayMs = 24 * 60 * 60 * 1000;
    const defaults: Session[] = [
      { id: "how-ai-learns", name: "How Does AI Actually Learn", createdAt: now, pinned: false },
      { id: "ai-vs-ml", name: "Difference Between AI and ML", createdAt: now - 30 * 60 * 1000, pinned: false },
      { id: "prompt-practice", name: "Prompt Writing Practice", createdAt: now - dayMs - 2 * 60 * 60 * 1000, pinned: false },
      { id: "neural-networks", name: "Understanding Neural Networks", createdAt: now - 4 * dayMs, pinned: false },
      { id: "ai-human-thinking", name: "Can AI Think Like Humans", createdAt: now - 12 * dayMs, pinned: false },
    ];
    setSessions(defaults);
    localStorage.setItem("fm-tutor-sessions", JSON.stringify(defaults));
  };

  const saveSessions = (updated: Session[]) => {
    setSessions(updated);
    localStorage.setItem("fm-tutor-sessions", JSON.stringify(updated));
  };

  // Close three-dot menu on outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut: Cmd+K / Ctrl+K to focus search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSidebarOpen(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsSidebarOpen]);

  // 2. New Session Button action
  const handleNewSession = () => {
    const now = Date.now();
    const newId = `session-${now}`;
    const newSession: Session = {
      id: newId,
      name: "New Session",
      createdAt: now,
      pinned: false,
      archived: false,
    };
    const updated = [newSession, ...sessions];
    saveSessions(updated);
    onSelectSession(newId);
    setSearchQuery("");
  };

  // 3. Actions on individual items
  const handleDelete = (id: string) => {
    const updated = sessions.filter((s) => s.id !== id);
    saveSessions(updated);
    if (activeSessionId === id && updated.length > 0) {
      // Select the first remaining non-archived session
      const visible = updated.filter(s => !s.archived);
      if (visible.length > 0) {
        onSelectSession(visible[0].id);
      } else if (updated.length > 0) {
        onSelectSession(updated[0].id);
      }
    }
    setOpenMenuId(null);
  };

  const handleDuplicate = (session: Session) => {
    const now = Date.now();
    const duplicated: Session = {
      ...session,
      id: `session-dup-${now}`,
      name: `${session.name} (Copy)`,
      createdAt: now,
    };
    // Insert right after the duplicated session
    const idx = sessions.findIndex((s) => s.id === session.id);
    const updated = [...sessions];
    updated.splice(idx + 1, 0, duplicated);
    saveSessions(updated);
    onSelectSession(duplicated.id);
    setOpenMenuId(null);
  };

  const handleTogglePin = (id: string) => {
    const updated = sessions.map((s) =>
      s.id === id ? { ...s, pinned: !s.pinned } : s
    );
    saveSessions(updated);
    setOpenMenuId(null);
  };

  const handleToggleArchive = (id: string) => {
    const updated = sessions.map((s) =>
      s.id === id ? { ...s, archived: !s.archived } : s
    );
    saveSessions(updated);
    // If we archived the active session, select another one
    if (activeSessionId === id) {
      const remaining = updated.filter(s => !s.archived);
      if (remaining.length > 0) {
        onSelectSession(remaining[0].id);
      }
    }
    setOpenMenuId(null);
  };

  const startRename = (id: string, currentName: string) => {
    setEditingId(id);
    setEditName(currentName);
    setOpenMenuId(null);
  };

  const saveRename = (id: string) => {
    if (editName.trim()) {
      const updated = sessions.map((s) =>
        s.id === id ? { ...s, name: editName.trim() } : s
      );
      saveSessions(updated);
    }
    setEditingId(null);
  };

  // 4. Filtering and Grouping logic with fuzzy matching
  const getFuzzyHighlight = (text: string, query: string) => {
    if (!query) return { matches: true, html: text };
    
    // Case insensitive exact substring check first
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "i");
    if (regex.test(text)) {
      return {
        matches: true,
        html: text.replace(
          regex,
          `<mark class="bg-teal/20 text-teal dark:text-teal-300 rounded-md px-0.5 font-bold">${query}</mark>`
        ),
      };
    }

    // Fuzzy check: check if chars of query appear in sequence
    const chars = query.split("");
    let currentIdx = 0;
    let matchHtml = "";
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (currentIdx < chars.length && char.toLowerCase() === chars[currentIdx].toLowerCase()) {
        matchHtml += `<mark class="bg-teal/20 text-teal dark:text-teal-300 rounded-md px-0.5 font-bold">${char}</mark>`;
        currentIdx++;
      } else {
        matchHtml += char;
      }
    }

    if (currentIdx === chars.length) {
      return { matches: true, html: matchHtml };
    }

    return { matches: false, html: text };
  };

  // Filter out archived sessions, and match search query
  const matchingSessions = sessions
    .filter((s) => !s.archived)
    .filter((s) => {
      if (!searchQuery) return true;
      return getFuzzyHighlight(s.name, searchQuery).matches;
    });

  // Calculate dynamic groups
  const getGroupLabel = (createdAt: number): string => {
    const now = new Date();
    const date = new Date(createdAt);
    
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const isToday = now.toDateString() === date.toDateString();
    
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = yesterday.toDateString() === date.toDateString();
    
    if (isToday) return "Today";
    if (isYesterday) return "Yesterday";
    if (diffDays <= 7) return "Previous 7 Days";
    if (diffDays <= 30) return "Previous 30 Days";
    return "Older";
  };

  // Separate pinned vs standard
  const pinnedSessions = searchQuery ? [] : matchingSessions.filter(s => s.pinned);
  const unpinnedSessions = matchingSessions.filter(s => !s.pinned);

  // Group unpinned sessions
  const groups: { [key: string]: Session[] } = {
    Today: [],
    Yesterday: [],
    "Previous 7 Days": [],
    "Previous 30 Days": [],
    Older: [],
  };

  unpinnedSessions.forEach(session => {
    const label = getGroupLabel(session.createdAt);
    if (groups[label]) {
      groups[label].push(session);
    } else {
      groups["Older"].push(session);
    }
  });

  // Flat list of matching sessions for keyboard navigation
  const flatMatchingList = [...pinnedSessions, ...unpinnedSessions];

  // 5. Keyboard Navigation (↑ ↓ Enter Esc)
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1 < flatMatchingList.length ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < flatMatchingList.length) {
        onSelectSession(flatMatchingList[focusedIndex].id);
      } else if (flatMatchingList.length > 0) {
        onSelectSession(flatMatchingList[0].id);
      }
    } else if (e.key === "Escape") {
      setSearchQuery("");
      searchInputRef.current?.blur();
      setFocusedIndex(-1);
    }
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out flex-shrink-0 relative ${
        isSidebarOpen ? "w-[280px]" : "w-[72px]"
      }`}
    >
      <GlassCard className="p-4 h-[760px] flex flex-col justify-between dark:bg-[#1e1b2e]/85 dark:border-white/8 shadow-md overflow-hidden relative">
        <div className="flex flex-col h-full overflow-hidden">
          
          {/* Header Toggle */}
          <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 pb-3">
            {isSidebarOpen ? (
              <>
                <Pill tone="gold">Saved Sessions</Pill>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-slate-400 hover:text-teal p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all active:scale-95"
                  title="Collapse Sidebar"
                >
                  <PanelLeftClose className="h-4.5 w-4.5" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="mx-auto text-slate-400 hover:text-teal p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all active:scale-95"
                title="Expand Sidebar"
              >
                <PanelLeftOpen className="h-5 w-5 animate-pulse" />
              </button>
            )}
          </div>

          {/* Collapsible Sidebar Content wrapper */}
          <div className={`flex flex-col flex-1 overflow-hidden mt-4 space-y-4 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            
            {/* New Session Button */}
            <button
              onClick={handleNewSession}
              className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-teal px-4 py-3 text-sm font-bold text-white shadow-glow hover:bg-[#168484] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200"
            >
              <Plus className="h-4.5 w-4.5" />
              <span>New Session</span>
            </button>

            {/* Search Input */}
            <div className="relative flex items-center rounded-2xl border border-slate-200/35 dark:border-white/5 bg-white/40 dark:bg-white/5 px-3.5 py-2.5 focus-within:border-teal/50 transition-all duration-200">
              <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />
              <input
                ref={searchInputRef}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setFocusedIndex(-1);
                }}
                onKeyDown={handleSearchKeyDown}
                className="w-full bg-transparent outline-none text-xs ml-2 text-ink placeholder:text-slate-400"
                placeholder="Search conversations..."
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setFocusedIndex(-1);
                  }}
                  className="text-slate-400 hover:text-teal p-0.5 rounded-full"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Scrollable Conversation List */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-4 custom-scrollbar">
              {matchingSessions.length === 0 ? (
                <div className="text-center text-xs text-slate-400 py-8">
                  No conversations found
                </div>
              ) : (
                <>
                  {/* Pinned Chats */}
                  {pinnedSessions.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1 mb-1.5">
                        Pinned
                      </p>
                      {pinnedSessions.map((session) => renderChatItem(session))}
                    </div>
                  )}

                  {/* Grouped Chats */}
                  {Object.keys(groups).map((groupName) => {
                    const groupItems = groups[groupName];
                    if (groupItems.length === 0) return null;

                    return (
                      <div key={groupName} className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1 mb-1.5">
                          {groupName}
                        </p>
                        {groupItems.map((session) => renderChatItem(session))}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Floating drop-down for three-dot menu */}
        {openMenuId && renderDropdownMenu()}
      </GlassCard>
    </div>
  );

  // Render individual chat item
  function renderChatItem(session: Session) {
    const isActive = activeSessionId === session.id;
    const isEditing = editingId === session.id;
    const matchHighlight = getFuzzyHighlight(session.name, searchQuery);
    
    // Highlight if selected using Keyboard navigation
    const isFocused = flatMatchingList[focusedIndex]?.id === session.id;

    return (
      <div
        key={session.id}
        className={`group relative flex items-center rounded-2xl p-0.5 transition-all duration-200 ${
          isActive
            ? "bg-white/80 dark:bg-white/10 text-teal shadow-sm"
            : isFocused
            ? "bg-teal/5 text-teal border border-teal/10"
            : "text-ink hover:bg-teal/5 hover:text-teal"
        }`}
      >
        <button
          onClick={() => {
            if (!isEditing) {
              onSelectSession(session.id);
            }
          }}
          className="flex-1 flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold overflow-hidden text-left"
        >
          <MessageSquare className={`h-4 w-4 flex-shrink-0 transition-transform group-hover:scale-105 ${isActive ? "text-teal" : "opacity-60 text-ink"}`} />
          {isEditing ? (
            <input
              autoFocus
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              onBlur={() => saveRename(session.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveRename(session.id);
                if (e.key === "Escape") setEditingId(null);
              }}
              className="w-full bg-slate-100 dark:bg-white/10 outline-none px-1.5 py-0.5 rounded text-xs text-ink"
            />
          ) : (
            <span
              className="truncate flex-1"
              dangerouslySetInnerHTML={{ __html: matchHighlight.html }}
            />
          )}
        </button>

        {/* Three dot actions */}
        {!isEditing && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenuId(openMenuId === session.id ? null : session.id);
            }}
            className="opacity-0 group-hover:opacity-100 focus:opacity-100 text-slate-400 hover:text-teal p-1.5 rounded-lg transition-all"
            title="Chat actions"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }

  // Floating Dropdown menu structure
  function renderDropdownMenu() {
    const session = sessions.find((s) => s.id === openMenuId);
    if (!session) return null;

    return (
      <div
        ref={menuRef}
        className="absolute z-50 right-4 w-[160px] rounded-2xl border border-slate-200/30 bg-white/95 dark:bg-[#1b1928]/95 p-1.5 shadow-lg backdrop-blur-md"
        style={{
          bottom: "40px", // Simple absolute position near menu bottom
        }}
      >
        <button
          onClick={() => startRename(session.id, session.name)}
          className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-ink hover:bg-teal/5 hover:text-teal"
        >
          <Edit3 className="h-3.5 w-3.5" />
          Rename
        </button>
        <button
          onClick={() => handleTogglePin(session.id)}
          className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-ink hover:bg-teal/5 hover:text-teal"
        >
          <Pin className="h-3.5 w-3.5" />
          {session.pinned ? "Unpin" : "Pin"}
        </button>
        <button
          onClick={() => handleDuplicate(session)}
          className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-ink hover:bg-teal/5 hover:text-teal"
        >
          <Copy className="h-3.5 w-3.5" />
          Duplicate
        </button>
        <button
          onClick={() => handleToggleArchive(session.id)}
          className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-ink hover:bg-teal/5 hover:text-teal"
        >
          <Archive className="h-3.5 w-3.5" />
          Archive
        </button>
        <div className="my-1 h-px bg-slate-200/40 dark:bg-white/5" />
        <button
          onClick={() => handleDelete(session.id)}
          className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs font-semibold text-red-500 hover:bg-red-500/10"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete
        </button>
      </div>
    );
  }
}
