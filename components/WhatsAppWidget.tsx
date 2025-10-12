import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/34691900773"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#5f9a26] text-white hover:bg-green-600 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        <span className="text-sm font-medium">Reach us on WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppWidget;