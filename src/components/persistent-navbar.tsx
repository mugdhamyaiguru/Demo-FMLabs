"use client";

import { usePathname } from "next/navigation";
import { DashboardNavbar } from "@/components/platform";
import { adminNav, studentNav, teacherNav, parentNav } from "@/components/page-shell";

export function PersistentNavbar() {
  const pathname = usePathname();

  // Determine navbar properties based on the current pathname
  const getNavbarProps = () => {
    if (!pathname) return null;

    if (pathname.startsWith("/admin")) {
      const active = pathname === "/admin" ? "Dashboard"
                   : pathname.startsWith("/admin/schools") ? "Schools"
                   : pathname.startsWith("/admin/users") ? "Users"
                   : pathname.startsWith("/admin/settings") ? "Settings"
                   : "Dashboard";
      return { role: "admin" as const, active, items: adminNav };
    }

    if (pathname.startsWith("/teacher")) {
      const active = pathname === "/teacher" ? "Dashboard"
                   : pathname.startsWith("/teacher/roster") ? "Roster"
                   : pathname.startsWith("/teacher/assignments") ? "Assignments"
                   : pathname.startsWith("/teacher/attendance") ? "Attendance"
                   : pathname.startsWith("/teacher/practicals") ? "Practicals"
                   : pathname.startsWith("/teacher/live") ? "Live Session"
                   : pathname.startsWith("/teacher/reports") ? "Reports"
                   : pathname.startsWith("/teacher/notifications") ? "Notifications"
                   : pathname.startsWith("/teacher/settings") ? "Settings"
                   : "Dashboard";
      return { role: "teacher" as const, active, items: teacherNav };
    }

    if (pathname.startsWith("/parent")) {
      const active = pathname === "/parent" ? "Dashboard"
                   : pathname.startsWith("/parent/progress") ? "Progress"
                   : pathname.startsWith("/parent/attendance") ? "Attendance"
                   : pathname.startsWith("/parent/skills") ? "Skills"
                   : pathname.startsWith("/parent/weak-topics") ? "Weak Topics"
                   : pathname.startsWith("/parent/alerts") ? "Alerts"
                   : pathname.startsWith("/parent/reports") ? "Reports"
                   : pathname.startsWith("/parent/settings") ? "Settings"
                   : "Dashboard";
      return { role: "parent" as const, active, items: parentNav };
    }

    // Student / default dashboard routes
    const active = pathname.startsWith("/student") ? "Dashboard"
                 : pathname.startsWith("/modules") ? "Modules"
                 : pathname.startsWith("/tutor") ? "AI Tutor"
                 : pathname.startsWith("/progress") ? "Progress"
                 : pathname.startsWith("/rewards") ? "Rewards"
                 : pathname.startsWith("/settings") ? "Settings"
                 : pathname.startsWith("/lesson") ? "Modules"
                 : pathname.startsWith("/quiz") ? "Dashboard"
                 : null;

    if (active) {
      return { role: "student" as const, active, items: studentNav };
    }

    return null;
  };

  const props = getNavbarProps();

  // Only render on dashboard routes, not on landing page, login, or signup
  if (!props) return null;

  return (
    <div className="sticky top-0 z-50 w-full bg-transparent">
      <div className="mx-auto w-full max-w-none px-8 py-5 lg:px-12 lg:py-7">
        <DashboardNavbar active={props.active} items={props.items} role={props.role} />
      </div>
    </div>
  );
}
