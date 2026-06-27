"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { BookOpen, Clock3, HelpCircle, PlayCircle, Sparkles, Target, ArrowLeft, ArrowRight, ThumbsUp, ThumbsDown, Flag } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";
import Link from "next/link";

interface ModuleDetail {
  subject: string;
  subtitle: string;
  description: string;
  difficulty: string;
  time: string;
  xp: number;
  progress: number;
  confidence: number;
  path: string[];
  videoTitle: string;
  videoDesc: string;
  blocks: string[];
}

const MODULE_LESSONS: Record<string, ModuleDetail> = {
  "Introduction to AI in Everyday life": {
    subject: "Mathematics",
    subtitle: "Understanding Fractions",
    description: "Learn how parts of a whole work using visuals, examples, and hands-on practice.",
    difficulty: "Beginner",
    time: "12 min",
    xp: 120,
    progress: 72,
    confidence: 84,
    path: ["Warm-up", "Concept video", "Guided activity", "Mini project", "Quick quiz"],
    videoTitle: "Intro to Fractions Lab",
    videoDesc: "Short animated lesson intro introducing denominators and numerators.",
    blocks: [
      "Watch the example carefully, then try the guided activity.",
      "Use the helper hints if you get stuck on the next step.",
      "Apply the concept in the mini project before moving on.",
    ]
  },
  "Basic Data Concepts": {
    subject: "Science",
    subtitle: "Kinetic vs Potential Energy",
    description: "Explore how energy morphs and travels through mechanical and thermal systems.",
    difficulty: "Intermediate",
    time: "15 min",
    xp: 140,
    progress: 41,
    confidence: 60,
    path: ["Energy Basics", "Thermodynamics Video", "Solar panel sandbox", "Roller coaster project", "Energy quiz"],
    videoTitle: "Energy Conservation Principles",
    videoDesc: "Visual guide showing the transition between kinetic and potential energy fields.",
    blocks: [
      "Observe the pendulum swings and note when potential energy is at its maximum.",
      "Use the simulator to frictionally heat the track and see thermal energy dissipation.",
      "Construct a double-loop roller coaster that preserves mechanical energy.",
    ]
  },
  "Ethics and Digital Responsibilty": {
    subject: "Computer Basics",
    subtitle: "Variables & Print Operations",
    description: "Step into programming with variables, basic data types, and output statements.",
    difficulty: "Beginner",
    time: "18 min",
    xp: 160,
    progress: 58,
    confidence: 75,
    path: ["Code syntax", "Variables video", "Write print statement", "Chatbot game project", "Syntax check"],
    videoTitle: "Declaring Variables in Python",
    videoDesc: "Understand strings, integers, and floats, and how computer memory holds value.",
    blocks: [
      "Declare your first string variable named student_name.",
      "Print a customized greeting statement combining strings and variables.",
      "Build a terminal chatbot that takes user input and echoes responses.",
    ]
  },
  "Linear Patterns": {
    subject: "Mathematics",
    subtitle: "Graphing y = mx + c",
    description: "Learn how to spot number patterns and represent them visually on coordinate grids.",
    difficulty: "Advanced",
    time: "20 min",
    xp: 180,
    progress: 26,
    confidence: 50,
    path: ["Sequence rules", "Linear Equations video", "Graph plotter", "Forecasting project", "Linear Quiz"],
    videoTitle: "Slope & Intercept Walkthrough",
    videoDesc: "Graphic explanation of changes in gradient slope m and vertical offset intercept c.",
    blocks: [
      "Find the general formula for the arithmetic sequence 3, 7, 11, 15...",
      "Plot coordinate points using the equation and verify the straight slope line.",
      "Forecast next week's performance data trend using linear extrapolation.",
    ]
  },
  "Cell Explorer": {
    subject: "Science",
    subtitle: "Inner Organelles of a Cell",
    description: "Zoom into micro biology to inspect cell organelles and their vital functions.",
    difficulty: "Beginner",
    time: "11 min",
    xp: 130,
    progress: 88,
    confidence: 95,
    path: ["Organelle quiz", "Plant vs Animal video", "Microscope simulation", "Cell wall project", "Cytology quiz"],
    videoTitle: "Nucleus & Mitochondria Duties",
    videoDesc: "Animated journey inside cellular walls showing ribosome construction and ATP creation.",
    blocks: [
      "Label plant cell organelles and note the function of the cell wall and vacuole.",
      "Use the virtual microscope to trace and count mitochondria in animal cells.",
      "Simulate cell membrane permeability under varying solute solutions.",
    ]
  },
  "Internet Safety": {
    subject: "Computer Basics",
    subtitle: "Securing your Digital Space",
    description: "Protect your personal details by mastering security, encryption, and secure browsing.",
    difficulty: "Intermediate",
    time: "14 min",
    xp: 150,
    progress: 33,
    confidence: 55,
    path: ["Phishing email game", "2FA & Passwords video", "Firewall setup simulator", "Secure coding project", "Cyber hygiene quiz"],
    videoTitle: "Cryptography and Authentication",
    videoDesc: "How hashing protects passwords and why multi-factor authorization keeps accounts safe.",
    blocks: [
      "Spot the red flags in a simulated phishing email campaign.",
      "Calculate the entropy strength of different password characters.",
      "Activate a firewall ruleset blocking unauthorized port entry packets.",
    ]
  }
};

