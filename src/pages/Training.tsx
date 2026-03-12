import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Calendar, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Training = () => {
  return (
    <div className="pt-24 pb-24 bg-[#E4E3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">Contact & Training</span>
          <h1 className="text-6xl font-bold tracking-tighter text-[#141414] mb-6">Let’s Build.</h1>
          <p className="text-xl text-[#141414]/70 font-serif italic">
            Whether you need a team workshop, a custom AI audit, or full implementation, we’re here to help you cut through the noise.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-[#141414]/5">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F27D26]/10 p-2 rounded-lg text-[#F27D26]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-[#141414]/40 mb-1">Email</p>
                    <a href="mailto:hello@abcai.co.za" className="text-[#141414] font-medium hover:text-[#F27D26]">hello@abcai.co.za</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F27D26]/10 p-2 rounded-lg text-[#F27D26]">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-[#141414]/40 mb-1">WhatsApp</p>
                    <p className="text-[#141414] font-medium">+27 (0) 12 345 6789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F27D26]/10 p-2 rounded-lg text-[#F27D26]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-[#141414]/40 mb-1">Location</p>
                    <p className="text-[#141414] font-medium">Cape Town / Remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] p-8 rounded-3xl text-[#E4E3E0]">
              <h3 className="text-xl font-bold mb-4">Loop69 Integration</h3>
              <p className="text-[#E4E3E0]/60 text-sm mb-6">
                ABCAI teaches you the basics. Loop69 builds the deep technical solutions. We work together to provide end-to-end AI implementation.
              </p>
              <button className="text-[#F27D26] font-bold text-sm flex items-center group">
                Learn about Loop69
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Contact Form / Services */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-[#141414]/5">
              <h2 className="text-3xl font-bold mb-8">How can we help?</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-[#141414]/40">Name</label>
                    <input type="text" className="w-full p-4 bg-[#E4E3E0]/30 rounded-xl border-none focus:ring-2 focus:ring-[#F27D26]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-[#141414]/40">Email</label>
                    <input type="email" className="w-full p-4 bg-[#E4E3E0]/30 rounded-xl border-none focus:ring-2 focus:ring-[#F27D26]/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-[#141414]/40">Service Interested In</label>
                  <select className="w-full p-4 bg-[#E4E3E0]/30 rounded-xl border-none focus:ring-2 focus:ring-[#F27D26]/20 appearance-none">
                    <option>Team Training / Workshop</option>
                    <option>AI Business Audit</option>
                    <option>Implementation Package</option>
                    <option>Consulting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-[#141414]/40">Message</label>
                  <textarea rows={4} className="w-full p-4 bg-[#E4E3E0]/30 rounded-xl border-none focus:ring-2 focus:ring-[#F27D26]/20"></textarea>
                </div>
                <button className="w-full bg-[#141414] text-[#E4E3E0] py-5 rounded-xl font-bold hover:bg-[#F27D26] transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { title: 'AI Audits', desc: 'A deep dive into your current workflows to identify AI opportunities.' },
                 { title: 'Team Training', desc: 'Hands-on workshops to get your staff comfortable and productive with AI.' },
                 { title: 'Implementation', desc: 'We don’t just advise; we build the automations and tools you need.' },
                 { title: 'Prompt Strategy', desc: 'Custom prompt libraries built specifically for your business data.' },
               ].map((service) => (
                 <div key={service.title} className="flex items-start space-x-4">
                    <CheckCircle2 size={20} className="text-[#F27D26] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#141414]">{service.title}</h4>
                      <p className="text-sm text-[#141414]/60">{service.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
