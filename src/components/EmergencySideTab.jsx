import {
  Phone,
  Ambulance,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EmergencySideTab() {
  return (
    <>
      {/* Desktop / Tablet */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 group items-center">
        {/* Red Tab */}
        <div className="bg-red-600 text-white w-10 h-32 rounded-r-lg shadow-lg flex items-center justify-center cursor-pointer">
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            EMERGENCY
          </span>
        </div>

        {/* Hover Panel */}
        <div className="ml-2 w-72 opacity-0 invisible -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0">
          <div className="bg-white border border-[#8b1e72]/20 rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-[#8b1e72] text-white px-4 py-3 font-semibold">
              Emergency Contact
            </div>

            <div className="p-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg transition"
              >
                <Ambulance size={18} className="text-[#8b1e72]" />
                <span>Emergency +91 98765 43210</span>
              </a>

              <a
                href="tel:+91 7420932217"
                className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg transition"
              >
                <Phone size={18} className="text-[#8b1e72]" />
                <span>Call +91 7420932217</span>
              </a>

              <a
                href="https://wa.me/9860017620"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg transition"
              >
                <MessageCircle size={18} className="text-[#8b1e72]" />
                <span>WhatsApp</span>
              </a>

             <Link
  to="/appointment"
  className="flex items-center gap-3 p-3 hover:bg-[#8b1e72]/10 rounded-lg transition"
>
  <Calendar size={18} className="text-[#8b1e72]" />
  <span>Book Appointment</span>
</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Button */}
      <a
        href="tel:+919876543210"
        className="md:hidden fixed left-4 bottom-5 z-50 bg-red-600 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center animate-pulse"
        aria-label="Emergency Call"
      >
        <Ambulance size={20} />
      </a>
    </>
  );
}