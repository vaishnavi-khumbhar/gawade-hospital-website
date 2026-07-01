import { useEffect, useRef, useState } from "react";
import { MdMedicalServices } from "react-icons/md";
import {
  FaUserMd,
  FaHeartbeat,
  FaHandHoldingMedical,
  FaBullseye,
  FaEye,
  FaHospitalUser,
} from "react-icons/fa";
// import AboutImg from "../assets/about.jpg";


const AboutImg =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop";
const BRAND = "#8b1e72";
const BRAND_LIGHT = "#f8e8f3";
const BRAND_DARK = "#74185f";

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

const VALUES = [
  {
    icon: <FaHospitalUser />,
    title: "Patient First",
    description:
      "Every decision we make is focused on improving patient health and well-being.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Medical Excellence",
    description:
      "We continuously strive to deliver the highest standards of healthcare and surgical expertise.",
  },
  {
    icon: <FaHandHoldingMedical />,
    title: "Integrity & Trust",
    description:
      "We maintain transparency, honesty, and ethical medical practices in every aspect of patient care.",
  },
  {
    icon: <FaUserMd />,
    title: "Compassionate Care",
    description:
      "We treat every patient with dignity, respect, and empathy.",
  },
];

const EXPERTISE = [
  "Trauma & Accident Care",
  "Fracture Management",
  "Knee Replacement Surgery",
  "Hip Replacement Surgery",
  "Orthopedic Trauma Surgery",
  "Joint Reconstruction Procedures",
  "Sports Injury Management",
];

/* ── Value Card ── */
function ValueCard({ item, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-2xl p-6 border border-[#e8cfe0] overflow-hidden flex flex-col text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.55s ease ${index * 70}ms, transform 0.55s ease ${index * 70}ms`,
        boxShadow: "0 2px 16px 0 rgba(139,30,114,0.06)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${BRAND}08 0%, ${BRAND}18 100%)` }}
      />
      <div className="relative flex justify-center mb-5">
        <div
          className="w-16 h-16 flex items-center justify-center rounded-2xl text-white text-2xl group-hover:scale-110 transition-transform duration-300"
          style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
        >
          {item.icon}
        </div>
      </div>
      <h3 className="relative text-[16px] font-bold mb-2" style={{ color: BRAND }}>
        {item.title}
      </h3>
      <p className="relative text-gray-500 text-[17px] leading-6">{item.description}</p>
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: BRAND }}
      />
    </div>
  );
}

