"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Users, 
  LayoutDashboard, 
  Award, 
  RotateCw, 
  Check, 
  Brain, 
  Sparkles, 
  Zap, 
  Flame 
} from "lucide-react";
import { SectionHeading } from "@/components/platform";

// Helper for class merging
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Custom Onboarding Mockup for Timeline ──────────────────
function MockupRoleSelector() {
  return (
    <div className="w-full max-w-md rounded-[2rem] border-[8px] border-teal dark:border-teal/70 bg-white/70 dark:bg-[#1a1727]/60 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-teal/30 flex flex-col justify-between">
      <div className="mb-2.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#fc9438]">Onboarding Flow</p>
        <h4 className="text-base font-bold text-ink mt-0">Who are you?</h4>
      </div>

      <div className="space-y-2">
        {/* Student - Selected */}
        <div className="flex items-center justify-between rounded-2xl border-2 border-teal bg-teal/5 dark:bg-teal/10 px-3 py-1.5 transition-all">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal/15 text-teal font-extrabold text-xs">
              S
            </div>
            <div>
              <p className="text-[13px] font-extrabold text-ink">Student</p>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold mt-0">Access lessons & quizzes</p>
            </div>
          </div>
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-teal text-white shadow-sm">
            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Teacher */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/40 dark:border-white/5 bg-white/30 dark:bg-[#12101e]/30 px-3 py-1.5 transition-all hover:bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-royal/10 text-royal dark:bg-royal/35 dark:text-indigo-300 font-extrabold text-xs">
              T
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">Teacher</p>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0">Manage class & assignments</p>
            </div>
          </div>
        </div>

        {/* Parent */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/40 dark:border-white/5 bg-white/30 dark:bg-[#12101e]/30 px-3 py-1.5 transition-all hover:bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#fc9438]/15 text-[#fc9438] font-extrabold text-xs">
              P
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">Parent</p>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0">Monitor progress & attendance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Custom Lesson/Quiz Mockup for Timeline ────────────────
function MockupQuiz() {
  return (
    <div className="w-full max-w-[470px] rounded-[2rem] border-[8px] border-[#7c5cbf] dark:border-[#7c5cbf]/70 bg-white/70 dark:bg-[#1a1727]/60 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#fc9438]/30 flex flex-col justify-between">
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 px-2 py-0.5 text-[9px] font-bold">
          <Brain className="h-3 w-3 text-violet-600 dark:text-violet-400" />
          <span>Introduction to AI</span>
        </div>
        <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500">Q 1 of 5</span>
      </div>

      {/* Question & Options container */}
      <div className="space-y-2">
        <h4 className="text-[13px] font-bold text-ink leading-snug text-left">
          Which of the following is a common application of Discriminative AI?
        </h4>

        {/* Options */}
        <div className="space-y-1.5">
          {/* Option A */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#12101e]/30 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-white/50">
              A
            </span>
            <span className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 text-left">Creating realistic artwork</span>
          </div>

          {/* Option B */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#12101e]/30 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-white/50">
              B
            </span>
            <span className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 text-left">Generating new molecular structures for drug discovery</span>
          </div>

          {/* Option C - Selected & Correct */}
          <div className="flex items-center gap-2.5 rounded-2xl border-2 border-teal bg-teal/5 dark:bg-teal/10 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-sm">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </span>
            <span className="text-[10.5px] font-bold text-teal text-left">Spam detection in emails</span>
          </div>

          {/* Option D */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#12101e]/30 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-white/50">
              D
            </span>
            <span className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 text-left">Producing synthetic human-like voices</span>
          </div>
        </div>

        {/* Correct Explanation Box */}
        <div className="rounded-2xl border border-slate-200/40 dark:border-white/5 bg-white/50 dark:bg-[#12101e]/30 p-2.5 flex gap-2 items-start">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
          <div className="text-left">
            <p className="text-[9px] text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-ink">Correct!</span> Discriminative AI excels at classification tasks such as spam detection, fraud detection, and sentiment analysis.
            </p>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="flex items-center justify-between gap-4 pt-0">
          <div className="flex items-center gap-1.5 rounded-full bg-[#fc9438]/10 text-[#ad5e00] dark:text-[#fc9438] px-2.5 py-1 text-[9px] font-extrabold">
            <Zap className="h-3 w-3 text-[#ad5e00] dark:text-[#fc9438] fill-current" />
            <span>+10 XP</span>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-royal text-white px-4 py-1.5 text-[11px] font-bold shadow-md hover:bg-royal/90 transition-all">
            <span>Next</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Custom Rewards Mockup for Timeline ────────────────────
function MockupRewards() {
  return (
    <div className="w-full max-w-md rounded-[2rem] border-[8px] border-[#fc9438] dark:border-[#fc9438]/70 bg-white/70 dark:bg-[#1a1727]/60 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-teal/30 flex flex-col justify-between">
      <div className="mb-2.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-teal">Achievements</p>
        <h4 className="text-base font-bold text-ink mt-0">Your Progress</h4>
      </div>

      <div className="space-y-2.5">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Total XP", val: "1,240", color: "text-teal" },
            { label: "Leaderboard", val: "#4", color: "text-[#7c5cbf]" },
            { label: "Accuracy", val: "92%", color: "text-[#fc9438]" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2 text-center flex flex-col justify-center">
              <p className={`text-base font-black ${stat.color}`}>{stat.val}</p>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-semibold mt-0 whitespace-nowrap">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 7-Day Streak */}
        <div className="rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-[#fc9438] animate-pulse flex-shrink-0" />
            <div className="text-[9.5px] font-bold text-ink leading-tight text-left">
              <p>7-day</p>
              <p>streak</p>
            </div>
          </div>
          <div className="flex gap-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
              <span
                key={idx}
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold border",
                  idx < 6
                    ? "bg-teal border-teal text-white shadow-sm"
                    : "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
                )}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        {/* Badges List */}
        <div className="grid grid-cols-2 gap-2">
          {/* Quick Learner Badge */}
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal text-sm">
              <Zap className="h-3.5 w-3.5 text-teal" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[9.5px] font-bold text-ink">Quick learner</p>
              <p className="text-[8px] text-slate-500 dark:text-slate-400 font-semibold mt-0 leading-tight">5 lessons in a day</p>
            </div>
          </div>

          {/* Top Scorer Badge */}
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-sm">
              <Award className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[9.5px] font-bold text-ink">Top scorer</p>
              <p className="text-[8px] text-slate-500 dark:text-slate-400 font-semibold mt-0 leading-tight">100% on a quiz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.22,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (flippedCard === null) return;
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const element = document.getElementById("how-it-works");
      if (element && !element.contains(e.target as Node)) {
        setFlippedCard(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [flippedCard]);

  const steps = [
    {
      step: "STEP 01",
      title: "Choose a role",
      description: "Student, teacher, or parent dashboards adapt to the same branded system — each role gets a tailored experience from day one.",
      icon: <Users className="h-6 w-6" />,
      colorClass: "border-t-[#189b9b]",
      textColorClass: "text-[#189b9b]",
      bgPillClass: "bg-[#189b9b]/10 text-[#189b9b] border-[#189b9b]/25",
      bgIconClass: "bg-[#189b9b]/15 text-[#189b9b]",
      mockup: <MockupRoleSelector />,
      checkpoints: [
        "Student, Teacher & Parent roles",
        "Personalised dashboard per role",
        "Same platform, different experience"
      ]
    },
    {
      step: "STEP 02",
      title: "Learn in modules",
      description: "Micro-lessons and interactive quizzes keep sessions short and motivating — with AI hints available whenever you're stuck.",
      icon: <LayoutDashboard className="h-6 w-6" />,
      colorClass: "border-t-[#7c5cbf]",
      textColorClass: "text-[#7c5cbf]",
      bgPillClass: "bg-[#7c5cbf]/10 text-[#7c5cbf] border-[#7c5cbf]/25",
      bgIconClass: "bg-[#7c5cbf]/15 text-[#7c5cbf]",
      mockup: <MockupQuiz />,
      checkpoints: [
        "Bite-sized micro-lessons",
        "Interactive quizzes with instant feedback",
        "AI hints whenever you're stuck"
      ]
    },
    {
      step: "STEP 03",
      title: "Earn rewards",
      description: "XP, badges, streaks, and leaderboard spots make growth visible — keeping learners motivated and coming back every day.",
      icon: <Award className="h-6 w-6" />,
      colorClass: "border-t-[#fc9438]",
      textColorClass: "text-[#fc9438]",
      bgPillClass: "bg-[#fc9438]/10 text-[#fc9438] border-[#fc9438]/25",
      bgIconClass: "bg-[#fc9438]/15 text-[#fc9438]",
      mockup: <MockupRewards />,
      checkpoints: [
        "XP points per lesson completed",
        "Daily streaks and milestone badges",
        "Leaderboard to track your rank"
      ]
    }
  ];

  return (
    <div ref={sectionRef} className="w-full">
      {/* Centered section header */}
      <div 
        className="text-center max-w-2xl mx-auto mb-8 lg:mb-10"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform, opacity",
        }}
      >
        <SectionHeading
          eyebrow="How it works"
          title="A polished flow from signup to measurable progress"
          centered
        />
      </div>

      <div className="relative mt-4 lg:mt-6">
        {/* Dynamic injection of 3D flip CSS */}
        <style dangerouslySetInnerHTML={{__html: `
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}} />

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 items-stretch">
          {steps.map((item, idx) => {
            const isFlipped = flippedCard === idx;
            const delay = idx === 0 ? "0.10s" : idx === 1 ? "0.18s" : "0.26s";

            return (
              <div 
                key={idx}
                className="perspective-1000 w-full h-[470px] relative group"
                onMouseEnter={() => setFlippedCard(idx)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(idx)}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(35px)",
                  transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}`,
                  willChange: "transform, opacity",
                }}
              >
                <div 
                  className={cn(
                    "relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer",
                    isFlipped && "rotate-y-180"
                  )}
                >
                  {/* CARD FRONT */}
                  <div className="absolute inset-0 backface-hidden z-10">
                    <div className={cn(
                      "flex flex-col justify-between h-full w-full rounded-[2.5rem] border border-slate-200/60 dark:border-white/8 bg-white/75 dark:bg-[#1a1727]/50 p-8 shadow-sm backdrop-blur-md border-t-4",
                      item.colorClass
                    )}>
                      <div>
                        {/* Top row with pill and icon */}
                        <div className="flex justify-between items-center">
                          <span className={cn("inline-flex items-center rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider border", item.bgPillClass)}>
                            {item.step}
                          </span>
                          <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", item.bgIconClass)}>
                            {item.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="mt-8 space-y-4 text-left">
                          <h3 className={cn("text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300", `group-hover:${item.textColorClass}`)}>
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            {item.description}
                          </p>
                        </div>

                        {/* Checkpoints */}
                        <div className="mt-5 space-y-2 text-left">
                          {item.checkpoints.map((cp, cpIdx) => (
                            <div key={cpIdx} className="flex items-start gap-2 text-xs">
                              <span className={cn("font-bold text-sm leading-none select-none mt-0.5", item.textColorClass)}>
                                ✓
                              </span>
                              <span className="text-[13px] text-slate-600 dark:text-slate-300 font-normal leading-snug">
                                {cp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom See Preview Hint */}
                      <div className={cn("flex justify-end items-center gap-1.5 text-xs font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300", item.textColorClass)}>
                        <span>See preview</span>
                        <RotateCw className="h-3.5 w-3.5 animate-spin-slow" />
                      </div>
                    </div>
                  </div>

                  {/* CARD BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 z-20">
                    <div className={cn(
                      "relative w-full h-full flex flex-col justify-between p-4 bg-white/75 dark:bg-[#1a1727]/50 rounded-[2.5rem] border border-slate-200/60 dark:border-white/8 border-t-4 shadow-sm backdrop-blur-md",
                      item.colorClass
                    )}>
                      {/* Back Button */}
                      <div className="absolute top-4 left-6 z-30">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlippedCard(null);
                          }}
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#1a1727]/90 shadow-sm border border-slate-200/40 dark:border-white/5 text-xs font-black hover:scale-105 active:scale-95 transition-all",
                            item.textColorClass
                          )}
                        >
                          <span>&larr;</span>
                          <span>Back</span>
                        </button>
                      </div>

                      {/* Preview Mockup Panel */}
                      <div className="w-full h-full flex items-center justify-center pt-8">
                        {item.mockup}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
