import { useEffect, useRef, useState } from "react";
import {
  FaBone,
  FaWalking,
  FaShieldAlt,
  FaAmbulance,
  FaUserMd,
  FaBrain,
  FaXRay,
  FaHeartbeat,
  FaHandHoldingMedical,
  FaHospital,
} from "react-icons/fa";
import {
  GiKneeCap,
  GiLeg,
  GiSpinalCoil,
} from "react-icons/gi";
import {
  MdMedicalServices,
  MdOutlineHealthAndSafety,
  MdEmergency,
  MdOutlineVerified,
} from "react-icons/md";
import { RiMentalHealthFill } from "react-icons/ri";
import { TbPhysotherapist } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import SpecilitiesImg from "../assets/Specilities.jpg";

const BRAND = "#8b1e72";
const BRAND_LIGHT = "#f8e8f3";
const BRAND_DARK = "#74185f";

const specialities = [
  {
    icon: <FaBone />,
    title: "Orthopedic & Trauma Care",
    description:
      "Advanced treatment for fractures, sports injuries, trauma care and complex orthopedic conditions with modern surgical expertise.",
    tag: "Core Specialty",
  },
  {
    icon: <GiKneeCap />,
    title: "Knee Replacement Surgery",
    description:
      "Expert knee replacement procedures for lasting pain relief and improved mobility using minimally invasive techniques.",
    tag: "Joint Care",
  },
  {
    icon: <GiLeg />,
    title: "Hip Replacement Surgery",
    description:
      "Comprehensive hip replacement solutions using advanced implants and modern surgical techniques for faster recovery.",
    tag: "Joint Care",
  },
  {
    icon: <FaBrain />,
    title: "Brain & Neurosurgery",
    description:
      "Specialized diagnosis and treatment for brain, nerve and neurological disorders by experienced neurosurgeons.",
    tag: "Neuro",
  },
  {
    icon: <GiSpinalCoil />,
    title: "Spine Surgery",
    description:
      "Advanced spine treatments for back pain, spinal injuries, disc problems and complex spinal deformities.",
    tag: "Spine",
  },
  {
    icon: <FaUserMd />,
    title: "Plastic & Reconstructive Surgery",
    description:
      "Cosmetic and reconstructive procedures to restore appearance, function and confidence with precision surgery.",
    tag: "Reconstructive",
  },
  {
    icon: <FaXRay />,
    title: "CT Scan & Diagnostics",
    description:
      "Accurate diagnostics with advanced CT Scan, MRI, X-Ray and modern imaging technology for precise diagnosis.",
    tag: "Diagnostics",
  },
  {
    icon: <TbPhysotherapist />,
    title: "Physiotherapy & Rehabilitation",
    description:
      "Personalized rehabilitation programs designed for faster recovery, restored mobility and long-term wellness.",
    tag: "Rehab",
  },
  {
    icon: <MdEmergency />,
    title: "Emergency & Critical Care",
    description:
      "24×7 emergency services with dedicated ICU, trauma bay and critical care specialists always on standby.",
    tag: "24×7",
  },
  {
    icon: <MdOutlineVerified />,
    title: "Cashless Insurance Facility",
    description:
      "Hassle-free cashless treatment through all leading insurance providers and TPA partners — zero billing stress.",
    tag: "Insurance",
  },
];

