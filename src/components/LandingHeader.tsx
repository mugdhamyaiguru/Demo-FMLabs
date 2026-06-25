"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/platform";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Features", href: "#features", id: "features" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Login", href: "/login", id: "login" },
];

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // 1. Scroll listener for glassmorphism styles
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. Intersection Observer to highlight active section on scroll
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section is in active viewing area
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      if (link.href.startsWith("#")) {
        const el = document.getElementById(link.id);
        if (el) observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
      <header
        className={`w-full max-w-7xl pointer-events-auto transition-all duration-300 rounded-full flex items-center justify-between border ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-slate-200/30 py-4 px-8 lg:px-12 shadow-[0_4px_20px_rgba(38,26,67,0.04),0_12px_40px_rgba(38,26,67,0.06)]"
            : "bg-white/85 backdrop-blur-sm border-slate-200/20 py-5 px-8 lg:px-12 shadow-[0_2px_10px_rgba(38,26,67,0.02),0_6px_20px_rgba(38,26,67,0.03)]"
        }`}
      >
        {/* Left: Brand Logo */}
        <div className="flex-1 flex justify-start">
          <BrandMark />
        </div>

        {/* Center: Centered Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "text-[#189b9b] font-bold"
                    : "text-slate-600 hover:text-[#189b9b]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex-1 flex justify-end">
          <a
            href="/signup"
            className="hidden md:inline-flex rounded-full bg-[#fc9438] px-6 py-2.5 text-sm font-bold text-white transition-all shadow-md hover:-translate-y-0.5 hover:bg-[#e67e22] hover:shadow-lg"
          >
            Signup
          </a>
        </div>
      </header>
    </div>
  );
}
