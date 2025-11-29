import React from 'react';
import { Linkedin, Twitter, Facebook, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-cream pt-24 pb-12 border-t border-white/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B1F29] to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B1F29]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Brand & Social - Col Span 4 */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="font-playfair text-3xl font-bold text-white mb-2">KING & ROWE</h3>
            <p className="font-montserrat text-[#8B1F29] text-xs tracking-[0.3em] uppercase mb-8">Attorneys at Law</p>

            <p className="font-lora text-white/70 leading-relaxed mb-8 max-w-sm">
              Providing unwavering legal support to the businesses and families of North Carolina. Uncompromising excellence in every case.
            </p>

            <div className="flex gap-4 mt-auto">
               <SocialIcon icon={<Linkedin size={18} />} />
               <SocialIcon icon={<Twitter size={18} />} />
               <SocialIcon icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* Locations - Col Span 4 */}
          <div className="lg:col-span-4 flex flex-col">
             <h4 className="font-montserrat text-white font-bold uppercase tracking-widest text-sm mb-8 border-b border-white/20 pb-4 inline-block">Our Offices</h4>

             <div className="space-y-8">
               <div className="group">
                  <h5 className="font-playfair text-xl text-[#8B1F29] mb-2 group-hover:text-white transition-colors">Hickory</h5>
                  <p className="font-lora text-white/70 leading-relaxed">
                    2017 N Center Street<br/>
                    Hickory, NC 28601
                  </p>
               </div>

               <div className="group">
                  <h5 className="font-playfair text-xl text-[#8B1F29] mb-2 group-hover:text-white transition-colors">Newton</h5>
                  <p className="font-lora text-white/70 leading-relaxed">
                    11 East A Street<br/>
                    Newton, NC 28658
                  </p>
               </div>
             </div>

             <div className="mt-8 flex gap-6 text-sm font-montserrat font-medium">
               <a href="tel:8284663858" className="flex items-center gap-2 text-white/80 hover:text-[#8B1F29] transition-colors">
                 <Phone size={16} className="text-[#8B1F29]" /> 828-466-3858
               </a>
               <a href="mailto:contact@kingrowelaw.com" className="flex items-center gap-2 text-white/80 hover:text-[#8B1F29] transition-colors">
                 <Mail size={16} className="text-[#8B1F29]" /> Email Us
               </a>
             </div>
          </div>

          {/* Map - Col Span 4 */}
          <div className="lg:col-span-4 h-full min-h-[250px] relative rounded-xl overflow-hidden border border-white/20 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.022350731804!2d-81.3415!3d35.7595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8851310000000001%3A0x0!2sHickory%2C%20NC!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
              allowFullScreen={true}
              loading="lazy"
              title="King & Rowe Offices Map"
              className="absolute inset-0"
            ></iframe>

            {/* Overlay Gradient for integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20 pointer-events-none"></div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-montserrat font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-[#8B1F29] hover:border-[#8B1F29] hover:text-white transition-all"
            >
              Open Map <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Footer Bottom / Disclaimer */}
        <div className="border-t border-white/20 pt-10 text-center flex flex-col gap-6">
           <div className="text-xs font-montserrat text-white/70 tracking-wide uppercase">
             We serve the following localities: Catawba County, Caldwell County, Burke County
           </div>

           <div className="text-[10px] leading-relaxed text-white/40 font-montserrat max-w-5xl mx-auto space-y-2">
             <p>
               © 2025 King & Rowe, Attorneys At Law. All rights reserved.
             </p>
             <p>
               Please consult an attorney for advice about your individual situation. This site and its information is not legal advice, nor is it intended to be. Feel free to get in touch by electronic mail, letters, or phone calls. Contacting us does not create an attorney-client relationship. Until an attorney-client relationship is established, please withhold from sending any confidential information to us.
             </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#8B1F29] hover:border-[#8B1F29] transition-all duration-300">
    {icon}
  </a>
);