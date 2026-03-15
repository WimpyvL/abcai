import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, PencilRuler, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { FOUNDATIONS_WORKBOOK } from '../content/foundationsCompanion';

export const FoundationsWorkbook = () => {
  const { setProfile } = useJourneyProfile();

  React.useEffect(() => {
    setProfile('beginner');
  }, [setProfile]);

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>AI Foundations Workbook | ABCAI Courses</title>
        <meta
          name="description"
          content="Use the AI Foundations workbook to turn the first course into muscle memory through deliberate exercises and stronger review habits."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="courses"
          quickNav={{
            title: 'Jump through the workbook',
            items: [
              { id: 'workbook-purpose', label: 'How to use it', description: 'See the point of the workbook before you start filling it in.' },
              { id: 'workbook-exercises', label: 'Exercises', description: 'Open the three workbook exercises tied to the course.' },
              { id: 'workbook-next-step', label: 'Next step', description: 'Move back into the course or into the cheat sheet.' },
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

        <header id="workbook-purpose" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Workbook companion
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Turn information into a repeatable skill.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              This workbook adds the friction most people skip. Instead of nodding along with the course, you stop,
              evaluate the output, and prove to yourself where AI is useful, where it lies, and where your own
              judgement still does the real work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/courses/ai-foundations-for-real-work#week-1-breaking-the-magic-spell"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
              >
                Return to Week 1
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
              >
                Print workbook
                <Printer className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">How to use this properly</h2>
            </div>
            <div className="mt-6 space-y-3 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'Do the exercise after the lesson, not before it.',
                'Write down what the model got wrong, not only what it got right.',
                'Keep your own judgement visible. That is the skill this course is trying to build.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="workbook-exercises" className="mt-16 space-y-5">
          {FOUNDATIONS_WORKBOOK.map((exercise, index) => (
            <article
              key={exercise.title}
              className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_16px_42px_rgba(23,33,39,0.05)] sm:p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    Exercise 0{index + 1} • {exercise.week}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">{exercise.title}</h2>
                  <p className="mt-3 text-lg text-[color:var(--ink)]/82">{exercise.exercise}</p>
                </div>
                <div className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--ink)]/78">
                  Workbook drill
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.6rem] bg-[color:var(--surface)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                    The prompt
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--ink)]/84">{exercise.prompt}</p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.6rem] border border-[color:var(--line)] p-5">
                    <div className="flex items-center gap-3">
                      <PencilRuler className="h-5 w-5 text-[color:var(--accent)]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                        The friction
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{exercise.friction}</p>
                  </div>
                  <div className="rounded-[1.6rem] bg-[color:var(--ink)] p-5 text-[color:var(--paper)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:rgba(248,244,238,0.5)]">
                      The lesson
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[color:rgba(248,244,238,0.82)]">{exercise.takeaway}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="workbook-next-step" className="mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Keep going
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Use the cheat sheet while you apply the course
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              The workbook is for training judgement. The cheat sheet is for staying sane when you are back in real
              work and need the C.R.E.D. formula or the traffic-light model in front of you.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(23,65,63,0.96),rgba(23,33,39,0.96))] p-6 text-[color:var(--paper)] sm:p-8">
            <div className="space-y-3">
              {[
                'Open the cheat sheet before your next real prompt session.',
                'Use the first-use checklist before you send anything important.',
                'Go back into the course when you need the deeper lesson logic again.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[color:rgba(248,244,238,0.8)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/courses/ai-foundations-for-real-work/cheat-sheet"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface)]"
              >
                Open cheat sheet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/courses/ai-foundations-for-real-work/first-use-checklist"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white hover:bg-white/8"
              >
                Open checklist
              </Link>
            </div>
          </div>
        </section>

        <ContinueJourney page="courses" />
      </div>
    </div>
  );
};
