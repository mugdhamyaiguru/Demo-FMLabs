"use client";

interface ContactFormProps {
  selectedRole?: string;
  onRoleChange?: (role: string) => void;
}

export default function ContactForm({ selectedRole = "", onRoleChange }: ContactFormProps) {
  return (
    <div className="bg-[#1e1b2e]/60 border border-white/10 p-8 sm:p-10 lg:pb-12 rounded-[2.5rem] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/15 lg:h-full flex flex-col">
      <form
        className="flex-grow flex flex-col justify-between"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Fields Stack */}
        <div className="space-y-6">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-name"
                className="text-[11px] font-semibold uppercase tracking-wider text-white/55"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Aanya Sharma"
                className="w-full rounded-xl border border-white/[0.12] bg-white/[0.07] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-[#189b9b]/55 focus:bg-white/[0.10] focus:ring-1 focus:ring-[#189b9b]/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-[11px] font-semibold uppercase tracking-wider text-white/55"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="aanya@school.edu"
                className="w-full rounded-xl border border-white/[0.12] bg-white/[0.07] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-[#189b9b]/55 focus:bg-white/[0.10] focus:ring-1 focus:ring-[#189b9b]/30"
              />
            </div>
          </div>

          {/* Role selector */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-role"
              className="text-[11px] font-semibold uppercase tracking-wider text-white/55"
            >
              I am a
            </label>
            <select
              id="contact-role"
              value={selectedRole}
              onChange={(e) => onRoleChange?.(e.target.value)}
              className="w-full rounded-xl border border-white/[0.12] bg-[#1e1930] px-4 py-3 text-sm text-white/75 outline-none transition-all duration-200 focus:border-[#189b9b]/55 focus:ring-1 focus:ring-[#189b9b]/30 appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-white/40 bg-[#1e1930]">Select your role&hellip;</option>
              <option value="student"  className="text-white bg-[#1e1930]">Student</option>
              <option value="parent"   className="text-white bg-[#1e1930]">Parent</option>
              <option value="teacher"  className="text-white bg-[#1e1930]">Teacher / School</option>
              <option value="partner"  className="text-white bg-[#1e1930]">Partnership</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-[11px] font-semibold uppercase tracking-wider text-white/55"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Tell us what you're looking for…"
              className="w-full resize-none rounded-xl border border-white/[0.12] bg-white/[0.07] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-[#189b9b]/55 focus:bg-white/[0.10] focus:ring-1 focus:ring-[#189b9b]/30"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-8 lg:pt-10 mt-auto w-full">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#189b9b] to-[#148282] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#189b9b]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#189b9b]/35 hover:shadow-xl w-full justify-center"
          >
            Book a Demo
            <span aria-hidden="true" className="text-white/65">&rarr;</span>
          </button>
        </div>
      </form>
    </div>
  );
}
