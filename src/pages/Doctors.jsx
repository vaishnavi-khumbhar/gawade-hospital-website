import { useEffect, useRef, useState } from "react";
import { MdMedicalServices } from "react-icons/md";
import { FaUserMd, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DoctorsImg from "../assets/docters.jpg";


// ── If you have a local asset, swap this import:
// import DoctorsImg from "../assets/Doctors.jpg";

const BRAND = "#8b1e72";
const BRAND_LIGHT = "#f8e8f3";
const BRAND_DARK = "#74185f";

const doctors = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "Orthopedic & Joint Replacement Surgeon",
    description:
      "Expert in fracture management, trauma surgery, knee replacement, hip replacement, and orthopedic reconstruction procedures.",
    location: "Baramati",
    schedule: "Mon – Sat · 9 am – 5 pm",
  },
  {
    name: "Dr. Neha Sharma",
    specialty: "Neurosurgeon",
    description:
      "Specialized in brain surgery, neurological disorders, and advanced neurosurgical procedures.",
    location: "Baramati",
    schedule: "Mon – Sat · 10 am – 5 pm",
  },
  {
    name: "Dr. Rajesh Kulkarni",
    specialty: "Spine Surgeon",
    description:
      "Experienced in spine surgery, spinal trauma management, and minimally invasive spine procedures.",
    location: "Baramati",
    schedule: "Mon – Sat · 11 am – 4 pm",
  },
  {
    name: "Dr. Priya Desai",
    specialty: "Plastic & Reconstructive Surgeon",
    description:
      "Providing reconstructive and plastic surgery solutions with advanced surgical techniques.",
    location: "Baramati",
    schedule: "Mon – Sat · 10 am – 5 pm",
  },
  {
    name: "Dr. Suresh Patil",
    specialty: "Critical Care Specialist",
    description:
      "Dedicated to managing critically ill patients with advanced intensive care and ventilator support.",
    location: "Baramati",
    schedule: "Mon – Fri · 12 pm – 2 pm",
  },
  {
    name: "Dr. Kavita Joshi",
    specialty: "Cardiologist",
    description:
      "Expert in cardiac care, advanced diagnostics, and interventional cardiology procedures for all age groups.",
    location: "Baramati",
    schedule: "Mon, Wed · 2 pm – 6 pm",
  },
  {
    name: "Dr. Sanjay More",
    specialty: "Trauma & Accident Care Specialist",
    description:
      "Focused on emergency trauma management, fracture stabilization, and accident & emergency care for critical injuries.",
    location: "Baramati",
    schedule: "24×7 Emergency Availability",
  },
  {
    name: "Dr. Anjali Deshmukh",
    specialty: "Physiotherapy & Rehabilitation Specialist",
    description:
      "Specialized in post-surgical rehabilitation, physiotherapy plans, and complete recovery support for orthopedic patients.",
    location: "Baramati",
    schedule: "Mon – Sat · 9 am – 6 pm",
  },
];

/* ── gradient ring per card index ── */
const GRADIENTS = [
  ["#8b1e72", "#74185f"],
  ["#1e5fa8", "#174a8a"],
  ["#1a9e6e", "#147a55"],
  ["#b5460f", "#922e06"],
  ["#6b21a8", "#581c87"],
  ["#0e7490", "#0b5e75"],
  ["#be123c", "#9f1239"],
  ["#92400e", "#78350f"],
];

function getInitials(name) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* ── Intersection Observer hook ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ══════════════════════════════════════
   DOCTOR CARD
