import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Hammer,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useJourneyProfile } from '../components/JourneyProfile';
import { AUDIENCE_PATHS, FEATURED_GUIDES, SIGNATURE_QUESTIONS } from '../constants';
import { cn } from '../lib/utils';

const HOME_PATHS = AUDIENCE_PATHS.filter((path) => ['new', 'business', 'automate', 'build'].includes(path.id));
const STARTING_POINTS = FEATURED_GUIDES.filter((guide) =>
  ['Start here', 'Business', 'Tools', 'Prompts'].includes(guide.category)
);
const PROOF_POINTS = SIGNATURE_QUESTIONS.slice(0, 3);

const pathIcons = {
  new: BookOpen,
  business: BriefcaseBusiness,
  automate: Compass,
  build: Hammer,
};

const startingPointIcons = {
  'Start here': BookOpen,
  Business: BriefcaseBusiness,
  Tools: Wrench,
  Prompts: MessageSquareQuote,
};

const WHY_ABCAI = [
  {
    title: 'Practical before performative',
    detail: 'ABCAI starts with useful work, not AI theatre. The aim is better decisions, clearer workflows, and honest outcomes.',
  },
  {
    title: 'Built for real constraints',
    detail: 'It respects budget pressure, small teams, data concerns, bandwidth limits, and the need to prove value fast.',
  },
  {
    title: 'Guided instead of overwhelming',
    detail: 'People get a strong starting point, a sensible path, and deeper layers only when they need them.',
  },
];

const HERO_SIGNALS = [
  'Clear AI learning without hype',
  'Use-case-first tools and prompts',
  'Readiness, training, and implementation paths',
];

const HERO_STEPS = [
  {
    label: 'Understand',
    title: 'What AI is actually useful for',
    detail: 'Get the basics, limits, and language without being buried in jargon.',
  },
  {
    label: 'Apply',
    title: 'Find the right next move',
    detail: 'Choose a path for learning, business use, automation, tools, or building.',
  },
  {
    label: 'Advance',
    title: 'Move toward real implementation',
    detail: 'Use guides, prompts, and readiness checks to turn curiosity into operating value.',
  },
];

const PREVIEW_LINKS = [
  { label: 'Learn', path: '/learn' },
  { label: 'Use', path: '/use' },
  { label: 'Choose', path: '/choose' },
  { label: 'Build', path: '/build' },
];

