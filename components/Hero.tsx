import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.wixstatic.com/media/2542b9_1c1652e5425d4f72b60c3816e3837fed~mv2.jpg/v1/fill/w_980,h_1087,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2542b9_1c1652e5425d4f72b60c3816e3837fed~mv2.jpg"
          alt="King & Rowe Law Firm"
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 px-6 py-2 border border-white/20 bg-black/30 backdrop-blur-md rounded-full shadow-2xl">
            <MapPin size={14} className="text-red-400" />
            <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">Hickory & Newton, NC</span>
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
            <span className="text-white/70 text-xs font-light tracking-wide">Est. 2014</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-none drop-shadow-2xl">
          Excellence in <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Legal Counsel</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#8B1F29] to-transparent"></span>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed tracking-wide">
          Trusted advisors for North Carolina's most ambitious businesses and families. 
          Prompt, personal service rooted in Catawba County.
        </p>

        <p className="text-2xl font-serif italic text-white/90 mb-12">"Another Problem Solved."</p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-[#8B1F29] hover:bg-[#6B1821] text-white rounded-sm font-medium text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3 tracking-wide"
          >
            Consultation
            <ArrowRight size={18} />
          </a>
          <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white rounded-sm font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3 tracking-wide backdrop-blur-sm"
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;