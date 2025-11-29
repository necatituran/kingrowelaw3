import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const AREAS = [
  {
    county: "Catawba County",
    city: "Hickory & Surrounding",
    description: "As a leading law firm in Catawba County, our mission is to provide high-quality legal services. From criminal cases to family law, we support all cities within Catawba."
  },
  {
    county: "Burke County",
    city: "Morganton & Surrounding",
    description: "Our firm specializes in providing legal services for clients in Burke county. Our team has a deep understanding of local laws and regulations."
  },
  {
    county: "Caldwell County",
    city: "Lenoir & Surrounding",
    description: "We serve all cities in Caldwell County with passion and integrity. We believe in building strong relationships and providing support when you need it most."
  }
];

export const ServiceAreas: React.FC = () => {
  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      {/* Background Map Texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Catawba_County_North_Carolina_Incorporated_and_Unincorporated_areas_Hickory_Highlighted.svg/1200px-Catawba_County_North_Carolina_Incorporated_and_Unincorporated_areas_Hickory_Highlighted.svg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(150%)'
        }}
      ></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Service Areas" 
          subtitle="Proudly serving the communities of Western North Carolina."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AREAS.map((area, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-md p-8 border-t-4 border-burgundy shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-burgundy/10 p-3 rounded-full group-hover:bg-burgundy group-hover:text-white transition-colors duration-300">
                   <MapPin className="w-6 h-6 text-burgundy group-hover:text-white" />
                </div>
                <Navigation className="w-5 h-5 text-gold opacity-50" />
              </div>
              
              <h3 className="font-playfair text-2xl text-charcoal font-bold mb-2">{area.county}</h3>
              <p className="font-montserrat text-xs font-bold text-ncred uppercase tracking-widest mb-4">
                {area.city}
              </p>
              
              <div className="w-12 h-[1px] bg-taupe mb-6"></div>
              
              <p className="font-lora text-charcoal/80 leading-relaxed text-base">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};