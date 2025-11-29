import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="bg-[#1f2228] text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column - Intro */}
          <div className="lg:w-1/3 flex flex-col justify-center border-r-0 lg:border-r border-white/10 lg:pr-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              SEE OUR <br/>
              SUCCESS STORIES
            </h2>
            <div className="w-16 h-2 bg-primary mb-8"></div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Hear how we provide value and peace of mind to our clients during their most challenging legal battles.
            </p>

            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#8B1F29] hover:bg-[#6B1821] text-white font-bold py-4 px-8 rounded-sm text-center transition-colors uppercase tracking-wider text-sm w-fit">
              View Our Reviews
            </a>
          </div>

          {/* Right Column - Testimonial Slider */}
          <div className="lg:w-2/3 relative flex flex-col justify-center">

             <div className="mb-8">
                <Quote className="text-[#8B1F29] w-12 h-12 mb-6" fill="currentColor" />
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 italic mb-8 min-h-[160px]">
                  "{currentTestimonial.text}"
                </p>

                <div>
                   <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                     — {currentTestimonial.name}
                   </p>
                   <p className="text-[#8B1F29] text-xs font-semibold uppercase tracking-wider">
                     Client Rating: {currentTestimonial.rating}.0/5.0
                   </p>
                </div>
             </div>

             <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white text-[#1f2228] hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
