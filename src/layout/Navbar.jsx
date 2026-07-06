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
import { useTranslation } from "react-i18next";

/* SPECIALITIES MEGA MENU DATA
   Organized from Gawade Hospital's actual service list into
   Ruby Hall style 4-column groups. Labels use translation keys
   so the mega menu switches language along with the rest of the site. */

const specialitiesData = [
  {
    headingKey: "spec_heading_ortho",
    items: [
      { icon: FaBone, labelKey: "spec_ortho_1" },
      { icon: FaWalking, labelKey: "spec_ortho_2" },
      { icon: FaWalking, labelKey: "spec_ortho_3" },
      { icon: FaBone, labelKey: "spec_ortho_4" },
      { icon: FaUserMd, labelKey: "spec_ortho_5" },
      { icon: FaHeartbeat, labelKey: "spec_ortho_6" },
    ],
  },
  {
    headingKey: "spec_heading_neuro",
    items: [
      { icon: FaBrain, labelKey: "spec_neuro_1" },
      { icon: FaProcedures, labelKey: "spec_neuro_2" },
      { icon: FaProcedures, labelKey: "spec_neuro_3" },
      { icon: FaUserMd, labelKey: "spec_neuro_4" },
      { icon: FaUserMd, labelKey: "spec_neuro_5" },
    ],
  },
  {
    headingKey: "spec_heading_critical",
    items: [
      { icon: FaAmbulance, labelKey: "spec_critical_1" },
      { icon: FaProcedures, labelKey: "spec_critical_2" },
      { icon: FaSyringe, labelKey: "spec_critical_3" },
      { icon: FaAmbulance, labelKey: "spec_critical_4" },
      { icon: FaHeartbeat, labelKey: "spec_critical_5" },
    ],
  },
  {
    headingKey: "spec_heading_diagnostics",
    items: [
      { icon: FaXRay, labelKey: "spec_diag_1" },
      { icon: FaWheelchair, labelKey: "spec_diag_2" },
      { icon: FaShieldAlt, labelKey: "spec_diag_3" },
      { icon: FaUserMd, labelKey: "spec_diag_4" },
    ],
  },
];

const navLinks = [
  { labelKey: "nav_doctors", href: "/doctors" },
  { labelKey: "nav_about", href: "/about" },
  { labelKey: "nav_contact", href: "/contact" },
];

const EMERGENCY_NUMBER = "+919876543210";
const WHATSAPP_NUMBER = "+9860017620";
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

  const { t, i18n } = useTranslation();

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("lang", lang);

  if (lang === "en") {
    setSelectedLanguage("English");
  } else if (lang === "mr") {
    setSelectedLanguage("मराठी");
  } else {
    setSelectedLanguage("हिंदी");
  }
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
              <span className="font-semibold">{t("topbar_emergencyService")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FaPhoneAlt className="text-xs" />
              <span className="font-semibold">+91 9876543210</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-xs" />
              <span className="font-semibold">{t("topbar_address")}</span>
            </div>

          </div>

          {/* Right */}

          <div className="flex items-center gap-2.5">

            <div className="flex items-center gap-3 overflow-visible">

              {/* Ambulance */}
              <div className="relative group">
                <div className="relative group">
  <a
    href={`tel:${EMERGENCY_NUMBER}`}
    className="w-9 h-9 rounded-full bg-[#dc2626] text-white hover:bg-[#b91c1c] duration-300 flex items-center justify-center"
  >
    <FaAmbulance className="text-sm" />
  </a>
</div>
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
  value={i18n.language}
  onChange={(e) => changeLanguage(e.target.value)}
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
    outline-none
    appearance-none
    cursor-pointer
  "
>
  <option value="en">English</option>
  <option value="mr">मराठी</option>
  <option value="hi">हिंदी</option>
</select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8b1e72] text-[10px]">
                ▼
              </div>
            </div>

            {/* Social Icons */}

            <Link
  to="/"
  title="Facebook"
  className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
>
  <FaFacebookF className="text-sm" />
</Link>

<Link
  to="/"
  title="Instagram"
  className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
>
  <FaInstagram className="text-sm" />
</Link>

<Link
  to="/"
  title="LinkedIn"
  className="w-9 h-9 rounded-full bg-[#8b1e72] text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
>
  <FaLinkedinIn className="text-sm" />
</Link>

<Link
  to="/"
  title="YouTube"
  className="w-9 h-9 rounded-full bg-red-600 text-white hover:opacity-80 duration-300 flex items-center justify-center hidden lg:flex"
>
  <FaYoutube className="text-sm" />
