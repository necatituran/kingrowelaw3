import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Image Collage */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
             {/* Decorative Background */}
             <div className="absolute inset-0 bg-burgundy/5 rounded-3xl transform -rotate-3 scale-105"></div>
             
             {/* Image 1: Main Portrait */}
             <div className="absolute top-0 left-0 w-[60%] h-[60%] z-10 shadow-elevated rounded-lg overflow-hidden border-4 border-white">
               <img 
                 src="https://static.wixstatic.com/media/2542b9_e6ae95592a414e1c95ff62e29e95c184~mv2.jpg/v1/fill/w_322,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1431.jpg" 
                 alt="Attorney Portrait" 
                 className="w-full h-full object-cover"
               />
             </div>

             {/* Image 2: Justice Center (Bottom Right) */}
             <div className="absolute bottom-0 right-0 w-[65%] h-[50%] z-20 shadow-elevated rounded-lg overflow-hidden border-4 border-white transform translate-x-4 translate-y-4">
               <img 
                 src="https://static.wixstatic.com/media/2542b9_0590e761759c44a6aa8295ed0a4cf10f~mv2.jpg/v1/crop/x_100,y_0,w_1720,h_1080/fill/w_344,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Catawba%20County%20Justice%20Center.jpg" 
                 alt="Catawba County Justice Center" 
                 className="w-full h-full object-cover"
               />
             </div>

             {/* Image 3: Detail Shot (Top Right Overlap) */}
             <div className="absolute top-[20%] right-[5%] w-[40%] h-[35%] z-30 shadow-glass rounded-lg overflow-hidden border-4 border-white/80">
                <img 
                  src="https://static.wixstatic.com/media/2542b9_b051f68512ba473789824519a045bb1c~mv2.jpg/v1/crop/x_8,y_0,w_2033,h_1365/fill/w_344,h_231,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC02492.jpg" 
                  alt="Legal Detail" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <span className="font-montserrat text-ncred font-bold tracking-widest text-xs uppercase mb-4 block">
              Our Heritage
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-burgundy font-bold mb-8 leading-tight">
              Why should you choose <br/> King & Rowe Attorneys?
            </h2>
            
            <div className="space-y-6 font-lora text-lg text-charcoal/80 leading-relaxed">
              <p>
                Being born and raised in Hickory NC, we are proud of the heritage and deep-rooted connections we have in the community. However, what matters most to us is serving our clients with excellence and integrity.
              </p>
              <p>
                We have the experience and legal skills needed to handle a wide variety of cases, from all aspects of family law, divorce to criminal defense.
              </p>
              <p className="font-medium text-burgundy">
                At King & Rowe, Attorneys at Law, our focus is on helping our clients reach their desired outcome, no matter what legal challenges they may be facing.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
               {['Local Expertise', 'Proven Results', 'Integrity First', 'Client-Centered'].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-gold w-5 h-5" />
                    <span className="font-montserrat font-semibold text-charcoal text-sm">{item}</span>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};