"use client";

import { useEffect, useState } from "react";

const TUTOR_STEPS = [
  "Explaining Newton's Laws...",
  "Deriving: Force = Mass × Acceleration",
  "Sketching Free Body Diagram...",
  "Explaining Action & Reaction forces...",
  "Generating tailored practice quiz...",
  "AI Analysis: Checking your equations...",
  "Incredible! 120 XP earned! 🎉"
];

export default function AITutorLive() {
  const [stepIdx, setStepIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = TUTOR_STEPS[stepIdx];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 60);
      } else {
        // Pause at full text
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        // Shift to next phrase
        setIsDeleting(false);
        setStepIdx((prev) => (prev + 1) % TUTOR_STEPS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, stepIdx]);

  return (
    <p className="mt-1 text-xs text-slate-300 dark:text-slate-400 font-medium h-4 flex items-center">
      <span>&ldquo;{displayText}</span>
      <span className="inline-block w-1.5 h-3 ml-0.5 bg-teal border-l-2 animate-cursor" />
      <span>&rdquo;</span>
    </p>
  );
}
