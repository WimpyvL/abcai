import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle2, Printer, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { FOUNDATIONS_CHEAT_SHEET } from '../content/foundationsCompanion';

export const FoundationsCheatSheet = () => {
  const { setProfile } = useJourneyProfile();

  React.useEffect(() => {
    setProfile('beginner');
  }, [setProfile]);

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>AI Foundations Cheat Sheet | ABCAI Courses</title>
        <meta
          name="description"
          content="Keep the C.R.E.D. prompt blueprint, the traffic-light safety model, and the core feedback rules close while you work."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="courses"
          quickNav={{
            title: 'Jump through the cheat sheet',
            items: [
              { id: 'cred-blueprint', label: 'C.R.E.D.', description: 'Use the prompt blueprint before you ask for output.' },
              { id: 'traffic-light-model', label: 'Safety model', description: 'Know what is safe, what needs judgement, and what is reckless.' },
              { id: 'feedback-rules', label: 'Feedback rules', description: 'Steer weak outputs instead of starting over.' },
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

        <header className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Safe wins cheat sheet
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Keep this visible whenever an AI tab is open.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              This is the one-page operating layer for the course. It exists so you do not fall back into vague prompts,
              blind trust, or risky uploads the second real work arrives.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">The rule underneath all of this</h2>
            </div>
            <p className="mt-5 text-sm leading-7 text-[color:var(--ink)]/82">
              If you would not bet $100 of your own money on the output, do not hit send. That single filter removes a
              lot of nonsense immediately.
            </p>
            <button
              type="button"
              onClick={() => window.print()}
              className="mt-6 inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-white"
            >
              Print cheat sheet
              <Printer className="ml-2 h-4 w-4" />
            </button>
          </div>
        </header>

        <section id="cred-blueprint" className="mt-16 rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
            The C.R.E.D. blueprint
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            If one of these is missing, you are getting noise instead of value.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
            {FOUNDATIONS_CHEAT_SHEET.cred.map((item) => {
              const [label, ...rest] = item.split(':');
              return (
                <div key={item} className="rounded-[1.6rem] bg-[color:var(--surface)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                    {label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{rest.join(':').trim()}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="traffic-light-model" className="mt-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Traffic-light safety model
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Know the difference between safe, risky, and reckless.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {FOUNDATIONS_CHEAT_SHEET.safety.map((item) => (
              <article
                key={item.zone}
                className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    {item.zone} zone
                  </p>
                  <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--ink)]/78">
                    {item.action}
                  </span>
                </div>
                <p className="mt-5 text-sm font-semibold text-[color:var(--ink)]">{item.example}</p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{item.why}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="feedback-rules" className="mt-16 grid gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Golden rule of feedback
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Do not start over. Steer.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              Weak output is not always a sign that the tool is useless. Often it means the direction was weak. Good
              operators correct the model instead of resetting the entire conversation every time they hit friction.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(23,33,39,0.96),rgba(23,65,63,0.96))] p-6 text-[color:var(--paper)] sm:p-8">
            <div className="space-y-3">
              {FOUNDATIONS_CHEAT_SHEET.feedback.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[color:rgba(248,244,238,0.8)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/courses/ai-foundations-for-real-work/first-use-checklist"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface)]"
              >
                Open first-use checklist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/courses/ai-foundations-for-real-work/workbook"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/8"
              >
                Open workbook
              </Link>
            </div>
          </div>
        </section>

        <ContinueJourney page="courses" />
      </div>
    </div>
  );
};
