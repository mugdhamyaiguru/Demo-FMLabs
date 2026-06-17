"use client";

import { useState, useEffect } from "react";
import {
  Trophy, BadgeCheck, Flame, Target, Star, Medal, Zap, Crown,
  Brain, Code2, Moon, Dumbbell, CalendarCheck, Bot, Share2,
  Rocket, BookOpen, Palette, Unlock, Music, Award, FileText, ChevronDown,
} from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

function Accordion({
  title,
  subtitle,
  icon,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[2.5rem] border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-[#1a1727]/30 backdrop-blur-md shadow-glass overflow-hidden transition-all duration-300">
      {/* Header Button */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-500/5 dark:hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-marigold shadow-md text-white flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-black text-ink leading-tight">{title}</h3>
            <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-550 font-bold uppercase tracking-wider leading-none">{subtitle}</p>
          </div>
        </div>
        <ChevronDown 
          className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`} 
        />
      </button>

      {/* Content wrapper with smooth animation */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[2200px] opacity-100 p-6 pt-0 border-t border-slate-200/20 dark:border-white/5" : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="pt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

const badges = [
  { name: "Quick Learner",   desc: "Complete 5 modules",       earned: true,  Icon: Zap,          color: "from-gold to-marigold",       iconColor: "text-white" },
  { name: "Quiz Master",     desc: "Score 100% on 3 quizzes",  earned: true,  Icon: Target,       color: "from-teal to-[#0d7272]",      iconColor: "text-white" },
  { name: "Perfect Streak",  desc: "7-day streak",             earned: true,  Icon: Flame,        color: "from-crimson to-[#e05555]",   iconColor: "text-white" },
  { name: "Math Wizard",     desc: "Complete Math track",      earned: true,  Icon: Star,         color: "from-royal to-[#6f5a88]",     iconColor: "text-white" },
  { name: "Science Star",    desc: "Score 90%+ in Science",    earned: true,  Icon: Award,        color: "from-gold to-[#c49030]",      iconColor: "text-white" },
  { name: "Coding Ninja",    desc: "Complete coding basics",   earned: true,  Icon: Code2,        color: "from-[#0a4f3a] to-teal",      iconColor: "text-white" },
  { name: "Night Owl",       desc: "Learn after 10 PM",        earned: true,  Icon: Moon,         color: "from-[#1a1040] to-royal",     iconColor: "text-white" },
  { name: "Weekend Warrior", desc: "Learn on weekends",        earned: true,  Icon: Dumbbell,     color: "from-marigold to-[#e07e20]",  iconColor: "text-white" },
  { name: "Perfect Month",   desc: "100% attendance month",    earned: true,  Icon: CalendarCheck, color: "from-teal to-[#0e8888]",     iconColor: "text-white" },
  { name: "XP King",         desc: "Earn 10k XP",             earned: true,  Icon: Crown,        color: "from-gold to-marigold",       iconColor: "text-white" },
  { name: "AI Master",       desc: "Use AI Tutor 50 times",   earned: true,  Icon: Bot,          color: "from-royal to-teal",          iconColor: "text-white" },
  { name: "Social Butterfly",desc: "Share progress 5 times",  earned: true,  Icon: Share2,       color: "from-[#8e3ab9] to-royal",     iconColor: "text-white" },
  { name: "Speedrunner",     desc: "Complete module in <10min",earned: false, Icon: Rocket,       color: "from-slate-300 to-slate-200", iconColor: "text-slate-400" },
  { name: "Level 20",        desc: "Reach level 20",          earned: false, Icon: Trophy,       color: "from-slate-300 to-slate-200", iconColor: "text-slate-400" },
];

const rewardShopItems = [
  { reward: "Profile Badge",       cost: 500,  Icon: BadgeCheck, available: true  },
  { reward: "Extra AI Tutor Hour", cost: 750,  Icon: Brain,      available: true  },
  { reward: "Theme Color",         cost: 300,  Icon: Palette,    available: true  },
  { reward: "Feature Access",      cost: 1000, Icon: Unlock,     available: false },
  { reward: "Exclusive Badge",     cost: 600,  Icon: Award,      available: true  },
  { reward: "Study Music Pack",    cost: 400,  Icon: Music,      available: true  },
  { reward: "Priority Support",    cost: 800,  Icon: Star,       available: false },
  { reward: "Certificate",         cost: 1200, Icon: FileText,   available: true  },
];

const leaderboard = [
  { rank: 1, name: "Ishaan P.", xp: 2840, you: false, Icon: Crown,   iconClass: "bg-gradient-to-br from-gold to-marigold text-white" },
  { rank: 2, name: "Mira S.",   xp: 2575, you: false, Icon: Medal,   iconClass: "bg-slate-200 text-slate-500" },
  { rank: 3, name: "You",       xp: 2310, you: true,  Icon: Trophy,  iconClass: "bg-gradient-to-br from-[#cd7f32]/30 to-[#cd7f32]/10 text-[#cd7f32]" },
  { rank: 4, name: "Ravi K.",   xp: 2180, you: false, Icon: Star,    iconClass: "bg-surface text-slate-400 dark:bg-slate-700" },
  { rank: 5, name: "Aanya J.",  xp: 1950, you: false, Icon: Zap,     iconClass: "bg-surface text-slate-400 dark:bg-slate-700" },
];

export default function RewardsPage() {
  const [achievementsOpen, setAchievementsOpen] = useState(true);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const ach = localStorage.getItem("rewards_ach_open");
    const shp = localStorage.getItem("rewards_shp_open");
    if (ach !== null) setAchievementsOpen(ach === "true");
    if (shp !== null) setShopOpen(shp === "true");
  }, []);

  const toggleAchievements = () => {
    setAchievementsOpen((prev) => {
      const next = !prev;
      localStorage.setItem("rewards_ach_open", String(next));
      return next;
    });
  };

  const toggleShop = () => {
    setShopOpen((prev) => {
      const next = !prev;
      localStorage.setItem("rewards_shp_open", String(next));
      return next;
    });
  };

  return (
    <AppShell active="Rewards" title="Rewards & Achievements">
      <div className="space-y-5 w-full max-w-none">
        {/* Metric Console */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 py-3 border-b border-slate-200/20 dark:border-white/5 pb-6">
          <div className="flex flex-wrap items-center gap-6 md:gap-8 lg:gap-10 w-full justify-between animate-fade-in px-6 md:px-12">
            {/* Total XP */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">8,420</div>
              <div className="text-xs font-semibold text-slate-400">Total XP</div>
              <div className="text-[10px] font-bold text-teal">685 / 1,000 XP</div>
            </div>

            <div className="hidden md:block h-8 w-px bg-slate-200/20 dark:bg-white/10" />

            {/* Current Level */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">12</div>
              <div className="text-xs font-semibold text-slate-400">Current Level</div>
              <div className="text-[10px] font-bold text-teal">Level 13 next</div>
            </div>

            <div className="hidden md:block h-8 w-px bg-slate-200/20 dark:bg-white/10" />

            {/* Streak Days */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">18</div>
              <div className="text-xs font-semibold text-slate-400">Streak Days</div>
              <div className="text-[10px] font-bold text-amber-500">Keep it up today!</div>
            </div>

            <div className="hidden md:block h-8 w-px bg-slate-200/20 dark:bg-white/10" />

            {/* Badges Earned */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">14</div>
              <div className="text-xs font-semibold text-slate-400">Badges Earned</div>
              <div className="text-[10px] font-bold text-slate-500">Of 24 badges total</div>
            </div>
          </div>
        </div>

        {/* XP Progress & Streak */}
        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div className="flex items-center justify-between">
              <div>
                <Pill tone="teal">Level Progression</Pill>
                <h3 className="mt-3 text-2xl font-black text-ink">Level 12 → Level 13</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <Target className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-3 flex justify-between text-sm">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-semibold text-ink">685 / 1,000 XP</span>
                </div>
                <ProgressBar value={68.5} accent="teal" />
              </div>
              <p className="text-sm text-slate-500">
                Complete 3 more modules or score 315 XP to reach Level 13 and unlock Premium Tutor features.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <h3 className="text-xl font-black text-ink">Current Streak</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-crimson/10 to-marigold/10 p-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson to-[#e05555] shadow-lg">
                  <Flame className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-4xl font-black text-crimson">18</p>
                  <p className="mt-1 text-sm text-slate-500">Days of consistent learning</p>
                </div>
              </div>
              <p className="text-xs text-center text-slate-500">
                Complete 1 activity today to keep your streak alive!
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Badges & Achievements Accordion */}
        <Accordion
          title="Achievements"
          subtitle="14 badges earned"
          icon={<Trophy className="h-6 w-6 text-white" />}
          isOpen={achievementsOpen}
          onToggle={toggleAchievements}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`group rounded-2xl p-5 text-center transition-all duration-200 ${
                  badge.earned
                    ? "bg-gradient-to-br from-gold/12 to-marigold/12 border border-gold/25 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                    : "bg-surface dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 opacity-45"
                }`}
              >
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${badge.color} shadow-md`}>
                  <badge.Icon className={`h-7 w-7 ${badge.iconColor}`} />
                </div>
                <p className="mt-3 font-semibold text-ink text-sm">{badge.name}</p>
                <p className="text-xs text-slate-500 mt-1">{badge.desc}</p>
                {badge.earned && (
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold">
                    <BadgeCheck className="h-3 w-3" /> Earned
                  </div>
                )}
              </div>
            ))}
          </div>
        </Accordion>

        {/* Leaderboard & Rankings */}
        <div className="grid gap-5 lg:grid-cols-2">
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div className="flex items-center justify-between">
              <div>
                <Pill tone="teal">Weekly Leaderboard</Pill>
                <h3 className="mt-3 text-2xl font-black text-ink">Top Performers</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <Trophy className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between rounded-2xl p-4 ${
                    user.you
                      ? "bg-teal/10 border border-teal/25"
                      : "bg-surface dark:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${user.iconClass}`}>
                      <user.Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.xp} XP</p>
                    </div>
                  </div>
                  <span className={`text-sm font-black ${user.you ? "text-teal" : "text-slate-400"}`}>
                    #{user.rank}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div className="flex items-center justify-between">
              <div>
                <Pill tone="marigold">Monthly Milestones</Pill>
                <h3 className="mt-3 text-2xl font-black text-ink">Your Progress</h3>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-marigold to-[#e07e20] shadow-sm">
                <Medal className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { milestone: "Modules Completed",    current: 23, target: 30, accent: "teal" },
                { milestone: "Quizzes Passed",       current: 18, target: 25, accent: "marigold" },
                { milestone: "Projects Submitted",   current: 8,  target: 10, accent: "gold" },
                { milestone: "Total Learning Hours", current: 42, target: 50, accent: "crimson" },
              ].map((item) => (
                <div key={item.milestone}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400 font-medium">{item.milestone}</span>
                    <span className="font-bold text-ink">{item.current} / {item.target}</span>
                  </div>
                  <ProgressBar value={(item.current / item.target) * 100} accent={item.accent as any} />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Reward Shop Accordion */}
        <Accordion
          title="Reward Shop"
          subtitle="8 rewards available"
          icon={<Star className="h-6 w-6 text-white" />}
          isOpen={shopOpen}
          onToggle={toggleShop}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rewardShopItems.map((item) => (
              <div
                key={item.reward}
                className={`group rounded-2xl p-5 text-center transition-all duration-200 cursor-pointer ${
                  item.available
                    ? "bg-gradient-to-br from-gold/10 to-marigold/10 border border-gold/25 hover:-translate-y-1 hover:shadow-md"
                    : "bg-surface dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 opacity-50"
                }`}
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm ${
                  item.available
                    ? "bg-gradient-to-br from-gold/30 to-marigold/30 text-[#8a6213]"
                    : "bg-slate-200 text-slate-400"
                }`}>
                  <item.Icon className="h-6 w-6" />
                </div>
                <p className="mt-3 font-semibold text-ink text-sm">{item.reward}</p>
                <p className="mt-1 text-base font-bold text-gold">{item.cost} XP</p>
                {item.available && (
                  <button className="mt-3 w-full rounded-xl bg-gold/20 px-3 py-2 text-xs font-bold text-[#8a6213] hover:bg-gold/35 transition-colors">
                    Redeem
                  </button>
                )}
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </AppShell>
  );
}
