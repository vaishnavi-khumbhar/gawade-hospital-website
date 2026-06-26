import { useState } from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "Orthopedic & Joint Replacement Surgeon",
    description:
      "Expert in fracture management, trauma surgery, knee replacement, hip replacement, and orthopedic reconstruction procedures.",
    location: "Baramati ",
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
      "Dedicated to managing critically ill patients with advanced intensive care support.",
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
];

// Get initials from name
function getInitials(name) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Location icon
const LocationIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// Calendar icon
const CalendarIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Doctor Card Component
function DoctorCard({ doctor }) {
  const initials = getInitials(doctor.name);

  return (
    <div
      className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col gap-4"
      style={{ color: "#e445bf" }}
    >
      {/* Top */}
      <div className="flex items-start gap-4">
        <div
          className="w-20 h-20 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
          style={{ backgroundColor: "#8b1e72" }}
        >
          {initials}
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <h3
            className="text-base font-bold leading-tight"
            style={{ color: "#8b1e72" }}
          >
            {doctor.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 leading-snug">
            {doctor.specialty}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        {doctor.description}
      </p>

      {/* Location & Schedule */}
      <div className="flex flex-col gap-1.5 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <LocationIcon />
          <span>{doctor.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <span>{doctor.schedule}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto pt-1">
        <Link
          to="/doctor-details"
          className="flex-1 py-2 rounded-lg border text-center text-sm font-medium hover:bg-blue-50 transition-colors duration-150"
          style={{ color: "#8b1e72" }}
        >
          Know More
        </Link>

        <Link
          to="/book-appointment"
          className="flex-1 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-150 text-center"
          style={{ backgroundColor: "#8b1e72" }}
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

// Main Section
export default function DoctorsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(doctors.length / cardsPerPage);

  const visibleDoctors = doctors.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  return (
    <section className="py-10 px-4 sm:px-8 bg-gradient-to-br from-[#fcf9fd] via-[#f2e8f6] to-[#e7d3ee]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 md:w-12 h-[2px] bg-[#c9a227]" />
            <span className="text-[#8b1e72] font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
              Specialist Doctors
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#8b1e72" }}>
            Meet Our Medical Experts
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-6">
            Our team of highly qualified specialists is committed to providing
            advanced diagnosis, effective treatment, and comprehensive patient care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentPage === i ? "bg-[#8b1e72] scale-125" : "bg-gray-300"
                }`}
              />
            ))}

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}