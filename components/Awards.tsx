import React from 'react';

const Awards: React.FC = () => {
  // Placeholder brand/sponsor items - will be replaced with actual images later
  const placeholderItems = [
    "NC BAR ASSOCIATION",
    "HICKORY CHAMBER",
    "CATAWBA COUNTY",
    "COMMUNITY PARTNER",
    "LOCAL SPONSOR",
    "AVVO RATED",
    "SUPER LAWYERS",
    "BEST ATTORNEYS",
    "NC BAR ASSOCIATION",
    "HICKORY CHAMBER",
    "CATAWBA COUNTY",
    "COMMUNITY PARTNER"
  ];

  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest">
          Recognized Excellence & Local Sponsorships
        </p>
      </div>

      {/* Infinite Scrolling Gallery */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of items */}
          <div className="flex shrink-0 gap-12 px-6">
            {placeholderItems.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center px-8 py-6 bg-slate-50 rounded-lg border border-slate-200 grayscale hover:grayscale-0 transition-all duration-500 min-w-[200px]"
              >
                <span className="text-slate-400 font-bold text-sm tracking-wider whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 gap-12 px-6">
            {placeholderItems.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center px-8 py-6 bg-slate-50 rounded-lg border border-slate-200 grayscale hover:grayscale-0 transition-all duration-500 min-w-[200px]"
              >
                <span className="text-slate-400 font-bold text-sm tracking-wider whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Awards;
