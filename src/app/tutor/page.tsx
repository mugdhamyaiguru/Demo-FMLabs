"use client";

import { useState } from "react";
import { Mic, MessageCircle, Send, Sparkles, Volume2, Wand2, PanelLeftClose, PanelLeftOpen, Plus } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

export default function TutorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSession, setActiveSession] = useState("Fractions help");

  const sessions = [
    { id: "fractions", name: "Fractions help", short: "F" },
    { id: "python", name: "Python basics", short: "P" },
    { id: "science", name: "Science quiz hints", short: "S" },
    { id: "project", name: "Project brainstorming", short: "P" },
  ];

  return (
    <AppShell active="AI Tutor" title="AI Tutor">
      <div className="flex gap-5 items-start">
        {/* COLLAPSIBLE SIDEBAR */}
        <div 
          className={`transition-all duration-300 ease-in-out flex-shrink-0 ${
            isSidebarOpen ? "w-[280px]" : "w-16"
          }`}
        >
          <GlassCard className="p-4 h-[760px] flex flex-col justify-between dark:bg-[#1e1b2e]/85 dark:border-white/8 shadow-md">
            <div className="space-y-4">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 pb-3">
                {isSidebarOpen ? (
                  <>
                    <Pill tone="gold">Saved Sessions</Pill>
                    <button 
                      onClick={() => setIsSidebarOpen(false)}
                      className="text-slate-400 hover:text-teal p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                      title="Collapse Sidebar"
                    >
                      <PanelLeftClose className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="mx-auto text-slate-400 hover:text-teal p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    title="Expand Sidebar"
                  >
                    <PanelLeftOpen className="h-4.5 w-4.5" />
                  </button>
                )}
              </div>

              {/* Sessions List */}
              <div className="space-y-2 pt-2">
                {sessions.map((session) => {
                  const isActive = activeSession === session.name;
                  return (
                    <button
                      key={session.id}
                      onClick={() => setActiveSession(session.name)}
                      className={`w-full flex items-center transition-all duration-200 ${
                        isSidebarOpen 
                          ? "rounded-2xl border px-4 py-3 text-sm font-semibold justify-start gap-3" 
                          : "h-10 w-10 mx-auto rounded-xl border justify-center text-xs font-black"
                      } ${
                        isActive
                          ? "bg-teal/10 text-teal border-teal/20"
                          : "border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 text-ink hover:bg-teal/5 hover:text-teal hover:border-teal/10"
                      }`}
                      title={session.name}
                    >
                      {isSidebarOpen ? (
                        <>
                          <MessageCircle className="h-4 w-4 flex-shrink-0 opacity-70" />
                          <span className="truncate text-left">{session.name}</span>
                        </>
                      ) : (
                        <span>{session.short}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sidebar Bottom Action */}
            <div className="pt-4 border-t border-slate-200/40 dark:border-white/5">
              <button 
                className={`flex items-center justify-center gap-2 w-full rounded-2xl border border-dashed border-teal/30 hover:border-teal/60 text-teal transition-all active:scale-95 ${
                  isSidebarOpen ? "py-2.5 text-xs font-bold" : "h-10 w-10 mx-auto p-0"
                }`}
                title="New Session"
              >
                <Plus className="h-4 w-4" />
                {isSidebarOpen && <span>New Session</span>}
              </button>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="flex-1 flex min-h-[760px] flex-col p-0 overflow-hidden dark:bg-[#1e1b2e]/85 dark:border-white/8 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 px-6 py-5">
            <div>
              <Pill tone="teal">Chat Interface</Pill>
              <h2 className="mt-2 text-2xl font-black text-ink">FutureMinds AI Tutor</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/40 dark:bg-white/5 border border-slate-200/20 dark:border-white/5 px-4 py-2 text-xs font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-teal" />Hint mode on
            </div>
          </div>

          <div className="flex-1 space-y-5 px-6 py-6 overflow-y-auto">
            <div className="max-w-2xl rounded-[2rem] bg-royal px-5 py-4 text-white shadow-lg">
              <p className="text-xs text-white/70">AI Tutor</p>
              <p className="mt-1 leading-7 text-sm">Let’s break this into small steps. Show me the question and I’ll guide you with hints instead of giving the full answer immediately.</p>
            </div>
            <div className="ml-auto max-w-2xl rounded-[2rem] bg-teal px-5 py-4 text-white shadow-lg">
              <p className="text-xs text-white/70">Student</p>
              <p className="mt-1 leading-7 text-sm">I’m stuck on fractions. Can you help me compare 1/2 and 3/4?</p>
            </div>
            <div className="max-w-2xl rounded-[2rem] bg-white/60 dark:bg-white/5 border border-slate-200/20 dark:border-white/5 px-5 py-4 text-ink shadow-sm">
              <p className="text-xs text-slate-400">AI Tutor</p>
              <p className="mt-1 leading-7 text-sm">Try converting both to the same number of parts. Use a common denominator and then compare the numerators.</p>
            </div>
            <div className="max-w-2xl rounded-[2rem] border border-dashed border-teal/20 bg-teal/5 px-5 py-4 text-ink">
              <div className="flex items-center gap-3 text-teal">
                <Sparkles className="h-4 w-4 animate-spin" />
                <span className="text-xs font-semibold">Typing indicator</span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal/70" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal/40" />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/40 dark:border-white/5 px-6 py-5">
            <div className="flex flex-wrap gap-2">
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Mathematics</button>
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Science</button>
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Coding</button>
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Hint mode</button>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-full border border-slate-200/35 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-2.5 transition-all focus-within:border-teal/50 focus-within:bg-white/80 dark:focus-within:bg-white/10">
              <Mic className="h-4 w-4 text-royal/40 dark:text-white/40 cursor-pointer hover:text-teal" />
              <input className="w-full bg-transparent outline-none text-sm text-ink placeholder:text-slate-400" placeholder="Ask something, or say 'give me a hint'" />
              <button className="rounded-full bg-teal px-4 py-2 text-white hover:bg-[#168484] transition-all"><Send className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}