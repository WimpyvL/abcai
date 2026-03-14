import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useJourneyProfile } from './JourneyProfile';
import { ADAPTIVE_JOURNEYS } from '../journeyData';
import { cn } from '../lib/utils';
import type { JourneyPageKey } from '../types';

interface JourneyCompassProps {
  page: JourneyPageKey;
  className?: string;
}

export const JourneyCompass = ({ page, className }: JourneyCompassProps) => {
  const { profile, setProfile } = useJourneyProfile();
  const activeJourney = ADAPTIVE_JOURNEYS[profile];
  const config = activeJourney.pages[page];
  const currentIndex = activeJourney.stages.findIndex((stage) => stage.id === config.stageId);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={cn('mb-4 sm:mb-5', className)}>
      <div className="flex justify-start sm:justify-end">
        <div className="w-full sm:w-auto rounded-[1.6rem] border border-[color:var(--line)] bg-white/88 px-3 py-3 shadow-[0_10px_24px_rgba(23,33,39,0.05)] sm:rounded-full sm:px-2 sm:py-2">
          <div className="flex items-center justify-between gap-3 sm:flex-wrap sm:justify-start">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="rounded-full bg-[color:var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Journey
              </span>
              <span className="rounded-full border border-[color:var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[color:var(--ink)]">
                {activeJourney.profile.title}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-sm font-semibold text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:bg-[color:var(--surface)]"
            >
              {isOpen ? 'Hide' : 'Open'}
              {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </button>
            <Link
              to={config.nextPath}
              className="hidden sm:inline-flex items-center rounded-full bg-[color:var(--ink)] px-4 py-1.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
            >
              {config.nextLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-2 ml-auto max-w-5xl rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-3.5 shadow-[0_18px_42px_rgba(23,33,39,0.08)] sm:mt-3 sm:rounded-[1.4rem] sm:p-4">
              <Link
                to={config.nextPath}
                className="mb-3 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--ink)] px-4 py-2 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)] sm:hidden"
              >
                {config.nextLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-base font-semibold tracking-[-0.03em] text-[color:var(--ink)]">
                  From browsing to real AI capability
                </h2>
                <p className="text-sm leading-6 text-[color:var(--muted)]">{config.summary}</p>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {Object.values(ADAPTIVE_JOURNEYS).map((journey) => {
                  const isActive = journey.profile.id === profile;

                  return (
                    <button
                      key={journey.profile.id}
                      type="button"
                      onClick={() => setProfile(journey.profile.id)}
                      className={cn(
                        'rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors',
                        isActive
                          ? 'border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--paper)]'
                          : 'border-[color:var(--line)] bg-white text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:bg-[color:var(--surface)]'
                      )}
                    >
                      {journey.profile.title}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[1rem] border border-[color:var(--line)] bg-white px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  Active journey
                </p>
                <h3 className="text-sm font-semibold tracking-[-0.02em]">{activeJourney.profile.title}</h3>
                <p className="text-sm leading-6 text-[color:var(--muted)]">{activeJourney.profile.intent}</p>
              </div>

              <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
                {activeJourney.stages.map((stage, index) => {
                  const isCurrent = index === currentIndex;
                  const isComplete = index < currentIndex;

                  return (
                    <Link
                      key={stage.id}
                      to={stage.path}
                      className={cn(
                        'rounded-[1rem] border px-3 py-2.5',
                        isCurrent
                          ? 'border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--paper)]'
                          : isComplete
                            ? 'border-[color:var(--line)] bg-[color:var(--surface-strong)] text-[color:var(--ink)]'
                            : 'border-[color:var(--line)] bg-white text-[color:var(--ink)]/80'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {isComplete ? (
                          <CheckCircle2 className="h-4 w-4 text-[color:var(--accent)]" />
                        ) : (
                          <span
                            className={cn(
                              'text-xs font-semibold uppercase tracking-[0.16em]',
                              isCurrent ? 'text-[color:rgba(248,244,238,0.68)]' : 'text-[color:var(--accent-strong)]'
                            )}
                          >
                            0{index + 1}
                          </span>
                        )}
                        <span className="text-sm font-semibold">{stage.title}</span>
                      </div>
                      <p className={cn('mt-1 text-xs leading-5', isCurrent ? 'text-[color:rgba(248,244,238,0.72)]' : 'text-[color:var(--muted)]')}>
                        {stage.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface ContinueJourneyProps {
  page: JourneyPageKey;
}

export const ContinueJourney = ({ page }: ContinueJourneyProps) => {
  const { profile } = useJourneyProfile();
  const config = ADAPTIVE_JOURNEYS[profile].pages[page];

  return (
    <section className="mt-16 rounded-[2.5rem] border border-[color:var(--line)] bg-white/80 p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
            Continue the journey
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Keep moving from interest to capability
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
          Each next step is designed to deepen understanding, tighten decisions, or move you closer to practical use.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {config.recommendations.map((item) => (
          <Link
            key={item.path + item.title}
            to={item.path}
            className="rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 hover:border-[color:var(--accent)] hover:bg-white"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{item.reason}</p>
            <div className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/82">
              <span className="font-semibold">What this gives you:</span> {item.outcome}
            </div>
            <div className="mt-5 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]">
              Go there next
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
