import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Zap, Code, GraduationCap, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ROLE_PATHS } from '../constants';
import { cn } from '../lib/utils';

export const RolePaths = () => {
  const [activeRole, setActiveRole] = React.useState(ROLE_PATHS[0].role);

  const roles = [
    { name: 'Business Owners', icon: Briefcase },
    { name: 'Creators', icon: Zap },
    { name: 'Developers', icon: Code },
    { name: 'Students', icon: GraduationCap },
  ];

  const currentPath = ROLE_PATHS.find(p => p.role === activeRole);

  return (
    <div className="pt-24 pb-24 bg-white">
      <Helmet>
        <title>Learning Paths | AI Roadmap for {activeRole}</title>
        <meta name="description" content={`Tailored AI learning path for ${activeRole}. From fundamentals to advanced strategy, master AI for your specific career or business.`} />
        <meta name="keywords" content={`AI for ${activeRole}, AI learning path, AI roadmap, artificial intelligence training, South Africa AI education`} />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">Learning Paths</span>
          <h1 className="text-6xl font-bold tracking-tighter text-[#141414] mb-6">Your AI Roadmap.</h1>
          <p className="text-xl text-[#141414]/70 font-serif italic">
            Tailored learning paths that take you from AI curious to AI capable. Select your role to see your journey.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Role Selector */}
          <div className="lg:col-span-1 space-y-2">
            {roles.map((role) => (
              <button
                key={role.name}
                onClick={() => setActiveRole(role.name)}
                className={cn(
                  "w-full flex items-center space-x-4 p-6 rounded-2xl transition-all text-left group",
                  activeRole === role.name 
                    ? "bg-[#141414] text-[#E4E3E0] shadow-xl" 
                    : "bg-[#E4E3E0]/30 text-[#141414] hover:bg-[#141414]/5"
                )}
              >
                <role.icon size={24} className={cn(
                  "transition-colors",
                  activeRole === role.name ? "text-[#F27D26]" : "text-[#141414]/40 group-hover:text-[#141414]"
                )} />
                <span className="font-bold">{role.name}</span>
                <ChevronRight size={18} className={cn(
                  "ml-auto transition-transform",
                  activeRole === role.name ? "translate-x-1" : "opacity-0"
                )} />
              </button>
            ))}
          </div>

          {/* Path Display */}
          <div className="lg:col-span-3">
            <div className="bg-[#141414] rounded-[3rem] p-12 md:p-20 text-[#E4E3E0] relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4 flex items-center">
                  <span className="text-[#F27D26] mr-4">/</span>
                  Path for {activeRole}
                </h2>
                <p className="text-[#E4E3E0]/70 mb-12 max-w-2xl font-serif italic">
                  {currentPath?.description}
                </p>

                <div className="space-y-12">
                  {currentPath?.path.map((step, idx) => (
                    <motion.div
                      key={step.topic}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative pl-12 border-l border-[#E4E3E0]/10"
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#F27D26] border-4 border-[#141414]" />
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#F27D26]">{step.level}</span>
                        <h3 className="text-2xl font-bold">{step.topic}</h3>
                      </div>
                      <p className="text-[#E4E3E0]/60 max-w-xl">{step.goal}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 pt-12 border-t border-[#E4E3E0]/10">
                   <button className="bg-[#F27D26] text-[#141414] px-10 py-5 rounded-full font-bold flex items-center hover:scale-105 transition-transform group">
                      Get Started with {activeRole} Path
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>

              {/* Background Accent */}
              <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
                 <Zap size={400} className="transform translate-x-1/4 translate-y-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
