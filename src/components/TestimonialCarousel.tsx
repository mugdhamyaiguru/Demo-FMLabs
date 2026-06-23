"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
}

const roleConfig: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  "Grade 8": {
    bg: "bg-[#189b9b]/10",
    text: "text-[#189b9b]",
    border: "border-[#189b9b]/25",
    accent: "from-[#189b9b]",
  },
  Teacher: {
    bg: "bg-[#fc9438]/10",
    text: "text-[#fc9438]",
    border: "border-[#fc9438]/25",
    accent: "from-[#fc9438]",
  },
  Parent: {
    bg: "bg-[#7c5cbf]/10",
    text: "text-[#7c5cbf]",
    border: "border-[#7c5cbf]/25",
    accent: "from-[#7c5cbf]",
  },
};

const defaultConfig = {
  bg: "bg-slate-100",
  text: "text-slate-600",
  border: "border-slate-200",
  accent: "from-slate-400",
};

function getInitials(name: string): string {
  return name
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const handlePrev = useCallback(() => {
    setDirection("prev");
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setDirection("next");
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  return (
    <div className="mt-12 max-w-2xl mx-auto">
      {/* Card area */}
      <div className="relative">
        {/* Subtle ambient glow */}
        <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-[#189b9b]/8 via-transparent to-[#7c5cbf]/8 blur-2xl pointer-events-none" />

        <div className="relative min-h-[260px] sm:min-h-[230px]">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            const config = roleConfig[item.role] ?? defaultConfig;
            const initials = getInitials(item.name);

            return (
              <div
                key={item.name}
                className={[
                  "absolute inset-0 flex flex-col justify-between",
                  "rounded-[2.5rem] border bg-white/75 dark:bg-[#1a1727]/50",
                  "border-slate-200/60 dark:border-white/8",
                  "p-8 sm:p-10 shadow-sm backdrop-blur-md",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive
                    ? "opacity-100 translate-x-0 scale-100 pointer-events-auto z-10"
                    : direction === "next"
                    ? "opacity-0 translate-x-6 scale-[0.97] pointer-events-none z-0"
                    : "opacity-0 -translate-x-6 scale-[0.97] pointer-events-none z-0",
                ].join(" ")}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full bg-gradient-to-r ${config.accent} to-transparent opacity-60`} />

                {/* Decorative quote mark */}
                <span className="absolute top-4 left-5 text-5xl font-sans font-light text-slate-300/50 dark:text-slate-600/40 pointer-events-none select-none leading-none">
                  &ldquo;
                </span>

                <div className="relative z-10 space-y-5">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#d8a444] text-[#d8a444]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-100">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Footer: Avatar + name/role */}
                <div className="relative z-10 mt-6 flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className={[
                      "flex h-11 w-11 flex-shrink-0 items-center justify-center",
                      "rounded-2xl text-sm font-bold",
                      config.bg,
                      config.text,
                    ].join(" ")}
                  >
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                      {item.name}
                    </p>
                    {/* Role badge */}
                    <span
                      className={[
                        "mt-1 inline-flex items-center rounded-full px-2.5 py-0.5",
                        "text-[11px] font-bold uppercase tracking-wider border",
                        config.bg,
                        config.text,
                        config.border,
                      ].join(" ")}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-5 mt-8">
        <button
          onClick={handlePrev}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-800 dark:hover:text-white transition-all duration-200 shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? "next" : "prev");
                setActiveIndex(idx);
              }}
              className={[
                "rounded-full transition-all duration-300",
                idx === activeIndex
                  ? "w-6 h-2 bg-[#189b9b]"
                  : "w-2 h-2 bg-slate-200 dark:bg-white/15 hover:bg-slate-300 dark:hover:bg-white/25",
              ].join(" ")}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-white/5 border border-slate-200/70 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-800 dark:hover:text-white transition-all duration-200 shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