export const Home = () => {
  const { setProfile } = useJourneyProfile();

  return (
    <div className="pt-24">
      <Helmet>
        <title>ABCAI | Practical AI learning and adoption for South Africa</title>
        <meta
          name="description"
          content="ABCAI helps South Africans learn AI clearly, use it practically, choose tools wisely, and build better workflows."
        />
      </Helmet>

      <section className="relative overflow-hidden px-4 pb-18 pt-10 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_20%_10%,rgba(203,107,43,0.16),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(23,65,63,0.12),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="inline-flex rounded-full border border-[color:var(--line-strong)] bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Practical AI for South Africa first
            </div>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-[color:var(--ink)] sm:text-6xl lg:text-[5.4rem]">
              Learn AI.
              <span className="block font-serif text-[0.95em] font-semibold italic tracking-[-0.04em] text-[color:var(--forest)]">
                Use it well.
              </span>
              <span className="block">Build better.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
              ABCAI is a guided AI learning and adoption platform for people who want clearer understanding, better
              tools, and useful results at work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/learn"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] shadow-[0_14px_28px_rgba(23,33,39,0.16)] hover:bg-[color:var(--accent-strong)]"
              >
                Start learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/readiness-test"
                onClick={() => setProfile('business')}
                className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white/86 px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
              >
                Take the readiness test
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {HERO_SIGNALS.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[color:var(--line)] bg-white/70 px-4 py-2 text-sm text-[color:var(--ink)]/78 shadow-[0_10px_24px_rgba(23,33,39,0.04)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -right-8 top-8 h-32 w-32 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
            <div className="absolute left-10 top-24 h-28 w-28 rounded-full bg-[color:var(--forest-soft)] blur-3xl" />
            <div className="relative rounded-[2.25rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,253,248,0.96),rgba(248,244,238,0.92))] p-6 shadow-[0_28px_80px_rgba(23,33,39,0.12)] sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    Guided platform
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[color:var(--ink)]">
                    What starts here
                  </h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--ink)] text-[color:var(--paper)]">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {HERO_STEPS.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      'rounded-[1.5rem] border p-4',
                      index === 1
                        ? 'border-[color:rgba(23,33,39,0.14)] bg-[color:var(--ink)] text-[color:var(--paper)]'
                        : 'border-[color:var(--line)] bg-white/92 text-[color:var(--ink)]'
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold uppercase tracking-[0.14em]',
                          index === 1
                            ? 'bg-white/10 text-[color:rgba(248,244,238,0.7)]'
                            : 'bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)]'
                        )}
                      >
                        0{index + 1}
                      </div>
                      <div>
                        <p
                          className={cn(
                            'text-[11px] font-semibold uppercase tracking-[0.18em]',
                            index === 1 ? 'text-[color:rgba(248,244,238,0.52)]' : 'text-[color:var(--accent-strong)]'
                          )}
                        >
                          {item.label}
                        </p>
                        <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                        <p
                          className={cn(
                            'mt-2 text-sm leading-6',
                            index === 1 ? 'text-[color:rgba(248,244,238,0.78)]' : 'text-[color:var(--muted)]'
                          )}
                        >
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.7rem] border border-[color:var(--line)] bg-white/88 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  Explore the platform
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {PREVIEW_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 text-sm font-medium text-[color:var(--ink)] hover:border-[color:var(--accent)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-[color:var(--line)] bg-white/82 p-6 shadow-[0_22px_60px_rgba(23,33,39,0.06)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Choose your path
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Start where your real goal lives
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              The homepage should not ask people to decode the whole platform. It should point them to the right first
              click with confidence.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {HOME_PATHS.map((path, index) => {
              const Icon = pathIcons[path.id as keyof typeof pathIcons] ?? Compass;

              return (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={path.href}
                    onClick={() => setProfile(path.journeyProfile ?? 'beginner')}
                    className="group block h-full rounded-[1.9rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,238,0.9))] p-6 hover:border-[color:var(--accent)] hover:shadow-[0_18px_42px_rgba(23,33,39,0.08)]"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-[color:var(--accent)]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">{path.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{path.summary}</p>
                    <p className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] px-4 py-3 text-sm leading-6 text-[color:var(--ink)]/82">
                      {path.firstMove}
                    </p>
                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]">
                      Open this path
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="rounded-[2.2rem] bg-[color:var(--ink)] p-8 text-[color:var(--paper)] shadow-[0_26px_72px_rgba(23,33,39,0.14)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
              Why ABCAI
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Clearer than hype. More useful than noise.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[color:rgba(248,244,238,0.78)]">
              ABCAI is built for people who want AI explained properly and applied responsibly. It is not trying to be
              an endless feed of AI information. It is trying to help people make good decisions.
            </p>

            <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[color:var(--accent)]" />
                <p className="text-sm font-semibold text-white">Built for practical trust</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[color:rgba(248,244,238,0.72)]">
                South African-first framing, realistic ROI thinking, and honest limits around what AI should and should
                not be trusted to do.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {WHY_ABCAI.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06 }}
                className={cn(
                  'rounded-[1.9rem] border p-6 shadow-[0_18px_42px_rgba(23,33,39,0.05)]',
                  index === 1
                    ? 'border-[color:rgba(23,33,39,0.14)] bg-[color:var(--surface-strong)]'
                    : 'border-[color:var(--line)] bg-white/86'
                )}
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--muted)]">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Featured starting points
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                A few strong places to begin
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              These are curated entry points, not a full content directory. The goal is movement, not overload.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <Link
              to={STARTING_POINTS[0]?.href ?? '/learn'}
              className="group rounded-[2.2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(239,229,217,0.88))] p-7 shadow-[0_22px_56px_rgba(23,33,39,0.06)] hover:border-[color:var(--accent)]"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-full bg-[color:var(--ink)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--paper)]">
                  Best first stop
                </div>
                <BookOpen className="h-6 w-6 text-[color:var(--accent)]" />
              </div>
              <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-[-0.05em]">
                {STARTING_POINTS[0]?.title ?? 'AI basics without the nonsense'}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                {STARTING_POINTS[0]?.summary ??
                  'A grounded primer on what AI is, what it does well, where it lies, and how to start safely.'}
              </p>
              <div className="mt-7 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]">
                Open the guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <div className="grid gap-4 sm:grid-cols-2">
              {STARTING_POINTS.slice(1).map((guide) => {
                const Icon = startingPointIcons[guide.category as keyof typeof startingPointIcons] ?? Compass;

                return (
                  <Link
                    key={guide.title}
                    to={guide.href}
                    className="group rounded-[1.9rem] border border-[color:var(--line)] bg-white/86 p-6 hover:border-[color:var(--accent)] hover:shadow-[0_18px_42px_rgba(23,33,39,0.06)]"
                  >
                    <Icon className="h-6 w-6 text-[color:var(--accent)]" />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                      {guide.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{guide.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{guide.summary}</p>
                    <div className="mt-5 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]">
                      Open resource
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[color:var(--ink)] px-6 py-10 text-[color:var(--paper)] shadow-[0_28px_80px_rgba(23,33,39,0.16)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                Proof of usefulness
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                The questions people actually need answered
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:rgba(248,244,238,0.72)]">
              ABCAI works best when it answers real work questions clearly and calmly, without pretending AI is magic.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {PROOF_POINTS.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06 }}
                className={cn(
                  'rounded-[1.9rem] border p-6',
                  index === 1 ? 'border-white/12 bg-white/10' : 'border-white/10 bg-white/5'
                )}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:rgba(248,244,238,0.48)]">
                  Can AI do this?
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{item.question}</h3>
                <p className="mt-4 text-sm leading-6 text-[color:rgba(248,244,238,0.8)]">{item.shortAnswer}</p>
                <div className="mt-5 rounded-2xl bg-white/6 px-4 py-3 text-sm leading-6 text-[color:rgba(248,244,238,0.74)]">
                  {item.recommendedPath}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="rounded-[2.4rem] border border-[color:var(--line)] bg-white/88 p-8 shadow-[0_24px_64px_rgba(23,33,39,0.08)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Next step
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              If you want a clear next move, start with readiness.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
              The readiness test is the fastest way to work out whether you need learning, workflow cleanup, a pilot, or
              more serious implementation support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/readiness-test"
                onClick={() => setProfile('business')}
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
              >
                Take the readiness test
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/training"
                onClick={() => setProfile('business')}
                className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
              >
                Talk to ABCAI
              </Link>
            </div>
          </div>

          <div className="rounded-[2.4rem] bg-[linear-gradient(180deg,rgba(23,33,39,0.96),rgba(23,65,63,0.96))] p-8 text-[color:var(--paper)] shadow-[0_28px_72px_rgba(23,33,39,0.16)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
              Good for
            </p>
            <div className="mt-5 space-y-3">
              {[
                'Business owners who want a realistic starting point',
                'Teams that need training before they buy more software',
                'Builders who want to ship something useful without agent theatre',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-[color:rgba(248,244,238,0.8)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
