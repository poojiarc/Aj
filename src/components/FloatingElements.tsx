import { MessageCircle, CalendarCheck } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

const FloatingElements = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/917989259900"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-background" fill="currentColor" />
      </a>

      {/* Book Free Consultation */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-primary-foreground font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_hsl(38_55%_65%/0.4)] shimmer"
      >
        <CalendarCheck className="w-4 h-4" />
        <span className="hidden sm:inline">Book Free Consultation</span>
        <span className="sm:hidden">Book Now</span>
      </button>

      <ConsultationModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default FloatingElements;
