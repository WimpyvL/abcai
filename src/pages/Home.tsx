import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Zap, Briefcase, Users, Code, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { HeroScene } from '../components/HeroScene';
import { ZAScene } from '../components/ZAScene';

export const Home = () => {
  return (
    <div className="pt-16 relative">
      <Helmet>
        <title>ABCAI | Practical AI Education for South Africa</title>
        <meta name="description" content="Master AI in the South African context. Practical AI training for business owners, creators, developers, and students. No nonsense, just growth." />
        <meta name="keywords" content="AI education South Africa, AI for business ZA, practical AI training, learn AI South Africa, AI tools for small business SA, artificial intelligence training South Africa" />
        <meta property="og:title" content="ABCAI | Practical AI Education for South Africa" />
        <meta property="og:description" content="The place people go when they want to actually understand AI and use it in the real world. No nonsense, just practical growth." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ABCAI | Practical AI Education for South Africa" />
        <meta name="twitter:description" content="Practical AI training for the South African reality." />
      </Helmet>

      {/* Global Background Animation */}
      <HeroScene />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">Practical AI Education</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[#141414] mb-8">
              LEARN AI. <br />
              USE AI. <br />
              <span className="text-[#F27D26]">BUILD BETTER.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#141414]/70 max-w-2xl mb-10 font-serif italic">
              The place people go when they want to actually understand AI and use it in the real world. No nonsense, just practical growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/start"
                className="bg-[#141414] text-[#E4E3E0] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#F27D26] transition-all flex items-center group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/business"
                className="border-2 border-[#141414] text-[#141414] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#141414] hover:text-[#E4E3E0] transition-all"
              >
                AI for Business
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audience Split */}
      <section className="py-24 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-serif italic text-4xl text-[#141414]">Who are you building for?</h2>
            <p className="text-[#141414]/60 mt-2">Tailored AI advice for your specific role.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Business Owners', icon: Briefcase, color: 'bg-blue-50/50' },
              { title: 'Employees', icon: Users, color: 'bg-green-50/50' },
              { title: 'Creators', icon: Zap, color: 'bg-purple-50/50' },
              { title: 'Developers', icon: Code, color: 'bg-orange-50/50' },
              { title: 'Students', icon: GraduationCap, color: 'bg-pink-50/50' },
            ].map((item, idx) => (
              <Link
                key={item.title}
                to="/roles"
                className={cn("p-8 rounded-2xl border border-[#141414]/5 flex flex-col items-start group cursor-pointer backdrop-blur-sm", item.color)}
              >
                <item.icon className="mb-6 text-[#141414] group-hover:text-[#F27D26] transition-colors" size={32} />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-[#141414]/60 mb-6">Practical strategies to leverage AI in your daily workflow.</p>
                <ChevronRight className="mt-auto text-[#141414]/30 group-hover:text-[#F27D26] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* South African Angle */}
      <section className="py-24 bg-[#141414]/90 backdrop-blur-md text-[#E4E3E0] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">The Local Edge</span>
              <h2 className="text-5xl font-bold tracking-tight mb-6">AI for the South African Reality.</h2>
              <p className="text-xl text-[#E4E3E0]/70 mb-8 font-serif italic">
                Most AI content is too US-centric. We talk to local realities: budget, bandwidth, staffing, skills gaps, and adoption fear.
              </p>
              <ul className="space-y-4">
                {['Low-bandwidth AI strategies', 'Budget-friendly toolsets', 'Local business use cases', 'Skills gap bridging'].map((text) => (
                  <li key={text} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]" />
                    <span className="text-[#E4E3E0]/80">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square bg-[#E4E3E0]/5 rounded-3xl border border-[#E4E3E0]/10 p-12 flex items-center justify-center overflow-hidden">
               <ZAScene />
               <div className="relative z-10 text-center pointer-events-none">
                  <p className="font-mono text-sm tracking-widest mt-4 text-[#E4E3E0]/40">LOCALIZED INTELLIGENCE</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Can AI Do This? */}
      <section className="py-24 bg-[#E4E3E0]/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-[#141414]">Can AI Do This?</h2>
            <p className="text-[#141414]/60 mt-4">Practical answers to your most common questions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Can AI build a website?',
              'Can AI do my bookkeeping?',
              'Can AI replace staff?',
              'Can AI run a business?',
              'Can AI help me study?',
              'Can AI make presentations?',
              'Can AI write my emails?',
              'Can AI design a logo?'
            ].map((q) => (
              <div key={q} className="bg-white p-6 rounded-xl border border-[#141414]/5 hover:border-[#F27D26] transition-colors cursor-pointer group">
                <h4 className="font-bold text-[#141414] group-hover:text-[#F27D26] transition-colors">{q}</h4>
                <div className="mt-4 flex items-center text-xs font-mono text-[#141414]/40">
                  <span>READ ANSWER</span>
                  <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
