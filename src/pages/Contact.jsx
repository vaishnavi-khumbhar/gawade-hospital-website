import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaBell,
  FaQuestionCircle,
  FaUserTie,
  FaUserMd,
} from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";


import contact1Img from "../assets/contact1.jpg";
import contact2Img from "../assets/contact2.jpg";
import contact3Img from "../assets/contact3.png";

const slides = [
  contact1Img,
  contact2Img,
  contact3Img,
];

const BRAND = "#8b1e72";
const BRAND_LIGHT = "#f8e8f3";
const BRAND_DARK = "#74185f";

const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // replace with your key

const SERVICES = [
  "Anaesthesiology","Bariatric Surgery","Cardiology","Cardiothoracic Surgery","Dentistry",
  "Dermatology","Emergency Medicine","ENT","Gastroenterology","General Medicine",
  "General Surgery","Gynaecology & Obstetrics","Hepatology","Infectious Diseases","Nephrology",
  "Neurology","Neurosurgery","Oncology","Ophthalmology","Orthopedics","Pediatrics",
  "Physiotherapy","Plastic Surgery","Psychiatry","Pulmonology","Radiology","Surgical Oncology",
  "Transplant","Urology","Vascular Surgery","Virtual Clinics","Visa Medical Services",
];

const DOCTORS = [
  { id: "dr-anil-deshmukh", name: "Dr. Anil Deshmukh", dept: "Cardiology" },
  { id: "dr-sneha-kulkarni", name: "Dr. Sneha Kulkarni", dept: "Gynaecology & Obstetrics" },
  { id: "dr-rahul-patil", name: "Dr. Rahul Patil", dept: "Orthopedics" },
  { id: "dr-meera-joshi", name: "Dr. Meera Joshi", dept: "Pediatrics" },
  { id: "dr-vikram-rao", name: "Dr. Vikram Rao", dept: "Neurology" },
  { id: "dr-priya-sharma", name: "Dr. Priya Sharma", dept: "Dermatology" },
  { id: "dr-suresh-iyer", name: "Dr. Suresh Iyer", dept: "Gastroenterology" },
  { id: "dr-anita-bhosale", name: "Dr. Anita Bhosale", dept: "ENT" },
  { id: "dr-nikhil-mehta", name: "Dr. Nikhil Mehta", dept: "General Surgery" },
  { id: "dr-kavita-naik", name: "Dr. Kavita Naik", dept: "Oncology" },
];

const LOCATIONS = ["Baramati", "Pune", "Indapur", "Daund", "Phaltan", "Other"];

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Gawade+Hospital+Baramati&output=embed";