══════════════════════════════════════ */
function DoctorCard({ doctor, index }) {
  const [ref, visible] = useReveal();
  const navigate = useNavigate();
  const [g1, g2] = GRADIENTS[index % GRADIENTS.length];
  const initials = getInitials(doctor.name);

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-2xl border border-[#e8cfe0] overflow-hidden flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.55s ease ${(index % 3) * 80}ms, transform 0.55s ease ${(index % 3) * 80}ms`,
        boxShadow: "0 2px 20px 0 rgba(139,30,114,0.07)",
      }}
    >
      {/* Hover bg fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(160deg, ${BRAND}06 0%, ${BRAND}14 100%)` }}
      />

      {/* Coloured top bar */}
      <div
        className="h-1.5 w-full flex-shrink-0"
        style={{ background: `linear-gradient(90deg, ${g1}, ${g2})` }}
      />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Avatar + name */}
        <div className="flex items-start gap-4">
          {/* Avatar with ring */}
          <div
            className="relative flex-shrink-0 w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-md group-hover:scale-105 transition-transform duration-300"
            style={{ background: `linear-gradient(135deg, ${g1} 0%, ${g2} 100%)` }}
          >
            {initials}
            {/* ring */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${g1}44, ${g2}44)`,
                zIndex: -1,
              }}
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-[16px] font-bold leading-tight" style={{ color: BRAND }}>
              {doctor.name}
            </h3>
            <span
              className="inline-block mt-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: BRAND_LIGHT, color: BRAND }}
            >
              {doctor.specialty.split(" ").slice(0, 3).join(" ")}
            </span>
          </div>
        </div>

        {/* Specialty full */}
        <p
          className="text-[13px] font-semibold"
          style={{ color: g1 }}
        >
          {doctor.specialty}
        </p>

        {/* Description */}
        <p className="text-[13.5px] text-gray-500 leading-6 flex-1">
          {doctor.description}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-[#e8cfe0]" />

        {/* Location & schedule */}
        <div className="flex flex-col gap-2 text-[13px] text-gray-500">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="flex-shrink-0" style={{ color: BRAND }} />
            <span>{doctor.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="flex-shrink-0" style={{ color: BRAND }} />
            <span>{doctor.schedule}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/appointment")}
          className="mt-auto w-full py-2.5 rounded-xl text-white text-[13px] font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: `linear-gradient(90deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          onMouseEnter={(e) => { e.currentTarget.style.background = `linear-gradient(90deg, ${BRAND_DARK} 0%, ${BRAND} 100%)`; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = `linear-gradient(90deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`; }}
        >
          Book Appointment
        </button>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${g1}, ${g2})` }}
      />
    </div>
  );
}

/* ══════════════════════════════════════
   HERO — Mobile + Desktop
   (same pattern as Specialities.jsx)
══════════════════════════════════════ */
function DoctorsHero() {
  const [heroRef, heroVisible] = useReveal();

  return (
    <>
      {/* ── MOBILE HERO ── */}
      <div className="block md:hidden">
       <div className="relative w-full h-[220pxpx] sm:h-[220px] overflow-hidden md:hidden">
  <img
    src={DoctorsImg}
    alt="Doctors at Gawade Hospital"
    className="w-full h-full object-cover object-center"
  />
</div>

        <div
          className="px-5 py-6"
          style={{
            background: `linear-gradient(135deg, ${BRAND}f0 0%, ${BRAND}cc 100%)`,
          }}
        >
          <span
            className="inline-block uppercase tracking-[2px] text-[10px] font-semibold mb-3 px-3 py-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}
          >
            Gawade Hospital · Baramati
          </span>

          <h1 className="text-white text-3xl font-extrabold mb-3 leading-tight">
            Our <span style={{ color: "#ffd6f0" }}>Doctors</span>
          </h1>
          <p className="text-white/80 text-sm leading-6 mb-5">
            Meet our team of highly qualified specialists committed to advanced diagnosis, effective treatment and compassionate care.
          </p>

          <div className="flex gap-2">
            <a href="/appointment" className="flex-1">
              <button
                className="w-full inline-flex items-center justify-center gap-1.5 text-white font-semibold py-3 rounded-md shadow text-xs"
                style={{ backgroundColor: "#e30613" }}
              >
                <MdMedicalServices className="text-base" />
                Book Appointment
              </button>
            </a>
            <a href="/specialities" className="flex-1">
              <button className="w-full inline-flex items-center justify-center gap-1.5 border border-white text-white font-semibold py-3 rounded-md text-xs">
                <FaUserMd className="text-base" />
                Our Specialities
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO ── */}
      <div className="hidden md:block">
        <section className="relative w-full overflow-hidden" style={{ height: "500px" }}>
          <img
            src={DoctorsImg}
            alt="Doctors at Gawade Hospital"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Left-heavy brand overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(80deg, ${BRAND}eb 0%, ${BRAND}d1 20%, ${BRAND}8c 35%, ${BRAND}2e 75%, ${BRAND}00 100%)`,
            }}
          />
          {/* Bottom white fade */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 70%, #faf7fb 100%)" }}
          />

         
          {/* Hero content */}
          <div
            ref={heroRef}
            className="relative z-10 h-full max-w-6xl mx-auto px-6 lg:px-10 flex flex-col justify-center"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span
              className="inline-block uppercase tracking-[4px] text-xs font-semibold mb-4 px-4 py-2 rounded-full w-fit"
              style={{ background: "rgba(255,255,255,0.18)", color: "#fff", backdropFilter: "blur(8px)" }}
            >
              Gawade Hospital · Baramati
            </span>

            <h1 className="text-white text-5xl lg:text-6xl font-extrabold leading-tight mb-5 drop-shadow">
              Our <span style={{ color: "#ffd6f0" }}>Doctors</span>
            </h1>

            <p className="text-white/85 text-lg max-w-xl leading-8 mb-8">
              Meet our team of highly qualified specialists committed to advanced diagnosis, effective treatment and compassionate care.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/appointment"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#e30613" }}
              >
                <MdMedicalServices className="text-lg" />
                Book Appointment
              </a>
              <a
                href="/specialities"
                className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#8b1e72] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <FaUserMd className="text-lg" />
                Our Specialities
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ══════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════ */
export default function DoctorsSection() {
 const visibleDoctors = doctors;
  return (
    <>
      <DoctorsHero />

     

      {/* ── SECTION ── */}
      <section className="relative py-5 bg-[#faf7fb] overflow-hidden">


         {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-4 flex items-center gap-2 text-sm sm:text-base">
        <a href="/" style={{ color: BRAND }} className="font-medium hover:underline">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <span style={{ color: BRAND }} className="font-semibold">
          Our Doctors
        </span>
      </div>

        {/* Grid bg */}
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

        <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
          {/* Section heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span
              className="uppercase tracking-[4px] font-semibold text-xs sm:text-sm"
              style={{ color: BRAND }}
            >
              Specialist Doctors
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight"
              style={{ color: BRAND }}
            >
              Meet Our
              <br />
              <span style={{ color: BRAND_DARK }}>Medical Experts</span>
            </h2>
            <div className="flex justify-center mt-4 mb-5">
              <div className="h-1 w-12 rounded-full mr-1" style={{ backgroundColor: "#e30613" }} />
              <div className="h-1 w-6 rounded-full" style={{ backgroundColor: BRAND }} />
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 px-2">
              Our team of highly qualified specialists is committed to providing advanced diagnosis,
              effective treatment, and comprehensive patient care at Gawade Hospital, Baramati.
            </p>
          </div>

          {/* Doctor cards grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
  {visibleDoctors.map((doctor, index) => (
    <DoctorCard
      key={index}
      doctor={doctor}
      index={index}
    />
  ))}
</div>
         

          

          {/* Bottom CTA Banner */}
          <div
            className="mt-12 sm:mt-16 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
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
            <div className="relative flex gap-3 flex-shrink-0 flex-wrap justify-center">
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
                className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-sm border border-white text-white hover:bg-white/10 transition-colors"
              >
                <FaUserMd />
                Call Emergency
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
