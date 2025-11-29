import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const PRACTICES = [
  {
    title: "Criminal Defense",
    description: "Aggressive defense for your rights and freedom. We handle felonies, misdemeanors, and federal cases with strategic precision.",
    image: "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Family Law",
    description: "Compassionate guidance through domestic matters including divorce, alimony, and adoption proceedings.",
    image: "https://images.unsplash.com/photo-1591522810850-58128c5fb089?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Estate Planning",
    description: "Secure your legacy and your family's future with comprehensive wills, trusts, and power of attorney documents.",
    image: "https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Child Custody",
    description: "Protecting the best interests of your children while advocating for your parental rights in custody disputes.",
    image: "https://images.unsplash.com/photo-1594172104140-c9a59e38ec77?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Divorce",
    description: "Navigating separation with dignity and strength. We protect your assets and future during contested and uncontested divorces.",
    image: "https://images.unsplash.com/photo-1581112105345-a06ad5976509?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Traffic Charges",
    description: "Defense against moving violations, speeding tickets, and citations to protect your license and insurance rates.",
    image: "https://static.wixstatic.com/media/2542b9_6f4e47d3d9904aee9e54e0276c97b17a~mv2.jpg/v1/fill/w_371,h_366,fp_0.50_0.50,q_90,enc_avif,quality_auto/2542b9_6f4e47d3d9904aee9e54e0276c97b17a~mv2.jpg"
  },
  {
    title: "DUI / DWI",
    description: "Strategic defense against impaired driving charges. We challenge evidence and procedure to minimize impact on your life.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
  }
];

export const PracticeAreas: React.FC = () => {
  return (
    <section id="practice" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <SectionHeading 
            title="Hickory Attorney Practice Areas" 
            subtitle="Comprehensive legal solutions tailored to protect what matters most to you. We bring decades of experience to every case."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICES.map((practice, index) => (
            <div 
              key={index}
              className={`group relative h-[420px] rounded-xl overflow-hidden cursor-pointer ${index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={practice.image} 
                  alt={practice.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0507] via-[#1A0507]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-burgundy/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Border Interaction */}
              <div className="absolute inset-4 border border-white/20 rounded-lg z-10 transition-all duration-500 group-hover:border-gold/50 group-hover:inset-3"></div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                
                {/* Header: Number & Icon */}
                <div className="flex justify-between items-start">
                  <span className="font-montserrat text-white/40 font-bold text-sm tracking-widest border-b border-white/20 pb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ArrowUpRight className="text-gold w-5 h-5" />
                  </div>
                </div>

                {/* Footer: Title & Desc */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-3xl text-white font-bold mb-4 group-hover:text-gold transition-colors duration-300">
                    {practice.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                    <p className="font-lora text-white/80 text-base leading-relaxed max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out border-l-2 border-gold pl-4">
                      {practice.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
