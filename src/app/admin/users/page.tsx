"use client";

import { useState } from "react";
import { GraduationCap, UserRound, Users2, Building2, BookOpen, Phone, Mail, Calendar, TrendingUp } from "lucide-react";
import { AdminShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

/* ── Mock data ─────────────────────────────────────────── */
const teachers = [
  { name: "Ms. Priya Kapoor",   school: "DPS Noida",           subjects: "Math, Science",    classes: "8A, 8B, 9A", students: 96,  email: "priya.kapoor@dps.edu",   phone: "+91 99887 76543", since: "Jan 2024", status: "Active" },
  { name: "Mr. Rajan Mehta",    school: "DPS Noida",           subjects: "English, History", classes: "7A, 7B",     students: 64,  email: "rajan.mehta@dps.edu",    phone: "+91 98765 11223", since: "Jan 2024", status: "Active" },
  { name: "Ms. Divya Nair",     school: "Ryan International",  subjects: "Mathematics",      classes: "8A, 9A",     students: 56,  email: "divya.nair@ryan.edu",    phone: "+91 88765 33445", since: "Mar 2024", status: "Active" },
  { name: "Mr. Suresh Pillai",  school: "Ryan International",  subjects: "Social Studies",   classes: "6A, 7A",     students: 60,  email: "suresh.pillai@ryan.edu", phone: "+91 77654 22334", since: "Mar 2024", status: "Active" },
  { name: "Mr. Vijay Sharma",   school: "KV Sector 5",         subjects: "Hindi, Sanskrit",  classes: "6A, 7A, 8A", students: 72,  email: "vijay.sharma@kv.edu",    phone: "+91 98877 55667", since: "May 2024", status: "Active" },
  { name: "Ms. Rekha Jain",     school: "KV Sector 5",         subjects: "Science",          classes: "9A, 10A",    students: 48,  email: "rekha.jain@kv.edu",      phone: "+91 87766 44556", since: "May 2024", status: "Active" },
  { name: "Ms. Kavya Reddy",    school: "DAV Public School",   subjects: "Maths, Physics",   classes: "11A, 12A",   students: 44,  email: "kavya.reddy@dav.edu",    phone: "+91 76655 33445", since: "Jun 2024", status: "Active" },
  { name: "Ms. Rose D'Souza",   school: "St. Mary's",          subjects: "English Lit",      classes: "9A, 10A",    students: 36,  email: "rose.dsouza@marys.edu",  phone: "+91 99988 77665", since: "Oct 2024", status: "Active" },
  { name: "Ms. Anika Roy",      school: "Shri Ram School",     subjects: "IB Mathematics",   classes: "DP1, DP2",   students: 28,  email: "anika.roy@tsrs.edu",     phone: "+91 88877 66554", since: "Jan 2025", status: "Pending" },
];

const students = [
  { name: "Aanya Sharma",   school: "DPS Noida",          grade: "8A",  roll: "8A-01", score: 92, streak: 18, email: "aanya@dps.edu",   since: "Jan 2024", status: "Active" },
  { name: "Rohan Verma",    school: "DPS Noida",          grade: "8B",  roll: "8B-05", score: 85, streak: 9,  email: "rohan@dps.edu",   since: "Jan 2024", status: "Active" },
  { name: "Sneha Gupta",    school: "DPS Noida",          grade: "9A",  roll: "9A-03", score: 78, streak: 4,  email: "sneha@dps.edu",   since: "Jan 2024", status: "Active" },
  { name: "Zara Ahmed",     school: "Ryan International", grade: "8A",  roll: "8A-02", score: 95, streak: 22, email: "zara@ryan.edu",   since: "Mar 2024", status: "Active" },
  { name: "Dev Malhotra",   school: "Ryan International", grade: "9A",  roll: "9A-01", score: 80, streak: 6,  email: "dev@ryan.edu",    since: "Mar 2024", status: "Active" },
  { name: "Isha Patel",     school: "Ryan International", grade: "6A",  roll: "6A-08", score: 87, streak: 12, email: "isha@ryan.edu",   since: "Mar 2024", status: "Active" },
  { name: "Mohan Das",      school: "KV Sector 5",        grade: "9A",  roll: "9A-05", score: 76, streak: 3,  email: "mohan@kv.edu",    since: "May 2024", status: "Active" },
  { name: "Leela Pandey",   school: "KV Sector 5",        grade: "10A", roll: "10A-03",score: 94, streak: 30, email: "leela@kv.edu",    since: "May 2024", status: "Active" },
  { name: "Aryan Khanna",   school: "DAV Public School",  grade: "11A", roll: "11A-01",score: 88, streak: 14, email: "aryan@dav.edu",   since: "Jun 2024", status: "Active" },
  { name: "Sara Thomas",    school: "St. Mary's",         grade: "9A",  roll: "9A-01", score: 93, streak: 20, email: "sara@marys.edu",  since: "Oct 2024", status: "Active" },
  { name: "Riya Bajaj",     school: "Shri Ram School",    grade: "DP1", roll: "DP1-03",score: 89, streak: 7,  email: "riya@tsrs.edu",   since: "Jan 2025", status: "Pending" },
  { name: "Anaya Tiwari",   school: "Lotus Valley",       grade: "5A",  roll: "5A-04", score: 96, streak: 25, email: "anaya@lotus.edu", since: "Feb 2025", status: "Active" },
];

const parents = [
  { name: "Mr. Sanjay Sharma",   school: "DPS Noida",          child: "Aanya Sharma",  childGrade: "8A",  phone: "+91 98765 11111", email: "sanjay@email.com",  since: "Jan 2024", status: "Active" },
  { name: "Mrs. Geeta Verma",    school: "DPS Noida",          child: "Rohan Verma",   childGrade: "8B",  phone: "+91 87654 22222", email: "geeta@email.com",   since: "Jan 2024", status: "Active" },
  { name: "Mr. Imran Ahmed",     school: "Ryan International", child: "Zara Ahmed",    childGrade: "8A",  phone: "+91 76543 33333", email: "imran@email.com",   since: "Mar 2024", status: "Active" },
  { name: "Mrs. Rita Malhotra",  school: "Ryan International", child: "Dev Malhotra",  childGrade: "9A",  phone: "+91 65432 44444", email: "rita@email.com",    since: "Mar 2024", status: "Active" },
  { name: "Mr. Krishna Das",     school: "KV Sector 5",        child: "Mohan Das",     childGrade: "9A",  phone: "+91 54321 55555", email: "krishna@email.com", since: "May 2024", status: "Active" },
  { name: "Mrs. Anita Joshi",    school: "KV Sector 5",        child: "Leela Pandey",  childGrade: "10A", phone: "+91 43210 66666", email: "anita@email.com",   since: "May 2024", status: "Active" },
  { name: "Mr. Rajeev Khanna",   school: "DAV Public School",  child: "Aryan Khanna",  childGrade: "11A", phone: "+91 32109 77777", email: "rajeev@email.com",  since: "Jun 2024", status: "Active" },
  { name: "Mrs. Clara Thomas",   school: "St. Mary's",         child: "Sara Thomas",   childGrade: "9A",  phone: "+91 21098 88888", email: "clara@email.com",   since: "Oct 2024", status: "Active" },
];

type Tab = "teachers" | "students" | "parents";

function StatusBadge({ status }: { status: string }) {
  if (status === "Active")
    return <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Active</span>;
  return <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 text-xs font-bold text-amber-600 dark:text-amber-400"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Pending</span>;
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 90 ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400"
    : score >= 75 ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400"
    : "text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400";
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${color}`}>{score}%</span>;
}

export default function AdminUsersPage() {
  const [tab, setTab] = useState<Tab>("teachers");

  const tabs: { id: Tab; label: string; icon: typeof UserRound; count: number }[] = [
    { id: "teachers", label: "Teachers", icon: UserRound,     count: teachers.length },
    { id: "students", label: "Students", icon: GraduationCap, count: students.length },
    { id: "parents",  label: "Parents",  icon: Users2,        count: parents.length },
  ];

  return (
    <AdminShell active="Users" title="Users Management">
      <div className="space-y-5">

        {/* Header */}
        <div className="flex flex-col gap-4 rounded-3xl bg-white/80 dark:bg-[#1e1b2e]/80 p-5 shadow-glass backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Pill tone="indigo">Platform Users</Pill>
            <h2 className="mt-2 text-2xl font-black text-ink">All Users</h2>
            <p className="mt-1 text-sm text-slate-500">View all teachers, students and parents across every school.</p>
          </div>
          <div className="flex gap-3">
            {[
              { label: "Total", count: teachers.length + students.length + parents.length, color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400" },
            ].map((b) => (
              <div key={b.label} className={`rounded-2xl px-5 py-2 text-center ${b.color}`}>
                <p className="text-2xl font-black">{b.count}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide">{b.label} Users (sample)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 rounded-2xl bg-white/60 dark:bg-white/5 border border-white/70 dark:border-white/8 p-1.5 backdrop-blur-xl w-fit">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md shadow-indigo-500/25"
                    : "text-slate-500 hover:text-ink hover:bg-white/60 dark:hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${isActive ? "bg-white/20 text-white" : "bg-surface text-slate-400"}`}>
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Teachers table */}
        {tab === "teachers" && (
          <GlassCard className="p-0 overflow-hidden">
            <div className="px-6 py-4 border-b border-royal/8 dark:border-white/8 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600">
                <UserRound className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-ink">Teachers</h3>
              <span className="ml-auto text-xs text-slate-400">{teachers.length} total (showing sample)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-indigo-500/5">
                  <tr>
                    {["Teacher", "School", "Subjects", "Classes", "Students", "Since", "Status"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((t, i) => (
                    <tr key={t.name} className={`transition-colors hover:bg-indigo-500/3 ${i > 0 ? "border-t border-royal/8 dark:border-white/8" : ""}`}>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-black text-white">
                            {t.name.charAt(t.name.lastIndexOf(" ") + 1)}
                          </div>
                          <div>
                            <p className="font-semibold text-ink">{t.name}</p>
                            <p className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                              <Mail className="h-3 w-3" />{t.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Building2 className="h-3.5 w-3.5 text-indigo-400" />{t.school}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <BookOpen className="h-3.5 w-3.5" />{t.subjects}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-slate-500 text-xs">{t.classes}</td>
                      <td className="px-5 py-3.5">
                        <span className="font-bold text-ink">{t.students}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-[10px] text-slate-400">
                          <Calendar className="h-3 w-3" />{t.since}
                        </span>
                      </td>
                      <td className="px-5 py-3.5"><StatusBadge status={t.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        )}

        {/* Students table */}
        {tab === "students" && (
          <GlassCard className="p-0 overflow-hidden">
            <div className="px-6 py-4 border-b border-royal/8 dark:border-white/8 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-ink">Students</h3>
              <span className="ml-auto text-xs text-slate-400">{students.length} total (showing sample)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-indigo-500/5">
                  <tr>
                    {["Student", "School", "Grade", "Roll No.", "Score", "Streak", "Since", "Status"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr key={s.name} className={`transition-colors hover:bg-indigo-500/3 ${i > 0 ? "border-t border-royal/8 dark:border-white/8" : ""}`}>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-xs font-black text-white">
                            {s.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-ink">{s.name}</p>
                            <p className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                              <Mail className="h-3 w-3" />{s.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Building2 className="h-3.5 w-3.5 text-indigo-400" />{s.school}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <Pill tone="indigo">{s.grade}</Pill>
                      </td>
                      <td className="px-5 py-3.5 text-slate-500 text-xs font-mono">{s.roll}</td>
                      <td className="px-5 py-3.5"><ScoreBadge score={s.score} /></td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                          🔥 {s.streak} days
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-[10px] text-slate-400">
                          <Calendar className="h-3 w-3" />{s.since}
                        </span>
                      </td>
                      <td className="px-5 py-3.5"><StatusBadge status={s.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        )}

        {/* Parents table */}
        {tab === "parents" && (
          <GlassCard className="p-0 overflow-hidden">
            <div className="px-6 py-4 border-b border-royal/8 dark:border-white/8 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-500">
                <Users2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-ink">Parents</h3>
              <span className="ml-auto text-xs text-slate-400">{parents.length} total (showing sample)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-indigo-500/5">
                  <tr>
                    {["Parent", "School", "Child", "Grade", "Contact", "Since", "Status"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {parents.map((p, i) => (
                    <tr key={p.name} className={`transition-colors hover:bg-indigo-500/3 ${i > 0 ? "border-t border-royal/8 dark:border-white/8" : ""}`}>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-cyan-500 text-xs font-black text-white">
                            {p.name.charAt(p.name.lastIndexOf(" ") + 1)}
                          </div>
                          <div>
                            <p className="font-semibold text-ink">{p.name}</p>
                            <p className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                              <Mail className="h-3 w-3" />{p.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Building2 className="h-3.5 w-3.5 text-indigo-400" />{p.school}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <p className="font-semibold text-ink text-xs">{p.child}</p>
                      </td>
                      <td className="px-5 py-3.5">
                        <Pill tone="indigo">{p.childGrade}</Pill>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-[10px] text-slate-400">
                          <Phone className="h-3 w-3" />{p.phone}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="flex items-center gap-1 text-[10px] text-slate-400">
                          <Calendar className="h-3 w-3" />{p.since}
                        </span>
                      </td>
                      <td className="px-5 py-3.5"><StatusBadge status={p.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        )}

      </div>
    </AdminShell>
  );
}
