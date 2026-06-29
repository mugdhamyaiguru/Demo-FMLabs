"use client";

import { useState } from "react";
import { CheckCircle2, Circle, XCircle } from "lucide-react";
import { AppShell, BackLink } from "@/components/page-shell";
import { GlassCard, ProgressBar } from "@/components/platform";
import { quizQuestions } from "@/lib/mock-data";

export default function QuizPage() {
  // Pre-populate answers to match the 100% score example:
  // Question 1: 1 (Voice Assistant), Question 2: 2 (Learn patterns), Question 3: 3 (Recommendations)
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({
    0: 1,
    1: 2,
    2: 3,
  });

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const attemptedCount = Object.keys(selectedOptions).length;
  const unattemptedCount = quizQuestions.length - attemptedCount;

  let correctCount = 0;
  quizQuestions.forEach((q, idx) => {
    if (selectedOptions[idx] !== undefined && selectedOptions[idx] === q.answer) {
      correctCount++;
    }
  });

  const incorrectCount = attemptedCount - correctCount;
  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
  
  // Custom XP calculation: 25 XP for 3/3, else scale: 15 XP for 2/3, 5 XP for 1/3, 0 for 0/3
  const finalScore = correctCount === 3 ? 25 : correctCount === 2 ? 15 : correctCount === 1 ? 5 : 0;

  return (
    <AppShell active="Dashboard" title="Quiz System" hideTopbar={true}>
      <div className="w-full space-y-8 pb-12">
        {/* Navigation */}
        <div>
          <BackLink href="/student" label="Back to Dashboard" />
        </div>



        {/* Stacked Question Cards */}
        <div className="space-y-6">
          {quizQuestions.map((question, idx) => {
            return (
              <GlassCard key={question.prompt} className="p-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal">
                    Question {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-ink dark:text-white mt-2">
                    {question.prompt}
                  </h3>
                </div>

                {/* Option choices in a clean 2x2 grid */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selectedOptions[idx] === optionIndex;
                    const isCorrect = optionIndex === question.answer;

                    let btnClass = "flex items-center gap-3 rounded-2xl border border-royal/10 dark:border-white/5 bg-surface px-5 py-4 text-left font-semibold text-ink dark:text-white transition-all w-full hover:bg-royal/5 dark:hover:bg-white/5";
                    let icon = <Circle className="h-5 w-5 text-slate-400 flex-shrink-0" />;

                    if (isSelected) {
                      if (isCorrect) {
                        btnClass = "flex items-center gap-3 rounded-2xl border border-teal bg-teal/10 px-5 py-4 text-left font-semibold text-ink dark:text-white transition-all w-full";
                        icon = <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0" />;
                      } else {
                        btnClass = "flex items-center gap-3 rounded-2xl border border-crimson bg-crimson/10 px-5 py-4 text-left font-semibold text-ink dark:text-white transition-all w-full";
                        icon = <XCircle className="h-5 w-5 text-crimson flex-shrink-0" />;
                      }
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => handleSelect(idx, optionIndex)}
                        className={btnClass}
                      >
                        {icon}
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Small Feedback Panel */}
                {selectedOptions[idx] !== undefined && (
                  <div className={`mt-5 rounded-2xl p-4 flex gap-3 items-start text-sm border ${
                    selectedOptions[idx] === question.answer
                      ? "bg-teal/5 dark:bg-teal/10 border-teal/25 dark:border-teal/30 text-ink dark:text-[#eeeaf8]"
                      : "bg-crimson/5 dark:bg-crimson/10 border-crimson/25 dark:border-crimson/30 text-ink dark:text-[#eeeaf8]"
                  }`}>
                    {selectedOptions[idx] === question.answer ? (
                      <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-crimson flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className={`font-bold mb-1 ${
                        selectedOptions[idx] === question.answer ? "text-teal" : "text-crimson"
                      }`}>
                        {selectedOptions[idx] === question.answer ? "Correct!" : "Incorrect"}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        {selectedOptions[idx] === question.answer
                          ? question.feedback.correct
                          : question.feedback.incorrect}
                      </p>
                    </div>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

        {/* Quiz Summary Section */}
        <GlassCard className="p-8">
          <h3 className="text-lg font-bold text-ink dark:text-white mb-6">Quiz Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-6 md:gap-y-0 text-center">
            {/* Final Score */}
            <div className="flex flex-col items-center justify-center py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Final Score
              </span>
              <span className="mt-2 text-3xl font-black text-ink dark:text-white">
                {finalScore} XP
              </span>
            </div>

            {/* Attempted */}
            <div className="flex flex-col items-center justify-center py-2 border-l border-slate-200/20 dark:border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Attempted
              </span>
              <span className="mt-2 text-3xl font-black text-ink dark:text-white">
                {attemptedCount}/3
              </span>
            </div>

            {/* Unattempted */}
            <div className="flex flex-col items-center justify-center py-2 border-l-0 md:border-l border-slate-200/20 dark:border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Unattempted
              </span>
              <span className="mt-2 text-3xl font-black text-ink dark:text-white">
                {unattemptedCount}
              </span>
            </div>

            {/* Correct */}
            <div className="flex flex-col items-center justify-center py-2 border-l border-slate-200/20 dark:border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Correct
              </span>
              <span className="mt-2 text-3xl font-black text-teal">
                {correctCount}
              </span>
            </div>

            {/* Incorrect */}
            <div className="flex flex-col items-center justify-center py-2 border-l-0 md:border-l border-slate-200/20 dark:border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Incorrect
              </span>
              <span className="mt-2 text-3xl font-black text-crimson">
                {incorrectCount}
              </span>
            </div>

            {/* Accuracy */}
            <div className="flex flex-col items-center justify-center py-2 border-l border-slate-200/20 dark:border-white/5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Accuracy
              </span>
              <span className="mt-2 text-3xl font-black text-[#d8a444] dark:text-[#ffd089]">
                {accuracy}%
              </span>
            </div>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}