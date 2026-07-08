"use client";

import { useEffect, useState } from "react";
import { 
  Mic, Send, Sparkles, Search, Bell, Sun, Moon, Home, Menu, Star, Trophy, Settings
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { GlassCard, Pill } from "@/components/platform";
import { SidebarChats } from "@/components/sidebar-chats";

interface ChatMessage {
  sender: "student" | "tutor";
  msg: string;
}

const mockConversations: Record<string, ChatMessage[]> = {
  "how-ai-learns": [
    { sender: "student", msg: "How does AI recognize images?" },
    { sender: "tutor", msg: "When you look at a dog, do you identify the whole image instantly, or do you notice features like ears, eyes, fur, and shape first?" },
    { sender: "student", msg: "I notice the features." },
    { sender: "tutor", msg: "Interesting. If humans recognize features before identifying an object, how might an AI model approach the same problem?" }
  ],
  "ai-vs-ml": [
    { sender: "student", msg: "What is the difference between Artificial Intelligence and Machine Learning?" },
    { sender: "tutor", msg: "Artificial Intelligence is the broad concept of machines acting smartly. Machine Learning is a specific subset of AI where we train a model on data to learn how to make decisions, rather than coding the rules manually." }
  ],
  "prompt-practice": [
    { sender: "student", msg: "Can you help me practice writing better prompts for AI?" },
    { sender: "tutor", msg: "Sure! A great prompt usually has context, a clear task, constraints, and an output format. Let's try an exercise: rewrite 'Write an essay about space' using these elements." }
  ],
  "neural-networks": [
    { sender: "student", msg: "What is a neural network in simple terms?" },
    { sender: "tutor", msg: "A neural network is a set of algorithms modeled loosely after the human brain. It consists of layers of interconnected nodes (neurons) that process information and pass it along, adjusting weights to get better at a task." }
  ],
  "ai-human-thinking": [
    { sender: "student", msg: "Can AI think like humans do, or is it just simulating?" },
    { sender: "tutor", msg: "Currently, AI simulates thinking through advanced pattern matching and statistical prediction. It doesn't have consciousness, feelings, or true understanding like a human, but it can solve complex problems in ways that mimic human reasoning." }
  ]
};

export default function TutorPage() {
  const { resolvedTheme, setMode } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [searchQuery, setSearchQuery] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fm-tutor-sidebar-collapsed");
      return saved === "true" ? false : true;
    }
    return true;
  });

  const [activeSessionId, setActiveSessionId] = useState(() => {
    if (typeof window !== "undefined") {
      const active = localStorage.getItem("fm-tutor-active-session-id");
      return active === "fractions" || !active ? "how-ai-learns" : active;
    }
    return "how-ai-learns";
  });

  useEffect(() => {
    document.documentElement.classList.add("s3k-student-tutor");
    return () => {
      document.documentElement.classList.remove("s3k-student-tutor");
    };
  }, []);

  const handleSelectSession = (id: string) => {
    setActiveSessionId(id);
    localStorage.setItem("fm-tutor-active-session-id", id);
  };

  const handleSetSidebarOpen = (open: boolean) => {
    setIsSidebarOpen(open);
    localStorage.setItem("fm-tutor-sidebar-collapsed", open ? "false" : "true");
  };

  const messages = mockConversations[activeSessionId] || [
    { sender: "student", msg: "I have a new question. Can you help me work through it?" },
    { sender: "tutor", msg: "Try describing the problem or pasting the exercise. We will break it down together step-by-step." }
  ];

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--bg)" }}>
      {/* Sora & Inter fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Scoped CSS Inject for S3K Tokens & Chat UI styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .s3k-student-tutor {
          --bg: #f4f4f7;
          --surface: #ffffff;
          --surface-2: #f8f8fb;
          --border: #e7e7ef;
          --text: #15131f;
          --muted: #6b6880;
          --faint: #9a97ad;
          --accent: #6d28d9;
          --accent-2: #9333ea;
          --accent-soft: #f0ecff;
          --font-sans: 'Inter', sans-serif;
          --font-display: 'Sora', sans-serif;
        }

        .s3k-student-tutor.dark {
          --bg: #0c0c12;
          --surface: #15151e;
          --surface-2: #1b1b26;
          --border: #272733;
          --text: #ececf2;
          --muted: #a4a2b5;
          --faint: #6d6b80;
          --accent: #a78bfa;
          --accent-2: #c084fc;
          --accent-soft: #221b3a;
        }

        .s3k-student-tutor body {
          background: var(--bg) !important;
          color: var(--text) !important;
          font-family: var(--font-sans) !important;
        }

        .s3k-student-tutor h1,
        .s3k-student-tutor h2,
        .s3k-student-tutor h3,
        .s3k-student-tutor h4,
        .s3k-student-tutor h5,
        .s3k-student-tutor h6,
        .s3k-student-tutor .font-display {
          font-family: var(--font-display) !important;
          letter-spacing: -0.01em !important;
        }

        /* Hide the default global PersistentNavbar */
        .s3k-student-tutor .sticky.top-0.z-50.w-full {
          display: none !important;
        }

        /* Hide default background gradient panels */
        .s3k-student-tutor .absolute.inset-0.dark\\:hidden,
        .s3k-student-tutor .absolute.inset-0.hidden.dark\\:block {
          background: var(--bg) !important;
          background-image: none !important;
        }

        /* S3K Header style */
        .s3k-student-tutor header.s3k-header {
          background: var(--surface) !important;
          border-bottom: 1px solid var(--border) !important;
          color: var(--text) !important;
        }

        /* S3K ctl inputs */
        .s3k-student-tutor .ctl {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          border-radius: 10px !important;
          color: var(--text) !important;
        }
        .s3k-student-tutor.dark .ctl {
          background: #252537 !important;
          border-color: #3e3e58 !important;
        }

        /* Sidebar chat card panel overrides */
        .s3k-student-tutor .rounded-\\[2rem\\],
        .s3k-student-tutor .s3k-card {
          background: var(--surface) !important;
          border: 1px solid var(--border) !important;
          border-radius: 16px !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
          backdrop-filter: none !important;
        }

        /* Active sidebar link */
        .s3k-student-tutor .bg-white\\/80,
        .s3k-student-tutor .dark\\:bg-white\\/10 {
          background: var(--accent-soft) !important;
          color: var(--accent) !important;
          box-shadow: none !important;
        }

        .s3k-student-tutor .text-ink {
          color: var(--text) !important;
        }

        .s3k-student-tutor .text-slate-400,
        .s3k-student-tutor .text-slate-500 {
          color: var(--muted) !important;
        }

        /* Enforce bubble bubble layout overrides */
        /* Student message */
        .s3k-student-tutor .bg-teal {
          background: var(--accent) !important;
          color: #ffffff !important;
          border-radius: 16px 16px 4px 16px !important;
        }

        /* AI Tutor message */
        .s3k-student-tutor .bg-\\[\\#4E4260\\],
        .s3k-student-tutor .dark\\:bg-\\[\\#0b0c1e\\] {
          background: var(--surface-2) !important;
          color: var(--text) !important;
          border: 1px solid var(--border) !important;
          border-radius: 16px 16px 16px 4px !important;
        }

        .s3k-student-tutor .text-white\\/70 {
          color: var(--muted) !important;
          font-weight: 600 !important;
        }

        /* Typing indicator styling */
        .s3k-student-tutor .border-dashed {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          border-radius: 16px 16px 16px 4px !important;
          color: var(--text) !important;
        }

        .s3k-student-tutor .border-dashed .text-teal {
          color: var(--accent) !important;
        }

        .s3k-student-tutor .border-dashed .bg-teal {
          background: var(--accent) !important;
        }
      ` }} />

      {/* ── S3K TOP-TAB NAVIGATION HEADER ────────────────────────── */}
      <header className="s3k-header sticky top-0 z-40 w-full shrink-0">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-6">
          
          {/* Logo */}
          <Link href="/student" className="flex shrink-0 items-center gap-2.5">
            <div className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-[11px] font-extrabold tracking-tight text-white shadow-md">
              FM
            </div>
            <div className="leading-none">
              <div className="font-display txt text-[15px] font-extrabold tracking-[-0.02em]">FutureMinds</div>
              <div className="text-[8.5px] font-bold uppercase tracking-[0.16em] accent">
                AI Labs
              </div>
            </div>
          </Link>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5">
            {[
              { label: "Dashboard", href: "/student", icon: Home },
              { label: "Modules", href: "/modules", icon: Menu },
              { label: "AI Tutor", href: "/tutor", icon: Star, on: true },
              { label: "Progress", href: "/progress", icon: Trophy },
              { label: "Rewards", href: "/rewards", icon: Bell },
              { label: "Settings", href: "/settings", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-all duration-200 ${
                    tab.on ? "text-white shadow-sm" : "txt-muted hover:opacity-85"
                  }`}
                  style={tab.on ? { background: "var(--accent)" } : undefined}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <div className="ctl txt-faint hidden sm:flex w-[190px] items-center gap-2 px-3.5 py-2 text-[13px] transition hover:opacity-90">
              <Search className="h-3.5 w-3.5 shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none flex-1 text-xs font-semibold placeholder:opacity-50"
              />
              <span className="bd rounded border px-1.5 py-0.5 text-[9px] font-semibold">⌘K</span>
            </div>

            <button
              onClick={() => setMode(isDark ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="ctl txt-muted grid h-9 w-9 place-items-center rounded-[10px] transition hover:opacity-85"
            >
              {isDark ? (
                <Sun className="h-[16px] w-[16px] text-amber-400" />
              ) : (
                <Moon className="h-[16px] w-[16px]" />
              )}
            </button>

            <button className="ctl txt-muted grid h-9 w-9 place-items-center rounded-[10px] transition hover:opacity-85">
              <Bell className="h-[16px] w-[16px]" />
            </button>

            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-[12px] font-extrabold text-white shadow-sm">
              M
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN SCROLLING CONTENT AREA ──────────────────────────── */}
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-6 items-start flex-col lg:flex-row">
            
            {/* COLLAPSIBLE SIDEBAR */}
            <div className="w-full lg:w-80 shrink-0">
              <SidebarChats
                activeSessionId={activeSessionId}
                onSelectSession={handleSelectSession}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={handleSetSidebarOpen}
              />
            </div>

            {/* MAIN CHAT AREA */}
            <div className="flex-1 w-full s3k-card flex h-[760px] flex-col overflow-hidden">
              {/* Header Title Bar */}
              <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
                <div>
                  <Pill tone="teal">Chat Interface</Pill>
                  <h2 className="mt-2 text-2xl font-bold text-ink">FutureMinds AI Tutor</h2>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/40 dark:bg-white/5 border border-[var(--border)] px-4 py-2 text-xs font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                  <span>Hint mode on</span>
                </div>
              </div>

              {/* Scrollable messages container */}
              <div className="flex-1 space-y-5 px-6 py-6 overflow-y-auto">
                {messages.map((message, index) => {
                  if (message.sender === "student") {
                    return (
                      <div key={index} className="w-fit ml-auto max-w-2xl rounded-2xl bg-teal px-5 py-4 text-white shadow-sm text-right">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">Student</p>
                        <p className="mt-1 leading-relaxed text-sm font-medium text-left">{message.msg}</p>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="max-w-2xl rounded-2xl bg-[#4E4260] dark:bg-[#0b0c1e] border border-[var(--border)] px-5 py-4 text-white shadow-sm">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">AI Tutor</p>
                        <p className="mt-1 leading-relaxed text-sm font-medium text-slate-200">{message.msg}</p>
                      </div>
                    );
                  }
                })}

                {/* Typing indicator placeholder */}
                <div className="max-w-2xl rounded-2xl border border-dashed border-teal/20 bg-teal/5 px-5 py-4 text-ink">
                  <div className="flex items-center gap-3 text-teal">
                    <Sparkles className="h-4 w-4 animate-pulse text-teal" />
                    <span className="text-xs font-bold">Typing indicator</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-teal" style={{ animationDelay: "0ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-teal/70" style={{ animationDelay: "150ms" }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-teal/40" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>

              {/* Message Input bar */}
              <div className="border-t border-[var(--border)] px-6 py-4">
                <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/40 dark:bg-white/5 px-4 py-2.5 transition-all focus-within:border-teal/50 focus-within:bg-white/80 dark:focus-within:bg-white/10">
                  <Mic className="h-4 w-4 text-slate-400 cursor-pointer hover:text-teal transition-colors" />
                  <input 
                    className="w-full bg-transparent outline-none text-xs font-semibold text-ink placeholder:text-slate-400" 
                    placeholder="Ask something, or say 'give me a hint'" 
                  />
                  <button 
                    className="rounded-full bg-teal px-4 py-2 text-white hover:opacity-90 transition-all flex items-center justify-center"
                    style={{ background: "var(--accent)" }}
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}