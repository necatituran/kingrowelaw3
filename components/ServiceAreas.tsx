import React from 'react';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const ServiceAreas: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Map */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
            alt="North Carolina Map Background"
            className="w-full h-full object-cover grayscale blur-[2px]"
          />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Where We Work</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-slate-900">Serving Western North Carolina</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_AREAS.map((area, index) => (
            <div key={index} className="bg-slate-50/90 backdrop-blur-sm p-8 rounded-lg text-center border border-slate-100 group hover:border-primary/30 transition-colors shadow-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{area.county}</h3>
              <p className="text-primary font-medium text-sm mb-4">{area.cities}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
