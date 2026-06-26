import { useState, useEffect } from "react";
import {
  Phone,
  Ambulance,
  Calendar,
  MessageCircle,
} from "lucide-react";

const slides = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* The CTA buttons + their svg icons are identical on mobile and
     desktop, so they're written once here and reused in both layouts
     below instead of duplicating the markup. */
  const ctaButtons = (
    <div
      className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-10 w-full sm:w-auto"
      style={{ fontFamily: "Signika, sans-serif" }}
    >
      <a
        href="/appointment"
        className="
        group
        w-full sm:w-auto
        h-13 sm:h-14
        px-6
        rounded-xl
        bg-white
        text-[#8b1e72]
        font-semibold
        text-base
        flex items-center justify-center sm:justify-start
        gap-3
        shadow-[0_10px_30px_rgba(0,0,0,0.15)]
        hover:shadow-[0_15px_40px_rgba(139,30,114,0.35)]
        hover:-translate-y-1
        hover:bg-[#fdf7fb]
        duration-300
      "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
          />
        </svg>
        Book Appointment
      </a>

      <a
        href="tel:+919876543210"
        className="
        group
        w-full sm:w-auto
        h-13 sm:h-14
        px-6 sm:px-8
        rounded-xl
        bg-white/10
        backdrop-blur-lg
        border border-white/30
        text-white
        font-semibold
        text-base
        flex items-center justify-center sm:justify-start
        gap-3
        shadow-[0_8px_25px_rgba(255,255,255,0.08)]
        hover:bg-white
        hover:text-[#8b1e72]
        hover:border-white
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(255,255,255,0.25)]
        transition-all
        duration-300
      "
      >
        Call Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 shrink-0 text-white group-hover:text-[#8b1e72]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.129a11.042 11.042 0 005.516 5.516l1.129-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </div>
  );

  const heading = (
    <h1
      className="text-[1.75rem] leading-[1.2] sm:text-5xl sm:leading-tight md:text-6xl font-bold"
      style={{ fontFamily: "Signika, sans-serif" }}
    >
      <span className="text-white">
        Advanced Orthopedic,
        <br />
        Trauma &amp; Multispeciality
      </span>
      <br />
      <span className="text-[#f0c419]">Care in Baramati</span>
    </h1>
  );

  const paragraph = (
    <p
      className="mt-4 sm:mt-6 text-sm sm:text-lg text-white/95 sm:text-white max-w-xl leading-relaxed"
      style={{ fontFamily: "Signika, sans-serif" }}
    >
      Expert care with compassion, advanced technology, and a
      patient-first approach for a healthier tomorrow.
    </p>
  );

  return (
    <section className="relative">

      {/* ============================================================ */}
      {/* EMERGENCY SIDE TAB — desktop/tablet hover version (unchanged) */}
      {/* ============================================================ */}

      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 group items-center">

        <div className="bg-red-600 text-white w-10 h-32 rounded-r-lg shadow-lg flex items-center justify-center cursor-pointer">
          <span
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            EMERGENCY
          </span>
        </div>

        <div className="ml-2 w-72 opacity-0 invisible -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0">
          <div className="bg-white border border-[#8b1e72]/20 rounded-xl shadow-2xl overflow-hidden">

            <div className="bg-[#8b1e72] text-white px-4 py-3 font-semibold">
              Emergency Contact
            </div>

            <div className="p-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg"
              >
                <Ambulance size={18} className="text-[#8b1e72]" />
                <span>Emergency +91 98765 43210</span>
              </a>

              <a
                href="tel:+912012345678"
                className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg"
              >
                <Phone size={18} className="text-[#8b1e72]" />
                <span>Call +91 20 1234 5678</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg"
              >
                <MessageCircle size={18} className="text-[#8b1e72]" />
                <span>WhatsApp</span>
              </a>

              <a
                href="/appointment"
                className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg"
              >
                <Calendar size={18} className="text-[#8b1e72]" />
                <span>Book Appointment</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile-only one-tap emergency pill (no hover panel - touch
          screens don't have hover, so this is a direct-dial shortcut) */}
      <a
        href="tel:+919876543210"
        className="
        md:hidden
        fixed left-3 bottom-5 z-50
        bg-red-600 text-white
        w-11 h-11
        rounded-full
        shadow-lg
        flex items-center justify-center
        animate-pulse
      "
        aria-label="Emergency Call"
      >
        <Ambulance size={18} />
      </a>

      {/* ============================================================ */}
      {/* DESKTOP / TABLET LAYOUT (md and up) — unchanged:              */}
      {/* full-bleed background image with text overlaid on top         */}
      {/* ============================================================ */}

      <div className="hidden md:block relative h-[510px]">

        <div className="absolute inset-0">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

<div
  className="absolute inset-0"
  style={{
    background:
      "linear-gradient(80deg, rgba(139,30,114,0.92) 0%, rgba(139,30,114,0.82) 20%, rgba(139,30,114,0.55) 30%, rgba(139,30,114,0.18) 75%, rgba(139,30,114,0) 100%)",
  }}
/>      </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            {heading}
            {paragraph}
            {ctaButtons}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`rounded-full duration-300 ${
                active === index ? "w-8 h-3 bg-white" : "w-3 h-3 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE-ONLY LAYOUT (below md):                                */}
      {/* image block on top, solid dark content block below it        */}
      {/* ============================================================ */}

      <div className="md:hidden">

        {/* Image block */}
        <div className="relative h-[230px] overflow-hidden">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Gawade Hospital patient care"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Slider dots sit on the image itself */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`rounded-full duration-300 ${
                  active === index ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Solid dark content block below the image */}
        <div className="bg-gradient-to-br from-[#8b1e72] via-[#6d1658] to-[#4a0f3c]">
          <div className="px-5 py-8">
            {heading}
            {paragraph}
            {ctaButtons}
          </div>
        </div>

      </div>

    </section>
  );
}
