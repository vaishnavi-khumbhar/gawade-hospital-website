import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Award,
} from "lucide-react";

const AboutSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Cards now reference translation keys instead of hardcoded text,
  // so the grid switches language automatically along with the rest
  // of the site.
  const cards = [
    {
      no: "01",
      titleKey: "aboutCard1Title",
      descKey: "aboutCard1Desc",
      btnKey: "aboutCard1Btn",
      link: "/services",
    },
    {
      no: "02",
      titleKey: "aboutCard2Title",
      descKey: "aboutCard2Desc",
      btnKey: "aboutCard2Btn",
      link: "/joint-replacement",
    },
    {
      no: "03",
      titleKey: "aboutCard3Title",
      descKey: "aboutCard3Desc",
      btnKey: "aboutCard3Btn",
      link: "/doctors",
    },
    {
      no: "04",
      titleKey: "aboutCard4Title",
      descKey: "aboutCard4Desc",
      btnKey: "aboutCard4Btn",
      link: "/facilities",
    },
    {
      no: "05",
      titleKey: "aboutCard5Title",
      descKey: "aboutCard5Desc",
      btnKey: "aboutCard5Btn",
      link: "/insurance",
    },
  ];

  return (
    <>
    {/* first section */}
<section className="py-10 bg-gradient-to-b from-[#fcf8fd] via-[#faf5fb] to-[#f7eef9]">
  <div className="max-w-7xl mx-auto px-3 sm:px-6">

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-5">

      {cards.map((item) => (
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
              <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#8b1e72] leading-tight">
                {t(item.titleKey)}
              </h3>

              <p className="mt-1 text-[15px] sm:text-[17px] text-gray-600 leading-4 sm:leading-6">
                {t(item.descKey)}
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
                {t(item.btnKey)}
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
            <h3 className="text-[15px] sm:text-[17px] font-semibold text-red-500 leading-tight">
              {t("aboutEmergencyTitle")}
            </h3>

            <p className="mt-1 text-[15px] sm:text-[17px] text-gray-600 leading-4 sm:leading-6">
              {t("aboutEmergencyDesc")}
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
              {t("aboutEmergencyBtn")}
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
          <span className="uppercase tracking-[2px] text-[13px] sm:text-[17px] sm:text-xs font-semibold text-[#8b1e72]">
            {t("aboutIntroLabel")}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8b1e72] leading-tight">
          {t("aboutHeadingLine1")}
          <br />
          {t("aboutHeadingLine2")}
        </h2>

       <p className="mt-5 text-gray-600 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-8 max-w-3xl mx-auto lg:mx-0">
  {t("aboutIntroParagraph")}
</p>

        <button
          onClick={() => navigate("/about")}
          className="
              mt-8
    inline-flex
    items-center
    gap-2
    h-12 sm:h-14
    px-7 sm:px-9
    rounded-xl
    bg-gradient-to-r
    from-[#8b1e72]
    to-[#a52487]
    text-white
    text-[16px] sm:text-[17px]
    font-semibold
    shadow-lg
    hover:shadow-xl
    hover:scale-105
    hover:from-[#74185f]
    hover:to-[#8b1e72]
    transition-all
    duration-300
  "
        >
          {t("aboutKnowMoreBtn")}
        </button>

      </div>

      {/* Right Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
<h4 className="text-[18px] sm:text-[20px] font-semibold text-[#8b1e72]">
                {t("aboutFeature1Title")}
            </h4>
          <p className="text-[18px] sm:text-[16px] text-gray-600 mt-2 leading-6">
              {t("aboutFeature1Desc")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <Stethoscope className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
<h4 className="text-[18px] sm:text-[20px] font-semibold text-[#8b1e72]">
                {t("aboutFeature2Title")}
            </h4>
          <p className="text-[18px] sm:text-[16px] text-gray-600 mt-2 leading-6">
  {t("aboutFeature2Desc")}
</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
<h4 className="text-[18px] sm:text-[20px] font-semibold text-[#8b1e72]">
                {t("aboutFeature3Title")}
            </h4>
          <p className="text-[18px] sm:text-[16px] text-gray-600 mt-2 leading-6">
              {t("aboutFeature3Desc")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-[#8b1e72]/10 rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-[#8b1e72]/10 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-[#8b1e72]" />
          </div>

          <div>
<h4 className="text-[18px] sm:text-[20px] font-semibold text-[#8b1e72]">
                {t("aboutFeature4Title")}
            </h4>
          <p className="text-[18px] sm:text-[16px] text-gray-600 mt-2 leading-6">
              {t("aboutFeature4Desc")}
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
          <span className="uppercase tracking-[2px] text-[13px] sm:text-[17px] sm:text-xs font-semibold text-[#8b1e72]">
            {t("aboutConsultLabel")}
          </span>
        </div>

          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-[#8b1e72] leading-tight">
            {t("aboutConsultHeading")}
          </h2>

<p className="mt-4 text-gray-600 text-[16px] sm:text-[17px] lg:text-[18px] leading-8 max-w-3xl">
              {t("aboutConsultParagraph")}
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
                placeholder={t("aboutConsultSearchPlaceholder")}
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
                <option>{t("aboutConsultAllSpecialities")}</option>
                <option>{t("aboutConsultSpecOrtho")}</option>
                <option>{t("aboutConsultSpecJoint")}</option>
                <option>{t("aboutConsultSpecBrain")}</option>
                <option>{t("aboutConsultSpecSpine")}</option>
              </select>

              <select className="h-12 rounded-xl border border-[#8b1e72]/15 px-4">
                <option>{t("aboutConsultAllDepartments")}</option>
                <option>{t("aboutConsultDeptTrauma")}</option>
                <option>{t("aboutConsultDeptEmergency")}</option>
                <option>{t("aboutConsultDeptPhysio")}</option>
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
                {t("aboutConsultSearchBtn")}
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
