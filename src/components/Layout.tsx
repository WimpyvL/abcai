import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Zap, BookOpen, Briefcase, Wrench, Library, MessageSquare, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Start Here', path: '/start', icon: Zap },
    { name: 'AI for Business', path: '/business', icon: Briefcase },
    { name: 'Learning Paths', path: '/roles', icon: GraduationCap },
    { name: 'AI Tools', path: '/tools', icon: Wrench },
    { name: 'Prompt Library', path: '/prompts', icon: Library },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#E4E3E0]/80 backdrop-blur-md border-b border-[#141414]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl tracking-tighter text-[#141414]">ABC<span className="text-[#F27D26]">AI</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#F27D26]",
                  location.pathname === item.path ? "text-[#F27D26]" : "text-[#141414]/70"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/training"
              className="bg-[#141414] text-[#E4E3E0] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#F27D26] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#141414]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#E4E3E0] border-b border-[#141414]/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-[#141414] hover:bg-[#141414]/5"
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-[#141414] text-[#E4E3E0] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <span className="font-bold text-2xl tracking-tighter">ABC<span className="text-[#F27D26]">AI</span></span>
          <p className="mt-4 text-[#E4E3E0]/60 max-w-sm">
            Practical AI education for real people. From basics to business growth, we help South Africans navigate the AI revolution.
          </p>
        </div>
        <div>
          <h3 className="font-serif italic text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#E4E3E0]/60">
            <li><Link to="/start" className="hover:text-[#F27D26]">Start Here</Link></li>
            <li><Link to="/business" className="hover:text-[#F27D26]">AI for Business</Link></li>
            <li><Link to="/tools" className="hover:text-[#F27D26]">Toolstack</Link></li>
            <li><Link to="/prompts" className="hover:text-[#F27D26]">Prompt Library</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif italic text-lg mb-4">Connect</h3>
          <ul className="space-y-2 text-sm text-[#E4E3E0]/60">
            <li><Link to="/training" className="hover:text-[#F27D26]">Consulting</Link></li>
            <li><Link to="/training" className="hover:text-[#F27D26]">Workshops</Link></li>
            <li><a href="mailto:hello@abcai.co.za" className="hover:text-[#F27D26]">Email Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-[#E4E3E0]/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#E4E3E0]/40">© 2026 ABCAI. Practical AI for Real People.</p>
        <div className="flex space-x-6 text-xs text-[#E4E3E0]/40">
          <Link to="#" className="hover:text-[#F27D26]">Privacy Policy</Link>
          <Link to="#" className="hover:text-[#F27D26]">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);
