import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import appointmentImg from "../assets/appoinment.jpg";

// Brand color (replaces the original blue with this)
const BRAND = "#8b1e72";

// ============================================================
// reCAPTCHA SETUP — read this before using in your project
// ============================================================
// 1. Get a site key from https://www.google.com/recaptcha/admin
//    (choose reCAPTCHA v2 "I'm not a robot" checkbox)
// 2. Replace TEST_SITE_KEY below with YOUR real site key.
//    The key below is Google's official PUBLIC TEST KEY — it always
//    shows "I'm not a robot" and always passes, but it will show a
//    warning banner "This is a test site key" because it's not tied
//    to your domain. It's only here so the component runs without
//    crashing before you plug in your own key.
// 3. Add this script tag once in your index.html (or _document/layout):
//      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
// 4. On submit, send form.recaptchaToken to your backend and verify it
//    server-side via https://www.google.com/recaptcha/api/siteverify
//    (client-side alone is NOT secure — anyone can fake the checkbox
//    state in devtools, so real verification must happen on your server).
// ============================================================
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Google's public test key — replace with yours


const SERVICES = [
  "Anaesthesiology",
  "Bariatric Surgery",
  "Cardiology",
  "Cardiothoracic Surgery",
  "Dentistry",
  "Dermatology",
  "Emergency Medicine",
  "ENT",
  "Gastroenterology",
  "General Medicine",
  "General Surgery",
  "Gynaecology & Obstetrics",
  "Hepatology",
  "Infectious Diseases",
  "Nephrology",
  "Neurology",
  "Neurosurgery",
  "Oncology",
  "Ophthalmology",
  "Orthopedics",
  "Pediatrics",
  "Physiotherapy",
  "Plastic Surgery",
  "Psychiatry",
  "Pulmonology",
  "Radiology",
  "Surgical Oncology",
  "Transplant",
  "Urology",
  "Vascular Surgery",
  "Virtual Clinics",
  "Visa Medical Services",
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
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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

function RecaptchaBox({ onVerify, onExpire }) {
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
    if (!scriptReady || !containerRef.current || widgetIdRef.current !== null) {
      return;
    }
    if (!window.grecaptcha || !window.grecaptcha.render) return;

    widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
      sitekey: RECAPTCHA_SITE_KEY,
      callback: onVerify,
      "expired-callback": onExpire,
    });
  }, [scriptReady, onVerify, onExpire]);

  return <div ref={containerRef} />;
}

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    service: null,
    doctor: null,
    age: "0",
    recaptchaToken: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.contact) {
      alert("Please fill in the required fields (Name & Contact No.)");
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
      email: "",
      contact: "",
      location: "",
      service: null,
      doctor: null,
      age: "0",
      recaptchaToken: null,
    });
    setRecaptchaError(false);
    setSubmitted(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans">

      {/* ============================================================
          HERO SECTION
          Mobile  → image on top (fixed height), content below
          Desktop → full-height overlay (original look)
      ============================================================ */}

      {/* ── MOBILE HERO ── visible only on small screens */}
      <div className="block md:hidden">
        {/* Image */}
        <div className="relative w-full" style={{ height: "220px" }}>
          <img
            src={appointmentImg}
            alt="Appointment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Emergency strip */}
          <div
            className="absolute top-4 left-0 flex items-center justify-center text-white font-bold tracking-widest shadow-lg"
            style={{
              backgroundColor: "#e30613",
              width: "32px",
              height: "120px",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "11px",
              letterSpacing: "2px",
            }}
          >
            EMERGENCY
          </div>
        </div>

        {/* Content below image */}
       <div
  className="px-5 py-6"
  style={{
    background: `linear-gradient(135deg, ${BRAND}f0 0%, ${BRAND}cc 100%)`,
  }}
>
  <h1
    className="text-white text-3xl font-extrabold mb-4 drop-shadow-sm"
    style={{ fontFamily: "Signika, sans-serif" }}
  >
    Book Appointment
  </h1>

  <div className="flex flex-row gap-2">
    <Link to="/book-appointment" className="flex-1">
      <button
        className="w-full text-white font-semibold py-3 rounded-md shadow text-xs"
        style={{
          backgroundColor: "#e30613",
          fontFamily: "Signika, sans-serif",
        }}
      >
        Book Appointment
      </button>
    </Link>

    <Link to="/doctors" className="flex-1">
      <button
        className="w-full bg-transparent border border-white text-white font-semibold py-3 rounded-md text-xs"
        style={{
          fontFamily: "Signika, sans-serif",
        }}
      >
        Find a Doctor
      </button>
    </Link>
  </div>
</div>

      </div>

      {/* ── DESKTOP HERO ── hidden on mobile, original overlay layout */}
      <div className="hidden md:block">
        <div className="relative w-full" style={{ height: "420px" }}>
          <img
            src={appointmentImg}
            alt="Appointment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(80deg, ${BRAND}eb 0%, ${BRAND}d1 20%, ${BRAND}8c 30%, ${BRAND}2e 75%, ${BRAND}00 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, transparent 70%, #ffffff 100%)`,
            }}
          />

          {/* Emergency strip */}
          <div
            className="absolute left-0 top-1/3 flex items-center justify-center text-white font-bold tracking-widest cursor-pointer shadow-lg"
            style={{
              backgroundColor: "#e30613",
              width: "40px",
              height: "180px",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "14px",
              letterSpacing: "2px",
            }}
          >
            EMERGENCY
          </div>

          <div className="relative h-full max-w-6xl mx-auto px-10 flex flex-col justify-center">
            <h1
              className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-sm"
              style={{ fontFamily: "Signika, sans-serif" }}
            >
              Book Appointment
            </h1>
            <div className="flex gap-4" style={{ fontFamily: "Signika, sans-serif" }}>
             <Link to="/appointment">
    <button
      className="text-white font-semibold px-6 py-3 rounded-md shadow transition-transform hover:scale-[1.03]"
      style={{ backgroundColor: "#e30613", fontFamily: "Signika, sans-serif" }}
    >
      Book Appointment
    </button>
  </Link>

  <Link to="/doctors">
    <button
      className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md transition-colors hover:bg-white/10"
      style={{ fontFamily: "Signika, sans-serif" }}
    >
      Find a Doctor
    </button>
  </Link>
            </div>
          </div>

          
        </div>
      </div>

      {/* ============================================================
          BREADCRUMB
      ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 pt-4 sm:pt-6 text-sm font-signika">
        <Link to="/" style={{ color: BRAND }} className="font-medium">
          Home
        </Link>
        <span className="text-gray-400 mx-2">/</span>
        <Link to="/book-appointment" style={{ color: BRAND }} className="font-medium">
          Book Appointment
        </Link>
      </div>

      {/* ============================================================
          FORM SECTION
      ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-6 sm:py-10">
        <h2
          className="text-2xl sm:text-4xl font-extrabold mb-2"
          style={{ color: BRAND, fontFamily: "Signika, sans-serif" }}
        >
          Book An Appointment
        </h2>

        <p
          className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base"
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
          {submitted ? (
            <div className="text-center py-10 px-4">
              <p className="text-xl sm:text-2xl font-bold mb-2" style={{ color: BRAND }}>
                Thank you, {form.name}!
              </p>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Your appointment request has been received. Our team will contact you shortly to confirm.
              </p>
              <button
                onClick={handleClear}
                className="font-semibold px-6 py-3 rounded-md text-white text-sm sm:text-base"
                style={{ backgroundColor: BRAND }}
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <>
              {/* Row 1 — 1 col mobile / 2 col tablet / 4 col desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name*"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
                <input
                  type="tel"
                  placeholder="Contact No.*"
                  value={form.contact}
                  onChange={handleChange("contact")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={form.location}
                  onChange={handleChange("location")}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                  style={{ "--tw-ring-color": BRAND }}
                />
              </div>

              {/* Row 2 — 1 col mobile / 3 col desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <SearchableDropdown
                  label="Service"
                  options={SERVICES}
                  value={form.service}
                  onChange={(val) => setForm((p) => ({ ...p, service: val }))}
                />
                <SearchableDropdown
                  label="Doctor"
                  options={DOCTORS}
                  value={form.doctor}
                  onChange={(val) => setForm((p) => ({ ...p, doctor: val }))}
                  getLabel={(doc) => `${doc.name} - ${doc.dept}`}
                />
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={form.age}
                    onChange={handleChange("age")}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 text-gray-700 bg-white text-sm"
                    style={{ "--tw-ring-color": BRAND }}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                    Age
                  </span>
                </div>
              </div>

              {/* Row 3 — captcha + buttons stacked on mobile */}
              <div className="flex flex-col gap-5">
                <div>
                  {recaptchaError && (
                    <p className="text-red-600 text-sm mb-2">
                      Please verify the reCAPTCHA before submitting.
                    </p>
                  )}
                  {/* Scale down recaptcha on very small screens */}
                  <div
                    className="block sm:hidden"
                    style={{ transform: "scale(0.85)", transformOrigin: "left center" }}
                  >
                    <RecaptchaBox
                      onVerify={(token) => setForm((p) => ({ ...p, recaptchaToken: token }))}
                      onExpire={() => setForm((p) => ({ ...p, recaptchaToken: null }))}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <RecaptchaBox
                      onVerify={(token) => setForm((p) => ({ ...p, recaptchaToken: token }))}
                      onExpire={() => setForm((p) => ({ ...p, recaptchaToken: null }))}
                    />
                  </div>
                </div>

                {/* Buttons — full width on mobile, auto on desktop */}
<div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-end">
                    <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto text-white font-semibold px-10 py-3 rounded-md shadow transition-transform hover:scale-[1.02] text-sm sm:text-base"
                    style={{ backgroundColor: "#e30613" }}
                  >
                    Submit
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
    </div>
  );
}
