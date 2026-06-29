"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { 
  PlayCircle, Sparkles, Target, ArrowLeft, ArrowRight, ThumbsUp, ThumbsDown, Flag, 
  PanelLeftClose, PanelLeftOpen, CheckCircle, Circle, ChevronDown, ChevronUp, Menu, Lock 
} from "lucide-react";
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

interface LessonItem {
  id: string;
  title: string;
  duration: string;
  state: "completed" | "current" | "locked";
}

interface ModuleSection {
  id: string;
  title: string;
  subtitle: string;
  lessons: LessonItem[];
}

const COURSE_MODULES: Record<string, ModuleSection[]> = {
  "Introduction to AI in Everyday life": [
    {
      id: "mod-1",
      title: "Module 1",
      subtitle: "Meaning of AI",
      lessons: [
        { id: "les-1-1", title: "Discover", duration: "5 min", state: "current" },
        { id: "les-1-2", title: "Learn", duration: "7 min", state: "locked" },
        { id: "les-1-3", title: "Explore", duration: "6 min", state: "locked" },
        { id: "les-1-4", title: "Think", duration: "5 min", state: "locked" },
        { id: "les-1-5", title: "Create", duration: "8 min", state: "locked" },
        { id: "les-1-6", title: "Review", duration: "4 min", state: "locked" }
      ]
    },
    {
      id: "mod-2",
      title: "Module 2",
      subtitle: "AI in Daily Life",
      lessons: [
        { id: "les-2-1", title: "Discover", duration: "5 min", state: "locked" },
        { id: "les-2-2", title: "Learn", duration: "7 min", state: "locked" },
        { id: "les-2-3", title: "Explore", duration: "6 min", state: "locked" },
        { id: "les-2-4", title: "Think", duration: "5 min", state: "locked" },
        { id: "les-2-5", title: "Create", duration: "8 min", state: "locked" },
        { id: "les-2-6", title: "Review", duration: "4 min", state: "locked" }
      ]
    },
    {
      id: "mod-3",
      title: "Module 3",
      subtitle: "AI vs Machine Learning",
      lessons: [
        { id: "les-3-1", title: "Discover", duration: "5 min", state: "locked" },
        { id: "les-3-2", title: "Learn", duration: "7 min", state: "locked" },
        { id: "les-3-3", title: "Explore", duration: "6 min", state: "locked" },
        { id: "les-3-4", title: "Think", duration: "5 min", state: "locked" },
        { id: "les-3-5", title: "Create", duration: "8 min", state: "locked" },
        { id: "les-3-6", title: "Review", duration: "4 min", state: "locked" }
      ]
    },
    {
      id: "mod-4",
      title: "Module 4",
      subtitle: "Types of Learning in AI",
      lessons: [
        { id: "les-4-1", title: "Discover", duration: "5 min", state: "locked" },
        { id: "les-4-2", title: "Learn", duration: "7 min", state: "locked" },
        { id: "les-4-3", title: "Explore", duration: "6 min", state: "locked" },
        { id: "les-4-4", title: "Think", duration: "5 min", state: "locked" },
        { id: "les-4-5", title: "Create", duration: "8 min", state: "locked" },
        { id: "les-4-6", title: "Review", duration: "4 min", state: "locked" }
      ]
    }
  ]
};

const CUSTOM_LESSON_DETAILS: Record<string, { title: string; desc: string; time: string }> = {
  // Module 1: Meaning of AI
  "les-1-1": { title: "Discover", desc: "Learn the basics of AI and how it is part of our everyday life.", time: "5 min" },
  "les-1-2": { title: "Learn", desc: "Deep dive into core concepts and definitions of AI.", time: "7 min" },
  "les-1-3": { title: "Explore", desc: "Exploring early examples and simple rule-based systems.", time: "6 min" },
  "les-1-4": { title: "Think", desc: "Critical thinking questions on the capabilities of AI.", time: "5 min" },
  "les-1-5": { title: "Create", desc: "Hands-on project to design your own simple logic tree.", time: "8 min" },
  "les-1-6": { title: "Review", desc: "Review session covering the key takeaways of Module 1.", time: "4 min" },

  // Module 2: AI in Daily Life
  "les-2-1": { title: "Discover", desc: "Spotting AI technologies in your household and daily routine.", time: "5 min" },
  "les-2-2": { title: "Learn", desc: "How virtual assistants, maps, and recommendations use AI.", time: "7 min" },
  "les-2-3": { title: "Explore", desc: "Exploring recommendation algorithms on media platforms.", time: "6 min" },
  "les-2-4": { title: "Think", desc: "Analyzing privacy and customization in daily AI systems.", time: "5 min" },
  "les-2-5": { title: "Create", desc: "Build a simple model of a smart home routine helper.", time: "8 min" },
  "les-2-6": { title: "Review", desc: "Revisiting AI applications in everyday contexts.", time: "4 min" },

  // Module 3: AI vs Machine Learning
  "les-3-1": { title: "Discover", desc: "Comparing machine learning with traditional programming.", time: "5 min" },
  "les-3-2": { title: "Learn", desc: "Understanding supervised and unsupervised training models.", time: "7 min" },
  "les-3-3": { title: "Explore", desc: "Interactive playground to see pattern recognition in action.", time: "6 min" },
  "les-3-4": { title: "Think", desc: "Ethical questions about machine learning biases and inputs.", time: "5 min" },
  "les-3-5": { title: "Create", desc: "Train a simple image classifier model in a sandbox.", time: "8 min" },
  "les-3-6": { title: "Review", desc: "Summary of ML vs AI structures and models.", time: "4 min" },

  // Module 4: Types of Learning in AI
  "les-4-1": { title: "Discover", desc: "An overview of reinforcement learning and neural patterns.", time: "5 min" },
  "les-4-2": { title: "Learn", desc: "How neural networks learn from rewards and feedback.", time: "7 min" },
  "les-4-3": { title: "Explore", desc: "Simulating neural pathways and activation gates.", time: "6 min" },
  "les-4-4": { title: "Think", desc: "Pondering the limits of deep learning architectures.", time: "5 min" },
  "les-4-5": { title: "Create", desc: "Design a reinforcement agent path solver map.", time: "8 min" },
  "les-4-6": { title: "Review", desc: "Recapping types of learning and final module wrap-up.", time: "4 min" }
};