/* ══════════════════════════════════════
   HERO — Mobile + Desktop
   (same pattern as Doctors.jsx / Specialities.jsx)
══════════════════════════════════════ */
function AboutHero() {
  const [heroRef, heroVisible] = useReveal();

  return (
    <>
      {/* ── MOBILE HERO ── */}
      <div className="block md:hidden">
        <div className="relative w-full h-[220px] overflow-hidden md:hidden">
          <img
            src={AboutImg}
            alt="About Gawade Hospital"
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
            About <span style={{ color: "#ffd6f0" }}>Us</span>
          </h1>
          <p className="text-white/80 text-sm leading-6 mb-5">
            Excellence in Healthcare, Compassion in Service — dedicated to advanced and affordable
            care for Baramati and surrounding regions.
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
            <a href="/doctors" className="flex-1">
              <button className="w-full inline-flex items-center justify-center gap-1.5 border border-white text-white font-semibold py-3 rounded-md text-xs">
                <FaUserMd className="text-base" />
                Our Doctors
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO ── */}
      <div className="hidden md:block">
        <section className="relative w-full overflow-hidden" style={{ height: "500px" }}>
          <img
            src={AboutImg}
            alt="About Gawade Hospital"
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
              About <span style={{ color: "#ffd6f0" }}>Us</span>
            </h1>

            <p className="text-white/85 text-lg max-w-xl leading-8 mb-8">
              Excellence in Healthcare, Compassion in Service — dedicated to advanced and affordable
              care for Baramati and surrounding regions.
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
    href="/doctors"
    className="inline-flex items-center gap-2 border border-white text-white hover:bg-white hover:text-[#8b1e72] font-semibold px-6 py-3 rounded-xl transition-all duration-300"
  >
    <FaUserMd className="text-lg" />
    Our Doctors
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
export default function About() {
  const [introRef, introVisible] = useReveal();
  const [drRef, drVisible] = useReveal();

  return (
    <>
      <AboutHero />

      {/* ── SECTION ── */}
      <section className="relative py-5 bg-[#faf7fb] overflow-hidden">

        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-10 py-4 flex items-center gap-2 text-sm sm:text-base">
          <a href="/" style={{ color: BRAND }} className="font-medium hover:underline">
            Home
          </a>
          <span className="text-gray-400">/</span>
          <span style={{ color: BRAND }} className="font-semibold">
            About Us
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

          {/* Intro Section */}
         <div
  ref={introRef}
  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16"
  style={{
    opacity: introVisible ? 1 : 0,
    transform: introVisible ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  }}
>
  {/* Left Image */}
  <div className="relative order-1">
    <img
      src="https://media.istockphoto.com/id/993985508/photo/building-with-large-h-sign-for-hospital.jpg?s=612x612&w=0&k=20&c=0K07VYHMEpmKFfhzcGOfmBt9PST05h8ZVddhtsECLMU="
      alt="Gawade Hospital"
      className="w-full h-[260px] sm:h-[350px] lg:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-2xl"
    />

    {/* Experience Card */}
    <div className="absolute bottom-4 right-4 lg:-bottom-6 lg:-right-6 bg-[#8b1e72] text-white rounded-xl lg:rounded-2xl px-5 py-4 lg:px-8 lg:py-6 shadow-xl">
      <h3 className="text-2xl lg:text-4xl font-bold">2+</h3>
      <p className="text-xs lg:text-sm mt-1">Years of Excellence</p>
    </div>
  </div>

  {/* Right Content */}
  <div className="order-2 text-center lg:text-left">
    <span
      className="uppercase tracking-[3px] lg:tracking-[4px] font-semibold text-xs sm:text-sm"
      style={{ color: BRAND }}
    >
      Who We Are
    </span>

    <h2
      className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 lg:mt-4 leading-tight"
      style={{ color: BRAND }}
    >
      Excellence in Healthcare
      <br />
      <span style={{ color: BRAND_DARK }}>
        Compassion in Service
      </span>
    </h2>

    <div className="flex justify-center lg:justify-start mt-4 mb-6">
      <div
        className="h-1 w-12 rounded-full mr-2"
        style={{ backgroundColor: "#e30613" }}
      />
      <div
        className="h-1 w-6 rounded-full"
        style={{ backgroundColor: BRAND }}
      />
    </div>

    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8">
      Gawade Hospital was established with a vision to provide advanced and
      affordable healthcare services to the people of Baramati and surrounding
      regions. Over the years, we have built a strong reputation for delivering
      high-quality medical care in Orthopedics, Trauma Management, Joint
      Replacement Surgery, Neurosurgery, Spine Surgery, and Emergency Care.
    </p>

    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 lg:leading-8 mt-5">
      Our hospital combines modern medical technology with a highly skilled
      team of doctors, nurses, and healthcare professionals dedicated to
      ensuring the best possible outcomes for patients.
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="bg-white rounded-xl p-4 lg:p-5 shadow border border-[#f0d7e7]">
        <h3 className="text-2xl lg:text-3xl font-bold text-[#8b1e72]">
          5000+
        </h3>
        <p className="text-gray-600 text-sm lg:text-base mt-1">
          Happy Patients
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 lg:p-5 shadow border border-[#f0d7e7]">
        <h3 className="text-2xl lg:text-3xl font-bold text-[#8b1e72]">
          24×7
        </h3>
        <p className="text-gray-600 text-sm lg:text-base mt-1">
          Emergency Care
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Our Values */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span
              className="uppercase tracking-[4px] font-semibold text-xs sm:text-sm"
              style={{ color: BRAND }}
            >
              What Drives Us
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold mt-4 leading-tight"
              style={{ color: BRAND }}
            >
              Our Values
            </h2>
            <div className="flex justify-center mt-4 mb-5">
              <div className="h-1 w-12 rounded-full mr-1" style={{ backgroundColor: "#e30613" }} />
              <div className="h-1 w-6 rounded-full" style={{ backgroundColor: BRAND }} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
            {VALUES.map((item, index) => (
              <ValueCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* About Dr. Gawade */}
          <div
            ref={drRef}
            className="relative rounded-2xl p-6 sm:p-10 mb-16 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
              opacity: drVisible ? 1 : 0,
              transform: drVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 text-white">
                <p className="uppercase tracking-[3px] text-xs font-semibold mb-2 opacity-80">
                  Leading Orthopedic & Joint Replacement Specialist
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">About Dr. Gawade</h3>
                <p className="text-white/85 text-[17px] leading-7 mb-4">
                  Dr. Gawade is a highly respected Orthopedic and Trauma Specialist dedicated to
                  providing advanced orthopedic care and surgical excellence. With extensive
                  experience in treating fractures, trauma injuries, joint disorders, knee
                  replacement surgeries, hip replacement procedures, and complex orthopedic
                  conditions, Dr. Gawade has helped numerous patients regain mobility and improve
                  their quality of life.
                </p>
                <p className="text-white/85 text-[17px] leading-7">
                  Dr. Gawade believes in combining modern surgical techniques with compassionate
                  patient care to achieve the best possible outcomes.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-5 sm:p-6">
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  Areas of Expertise
                </h4>
                <ul className="space-y-2.5">
                  {EXPERTISE.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/90 text-[17px]">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div
            className="mt-4 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
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
              <h3 className="text-xl sm:text-3xl md:text-3xl font-extrabold">
                24×7 Emergency & Appointment Support
              </h3>
             <p className="text-white/70 mt-3 text-sm md:text-base leading-7 max-w-xl">
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