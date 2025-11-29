import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {stat.value}
              </div>
              <div className="h-1 w-8 bg-red-400 mx-auto mb-3 opacity-50"></div>
              <div className="text-red-100 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;