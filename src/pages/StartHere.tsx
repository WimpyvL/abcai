import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Compass, Route, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { FEATURED_COURSES } from '../courseData';
import { AUDIENCE_PATHS, FEATURED_GUIDES } from '../constants';

const getProfileForPath = (path: string) => {
  if (path === '/build') {
    return 'builder';
  }

  if (path === '/learn' || path === '/prompts' || path.startsWith('/courses')) {
    return 'beginner';
  }

  return 'business';
};

export const StartHere = () => {
  const { setProfile } = useJourneyProfile();

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>Learn AI | ABCAI</title>
        <meta
          name="description"
          content="Start learning AI with plain-language guidance, practical first steps, and clear routes based on your goals."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="learn"
          quickNav={{
            title: 'Jump to the right learning layer',
            items: [
              { id: 'learning-paths', label: 'Starting paths', description: 'Go straight to the entry path that matches your current goal.' },
              { id: 'first-week-plan', label: 'First-week plan', description: 'See the clean sequence for your first useful week with AI.' },
              { id: 'structured-courses', label: 'Structured courses', description: 'Jump to the guided tracks if you want more than browsing.' },
              { id: 'beginner-cautions', label: 'What to avoid', description: 'Skip to the mistakes that catch beginners fastest.' },
              { id: 'learn-next', label: 'Learn next', description: 'Move into the next resources once the basics are clear.' },
            ],
          }}
        />

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Learn
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">Start with clarity, not confusion.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              If AI feels noisy, that is because most people explain it badly. This section turns the chaos into clean
              starting paths, practical first steps, and an honest view of what AI can and cannot do.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6">
            <div className="flex items-center gap-3">
              <Compass className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-xl font-semibold tracking-[-0.04em]">What good onboarding should do</h2>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'Explain the language without making people feel stupid.',
                'Show realistic use cases before advanced tooling.',
                'Give the user one obvious next move for their context.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <section id="learning-paths" className="mt-12">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AUDIENCE_PATHS.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_14px_40px_rgba(23,33,39,0.05)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  {path.id}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{path.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{path.summary}</p>
                <div className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/82">
                  <span className="font-semibold">Best first move:</span> {path.firstMove}
                </div>
                <div className="mt-5 space-y-2">
                  {path.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 text-sm text-[color:var(--ink)]/78">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={path.href}
                  onClick={() => setProfile(path.journeyProfile ?? 'beginner')}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
                >
                  Open this path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="first-week-plan" className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[color:var(--ink)] p-6 text-[color:var(--paper)] sm:p-8">
            <div className="flex items-center gap-3">
              <Route className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">A sane first-week learning path</h2>
            </div>
            <div className="mt-6 space-y-5">
              {[
                {
                  step: 'Day 1',
                  title: 'Understand what AI actually is',
                  detail: 'Focus on pattern prediction, useful output, and limits. Skip the futurist sermon.',
                },
                {
                  step: 'Day 2',
                  title: 'Learn to give better instructions',
                  detail: 'Good prompting is mostly good briefing: context, constraints, examples, and output format.',
                },
                {
                  step: 'Day 3',
                  title: 'Try three useful everyday tasks',
                  detail: 'Summaries, drafting, and planning are the easiest honest wins.',
                },
                {
                  step: 'Day 4+',
                  title: 'Only then start comparing tools',
                  detail: 'If you do this first, you buy subscriptions for problems you have not defined yet.',
                },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.48)]">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:rgba(248,244,238,0.76)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="beginner-cautions" className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">What beginners should be careful about</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Do not trust fluency',
                  detail: 'AI sounding confident tells you nothing about whether it is correct.',
                },
                {
                  title: 'Do not feed it sensitive data casually',
                  detail: 'Privacy and confidentiality rules still apply, especially at work.',
                },
                {
                  title: 'Do not confuse drafts with finished work',
                  detail: 'AI is often best at the first pass, not the final answer.',
                },
                {
                  title: 'Do not start with the fanciest tool',
                  detail: 'Start with the clearest task. Tool choice gets easier after that.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-[color:var(--surface-strong)] p-5">
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="structured-courses" className="mt-16 rounded-[2.2rem] border border-[color:var(--line)] bg-white/84 p-6 shadow-[0_20px_52px_rgba(23,33,39,0.05)] sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Structured courses
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                If you want more than browsing, take a guided track
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              ABCAI courses are for people who want sequence, exercises, and a clean path from understanding into real
              use. No content swamp. Just deliberate progression.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {FEATURED_COURSES.slice(0, 2).map((course) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                onClick={() => setProfile(course.journeyProfile)}
                className="group rounded-[1.9rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition-colors hover:border-[color:var(--accent)] hover:bg-white"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  <span>{course.level}</span>
                  <span className="text-[color:var(--muted)]">•</span>
                  <span>{course.duration}</span>
                  <span className="text-[color:var(--muted)]">•</span>
                  <span>{course.format}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{course.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{course.summary}</p>
                <div className="mt-5 rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-[color:var(--ink)]/82">
                  {course.highlight}
                </div>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]">
                  Open course
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/courses"
            onClick={() => setProfile('beginner')}
            className="mt-8 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
          >
            Browse the full course catalog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>

        <section id="learn-next" className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Learn next
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Follow the tracks that actually reduce overwhelm
              </h2>
            </div>
            <Link
              to="/choose"
              onClick={() => setProfile('beginner')}
              className="inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
            >
              Compare tools next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {FEATURED_GUIDES.slice(0, 3).map((guide) => (
              <Link
                key={guide.title}
                to={guide.href}
                onClick={() => setProfile(getProfileForPath(guide.href))}
                className="group rounded-[2rem] border border-[color:var(--line)] bg-white p-6 transition-colors hover:border-[color:var(--accent)] hover:bg-[color:var(--surface)]"
              >
                <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  {guide.format}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{guide.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-[color:var(--ink)]/78">
                  {guide.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]">
                  Open resource
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ContinueJourney page="learn" />
      </div>
    </div>
  );
};
