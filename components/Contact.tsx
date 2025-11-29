import React from 'react';
import { Button } from './ui/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-beige/30 -skew-x-12 transform origin-top translate-x-32 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy/5 rounded-full blur-[80px] z-0"></div>

        {/* Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                
                {/* Left: Info & Context */}
                <div className="pt-8">
                   <div className="inline-block mb-6">
                      <span className="font-montserrat text-ncred font-bold tracking-[0.2em] text-xs uppercase border-b-2 border-ncred pb-2">
                        Contact Us
                      </span>
                   </div>
                   
                   <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-burgundy font-bold mb-8 leading-[1.1]">
                      Get in touch to book a legal consultation
                   </h2>
                   
                   <p className="font-lora text-xl text-charcoal/80 mb-12 leading-relaxed">
                      Your future deserves the best defense. Our team is ready to listen to your story with empathy and provide the aggressive representation you deserve.
                   </p>

                   <div className="space-y-10">
                      <div className="flex items-start gap-6 group">
                         <div className="bg-white border border-taupe/30 p-4 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-gold transition-all duration-300">
                            <Phone className="w-6 h-6 text-ncred" />
                         </div>
                         <div>
                            <h4 className="font-playfair text-xl text-charcoal font-bold mb-1">Phone</h4>
                            <p className="font-lora text-warmgray text-sm mb-2">Mon-Fri from 8:30am to 5:00pm.</p>
                            <a href="tel:8284663858" className="font-montserrat font-bold text-lg text-burgundy hover:text-gold transition-colors">828-466-3858</a>
                         </div>
                      </div>
                      
                      <div className="flex items-start gap-6 group">
                         <div className="bg-white border border-taupe/30 p-4 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-gold transition-all duration-300">
                            <Mail className="w-6 h-6 text-ncred" />
                         </div>
                         <div>
                            <h4 className="font-playfair text-xl text-charcoal font-bold mb-1">Email</h4>
                            <p className="font-lora text-warmgray text-sm mb-2">Our friendly team is here to help.</p>
                            <a href="mailto:contact@kingrowelaw.com" className="font-montserrat font-bold text-lg text-burgundy hover:text-gold transition-colors">contact@kingrowelaw.com</a>
                         </div>
                      </div>

                       <div className="flex items-start gap-6 group">
                         <div className="bg-white border border-taupe/30 p-4 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-gold transition-all duration-300">
                            <MapPin className="w-6 h-6 text-ncred" />
                         </div>
                         <div>
                            <h4 className="font-playfair text-xl text-charcoal font-bold mb-1">Visit Our Offices</h4>
                            <p className="font-lora text-charcoal/80">2017 N Center Street, Hickory, NC</p>
                            <p className="font-lora text-charcoal/80">11 East A Street, Newton, NC</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right: Form */}
                <div className="bg-cream p-8 md:p-12 rounded-[2rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative">
                   {/* Form Badge */}
                   <div className="absolute -top-6 right-8 bg-ncred text-white px-6 py-2 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest shadow-lg">
                      Free Consultation
                   </div>

                   <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="font-montserrat text-xs font-bold uppercase text-charcoal/60 tracking-wide ml-1">First Name</label>
                            <input type="text" className="w-full bg-white border-0 ring-1 ring-taupe/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold transition-all font-lora text-charcoal shadow-inner" placeholder="John" />
                         </div>
                         <div className="space-y-2">
                            <label className="font-montserrat text-xs font-bold uppercase text-charcoal/60 tracking-wide ml-1">Last Name</label>
                            <input type="text" className="w-full bg-white border-0 ring-1 ring-taupe/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold transition-all font-lora text-charcoal shadow-inner" placeholder="Doe" />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-charcoal/60 tracking-wide ml-1">Email Address</label>
                         <input type="email" className="w-full bg-white border-0 ring-1 ring-taupe/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold transition-all font-lora text-charcoal shadow-inner" placeholder="john@example.com" />
                      </div>

                       <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-charcoal/60 tracking-wide ml-1">Phone Number</label>
                         <input type="tel" className="w-full bg-white border-0 ring-1 ring-taupe/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold transition-all font-lora text-charcoal shadow-inner" placeholder="(828) 000-0000" />
                      </div>

                      <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-charcoal/60 tracking-wide ml-1">Case Type</label>
                         <div className="relative">
                            <select className="w-full bg-white border-0 ring-1 ring-taupe/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold transition-all font-lora text-charcoal shadow-inner appearance-none cursor-pointer">
                                <option>Criminal Defense</option>
                                <option>Family Law</option>
                                <option>Estate Planning</option>
                                <option>DUI / DWI</option>
                                <option>Traffic Charges</option>
                                <option>Other</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-charcoal/60 tracking-wide ml-1">Brief Details</label>
                         <textarea rows={4} className="w-full bg-white border-0 ring-1 ring-taupe/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold transition-all font-lora text-charcoal shadow-inner resize-none" placeholder="Tell us a little about your situation..."></textarea>
                      </div>

                      <div className="pt-2">
                          <Button variant="primary" fullWidth className="!py-5 !text-lg shadow-xl hover:shadow-2xl">
                             Send Message
                          </Button>
                      </div>
                      
                      <p className="text-[10px] text-warmgray text-center mt-4 leading-normal">
                         By submitting this form, you acknowledge that no attorney-client relationship is formed until a formal agreement is signed. All information is kept strictly confidential.
                      </p>
                   </form>
                </div>
            </div>
        </div>
    </section>
  );
};