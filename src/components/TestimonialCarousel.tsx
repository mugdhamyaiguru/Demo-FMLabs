"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  category: string;
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
}

const roleConfig: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  Student: {
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

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0); // 0 to items.length - 1
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cloned items for infinite slider: clone last 3 at the start, first 3 at the end
  const extendedItems = [
    ...items.slice(-3),
    ...items,
    ...items.slice(0, 3),
  ];

  const handlePrev = useCallback(() => {
    if (isMoving) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isMoving]);

  const handleNext = useCallback(() => {
    if (isMoving) return;
    setIsMoving(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isMoving]);

  // Handle loop wrap after transition finishes
  useEffect(() => {
    const transitionTimer = setTimeout(() => {
      if (currentIndex === items.length) {
        setIsTransitioning(false);
        setCurrentIndex(0);
      } else if (currentIndex === -1) {
        setIsTransitioning(false);
        setCurrentIndex(items.length - 1);
      }
      setIsMoving(false);
    }, 500); // matches the transition duration (500ms)

    return () => clearTimeout(transitionTimer);
  }, [currentIndex, items.length]);

  // Re-enable transitions after jumping
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, currentIndex, handleNext]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const handleDotClick = (idx: number) => {
    if (isMoving || idx === currentIndex) return;
    setIsMoving(true);
    setCurrentIndex(idx);
  };

  // Active indicator dot calculation
  const activeDotIndex = (currentIndex + items.length) % items.length;

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-12 sm:px-16 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Window */}
      <div className="relative overflow-hidden py-4">
        {/* Subtle ambient glow backing */}
        <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-[#189b9b]/5 via-transparent to-[#7c5cbf]/5 blur-2xl pointer-events-none" />

        <div
          className={cn(
            "flex items-stretch -mx-4",
            isTransitioning ? "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" : "transition-none"
          )}
          style={{
            transform: `translateX(-${(currentIndex + 3) * (100 / itemsPerView)}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedItems.map((item, idx) => {
            const config = roleConfig[item.category] ?? defaultConfig;
            const initials = getInitials(item.name);

            return (
              <div key={idx} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                <div className="group relative flex flex-col justify-between rounded-[2.5rem] border border-slate-200/60 dark:border-white/8 bg-white/75 dark:bg-[#1a1727]/50 p-8 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300/70 dark:hover:border-white/12 overflow-hidden h-full">
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full bg-gradient-to-r ${config.accent} to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100`} />



                  <div className="relative z-10 space-y-5">
                    {/* Stars & Badge Row */}
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-[#d8a444] text-[#d8a444]"
                          />
                        ))}
                      </div>
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider border",
                          config.bg,
                          config.text,
                          config.border
                        )}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 mt-8 flex items-center gap-3.5">
                    <div
                      className={cn(
                        "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-bold",
                        config.bg,
                        config.text
                      )}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5 truncate">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Side Navigation Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-1 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-[#1a1727]/70 backdrop-blur-sm border border-slate-200/50 dark:border-white/5 text-[#d8a444] shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:bg-white/90 dark:hover:bg-[#1a1727]/90 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5 text-[#d8a444]" strokeWidth={2.5} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-1 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-[#1a1727]/70 backdrop-blur-sm border border-slate-200/50 dark:border-white/5 text-[#d8a444] shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:bg-white/90 dark:hover:bg-[#1a1727]/90 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5 text-[#d8a444]" strokeWidth={2.5} />
      </button>


    </div>
  );
}
