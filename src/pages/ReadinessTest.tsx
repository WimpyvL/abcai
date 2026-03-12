import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ClipboardCheck, BarChart3, Lightbulb, FileText, Zap, Shield, Users, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReadinessTest = () => {
  const [step, setStep] = useState(0);
  const [showReport, setShowReport] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How would you describe your current data organization?",
      options: [
        "We have no centralized data storage.",
        "Data is in various spreadsheets and silos.",
        "We have a centralized database but limited access.",
        "We have a clean, accessible data warehouse."
      ]
    },
    {
      id: 2,
      question: "What is the general level of AI literacy in your team?",
      options: [
        "Most don't know what ChatGPT is.",
        "Some use AI tools personally but not for work.",
        "We have a few 'power users' experimenting.",
        "AI is integrated into our daily workflows."
      ]
    },
    {
      id: 3,
      question: "What is your primary goal for implementing AI?",
      options: [
        "Just curious/FOMO.",
        "Automating repetitive tasks.",
        "Improving customer experience.",
        "Developing new AI-powered products."
      ]
    }
  ];

  const ReportView = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="border-b border-[#141414]/10 pb-8">
        <h2 className="text-4xl font-bold text-[#141414] mb-4">AI Strategy Report</h2>
        <p className="text-[#141414]/60">Generated for your business on {new Date().toLocaleDateString()}</p>
      </div>

      {/* Executive Summary */}
      <section>
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <Zap className="mr-2 text-[#F27D26]" size={20} />
          Executive Summary
        </h3>
        <div className="bg-[#F27D26]/5 p-8 rounded-3xl border border-[#F27D26]/10">
          <p className="text-[#141414]/80 leading-relaxed">
            Your business shows strong potential for AI integration, particularly in operational efficiency. While your data is currently siloed, the clarity of your goals provides a solid foundation for a phased rollout. We recommend focusing on "Low-Hanging Fruit" automation before attempting complex model training.
          </p>
        </div>
      </section>

      {/* Pillar Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-[#141414]/5 rounded-3xl bg-white">
          <Shield className="text-[#F27D26] mb-4" />
          <h4 className="font-bold mb-2">Data Governance</h4>
          <p className="text-sm text-[#141414]/60 mb-4">Current Status: <span className="text-orange-600 font-bold">Action Required</span></p>
          <p className="text-sm text-[#141414]/70">Your data is fragmented. Priority #1 is creating a "Single Source of Truth" to prevent AI hallucinations and ensure consistent outputs.</p>
        </div>
        <div className="p-8 border border-[#141414]/5 rounded-3xl bg-white">
          <Users className="text-[#F27D26] mb-4" />
          <h4 className="font-bold mb-2">Team Readiness</h4>
          <p className="text-sm text-[#141414]/60 mb-4">Current Status: <span className="text-green-600 font-bold">Emerging</span></p>
          <p className="text-sm text-[#141414]/70">There is high interest but low structured skill. Internal "AI Champions" should be identified to lead peer-to-peer training sessions.</p>
        </div>
      </div>

      {/* Recommended Tool Stack */}
      <section>
        <h3 className="text-xl font-bold mb-6">Recommended Tool Stack (ZA Context)</h3>
        <div className="space-y-4">
          {[
            { name: 'Claude 3.5 Sonnet', use: 'Advanced reasoning & coding tasks', cost: 'R400/mo' },
            { name: 'Make.com', use: 'Workflow automation & integration', cost: 'Free tier available' },
            { name: 'Perplexity', use: 'Research & real-time local data', cost: 'Free' },
          ].map((tool) => (
            <div key={tool.name} className="flex items-center justify-between p-6 bg-[#E4E3E0]/20 rounded-2xl">
              <div>
                <h5 className="font-bold text-[#141414]">{tool.name}</h5>
                <p className="text-xs text-[#141414]/60">{tool.use}</p>
              </div>
              <span className="text-xs font-mono font-bold text-[#F27D26]">{tool.cost}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-[#141414] text-[#E4E3E0] p-10 rounded-[2.5rem]">
        <h3 className="text-xl font-bold mb-8">90-Day Implementation Roadmap</h3>
        <div className="space-y-8">
          {[
            { phase: 'Month 1', task: 'Data Audit & Tool Sandbox setup' },
            { phase: 'Month 2', task: 'Pilot: Automate Customer Support FAQs' },
            { phase: 'Month 3', task: 'Company-wide Prompt Engineering Workshop' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <span className="font-mono text-[#F27D26] font-bold">{item.phase}</span>
              <p className="text-[#E4E3E0]/70">{item.task}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center pt-8">
        <button 
          onClick={() => window.print()}
          className="flex items-center bg-[#141414] text-white px-8 py-4 rounded-full font-bold hover:bg-[#F27D26] transition-colors"
        >
          <Download className="mr-2" size={20} />
          Export as PDF
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#E4E3E0]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] mb-4 block">Diagnostic Tool</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#141414] mb-4">AI Readiness Test</h1>
          <p className="text-[#141414]/60">Discover how prepared your business is for the AI revolution.</p>
        </header>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#141414]/5">
          <AnimatePresence mode="wait">
            {!showReport ? (
              step < questions.length ? (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#141414]/40">QUESTION {step + 1} OF {questions.length}</span>
                    <div className="h-1 w-32 bg-[#141414]/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#F27D26] transition-all duration-500" 
                        style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-[#141414] mb-8">{questions[step].question}</h2>
                  
                  <div className="space-y-4">
                    {questions[step].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setStep(step + 1)}
                        className="w-full text-left p-6 rounded-xl border border-[#141414]/10 hover:border-[#F27D26] hover:bg-[#F27D26]/5 transition-all group flex items-center justify-between"
                      >
                        <span className="font-medium text-[#141414]">{option}</span>
                        <ArrowRight size={18} className="text-[#141414]/20 group-hover:text-[#F27D26] group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl font-bold text-[#141414] mb-4">Analysis Complete</h2>
                  <p className="text-[#141414]/60 mb-12 max-w-md mx-auto">
                    Based on your answers, your business has a **Moderate Readiness Score (64/100)**. Your personalized report is ready.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                    <div className="p-6 bg-[#E4E3E0]/30 rounded-2xl">
                      <ClipboardCheck className="text-[#F27D26] mb-4" />
                      <h4 className="font-bold text-sm mb-2">Data Health</h4>
                      <p className="text-xs text-[#141414]/60">Needs centralization before scaling.</p>
                    </div>
                    <div className="p-6 bg-[#E4E3E0]/30 rounded-2xl">
                      <BarChart3 className="text-[#F27D26] mb-4" />
                      <h4 className="font-bold text-sm mb-2">ROI Potential</h4>
                      <p className="text-xs text-[#141414]/60">High in Customer Support automation.</p>
                    </div>
                    <div className="p-6 bg-[#E4E3E0]/30 rounded-2xl">
                      <Lightbulb className="text-[#F27D26] mb-4" />
                      <h4 className="font-bold text-sm mb-2">Next Step</h4>
                      <p className="text-xs text-[#141414]/60">Upskill core team on Prompt Engineering.</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setShowReport(true)}
                      className="bg-[#141414] text-[#E4E3E0] px-8 py-4 rounded-full font-bold hover:bg-[#F27D26] transition-colors flex items-center justify-center"
                    >
                      <FileText className="mr-2" size={20} />
                      View Full Report
                    </button>
                    <Link to="/business" className="px-8 py-4 rounded-full font-bold border border-[#141414]/10 hover:bg-[#141414]/5 transition-colors">
                      Back to Business
                    </Link>
                  </div>
                </motion.div>
              )
            ) : (
              <ReportView key="report" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
