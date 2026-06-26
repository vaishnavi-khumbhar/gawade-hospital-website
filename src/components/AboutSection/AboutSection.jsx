import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Award,
} from "lucide-react";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* first section */}
<section className="py-10 bg-gradient-to-b from-[#fcf8fd] via-[#faf5fb] to-[#f7eef9]">
  <div className="max-w-7xl mx-auto px-3 sm:px-6">

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-5">

      {[
        {
          no: "01",
          title: "Orthopedic Care",
          desc: "Advanced orthopedic & trauma treatment",
          btn: "View Services",
          link: "/services",
        },
        {
          no: "02",
          title: "Joint Replacement",
          desc: "Knee & hip replacement surgery",
          btn: "View Details",
          link: "/joint-replacement",
        },
        {
          no: "03",
          title: "Specialist Doctors",
          desc: "Experienced medical experts",
          btn: "View Doctors",
          link: "/doctors",
        },
        {
          no: "04",
          title: "CT Scan",
          desc: "Modern imaging & diagnostics",
          btn: "View Facility",
          link: "/facilities",
        },
        {
          no: "05",
          title: "Insurance",
          desc: "Cashless treatment support",
          btn: "View Details",
          link: "/insurance",
        },
      ].map((item) => (
        <div
          key={item.no}
          className="
          group
          relative
          bg-white
          rounded-[18px]
          border
          border-[#8b1e72]/15
          h-[120px]
          sm:h-[170px]
          p-3
          sm:p-4
          overflow-hidden
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#8b1e72]/40
          hover:shadow-[0_10px_30px_rgba(139,30,114,0.12)]
          "
        >
          {/* Top Border */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8b1e72]" />

          {/* Number */}
          <span className="absolute right-3 top-2 text-4xl sm:text-5xl font-black text-[#8b1e72]/8">
            {item.no}
          </span>

<div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-[12px] sm:text-[16px] font-semibold text-[#8b1e72] leading-tight">
                {item.title}
              </h3>

              <p className="mt-1 text-[10px] sm:text-[13px] text-gray-600 leading-4 sm:leading-6">
                {item.desc}
              </p>
            </div>

            <div className="mt-2">
              <button
                onClick={() => navigate(item.link)}
                className="
                h-7
                sm:h-9
                px-2.5
                sm:px-4
                rounded-full
                bg-[#8b1e72]/10
                border
                border-[#8b1e72]/10
                text-[#8b1e72]
                text-[10px]
                sm:text-xs
                font-medium
                hover:bg-[#8b1e72]
                hover:text-white
                transition-all
                duration-300
                "
              >
                {item.btn}
              </button>
            </div>

          </div>
        </div>
      ))}

      {/* Emergency Card */}

      <div
        className="
        group
        relative
        bg-white
        rounded-[18px]
        border
        border-red-200
        h-[120px]
        sm:h-[170px]
        p-3
        sm:p-4
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-red-400
        hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)]
        "
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500" />

        <span className="absolute right-3 top-2 text-4xl sm:text-5xl font-black text-red-100">
          06
        </span>

        <div className="relative z-10 flex flex-col justify-between h-full">

          <div>
            <h3 className="text-[12px] sm:text-[16px] font-semibold text-red-500 leading-tight">
              Emergency Care
            </h3>

            <p className="mt-1 text-[10px] sm:text-[13px] text-gray-600 leading-4 sm:leading-6">
              24×7 Trauma, Accident & Critical Care Support
            </p>
          </div>

          <div className="mt-2">
            <a
              href="tel:+919999999999"
              className="
              inline-flex
              items-center
              justify-center
              h-7
              sm:h-9
              px-2.5
              sm:px-4
              rounded-full
              bg-red-50
              border
              border-red-100
              text-red-500
              text-[10px]
              sm:text-xs
              font-medium
              hover:bg-red-500
              hover:text-white
              transition-all
              duration-300
              "
            >
              Emergency Call
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>



{/* about second code */}
<section className="py-10 md:py-15 bg-gradient-to-b from-[#fcf8fd] via-[#faf5fb] to-[#f7eef9]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* Left Content */}
      <div className="text-center lg:text-left">

        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#c9a227]" />
          <span className="uppercase tracking-[2px] text-[11px] sm:text-xs font-semibold text-[#8b1e72]">
            About Gawade Hospital
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8b1e72] leading-tight">
          Excellence in Healthcare,
          <br />
          Compassion in Service
        </h2>

        <p className="mt-5 text-gray-600 text-sm sm:text-base leading-7 max-w-2xl mx-auto lg:mx-0">
          Gawade Hospital is a trusted multispeciality healthcare destination
          in Baramati, providing advanced Orthopedic, Trauma, Joint
          Replacement, Neurosurgery, Spine Care and Emergency Services with
          modern technology and patient-focused treatment.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="
          mt-7
          h-11 sm:h-12
          px-6 sm:px-8
          rounded-xl
          bg-[#8b1e72]
          text-white
          font-semibold
          hover:bg-[#74185f]
          transition-all
          duration-300
          "
        >
          Know More
        </button>

      </div>

      {/* Right Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
            <h4 className="font-semibold text-[#8b1e72]">
              Patient First
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Personalized and compassionate care.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <Stethoscope className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
            <h4 className="font-semibold text-[#8b1e72]">
              Medical Excellence
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Advanced treatments & expert doctors.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
            <h4 className="font-semibold text-[#8b1e72]">
              Compassionate Care
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Respect, dignity and empathy.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
            <h4 className="font-semibold text-[#8b1e72]">
              Trusted Care
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Reliable healthcare for every family.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>



{/* Third section */}
<section className="relative py-6 bg-gradient-to-b from-[#fcf8fd] via-[#faf5fb] to-[#f7eef9]">

  <div className="max-w-[1500px] mx-auto px-4 sm:px-6">

    <div
      className="
      bg-white
      border
      border-[#8b1e72]/15
      rounded-[30px]
      p-6
      lg:p-10
      shadow-[0_15px_45px_rgba(139,30,114,0.08)]
      "
    >

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-10 items-center">

        <div>

          <div className="flex items-center gap-3 mb-4">

          


           <div className="w-10 h-[2px] bg-[#c9a227]" />
          <span className="uppercase tracking-[2px] text-[11px] sm:text-xs font-semibold text-[#8b1e72]">
            Specialist Consultation
          </span>
        </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8b1e72] leading-tight">
            Book Care With The Right Specialist
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7 max-w-2xl">
            Advanced Orthopedic, Trauma, Spine, Brain Surgery and Critical Care services delivered with expertise and compassion.
          </p>

        </div>

        <div>

          <div
            className="
            bg-gradient-to-br
            from-[#faf5fb]
            via-white
            to-[#f8eef9]
            border
            border-[#8b1e72]/15
            rounded-[28px]
            p-5
            shadow-[0_10px_35px_rgba(139,30,114,0.08)]
            "
          >

            <div className="grid grid-cols-1 gap-3">

              <input
                type="text"
                placeholder="Search Doctor Name"
                className="
                h-12
                rounded-xl
                border
                border-[#8b1e72]/15
                px-4
                outline-none
                focus:border-[#8b1e72]
                "
              />

              <select className="h-12 rounded-xl border border-[#8b1e72]/15 px-4">
                <option>All Specialities</option>
                <option>Orthopedic</option>
                <option>Joint Replacement</option>
                <option>Brain Surgery</option>
                <option>Spine Surgery</option>
              </select>

              <select className="h-12 rounded-xl border border-[#8b1e72]/15 px-4">
                <option>All Departments</option>
                <option>Trauma Care</option>
                <option>Emergency Care</option>
                <option>Physiotherapy</option>
              </select>

              <button
                onClick={() => navigate("/doctors")}
                className="
                mt-2
                mx-auto
                flex
                items-center
                justify-center
                h-11
                px-8
                rounded-xl
                bg-red-500
                text-white
                text-sm
                font-semibold
                hover:bg-red-600
                hover:shadow-lg
                transition-all
                duration-300
                "
              >
                Search Specialist
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </>

        
  );
};

export default AboutSection;