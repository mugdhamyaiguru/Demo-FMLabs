"use client";

import { useEffect, useState, useRef } from "react";
import { Brain, Sparkles, ClipboardList, Award, ShieldCheck, Users } from "lucide-react";
import { featureCards } from "@/lib/mock-data";

const featureIcons = {
  "AI Tutor": <Brain className="h-6 w-6 text-[#189b9b]" />,
  "Personalized Learning": <Sparkles className="h-6 w-6 text-[#fc9438]" />,
  "Progress Tracking": <ClipboardList className="h-6 w-6 text-[#d8a444]" />,
  "Gamification": <Award className="h-6 w-6 text-[#e05555]" />,
  "Parent Dashboard": <ShieldCheck className="h-6 w-6 text-[#189b9b]" />,
} as const;

const featureBullets = {
  "AI Tutor": [
    "Context-aware hints in real time",
    "Premium chat interface",
    "Step-by-step explanations"
  ],
  "Personalized Learning": [
    "Adaptive module recommendations",
    "Progress-aware next steps",
    "Personalised learning path per student"
  ],
  "Progress Tracking": [
    "Skill graphs and streaks",
    "Badges and milestones",
    "Analytics that feel motivating"
  ],
  "Gamification": [
    "XP points per lesson",
    "Daily streaks and rewards",
    "Celebratory milestone moments"
  ],
  "Parent Dashboard": [
    "Monitor progress at a glance",
    "Track attendance and weak topics",
    "Weekly summary reports"
  ]
} as const;

const featureSocialProofs = {
  "AI Tutor": "Used by 240k+ learners worldwide",
  "Personalized Learning": "Adopted by 450+ top-tier schools",
  "Progress Tracking": "Over 1.5M+ milestones tracked daily",
  "Gamification": "98% learner engagement and completion rate",
  "Parent Dashboard": "Trusted by 12,000+ parents and guardians",
} as const;

const carouselCards = featureCards.slice(0, 5);

