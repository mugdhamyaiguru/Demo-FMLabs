"use client";

export default function ContactForm() {
  return (
    <div className="px-8 py-14 lg:px-14 lg:py-20">
      <div className="inline-flex items-center rounded-full bg-[#189b9b]/10 border border-[#189b9b]/20 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#189b9b]">
        Book a demo
      </div>
      <h3 className="mt-3 text-2xl font-extrabold text-white leading-snug">
        Start with FutureMinds
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-white/55">
        Fill in your details and our team will reach out within 24 hours.
      </p>

      <form
        className="mt-9 space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name + Email row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            defaultValue=""
            className="w-full rounded-xl border border-white/[0.12] bg-[#1e1930] px-4 py-3 text-sm text-white/75 outline-none transition-all duration-200 focus:border-[#189b9b]/55 focus:ring-1 focus:ring-[#189b9b]/30 appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-white/40">Select your role&hellip;</option>
            <option value="student"  className="text-white bg-[#1e1930]">Student</option>
            <option value="parent"   className="text-white bg-[#1e1930]">Parent</option>
            <option value="teacher"  className="text-white bg-[#1e1930]">Teacher</option>
            <option value="school"   className="text-white bg-[#1e1930]">School / Institution</option>
            <option value="partner"  className="text-white bg-[#1e1930]">Partnership Inquiry</option>
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

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#189b9b] to-[#148282] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#189b9b]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#189b9b]/35 hover:shadow-xl"
          >
            Book a Demo
            <span aria-hidden="true" className="text-white/65">&rarr;</span>
          </button>
          <p className="text-[11px] text-white/40 leading-[1.7]">
            No commitment required.
            <br className="hidden sm:block" />
            We respond within 24 hours.
          </p>
        </div>
      </form>
    </div>
  );
}
