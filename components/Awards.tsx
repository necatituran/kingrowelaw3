import React from 'react';
import { AWARDS } from '../constants';

const Awards: React.FC = () => {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">Recognized Excellence</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {AWARDS.map((award, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105">
                <img 
                  src={award.image} 
                  alt={award.title} 
                  className="h-24 md:h-28 w-auto object-contain mb-2" 
                  loading="lazy"
                />
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-2">{award.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;