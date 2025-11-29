import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Legal Insights</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-slate-900">Latest News & Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100">
              <div className="relative overflow-hidden h-48">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs text-slate-400 mb-3 font-medium">{post.date}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 font-serif leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                </h3>
                <div className="mt-auto">
                    <a href="#" className="text-sm font-semibold text-slate-700 flex items-center group-hover:translate-x-1 transition-transform">
                        Read More <ArrowRight size={14} className="ml-1 text-primary" />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;