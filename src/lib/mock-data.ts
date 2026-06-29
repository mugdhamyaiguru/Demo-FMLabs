export const featureCards = [
  { title: "AI Tutor", description: "Context-aware help, hints, and explanations with a premium chat interface.", accent: "teal" },
  { title: "Personalized Learning", description: "Adaptive recommendations, modules, and progress-aware next steps.", accent: "marigold" },
  { title: "Progress Tracking", description: "Skill graphs, streaks, badges, and analytics that feel motivating.", accent: "gold" },
  { title: "Gamification", description: "XP, rewards, streaks, and celebratory moments that keep learners engaged.", accent: "crimson" },
  { title: "Teacher Dashboard", description: "Professional overview for assignments, attendance, reports, and class insights.", accent: "teal" },
  { title: "Parent Dashboard", description: "Simple, trustworthy monitoring for progress, attendance, and weak topics.", accent: "gold" },
  { title: "Real-world Projects", description: "Student-friendly project cards that turn learning into practical outcomes.", accent: "marigold" },
];

export const testimonials = [
  { name: "Aanya, Student", role: "Grade 8", quote: "It feels like a game, but I can actually see myself improving every week." },
  { name: "Mr. Patel", role: "Teacher", quote: "The classroom dashboard gives me a clean overview without feeling heavy." },
  { name: "Ms. Khan", role: "Parent", quote: "I can understand progress at a glance and know where to help my child." },
];

export const roleCards = [
  { id: "student", title: "Student", description: "Learn through modules, quizzes, streaks, and a smart AI tutor.", href: "/student" },
  { id: "teacher", title: "Teacher", description: "Manage classes, assignments, attendance, reports, and announcements.", href: "/teacher" },
  { id: "parent", title: "Parent", description: "Track growth, weak subjects, attendance, and recent wins.", href: "/parent" },
];

export const dashboardModules = [
  { title: "Introduction to AI in Everyday life", subject: "Mathematics", xp: 120, time: "12 min", progress: 72, difficulty: "Beginner" },
  { title: "Basic Data Concepts", subject: "Science", xp: 140, time: "15 min", progress: 41, difficulty: "Intermediate" },
  { title: "Ethics and Digital Responsibilty", subject: "Coding", xp: 100, time: "10 min", progress: 58, difficulty: "Beginner" },
  { title: "Binary Basics", subject: "Computer Basics", xp: 100, time: "10 min", progress: 68, difficulty: "Beginner" },
  { title: "Decimals Demystified", subject: "Mathematics", xp: 130, time: "14 min", progress: 55, difficulty: "Intermediate" },
  { title: "Linear Patterns", subject: "Mathematics", xp: 180, time: "20 min", progress: 26, difficulty: "Advanced" },
  { title: "Cell Explorer", subject: "Science", xp: 130, time: "11 min", progress: 88, difficulty: "Beginner" },
  { title: "Internet Safety", subject: "Computer Basics", xp: 150, time: "14 min", progress: 33, difficulty: "Intermediate" },
];

export const studentBadges = [
  { name: "7-Day Streak", color: "gold", earned: true },
  { name: "Quiz Master", color: "teal", earned: true },
  { name: "Helper", color: "marigold", earned: true },
  { name: "Fast Learner", color: "crimson", earned: true },
  { name: "Bookworm", color: "slate", earned: false },
  { name: "Top Scorer", color: "slate", earned: false },
];

export const leaderboard = [
  { name: "Ishaan", xp: 2840 },
  { name: "Mira", xp: 2575 },
  { name: "Ravi", xp: 2310 },
  { name: "Aanya", xp: 2180 },
];

export const lessonBlocks = [
  "Watch the example carefully, then try the guided activity.",
  "Use the helper hints if you get stuck on the next step.",
  "Apply the concept in the mini project before moving on.",
];

export const quizQuestions = [
  {
    prompt: "Which of the following is an example of Artificial Intelligence in everyday life?",
    options: [
      "A wooden chair",
      "A voice assistant like Siri or Google Assistant",
      "A notebook",
      "A pencil"
    ],
    answer: 1,
    feedback: {
      correct: "Correct! Voice assistants use AI to understand your voice and answer questions.",
      incorrect: "Incorrect. Voice assistants use AI to process your commands; items like wooden chairs, notebooks, and pencils are non-digital objects."
    }
  },
  {
    prompt: "What is one thing that AI can do?",
    options: [
      "Eat food",
      "Sleep at night",
      "Learn patterns from data to help make decisions",
      "Grow like a plant"
    ],
    answer: 2,
    feedback: {
      correct: "Correct! AI learns from data and patterns to make predictions or solve problems.",
      incorrect: "Incorrect. Biological processes like eating, sleeping, or growing belong to living things, whereas AI analyzes data to solve problems."
    }
  },
  {
    prompt: "Which activity below is most likely using AI?",
    options: [
      "Writing with a pen",
      "Riding a bicycle",
      "Reading a printed book",
      "Getting movie recommendations on Netflix or YouTube"
    ],
    answer: 3,
    feedback: {
      correct: "Correct! Recommendation systems use AI to suggest movies and videos based on what you like.",
      incorrect: "Incorrect. Traditional offline activities do not use computational learning models, whereas recommendation algorithms process user patterns to suggest content."
    }
  }
];

export const savedTutorSessions = [
  { title: "Fractions revision", time: "Today · 4:10 PM" },
  { title: "Python variables", time: "Yesterday · 6:30 PM" },
  { title: "Science project ideas", time: "Mon · 8:15 PM" },
];

export const teacherRoster = [
  { name: "Aanya Sharma", className: "8A", attendance: "96%", pace: "On track" },
  { name: "Kabir Mehta", className: "8A", attendance: "91%", pace: "Needs support" },
  { name: "Diya Patel", className: "8B", attendance: "98%", pace: "Excellent" },
  { name: "Rehan Ali", className: "8B", attendance: "88%", pace: "Watch list" },
];

export const parentHighlights = [
  { label: "Weekly progress", value: "78%" },
  { label: "Attendance", value: "94%" },
  { label: "Weak subject", value: "Fractions" },
  { label: "Recent badge", value: "Streak Keeper" },
];