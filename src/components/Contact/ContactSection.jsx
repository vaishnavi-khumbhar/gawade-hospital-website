import { useState } from "react";
import { Link } from "react-router-dom";
import FAQimg from "../../assets/FAQ.png";

const faqs = [
  {
    q: "What is Gawade Hospital known for?",
    a: "Gawade Hospital is known as Baramati's most trusted healthcare destination, specializing in Orthopedic Care, Joint Replacement Surgery, Trauma and Accident Care, Brain and Spine Surgery, Plastic Surgery, Physiotherapy, and Critical Care Services.",
  },
  {
    q: "Where is Gawade Hospital located?",
    a: "Gawade Hospital is located in Baramati, Maharashtra. We serve patients from Baramati and surrounding regions with advanced medical facilities and experienced specialist doctors.",
  },
  {
    q: "How can I contact Gawade Hospital in an emergency?",
    a: "Gawade Hospital provides 24×7 emergency and trauma care services. You can reach our emergency helpline any time of the day or night for immediate accident care, trauma surgery, and critical care support.",
  },
  {
    q: "Does Gawade Hospital support cashless insurance?",
    a: "Yes. Gawade Hospital offers a cashless insurance facility. We accept major insurance providers and TPA services to ensure a hassle-free treatment and claim process for all patients.",
  },
  {
    q: "How can I book an appointment with a specialist?",
    a: "You can book a consultation with our orthopedic, neurosurgery, spine, plastic surgery, or critical care specialists directly through our website's appointment page or by calling our hospital helpline.",
  },
  {
    q: "What surgical facilities are available at Gawade Hospital?",
    a: "Gawade Hospital is equipped with advanced operation theatres, ICU and critical care units, CT scan and diagnostic services, physiotherapy and rehabilitation units, and comfortable patient rooms for complete in-patient care.",
  },
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
              <span className="text-[#8b1e72] text-[11px] font-semibold tracking-[.13em] uppercase">
                FAQs
              </span>
            </div>

            <h2 className="text-[#8b1e72] text-xl sm:text-3xl md:text-4xl font-bold mb-3">
              Quick answers for patients and families
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8">
              Everything you need to know about Gawade Hospital — structured for fast answers.
            </p>

            <div className="flex flex-col gap-3">
              {faqs.map((item, i) => (
                <FaqItem
                  key={i}
                  q={item.q}
                  a={item.a}
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
      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-[#8b1e72]">
        Check FAQs
      </h4>

      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
        Find quick answers here...
      </p>
    </div>
  </div>

</div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#8b1e72] px-5 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-1">
            Care that stays connected to you
          </h3>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg">
            From emergency support to speciality care and hospital assistance,
            Gawade Hospital is here to help you choose the right next step.
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
  ☎ Emergency Call
</Link>
      </div>
    </div>
  );
}