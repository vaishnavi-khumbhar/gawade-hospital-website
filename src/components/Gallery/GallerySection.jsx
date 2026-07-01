import jointReplacementImg from "../../assets/joint-replacement.jpg";
import { Link } from "react-router-dom";

export default function HeroJointReplacement() {
  const facilities = [
    "Advanced operation theatres",
    "ICU and critical care unit",
    "CT scan and diagnostics",
    "Physiotherapy and rehabilitation",
    "Trauma and emergency care",
    "Comfortable patient rooms",
    "Cashless insurance facility",
    "Modern diagnostic support",
  ];

  const highlights = [
    "Knee replacement surgery",
    "Hip replacement surgery",
    "Advanced surgical techniques",
    "Physiotherapy and rehabilitation support",
  ];

  return (
    <>
      {/* ── MARQUEE STRIP ── */}
      <div className="bg-white overflow-hidden py-3 whitespace-nowrap border-y-2 border-[#8b1e72]">
        <div className="inline-flex animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, copy) => (
            <span key={copy} className="inline-flex">
              {facilities.map((text, i) => (
                <span
                  key={i}
className="
  inline-flex
  items-center
  gap-3
  px-6 sm:px-8
  text-[#8b1e72]
  text-[30px] sm:text-[30px] lg:text-[30px]
  font-bold
  tracking-wide
  flex-shrink-0
"                >
                  <span
className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 bg-[#8b1e72] rotate-45"
                    aria-hidden="true"
                  />
                  {text}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="bg-[#8b1e72] px-4 sm:px-8 lg:px-10 pt-10 sm:pt-12 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">

          {/* Left — text */}
          <div className="flex-1 min-w-0 w-full">

            {/* label */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <div className="w-7 sm:w-8 h-0.5 bg-[#f0c060]" />
              <span className="text-[#f0c060] text-[13px] sm:text-[17px] font-semibold tracking-[.13em] uppercase">
                Centre for Joint Replacement
              </span>
            </div>

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
              Advanced knee and hip{" "}
              <span className="inline sm:hidden">replacement surgery </span>
              <span className="hidden sm:inline">
                <br />replacement surgery<br />
              </span>
              <span className="text-[#f0c060]">in Baramati</span>
            </h1>

<p className="text-white/75 mt-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-8 max-w-xl mb-6 sm:mb-7">              Gawade Hospital's Joint Replacement Centre offers advanced surgical
              techniques, experienced orthopedic specialists, and complete
              rehabilitation support for a faster and stronger recovery.
            </p>

            {/* checklist */}
            <ul className="flex flex-col gap-2 sm:gap-2.5 mb-6 sm:mb-7">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-white/90 text-sm sm:text-base">
<span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f0c060] flex items-center justify-center flex-shrink-0 text-[#8b1e72] text-sm sm:text-base font-bold shadow-sm">                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* buttons */}
           <div className="flex flex-row gap-2">
  <Link
    to="/appointment"
className="
  px-6 py-3.5
  rounded-xl
  bg-white
  text-[#8b1e72]
  text-[15px] sm:text-[16px] lg:text-[17px]
  font-semibold
  shadow-md
  hover:bg-white/90
  hover:shadow-lg
  hover:-translate-y-0.5
  active:scale-95
  transition-all
  duration-300
"  >
    Book Consultation
  </Link>

  <Link
    to="/specialities"
className="
  px-6 py-3.5
  rounded-xl
  bg-transparent
  text-white
  text-[15px] sm:text-[16px] lg:text-[17px]
  font-semibold
  border-2 border-white/60
  hover:bg-white/10
  hover:border-white
  hover:shadow-lg
  hover:-translate-y-0.5
  active:scale-95
  transition-all
  duration-300
"  >
    Learn More
  </Link>
</div>
          </div>

          {/* Right — image card */}
          <div className="w-full sm:w-[85%] lg:w-[42%] mx-auto lg:mx-0 flex-shrink-0">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src={jointReplacementImg}
                alt="Joint replacement surgery at Gawade Hospital"
                className="w-full aspect-[4/3] sm:aspect-[13/10] object-cover"
              />
              <div className="bg-[#500a3c]/90 px-3 sm:px-4 py-2 sm:py-2.5">
               <p className="text-white text-[15px] sm:text-[16px] lg:text-[17px] font-semibold leading-6">
  Joint Replacement Centre
</p>

<span className="mt-1 text-white/75 text-[13px] sm:text-[14px] lg:text-[15px] font-medium">
  Gawade Hospital, Baramati
</span>
              </div>
            </div>

            {/* slide dots */}
            <div className="flex justify-end gap-1.5 mt-2">
              {[true, false, false].map((active, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full bg-white transition-all ${
                    active ? "w-5 opacity-100" : "w-1.5 opacity-35"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}