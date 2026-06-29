"use client";

import { useState, useEffect, useRef } from "react";
import { Check, AlertTriangle, X } from "lucide-react";
import { SectionHeading, cn } from "@/components/platform";

export default function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEmphasisActive, setIsEmphasisActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // Trigger subtle column emphasis 0.95s after viewport intersection
          // (matching 0.15s delay + 0.8s duration)
          setTimeout(() => {
            setIsEmphasisActive(true);
            setTimeout(() => {
              setIsEmphasisActive(false);
            }, 300); // returns smoothly to normal after 0.3 seconds
          }, 950);
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

  return (
    <section 
      ref={sectionRef} 
      className="relative z-10 mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12"
    >
      {/* Header */}
      <div 
        className="mb-10 lg:mb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform, opacity",
        }}
      >
        <SectionHeading
          eyebrow="Why FutureMinds wins"
          title="FutureMinds AI Guru stands apart"
          description="Compare the next generation of AI-powered learning with conventional platforms."
          centered
        />
      </div>

      {/* Comparison Table Wrapper */}
      <div 
        className="overflow-x-auto -mx-2 px-2"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
          willChange: "transform, opacity",
        }}
      >
        <div className="min-w-[640px] rounded-[2.5rem] border border-slate-200/60 dark:border-white/8 bg-white/70 dark:bg-[#1a1727]/40 shadow-sm backdrop-blur-md overflow-hidden">

          {/* Column Header Row */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-slate-200/60 dark:border-white/8">
            {/* Capability label */}
            <div className="px-6 py-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Capability</span>
            </div>

            {/* FutureMinds AI Guru — highlighted column */}
            <div 
              className={cn(
                "relative px-4 py-4 bg-gradient-to-b from-[#189b9b]/14 to-[#189b9b]/7 border-x-2 flex flex-col items-center gap-1.5 transition-all duration-300",
                isEmphasisActive 
                  ? "border-[#189b9b] shadow-[0_0_15px_rgba(24,155,155,0.4)]" 
                  : "border-[#189b9b]/30 dark:border-[#189b9b]/40"
              )}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#189b9b] via-[#fc9438] to-[#189b9b]" />
              <span className="inline-flex items-center gap-1 rounded-full bg-[#189b9b] px-2.5 py-0.5 text-[10px] font-bold text-white tracking-wide">
                ✦ Best choice
              </span>
              <p className="text-[13px] font-extrabold text-slate-800 dark:text-white text-center leading-tight">FutureMinds AI Guru</p>
            </div>

            {/* Other EdTech Platforms */}
            <div className="px-4 py-4 flex flex-col items-center justify-center border-r border-slate-200/60 dark:border-white/8">
              <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 text-center leading-tight">Other EdTech Platforms</p>
            </div>

            {/* Traditional Coaching / YouTube */}
            <div className="px-4 py-4 flex flex-col items-center justify-center">
              <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 text-center leading-tight">Traditional Coaching / YouTube</p>
            </div>
          </div>

          {/* Data Rows */}
          {[
            {
              capability: "AI Personal Tutor",
              fm: { icon: "check", label: "24/7 adaptive tutor" },
              other: { icon: "warn", label: "Limited chatbots" },
              yt: { icon: "cross", label: "No personalization" },
            },
            {
              capability: "Personalized Learning Path",
              fm: { icon: "check", label: "Adapts to each student" },
              other: { icon: "warn", label: "Basic recommendations" },
              yt: { icon: "cross", label: "One-size-fits-all" },
            },
            {
              capability: "Student + Teacher + Parent Dashboard",
              fm: { icon: "check", label: "Complete ecosystem" },
              other: { icon: "warn", label: "Usually student-focused" },
              yt: { icon: "cross", label: "No connected ecosystem" },
            },
            {
              capability: "Gamification & Rewards",
              fm: { icon: "check", label: "XP, badges, streaks" },
              other: { icon: "warn", label: "Available in some apps" },
              yt: { icon: "cross", label: "No progress motivation" },
            },
            {
              capability: "Progress Analytics",
              fm: { icon: "check", label: "Real-time insights" },
              other: { icon: "warn", label: "Basic reports" },
              yt: { icon: "cross", label: "No structured tracking" },
            },
            {
              capability: "Real-world Projects",
              fm: { icon: "check", label: "Hands-on learning" },
              other: { icon: "warn", label: "Limited availability" },
              yt: { icon: "cross", label: "Mostly passive learning" },
            },
            {
              capability: "Learn Anytime",
              fm: { icon: "check", label: "Available 24/7" },
              other: { icon: "check", label: "Available anytime" },
              yt: { icon: "warn", label: "Depends on schedules" },
            },
            {
              capability: "Instant Doubt Solving",
              fm: { icon: "check", label: "AI-powered assistance" },
              other: { icon: "warn", label: "Limited support" },
              yt: { icon: "cross", label: "Need to wait for classes" },
            },
            {
              capability: "Parent Visibility",
              fm: { icon: "check", label: "Dedicated parent dashboard" },
              other: { icon: "warn", label: "Limited" },
              yt: { icon: "cross", label: "Very limited" },
            },
          ].map((row, rowIdx) => {
            const renderCell = (cell: { icon: string; label: string }, isHighlighted = false) => {
              const iconMap = {
                check: (
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#189b9b]/15">
                    <Check className="h-3 w-3 text-[#189b9b]" strokeWidth={3} />
                  </span>
                ),
                warn: (
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-400/15">
                    <AlertTriangle className="h-3 w-3 text-amber-500" strokeWidth={2.5} />
                  </span>
                ),
                cross: (
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-400/15">
                    <X className="h-3 w-3 text-red-500" strokeWidth={2.5} />
                  </span>
                ),
              };
              return (
                <div className={cn("flex items-center gap-2 px-4 py-2.5", isHighlighted && "bg-[#189b9b]/6 dark:bg-[#189b9b]/10")}>
                  {iconMap[cell.icon as keyof typeof iconMap]}
                  <span className={cn("text-[12.5px] leading-snug", isHighlighted ? "font-semibold text-slate-700 dark:text-slate-200" : "text-slate-500 dark:text-slate-400")}>
                    {cell.label}
                  </span>
                </div>
              );
            };

            return (
              <div
                key={row.capability}
                className={cn(
                  "grid grid-cols-[1.6fr_1fr_1fr_1fr] transition-colors duration-220 ease-in-out hover:bg-slate-100/35 dark:hover:bg-white/[0.04] bg-transparent",
                  rowIdx < 8 ? "border-b border-slate-200/50 dark:border-white/6" : ""
                )}
              >
                {/* Capability name */}
                <div className="px-6 py-2.5 flex items-center">
                  <span className="text-[12.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">{row.capability}</span>
                </div>

                {/* FutureMinds column — highlighted */}
                <div 
                  className={cn(
                    "border-x-2 transition-colors duration-300",
                    isEmphasisActive 
                      ? "border-[#189b9b]/80" 
                      : "border-[#189b9b]/25 dark:border-[#189b9b]/30"
                  )}
                >
                  {renderCell(row.fm, true)}
                </div>

                {/* Other EdTech */}
                <div className="border-r border-slate-200/50 dark:border-white/6">
                  {renderCell(row.other)}
                </div>

                {/* YouTube / Coaching */}
                <div>
                  {renderCell(row.yt)}
                </div>
              </div>
            );
          })}

          {/* Footer CTA strip */}
          <div className="border-t border-slate-200/60 dark:border-white/8 bg-slate-50/60 dark:bg-white/[0.02] px-6 py-4 flex justify-center sm:justify-end">
            <a
              href="/signup"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#189b9b] bg-[#189b9b] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#148282] hover:border-[#148282] hover:shadow-md flex-shrink-0"
            >
              Get started free
              <span aria-hidden="true" className="text-white/70 text-sm">→</span>
            </a>
          </div>
        </div>
      </div>{/* end overflow-x-auto */}

      {/* Mobile hint */}
      <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500 sm:hidden">
        Scroll horizontally to see the full comparison &harr;
      </p>
    </section>
  );
}
