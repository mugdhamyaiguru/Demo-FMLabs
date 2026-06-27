"use client";

import { useState } from "react";
import { Mic, Send, Sparkles } from "lucide-react";
import { AppShell } from "@/components/page-shell";
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
    <AppShell active="AI Tutor" title="AI Tutor" hideSearch={true}>
      <div className="flex gap-5 items-start">
        {/* COLLAPSIBLE SIDEBAR */}
        <SidebarChats
          activeSessionId={activeSessionId}
          onSelectSession={handleSelectSession}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={handleSetSidebarOpen}
        />

        <GlassCard className="flex-1 flex h-[760px] flex-col p-0 overflow-hidden dark:bg-[#1e1b2e]/85 dark:border-white/8 shadow-md">
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
            {messages.map((message, index) => {
              if (message.sender === "student") {
                return (
                  <div key={index} className="w-fit ml-auto max-w-2xl rounded-[2rem] bg-teal px-5 py-4 text-white shadow-lg">
                    <p className="text-xs text-white/70">Student</p>
                    <p className="mt-1 leading-7 text-sm">{message.msg}</p>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="max-w-2xl rounded-[2rem] bg-[#4E4260] dark:bg-[#0b0c1e] border border-slate-200/20 dark:border-white/5 px-5 py-4 text-white shadow-sm">
                    <p className="text-xs text-white/70">AI Tutor</p>
                    <p className="mt-1 leading-7 text-sm">{message.msg}</p>
                  </div>
                );
              }
            })}

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

          <div className="border-t border-slate-200/40 dark:border-white/5 px-6 py-4">
            <div className="flex items-center gap-3 rounded-full border border-slate-200/35 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-2.5 transition-all focus-within:border-teal/50 focus-within:bg-white/80 dark:focus-within:bg-white/10">
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