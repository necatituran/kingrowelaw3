import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    { title: "Local Expertise", desc: "Deep knowledge of local courts and judges." },
    { title: "Proven Results", desc: "A track record of successful verdicts and settlements." },
    { title: "Integrity First", desc: "Honest advice, even when it's hard to hear." },
    { title: "Client-Centered", desc: "Strategies tailored to your unique goals." }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-1/2">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose King & Rowe?</h2>
             <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We combine the resources and experience of a large firm with the agility and
                personal attention of a boutique practice. Our heritage in Catawba County runs deep.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {points.map((point, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="flex items-center mb-2 text-primary">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <h4 className="font-bold text-white">{point.title}</h4>
                        </div>
                        <p className="text-sm text-slate-400 ml-7">{point.desc}</p>
                    </div>
                ))}
             </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px]">
             {/* Collage Layout */}
             <div className="relative w-full h-full">
                {/* Main Portrait - Left Big */}
                <div className="absolute left-0 top-10 w-7/12 h-5/6 z-10 shadow-2xl rounded-sm overflow-hidden border-4 border-slate-800">
                    <img
                        src="https://static.wixstatic.com/media/2542b9_e6ae95592a414e1c95ff62e29e95c184~mv2.jpg/v1/fill/w_322,h_472,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1431.jpg"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        alt="Attorney Portrait"
                        loading="lazy"
                    />
                </div>

                {/* Legal Detail - Top Right */}
                <div className="absolute right-0 top-0 w-6/12 h-2/5 z-0 opacity-80 rounded-sm overflow-hidden">
                    <img
                        src="https://static.wixstatic.com/media/2542b9_b051f68512ba473789824519a045bb1c~mv2.jpg/v1/crop/x_8,y_0,w_2033,h_1365/fill/w_344,h_231,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC02492.jpg"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        alt="Legal Detail"
                        loading="lazy"
                    />
                </div>

                {/* Justice Center - Bottom Right */}
                <div className="absolute right-4 bottom-4 w-6/12 h-2/5 z-20 shadow-xl rounded-sm overflow-hidden border-2 border-white/10">
                    <img
                        src="https://static.wixstatic.com/media/2542b9_0590e761759c44a6aa8295ed0a4cf10f~mv2.jpg/v1/crop/x_100,y_0,w_1720,h_1080/fill/w_344,h_216,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Catawba%20County%20Justice%20Center.jpg"
                        className="w-full h-full object-cover"
                        alt="Catawba County Justice Center"
                        loading="lazy"
                    />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
