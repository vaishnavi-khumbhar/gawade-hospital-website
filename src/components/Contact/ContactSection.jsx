import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FAQimg from "../../assets/FAQ.png";

const faqKeys = [
  { qKey: "faqQ1", aKey: "faqA1" },
  { qKey: "faqQ2", aKey: "faqA2" },
  { qKey: "faqQ3", aKey: "faqA3" },
  { qKey: "faqQ4", aKey: "faqA4" },
  { qKey: "faqQ5", aKey: "faqA5" },
  { qKey: "faqQ6", aKey: "faqA6" },
];

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className={`border-[1.5px] rounded-xl overflow-hidden bg-white transition-colors duration-200 ${
        isOpen ? "border-[#8b1e72]" : "border-[#c8e6f5]"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 text-left"
      >
        <span
          className={`text-[#8b1e72] text-xs flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          &#9658;
        </span>

        <span className="text-[#8b1e72] text-[13px] sm:text-[15px] font-medium flex-1 leading-snug">
          {q}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 sm:max-h-48" : "max-h-0"
        }`}
      >
        <p className="px-3 sm:px-5 pb-4 pl-8 sm:pl-10 text-gray-600 text-[13px] sm:text-sm leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div className="bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">

        {/* 🔥 FIX: ORDER CONTROL FOR MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">

          {/* RIGHT CONTENT FIRST ON MOBILE */}
          <div className="w-full order-1 lg:order-2">

            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-0.5 bg-[#8b1e72]" />
              <span className="text-[#8b1e72] text-[13px] sm:text-[17px] font-semibold tracking-[.13em] uppercase">
                {t("faqLabel")}
              </span>
            </div>

           <h2 className="text-[#8b1e72] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
  {t("faqHeading")}
</h2>
           <p className="text-gray-500 text-[16px] sm:text-[17px] lg:text-[18px] leading-8 mb-7 sm:mb-9 max-w-3xl">
  {t("faqParagraph")}
</p>

            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
  {faqKeys.map((item, i) => (
    <FaqItem
      key={i}
      q={t(item.qKey)}
      a={t(item.aKey)}
      isOpen={openIdx === i}
      onClick={() => toggle(i)}
    />
  ))}
</div>
          </div>

          {/* IMAGE BELOW ON MOBILE */}
       <div className="flex flex-col items-center justify-center order-2 lg:order-1 w-full px-4">

  {/* FAQ Image */}
  <img
    src={FAQimg}
    alt="FAQ"
    className="
      w-[180px]
      sm:w-[240px]
      md:w-[300px]
      lg:w-[390px]
      h-auto
      object-contain
      mx-auto
    "
  />

  {/* FAQ Card */}
  <div
    className="
      mt-4
      w-full
       max-w-[270px]
    sm:max-w-[300px]
    md:max-w-[340px]
      bg-white
      border
      border-[#e7d0df]
      rounded-2xl
      px-4
      sm:px-5
      py-3
      shadow-lg
      flex
      items-center
      gap-3
    "
  >
    {/* Icon */}
    <div
      className="
        w-10
        h-10
        sm:w-12
        sm:h-12
        rounded-full
        bg-[#8b1e72]/10
        flex
        items-center
        justify-center
        shrink-0
      "
    >
      <span className="text-[#8b1e72] text-lg sm:text-xl">❓</span>
    </div>

    {/* Text */}
    <div className="flex-1">
     <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-[#8b1e72] tracking-tight">
  {t("faqCardTitle")}
</h4>

     <p className="text-[15px] sm:text-[16px] lg:text-[16px] text-gray-600 leading-7">
  {t("faqCardSubtitle")}
</p>
    </div>
  </div>

</div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#8b1e72] px-5 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
        <h3 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight tracking-tight mb-2">
  {t("faqCtaHeading")}
</h3>
       <p className="text-white/80 text-[16px] sm:text-[17px] lg:text-[18px] leading-8 max-w-2xl">
  {t("faqCtaParagraph")}
</p>
        </div>

      <Link
  to="/contact"
  className="
    inline-flex
    items-center
    gap-3
    px-7
    py-4
    rounded-xl
    border
    border-white/60
    text-white
    text-base
    font-semibold
    hover:bg-white/10
    transition-all
    duration-300
    hover:scale-105
  "
>
  ☎ {t("faqCtaButton")}
</Link>
      </div>
    </div>
  );
}
