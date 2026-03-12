import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Library, Copy, Check, Download, Search, X, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROMPTS } from '../constants';
import { cn } from '../lib/utils';

export const PromptLibrary = () => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [showModal, setShowModal] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const categories = ['All', 'Sales', 'Marketing', 'Email', 'Support', 'Planning', 'Social', 'Dev'];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setShowModal(false);
        setIsSuccess(false);
        setEmail('');
      }, 3000);
    }, 1500);
  };

  const filteredPrompts = PROMPTS.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(search.toLowerCase()) || 
                         prompt.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || prompt.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-24 bg-white">
      <Helmet>
        <title>Prompt Library | ABCAI Practical AI Prompts</title>
        <meta name="description" content="A curated library of business-ready AI prompts for Sales, Marketing, Email, and more. Optimized for South African business contexts." />
        <meta name="keywords" content="AI prompts for business, marketing prompts, sales prompts, ChatGPT prompts South Africa, AI prompt library" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">Prompt Library</span>
          <h1 className="text-6xl font-bold tracking-tighter text-[#141414] mb-6">Ready to Use.</h1>
          <p className="text-xl text-[#141414]/70 font-serif italic">
            Not just random prompts. Organized, tested, and ready to deploy in your business. Copy, paste, and grow.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#141414]/30" size={18} />
            <input
              type="text"
              placeholder="Search prompts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#E4E3E0]/30 rounded-xl border border-[#141414]/5 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
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
                    : "bg-[#E4E3E0]/30 text-[#141414] hover:bg-[#141414]/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrompts.map((prompt, idx) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#E4E3E0]/20 rounded-3xl p-8 border border-[#141414]/5 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-[#F27D26] text-[#E4E3E0] px-3 py-1 rounded-full">
                  {prompt.category}
                </span>
                <button
                  onClick={() => handleCopy(prompt.id, prompt.text)}
                  className="text-[#141414]/40 hover:text-[#F27D26] transition-colors"
                >
                  {copiedId === prompt.id ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-[#141414] mb-2">{prompt.title}</h3>
              <p className="text-sm text-[#141414]/60 mb-6">{prompt.description}</p>
              
              <div className="bg-white rounded-xl p-6 border border-[#141414]/5 font-mono text-xs leading-relaxed text-[#141414]/80 mb-6 relative group">
                <div className="whitespace-pre-wrap">{prompt.text}</div>
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                   <button 
                    onClick={() => handleCopy(prompt.id, prompt.text)}
                    className="bg-[#141414] text-[#E4E3E0] px-4 py-2 rounded-lg text-xs font-bold"
                   >
                     COPY PROMPT
                   </button>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#141414]/30">
                <span>Optimized for GPT-4 / Claude 3</span>
                <button onClick={() => setShowModal(true)} className="hover:text-[#F27D26] transition-colors">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Packs CTA */}
        <section className="mt-32 bg-[#141414] rounded-[3rem] p-12 md:p-20 text-[#E4E3E0] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Download the Full Packs</h2>
            <p className="text-[#E4E3E0]/60 text-lg mb-8">
              Get our curated prompt libraries as downloadable PDF or Notion templates. Perfect for teams and high-volume users.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#F27D26] text-[#141414] px-8 py-4 rounded-full font-bold flex items-center hover:scale-105 transition-transform"
              >
                <Download size={18} className="mr-2" />
                Sales & Marketing Pack
              </button>
              <button 
                onClick={() => setShowModal(true)}
                className="border border-[#E4E3E0]/20 text-[#E4E3E0] px-8 py-4 rounded-full font-bold hover:bg-[#E4E3E0]/10 transition-colors"
              >
                View All Packs
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-square bg-[#E4E3E0]/5 rounded-3xl border border-[#E4E3E0]/10 p-8 flex items-center justify-center">
             <Library size={120} className="text-[#F27D26]/20" />
          </div>
        </section>
      </div>

      {/* Lead Magnet Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-[#141414]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#E4E3E0] w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-[#141414]/40 hover:text-[#141414] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-10 md:p-12">
                {!isSuccess ? (
                  <>
                    <div className="w-16 h-16 bg-[#F27D26] rounded-2xl flex items-center justify-center text-[#E4E3E0] mb-8">
                      <Download size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#141414] mb-4">Get the Full Library</h3>
                    <p className="text-[#141414]/60 mb-8">
                      Enter your email below and we'll send you our complete curated prompt library (100+ prompts) as a Notion template and PDF.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#141414]/30" size={18} />
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-[#141414]/5 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full py-4 rounded-xl font-bold flex items-center justify-center transition-all",
                          isSubmitting ? "bg-[#141414]/50 cursor-not-allowed" : "bg-[#141414] text-[#E4E3E0] hover:bg-[#F27D26]"
                        )}
                      >
                        {isSubmitting ? "Sending..." : "Send Me the Packs"}
                        {!isSubmitting && <ArrowRight size={18} className="ml-2" />}
                      </button>
                    </form>
                    <p className="mt-6 text-[10px] text-center text-[#141414]/40 uppercase tracking-widest">
                      No spam. Just practical AI growth.
                    </p>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Check size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-[#141414] mb-4">Check Your Inbox!</h3>
                    <p className="text-[#141414]/60">
                      We've sent the download link to <span className="font-bold text-[#141414]">{email}</span>. Happy prompting!
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
