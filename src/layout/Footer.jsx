import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

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

const locations = [
  {
    name: "Gawade Hospital",
    address: "Gunwadi Road, Baramati, Maharashtra - 413102",
    phone: "+917420932217",
    email: "info@gawadehospital.com",
    mapLink: "https://www.google.com/maps?q=Gawade+Hospital+Baramati",
  },
];

const superSpecialities = [
  { name: "Orthopedic & Trauma Care", link: "/specialities" },
  { name: "Brain & Neurosurgery", link: "/specialities" },
  { name: "Spine Surgery", link: "/specialities" },
  { name: "Plastic & Reconstructive Surgery", link: "/specialities" },
  { name: "Critical Care Services", link: "/specialities" },
];

const broadSpecialities = [
  { name: "Knee Replacement Surgery", link: "/specialities" },
  { name: "Hip Replacement Surgery", link: "/specialities" },
  { name: "Joint Reconstruction", link: "/specialities" },
  { name: "Physiotherapy & Rehabilitation", link: "/specialities" },
  { name: "CT Scan & Diagnostics", link: "/specialities" },
];

const auxiliaryServices = [
  { name: "Cashless Insurance Facility", link: "/specialities" },
  { name: "Emergency & Trauma Care", link: "/specialities" },
  { name: "ICU & Critical Care", link: "/specialities" },
  { name: "Patient Testimonials", link: "/specialities" },
  { name: "FAQs", link: "/specialities" },
];

const quickLinks = [
  { name: "Book An Appointment", link: "/appointment" },
  { name: "Specialities", link: "/specialities" },
  { name: "Doctors", link: "/doctors" },
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
];
export default function Footer() {
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
        From emergency support to specialised care, Gawade Hospital is here to
        help you choose the right next step.
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
              Advanced Orthopedic, Trauma & Multispeciality Care in Baramati.
              Where care goes beyond healthcare.
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
                  Emergency Number
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
                  Call
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
                  Email
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
            title="Super Specialities"
            items={superSpecialities}
          />

          <FooterColumn
            title="Broad Specialities"
            items={broadSpecialities}
          />

          <FooterColumn
            title="Auxiliary Services"
            items={auxiliaryServices}
          />

          <FooterColumn
            title="Quick Links"
            items={quickLinks}
          />

          {/* बाकी Location Card पासून पुढचा code Part 2 मध्ये */}


                    {/* Location Card */}
          <div>
            <h4
              className="mb-5 inline-block border-b-2 pb-1 text-lg font-bold uppercase tracking-wide"
              style={{ color: BRAND, borderColor: BRAND }}
            >
              Our Location
            </h4>

            {locations.map((loc) => (
              <div
  key={loc.name}
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
  {loc.name}
</span>
                </div>

                <p className="mb-4 text-base leading-7 text-gray-600">
                  {loc.address}
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
  <span>Get Directions</span>
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
  Call Now
</a>
                </div>
              </div>
            ))}
          </div>



        </div>
      </div>

      {/* Bottom */}
      <div
        className="border-t"
        style={{ borderColor: BRAND_SOFT }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row">

          <p className="text-sm text-gray-500">
            © Gawade Hospital. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">

            <a
              href="#"
              className="text-sm hover:underline"
              style={{ color: BRAND }}
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-sm hover:underline"
              style={{ color: BRAND }}
            >
              Privacy Policy
            </a>

          </div>

          <div className="flex items-center gap-4">
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

function FooterColumn({ title, items }) {
  return (
    <div>

      <h4
        className="mb-5 inline-block border-b-2 pb-1 text-lg font-bold uppercase tracking-wide"
        style={{
          color: BRAND,
          borderColor: BRAND,
        }}
      >
        {title}
      </h4>

     <ul className="space-y-3">
  {items.map((item) => (
    <li key={typeof item === "string" ? item : item.name}>
      <Link
        to={typeof item === "string" ? "#" : item.link}
        className="text-base text-gray-600 transition-all duration-300 hover:underline"
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = BRAND)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "")
        }
      >
        {typeof item === "string" ? item : item.name}
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