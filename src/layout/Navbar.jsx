import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaClock,
  FaAmbulance,
  FaMapMarkerAlt,
  FaBone,
  FaWalking,
  FaBrain,
  FaXRay,
  FaUserMd,
  FaSyringe,
  FaWheelchair,
  FaHeartbeat,
  FaProcedures,
  FaShieldAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
  
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";

/* SPECIALITIES MEGA MENU DATA
   Organized from Gawade Hospital's actual service list into
   Ruby Hall style 4-column groups */

const specialitiesData = [
  {
    heading: "Orthopedic & Surgical Care",
    items: [
      { icon: FaBone, label: "Orthopedic & Trauma Care" },
      { icon: FaWalking, label: "Knee Replacement Surgery" },
      { icon: FaWalking, label: "Hip Replacement Surgery" },
      { icon: FaBone, label: "Fracture Management" },
      { icon: FaUserMd, label: "Joint Reconstruction Procedures" },
      { icon: FaHeartbeat, label: "Sports Injury Management" },
    ],
  },
  {
    heading: "Neuro & Spine Care",
    items: [
      { icon: FaBrain, label: "Brain & Neurosurgery" },
      { icon: FaProcedures, label: "Spine Surgery" },
      { icon: FaProcedures, label: "Spinal Trauma Management" },
      { icon: FaUserMd, label: "Minimally Invasive Spine Procedures" },
      { icon: FaUserMd, label: "Plastic & Reconstructive Surgery" },
    ],
  },
  {
    heading: "Critical & Emergency Care",
    items: [
      { icon: FaAmbulance, label: "Emergency & Trauma Care" },
      { icon: FaProcedures, label: "ICU & Critical Care Unit" },
      { icon: FaSyringe, label: "Accident & Trauma Management" },
      { icon: FaAmbulance, label: "Ambulance Assistance" },
      { icon: FaHeartbeat, label: "24x7 Emergency Support" },
    ],
  },
  {
    heading: "Diagnostics & Rehabilitation",
    items: [
      { icon: FaXRay, label: "CT Scan & Diagnostic Services" },
      { icon: FaWheelchair, label: "Physiotherapy & Rehabilitation" },
      { icon: FaShieldAlt, label: "Cashless Insurance Facility" },
      { icon: FaUserMd, label: "Modern Diagnostic Support" },
    ],
  },
];