/* ── Intersection Observer hook for scroll-reveal ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Single animated card ── */
function SpecialityCard({ item, index }) {
  const navigate = useNavigate();

  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-2xl p-6 border border-[#e8cfe0] overflow-hidden cursor-pointer h-full flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.55s ease ${index * 60}ms, transform 0.55s ease ${index * 60}ms`,
        boxShadow: "0 2px 16px 0 rgba(139,30,114,0.06)",
      }}
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ background: `linear-gradient(135deg, ${BRAND}08 0%, ${BRAND}18 100%)` }}
      />

      {/* Tag pill */}
      <div className="relative flex justify-center mb-4">
        <span
          className="inline-block text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ backgroundColor: BRAND_LIGHT, color: BRAND }}
        >
          {item.tag}
        </span>
      </div>

      {/* Icon */}
      <div className="relative flex justify-center mb-6">
        <div
          className="w-24 h-24 flex items-center justify-center rounded-3xl text-white text-5xl group-hover:scale-110 transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
          }}
        >
          {item.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className="relative text-[18px] font-bold mb-3 leading-snug text-center"
        style={{ color: BRAND }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="relative text-gray-500 text-[17px] leading-7 text-center lg:min-h-[110px]">
        {item.description}
      </p>

      {/* Single CTA Button */}
      <div className="relative mt-auto pt-6 flex justify-center">
        <button
          className="text-[13px] font-semibold px-5 py-2.5 rounded-lg text-white transition-colors duration-200"
          style={{ backgroundColor: BRAND }}
          onClick={() => navigate("/appointment")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = BRAND_DARK;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = BRAND;
          }}
        >
          Book Appointment
        </button>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
        style={{ backgroundColor: BRAND }}
      />
    </div>
  );
}

export default function Specialities() {
  const [heroRef, heroVisible] = useReveal();

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
          Mobile  → image on top (fixed height), content below
          Desktop → full-height overlay (original look)
      ═══════════════════════════════════════════ */}

      {/* ── MOBILE HERO ── visible only on small screens */}
      <div className="block md:hidden">
        {/* Image */}

         <div className="relative w-full" style={{ height: "220px" }}>
                  <img
                    src={SpecilitiesImg}
  alt="Hospital operating theatre"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                
                </div>

        {/* Content below image */}
        <div
          className="px-5 py-6"
          style={{
            background: `linear-gradient(135deg, ${BRAND}f0 0%, ${BRAND}cc 100%)`,
          }}
        >
          <span
            className="inline-block uppercase tracking-[2px] text-[10px] font-semibold mb-3 px-3 py-1 rounded-full w-fit"
            style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}
          >
            Gawade Hospital · Baramati
          </span>

          <h1 className="text-white text-3xl font-extrabold mb-3 leading-tight drop-shadow-md">
            Our Key{" "}
            <span style={{ color: "#ffd6f0" }}>Specialities</span>
          </h1>

          <p className="text-white/80 text-sm leading-6 mb-5">
            Advanced orthopedic, trauma, neuro, spine and critical care — all under one roof with experienced specialists and modern infrastructure.
          </p>

          <div className="flex flex-row gap-2">
            <a href="/appointment" className="flex-1">
              <button
                className="w-full inline-flex items-center justify-center gap-1.5 text-white font-semibold py-3 rounded-md shadow text-xs"
                style={{ backgroundColor: "#e30613" }}
              >
                <MdMedicalServices className="text-base" />
                Book Appointment
              </button>
            </a>

            <a href="/doctors" className="flex-1">
              <button className="w-full inline-flex items-center justify-center gap-1.5 bg-transparent border border-white text-white font-semibold py-3 rounded-md text-xs">
                <FaUserMd className="text-base" />
                Find a Doctor
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO ── hidden on mobile, original overlay layout */}
      <div className="hidden md:block">
        <section className="relative w-full h-[550px] overflow-hidden">

  {/* Background Image */}
  <img
    src={SpecilitiesImg}
    alt="Hospital operating theatre"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Purple Gradient Overlay */}
  <div
    className="absolute inset-0"
    style={{
      background: `linear-gradient(
        80deg,
        ${BRAND}eb 0%,
        ${BRAND}d1 20%,
        ${BRAND}8c 35%,
        ${BRAND}2e 75%,
        ${BRAND}00 100%
      )`,
    }}
  />

  {/* Bottom White Fade */}
  <div
    className="absolute inset-0"
    style={{
      background: `linear-gradient(
        180deg,
        transparent 70%,
        #faf7fb 100%
      )`,
    }}
  />

  {/* Hero Content */}
  <div
    ref={heroRef}
    className="relative z-10 h-full max-w-6xl mx-auto px-6 lg:px-10 flex flex-col justify-center"
    style={{
      opacity: heroVisible ? 1 : 0,
      transform: heroVisible ? "translateY(0)" : "translateY(30px)",
      transition: "all .7s ease",
    }}
  >
    <span
      className="inline-block uppercase tracking-[4px] text-xs font-semibold mb-4 px-4 py-2 rounded-full w-fit"
      style={{
        background: "rgba(255,255,255,.18)",
        color: "#fff",
        backdropFilter: "blur(8px)",
      }}
    >
      Gawade Hospital • Baramati
    </span>

    <h1 className="text-white text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
      Our Key{" "}
      <span className="text-pink-200">
        Specialities
      </span>
    </h1>

    <p className="text-white/85 text-lg max-w-2xl leading-8 mb-8">
      Advanced orthopedic, trauma, neuro, spine and critical care —
      all under one roof with experienced specialists and modern
      infrastructure.
    </p>

    <div className="flex gap-4 flex-wrap">
      <a
        href="/appointment"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MdMedicalServices className="text-lg" />
        Book Appointment
      </a>

      <a
        href="/doctors"
        className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#8b1e72] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
      >
        <FaUserMd className="text-lg" />
        Find a Doctor
      </a>
    </div>
  </div>

