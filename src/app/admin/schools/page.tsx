"use client";

import { useState } from "react";
import { Building2, ChevronDown, ChevronUp, GraduationCap, MapPin, UserRound, Users2, Calendar, BookOpen } from "lucide-react";
import { AdminShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

/* ── Mock data ─────────────────────────────────────────── */
const schools = [
  {
    id: 1,
    name: "Delhi Public School, Noida",
    city: "Noida, UP",
    board: "CBSE",
    teachers: 42,
    students: 340,
    parents: 310,
    status: "Active",
    since: "Jan 2024",
    teacherList: [
      { name: "Ms. Priya Kapoor",   subjects: "Math, Science",   classes: "8A, 8B, 9A" },
      { name: "Mr. Rajan Mehta",    subjects: "English, History", classes: "7A, 7B" },
      { name: "Ms. Sunita Rao",     subjects: "Computer Science", classes: "9A, 9B, 10A" },
      { name: "Mr. Ankit Sharma",   subjects: "Physics, Chem",   classes: "11A, 12A" },
    ],
    studentList: [
      { name: "Aanya Sharma",   grade: "8A", roll: "8A-01", score: 92 },
      { name: "Rohan Verma",    grade: "8B", roll: "8B-05", score: 85 },
      { name: "Sneha Gupta",    grade: "9A", roll: "9A-03", score: 78 },
      { name: "Arjun Nair",     grade: "7A", roll: "7A-11", score: 90 },
      { name: "Priya Singh",    grade: "10A",roll: "10A-07",score: 88 },
      { name: "Kabir Joshi",    grade: "9B", roll: "9B-02", score: 74 },
    ],
  },
  {
    id: 2,
    name: "Ryan International School, Gurugram",
    city: "Gurugram, HR",
    board: "CBSE",
    teachers: 35,
    students: 280,
    parents: 256,
    status: "Active",
    since: "Mar 2024",
    teacherList: [
      { name: "Ms. Divya Nair",    subjects: "Mathematics",     classes: "8A, 9A" },
      { name: "Mr. Suresh Pillai", subjects: "Social Studies",  classes: "6A, 7A" },
      { name: "Ms. Pooja Agarwal", subjects: "English, EVS",    classes: "5A, 5B" },
    ],
    studentList: [
      { name: "Zara Ahmed",    grade: "8A", roll: "8A-02", score: 95 },
      { name: "Dev Malhotra",  grade: "9A", roll: "9A-01", score: 80 },
      { name: "Isha Patel",    grade: "6A", roll: "6A-08", score: 87 },
      { name: "Shiv Kumar",    grade: "7A", roll: "7A-04", score: 72 },
      { name: "Tara Bose",     grade: "5B", roll: "5B-06", score: 91 },
    ],
  },
  {
    id: 3,
    name: "Kendriya Vidyalaya Sector 5",
    city: "Delhi",
    board: "CBSE",
    teachers: 28,
    students: 220,
    parents: 198,
    status: "Active",
    since: "May 2024",
    teacherList: [
      { name: "Mr. Vijay Sharma",  subjects: "Hindi, Sanskrit", classes: "6A, 7A, 8A" },
      { name: "Ms. Rekha Jain",    subjects: "Science",         classes: "9A, 10A" },
    ],
    studentList: [
      { name: "Mohan Das",     grade: "9A", roll: "9A-05", score: 76 },
      { name: "Sita Rawat",    grade: "6A", roll: "6A-12", score: 83 },
      { name: "Ram Chandra",   grade: "8A", roll: "8A-09", score: 69 },
      { name: "Leela Pandey",  grade: "10A",roll: "10A-03",score: 94 },
    ],
  },
  {
    id: 4,
    name: "DAV Public School, Noida",
    city: "Noida, UP",
    board: "CBSE",
    teachers: 24,
    students: 195,
    parents: 180,
    status: "Active",
    since: "Jun 2024",
    teacherList: [
      { name: "Ms. Kavya Reddy",  subjects: "Maths, Physics",  classes: "11A, 12A" },
      { name: "Mr. Akash Yadav",  subjects: "Biology, Chem",   classes: "11B, 12B" },
    ],
    studentList: [
      { name: "Aryan Khanna",  grade: "11A",roll: "11A-01",score: 88 },
      { name: "Diya Mehrotra", grade: "12A",roll: "12A-04",score: 79 },
      { name: "Amit Tiwari",   grade: "11B",roll: "11B-07",score: 85 },
    ],
  },
  {
    id: 5,
    name: "Amity International School, Saket",
    city: "New Delhi",
    board: "CBSE",
    teachers: 22,
    students: 175,
    parents: 160,
    status: "Active",
    since: "Aug 2024",
    teacherList: [
      { name: "Ms. Neha Saxena",  subjects: "Economics, Commerce", classes: "11C, 12C" },
      { name: "Mr. Rahul Bahl",   subjects: "PE, Health",          classes: "6A–10A" },
    ],
    studentList: [
      { name: "Nisha Kapoor",  grade: "11C",roll: "11C-02",score: 91 },
      { name: "Karan Seth",    grade: "12C",roll: "12C-05",score: 77 },
    ],
  },
  {
    id: 6,
    name: "St. Mary's High School",
    city: "Connaught Place, Delhi",
    board: "ICSE",
    teachers: 18,
    students: 120,
    parents: 108,
    status: "Active",
    since: "Oct 2024",
    teacherList: [
      { name: "Ms. Rose D'Souza", subjects: "English Literature", classes: "9A, 10A" },
      { name: "Mr. Felix Pereira",subjects: "Mathematics",        classes: "8A, 9A" },
    ],
    studentList: [
      { name: "Sara Thomas",  grade: "9A", roll: "9A-01", score: 93 },
      { name: "Luke Mathew",  grade: "10A",roll: "10A-02",score: 86 },
    ],
  },
  {
    id: 7,
    name: "The Shri Ram School, Vasant Vihar",
    city: "New Delhi",
    board: "IB",
    teachers: 15,
    students: 98,
    parents: 90,
    status: "Pending",
    since: "Jan 2025",
    teacherList: [
      { name: "Ms. Anika Roy",    subjects: "IB Mathematics",  classes: "DP1, DP2" },
    ],
    studentList: [
      { name: "Riya Bajaj",   grade: "DP1",roll: "DP1-03",score: 89 },
      { name: "Veer Oberoi",  grade: "DP2",roll: "DP2-01",score: 82 },
    ],
  },
  {
    id: 8,
    name: "Lotus Valley International School",
    city: "Noida, UP",
    board: "CBSE",
    teachers: 12,
    students: 85,
    parents: 78,
    status: "Active",
    since: "Feb 2025",
    teacherList: [
      { name: "Ms. Pallavi Singh", subjects: "Science, EVS",   classes: "5A, 6A" },
    ],
    studentList: [
      { name: "Anaya Tiwari",  grade: "5A", roll: "5A-04", score: 96 },
      { name: "Yash Mittal",   grade: "6A", roll: "6A-06", score: 84 },
    ],
  },
];

const boardColors: Record<string, string> = {
  CBSE: "indigo",
  ICSE: "marigold",
  IB:   "teal",
};

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 90 ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400"
    : score >= 75 ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400"
    : "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${color}`}>
      {score}%
    </span>
  );
}

