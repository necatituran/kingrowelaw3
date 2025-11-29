import React from 'react';
import { Button } from './ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        {/* Simple decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                {/* Left: Info & Context */}
                <div className="pt-8">
                   <div className="inline-block mb-6">
                      <span className="font-montserrat text-primary font-bold tracking-[0.2em] text-xs uppercase border-b-2 border-primary pb-2">
                        Contact Us
                      </span>
                   </div>

                   <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold mb-8 leading-[1.1]">
                      Get in touch to book a legal consultation
                   </h2>

                   <p className="font-lora text-xl text-slate-600 mb-12 leading-relaxed">
                      Your future deserves the best defense. Our team is ready to listen to your story with empathy and provide the aggressive representation you deserve.
                   </p>

                   <div className="space-y-8">
                      <div className="flex items-start gap-5 group">
                         <div className="bg-white border-2 border-slate-200 p-4 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
                            <Phone className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <h4 className="font-playfair text-xl text-slate-900 font-bold mb-1">Phone</h4>
                            <p className="font-lora text-slate-500 text-sm mb-2">Mon-Fri from 8:30am to 5:00pm.</p>
                            <a href="tel:8284663858" className="font-montserrat font-bold text-lg text-primary hover:text-slate-900 transition-colors">828-466-3858</a>
                         </div>
                      </div>

                      <div className="flex items-start gap-5 group">
                         <div className="bg-white border-2 border-slate-200 p-4 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
                            <Mail className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <h4 className="font-playfair text-xl text-slate-900 font-bold mb-1">Email</h4>
                            <p className="font-lora text-slate-500 text-sm mb-2">Our friendly team is here to help.</p>
                            <a href="mailto:contact@kingrowelaw.com" className="font-montserrat font-bold text-lg text-primary hover:text-slate-900 transition-colors">contact@kingrowelaw.com</a>
                         </div>
                      </div>

                       <div className="flex items-start gap-5 group">
                         <div className="bg-white border-2 border-slate-200 p-4 rounded-xl shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
                            <MapPin className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                            <h4 className="font-playfair text-xl text-slate-900 font-bold mb-1">Visit Our Offices</h4>
                            <p className="font-lora text-slate-600">2017 N Center Street, Hickory, NC</p>
                            <p className="font-lora text-slate-600">11 East A Street, Newton, NC</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right: Form */}
                <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-slate-200 shadow-xl relative">
                   {/* Form Badge */}
                   <div className="absolute -top-6 right-8 bg-primary text-white px-6 py-2 rounded-full font-montserrat font-bold text-xs uppercase tracking-widest shadow-lg">
                      Free Consultation
                   </div>

                   <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="font-montserrat text-xs font-bold uppercase text-slate-600 tracking-wide ml-1">First Name</label>
                            <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-white transition-all font-lora text-slate-900" placeholder="John" />
                         </div>
                         <div className="space-y-2">
                            <label className="font-montserrat text-xs font-bold uppercase text-slate-600 tracking-wide ml-1">Last Name</label>
                            <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-white transition-all font-lora text-slate-900" placeholder="Doe" />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-slate-600 tracking-wide ml-1">Email Address</label>
                         <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-white transition-all font-lora text-slate-900" placeholder="john@example.com" />
                      </div>

                       <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-slate-600 tracking-wide ml-1">Phone Number</label>
                         <input type="tel" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-white transition-all font-lora text-slate-900" placeholder="(828) 000-0000" />
                      </div>

                      <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-slate-600 tracking-wide ml-1">Case Type</label>
                         <div className="relative">
                            <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-white transition-all font-lora text-slate-900 appearance-none cursor-pointer">
                                <option>Divorce & Family Law</option>
                                <option>DUI & Criminal Defense</option>
                                <option>Estate Planning</option>
                                <option>Other</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="font-montserrat text-xs font-bold uppercase text-slate-600 tracking-wide ml-1">Brief Details</label>
                         <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:bg-white transition-all font-lora text-slate-900 resize-none" placeholder="Tell us a little about your situation..."></textarea>
                      </div>

                      <div className="pt-2">
                          <Button variant="primary" fullWidth className="!py-5 !text-lg shadow-xl hover:shadow-2xl">
                             Send Message
                          </Button>
                      </div>

                      <p className="text-[10px] text-slate-500 text-center mt-4 leading-normal">
                         By submitting this form, you acknowledge that no attorney-client relationship is formed until a formal agreement is signed. All information is kept strictly confidential.
                      </p>
                   </form>
                </div>
            </div>
        </div>
    </section>
  );
};
