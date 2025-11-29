import React from 'react';
import { MessageSquare } from 'lucide-react';

export const StickyChat: React.FC = () => {
  return (
    <a 
      href="#contact"
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center"
      aria-label="Let's Chat"
    >
      <div className="relative">
        {/* Pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-[#8B1F29]/30 animate-ping"></div>

        <div className="relative flex items-center gap-3 bg-[#8B1F29] text-white px-6 py-4 rounded-full shadow-[0_4px_20px_rgba(139,31,41,0.4)] transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(139,31,41,0.6)] hover:bg-[#6B1821] border border-white/20 backdrop-blur-sm">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="font-montserrat font-bold text-sm tracking-wide">Let's Chat</span>
        </div>
      </div>
    </a>
  );
};