export default function AdminSchoolsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (id: number) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <AdminShell active="Schools" title="Schools Management">
      <div className="space-y-5">

        {/* Header */}
        <div className="flex flex-col gap-4 rounded-3xl bg-white/80 dark:bg-[#1e1b2e]/80 p-5 shadow-glass backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Pill tone="indigo">Onboarded Schools</Pill>
            <h2 className="mt-2 text-2xl font-black text-ink">All Schools</h2>
            <p className="mt-1 text-sm text-slate-500">Click a school to view its teachers and students.</p>
          </div>
          <div className="flex gap-3">
            {[
              { label: "Active",  count: schools.filter(s => s.status === "Active").length,  color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400" },
              { label: "Pending", count: schools.filter(s => s.status === "Pending").length, color: "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400" },
            ].map((b) => (
              <div key={b.label} className={`rounded-2xl px-4 py-2 text-center ${b.color}`}>
                <p className="text-xl font-black">{b.count}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide">{b.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schools list */}
        <div className="space-y-3">
          {schools.map((school) => {
            const isOpen = expanded === school.id;
            return (
              <div
                key={school.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-indigo-500/30 shadow-lg shadow-indigo-500/10"
                    : "border-white/70 dark:border-white/8"
                } bg-white/80 dark:bg-[#1e1b2e]/85 backdrop-blur-xl`}
              >
                {/* School row */}
                <button
                  onClick={() => toggle(school.id)}
                  className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-indigo-500/3"
                >
                  {/* Icon */}
                  <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl shadow-sm ${
                    isOpen
                      ? "bg-gradient-to-br from-indigo-500 to-violet-600"
                      : "bg-indigo-500/10"
                  }`}>
                    <Building2 className={`h-5 w-5 ${isOpen ? "text-white" : "text-indigo-500"}`} />
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-bold text-ink">{school.name}</p>
                      <Pill tone={boardColors[school.board] as any}>{school.board}</Pill>
                      {school.status === "Pending" && <Pill tone="gold">Pending</Pill>}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{school.city}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />Since {school.since}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="hidden sm:flex items-center gap-6 text-center">
                    {[
                      { icon: UserRound,    val: school.teachers, label: "Teachers" },
                      { icon: GraduationCap,val: school.students, label: "Students" },
                      { icon: Users2,       val: school.parents,  label: "Parents" },
                    ].map(({ icon: Icon, val, label }) => (
                      <div key={label}>
                        <p className="text-lg font-black text-ink">{val}</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wide">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chevron */}
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                    isOpen ? "bg-indigo-500 text-white rotate-0" : "bg-surface text-slate-400"
                  }`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Drill-down panel */}
                {isOpen && (
                  <div className="border-t border-indigo-500/15 px-5 pb-5 pt-4">
                    <div className="grid gap-5 lg:grid-cols-2">

                      {/* Teachers */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600">
                            <UserRound className="h-3.5 w-3.5 text-white" />
                          </div>
                          <p className="text-sm font-bold text-ink">Teachers ({school.teachers})</p>
                        </div>
                        <div className="space-y-2">
                          {school.teacherList.map((t) => (
                            <div key={t.name} className="flex items-center gap-3 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 px-4 py-3">
                              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-black text-white shadow-sm">
                                {t.name.charAt(t.name.lastIndexOf(" ") + 1)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold text-ink">{t.name}</p>
                                <div className="flex flex-wrap gap-2 mt-0.5">
                                  <span className="flex items-center gap-1 text-[10px] text-slate-400">
                                    <BookOpen className="h-3 w-3" />{t.subjects}
                                  </span>
                                  <span className="flex items-center gap-1 text-[10px] text-slate-400">
                                    <Users2 className="h-3 w-3" />{t.classes}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                          {school.teachers > school.teacherList.length && (
                            <p className="text-xs text-slate-400 text-center py-1">
                              +{school.teachers - school.teacherList.length} more teachers
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Students */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700">
                            <GraduationCap className="h-3.5 w-3.5 text-white" />
                          </div>
                          <p className="text-sm font-bold text-ink">Students ({school.students})</p>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-indigo-500/10">
                          <table className="w-full text-sm">
                            <thead className="bg-indigo-500/5">
                              <tr>
                                <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">Student</th>
                                <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">Grade</th>
                                <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">Roll</th>
                                <th className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              {school.studentList.map((s, i) => (
                                <tr key={s.name} className={i > 0 ? "border-t border-indigo-500/8" : ""}>
                                  <td className="px-4 py-2.5 font-semibold text-ink">{s.name}</td>
                                  <td className="px-4 py-2.5 text-slate-500">{s.grade}</td>
                                  <td className="px-4 py-2.5 text-slate-500">{s.roll}</td>
                                  <td className="px-4 py-2.5"><ScoreBadge score={s.score} /></td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {school.students > school.studentList.length && (
                            <div className="border-t border-indigo-500/8 px-4 py-2.5 text-center text-xs text-slate-400">
                              +{school.students - school.studentList.length} more students
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </AdminShell>
  );
}
