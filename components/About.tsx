import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Text Column */}
          <div className="lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Rooted in Catawba</h2>
            
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                King & Rowe Law was founded on a simple principle: people facing difficult legal challenges deserve 
                local advocates who understand the community, the courts, and the people of Catawba County.
              </p>
              <p className="mb-6">
                Founding attorneys <strong className="text-slate-900">Alexander J. King</strong> and <strong className="text-slate-900">Evan R. Rowe</strong> 
                have dedicated their careers to providing aggressive legal representation while maintaining the personal 
                touch of a small-town firm. We believe in being accessible to our clients when they need us most.
              </p>
            </div>

            <div className="bg-white p-6 border-l-4 border-primary shadow-sm mt-8">
              <p className="text-lg font-serif italic text-slate-800 mb-2">
                "Prompt, personal service and skilled, aggressive legal representation is not just our motto—it's our promise to every client who walks through our doors."
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-primary z-0 hidden md:block"></div>
              <img 
                src="https://static.wixstatic.com/media/2542b9_0590e761759c44a6aa8295ed0a4cf10f~mv2.jpg/v1/fill/w_980,h_377,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2542b9_0590e761759c44a6aa8295ed0a4cf10f~mv2.jpg" 
                alt="Catawba County Justice Center" 
                className="relative z-10 w-full h-auto rounded-sm shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg z-20 hidden md:block">
                 <p className="text-4xl font-serif font-bold text-primary">10+</p>
                 <p className="text-sm text-slate-500 uppercase tracking-wide">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;