</section>


      </div>

      {/* ═══════════════════════════════════════════
          SPECIALITIES GRID SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative py-5 bg-[#faf7fb] overflow-hidden">

        {/* ═══════════════════════════════════════════
            BREADCRUMB
        ═══════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-10 py-4 flex items-center gap-2 text-sm sm:text-lg">
          
           <a
  href="/"
  style={{ color: BRAND }}
  className="font-medium hover:underline"
>
  Home
</a>

          <span className="text-gray-400">/</span>

          <span style={{ color: BRAND }} className="font-semibold">
            Our Specialities
          </span>
        </div>

        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ead4e3 1px, transparent 1px),
                linear-gradient(to bottom, #ead4e3 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Decorative blobs */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: BRAND }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: BRAND }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Section heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span
              className="uppercase tracking-[3px] sm:tracking-[4px] font-semibold text-xs sm:text-sm"
              style={{ color: BRAND }}
            >
              Our Key Specialities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight" style={{ color: BRAND }}>
              Priority Departments
              <br />
              <span className="text-[#74185f]">For Better Treatment & Care</span>
            </h2>
            {/* Accent underline */}
            <div className="flex justify-center mt-4 mb-5">
              <div className="h-1 w-12 rounded-full mr-1" style={{ backgroundColor: "#e30613" }} />
              <div className="h-1 w-6 rounded-full" style={{ backgroundColor: BRAND }} />
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 px-2">
              Gawade Hospital provides advanced orthopedic, trauma, neuro, spine, plastic surgery,
              physiotherapy and critical care services with modern technology and experienced specialists.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {specialities.map((item, index) => (
              <SpecialityCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div
            className="mt-12 sm:mt-16 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            {/* BG pattern */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative text-white text-center md:text-left">
              <p className="uppercase tracking-[3px] text-xs font-semibold mb-1 opacity-80">
                Need Immediate Assistance?
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                24×7 Emergency & Appointment Support
              </h3>
              <p className="text-white/70 mt-1 text-sm">
                Our specialists are available round the clock for emergencies and consultations.
              </p>
            </div>
            <div className="relative flex gap-3 flex-shrink-0 flex-wrap justify-center w-full md:w-auto">
              
              <a
  href="/appointment"
  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-sm transition-transform hover:scale-[1.04]"
  style={{ backgroundColor: "#e30613", color: "#fff" }}
>
  <MdMedicalServices />
  Book Appointment
</a>
             <a
  href="tel:+91xxxxxxxxxx"
  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-sm border border-white text-white transition-colors hover:bg-white/10"
>
  <FaAmbulance />
  Call Emergency
</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}