function SearchableDropdown({ label, options, value, onChange, getLabel }) {
  
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef(null);

  const display = (opt) => (getLabel ? getLabel(opt) : opt);
  const filtered = options.filter((opt) =>
    display(opt).toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = value ? display(value) : "";

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2"
        style={{ "--tw-ring-color": BRAND }}
      >
        <span className={selectedLabel ? "text-gray-700" : "text-gray-400"}>
          {selectedLabel || label}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute z-20 mt-1 w-full bg-white rounded-md border shadow-lg overflow-hidden"
          style={{ borderColor: `${BRAND}55` }}
        >
          <div className="p-2 border-b" style={{ borderColor: `${BRAND}33` }}>
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": BRAND }}
            />
          </div>
          <div className="max-h-56 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-sm text-gray-400">No results found.</p>
            ) : (
              filtered.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                    setQuery("");
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
                  style={{ color: BRAND }}
                >
                  {display(opt)}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function RecaptchaBox({ onVerify, onExpire, uid }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [scriptReady, setScriptReady] = useState(
    typeof window !== "undefined" && !!window.grecaptcha
  );

  useEffect(() => {
    if (scriptReady) return;
    const existing = document.querySelector(
      'script[src^="https://www.google.com/recaptcha/api.js"]'
    );
    if (existing) {
      existing.addEventListener("load", () => setScriptReady(true));
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptReady(true);
    document.head.appendChild(script);
  }, [scriptReady]);

  useEffect(() => {
    if (!scriptReady || !containerRef.current || widgetIdRef.current !== null) return;
    if (!window.grecaptcha || !window.grecaptcha.render) return;

    widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
      sitekey: RECAPTCHA_SITE_KEY,
      callback: onVerify,
      "expired-callback": onExpire,
    });
  }, [scriptReady, onVerify, onExpire]);

  return <div ref={containerRef} key={uid} />;
}

function InfoCard({ icon, title, children }) {
  return (
    <div
      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white border border-[#e8cfe0] transition-shadow hover:shadow-md"
      style={{ boxShadow: "0 2px 12px 0 rgba(139,30,114,0.05)" }}
    >
      <div
        className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center text-white text-base sm:text-lg"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[13px] sm:text-[14px] font-bold" style={{ color: BRAND }}>
          {title}
        </p>
        <div className="text-gray-600 text-[13px] sm:text-[14px] leading-6 break-words">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [active, setActive] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, 4000);

  return () => clearInterval(timer);
}, []);
  /* ── Appointment form state ── */
  const [aptForm, setAptForm] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    service: null,
    doctor: null,
    age: "0",
    recaptchaToken: null,
  });
  const [aptSubmitted, setAptSubmitted] = useState(false);
  const [aptRecaptchaError, setAptRecaptchaError] = useState(false);

  /* ── Contact form state ── */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    recaptchaToken: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleAptChange = (field) => (e) => {
    setAptForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleAptSubmit = () => {
    if (!aptForm.name || !aptForm.contact) {
      alert("Please fill in the required fields (Name & Contact No.)");
      return;
    }
    if (!aptForm.recaptchaToken) {
      setAptRecaptchaError(true);
      return;
    }
    setAptRecaptchaError(false);
    setAptSubmitted(true);
  };

  const handleAptClear = () => {
    setAptForm({
      name: "",
      email: "",
      contact: "",
      location: "",
      service: null,
      doctor: null,
      age: "0",
      recaptchaToken: null,
    });
    setAptRecaptchaError(false);
    setAptSubmitted(false);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please fill in the required fields (Name & Phone)");
      return;
    }
    if (!form.recaptchaToken) {
      setRecaptchaError(true);
      return;
    }
    setRecaptchaError(false);
    setSubmitted(true);
  };

  const handleClear = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      message: "",
      recaptchaToken: null,
    });
    setRecaptchaError(false);
    setSubmitted(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans">

      {/* ============================================================
          HERO SECTION
      ============================================================ */}

      {/* ── MOBILE HERO ── */}
     <div className="block md:hidden">
  <div className="relative w-full h-[230px] overflow-hidden">

    {slides.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index + 1}`}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
          active === index ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

    {/* Slider Dots */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`rounded-full transition-all duration-300 ${
            active === index
              ? "w-6 h-2.5 bg-white"
              : "w-2.5 h-2.5 bg-white/60"
          }`}
        />
      ))}
    </div>
  </div>

  <div
    className="px-5 py-6"
    style={{
      background: `linear-gradient(135deg, ${BRAND}f0 0%, ${BRAND}cc 100%)`,
    }}
  >





          <h1
            className="text-white text-4xl font-extrabold mb-3 leading-tight drop-shadow-md"
            style={{ fontFamily: "Signika, sans-serif" }}
          >
            Contact Us
          </h1>
          <p
            className="text-white/90 text-sm leading-6 mb-6 pr-2"
            style={{ fontFamily: "Signika, sans-serif" }}
          >
            Get in touch with our team for appointments, enquiries, or emergency
            support — we're here to help.
          </p>

          <div className="flex flex-row gap-2">
            <Link to="/appointment" className="flex-1">
              <button
                className="w-full text-white font-semibold py-3 rounded-md shadow text-xs"
                style={{ backgroundColor: "#e30613", fontFamily: "Signika, sans-serif" }}
              >
                Book Appointment
              </button>
            </Link>
            <a href="tel:+91-7420932217" className="flex-1">
              <button
                className="w-full bg-transparent border border-white text-white font-semibold py-3 rounded-md text-xs"
                style={{ fontFamily: "Signika, sans-serif" }}
              >
                Call Emergency
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO ── */}
      {/* ── DESKTOP HERO ── */}
<div className="hidden md:block">
 <div className="relative w-full h-[420px] lg:h-[560px] overflow-hidden">
  {slides.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Slide ${index + 1}`}
      className={`absolute inset-0 w-full h-full object-cover object-[center_30%] transition-opacity duration-1000 ${
        active === index ? "opacity-100" : "opacity-0"
      }`}
    />
    ))}

    {/* Purple Overlay */}
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

    {/* Bottom Fade */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(180deg, transparent 70%, #ffffff 100%)",
      }}
    />

    {/* ✅ ONLY ONE content div now, z-10 to stay above overlays */}
    <div className="relative z-10 h-full max-w-6xl mx-auto px-10 flex flex-col justify-center">
      <h1
        className="text-white text-5xl md:text-6xl font-extrabold mb-5 drop-shadow-sm"
        style={{ fontFamily: "Signika, sans-serif" }}
      >
        Contact Us
      </h1>
      <p
        className="text-white/90 text-lg md:text-xl max-w-2xl leading-8 mb-8"
        style={{ fontFamily: "Signika, sans-serif" }}
      >
        Get in touch with our team for appointments, enquiries, or emergency
        support. We're here to help you and your family, round the clock.
      </p>
      <div className="flex gap-4" style={{ fontFamily: "Signika, sans-serif" }}>
        <Link to="/appointment">
          <button
            className="text-white font-semibold px-6 py-3 rounded-md shadow transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#e30613" }}
          >
            Book Appointment
          </button>
        </Link>
        <a href="tel:+91-7420932217">
          <button className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md transition-colors hover:bg-white/10">
            Call Emergency
          </button>
        </a>
      </div>
    </div>

    {/* Slider Dots */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`rounded-full transition-all duration-300 ${
            active === index ? "w-8 h-3 bg-white" : "w-3 h-3 bg-white/50"
          }`}
        />
      ))}
    </div>
  </div>
