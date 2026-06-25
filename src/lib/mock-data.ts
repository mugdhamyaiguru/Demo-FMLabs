export const featureCards = [
  { title: "AI Tutor", description: "Context-aware help, hints, and explanations with a premium chat interface.", accent: "teal" },
  { title: "Personalized Learning", description: "Adaptive recommendations, modules, and progress-aware next steps.", accent: "marigold" },
  { title: "Progress Tracking", description: "Skill graphs, streaks, badges, and analytics that feel motivating.", accent: "gold" },
  { title: "Gamification", description: "XP, rewards, streaks, and celebratory moments that keep learners engaged.", accent: "crimson" },
  { title: "Parent Dashboard", description: "Simple, trustworthy monitoring for progress, attendance, and weak topics.", accent: "gold" },
  { title: "Real-world Projects", description: "Student-friendly project cards that turn learning into practical outcomes.", accent: "marigold" },
];

export const testimonials = [
  {
    name: "Rohan",
    role: "Student, Grade 6",
    quote: "I used to dread studying, but the XP and streaks make me actually want to open the platform every day. My grades have improved without it feeling like work.",
    category: "Student"
  },
  {
    name: "Ms. Sharma",
    role: "Teacher",
    quote: "I can see exactly which students are struggling and on which topic — without waiting for exam results. It's changed how I plan my lessons completely.",
    category: "Teacher"
  },
  {
    name: "Mrs. Iyer",
    role: "Parent",
    quote: "I don't have to wait for parent-teacher meetings to know how my son is doing. The weekly summary tells me everything I need in two minutes.",
    category: "Parent"
  },
  {
    name: "Priya",
    role: "Student, Grade 4",
    quote: "The AI tutor explains things in a way my textbook never could. I got full marks on my AI quiz after just two lessons.",
    category: "Student"
  },
  {
    name: "Mr. Desai",
    role: "Teacher",
    quote: "Seeing my entire class's attendance, streaks, and quiz scores in one dashboard has made parent meetings so much more productive. I come prepared with actual data.",
    category: "Teacher"
  },
  {
    name: "Mr. Mehta",
    role: "Parent",
    quote: "My daughter went from avoiding homework to asking for more practice modules. I didn't expect a platform to make that kind of difference.",
    category: "Parent"
  },
  {
    name: "Aanya",
    role: "Student, Grade 8",
    quote: "It feels like a game, but I can actually see myself improving every week.",
    category: "Student"
  },
  {
    name: "Mr. Patel",
    role: "Teacher",
    quote: "The classroom dashboard gives me a clean overview without feeling heavy.",
    category: "Teacher"
  },
  {
    name: "Ms. Khan",
    role: "Parent",
    quote: "I can understand progress at a glance and know where to help my child.",
    category: "Parent"
  }
];

export const roleCards = [
  { id: "student", title: "Student", description: "Learn through modules, quizzes, streaks, and a smart AI tutor.", href: "/student" },
  { id: "teacher", title: "Teacher", description: "Manage classes, assignments, attendance, reports, and announcements.", href: "/teacher" },
  { id: "parent", title: "Parent", description: "Track growth, weak subjects, attendance, and recent wins.", href: "/parent" },
];

export const dashboardModules = [
  { title: "Fractions Lab", subject: "Mathematics", xp: 120, time: "12 min", progress: 72, difficulty: "Beginner" },
  { title: "Energy Transfer", subject: "Science", xp: 140, time: "15 min", progress: 41, difficulty: "Intermediate" },
  { title: "Python Basics", subject: "Computer Basics", xp: 160, time: "18 min", progress: 58, difficulty: "Beginner" },
  { title: "Linear Patterns", subject: "Mathematics", xp: 180, time: "20 min", progress: 26, difficulty: "Advanced" },
  { title: "Cell Explorer", subject: "Science", xp: 130, time: "11 min", progress: 88, difficulty: "Beginner" },
  { title: "Internet Safety", subject: "Computer Basics", xp: 150, time: "14 min", progress: 33, difficulty: "Intermediate" },
];

export const studentBadges = [
  { name: "7-Day Streak", color: "gold" },
  { name: "Quiz Master", color: "teal" },
  { name: "Helper", color: "marigold" },
  { name: "Fast Learner", color: "crimson" },
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
    prompt: "Which fraction is equivalent to 1/2?",
    options: ["2/4", "1/3", "3/5", "4/7"],
    answer: 0,
  },
  {
    prompt: "What is the main purpose of a computer browser?",
    options: ["Write code", "Access websites", "Store files", "Charge a battery"],
    answer: 1,
  },
  {
    prompt: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
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