import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Bot, Brain, ChevronRight, Flame, GraduationCap, LayoutDashboard, LineChart, LogOut, Search, ShieldCheck, Sparkles, Users } from "lucide-react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
      <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-2xl shadow-glow">
        <Image src="/brain-logo.jpg" alt="FutureMinds AI Labs logo" width={44} height={44} className="h-full w-full object-cover" />
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.35em] text-royal/70">FutureMinds</div>
        <div className="text-lg font-bold text-ink">AI Labs</div>
      </div>
    </Link>
  );
}

export function BrandMarkWhite() {
  return (
    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
      <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-2xl shadow-glow">
        <Image src="/brain-logo.jpg" alt="FutureMinds AI Labs logo" width={44} height={44} className="h-full w-full object-cover" />
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">FutureMinds</div>
        <div className="text-lg font-bold text-white">AI Labs</div>
      </div>
    </Link>
  );
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn(
      "rounded-[2rem] border border-slate-200/30 bg-white/60 p-6 shadow-glass backdrop-blur-xl transition-all duration-300",
      "dark:bg-[#1e1b2e]/60 dark:border-white/5",
      className
    )}>
      {children}
    </div>
  );
}

export function EmptyState({ title, description, action, icon }: { title: string; description: string; action?: ReactNode; icon?: ReactNode }) {
  return (
    <div className="rounded-3xl border border-dashed border-royal/15 bg-white/75 dark:bg-white/5 dark:border-white/10 p-8 text-center shadow-sm backdrop-blur-xl">
      {icon ? <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">{icon}</div> : null}
      <h3 className="mt-4 text-2xl font-black text-ink">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {description ? <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">{description}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#168484]", className)}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("inline-flex items-center gap-2 rounded-full border border-royal/15 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal", className)}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function Pill({ children, tone = "teal" }: { children: ReactNode; tone?: "teal" | "gold" | "crimson" | "royal" | "marigold" | "indigo" }) {
  const toneClass = {
    teal: "bg-teal/10 text-teal",
    gold: "bg-gold/15 text-[#8a6213]",
    crimson: "bg-crimson/10 text-crimson",
    royal: "bg-royal/10 text-royal",
    marigold: "bg-marigold/15 text-[#ad5e00]",
    indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  }[tone];

  return <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", toneClass)}>{children}</span>;
}

export function MetricCard({ title, value, detail, icon }: { title: string; value: ReactNode; detail?: string; icon: ReactNode }) {
  return (
    <GlassCard className="relative overflow-hidden p-6">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-teal/10 blur-3xl" />
      <div className="relative space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">{title}</p>
        <div className="text-2xl font-bold tracking-tight text-ink">{value}</div>
        {detail ? <p className="text-sm text-slate-400 dark:text-slate-500">{detail}</p> : null}
      </div>
      <div className="absolute right-4 top-4 rounded-2xl bg-white dark:bg-white/10 p-3 text-teal shadow-sm">{icon}</div>
    </GlassCard>
  );
}

export function ProgressBar({ value, accent = "teal" }: { value: number; accent?: "teal" | "gold" | "crimson" | "marigold" | "purple" | "blue" | "green" | "amber" | "indigo" | "fuchsia" }) {
  const barClass = {
    teal: "from-teal to-[#5bcac8]",
    gold: "from-gold to-marigold",
    crimson: "from-crimson to-[#ef6b6b]",
    marigold: "from-marigold to-[#ffd089]",
    purple: "from-[#8b5cf6] to-[#a78bfa]",
    blue: "from-blue-600 to-blue-400",
    green: "from-emerald-600 to-emerald-400",
    amber: "from-amber-600 to-amber-400",
    indigo: "from-indigo-600 to-indigo-400",
    fuchsia: "from-fuchsia-600 to-fuchsia-400",
  }[accent];

  return (
    <div className="h-3 rounded-full bg-royal/10 dark:bg-white/10">
      <div className={cn("h-3 rounded-full bg-gradient-to-r transition-[width] duration-700 ease-out", barClass)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function DashboardSidebar({ active, items, collapsed = false, onToggle }: {
  active: string;
  items: Array<{ label: string; href: string; icon: ReactNode }>;
  collapsed?: boolean;
  onToggle?: () => void;
}) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col rounded-3xl py-5 text-white shadow-glass",
        "bg-gradient-to-b from-[#3a2f55] via-[#4e4260] to-[#2d2445]",
        "border border-white/10",
        "transition-all duration-300 ease-in-out",
        collapsed ? "items-center px-3" : "px-4"
      )}
      style={{ boxShadow: "0 24px 64px rgba(20,10,40,0.35), inset 0 1px 0 rgba(255,255,255,0.1)" }}
    >
      {/* Brand + collapse toggle */}
      <div className={cn("flex w-full items-center", collapsed ? "justify-center" : "justify-between gap-2")}>
        <div className={cn("transition-all duration-300 overflow-hidden", collapsed ? "w-10" : "flex-1")}>
          {collapsed ? (
            <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-marigold shadow-glow transition-opacity hover:opacity-80">
              <Sparkles className="h-5 w-5 text-white" />
            </Link>
          ) : (
            <BrandMarkWhite />
          )}
        </div>
        <button
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/50 transition-all duration-200 hover:bg-white/20 hover:text-white hover:scale-105 active:scale-95"
        >
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform duration-300 ease-in-out",
              collapsed ? "rotate-0" : "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Subtle divider */}
      <div className="mt-5 h-px w-full rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Nav links */}
      <nav className="mt-4 flex w-full flex-col gap-0.5">
        {items.map((item) => {
          const isActive = item.label === active;
          return (
            <Link
              key={item.label}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "group relative flex items-center rounded-2xl py-2.5 text-sm font-semibold",
                "transition-all duration-200 ease-out",
                "overflow-hidden",
                collapsed ? "justify-center px-2" : "gap-3 px-3.5",
                isActive
                  ? "bg-white text-royal shadow-md"
                  : "text-white/65 hover:bg-white/10 hover:text-white"
              )}
            >
              {/* Active accent bar on left */}
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-gradient-to-b from-teal to-marigold" />
              )}

              {/* Icon */}
              <span className={cn(
                "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200",
                isActive
                  ? "bg-royal/8 text-royal"
                  : "text-white/65 group-hover:text-white group-hover:bg-white/10"
              )}>
                {item.icon}
              </span>

              {/* Label with slide-fade */}
              <span
                className={cn(
                  "whitespace-nowrap transition-all duration-300 ease-in-out",
                  collapsed
                    ? "w-0 opacity-0 overflow-hidden"
                    : "w-auto opacity-100"
                )}
              >
                {item.label}
              </span>

              {/* Hover shimmer overlay */}
              {!isActive && (
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/6 via-transparent to-transparent" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom streak widget */}
      <div className="mt-auto">
        {collapsed ? (
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-white/15 transition-all duration-200 cursor-default"
            title="18-day streak 🔥"
          >
            <Flame className="h-5 w-5 text-marigold" />
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="h-4 w-4 text-marigold flex-shrink-0" />
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">Streak</p>
            </div>
            <p className="text-3xl font-black text-white leading-none">
              18 <span className="text-sm font-semibold text-white/50">days</span>
            </p>
            <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal to-marigold transition-all duration-700"
                style={{ width: "72%" }}
              />
            </div>
            <p className="mt-2 text-xs text-white/40">Keep going — you&apos;re on a roll!</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export { DashboardNavbar } from "./dashboard-navbar";

export function DashboardTopbar({
  title,
  greeting = "learner",
  showGreeting = true,
  searchPlaceholder = "Search modules, lessons, or topics",
  hideStats = false,
  hideSearch = false,
  hideTitleLabel = false,
}: {
  title: string;
  greeting?: string;
  showGreeting?: boolean;
  searchPlaceholder?: string;
  hideStats?: boolean;
  hideSearch?: boolean;
  hideTitleLabel?: boolean;
}) {
  return (
    <div className={cn(
      "flex flex-col gap-4 py-3 lg:flex-row lg:items-center lg:justify-between",
      !showGreeting && "border-b border-slate-200/40 dark:border-white/5 pb-6",
      showGreeting && "-mt-2 lg:-mt-3"
    )}>
      <div>
        {showGreeting ? (
          <>
            {!hideTitleLabel && (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">{title}</p>
            )}
            <h1 className="text-3xl font-black text-ink mt-0.5">
              Welcome back, <span className="text-[#5bcac8]">{greeting}</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">You&apos;re on a roll — keep that streak alive today.</p>
          </>
        ) : (
          <h1 className="text-2xl font-black text-ink">{title}</h1>
        )}
      </div>
      {!hideSearch && (
        <div className="flex flex-1 items-center gap-3 lg:max-w-2xl lg:justify-end">
          {showGreeting && (
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-2.5 w-full">
              <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-ink" placeholder="Search modules, lessons, or topics..." />
            </div>
          )}
          {!showGreeting && (
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-slate-200/35 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-2.5 w-full">
              <LayoutDashboard className="h-4 w-4 text-royal/40 dark:text-white/30" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-ink" placeholder={searchPlaceholder} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function DashboardContainer({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-ink">
      {/* Light mode background */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{ background: "radial-gradient(circle at top left, rgba(24,155,155,0.12), transparent 26%), radial-gradient(circle at right, rgba(252,148,56,0.13), transparent 20%), linear-gradient(180deg, #f8f6f3, #f2eef7)" }}
      />
      {/* Dark mode background */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ background: "radial-gradient(circle at top left, rgba(24,155,155,0.08), transparent 30%), radial-gradient(circle at right, rgba(252,148,56,0.06), transparent 24%), linear-gradient(180deg, #12101e, #181428)" }}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
    </div>
  );
}

export function FeatureBadge({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="group h-full p-6 rounded-[2rem] border border-transparent transition-all duration-300 hover:border-slate-200/35 dark:hover:border-white/5 hover:bg-white/40 dark:hover:bg-white/5 hover:shadow-glass hover:backdrop-blur-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-all duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:text-white shadow-sm">{icon}</div>
      <h3 className="mt-5 text-xl font-bold text-ink group-hover:text-teal transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
}

export function SimpleList({ items }: { items: Array<{ title: string; description: string; icon: ReactNode }> }) {
  return (
    <div className="grid gap-8 md:grid-cols-3 relative">
      {items.map((item, idx) => (
        <div key={item.title} className="relative flex flex-col items-start p-2">
          {/* Step connector line */}
          {idx < items.length - 1 && (
            <div className="hidden md:block absolute top-7 left-14 right-[-2rem] h-[1px] bg-gradient-to-r from-marigold/30 to-transparent" />
          )}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-marigold to-orange-500 text-white shadow-lg transition-transform duration-300 hover:rotate-6">
            {item.icon}
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-marigold">Step 0{idx + 1}</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export { ArrowRight, BadgeCheck, Bot, Brain, GraduationCap, LayoutDashboard, LineChart, ShieldCheck, Sparkles, Users };