export default function FeaturesCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % carouselCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const renderVisual = (title: string) => {
    switch (title) {
      case "AI Tutor":
        return (
          <div className="space-y-3 p-3 bg-slate-50 rounded-xl text-left text-[11px] font-medium leading-normal text-slate-800">
            <div className="flex flex-col items-end">
              <div className="bg-[#7C6FE0] text-white rounded-2xl rounded-tr-none px-3 py-1.5 max-w-[90%] shadow-xs">
                What is the difference between AI and ML?
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-teal/10 text-teal text-[9px] font-black">
                AI
              </div>
              <div className="bg-white text-slate-700 rounded-2xl rounded-tl-none border border-slate-100 px-3 py-1.5 max-w-[85%] shadow-xs">
                AI is the broader field — ML is how systems learn from data automatically.
              </div>
            </div>
          </div>
        );
      case "Personalized Learning":
        return (
          <div className="space-y-2 p-3 bg-slate-50 rounded-xl text-left text-[10px] font-semibold text-slate-700">
            <div className="space-y-1">
              <div className="flex justify-between items-center text-teal">
                <span>1. Fractions Lab</span>
                <span>100%</span>
              </div>
              <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-teal rounded-full" style={{ width: "100%" }} />
              </div>
            </div>

            <div className="space-y-1 mt-2">
              <div className="flex justify-between items-center text-amber-500">
                <span>2. Linear Equations</span>
                <span>72%</span>
              </div>
              <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: "72%" }} />
              </div>
            </div>

            <div className="space-y-1 mt-2 text-slate-400">
              <div className="flex justify-between items-center">
                <span>3. Python Variables</span>
                <span>Locked</span>
              </div>
              <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-slate-300/45 rounded-full" style={{ width: "0%" }} />
              </div>
            </div>
          </div>
        );
      case "Progress Tracking":
        return (
          <div className="p-3 bg-slate-50 rounded-xl text-left font-semibold text-slate-700">
            <div className="flex justify-between items-center mb-2.5">
              <div className="text-[10px]">
                7 Day Streak <span className="text-orange-500">🔥</span>
              </div>
              <div className="text-[9px] bg-[#DCFCE7] text-[#16A34A] px-[10px] py-[4px] rounded-full font-semibold leading-none">
                +120 XP
              </div>
            </div>
            {/* Circular Streak Row */}
            <div className="flex items-center justify-between gap-1 pt-2.5 border-t border-slate-200/50">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                const isCompleted = i < 6; // Mon-Sat
                return (
                  <div
                    key={i}
                    className="flex-shrink-0"
                  >
                    {isCompleted ? (
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full text-white text-[10px] font-bold shadow-xs"
                        style={{ backgroundColor: "#F59E0B" }}
                      >
                        {day}
                      </div>
                    ) : (
                      <div
                        className="flex h-6 w-6 items-center justify-center rounded-full border text-slate-400 text-[10px] font-semibold"
                        style={{ borderColor: "#d1d5db" }}
                      >
                        {day}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      case "Gamification":
        return (
          <div className="space-y-2 p-3 bg-slate-50 rounded-xl text-left text-[10px] font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-700 p-1.5 rounded-lg text-[9px] leading-tight">
              <span>🏆</span>
              <span>Badge Unlocked: Streak Keeper!</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center text-slate-400">
                <span>1. Ishaan</span>
                <span>2,840 XP</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>2. Mira</span>
                <span>2,575 XP</span>
              </div>
              <div className="flex justify-between items-center bg-teal/10 text-teal p-1 rounded">
                <span>3. You (Active)</span>
                <span>2,310 XP</span>
              </div>
            </div>
          </div>
        );
      case "Parent Dashboard":
        return (
          <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-50 rounded-xl text-center">
            <div className="bg-white p-1.5 rounded-lg shadow-xs border border-slate-200/50">
              <span className="text-xs text-[#6B7280] block font-medium">Attendance</span>
              <span className="text-[10px] font-black text-teal">94%</span>
            </div>
            <div className="bg-white p-1.5 rounded-lg shadow-xs border border-slate-200/50">
              <span className="text-xs text-[#6B7280] block font-medium">Progress</span>
              <span className="text-[10px] font-black text-amber-500">78%</span>
            </div>
            <div className="bg-white p-1.5 rounded-lg shadow-xs border border-slate-200/50">
              <span className="text-xs text-[#6B7280] block font-medium leading-none mb-1">Needs Focus</span>
              <span className="text-[9px] font-bold text-red-500 leading-none truncate block">Fractions</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={sectionRef}
      className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Column (40% width on desktop) */}
      <div 
        className="lg:col-span-2 space-y-5 text-left"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-80px)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          willChange: "transform, opacity",
        }}
      >
        <div className="inline-flex items-center rounded-full bg-teal/10 dark:bg-teal/15 border border-teal/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          Platform features
        </div>
        <h2 className="text-3xl lg:text-[46px] lg:leading-[1.15] text-slate-800 dark:text-white tracking-tight font-normal">
          Built to feel <span className="font-extrabold italic text-[#7c5cbf]">futuristic</span>, <span className="font-extrabold italic text-[#fc9438]">vibrant</span>, and easy to use
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400">
          The interface mixes SaaS clarity, playful gamification, and student-friendly visuals to make every workflow feel engaging.
        </p>
      </div>

      {/* Right Column (60% width on desktop) */}
      <div 
        className="lg:col-span-3 w-full space-y-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(80px)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
          willChange: "transform, opacity",
        }}
      >
        {/* Relative card container with cross-fade */}
        <div className="relative min-h-[360px] md:min-h-[280px] w-full">
          {carouselCards.map((feature, idx) => {
            const isActive = idx === activeIdx;
            const IconComponent = featureIcons[feature.title as keyof typeof featureIcons];
            const bullets = featureBullets[feature.title as keyof typeof featureBullets] || [];
            const socialProof = featureSocialProofs[feature.title as keyof typeof featureSocialProofs] || "";

            return (
              <div
                key={feature.title}
                className={`w-full rounded-[2rem] border border-slate-200/40 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] text-center transition-all duration-500 ease-in-out ${
                  isActive
                    ? "opacity-100 scale-100 relative z-10 pointer-events-auto"
                    : "opacity-0 scale-95 absolute inset-0 z-0 pointer-events-none"
                }`}
                style={{
                  background: "linear-gradient(135deg, #EEE9FE 40%, #C8F0E4 100%)"
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center text-left">
                  {/* Left Column (60% width) - always dark text for readability on light gradient */}
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEE9FE] text-[#189b9b] shadow-sm border border-slate-200/40">
                      {IconComponent}
                    </div>

                    {/* Bold Title */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bullet checkpoints */}
                    <div className="space-y-2 pt-1">
                      {bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <span className="text-[#189b9b] font-extrabold">✓</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social Proof Line */}
                    <div className="border-t border-slate-200/60 pt-3.5 mt-2 flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-[#534AB7] flex-shrink-0" />
                      <p className="text-xs font-medium text-[#374151]">
                        {socialProof}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (40% width) */}
                  <div className="flex items-center justify-center">
                    <div
                      className="w-full max-w-[280px] p-2.5 rounded-2xl"
                      style={{
                        background: "rgba(255, 255, 255, 0.35)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.6)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)"
                      }}
                    >
                      {renderVisual(feature.title)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Numbered Pagination (left-aligned directly under the card) */}
        <div className="flex justify-center items-center gap-6 text-sm font-semibold select-none">
          {carouselCards.map((feature, idx) => {
            const isActive = idx === activeIdx;
            const numString = String(idx + 1).padStart(2, "0");
            return (
              <button
                key={feature.title}
                onClick={() => setActiveIdx(idx)}
                className={`transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "text-[#189b9b] font-black text-base scale-110"
                    : "text-slate-300 dark:text-slate-700 hover:text-slate-500 dark:hover:text-slate-500 font-bold"
                }`}
              >
                {numString}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
