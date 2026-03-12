import React from 'react';
import { ArrowRight, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useJourneyProfile } from './JourneyProfile';
import { FOOTER_LINK_GROUPS, NAV_ITEMS } from '../constants';
import { cn } from '../lib/utils';
import type { JourneyProfileId } from '../types';

const getJourneyProfileForPath = (path: string): JourneyProfileId => {
  if (path === '/build') {
    return 'builder';
  }

  if (path === '/learn' || path === '/prompts') {
    return 'beginner';
  }

  return 'business';
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { setProfile } = useJourneyProfile();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--line)] bg-[color:rgba(248,244,238,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--ink)] text-sm font-semibold tracking-[0.2em] text-[color:var(--paper)]">
            AI
          </div>
          <div className="min-w-0">
            <div className="text-lg font-semibold tracking-[-0.04em] text-[color:var(--ink)]">ABCAI</div>
            <div className="hidden text-xs text-[color:var(--muted)] sm:block">Learn AI. Use AI. Build Better.</div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setProfile(getJourneyProfileForPath(item.path))}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[color:var(--ink)] text-[color:var(--paper)]'
                    : 'text-[color:var(--ink)]/80 hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--ink)]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/readiness-test"
            onClick={() => setProfile('business')}
            className="rounded-full border border-[color:var(--line-strong)] px-4 py-2 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--surface-strong)]"
          >
            Readiness test
          </Link>
          <Link
            to="/training"
            onClick={() => setProfile('business')}
            className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] transition-colors hover:bg-[color:var(--accent-strong)]"
          >
            Team training
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--ink)] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--paper)] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setProfile(getJourneyProfileForPath(item.path))}
                  className="rounded-2xl border border-[color:var(--line)] px-4 py-3"
                >
                  <div className="text-sm font-semibold text-[color:var(--ink)]">{item.label}</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{item.description}</div>
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                to="/readiness-test"
                onClick={() => setProfile('business')}
                className="rounded-2xl border border-[color:var(--line-strong)] px-4 py-3 text-sm font-medium text-[color:var(--ink)]"
              >
                Take the readiness test
              </Link>
              <Link
                to="/training"
                onClick={() => setProfile('business')}
                className="rounded-2xl bg-[color:var(--ink)] px-4 py-3 text-sm font-semibold text-[color:var(--paper)]"
              >
                Book training or consulting
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  const { setProfile } = useJourneyProfile();

  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,0.7fr)]">
          <div>
            <div className="text-3xl font-semibold tracking-[-0.05em]">ABCAI</div>
            <p className="mt-4 max-w-md text-sm leading-6 text-[color:rgba(244,241,236,0.72)]">
              Practical AI learning and adoption for South Africa. Clear guidance for people who need useful
              answers, better workflows, and credible next steps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[color:rgba(244,241,236,0.72)]">
              <span className="rounded-full border border-white/10 px-3 py-1">South African-first framing</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Business and team adoption</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Beginner to builder</span>
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:rgba(244,241,236,0.44)]">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setProfile(getJourneyProfileForPath(link.path))}
                      className="text-sm text-[color:rgba(244,241,236,0.78)] transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:rgba(244,241,236,0.44)]">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-[color:rgba(244,241,236,0.78)]">
              <a href="mailto:hello@abcai.co.za" className="inline-flex items-center transition-colors hover:text-white">
                <Mail className="mr-2 h-4 w-4" />
                hello@abcai.co.za
              </a>
              <p>Remote-first, built for South Africa.</p>
              <p>Workshops, readiness reviews, and practical implementation support.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[color:rgba(244,241,236,0.52)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ABCAI. Practical AI for people who need clarity, not noise.</p>
          <div className="flex gap-4">
            <span>abcai.co.za</span>
            <span>Learn AI. Use AI. Build Better.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
