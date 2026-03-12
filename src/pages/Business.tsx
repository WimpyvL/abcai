import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle2, TrendingUp, ShieldAlert, Zap, ArrowRight } from 'lucide-react';
import { USE_CASES } from '../constants';

export const Business = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">AI for Business</span>
          <h1 className="text-6xl font-bold tracking-tighter text-[#141414] mb-6">Real World ROI.</h1>
          <p className="text-xl text-[#141414]/70 font-serif italic">
            Stop chasing hype. Start implementing AI where it actually moves the needle for your business.
          </p>
        </header>

        {/* Use Cases Grid */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[#141414]">Industry Use Cases</h2>
            <div className="h-px flex-grow mx-8 bg-[#141414]/10 hidden md:block" />
            <span className="font-mono text-xs text-[#141414]/40">SOUTH AFRICAN CONTEXT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USE_CASES.map((useCase, idx) => (
              <div key={useCase.industry} className="border border-[#141414]/10 rounded-3xl p-8 hover:border-[#F27D26] transition-colors group bg-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F27D26] px-2 py-1 bg-[#F27D26]/5 rounded">{useCase.industry}</span>
                </div>
                <h3 className="text-xl font-bold text-[#141414] mb-3">{useCase.title}</h3>
                <p className="text-sm text-[#141414]/60 mb-6 leading-relaxed">{useCase.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase mb-3 text-[#141414]/40 tracking-widest">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tools.map(tool => (
                        <span key={tool} className="bg-[#141414]/5 px-2 py-1 rounded text-[10px] font-medium border border-[#141414]/5">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase mb-3 text-[#141414]/40 tracking-widest">Local Impact</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map(benefit => (
                        <li key={benefit} className="flex items-start text-xs text-[#141414]/70">
                          <CheckCircle2 size={14} className="mr-2 text-[#F27D26] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Readiness Test Section */}
        <section className="bg-[#141414] rounded-[3rem] p-12 md:p-20 text-[#E4E3E0] relative overflow-hidden mb-32">
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">Diagnostic Tool</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">Is your business actually ready for AI?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F27D26]">The Test</h3>
                <p className="text-[#E4E3E0]/70 leading-relaxed">
                  Our comprehensive 5-minute diagnostic evaluates your data infrastructure, team technical literacy, and current operational bottlenecks to determine where AI can provide the highest immediate ROI.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#F27D26]">The Outcome</h3>
                <p className="text-[#E4E3E0]/70 leading-relaxed">
                  You'll receive a personalized 12-page AI Strategy Report including a readiness score, prioritized use cases, and a custom tool stack recommended specifically for the South African business landscape.
                </p>
              </div>
            </div>

            <Link 
              to="/readiness-test"
              className="inline-flex items-center bg-[#F27D26] text-[#141414] px-10 py-5 rounded-full text-lg font-bold hover:bg-white transition-colors group"
            >
              Start Readiness Test
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Decorative Background Element */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
            <Zap size={600} strokeWidth={0.5} />
          </div>
        </section>

        {/* Risks/Warnings */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">What businesses should be careful of</h3>
            <p className="text-[#141414]/60">
              AI isn't a silver bullet. Data privacy, hallucinations, and over-reliance are real risks that need a strategy.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-[#E4E3E0]/30 rounded-2xl">
              <h4 className="font-bold mb-2">Data Privacy</h4>
              <p className="text-sm text-[#141414]/60">Never put sensitive client data or trade secrets into public AI models without proper enterprise security.</p>
            </div>
            <div className="p-8 bg-[#E4E3E0]/30 rounded-2xl">
              <h4 className="font-bold mb-2">Hallucinations</h4>
              <p className="text-sm text-[#141414]/60">AI can confidently state things that are completely false. Always have a human-in-the-loop for critical facts.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
