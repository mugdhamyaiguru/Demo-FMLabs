"use client";
import { Bell, AlertCircle, CheckCircle2, Clock3, MessageSquare, Send, Trash2 } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

const alerts = [
  { type: "alert",   title: "Low Attendance Warning",    msg: "Aanya missed school on Wed 14 May. Please ensure regular attendance.",     time: "Today",       from: "System" },
  { type: "alert",   title: "English Score Drop",        msg: "Aanya's English score fell to 58% this week. Consider extra practice.",     time: "Yesterday",   from: "System" },
  { type: "info",    title: "Teacher Message",           msg: "Aanya showed great improvement in the Coding practical today!",            time: "Yesterday",   from: "Ms. Priya" },
  { type: "info",    title: "Upcoming Assignment",       msg: "Science Lab Report is due on Friday 16 May. Please remind Aanya.",        time: "2 days ago",  from: "System" },
  { type: "success", title: "Module Completed",          msg: "Aanya completed the Python Functions module with a score of 95%.",        time: "3 days ago",  from: "System" },
  { type: "success", title: "Perfect Week",              msg: "Aanya attended all classes this week. Great consistency!",                time: "Last week",   from: "System" },
];

const teacherMsgs = [
  { from: "Ms. Priya Kapoor", subject: "Coding Improvement", msg: "Aanya has been doing really well in coding. Encourage her to explore the bonus Python challenges.", date: "11 May" },
  { from: "Ms. Priya Kapoor", subject: "English Support",    msg: "I'd recommend Aanya spend 20 mins daily on the vocabulary and reading exercises.", date: "8 May" },
  { from: "Mr. Rajan",        subject: "Math Progress",      msg: "Aanya struggled with fractions this week. I've assigned additional practice sets.", date: "5 May" },
];

const notifStyle = {
  alert:   { border: "border-crimson/20 bg-crimson/5",     Icon: AlertCircle,  iconCls: "text-crimson"     },
  info:    { border: "border-teal/20 bg-teal/5",           Icon: Clock3,       iconCls: "text-teal"        },
  success: { border: "border-[#22c55e]/20 bg-[#22c55e]/5", Icon: CheckCircle2, iconCls: "text-[#22c55e]"   },
};

export default function ParentAlertsPage() {
  return (
    <AppShell active="Alerts" title="Alerts & Notifications" role="parent">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Total Alerts", value: "6",  sub: "Last 7 days" },
            { label: "Urgent",       value: "2",  sub: "Needs action" },
            { label: "Teacher Msgs", value: "3",  sub: "Unread messages" },
            { label: "This Week",    value: "4",  sub: "New notifications" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-crimson to-[#e05555] shadow-sm">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink">System Alerts</h3>
              </div>
              <button className="text-xs font-semibold text-teal hover:underline">Mark all read</button>
            </div>
            <div className="space-y-3">
              {alerts.map((a, i) => {
                const meta = notifStyle[a.type as keyof typeof notifStyle];
                return (
                  <div key={i} className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 ${meta.border}`}>
                    <meta.Icon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${meta.iconCls}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-ink">{a.title}</p>
                        <Pill tone={a.from === "System" ? "royal" : "teal"}>{a.from}</Pill>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{a.msg}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{a.time}</p>
                    </div>
                    <button className="flex-shrink-0 text-slate-300 hover:text-crimson transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <div className="space-y-5">
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-ink">Teacher Messages</h3>
              </div>
              <div className="space-y-3">
                {teacherMsgs.map((m) => (
                  <div key={m.subject} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="text-xs font-bold text-ink">{m.from}</p>
                      <p className="text-[10px] text-slate-400">{m.date}</p>
                    </div>
                    <p className="text-xs font-semibold text-teal mb-1">{m.subject}</p>
                    <p className="text-xs text-slate-500 leading-snug">"{m.msg}"</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-sm font-bold text-ink mb-3">Reply to Teacher</h3>
              <div className="space-y-2.5">
                <textarea rows={3} placeholder="Write your message to the teacher..." className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal resize-none placeholder:text-slate-400" />
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal to-[#0d7272] py-2.5 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 transition-all">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
