import React from 'react';
import { motion } from 'motion/react';
import { Wrench, ExternalLink, Search, Filter, ArrowRight } from 'lucide-react';
import { TOOLS, COMPARISONS } from '../constants';
import { cn } from '../lib/utils';

export const Tools = () => {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');

  const categories = ['All', ...new Set(TOOLS.map(t => t.category))];

  const filteredTools = TOOLS.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                         tool.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || tool.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-24 bg-[#E4E3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">Toolstack</span>
          <h1 className="text-6xl font-bold tracking-tighter text-[#141414] mb-6">The Right Tools.</h1>
          <p className="text-xl text-[#141414]/70 font-serif italic">
            No affiliate sludge. Just real tools compared in plain English so you know what to use for what.
          </p>
        </header>

        {/* Head-to-Head Comparison Table */}
        <section className="mb-24">
          <div className="bg-[#141414] rounded-[2rem] p-8 md:p-12 text-[#E4E3E0]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#F27D26] mb-2 block">Comparison Guide</span>
                <h2 className="text-4xl font-bold tracking-tight">Head-to-Head.</h2>
              </div>
              <p className="text-[#E4E3E0]/60 max-w-sm text-sm">
                The AI market is crowded. Here is how the top players stack up in the categories that matter most.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 border-b border-[#E4E3E0]/10 text-[10px] font-mono uppercase tracking-widest text-[#E4E3E0]/40">
                <div>Category</div>
                <div>Option A</div>
                <div>Option B</div>
                <div>The Verdict</div>
              </div>

              {/* Table Rows */}
              {COMPARISONS.map((comp, idx) => (
                <motion.div
                  key={comp.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-[#E4E3E0]/5 rounded-2xl p-6 md:p-0 md:bg-transparent md:grid md:grid-cols-4 md:gap-4 md:px-6 md:py-8 border-b border-[#E4E3E0]/5 last:border-0 hover:bg-[#E4E3E0]/10 transition-colors"
                >
                  <div className="mb-4 md:mb-0">
                    <span className="md:hidden text-[10px] font-mono uppercase text-[#F27D26] block mb-1">Category</span>
                    <span className="font-bold text-lg md:text-base">{comp.category}</span>
                  </div>
                  
                  <div className="mb-4 md:mb-0">
                    <span className="md:hidden text-[10px] font-mono uppercase text-[#E4E3E0]/40 block mb-1">Option A</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#F27D26]">{comp.toolA.name}</span>
                      <span className="text-xs text-[#E4E3E0]/60 italic">{comp.toolA.strength}</span>
                    </div>
                  </div>

                  <div className="mb-4 md:mb-0">
                    <span className="md:hidden text-[10px] font-mono uppercase text-[#E4E3E0]/40 block mb-1">Option B</span>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#F27D26]">{comp.toolB.name}</span>
                      <span className="text-xs text-[#E4E3E0]/60 italic">{comp.toolB.strength}</span>
                    </div>
                  </div>

                  <div>
                    <span className="md:hidden text-[10px] font-mono uppercase text-[#E4E3E0]/40 block mb-1">Verdict</span>
                    <p className="text-sm text-[#E4E3E0]/80 leading-relaxed">
                      Use <span className="text-white font-bold">{comp.toolA.name}</span> for {comp.toolA.bestFor.split('.')[0]}. 
                      Switch to <span className="text-white font-bold">{comp.toolB.name}</span> when you need {comp.toolB.bestFor.split('.')[0]}.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#141414]/30" size={18} />
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-[#141414]/5 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-6 py-4 rounded-xl text-sm font-medium whitespace-nowrap transition-colors",
                  category === cat 
                    ? "bg-[#141414] text-[#E4E3E0]" 
                    : "bg-white text-[#141414] hover:bg-[#141414]/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-8 border border-[#141414]/5 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#141414]/5 p-3 rounded-lg">
                  <Wrench size={24} className="text-[#141414]" />
                </div>
                <span className={cn(
                  "text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded",
                  tool.price === 'Free' ? "bg-green-100 text-green-700" :
                  tool.price === 'Freemium' ? "bg-blue-100 text-blue-700" :
                  "bg-orange-100 text-orange-700"
                )}>
                  {tool.price}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#141414] mb-2">{tool.name}</h3>
              <span className="text-xs font-mono text-[#F27D26] mb-4 block uppercase tracking-wider">{tool.category}</span>
              <p className="text-sm text-[#141414]/60 mb-6 flex-grow">{tool.description}</p>
              
              <div className="pt-6 border-t border-[#141414]/5">
                <h4 className="text-[10px] font-bold uppercase text-[#141414]/40 mb-2 tracking-widest">Best For</h4>
                <p className="text-xs font-medium text-[#141414]/80 mb-6">{tool.bestFor}</p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 rounded-lg border border-[#141414] text-[#141414] font-bold text-sm hover:bg-[#141414] hover:text-[#E4E3E0] transition-all group"
                >
                  Visit Tool
                  <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
