import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { FOUNDATIONS_FIRST_USE_CHECKLIST } from '../content/foundationsCompanion';

export const FoundationsChecklist = () => {
  const { setProfile } = useJourneyProfile();

  React.useEffect(() => {
    setProfile('beginner');
  }, [setProfile]);

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>AI First-Use Checklist | ABCAI Courses</title>
        <meta
          name="description"
          content="Use this first-use checklist to keep your prompting structured, your judgement active, and your data out of stupid places."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="courses"
          quickNav={{
            title: 'Jump through the checklist',
            items: [
              { id: 'before-you-prompt', label: 'Before you prompt', description: 'Set the goal and check the risk before you type.' },
              { id: 'while-you-direct-the-model', label: 'While you direct', description: 'Keep the model inside a useful working pattern.' },
              { id: 'before-you-trust-or-send-the-output', label: 'Before you send', description: 'Apply the final review and trust filter.' },
            ],
          }}
        />

        <div className="mb-6">
          <Link
            to="/courses/ai-foundations-for-real-work"
            onClick={() => setProfile('beginner')}
            className="inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Foundations
          </Link>
        </div>

        <header className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              First-use checklist
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              The small discipline that keeps AI useful.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              Most AI mistakes are boring. People paste too much, ask too vaguely, trust too quickly, and send things
              they did not really review. This checklist exists to interrupt that pattern before it costs you.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[color:var(--ink)] p-6 text-[color:var(--paper)] sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">The operating principle</h2>
            </div>
            <p className="mt-5 text-sm leading-7 text-[color:rgba(248,244,238,0.8)]">
              You are not here to admire output. You are here to direct the tool, review the result, and decide what
              gets trusted. The checklist is a guardrail against getting lazy at exactly the wrong moment.
            </p>
          </div>
        </header>

        <section className="mt-16 space-y-5">
          {FOUNDATIONS_FIRST_USE_CHECKLIST.map((section) => (
            <article
              key={section.title}
              id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.05)] sm:p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    Checklist section
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{section.title}</h2>
                </div>
                <div className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--ink)]/78">
                  3 checks
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {section.items.map((item) => (
                  <div key={item} className="rounded-[1.6rem] bg-[color:var(--surface)] p-5">
                    <div className="flex items-start gap-3 text-sm leading-6 text-[color:var(--muted)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">What this checklist is really preventing</h2>
            </div>
            <div className="mt-6 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
              {[
                'Uploading sensitive material because the tool felt convenient.',
                'Sending polished nonsense because the answer sounded confident.',
                'Letting the model choose the shape of the work when you should have briefed it properly.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(23,65,63,0.96),rgba(23,33,39,0.96))] p-6 text-[color:var(--paper)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
              Next move
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Go back into the course with this in your hand.</h2>
            <p className="mt-4 text-sm leading-7 text-[color:rgba(248,244,238,0.8)]">
              This page is not meant to replace the lessons. It is the fast review layer you use before prompting,
              before trusting, and before sending.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/courses/ai-foundations-for-real-work#week-1-breaking-the-magic-spell"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface)]"
              >
                Begin Week 1
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/courses/ai-foundations-for-real-work/cheat-sheet"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/8"
              >
                Open cheat sheet
              </Link>
            </div>
          </div>
        </section>

        <ContinueJourney page="courses" />
      </div>
    </div>
  );
};
