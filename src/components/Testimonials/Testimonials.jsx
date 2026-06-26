import { useState, useEffect } from "react";

const reviews = [
  { stars: 5, quote: "Appreciated. The services, staff, and treatment are all excellent. Thank you for taking such wonderful care — I felt completely safe throughout my recovery journey.", patient: "Gandhi Lal Idandas", tag: "Knee replacement" },
  { stars: 5, quote: "Excellent services and all the staff are very good. It was a wonderful experience. Dr. Gawade explained everything clearly and the surgery went very smoothly.", patient: "Chaturvedi Sheela", tag: "Orthopedic surgery" },
  { stars: 5, quote: "Very pleasant and clean, friendly atmosphere. Everybody was so caring — all the sisters were very efficient. Special thanks to the entire team for their dedication.", patient: "Raj Ghatak", tag: "Trauma care" },
  { stars: 4, quote: "Everything was nice and excellent. Staff members were very polite during my stay. The ICU facility gave our family real confidence. Highly recommended.", patient: "Vaidhya Mohan Damodar", tag: "Critical care" },
  { stars: 5, quote: "After my accident I was in serious condition. The emergency team responded instantly. Spine surgery was successful and today I walk without any pain.", patient: "Prakash Shinde", tag: "Spine surgery" },
  { stars: 5, quote: "My mother had a hip replacement here. Doctors are highly skilled and the physiotherapy team is excellent. We are very satisfied with the complete outcome.", patient: "Sneha Kulkarni", tag: "Hip replacement" },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill={i < count ? "#8b1e72" : "#e2c6ef"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth < 640) {
        setPerPage(1);
      } else if (window.innerWidth < 1024) {
        setPerPage(2);
      } else {
        setPerPage(3);
      }
    };
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Reset cur when perPage changes to avoid out-of-bounds
  const total = Math.ceil(reviews.length / perPage);
  useEffect(() => {
    setCur((c) => Math.min(c, total - 1));
  }, [perPage, total]);

  const visibleReviews = reviews.slice(
  cur * perPage,
  cur * perPage + perPage
);

  const GAP = 16; // px gap between cards
  // Each card takes exactly (containerWidth - gaps) / perPage
  // We shift by cur * perPage cards each time
  const translateX = cur * perPage * (100 / perPage);

  return (
    <section className="bg-[#f8f4fa] py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Label row */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-0.5 bg-[#8b1e72]" />
          <span className="text-[#8b1e72] text-[11px] font-semibold tracking-widest uppercase">
            Patient Stories
          </span>
        </div>

        {/* Heading + More button — stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <h2 className="text-[#8b1e72] text-2xl sm:text-4xl lg:text-4xl font-bold leading-tight">
              Stories of recovery and trust
            </h2>
            <p className="text-[#7c5a88] text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
              Real experiences from patients and families who chose Gawade Hospital for their care.
            </p>
          </div>

          
        </div>

        {/* Nav arrows + dots */}
        <div className="flex items-center gap-2 mb-5">
          <button
            onClick={() => setCur((c) => Math.max(0, c - 1))}
            disabled={cur === 0}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-[#d8b4e8] bg-white text-[#8b1e72] text-xl flex items-center justify-center hover:border-[#8b1e72] hover:bg-[#fdf4fb] disabled:opacity-30 transition-all active:scale-95"
          >‹</button>

          <button
            onClick={() => setCur((c) => Math.min(total - 1, c + 1))}
            disabled={cur >= total - 1}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-[#d8b4e8] bg-white text-[#8b1e72] text-xl flex items-center justify-center hover:border-[#8b1e72] hover:bg-[#fdf4fb] disabled:opacity-30 transition-all active:scale-95"
          >›</button>

          <div className="flex gap-1.5 items-center">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${
                  i === cur
                    ? "w-3 h-3 bg-[#8b1e72]"
                    : "w-2 h-2 bg-[#d8b4e8] hover:bg-[#8b1e72]/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slider track */}
       {/* Slider */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {visibleReviews.map((r, i) => (
    <div
      key={i}
      className="bg-white border border-[#e2c6ef] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Stars count={r.stars} />

      <p className="text-[#4a2060] text-sm sm:text-base leading-7 mt-4 min-h-[120px]">
        {r.quote}
      </p>

      <div className="border-t border-[#f0e0f8] pt-3 mt-4">
        <p className="text-[#8b1e72] font-semibold text-base sm:text-lg">
          {r.patient}
        </p>

        <span className="inline-flex items-center gap-1 mt-2 px-3 py-1 rounded-full bg-[#fdf4fb] border border-[#e2c6ef] text-[#8b1e72] text-xs sm:text-sm font-medium">
          ✓ {r.tag}
        </span>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}