</div>
      {/* ============================================================
          BREADCRUMB
      ============================================================ */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-10 py-4 flex items-center gap-2 text-sm sm:text-lg"
        style={{ fontFamily: "Signika, sans-serif" }}
      >
        <a href="/" style={{ color: BRAND }} className="font-medium hover:underline">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <span style={{ color: BRAND }} className="font-semibold">
          Contact Us
        </span>
      </div>

      {/* ============================================================
          1) BOOK AN APPOINTMENT — FORM SECTION (FIRST)
      ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-4 sm:py-6">
        <h2
          className="text-2xl sm:text-4xl font-extrabold mb-2"
          style={{ color: BRAND, fontFamily: "Signika, sans-serif" }}
        >
          Book An Appointment
        </h2>
        <p
          className="text-gray-500 mb-6 sm:mb-8 text-[15px] sm:text-[17px] lg:text-[18px] leading-7"
          style={{ fontFamily: "Signika, sans-serif" }}
        >
          Fill in your details and our team will get back to you to confirm your slot.
        </p>

        <div
          className="rounded-xl p-4 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
          style={{
            border: `1px solid ${BRAND}55`,
            backgroundColor: "#fafafa",
            fontFamily: "Signika, sans-serif",
          }}
        >
          {aptSubmitted ? (
            <div className="text-center py-10 px-4">
              <p className="text-xl sm:text-2xl font-bold mb-2" style={{ color: BRAND }}>
                Thank you, {aptForm.name}!
              </p>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Your appointment request has been received. Our team will contact you shortly to confirm.
              </p>
              <button
                onClick={handleAptClear}
                className="font-semibold px-6 py-3 rounded-md text-white text-sm sm:text-base"
                style={{ backgroundColor: BRAND }}
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <>
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name*"
                  value={aptForm.name}
                  onChange={handleAptChange("name")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={aptForm.email}
                  onChange={handleAptChange("email")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
                <input
                  type="tel"
                  placeholder="Contact No.*"
                  value={aptForm.contact}
                  onChange={handleAptChange("contact")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={aptForm.location}
                  onChange={handleAptChange("location")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <SearchableDropdown
                  label="Service"
                  options={SERVICES}
                  value={aptForm.service}
                  onChange={(val) => setAptForm((p) => ({ ...p, service: val }))}
                />
                <SearchableDropdown
                  label="Doctor"
                  options={DOCTORS}
                  value={aptForm.doctor}
                  onChange={(val) => setAptForm((p) => ({ ...p, doctor: val }))}
                  getLabel={(doc) => `${doc.name} - ${doc.dept}`}
                />
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={aptForm.age}
                    onChange={handleAptChange("age")}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                    style={{ "--tw-ring-color": BRAND }}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                    Age
                  </span>
                </div>
              </div>

              {/* Row 3 — captcha + buttons */}
              <div className="flex flex-col gap-5">
                <div>
                  {aptRecaptchaError && (
                    <p className="text-red-600 text-sm mb-2">
                      Please verify the reCAPTCHA before submitting.
                    </p>
                  )}
                  <div
                    className="block sm:hidden"
                    style={{ transform: "scale(0.85)", transformOrigin: "left center" }}
                  >
                    <RecaptchaBox
                      uid="apt-mobile"
                      onVerify={(token) => setAptForm((p) => ({ ...p, recaptchaToken: token }))}
                      onExpire={() => setAptForm((p) => ({ ...p, recaptchaToken: null }))}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <RecaptchaBox
                      uid="apt-desktop"
                      onVerify={(token) => setAptForm((p) => ({ ...p, recaptchaToken: token }))}
                      onExpire={() => setAptForm((p) => ({ ...p, recaptchaToken: null }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-end">
                  <button
                    onClick={handleAptSubmit}
                    className="w-full sm:w-auto text-white font-semibold px-10 py-3 rounded-md shadow transition-transform hover:scale-[1.02] text-sm sm:text-base"
                    style={{ backgroundColor: "#e30613" }}
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleAptClear}
                    className="w-full sm:w-auto font-semibold px-10 py-3 rounded-md transition-colors text-sm sm:text-base"
                    style={{ backgroundColor: `${BRAND}1a`, color: BRAND }}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ============================================================
          2) GET IN TOUCH — CONTACT FORM SECTION (SECOND)
      ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-4 sm:py-6">
        <h2
          className="text-2xl sm:text-4xl font-extrabold mb-2"
          style={{ color: BRAND, fontFamily: "Signika, sans-serif" }}
        >
          Get In Touch
        </h2>
        <p
          className="text-gray-500 mb-6 sm:mb-8 text-[15px] sm:text-[17px] lg:text-[18px] leading-7"
          style={{ fontFamily: "Signika, sans-serif" }}
        >
          Fill in the form below and a member of our team will contact you within
          24–48 hours. For medical emergencies call{" "}
          <a href="tel:+91-7420932217" className="font-semibold hover:underline" style={{ color: BRAND }}>
            +91-7420932217
          </a>.
        </p>

        <div
          className="rounded-xl p-4 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
          style={{
            border: `1px solid ${BRAND}55`,
            backgroundColor: "#fafafa",
            fontFamily: "Signika, sans-serif",
          }}
        >
          {submitted ? (
            <div className="text-center py-10 px-4">
              <p className="text-xl sm:text-2xl font-bold mb-2" style={{ color: BRAND }}>
                Thank you, {form.name}!
              </p>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Your enquiry has been received. Our team will get back to you shortly.
              </p>
              <button
                onClick={handleClear}
                className="font-semibold px-6 py-3 rounded-md text-white text-sm sm:text-base"
                style={{ backgroundColor: BRAND }}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <>
              {/* Row 1 — Name / Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Name <span style={{ color: "#e30613" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange("name")}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                    style={{ "--tw-ring-color": BRAND }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Phone <span style={{ color: "#e30613" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                    style={{ "--tw-ring-color": BRAND }}
                  />
                </div>
              </div>

              {/* Row 2 — Email / Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                    style={{ "--tw-ring-color": BRAND }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                    Location
                  </label>
                  <select
                    value={form.location}
                    onChange={handleChange("location")}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                    style={{ "--tw-ring-color": BRAND }}
                  >
                    <option value="">Select Location</option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3 — Message */}
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-gray-600 mb-1.5">
                  Message
                </label>
                <textarea
                  placeholder="Your message or query"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm resize-none"
                  style={{ "--tw-ring-color": BRAND }}
                />
              </div>

              {/* Row 4 — captcha + buttons */}
              <div className="flex flex-col gap-5">
                <div>
                  {recaptchaError && (
                    <p className="text-red-600 text-sm mb-2">
                      Please verify the reCAPTCHA before submitting.
                    </p>
                  )}
                  <div
                    className="block sm:hidden"
                    style={{ transform: "scale(0.85)", transformOrigin: "left center" }}
                  >
                    <RecaptchaBox
                      uid="contact-mobile"
                      onVerify={(token) => setForm((p) => ({ ...p, recaptchaToken: token }))}
                      onExpire={() => setForm((p) => ({ ...p, recaptchaToken: null }))}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <RecaptchaBox
                      uid="contact-desktop"
                      onVerify={(token) => setForm((p) => ({ ...p, recaptchaToken: token }))}
                      onExpire={() => setForm((p) => ({ ...p, recaptchaToken: null }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-end">
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto text-white font-semibold px-10 py-3 rounded-md shadow transition-transform hover:scale-[1.02] text-sm sm:text-base"
                    style={{ backgroundColor: "#e30613" }}
                  >
                    Send Enquiry
                  </button>
                  <button
                    onClick={handleClear}
                    className="w-full sm:w-auto font-semibold px-10 py-3 rounded-md transition-colors text-sm sm:text-base"
                    style={{ backgroundColor: `${BRAND}1a`, color: BRAND }}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ============================================================
          3) HOSPITAL / REACH US + MAP SECTION
      ============================================================ */}
      <section className="relative py-10 sm:py-14 bg-[#faf7fb] overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-4 sm:px-10 relative z-10">
          <h2
            className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-8"
            style={{ color: BRAND, fontFamily: "Signika, sans-serif" }}
          >
            Reach Us At
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="rounded-2xl overflow-hidden border border-[#e8cfe0]"
              style={{ boxShadow: "0 2px 16px 0 rgba(139,30,114,0.06)" }}
            >
              <iframe
                title="Gawade Hospital Location"
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard icon={<FaMapMarkerAlt />} title="Address">
               Gunwadi Road, Baramati, Maharashtra - 413102
              </InfoCard>
              <InfoCard icon={<FaEnvelope />} title="Email ID">
                info@gawadehospital.com
              </InfoCard>
              <InfoCard icon={<FaPhoneAlt />} title="Gawade Hospital">
                +91-7420932217
              </InfoCard>
              <InfoCard icon={<FaBell />} title="Emergency Number">
                +91-9876543210
              </InfoCard>
              <InfoCard icon={<FaQuestionCircle />} title="Enquiry">
                +91-9860017620
              </InfoCard>
              
            </div>
          </div>

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
  <Link
    to="/appointment"
    className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-sm transition-transform hover:scale-[1.04]"
    style={{ backgroundColor: "#e30613", color: "#fff" }}
  >
    <MdMedicalServices />
    Book Appointment
  </Link>

  <a
    href="tel:+91-XXXXXXXXXX"
    className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-sm border border-white text-white hover:bg-white/10 transition-colors"
  >
    <FaUserMd />
    Call Emergency
  </a>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}