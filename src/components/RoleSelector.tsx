"use client";

import { useState } from "react";
import { 
  GraduationCap, 
  BadgeCheck, 
  ShieldCheck, 
  ChevronRight, 
  Brain, 
  Flame, 
  Award, 
  LineChart, 
  ClipboardList, 
  Users, 
  AlertTriangle, 
  Trophy 
} from "lucide-react";

interface HighlightItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface RoleItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "teal" | "gold" | "purple";
  highlights: HighlightItem[];
}

export default function RoleSelector() {
  const [activeTab, setActiveTab] = useState(0);

  const roles: RoleItem[] = [
    {
      title: "Students",
      description: "Continue learning, earn XP, and jump into quests and AI tutoring.",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "teal",
      highlights: [
        {
          title: "Adaptive AI tutoring sessions",
          desc: "Receive personalized guidance and step-by-step help whenever you need it.",
          icon: <Brain className="h-5 w-5" />
        },
        {
          title: "XP tracking and daily streaks",
          desc: "Keep your momentum high with points, streak milestones, and rewards.",
          icon: <Flame className="h-5 w-5" />
        },
        {
          title: "Interactive quests and quiz challenges",
          desc: "Challenge yourself with micro-lessons and check your understanding as you go.",
          icon: <Award className="h-5 w-5" />
        }
      ]
    },
    {
      title: "Teachers",
      description: "Track attendance, assignment completion, and class-level performance.",
      icon: <BadgeCheck className="h-6 w-6" />,
      color: "gold",
      highlights: [
        {
          title: "Automated class-level performance tracking",
          desc: "View detailed class diagnostics, average completion, and accuracy insights.",
          icon: <LineChart className="h-5 w-5" />
        },
        {
          title: "Generating reports",
          desc: "Instantly download summaries of student achievements and areas for improvement.",
          icon: <ClipboardList className="h-5 w-5" />
        },
        {
          title: "Class and roster management",
          desc: "Organize study groups, track student logins, and configure learning paths easily.",
          icon: <Users className="h-5 w-5" />
        }
      ]
    },
    {
      title: "Parents",
      description: "Understand progress, weak topics, and recent achievements with ease.",
      icon: <ShieldCheck className="h-6 w-6" />,
      color: "purple",
      highlights: [
        {
          title: "Weak topic identification alerts",
          desc: "Get notifications detailing which subjects or lessons your child needs help with.",
          icon: <AlertTriangle className="h-5 w-5" />
        },
        {
          title: "Milestone achievements & XP monitoring",
          desc: "Track XP milestones and watch your child earn achievements in real time.",
          icon: <Trophy className="h-5 w-5" />
        },
        {
          title: "Attendance tracking & simple summary guides",
          desc: "Monitor login schedules and read a simple weekly brief in under two minutes.",
          icon: <ClipboardList className="h-5 w-5" />
        }
      ]
    }
  ];

  const activeColor = roles[activeTab].color;

  const rightBorderClass = 
    activeColor === "teal"
      ? "border-[#189b9b]/30 dark:border-[#189b9b]/25"
      : activeColor === "gold"
      ? "border-[#d8a444]/30 dark:border-[#d8a444]/25"
      : "border-[#7c5cbf]/30 dark:border-[#7c5cbf]/25";

  const rightTopBorderClass = 
    activeColor === "teal"
      ? "border-t-[#189b9b]"
      : activeColor === "gold"
      ? "border-t-[#d8a444]"
      : "border-t-[#7c5cbf]";

  const pillStyles = 
    activeColor === "teal"
      ? "text-[#189b9b] border-[#189b9b]/30 bg-[#189b9b]/8"
      : activeColor === "gold"
      ? "text-[#d8a444] border-[#d8a444]/30 bg-[#d8a444]/8"
      : "text-[#7c5cbf] border-[#7c5cbf]/30 bg-[#7c5cbf]/8";

  const highlightLabelColor = 
    activeColor === "teal"
      ? "text-[#189b9b]"
      : activeColor === "gold"
      ? "text-[#d8a444]"
      : "text-[#7c5cbf]";

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] items-stretch animate-fade-up">
      {/* Left pane: Tab selection list */}
      <div className="flex flex-col gap-4 justify-between">
        {roles.map((item, idx) => {
          const isActive = activeTab === idx;
          const colorStyles = 
            item.color === "teal" 
              ? { bg: "bg-[#189b9b]/10 text-[#189b9b]", active: "bg-[#189b9b] text-white border-[#189b9b]/20", border: "border-l-[#189b9b]" }
              : item.color === "gold"
              ? { bg: "bg-[#d8a444]/10 text-[#d8a444]", active: "bg-[#d8a444] text-white border-[#d8a444]/20", border: "border-l-[#d8a444]" }
              : { bg: "bg-[#7c5cbf]/10 text-[#7c5cbf]", active: "bg-[#7c5cbf] text-white border-[#7c5cbf]/20", border: "border-l-[#7c5cbf]" };

          return (
            <button
              key={item.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-start gap-5 p-6 rounded-[2rem] border border-l-4 text-left transition-all duration-300 select-none group cursor-pointer ${
                isActive
                  ? `bg-white dark:bg-[#1a1727]/40 border-slate-200/80 dark:border-white/10 shadow-md translate-x-1 ${colorStyles.border}`
                  : "bg-white/50 dark:bg-[#1a1727]/20 border-slate-200/60 dark:border-white/5 border-l-transparent shadow-sm hover:bg-white/80 dark:hover:bg-[#1a1727]/40 hover:border-slate-300/80 dark:hover:border-white/10 hover:shadow-md"
              }`}
            >
              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${isActive ? colorStyles.active : colorStyles.bg}`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
              </div>
              {!isActive && (
                <ChevronRight className="self-center ml-2 h-5 w-5 text-slate-400 dark:text-slate-500 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Right pane: Role interactive visual dashboard mockup */}
      <div className={`relative rounded-[2.5rem] bg-white/60 dark:bg-[#1a1727]/30 border ${rightBorderClass} border-t-[3px] ${rightTopBorderClass} p-8 md:p-10 backdrop-blur-md shadow-sm overflow-hidden flex flex-col justify-between min-h-[350px] transition-all duration-500`}>
        {/* Dynamic ambient background blur based on role */}
        <div className={`absolute -right-24 -bottom-24 h-48 w-48 rounded-full opacity-[0.08] blur-3xl transition-colors duration-500 ${
          roles[activeTab].color === "teal" ? "bg-[#189b9b]" : roles[activeTab].color === "gold" ? "bg-[#d8a444]" : "bg-[#7c5cbf]"
        }`} />

        <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <span className={`inline-flex items-center rounded-full px-3.5 py-1 text-xs font-semibold border uppercase tracking-wider transition-all duration-500 ${pillStyles}`}>
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
            <p className={`text-xs font-bold uppercase tracking-widest mb-3 transition-colors duration-500 ${highlightLabelColor}`}>Key Dashboard Highlights</p>
            <div className="space-y-4">
              {roles[activeTab].highlights.map((highlight, index) => {
                const iconColorClass = 
                  activeColor === "teal"
                    ? "text-[#189b9b] bg-[#189b9b]/10"
                    : activeColor === "gold"
                    ? "text-[#d8a444] bg-[#d8a444]/10"
                    : "text-[#7c5cbf] bg-[#7c5cbf]/10";

                return (
                  <div key={index} className="flex items-start gap-4 p-1">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${iconColorClass}`}>
                      {highlight.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-800 dark:text-white leading-snug">
                        {highlight.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                        {highlight.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
