import {
  FaBone,
  FaWalking,
  FaAmbulance,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiKneeCap, GiBrain } from "react-icons/gi";
import { useTranslation } from "react-i18next";

// Icons stay hardcoded (not translatable); only the text is looked up
// via translation keys, unique to this component ("spec" prefix) so
// they never collide with the mega-menu keys in Navbar ("navbarSpec...").
const specialities = [
  { icon: <FaBone />, titleKey: "specCard1Title", descKey: "specCard1Desc" },
  { icon: <GiKneeCap />, titleKey: "specCard2Title", descKey: "specCard2Desc" },
  { icon: <FaWalking />, titleKey: "specCard3Title", descKey: "specCard3Desc" },
  { icon: <GiBrain />, titleKey: "specCard4Title", descKey: "specCard4Desc" },
  { icon: <FaBone />, titleKey: "specCard5Title", descKey: "specCard5Desc" },
  { icon: <FaAmbulance />, titleKey: "specCard6Title", descKey: "specCard6Desc" },
];

export default function Specialities() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-15 bg-[#faf7fb]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 md:w-12 h-[2px] bg-[#c9a227]" />

            <span className="text-[#8b1e72] text-[13px] sm:text-[17px] font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
              {t("specSectionLabel")}
            </span>
          </div>

          <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-[#8b1e72]">
            {t("specSectionHeading")}
          </h2>

<p className="mt-4 text-gray-600 text-[17px] sm:text-[17px] lg:text-[18px] leading-8">
              {t("specSectionParagraph")}
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
                {t(item.titleKey)}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-[16px] sm:text-[17px] lg:text-[18px] leading-8">
                {t(item.descKey)}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <Link
                  to="/specialities"
                  className="
                    flex-1
  border-2 border-[#8b1e72]
  text-[#8b1e72]
  px-5 py-3
  rounded-xl
  text-[16px] sm:text-[17px]
  font-semibold
  hover:bg-[#8b1e72]
  hover:text-white
  hover:shadow-lg
  hover:-translate-y-0.5
  transition-all
  duration-300
                  "
                >
                  {t("specKnowMore")}
                </Link>

                <Link
                  to="/appointment"
                  className="
                    flex-1
  bg-[#8b1e72]
  text-white
  px-5 py-3
  rounded-xl
  text-[16px] sm:text-[17px]
  font-semibold
  shadow-md
  hover:bg-[#74185f]
  hover:shadow-lg
  hover:-translate-y-0.5
  transition-all
  duration-300
                    duration-300
                  "
                >
                  {t("specBookNow")}
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
