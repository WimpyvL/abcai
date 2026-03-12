import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StartHere = () => {
  const tracks = [
    {
      id: 'brand-new',
      title: 'I’m brand new to AI',
      description: 'Start with the basics. No jargon, just clear explanations of what AI is and how to start using it today.',
      steps: ['What is AI?', 'Your first prompt', 'Setting up ChatGPT', 'Free tools to try']
    },
    {
      id: 'business',
      title: 'I want to use AI in my business',
      description: 'Practical strategies for business owners to increase efficiency and cut costs without breaking the bank.',
      steps: ['AI Readiness Audit', 'Low-cost toolstack', 'Automating admin', 'Customer support AI']
    },
    {
      id: 'automate',
      title: 'I want to automate work',
      description: 'For the efficiency seekers. Learn how to connect tools and let AI handle the repetitive tasks.',
      steps: ['Workflow mapping', 'Zapier & Make basics', 'AI Agents 101', 'Before & After examples']
    },
    {
      id: 'build',
      title: 'I want to build with AI',
      description: 'For the creators and developers. Learn how to integrate AI into your products and services.',
      steps: ['API basics', 'Custom GPTs', 'No-code AI builders', 'Deployment tips']
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-[#E4E3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">The Journey Starts Here</span>
          <h1 className="text-6xl font-bold tracking-tighter text-[#141414] mb-6">Choose Your Track.</h1>
          <p className="text-xl text-[#141414]/70 font-serif italic">
            Most people are overwhelmed by AI. We’ve broken it down into four clear paths. Pick the one that fits your goals.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-10 border border-[#141414]/5 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-[#F27D26] rounded-full flex items-center justify-center text-[#E4E3E0]">
                  <Zap size={24} />
                </div>
                <span className="font-mono text-xs text-[#141414]/30">TRACK 0{idx + 1}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-[#141414] mb-4">{track.title}</h3>
              <p className="text-[#141414]/60 mb-8">{track.description}</p>
              
              <div className="space-y-3 mb-10">
                {track.steps.map((step) => (
                  <div key={step} className="flex items-center space-x-3 text-sm font-medium text-[#141414]/80">
                    <CheckCircle2 size={16} className="text-[#F27D26]" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <button className="mt-auto w-full bg-[#141414] text-[#E4E3E0] py-4 rounded-xl font-bold hover:bg-[#F27D26] transition-colors flex items-center justify-center group">
                Start This Track
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* AI Basics Section */}
        <section className="mt-32">
          <div className="bg-[#141414] rounded-[3rem] p-12 md:p-20 text-[#E4E3E0]">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-8">AI Basics Without the Nonsense</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-serif italic text-xl text-[#F27D26] mb-4">What AI actually is</h4>
                  <p className="text-[#E4E3E0]/60 text-sm leading-relaxed">
                    It's not a magic brain. It's high-level pattern matching that can predict the next best word, pixel, or action based on massive amounts of data.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif italic text-xl text-[#F27D26] mb-4">What ChatGPT is good at</h4>
                  <p className="text-[#E4E3E0]/60 text-sm leading-relaxed">
                    Drafting, summarizing, coding, and brainstorming. It's like having a very fast, slightly overconfident intern.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif italic text-xl text-[#F27D26] mb-4">What AI still sucks at</h4>
                  <p className="text-[#E4E3E0]/60 text-sm leading-relaxed">
                    Fact-checking, deep emotional intelligence, and complex multi-step reasoning without guidance.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif italic text-xl text-[#F27D26] mb-4">What prompts are</h4>
                  <p className="text-[#E4E3E0]/60 text-sm leading-relaxed">
                    The instructions you give the AI. Better instructions = better results. It's a new form of communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