const navLinks = [
  { label: "Doctors", href: "/doctors" },
  { label: "Facilities", href: "/facilities" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const EMERGENCY_NUMBER = "+919876543210";
const WHATSAPP_NUMBER = "919876543210";
const EMAIL = "info@gawadehospital.com";

const Navbar = () => {
  const [showSpecialities, setShowSpecialities] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSpecialitiesOpen, setMobileSpecialitiesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // ✅ FIX 1: useNavigate import केले navigate साठी
  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSpecialitiesOpen(false);
  };

  /* Lock body scroll while the mobile drawer is open. Without this,
     the page behind the drawer keeps scrolling, which is what was
     causing the navbar/hero to peek through above the drawer panel
     in the screenshot - the backdrop covers the viewport but the
     underlying page had already scrolled to a slightly different
     position, so things didn't line up. */
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [mobileOpen]);

  return (
    <>
      {/* ============================================================ */}
      {/* TOP BAR — desktop/tablet only                                */}
      {/* ============================================================ */}

      <div className="hidden md:block bg-[#f3e6ef] border-b border-[#8b1e72]/20">
        <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">

          {/* Left */}

          <div className="flex items-center gap-4 text-[#8b1e72] text-sm">

            <div className="flex items-center gap-1.5">
              <FaClock className="text-xs" />
              <span className="font-semibold">24x7 Emergency Service</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaPhoneAlt className="text-xs" />
              <span className="font-semibold">+91 9876543210</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-xs" />
              <span className="font-semibold">Baramati, Maharashtra</span>
            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-2.5">

            <div className="flex items-center gap-3 overflow-visible">

              {/* Ambulance */}
              <div className="relative group">
                <a
                  href={`tel:${EMERGENCY_NUMBER}`}
                  className="w-9 h-9 rounded-full bg-[#dc2626] text-white hover:bg-[#b91c1c] duration-300 flex items-center justify-center"
                >
                  <FaAmbulance className="text-sm" />
                </a>

                <div
                  className="
                  absolute top-full left-1/2 -translate-x-1/2
                  mt-2
                  hidden group-hover:block
                  whitespace-nowrap
                  bg-[#8b1e72]
                  text-white
                  text-xs
                  font-semibold
                  px-3 py-1.5
                  rounded-md
                  shadow-xl
                  z-[99999]
                "
                >
                  Emergency: {EMERGENCY_NUMBER}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="relative group">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
                >
                  <FaWhatsapp className="text-sm" />
                </a>

                <div
                  className="
                  absolute top-full left-1/2 -translate-x-1/2
                  mt-2
                  hidden group-hover:block
                  whitespace-nowrap
                  bg-[#8b1e72]
                  text-white
                  text-xs
                  font-semibold
                  px-3 py-1.5
                  rounded-md
                  shadow-xl
                  z-[99999]
                "
                >
                  WhatsApp: +91 {WHATSAPP_NUMBER.slice(2)}
                </div>
              </div>

              {/* Phone */}
              <div className="relative group">
                <a
                  href={`tel:${EMERGENCY_NUMBER}`}
                  className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
                >
                  <FaPhoneAlt className="text-sm" />
                </a>

                <div
                  className="
                  absolute top-full left-1/2 -translate-x-1/2
                  mt-2
                  hidden group-hover:block
                  whitespace-nowrap
                  bg-[#8b1e72]
                  text-white
                  text-xs
                  font-semibold
                  px-3 py-1.5
                  rounded-md
                  shadow-xl
                  z-[99999]
                "
                >
                  Call: {EMERGENCY_NUMBER}
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <a
                  href={`mailto:${EMAIL}`}
                  className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
                >
                  <FaEnvelope className="text-sm" />
                </a>

                <div
                  className="
                  absolute top-full left-1/2 -translate-x-1/2
                  mt-2
                  hidden group-hover:block
                  whitespace-nowrap
                  bg-[#8b1e72]
                  text-white
                  text-xs
                  font-semibold
                  px-3 py-1.5
                  rounded-md
                  shadow-xl
                  z-[99999]
                "
                >
                  {EMAIL}
                </div>
              </div>
            </div>

            {/* Language Dropdown */}

            <div className="relative">
              <select
                className="
                h-8
                w-28
                pl-3
                pr-8
                rounded-full
                bg-white
                border border-[#e7c8db]
                text-[#8b1e72]
                text-xs
                font-semibold
                shadow-sm
                outline-none
                cursor-pointer
                appearance-none
                hover:border-[#8b1e72]
                focus:border-[#8b1e72]
                focus:ring-2
                focus:ring-[#8b1e72]/20
                transition-all duration-300
              "
              >
                <option>English</option>
                <option>मराठी</option>
                <option>हिंदी</option>
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8b1e72] text-[10px]">
                ▼
              </div>
            </div>

            {/* Social Icons */}

            <a
              href="/"
              title="Facebook"
              className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
            >
              <FaFacebookF className="text-sm" />
            </a>

            <a
              href="/"
              title="Instagram"
              className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
            >
              <FaInstagram className="text-sm" />
            </a>

            <a
              href="/"
              title="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
            >
              <FaLinkedinIn className="text-sm" />
            </a>

            <a
              href="/"
              title="YouTube"
              className="w-9 h-9 rounded-full bg-red-600 text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
            >
              <FaYoutube className="text-sm" />
            </a>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE TOP STRIP — replaces the top bar on small screens     */}
      {/* ============================================================ */}

      {/* ✅ FIX: added `relative z-[10002]` here so this whole strip
          (and the language dropdown inside it) renders ABOVE the
          main <nav> below, which has z-[9999]. Previously this strip
          had no stacking context of its own, so the open dropdown was
          rendering behind the navbar instead of on top of it. */}
      <div className="bg-[#8b1e72] lg:hidden relative z-[9999]">
        <div className="flex items-center justify-center gap-2 px-2 py-1.5">

          {/* Book Appointment */}
          <Link
            to="/appointment"
            className="
            h-8
            px-3
            flex items-center justify-center
            bg-white
            text-[#8b1e72]
            text-[11px]
            font-semibold
            rounded-full
            shadow-md
            whitespace-nowrap
          "
          >
            Book Appointment
          </Link>

          {/* Premium Language Dropdown */}
          <div className="relative">

            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="
              h-8
              min-w-[95px]
              px-3
              bg-white
              text-[#8b1e72]
              text-[11px]
              font-semibold
              rounded-full
              shadow-md
              flex items-center justify-between gap-2
            "
            >
              {selectedLanguage}
              <span className={`duration-300 ${languageOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {languageOpen && (
              <div
                className="
                absolute top-10 right-0
                w-[110px]
                bg-white
                rounded-xl
                shadow-xl
                border border-[#f3e6ef]
                overflow-hidden
                z-[10002]
              "
              >
                <button
                  onClick={() => {
                    setSelectedLanguage("English");
                    setLanguageOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[11px] text-[#8b1e72] hover:bg-[#f3e6ef]"
                >
                  English
                </button>

                <button
                  onClick={() => {
                    setSelectedLanguage("मराठी");
                    setLanguageOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[11px] text-[#8b1e72] hover:bg-[#f3e6ef]"
                >
                  मराठी
                </button>

                <button
                  onClick={() => {
                    setSelectedLanguage("हिंदी");
                    setLanguageOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[11px] text-[#8b1e72] hover:bg-[#f3e6ef]"
                >
                  हिंदी
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MAIN NAVBAR                                                   */}
      {/* ============================================================ */}

      <nav className="bg-[#fafbfd] relative z-[9998] overflow-visible shadow-sm">

        <div className="max-w-7xl mx-auto px-4">

          <div className="h-[72px] md:h-18 flex items-center justify-between">

            {/* Logo */}

            <Link to="/" onClick={closeMobileMenu}>
              <div
                className="flex items-center gap-1 sm:gap-3"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >

              <img
  src={logo}
  alt="Gawade Hospital Logo"
  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
/>

                <div>
                  <p
                    className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[1px] uppercase text-[#b04a95]"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Caring For Life !
                  </p>

                  <h2
                    className="text-xl sm:text-2xl md:text-3xl leading-none"
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontWeight: 600,
                      color: "#8b1e72",
                    }}
                  >
                    Gawade Hospital
                  </h2>
                </div>

              </div>
            </Link>

            {/* Desktop Nav Links */}

            <ul
              className="
              hidden lg:flex
              items-center
              gap-5
              text-[14px]
              text-[#8b1e72]
              font-medium
            "
            >
              <li>
                <Link to="/appointment" className="hover:text-[#5e1550] duration-300">
                  Book an Appointment
                </Link>
              </li>

              {/* Specialities - Mega Menu Trigger.
                  The <li> itself is the hover zone, and the dropdown panel is
                  absolutely positioned relative to this same <li>, so the
                  mouse never has to leave the hover zone to reach the panel. */}
              <li
                className="relative h-20 flex items-center"
                onMouseEnter={() => setShowSpecialities(true)}
                onMouseLeave={() => setShowSpecialities(false)}
              >
                {/* ✅ FIX 2: button → Link so clicking "Specialities" text navigates to /specialities */}
                <Link
                  to="/specialities"
                  className="flex items-center gap-1.5 hover:text-[#5e1550] duration-300 cursor-pointer"
                >
                  Specialities
                  <FaChevronDown
                    className={`text-[10px] duration-300 ${
                      showSpecialities ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* SPECIALITIES MEGA DROPDOWN.
                    NOTE: needs left-1/2 + -translate-x-1/2 together to
                    actually center under the trigger — left-1/2 alone
                    (without the matching translate) just nudges the
                    panel rightward instead of centering it. */}

                <div
                  className={`
                  absolute left-1/2 -translate-x-1/2 top-full
                  w-[min(80vw,850px)]
                  transition-all duration-300 origin-top
                  ${showSpecialities
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"}
                `}
                >
                  <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(139,30,114,0.35)] border border-[#f0d9e9] overflow-hidden">

                    {/* Accent top bar */}
                    <div className="h-1.5 bg-gradient-to-r from-[#8b1e72] via-[#b04a95] to-[#f0c419]" />

                    <div className="px-6 py-5">

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">

                        {specialitiesData.map((col, colIdx) => (
                          <div key={colIdx}>

                            <h3 className="flex items-center gap-2 text-[#8b1e72] font-bold text-[15px] pb-2 mb-2 border-b-2 border-[#f3e6ef] text-left">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f0c419]" />
                              {col.heading}
                            </h3>

                            <div className="flex flex-col gap-2">

                              {col.items.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                  // ✅ FIX 3: onClick ने dropdown बंद होतो + navigate होतो
                                  <Link
                                    key={idx}
                                    to="/specialities"
                                    onClick={() => setShowSpecialities(false)}
                                    className="
                                      group
                                      flex items-center gap-3
                                      rounded-xl
                                      px-2 py-1.5
                                      text-[13.5px] text-gray-700
                                      hover:bg-[#f3e6ef]
                                      duration-200
                                      text-left
                                    "
                                  >
                                    <span
                                      className="
                                        w-8 h-8 shrink-0
                                        rounded-lg
                                        bg-[#f3e6ef]
                                        text-[#8b1e72]
                                        flex items-center justify-center
                                        group-hover:bg-[#8b1e72]
                                        group-hover:text-white
                                        duration-200
                                      "
                                    >
                                      <Icon className="text-[13px]" />
                                    </span>

                                    <span className="leading-snug group-hover:text-[#8b1e72]">
                                      {item.label}
                                    </span>
                                  </Link>
                                );
                              })}

                            </div>

                          </div>
                        ))}

                      </div>

                      {/* Footer CTA strip */}
                      <div className="mt-5 pt-4 border-t border-[#f3e6ef] flex items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">
                          Can't find what you're looking for?
                        </p>
                        <Link
                          to="/specialities"
                          onClick={() => setShowSpecialities(false)}
                          className="text-sm font-semibold text-white bg-[#8b1e72] hover:bg-[#5e1550] px-4 py-2 rounded-lg duration-300 whitespace-nowrap"
                        >
                          View All Specialities
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>

              </li>

              {navLinks.map((link) => (
                <li key={link.label} className="hover:text-[#5e1550] cursor-pointer duration-300">
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            {/* Desktop quick call button (tablet/lg, before hamburger kicks in) */}

            <a
              href={`tel:${EMERGENCY_NUMBER}`}
              className="hidden md:flex lg:hidden items-center gap-2 bg-[#8b1e72] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#5e1550] duration-300"
            >
              <FaPhoneAlt className="text-xs" />
              Call Now
            </a>

            {/* Hamburger — mobile & tablet.
                Hidden while the drawer is open (mobileOpen) so only the
                drawer's own close (X) button shows — otherwise both the
                hamburger and the drawer's X appeared on screen together. */}

            {!mobileOpen && (
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="
                lg:hidden
                w-11 h-11
                rounded-lg
                flex items-center justify-center
                text-[#8b1e72]
                bg-[#f3e6ef]
                text-xl
              "
              >
                <FaBars />
              </button>
            )}

          </div>

        </div>

      </nav>

      {/* ============================================================ */}
      {/* MOBILE DRAWER MENU                                            */}
      {/* ============================================================ */}

      {/* Backdrop.
          z-[10000] — must be higher than the navbar's z-[9999], otherwise
          the navbar (and its hamburger button) renders on top of the
          drawer/backdrop instead of being covered by it. */}
      <div
        onClick={closeMobileMenu}
        className={`
        fixed inset-0 bg-black/50 z-[10000] lg:hidden
        transition-opacity duration-300
        ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      />

      {/* Drawer panel.
          z-[10001] — above the backdrop, and above the navbar's z-[9999].
          Width: full width on very small phones (so it doesn't look like
          a half-open sliver), and a capped width on larger phones/tablets. */}
      <div
        className={`
        fixed top-0 right-0 h-full
        w-full sm:w-[85%] sm:max-w-sm
        bg-white z-[10001] lg:hidden
        shadow-2xl
        flex flex-col
        transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >

        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#f3e6ef] bg-[#f3e6ef]">
          <div className="flex items-center gap-2">

            <img src={logo} alt="Gawade Hospital" className="h-10 w-auto object-contain" />

          
             
            <span
              className="text-lg"
              style={{ fontFamily: "Prata, serif", color: "#8b1e72" }}
            >
              Gawade Hospital
            </span>
          </div>

          <button
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-white text-[#8b1e72] flex items-center justify-center shadow"
          >
            <FaTimes />
          </button>
        </div>

        {/* Drawer scrollable body */}
        <div className="flex-1 overflow-y-auto">

          <ul className="flex flex-col text-[#8b1e72] font-medium text-[15px]">

            <li className="border-b border-[#f3e6ef]">
              <Link
                to="/appointment"
                onClick={closeMobileMenu}
                className="block px-5 py-4 hover:bg-[#f3e6ef]"
              >
                Book an Appointment
              </Link>
            </li>

            {/* Specialities accordion */}
            <li className="border-b border-[#f3e6ef]">
              <button
                onClick={() => setMobileSpecialitiesOpen((v) => !v)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#f3e6ef]"
              >
                Specialities
                <FaChevronDown
                  className={`text-xs duration-300 ${
                    mobileSpecialitiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                overflow-hidden transition-all duration-300
                ${mobileSpecialitiesOpen ? "max-h-[2000px]" : "max-h-0"}
              `}
              >
                <div className="px-5 pb-4 flex flex-col gap-5">

                  {specialitiesData.map((col, colIdx) => (
                    <div key={colIdx}>

                      <h4 className="flex items-center gap-2 text-[13px] font-bold text-[#8b1e72] uppercase tracking-wide mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f0c419]" />
                        {col.heading}
                      </h4>

                      <div className="flex flex-col gap-1.5">
                        {col.items.map((item, idx) => {
                          const Icon = item.icon;
                          return (
                            // ✅ FIX 4: Mobile items — <a href> ऐवजी <Link to> वापरला
                            <Link
                              key={idx}
                              to="/specialities"
                              onClick={closeMobileMenu}
                              className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-[13.5px] text-gray-700 hover:bg-[#f3e6ef] active:bg-[#f3e6ef]"
                            >
                              <span className="w-7 h-7 shrink-0 rounded-md bg-[#f3e6ef] text-[#8b1e72] flex items-center justify-center">
                                <Icon className="text-[12px]" />
                              </span>
                              <span className="leading-snug">{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>

                    </div>
                  ))}

                  <Link
                    to="/specialities"
                    onClick={closeMobileMenu}
                    className="text-center text-sm font-semibold text-white bg-[#8b1e72] py-2.5 rounded-lg"
                  >
                    View All Specialities
                  </Link>

                </div>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-[#f3e6ef]">
                <Link
                  to={link.href}
                  onClick={closeMobileMenu}
                  className="block px-5 py-4 hover:bg-[#f3e6ef]"
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

          {/* Contact block inside drawer */}
          <div className="px-5 py-5 flex flex-col gap-3">

            <a
              href={`tel:${EMERGENCY_NUMBER}`}
              className="flex items-center gap-3 text-sm text-gray-700"
            >
              <span className="w-9 h-9 rounded-full bg-[#f6c9e0] text-[#8b1e72] flex items-center justify-center">
                <FaPhoneAlt className="text-sm" />
              </span>
              {EMERGENCY_NUMBER}
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-sm text-gray-700"
            >
              <span className="w-9 h-9 rounded-full bg-[#f6c9e0] text-[#8b1e72] flex items-center justify-center">
                <FaEnvelope className="text-sm" />
              </span>
              {EMAIL}
            </a>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="w-9 h-9 rounded-full bg-[#f6c9e0] text-[#8b1e72] flex items-center justify-center">
                <FaMapMarkerAlt className="text-sm" />
              </span>
              Baramati, Maharashtra
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="/" className="w-9 h-9 rounded-full bg-[#8b1e72] text-white flex items-center justify-center">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="/" className="w-9 h-9 rounded-full bg-[#8b1e72] text-white flex items-center justify-center">
                <FaInstagram className="text-sm" />
              </a>
              <a href="/" className="w-9 h-9 rounded-full bg-[#8b1e72] text-white flex items-center justify-center">
                <FaLinkedinIn className="text-sm" />
              </a>
              <a href="/" className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center">
                <FaYoutube className="text-sm" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center"
              >
                <FaWhatsapp className="text-sm" />
              </a>
            </div>

          </div>

        </div>

        {/* Drawer sticky bottom CTA */}
        <div className="p-4 border-t border-[#f3e6ef] flex gap-3">
          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="flex-1 flex items-center justify-center gap-2 bg-[#dc2626] text-white py-3 rounded-xl font-semibold text-sm"
          >
            <FaAmbulance />
            Emergency
          </a>
          <Link
            to="/appointment"
            onClick={closeMobileMenu}
            className="flex-1 flex items-center justify-center gap-2 bg-[#8b1e72] text-white py-3 rounded-xl font-semibold text-sm"
          >
            Book Appointment
          </Link>
        </div>

      </div>

      {/* ============================================================ */}
      {/* MOBILE STICKY BOTTOM ACTION BAR — phone + tablet only        */}
      {/* Fixed to the bottom of the viewport, 4 equal buttons:        */}
      {/* Emergency (calls EMERGENCY_NUMBER) / Call / Find Doctor /    */}
      {/* Book — each navigates or triggers its action on tap.        */}
      {/* Theme restricted to #8b1e72 + white only, no red.           */}
      {/* ============================================================ */}

      <div
        className="
        fixed bottom-0 left-0 right-0
        lg:hidden
        z-[9997]
        px-2 pb-2 pt-1.5
        bg-white
        border-t border-[#f3e6ef]
        shadow-[0_-6px_20px_rgba(139,30,114,0.18)]
      "
      >
        <div className="grid grid-cols-4 gap-1.5">

          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="
            flex flex-col items-center justify-center
            gap-1
            py-2
            rounded-2xl
            bg-[#8b1e72]
            active:scale-95
            transition-transform duration-150
          "
          >
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <FaAmbulance className="text-white text-base" />
            </span>
            <span className="text-[10.5px] font-semibold text-white">Emergency</span>
          </a>

          <a
            href={`tel:${EMERGENCY_NUMBER}`}
            className="
            flex flex-col items-center justify-center
            gap-1
            py-2
            rounded-2xl
            bg-[#f3e6ef]
            active:scale-95
            transition-transform duration-150
          "
          >
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
              <FaPhoneAlt className="text-[#8b1e72] text-base" />
            </span>
            <span className="text-[10.5px] font-semibold text-[#8b1e72]">Call</span>
          </a>

          <Link
            to="/doctors"
            onClick={closeMobileMenu}
            className="
            flex flex-col items-center justify-center
            gap-1
            py-2
            rounded-2xl
            bg-[#f3e6ef]
            active:scale-95
            transition-transform duration-150
          "
          >
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
              <FaUserDoctor className="text-[#8b1e72] text-base" />
            </span>
            <span className="text-[10.5px] font-semibold text-[#8b1e72] whitespace-nowrap">Find Doctor</span>
          </Link>

          <Link
            to="/appointment"
            onClick={closeMobileMenu}
            className="
            flex flex-col items-center justify-center
            gap-1
            py-2
            rounded-2xl
            bg-[#8b1e72]
            active:scale-95
            transition-transform duration-150
          "
          >
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <FaProcedures className="text-white text-base" />
            </span>
            <span className="text-[10.5px] font-semibold text-white">Book</span>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
