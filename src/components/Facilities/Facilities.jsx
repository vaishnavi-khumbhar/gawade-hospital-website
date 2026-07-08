import { useEffect, useRef } from "react";
import {
  FaHospital, FaUserMd, FaHeartbeat, FaProcedures,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import whyImg from "../../assets/why.png";

// Numbers/suffixes stay as plain data (universal digits), only the
// title/description/display text is looked up via translation keys.
const highlights = [
  { number: 15, suffix: "+", titleKey: "whyHighlight1Title", descKey: "whyHighlight1Desc", icon: <FaHospital /> },
  { number: 10, suffix: "+", titleKey: "whyHighlight2Title", descKey: "whyHighlight2Desc", icon: <FaUserMd /> },
  { number: null, displayKey: "whyHighlight3Display", titleKey: "whyHighlight3Title", descKey: "whyHighlight3Desc", icon: <FaHeartbeat /> },
  { number: 1000, suffix: "+", titleKey: "whyHighlight4Title", descKey: "whyHighlight4Desc", icon: <FaProcedures /> },
];

function CountUp({ target, suffix = "", display }) {
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (display || target === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            if (ref.current) ref.current.textContent = Math.round(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix, display]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#8b1e72]">
      {display ?? `0${suffix}`}
    </span>
  );
}

export default function WhyChooseGawade() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#8b1e72] via-[#9c257f] to-[#6a1554] py-12 md:py-10">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
           
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {t("whyHeadingLine1")}<br />{t("whyHeadingLine2")} {" "}
              <span className="block text-[#f7d6ea]">{t("whyHeadingLine3")}</span>
            </h2>
<p className="mt-5 text-gray-100 text-[17px] sm:text-[18px] lg:text-[20px] leading-8 lg:leading-9 max-w-2xl mx-auto lg:mx-0">              {t("whyParagraph")}
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <img
              src={whyImg}
              alt="Doctor at Gawade Hospital"
              className="relative z-10 w-[260px] sm:w-[320px] lg:w-[430px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Counter Cards — animated on scroll */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <div key={i}
              className="group rounded-3xl bg-white p-5 md:p-6 text-center shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#8b1e72] text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <CountUp
                target={item.number}
                suffix={item.suffix}
                display={item.displayKey ? t(item.displayKey) : undefined}
              />
              <h4 className="mt-2 text-sm md:text-base font-semibold "  style={{ color: "#8b1e72" }}>{t(item.titleKey)}</h4>
<p className="mt-2 text-[15px] sm:text-[16px] lg:text-[17px] text-gray-500 leading-7">
  {t(item.descKey)}
</p>
            </div>
          ))}
        </div>

        {/* Mission Box */}
        <div className="mt-8">
          <div className="bg-white rounded-3xl p-5 md:p-7 shadow-xl border-l-4 border-[#8b1e72]">
<p className="text-center mt-3 text-gray-700 text-[16px] sm:text-[17px] lg:text-[18px] leading-8 max-w-5xl mx-auto">              {t("whyMissionText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