function LessonInner() {
  const searchParams = useSearchParams();
  const moduleParam = searchParams.get("module") || "Introduction to AI in Everyday life";
  const decodedModule = decodeURIComponent(moduleParam);
  const detail = MODULE_LESSONS[decodedModule] || defaultModule;

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Generate dynamic sections if they aren't pre-defined (e.g. for other module pages)
  const sections = COURSE_MODULES[decodedModule] || [
    {
      id: "mod-1",
      title: "Module 1",
      subtitle: detail.subtitle,
      lessons: detail.path.map((step, idx) => ({
        id: `les-dyn-${idx}`,
        title: step,
        duration: idx === 1 ? detail.time : `${5 + (idx * 2) % 7} min`,
        state: idx === 0 ? "completed" as const : idx === 1 ? "current" as const : "locked" as const
      }))
    }
  ];

  const allLessons = sections.flatMap(s => s.lessons);
  
  const [activeLessonId, setActiveLessonId] = useState(() => {
    const currentLesson = allLessons.find(l => l.state === "current") || allLessons[0];
    return currentLesson?.id || "les-1";
  });

  const [expandedModuleId, setExpandedModuleId] = useState(() => {
    const initialExpanded = sections.find(s => s.lessons.some(l => l.id === activeLessonId)) || sections[0];
    return initialExpanded?.id || "";
  });

  useEffect(() => {
    const initialExpanded = sections.find(s => s.lessons.some(l => l.id === activeLessonId)) || sections[0];
    if (initialExpanded) {
      setExpandedModuleId(initialExpanded.id);
    }
  }, [decodedModule]);

  const activeIndex = allLessons.findIndex(l => l.id === activeLessonId);

  const getLessonDetail = (lessonId: string) => {
    if (CUSTOM_LESSON_DETAILS[lessonId]) {
      return CUSTOM_LESSON_DETAILS[lessonId];
    }
    // Fallback/dynamic parse
    const idx = allLessons.findIndex(l => l.id === lessonId);
    return {
      title: allLessons[idx]?.title || detail.videoTitle,
      desc: idx === 1 ? detail.videoDesc : `Guided instruction block for step: ${allLessons[idx]?.title || "Overview"}.`,
      time: idx === 1 ? detail.time : `${5 + (idx * 2) % 7} min`
    };
  };

  const activeLessonDetail = getLessonDetail(activeLessonId);

  const toggleModule = (modId: string) => {
    setExpandedModuleId(expandedModuleId === modId ? "" : modId);
  };

  return (
    <div className="space-y-6">
      {/* Back button and header */}
      <div className="flex items-center justify-between">
        <Link 
          href="/modules" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-all hover:text-[#148282] hover:-translate-x-0.5"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Modules
        </Link>
        <span className="text-[10px] font-bold text-slate-400 tracking-wider">MODULE PREVIEW</span>
      </div>

      {/* Main 2-Column Responsive Workspace Flexbox */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Sidebar Column (Coursera-style Lesson Navigator) */}
        {isSidebarOpen ? (
          <GlassCard className="p-0 dark:bg-[#1e1b2e]/85 dark:border-white/8 w-full lg:w-[320px] xl:w-[340px] shrink-0 h-[680px] flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out relative shadow-lg">
            
            {/* Sidebar Header */}
            <div className="p-5 border-b border-slate-200/40 dark:border-white/5 flex items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <span className="text-[10px] font-bold tracking-widest text-teal uppercase">Course Navigator</span>
                <h3 className="text-sm font-extrabold text-ink leading-snug">
                  {decodedModule === "Introduction to AI in Everyday life" 
                    ? "Introduction to Artificial Intelligence and Everyday Examples" 
                    : decodedModule}
                </h3>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-slate-400 hover:text-teal p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex-shrink-0"
                title="Close Sidebar"
              >
                <PanelLeftClose className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Modules List - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {sections.map((section) => {
                const isExpanded = expandedModuleId === section.id;
                return (
                  <div key={section.id} className="border border-slate-200/30 dark:border-white/5 rounded-2xl overflow-hidden bg-white/10 dark:bg-white/2">
                    {/* Module Header Button */}
                    <button
                      onClick={() => toggleModule(section.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                    >
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">{section.title}</span>
                        <h4 className="text-xs font-bold text-ink mt-0.5">{section.subtitle}</h4>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                      )}
                    </button>

                    {/* Lessons list inside module */}
                    {isExpanded && (
                      <div className="border-t border-slate-200/30 dark:border-white/5 bg-slate-50/30 dark:bg-black/10 py-1.5 divide-y divide-slate-200/20 dark:divide-white/3">
                        {section.lessons.map((lesson) => {
                          // Find flat index
                          const flatIdx = allLessons.findIndex(l => l.id === lesson.id);
                          const resolvedState = flatIdx === activeIndex ? "current" : flatIdx < activeIndex ? "completed" : "locked";
                          const isCurrent = resolvedState === "current";
                          const isCompleted = resolvedState === "completed";
                          
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => {
                                if (resolvedState !== "locked") {
                                  setActiveLessonId(lesson.id);
                                }
                              }}
                              className={`w-full flex items-start gap-3 px-4 py-3.5 text-left transition-all ${
                                isCurrent 
                                  ? "bg-teal/8 dark:bg-teal/10 border-l-4 border-teal pl-3" 
                                  : "hover:bg-slate-100/50 dark:hover:bg-white/2 border-l-4 border-transparent"
                              } ${resolvedState === "locked" ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
                            >
                              {/* Status Icon */}
                              <div className="mt-0.5 flex-shrink-0">
                                {isCompleted ? (
                                  <CheckCircle className="h-4 w-4 text-teal" />
                                ) : isCurrent ? (
                                  <PlayCircle className="h-4 w-4 text-teal fill-teal/20" />
                                ) : (
                                  <Circle className="h-4 w-4 text-slate-400 dark:text-slate-650" />
                                )}
                              </div>
                              
                              {/* Title and duration */}
                              <div className="min-w-0 flex-1">
                                <p className={`text-xs leading-snug font-semibold ${isCurrent ? "text-teal font-bold" : "text-ink"}`}>
                                  {lesson.title}
                                </p>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">
                                  {lesson.duration}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </GlassCard>
        ) : (
          /* Slim vertical rail when collapsed */
          <GlassCard className="p-3 dark:bg-[#1e1b2e]/85 dark:border-white/8 w-[72px] shrink-0 h-[680px] flex flex-col items-center gap-6 overflow-hidden transition-all duration-300 ease-in-out relative shadow-lg">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-slate-400 hover:text-teal p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all mt-1"
              title="Expand Sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="h-px w-6 bg-slate-200/40 dark:bg-white/5" />
            {/* Sleek vertical progress dots */}
            <div className="flex-1 flex flex-col gap-4 items-center">
              {sections.map((section) => {
                const isSelectedModule = sections.find(s => s.lessons.some(l => l.id === activeLessonId))?.id === section.id;
                return (
                  <div 
                    key={section.id} 
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      isSelectedModule ? "bg-teal ring-4 ring-teal/20 scale-125" : "bg-slate-400/40 dark:bg-slate-700/60"
                    }`}
                    title={`${section.title}: ${section.subtitle}`}
                  />
                );
              })}
            </div>
          </GlassCard>
        )}

        {/* Right Column: Interactive Workspace (Module Video Box) */}
        <div className="flex-1 min-w-0">
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
                      Lesson {activeIndex + 1} of {allLessons.length}
                    </span>
                  </div>

                  {/* Play Interface */}
                  <div className="text-center space-y-4 px-6 my-auto">
                    <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white group-hover:border-teal/30 cursor-pointer shadow-2xl relative">
                      <PlayCircle className="h-10 w-10 text-teal group-hover:text-white transition-colors" />
                      <div className="absolute -inset-1.5 rounded-full border border-teal/20 animate-ping group-hover:hidden" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug">
                        {activeLessonDetail.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                        {activeLessonDetail.desc}
                      </p>
                    </div>
                  </div>

                  {/* Player controls bar */}
                  <div className="flex items-center justify-between text-[11px] text-white/90 font-bold bg-black/55 border border-white/5 rounded-2xl px-4 py-3 backdrop-blur-md transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <div className="flex items-center gap-3">
                      <button className="hover:text-teal transition-all duration-150 active:scale-90">
                        <svg className="h-5.5 w-5.5 text-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </button>
                      <span className="font-mono text-white/70">00:00 / {activeLessonDetail.time}</span>
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