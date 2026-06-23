"use client";

import { useState } from "react";
import { GraduationCap, BadgeCheck, ShieldCheck } from "lucide-react";

interface RoleItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "teal" | "gold" | "crimson";
  highlights: string[];
}

export default function RoleSelector() {
  const [activeTab, setActiveTab] = useState(0);

  const roles: RoleItem[] = [
    {
      title: "Students",
      description: "Continue learning, earn XP, and jump into quests and AI tutoring.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "teal",
      highlights: ["Adaptive AI tutoring sessions", "XP tracking and daily streaks", "Interactive quests and quiz challenges"]
    },
    {
      title: "Teachers",
      description: "Track attendance, assignment completion, and class-level performance.",
      icon: <BadgeCheck className="h-6 w-6" />,
      color: "gold",
      highlights: ["Automated class-level performance tracking", "Generating reports"]
    },
    {
      title: "Parents",
      description: "Understand progress, weak topics, and recent achievements with ease.",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "crimson",
      highlights: ["Weak topic identification alerts", "Milestone achievements & XP monitoring", "Attendance tracking & simple summary guides"]
    }
  ];

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] items-stretch animate-fade-up">
      {/* Left pane: Tab selection list */}
      <div className="flex flex-col gap-4 justify-between">
        {roles.map((item, idx) => {
          const isActive = activeTab === idx;
          const colorStyles = 
            item.color === "teal" 
              ? { bg: "bg-[#189b9b]/10 text-[#189b9b]", active: "bg-[#189b9b] text-white border-[#189b9b]/20" }
              : item.color === "gold"
              ? { bg: "bg-[#d8a444]/10 text-[#d8a444]", active: "bg-[#d8a444] text-white border-[#d8a444]/20" }
              : { bg: "bg-red-500/10 text-red-500", active: "bg-red-500 text-white border-red-500/20" };

          return (
            <button
              key={item.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-start gap-5 p-6 rounded-[2rem] border text-left transition-all duration-300 select-none ${
                isActive
                  ? "bg-white dark:bg-[#1a1727]/40 border-slate-200/80 dark:border-white/10 shadow-md translate-x-1"
                  : "bg-white/40 dark:bg-transparent border-slate-200/20 dark:border-transparent hover:bg-white/80 dark:hover:bg-white/5 hover:shadow-sm"
              }`}
            >
              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${isActive ? colorStyles.active : colorStyles.bg}`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                  {isActive && (
                    <span className="inline-block h-2 w-2 rounded-full bg-current animate-ping" style={{ color: item.color === "teal" ? "#189b9b" : item.color === "gold" ? "#d8a444" : "#ef4444" }} />
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Right pane: Role interactive visual dashboard mockup */}
      <div className="relative rounded-[2.5rem] bg-white/60 dark:bg-[#1a1727]/30 border border-slate-200/40 dark:border-white/5 p-8 md:p-10 backdrop-blur-md shadow-sm overflow-hidden flex flex-col justify-between min-h-[350px]">
        {/* Dynamic ambient background blur based on role */}
        <div className={`absolute -right-24 -bottom-24 h-48 w-48 rounded-full opacity-[0.08] blur-3xl transition-colors duration-500 ${
          roles[activeTab].color === "teal" ? "bg-[#189b9b]" : roles[activeTab].color === "gold" ? "bg-[#d8a444]" : "bg-red-500"
        }`} />

        <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 px-3.5 py-1 text-xs font-semibold border border-slate-200/50 dark:border-white/5 uppercase tracking-wider">
              {roles[activeTab].title} Portal Preview
            </span>
            <h4 className="text-2xl font-black text-slate-800 dark:text-white leading-snug">
              Designed for {roles[activeTab].title.toLowerCase()}
            </h4>
            <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
              {roles[activeTab].description}
            </p>
          </div>

          <div className="border-t border-slate-200/50 dark:border-white/5 pt-6 mt-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Key Dashboard Highlights</p>
            <ul className="space-y-3">
              {roles[activeTab].highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/30">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: roles[activeTab].color === "teal" ? "#189b9b" : roles[activeTab].color === "gold" ? "#d8a444" : "#ef4444" }} />
                  </div>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