</Link>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE TOP STRIP — replaces the top bar on small screens     */}
      {/* ============================================================ */}

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
            {t("bookNow")}
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
changeLanguage("en");
                    setLanguageOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[11px] text-[#8b1e72] hover:bg-[#f3e6ef]"
                >
                  English
                </button>

                <button
                  onClick={() => {
                    changeLanguage("mr");
                    setLanguageOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-[11px] text-[#8b1e72] hover:bg-[#f3e6ef]"
                >
                  मराठी
                </button>

                <button
                  onClick={() => {
                    changeLanguage("hi");
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
                    {t("tagline")}
                  </p>

                 <h2
  className="text-xl sm:text-3xl md:text-3xl leading-none"
  style={{
    fontFamily: "Signika, sans-serif",
    fontWeight: 800,
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
                <Link
  to="/appointment"
  className="text-base hover:text-[#5e1550]  duration-300"
>
  {t("appointment")}
</Link>
              </li>

              {/* Specialities - Mega Menu Trigger.
                  The <li> itself is the hover zone, and the dropdown panel is
                  absolutely positioned relative to this same <li>, so the
                  mouse never has to leave the hover zone to reach the panel. */}
              <li
  className="relative h-20 flex items-center h-[65px]"
                  onMouseEnter={() => setShowSpecialities(true)}
                onMouseLeave={() => setShowSpecialities(false)}
              >
                {/* ✅ FIX 2: button → Link so clicking "Specialities" text navigates to /specialities */}
               <Link
  to="/specialities"
  className="flex items-center gap-1.5 text-base hover:text-[#5e1550] duration-300 cursor-pointer"
>
  {t("specialities")}
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
   absolute
  top-full
  right-[-220px]
  mt-0
  w-[900px]
  max-w-[calc(100vw-60px)]
  z-[99999]
  origin-top
  transition-all duration-300
  ${
    showSpecialities
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-2 pointer-events-none"
  }
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
                              {t(col.headingKey)}
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

                                    <span className="leading-snug group-hover:text-[#8b1e72] ">
                                      {t(item.labelKey)}
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
                          {t("cta_cantFind")}
                        </p>
                        <Link
                          to="/specialities"
                          onClick={() => setShowSpecialities(false)}
                          className="text-sm font-semibold text-white bg-[#8b1e72] hover:bg-[#5e1550] px-4 py-2 rounded-lg duration-300 whitespace-nowrap"
                        >
                          {t("cta_viewAll")}
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>

              </li>

              {navLinks.map((link) => (
                <li key={link.labelKey} className="hover:text-[#5e1550] cursor-pointer duration-300 text-base">
                  <Link to={link.href}>{t(link.labelKey)}</Link>
                </li>
              ))}
            </ul>

            {/* Desktop quick call button (tablet/lg, before hamburger kicks in) */}
 <a 
            
              href={`tel:${EMERGENCY_NUMBER}`}
              className="hidden md:flex lg:hidden items-center gap-2 bg-[#8b1e72] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#5e1550] duration-300"
            >
              <FaPhoneAlt className="text-xs" />
              {t("mobile_call")}
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

      <div
        onClick={closeMobileMenu}
        className={`
        fixed inset-0 bg-black/50 z-[10000] lg:hidden
        transition-opacity duration-300
        ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      />

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
  className="text-2xl sm:text-3xl lg:text-4xl font-semibold"
  style={{ fontFamily: "Signika, sans-serif", color: "#8b1e72" }}
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
                {t("mobile_bookAppointment")}
              </Link>
            </li>

            {/* Specialities accordion */}
            <li className="border-b border-[#f3e6ef]">
              <button
                onClick={() => setMobileSpecialitiesOpen((v) => !v)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#f3e6ef]"
              >
                {t("specialities")}
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
                        {t(col.headingKey)}
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
                              <span className="leading-snug">{t(item.labelKey)}</span>
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
                    {t("cta_viewAll")}
                  </Link>

                </div>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.labelKey} className="border-b border-[#f3e6ef]">
                <Link
                  to={link.href}
                  onClick={closeMobileMenu}
                  className="block px-5 py-4 hover:bg-[#f3e6ef]"
                >
                  {t(link.labelKey)}
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
              {t("topbar_address")}
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
            {t("mobile_emergency")}
          </a>
          <Link
            to="/appointment"
            onClick={closeMobileMenu}
            className="flex-1 flex items-center justify-center gap-2 bg-[#8b1e72] text-white py-3 rounded-xl font-semibold text-sm"
          >
            {t("bookNow")}
          </Link>
        </div>

      </div>

      {/* ============================================================ */}
      {/* MOBILE STICKY BOTTOM ACTION BAR                              */}
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
            <span className="text-[10.5px] font-semibold text-white">{t("mobile_emergency")}</span>
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
            <span className="text-[10.5px] font-semibold text-[#8b1e72]">{t("mobile_call")}</span>
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
            <span className="text-[10.5px] font-semibold text-[#8b1e72] whitespace-nowrap">{t("mobile_findDoctor")}</span>
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
            <span className="text-[10.5px] font-semibold text-white">{t("mobile_book")}</span>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
