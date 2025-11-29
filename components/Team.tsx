import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Mail, Phone } from 'lucide-react';
import { Button } from './ui/Button';

const TEAM = [
  {
    name: "Evan R. Rowe",
    email: "evan@kingrowelaw.com",
    role: "Managing Partner",
    phone: "828-466-3858",
    image: "https://static.wixstatic.com/media/2542b9_a858d1b838694ef4b5d1ee7092a3d21e~mv2.jpeg/v1/fill/w_392,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2542b9_a858d1b838694ef4b5d1ee7092a3d21e~mv2.jpeg",
    bio: "A pillar of the Hickory legal community, Evan Rowe brings decades of specialized experience in complex family law and high-stakes litigation.",
    specialties: ["Family Law", "Divorce", "Child Custody"]
  },
  {
    name: "Alexander J. King",
    email: "alex@kingrowelaw.com",
    role: "Senior Partner",
    phone: "828-466-3858",
    image: "https://static.wixstatic.com/media/2542b9_95abdcca67504e778e5510afe9ef3255~mv2.jpg/v1/fill/w_400,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copy%20of%20DSC02482_edited.jpg",
    bio: "Renowned for his aggressive defense strategies and meticulous estate planning, Alexander King protects the futures of families and individuals alike.",
    specialties: ["Criminal Defense", "Estate Planning", "DUI/DWI"]
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="font-montserrat text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold mb-6 leading-[1.1]">
            Meet The Partners
          </h2>
          <p className="font-lora text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Distinguished legal minds dedicated to your success and security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {TEAM.map((member, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="relative h-[800px] w-full overflow-hidden shadow-2xl transition-all duration-700">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0507] via-[#1A0507]/40 to-transparent opacity-90"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 text-white">
                  
                  {/* Decorative Line */}
                  <div className="w-16 h-1 bg-gold mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                  
                  <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-2">{member.name}</h3>
                  <p className="font-montserrat text-gold text-sm uppercase tracking-[0.2em] font-bold mb-6">{member.role}</p>
                  
                  <p className="font-lora text-lg text-white/80 leading-relaxed mb-8 border-l border-white/20 pl-4">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.specialties.map((spec, i) => (
                      <span key={i} className="px-3 py-1 border border-white/20 rounded-full text-xs font-montserrat uppercase tracking-wider text-white/70">
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  {/* Contact Info */}
                  <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 hover:text-gold transition-colors font-lora italic text-lg">
                      <Mail size={18} className="text-ncred" /> {member.email}
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-3 hover:text-gold transition-colors font-playfair text-xl">
                      <Phone size={18} className="text-ncred" /> {member.phone}
                    </a>
                  </div>

                  {/* CTA Button Overlay */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button variant="primary" className="!px-8 !py-3 !text-sm shadow-xl">
                      Meet Attorney
                    </Button>
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