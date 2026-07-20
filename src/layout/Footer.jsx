import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const BRAND = "#8b1e72";
const BRAND_TINT = "#fbf3f9";
const BRAND_SOFT = "#f3e3ee";

// Phone/email/mapLink are data (same in every language), so they stay
// as plain constants; only nameKey/addressKey are looked up via i18n.
const locations = [
  {
    nameKey: "footerLocationName",
    addressKey: "footerLocationAddress",
    phone: "+917420932217",
    email: "info@gawadehospital.com",
    mapLink: "https://www.google.com/maps?q=Gawade+Hospital+Baramati",
  },
];

const superSpecialities = [
  { nameKey: "footerSuperSpec1", link: "/specialities" },
  { nameKey: "footerSuperSpec2", link: "/specialities" },
  { nameKey: "footerSuperSpec3", link: "/specialities" },
  { nameKey: "footerSuperSpec4", link: "/specialities" },
  { nameKey: "footerSuperSpec5", link: "/specialities" },
];

const broadSpecialities = [
  { nameKey: "footerBroadSpec1", link: "/specialities" },
  { nameKey: "footerBroadSpec2", link: "/specialities" },
  { nameKey: "footerBroadSpec3", link: "/specialities" },
  { nameKey: "footerBroadSpec4", link: "/specialities" },
  { nameKey: "footerBroadSpec5", link: "/specialities" },
];

const auxiliaryServices = [
  { nameKey: "footerAuxService1", link: "/specialities" },
  { nameKey: "footerAuxService2", link: "/specialities" },
  { nameKey: "footerAuxService3", link: "/specialities" },
  { nameKey: "footerAuxService4", link: "/specialities" },
  { nameKey: "footerAuxService5", link: "/specialities" },
];

const quickLinks = [
  { nameKey: "footerQuickLink1", link: "/appointment" },
  { nameKey: "footerQuickLink2", link: "/specialities" },
  { nameKey: "footerQuickLink3", link: "/doctors" },
  { nameKey: "footerQuickLink4", link: "/about" },
  { nameKey: "footerQuickLink5", link: "/contact" },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: BRAND_TINT,
        fontFamily: "'Signika', sans-serif",
      }}
    >
      {/* Top Strip */}
      <div
        style={{ backgroundColor: BRAND }}
        className="w-full px-6 py-4 text-center text-base font-semibold text-white sm:text-lg"
      >
        {t("footerTopStrip")}
      </div>

<div className="mx-auto max-w-7xl px-6 py-10">
        {/* Logo & Contact */}
       <div
  className="mb-8 flex flex-col gap-8 border-b pb-8 lg:flex-row lg:items-start lg:justify-between"
  style={{ borderColor: BRAND_SOFT }}
