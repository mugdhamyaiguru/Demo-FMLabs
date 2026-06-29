"use client";

import { useState, useRef, useEffect } from "react";
import { GraduationCap, Users, School, Handshake } from "lucide-react";
import { cn } from "@/components/platform";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  const [selectedRole, setSelectedRole] = useState<string>("student");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.22,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const audienceCards = [
    {
      value: "student",
      title: "Student",
      desc: "Explore AI-powered courses and personalized learning paths.",
      icon: <GraduationCap className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      value: "parent",
      title: "Parent",
      desc: "Track your child's progress and stay connected to their learning journey.",
      icon: <Users className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      value: "teacher",
      title: "Teacher / School",
      desc: "Access classroom tools, analytics and curriculum integration.",
      icon: <School className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      value: "partner",
      title: "Partnership",
      desc: "Collaborate with FutureMinds AI Labs for institutional programs and AI education.",
      icon: <Handshake className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    }
  ];

  return (
    <section ref={sectionRef} className="relative z-10 w-full py-8 lg:py-12 overflow-hidden bg-gradient-to-br from-[#32284a] via-[#1e1930] to-[#131020] shadow-[0_32px_80px_rgba(0,0,0,0.55)]">
      {/* Ambient glow layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full opacity-[0.16] blur-[100px]" style={{ background: "radial-gradient(circle, #189b9b, transparent 70%)" }} />
        <div className="absolute -bottom-24 right-0 h-[26rem] w-[26rem] rounded-full opacity-[0.12] blur-[90px]" style={{ background: "radial-gradient(circle, #fc9438, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full opacity-[0.06] blur-[130px]" style={{ background: "radial-gradient(circle, #7c5cbf, transparent 65%)" }} />
      </div>

      {/* Smooth inner vignette */}
      <div aria-hidden="true" className="absolute inset-0 -z-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(24,155,155,0.04) 0%, transparent 70%)" }} />

      <div className="mx-auto max-w-[1480px] px-10 lg:px-20 relative z-10">

        {/* Centered section header */}
        <div
          className="text-center max-w-2xl mx-auto mb-6 lg:mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform, opacity",
          }}
        >
          <h2 className="text-[28px] lg:text-[32px] font-extrabold leading-tight text-white hero-title-font">
            We&apos;re here for every learner
          </h2>
          <p className="mt-2 text-[14px] leading-6 text-white/70">
            Whether you&apos;re a student exploring AI learning, a parent tracking progress, or a school looking to partner&mdash;we&apos;d love to hear from you.
          </p>
        </div>

        {/* Two column grid */}
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.15fr_1fr] items-stretch">

          {/* Left Column */}
          <div
            className="flex flex-col gap-3 h-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-80px)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
              willChange: "transform, opacity",
            }}
          >
            <h3 className="text-xl font-semibold text-white tracking-wide">
              How can we help?
            </h3>

            <div className="flex flex-col flex-1 gap-3">
              {audienceCards.map((item) => {
                const isSelected = selectedRole === item.value;
                return (
                  <div
                    key={item.value}
                    onClick={() => setSelectedRole(item.value)}
                    className={cn(
                      "group flex flex-1 items-center gap-4 rounded-[16px] px-6 border transition-all duration-300 cursor-pointer w-full bg-[#1e1b2e]/45 backdrop-blur-md",
                      isSelected
                        ? "border-[#189b9b] shadow-[0_0_25px_rgba(24,155,155,0.15),_inset_0_1px_1px_rgba(255,255,255,0.15)] bg-[#189b9b]/5"
                        : "border-white/[0.08] shadow-md hover:-translate-y-1 hover:border-white/20 hover:shadow-lg"
                    )}
                  >
                    <div className={cn(
                      "flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-colors duration-300",
                      isSelected ? "border-[#189b9b]/40 text-[#21d0d0]" : "text-white/70"
                    )}>
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <p className="text-[19px] font-semibold text-white tracking-wide leading-tight">{item.title}</p>
                      <p className="text-[14px] leading-relaxed text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div
            className="w-full h-full"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(80px)",
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s",
              willChange: "transform, opacity",
            }}
          >
            <ContactForm selectedRole={selectedRole} onRoleChange={setSelectedRole} />
          </div>

        </div>
      </div>
    </section>
  );
}