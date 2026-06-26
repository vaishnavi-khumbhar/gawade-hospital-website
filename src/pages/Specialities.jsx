import {
  FaBone,
  FaWalking,
  FaShieldAlt,
  FaAmbulance,
  FaUserMd,
} from "react-icons/fa";

import {
  GiKneeCap,
  GiBrain,
} from "react-icons/gi";

import {
  MdMedicalServices,
  MdOutlineHealthAndSafety,
} from "react-icons/md";

const specialities = [
  {
    icon: <FaBone />,
    title: "Orthopedic & Trauma Care",
    description:
      "Advanced treatment for fractures, sports injuries, trauma care and orthopedic conditions.",
  },
  {
    icon: <GiKneeCap />,
    title: "Knee Replacement Surgery",
    description:
      "Expert knee replacement procedures for pain relief and improved mobility.",
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    title: "Hip Replacement Surgery",
    description:
      "Comprehensive hip replacement solutions using modern surgical techniques.",
  },
  {
    icon: <GiBrain />,
    title: "Brain & Neurosurgery",
    description:
      "Specialized diagnosis and treatment for brain, nerve and neurological disorders.",
  },
  {
    icon: <FaBone />,
    title: "Spine Surgery",
    description:
      "Advanced spine treatments for back pain, spinal injuries and disc problems.",
  },
  {
    icon: <FaUserMd />,
    title: "Plastic & Reconstructive Surgery",
    description:
      "Cosmetic and reconstructive procedures to restore appearance and function.",
  },
  {
    icon: <MdMedicalServices />,
    title: "CT Scan & Diagnostic Services",
    description:
      "Accurate diagnostics with advanced CT Scan and modern imaging technology.",
  },
  {
    icon: <FaWalking />,
    title: "Physiotherapy & Rehabilitation",
    description:
      "Personalized rehabilitation programs for faster recovery and mobility.",
  },
  {
    icon: <FaAmbulance />,
    title: "Emergency & Critical Care",
    description:
      "24×7 emergency services supported by ICU and critical care specialists.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cashless Insurance Facility",
    description:
      "Hassle-free cashless treatment through leading insurance providers.",
  },
];

export default function Specialities() {
  return (
    <section className="relative py-20 bg-[#faf7fb] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-40">
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="uppercase tracking-[4px] text-[#8b1e72] font-semibold text-sm">
            Our Key Specialities
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            <span className="text-[#8b1e72]">
              Priority Departments
            </span>
            <br />
            <span className="text-gray-900">
              For Better Treatment & Care
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Gawade Hospital provides advanced orthopedic, trauma,
            neuro, spine, plastic surgery, physiotherapy and critical
            care services with modern technology and experienced
            specialists.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#dcb9d0] rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="text-[#8b1e72] text-6xl">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[#8b1e72] mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[15px] leading-7 min-h-[110px]">
                {item.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-3 mt-6 flex-wrap">
                <button className="border border-[#8b1e72] text-[#8b1e72] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#f8e8f3] transition">
                  Know More
                </button>

                <button className="bg-[#8b1e72] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#74185f] transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}