const defaultModule: ModuleDetail = {
  subject: "Mathematics",
  subtitle: "Understanding Fractions",
  description: "Learn how parts of a whole work using visuals, examples, and hands-on practice.",
  difficulty: "Beginner",
  time: "12 min",
  xp: 120,
  progress: 68,
  confidence: 84,
  path: ["Warm-up", "Concept video", "Guided activity", "Mini project", "Quick quiz"],
  videoTitle: "Intro to Fractions Lab",
  videoDesc: "Short animated lesson intro introducing denominators and numerators.",
  blocks: [
    "Watch the example carefully, then try the guided activity.",
    "Use the helper hints if you get stuck on the next step.",
    "Apply the concept in the mini project before moving on.",
  ]
};

function LessonInner() {
  const searchParams = useSearchParams();
  const moduleParam = searchParams.get("module") || "Introduction to AI in Everyday life";
  const decodedModule = decodeURIComponent(moduleParam);
  const detail = MODULE_LESSONS[decodedModule] || defaultModule;

  const [activeStep, setActiveStep] = useState(1);

  const subjectPillTone = 
    detail.subject === "Mathematics" ? "teal" : 
    detail.subject === "Science" ? "marigold" : "gold";

  return (
    <div className="space-y-6">
      {/* Back button header */}
      <div className="flex items-center justify-between">
        <Link 
          href="/modules" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-all hover:text-[#148282] hover:-translate-x-0.5"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Modules
        </Link>
        <span className="text-[10px] font-bold text-slate-400 tracking-wider">MODULE PREVIEW</span>
      </div>

      {/* Main 2-Column Responsive Workspace Grid */}
      <div className="grid gap-6 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px]">
        
        {/* Left Column: Interactive Workspace Hub */}
        <div className="space-y-6">
          
          {/* Interactive Workspace Card */}
          <GlassCard className="overflow-hidden p-0 dark:bg-[#1e1b2e]/85 dark:border-white/8 shadow-md">
            <div className="p-6 space-y-6">
              
              {/* Media Player Container */}
              <div className="aspect-video rounded-[2rem] border border-royal/10 dark:border-white/5 bg-gradient-to-br from-slate-950 to-slate-900 relative group overflow-hidden shadow-md">
                {/* Immersive dark learning sandbox grid backdrop */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,30,0.65),rgba(18,16,30,0.85))] z-10" />
                <div 
                  className="absolute inset-0 opacity-15 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                  style={{ 
                    backgroundImage: `radial-gradient(circle at center, transparent 30%, #12101e 80%), url('/brain-logo.jpg')`,
                    backgroundSize: '160px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                  }} 
                />
                
                {/* Floating mathematical or binary pattern overlay */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none z-10" 
                  style={{
                    backgroundImage: 'radial-gradient(rgba(24, 155, 155, 0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                  {/* Top Bar info */}
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="rounded-full bg-black/60 border border-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-teal backdrop-blur-sm uppercase">
                      Interactive Workspace
                    </span>
                    <span className="rounded-full bg-black/60 border border-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-white/70 backdrop-blur-sm uppercase">
                      Step {activeStep} of {detail.path.length}
                    </span>
                  </div>

                  {/* Play Interface */}
                  <div className="text-center space-y-4 px-6 my-auto">
                    <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white group-hover:border-teal/30 cursor-pointer shadow-2xl relative">
                      <PlayCircle className="h-10 w-10 text-teal group-hover:text-white transition-colors" />
                      <div className="absolute -inset-1.5 rounded-full border border-teal/20 animate-ping group-hover:hidden" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug">{detail.videoTitle}</h3>
                      <p className="mt-1.5 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">{detail.videoDesc}</p>
                    </div>
                  </div>

                  {/* Player controls bar */}
                  <div className="flex items-center justify-between text-[11px] text-white/90 font-bold bg-black/55 border border-white/5 rounded-2xl px-4 py-3 backdrop-blur-md transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <div className="flex items-center gap-3">
                      <button className="hover:text-teal transition-all duration-150 active:scale-90">
                        <svg className="h-5.5 w-5.5 text-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </button>
                      <span className="font-mono text-white/70">00:00 / {detail.time}</span>
                    </div>
                    
                    {/* Scrub bar */}
                    <div className="flex-1 mx-4 h-1 rounded-full bg-white/20 relative cursor-pointer overflow-hidden group/scrub">
                      <div className="absolute top-0 left-0 bottom-0 w-0 bg-gradient-to-r from-teal to-[#5bcac8] transition-all duration-300 group-hover/scrub:h-1.5" />
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button className="hover:text-teal transition-colors" title="Volume">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                        </svg>
                      </button>
                      <button className="hover:text-teal transition-colors" title="Fullscreen">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action and Feedback Buttons Row */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-200/40 dark:border-white/5 pt-4">
                {/* Left: Feedback controls */}
                <div className="flex items-center gap-6 text-blue-600 dark:text-blue-400">
                  <button className="flex items-center gap-2 hover:opacity-85 transition-opacity duration-150 active:scale-95">
                    <ThumbsUp className="h-5 w-5" />
                    <span className="text-sm font-bold">Like</span>
                  </button>
                  <button className="flex items-center gap-2 hover:opacity-85 transition-opacity duration-150 active:scale-95">
                    <ThumbsDown className="h-5 w-5" />
                    <span className="text-sm font-bold">Dislike</span>
                  </button>
                  <button className="flex items-center gap-2 hover:opacity-85 transition-opacity duration-150 active:scale-95">
                    <Flag className="h-5 w-5" />
                    <span className="text-sm font-bold">Report an issue</span>
                  </button>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-[#36a5a3] hover:from-[#1b8d8b] hover:to-[#2c9896] px-5 py-2.5 text-xs font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Mark Complete
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full border border-royal/15 bg-white dark:bg-white/5 dark:border-white/10 px-5 py-2.5 text-xs font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal active:scale-95">
                    Start Quiz
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </GlassCard>

          {/* Instructions Step Cards (Wider grid layout) */}
          <div className="grid gap-5 md:grid-cols-3">
            {detail.blocks.map((block, index) => (
              <div 
                key={block} 
                className="group rounded-[2rem] border border-slate-200/40 bg-white/40 dark:bg-white/5 dark:border-white/5 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:bg-white/80 dark:hover:bg-[#25203c]/85 relative"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition-all duration-300 shadow-sm relative">
                  <Sparkles className="h-4.5 w-4.5" />
                  <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-royal text-white text-[10px] font-black shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h4 className="mt-5 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Step Concept 0{index + 1}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-650 dark:text-slate-350 font-semibold">{block}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Widgets / Lesson Navigation */}
        <div className="space-y-6">
          
           {/* Combined Lesson Path & Progress Tracker Card */}
          <GlassCard className="p-5 space-y-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            {/* Lesson Path Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 pb-3">
                <h3 className="text-sm font-bold text-ink uppercase tracking-wider">Lesson Path</h3>
                <Pill tone={subjectPillTone}>Active Step {activeStep}/{detail.path.length}</Pill>
              </div>
              
              <div className="relative pl-1.5 mt-5 space-y-5">
                {/* Stepper connecting line */}
                <div className="absolute left-[15px] top-3.5 bottom-3.5 w-[2px] bg-slate-200 dark:bg-slate-700/60" />
                
                {detail.path.map((step, index) => {
                  const stepNum = index + 1;
                  const isActive = activeStep === stepNum;
                  const isCompleted = stepNum < activeStep;
                  
                  return (
                    <button
                      key={step}
                      onClick={() => setActiveStep(stepNum)}
                      className="relative w-full flex items-start gap-4 text-left group focus:outline-none"
                    >
                      {/* Indicator node */}
                      <div className="relative z-10 flex h-7.5 w-7.5 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300">
                        {isCompleted ? (
                          <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-teal text-white shadow-glow">
                            <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : isActive ? (
                          <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-royal text-white shadow-md ring-4 ring-royal/20 font-bold text-xs">
                            {stepNum}
                          </div>
                        ) : (
                          <div className="flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-400 group-hover:border-teal group-hover:text-teal dark:border-slate-700 dark:bg-slate-900 transition-colors font-bold text-xs">
                            {stepNum}
                          </div>
                        )}
                      </div>
                      
                      {/* Text description */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <p className={`text-xs transition-colors leading-tight ${
                          isActive 
                            ? "text-royal dark:text-teal font-extrabold" 
                            : "text-ink font-semibold group-hover:text-teal"
                        }`}>
                          {step}
                        </p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Estimated 3-5 min</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="h-px bg-slate-200/40 dark:bg-white/5" />

            {/* Progress Tracker Section */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 pb-3">
                <h3 className="text-sm font-bold text-ink uppercase tracking-wider">Progress Tracker</h3>
                <Target className="h-4 w-4 text-marigold" />
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-1.5 flex justify-between text-xs font-bold">
                    <span className="text-slate-500">Lesson progress</span>
                    <span className="font-extrabold text-teal">{detail.progress}%</span>
                  </div>
                  <ProgressBar value={detail.progress} accent="teal" />
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-xs font-bold">
                    <span className="text-slate-550">Topic confidence</span>
                    <span className="font-extrabold text-marigold">{detail.confidence}%</span>
                  </div>
                  <ProgressBar value={detail.confidence} accent="marigold" />
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Quick Help Card */}
          <GlassCard className="p-5 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 pb-3">
              <h3 className="text-sm font-bold text-ink uppercase tracking-wider">Quick Help</h3>
              <HelpCircle className="h-4 w-4 text-teal" />
            </div>
            <div className="mt-4 space-y-2.5 text-xs font-semibold">
              <div className="flex items-center gap-3 rounded-2xl bg-surface dark:bg-slate-800/35 border border-royal/5 dark:border-white/5 p-3.5 text-slate-500 hover:border-teal/40 hover:bg-white dark:hover:bg-slate-800/80 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md group">
                <span className="text-base group-hover:scale-110 transition-transform">🤖</span>
                <span className="text-ink">Mini AI Tutor Chat</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-surface dark:bg-slate-800/35 border border-royal/5 dark:border-white/5 p-3.5 text-slate-500 hover:border-teal/40 hover:bg-white dark:hover:bg-slate-800/80 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md group">
                <span className="text-base group-hover:scale-110 transition-transform">💡</span>
                <span className="text-ink">Reveal Step-by-Step Hint</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-surface dark:bg-slate-800/35 border border-royal/5 dark:border-white/5 p-3.5 text-slate-500 hover:border-teal/40 hover:bg-white dark:hover:bg-slate-800/80 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md group">
                <span className="text-base group-hover:scale-110 transition-transform">❓</span>
                <span className="text-ink">Request Tutor Explanation</span>
              </div>
            </div>
          </GlassCard>

          {/* Ask AI Tutor CTA Link */}
          <Link href="/tutor" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-royal to-indigo-900 hover:from-indigo-900 hover:to-royal py-3.5 text-sm font-bold text-white shadow-lg shadow-royal/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-98">
            <Sparkles className="h-4 w-4 text-teal animate-pulse" />
            Need help? Ask AI Tutor
          </Link>

        </div>

      </div>
    </div>
  );
}

export default function LessonPage() {
  return (
    <AppShell active="Modules" title="Lesson View">
      <Suspense fallback={<div className="p-6 text-center text-sm font-semibold text-slate-400">Loading lesson workspace...</div>}>
        <LessonInner />
      </Suspense>
    </AppShell>
  );
}