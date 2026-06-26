import {
  FaBone,
  FaWalking,
  FaAmbulance,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiKneeCap, GiBrain } from "react-icons/gi";

const specialities = [
  {
    icon: <FaBone />,
    title: "Orthopedic Care",
    description:
      "Comprehensive treatment for fractures, trauma injuries and orthopedic conditions.",
  },
  {
    icon: <GiKneeCap />,
    title: "Knee Replacement",
    description:
      "Advanced knee replacement procedures for pain relief and better mobility.",
  },
  {
    icon: <FaWalking />,
    title: "Hip Replacement",
    description:
      "Modern hip replacement solutions for long-term joint health.",
  },
  {
    icon: <GiBrain />,
    title: "Neurosurgery",
    description:
      "Specialized treatment for brain, spine and neurological disorders.",
  },
  {
    icon: <FaBone />,
    title: "Spine Surgery",
    description:
      "Expert care for spinal injuries, disc problems and back pain.",
  },
  {
    icon: <FaAmbulance />,
    title: "Emergency Care",
    description:
      "24×7 emergency and critical care support with advanced facilities.",
  },
];

export default function Specialities() {
  return (
    <section className="py-14 md:py-15 bg-[#faf7fb]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 md:w-12 h-[2px] bg-[#c9a227]" />

            <span className="text-[#8b1e72] font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
              Our Specialities
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8b1e72]">
            Advanced Healthcare Services
          </h2>

          <p className="text-gray-600 mt-4 leading-7 text-sm sm:text-base">
            Gawade Hospital offers advanced orthopedic, neuro, spine,
            trauma and emergency care with modern technology and
            experienced specialists.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {specialities.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border border-[#ead4e3]
                rounded-3xl
                p-5
                text-center
                hover:shadow-xl
                hover:-translate-y-1
                duration-300
                flex flex-col
                h-full
              "
            >
              {/* Icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-3xl bg-[#f3e6ef] flex items-center justify-center text-[#8b1e72] text-4xl md:text-5xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#8b1e72] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-[15px] leading-6 flex-grow">
                {item.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <Link
                  to="/specialities"
                  className="
                    flex-1
                    border border-[#8b1e72]
                    text-[#8b1e72]
                    px-4 py-2.5
                    rounded-xl
                    text-sm
                    font-semibold
                    hover:bg-[#f3e6ef]
                    duration-300
                  "
                >
                  Know More
                </Link>

                <Link
                  to="/appointment"
                  className="
                    flex-1
                    bg-[#8b1e72]
                    text-white
                    px-4 py-2.5
                    rounded-xl
                    text-sm
                    font-semibold
                    hover:bg-[#74185f]
                    duration-300
                  "
                >
                  Book Now
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}