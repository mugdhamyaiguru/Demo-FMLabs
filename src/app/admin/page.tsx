import { Activity, Users, TrendingUp, AlertCircle, Eye, Lock, BarChart3, Zap, Clock, Shield } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

export default function AdminPage() {
  return (
    <AppShell active="Dashboard" title="Admin Console">
      <div className="space-y-5">
        {/* System Metrics */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Total Users", value: "2,847", tone: "teal", icon: Users },
            { label: "Active Sessions", value: "342", tone: "gold", icon: Activity },
            { label: "Platform Uptime", value: "99.8%", tone: "marigold", icon: Zap },
            { label: "System Health", value: "Excellent", tone: "crimson", icon: Shield },
          ].map(({ label, value, tone, icon: Icon }) => (
            <GlassCard key={label} className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-2 text-3xl font-black text-ink">{value}</p>
                </div>
                <Icon className={`h-6 w-6 text-${tone}`} />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Role Distribution & Activity */}
        <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Pill tone="teal">User Distribution</Pill>
                <h3 className="mt-3 text-2xl font-black text-ink">Active Users by Role</h3>
              </div>
              <Users className="h-6 w-6 text-teal" />
            </div>
            <div className="mt-6 space-y-5">
              {[
                { role: "Students", count: 1820, percentage: 64, tone: "teal" },
                { role: "Teachers", count: 340, percentage: 12, tone: "marigold" },
                { role: "Parents", count: 587, percentage: 21, tone: "crimson" },
                { role: "Admins", count: 100, percentage: 3, tone: "gold" },
              ].map((item) => (
                <div key={item.role}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-semibold text-ink">{item.role}</span>
                    <span className="text-slate-500">{item.count} ({item.percentage}%)</span>
                  </div>
                  <ProgressBar value={item.percentage} accent={item.tone as any} />
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="space-y-5">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-ink">Real-time Activity</h3>
                <Activity className="h-5 w-5 text-teal" />
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-2xl bg-surface px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-600">Logins (last hour)</span>
                  <span className="font-bold text-teal">+156</span>
                </div>
                <div className="rounded-2xl bg-surface px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-600">Modules completed</span>
                  <span className="font-bold text-marigold">+89</span>
                </div>
                <div className="rounded-2xl bg-surface px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-600">Assignments submitted</span>
                  <span className="font-bold text-gold">+42</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-ink">System Status</h3>
                <Eye className="h-5 w-5 text-green-500" />
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-slate-600">API Servers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-slate-600">Database</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-slate-600">Cache Layer</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Activity Log & Monitoring */}
        <div className="grid gap-5 lg:grid-cols-2">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Recent Activity</h3>
              <Clock className="h-5 w-5 text-teal" />
            </div>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { action: "User registered", user: "Arjun M.", time: "2 min ago", type: "user" },
                { action: "Content uploaded", user: "Teacher Sarah", time: "8 min ago", type: "content" },
                { action: "Quiz completed", user: "Priya S.", time: "15 min ago", type: "action" },
                { action: "Report generated", user: "Admin Panel", time: "23 min ago", type: "system" },
                { action: "Batch assignment", user: "Teacher Kumar", time: "31 min ago", type: "content" },
              ].map((log, idx) => (
                <div key={idx} className="rounded-2xl bg-surface px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-ink">{log.action}</p>
                    <p className="text-xs text-slate-500">{log.user}</p>
                  </div>
                  <span className="text-xs text-slate-400">{log.time}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Platform Analytics</h3>
              <BarChart3 className="h-5 w-5 text-marigold" />
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">Daily Active Users</span>
                  <span className="font-semibold text-ink">2,104 / 2,847</span>
                </div>
                <ProgressBar value={74} accent="teal" />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">Content Completion Rate</span>
                  <span className="font-semibold text-ink">68%</span>
                </div>
                <ProgressBar value={68} accent="marigold" />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">User Engagement</span>
                  <span className="font-semibold text-ink">82%</span>
                </div>
                <ProgressBar value={82} accent="gold" />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">System Performance</span>
                  <span className="font-semibold text-ink">94%</span>
                </div>
                <ProgressBar value={94} accent="crimson" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Security & Monitoring */}
        <div className="grid gap-5 lg:grid-cols-2">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Security Events</h3>
              <AlertCircle className="h-5 w-5 text-crimson" />
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-2xl bg-surface px-4 py-3">
                <p className="font-semibold text-slate-700">Failed login attempts</p>
                <p className="mt-1 text-xs text-slate-500">3 blocked IPs in the last hour</p>
              </div>
              <div className="rounded-2xl bg-surface px-4 py-3">
                <p className="font-semibold text-slate-700">Suspicious activity</p>
                <p className="mt-1 text-xs text-slate-500">0 alerts · All systems normal</p>
              </div>
              <div className="rounded-2xl bg-surface px-4 py-3">
                <p className="font-semibold text-slate-700">Data integrity</p>
                <p className="mt-1 text-xs text-slate-500">Last verification: 2 hours ago ✓</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Performance Metrics</h3>
              <TrendingUp className="h-5 w-5 text-teal" />
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-2xl bg-surface px-4 py-3">
                <p className="font-semibold text-slate-700">Average Response Time</p>
                <p className="mt-1 text-xs text-slate-500">145ms (target: &lt;200ms) ✓</p>
              </div>
              <div className="rounded-2xl bg-surface px-4 py-3">
                <p className="font-semibold text-slate-700">Database Load</p>
                <p className="mt-1 text-xs text-slate-500">42% capacity · Healthy</p>
              </div>
              <div className="rounded-2xl bg-surface px-4 py-3">
                <p className="font-semibold text-slate-700">Cache Hit Rate</p>
                <p className="mt-1 text-xs text-slate-500">87% · Optimal performance</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* System Controls */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-ink">Administrative Controls</h3>
              <p className="mt-1 text-sm text-slate-500">Manage platform operations and system settings</p>
            </div>
            <Lock className="h-6 w-6 text-gold" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "View all users",
              "Content moderation",
              "Backup database",
              "System settings",
              "Generate reports",
              "User analytics",
              "Send announcements",
              "Audit logs",
            ].map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-royal/15 bg-white px-4 py-3 font-semibold text-ink transition-all hover:border-teal hover:bg-teal/5"
              >
                {action}
              </button>
            ))}
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
