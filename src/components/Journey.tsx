import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useJourneyProfile } from './JourneyProfile';
import { ADAPTIVE_JOURNEYS } from '../journeyData';
import { cn } from '../lib/utils';
import type { JourneyPageKey } from '../types';

interface JourneyCompassProps {
  page: JourneyPageKey;
}

export const JourneyCompass = ({ page }: JourneyCompassProps) => {
  const { profile, setProfile } = useJourneyProfile();
  const activeJourney = ADAPTIVE_JOURNEYS[profile];
  const config = activeJourney.pages[page];
  const currentIndex = activeJourney.stages.findIndex((stage) => stage.id === config.stageId);

  return (
    <section className="mb-12 rounded-[2rem] border border-[color:var(--line)] bg-white/80 p-5 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
            Journey guide
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
            From browsing to real AI capability
          </h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{config.summary}</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {Object.values(ADAPTIVE_JOURNEYS).map((journey) => {
              const isActive = journey.profile.id === profile;

              return (
                <button
                  key={journey.profile.id}
                  type="button"
                  onClick={() => setProfile(journey.profile.id)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
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

          <Link
            to={config.nextPath}
            className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
          >
            {config.nextLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-5 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
          Active journey
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em]">{activeJourney.profile.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{activeJourney.profile.intent}</p>
      </div>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-1">
        {activeJourney.stages.map((stage, index) => {
          const isCurrent = index === currentIndex;
          const isComplete = index < currentIndex;

          return (
            <Link
              key={stage.id}
              to={stage.path}
              className={cn(
                'min-w-[180px] rounded-[1.4rem] border px-4 py-3',
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
              <p className={cn('mt-2 text-xs leading-5', isCurrent ? 'text-[color:rgba(248,244,238,0.72)]' : 'text-[color:var(--muted)]')}>
                {stage.description}
              </p>
            </Link>
          );
        })}
      </div>
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