>
          {/* Left */}
          <div className="max-w-md">

            <div className="mb-4 flex items-center gap-4">

              <img
                src={logo}
                alt="Gawade Hospital Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />

              <span
                className="text-3xl font-bold "
                style={{ color: BRAND }}
              >
                Gawade Hospital
              </span>

            </div>

            <p className="text-base leading-8 text-gray-600">
              {t("footerTagline")}
            </p>

          </div>

          {/* Contact Cards */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">

            {/* Emergency */}

            <div className="flex items-start gap-3">

              <div
                style={{ backgroundColor: BRAND }}
                className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg text-white"
              >
                <Phone size={20} />
              </div>

              <div>

                <p className="text-sm font-medium text-gray-500">
                  {t("footerEmergencyLabel")}
                </p>

                <p
                  className="text-lg font-semibold"
                  style={{ color: BRAND }}
                >
                  +91 9876543210
                </p>

              </div>

            </div>

            {/* Call */}

            <div className="flex items-start gap-3">

              <div
                style={{ backgroundColor: BRAND }}
                className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg text-white"
              >
                <Phone size={20} />
              </div>

              <div>

                <p className="text-sm font-medium text-gray-500">
                  {t("footerCallLabel")}
                </p>

                <p
                  className="text-lg font-semibold"
                  style={{ color: BRAND }}
                >
                  +91 7420932217
                </p>

              </div>

            </div>

            {/* Email */}

            <div className="flex items-start gap-3">

              <div
                style={{ backgroundColor: BRAND }}
                className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg text-white"
              >
                <Mail size={20} />
              </div>

              <div>

                <p className="text-sm font-medium text-gray-500">
                  {t("footerEmailLabel")}
                </p>

                <p
                  className="text-lg font-semibold"
                  style={{ color: BRAND }}
                >
                  info@gawadehospital.com
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Footer Columns */}
<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">

   <FooterColumn
            titleKey="footerSuperSpecTitle"
            items={superSpecialities}
            t={t}
          />

          <FooterColumn
            titleKey="footerBroadSpecTitle"
            items={broadSpecialities}
            t={t}
          />

          <FooterColumn
            titleKey="footerAuxTitle"
            items={auxiliaryServices}
            t={t}
          />

          <FooterColumn
            titleKey="footerQuickLinksTitle"
            items={quickLinks}
            t={t}
          />

          {/* बाकी Location Card पासून पुढचा code Part 2 मध्ये */}


                    {/* Location Card */}
          <div>
            <h4
              className="mb-5 inline-block border-b-2 pb-1 text-lg font-bold uppercase tracking-wide"
              style={{ color: BRAND, borderColor: BRAND }}
            >
              {t("footerLocationTitle")}
            </h4>

            {locations.map((loc) => (
              <div
  key={loc.nameKey}
  className="
    w-full
    sm:w-[340px]
    md:w-[360px]
    lg:w-[380px]
    xl:w-[350px]
    rounded-2xl
    border
    bg-white
    p-6
    8b1e72
    shadow-md
  "
  style={{ borderColor: BRAND_SOFT }}
>
                <div className="mb-3 flex items-center gap-2">
                  <MapPin size={18} style={{ color: BRAND }} />

                  <span className="text-lg font-semibold text-[#8b1e72]">
  {t(loc.nameKey)}
</span>
                </div>

                <p className="mb-4 text-base leading-7 text-gray-600">
                  {t(loc.addressKey)}
                </p>

                <p className="mb-2 flex items-center gap-2 text-base text-gray-700">
                  <Phone size={16} style={{ color: BRAND }} />
                  {loc.phone}
                </p>

                <p className="mb-5 flex items-center gap-2 text-base text-gray-700">
                  <Mail size={16} style={{ color: BRAND }} />
                  {loc.email}
                </p>

                <div className="flex flex-wrap gap-3">
                 <a
  href={loc.mapLink}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300"
  style={{
    borderColor: BRAND,
    color: BRAND,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = BRAND;
    e.currentTarget.style.color = "#fff";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = BRAND;
  }}
>
  <span>{t("footerGetDirections")}</span>
  <ArrowRight size={15} />
</a>

                 <a
  href="tel:+917420932217"
  className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
  style={{ backgroundColor: BRAND }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#74185f";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = BRAND;
  }}
>
  {t("footerCallNow")}
</a>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>

      {/* Bottom */}
     {/* ================= Bottom ================= */}
<div
  className="border-t mt-6 pb-24 sm:pb-6"
  style={{ borderColor: BRAND_SOFT }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">

    {/* Copyright */}
    <p className="text-center text-[11px] sm:text-sm text-gray-500 leading-6">
      {t("footerCopyright")}
    </p>

    {/* Developed By */}
    <p className="mt-2 text-center text-[15px] sm:text-sm text-gray-500 leading-6">
      {t("footerDesignedBy")}{" "}
      <a
        href="https://www.advertisingandbrandingmarketing.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:underline transition-colors"
        style={{ color: BRAND }}
      >
        Advertising Branding & Marketing
      </a>
    </p>

    {/* Social Icons */}
    <div className="mt-4 flex justify-center gap-3">
      <SocialIcon Icon={FaFacebookF} />
      <SocialIcon Icon={FaInstagram} />
      <SocialIcon Icon={FaLinkedinIn} />
      <SocialIcon Icon={FaYoutube} />
    </div>

  </div>
</div>

    </footer>
  );
}

/* ===========================
      Footer Column
=========================== */

function FooterColumn({ titleKey, items, t }) {
  return (
    <div>

      <h4
        className="mb-5 inline-block border-b-2 pb-1 text-lg font-bold uppercase tracking-wide"
        style={{
          color: BRAND,
          borderColor: BRAND,
        }}
      >
        {t(titleKey)}
      </h4>

     <ul className="space-y-3">
  {items.map((item) => (
    <li key={item.nameKey}>
      <Link
        to={item.link}
        className="text-base text-gray-600 transition-all duration-300 hover:underline"
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = BRAND)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "")
        }
      >
        {t(item.nameKey)}
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
}

/* ===========================
      Social Icons
=========================== */

function SocialIcon({ Icon }) {
  return (
    <a
      href="#"
      style={{ backgroundColor: BRAND }}
      className="flex h-10 w-11 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 hover:opacity-90"
    >
      <Icon size={15} />
    </a>
  );
}