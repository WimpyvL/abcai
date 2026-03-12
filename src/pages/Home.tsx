import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  Hammer,
  MessageSquareQuote,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney, JourneyCompass } from '../components/Journey';
import { useJourneyProfile } from '../components/JourneyProfile';
import { PageQuickNav } from '../components/PageQuickNav';
import {
  AUDIENCE_PATHS,
  FEATURED_GUIDES,
  LOCAL_REALITIES,
  PILLARS,
  SERVICE_OFFERS,
  SIGNATURE_QUESTIONS,
  TRUST_SIGNALS,
} from '../constants';

const pillarIcons = {
  Learn: BookOpen,
  Use: BriefcaseBusiness,
  Choose: Wrench,
  Build: Hammer,
};

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

      <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-[color:var(--line-strong)] bg-white/75 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Practical AI for South Africa first
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[color:var(--ink)] sm:text-6xl lg:text-7xl">
              Learn AI. Use AI. Build better.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
              ABCAI is the practical AI hub for people who want clear explanations, useful workflows, honest tool
              guidance, and credible next steps. No hype. No vague futurism. No random tool sludge.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/learn"
                onClick={() => setProfile('beginner')}
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
              >
                Start here
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/readiness-test"
                onClick={() => setProfile('business')}
                className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white/80 px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
              >
                Take the AI readiness test
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Clear starting points for beginners, business owners, teams, and builders',
                'South African framing grounded in budgets, bandwidth, and practical ROI',
                'Tool comparisons and prompt packs that answer real work questions',
                'Training, consulting, and implementation paths built into the product',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-[color:var(--line)] bg-white/65 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[color:var(--accent)]" />
                  <p className="text-sm leading-6 text-[color:var(--ink)]/78">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-[color:var(--line)] bg-[color:rgba(255,253,248,0.92)] p-6 shadow-[0_24px_80px_rgba(23,33,39,0.08)] sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  Start here in 3 moves
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Know what this product does</h2>
              </div>
              <Compass className="h-10 w-10 text-[color:var(--accent)]" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'Pick your starting path',
                  detail: 'Choose from beginner, business adoption, automation, tool selection, prompts, or build paths.',
                },
                {
                  title: 'Learn with practical framing',
                  detail: 'Every section focuses on useful tasks, realistic limits, and sensible next moves.',
                },
                {
                  title: 'Move into implementation',
                  detail: 'Use the readiness test, prompt library, and training offers to go from curiosity to action.',
                },
              ].map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-[color:var(--line)] bg-white p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-sm font-semibold text-[color:var(--accent-strong)]">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[color:var(--ink)]">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[color:var(--ink)] p-5 text-[color:var(--paper)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                    Built for practical adoption
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:rgba(248,244,238,0.82)]">
                    ABCAI is designed to grow into guides, assessments, prompt packs, consulting, workshops, and premium
                    resources without collapsing into a generic blog.
                  </p>
                </div>
                <Sparkles className="h-5 w-5 shrink-0 text-[color:var(--accent)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <JourneyCompass page="home" />
          <PageQuickNav
            title="Move through the homepage with intent"
            items={[
              { id: 'start-paths', label: 'Start paths', description: 'Jump straight to the entry points for beginners, teams, and builders.' },
              { id: 'signature-questions', label: 'Can AI do this?', description: 'See practical answers to the questions people actually ask.' },
              { id: 'featured-resources', label: 'Featured resources', description: 'Skip to the guides, comparisons, and prompt-driven resources.' },
              { id: 'commercial-pathways', label: 'Training and support', description: 'Go directly to workshops, reviews, and paid next steps.' },
            ]}
          />
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal.label} className="rounded-[1.75rem] border border-[color:var(--line)] bg-white/70 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                {signal.value}
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.04em]">{signal.label}</h2>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{signal.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="start-paths" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Start paths
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Clear entry points for real goals
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              The site should answer "where do I start?" in under a minute. These paths cut through the usual AI noise.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {AUDIENCE_PATHS.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[1.8rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_14px_40px_rgba(23,33,39,0.05)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{path.summary}</p>
                <p className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] px-4 py-3 text-sm leading-6 text-[color:var(--ink)]/82">
                  <span className="font-semibold">First move:</span> {path.firstMove}
                </p>
                <ul className="mt-5 space-y-2">
                  {path.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-[color:var(--ink)]/78">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
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
        </div>
      </section>

      <section id="signature-questions" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[color:var(--ink)] px-6 py-10 text-[color:var(--paper)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                Core structure
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                ABCAI is built around four practical pillars
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:rgba(248,244,238,0.72)]">
              This keeps the product sharp. Learning, application, choosing, and building are separate problems and
              should not be dumped into one vague page.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillarIcons[pillar.title as keyof typeof pillarIcons];

              return (
                <div key={pillar.id} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
                  <Icon className="h-8 w-8 text-[color:var(--accent)]" />
                  <div className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.48)]">
                    {pillar.label}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[color:rgba(248,244,238,0.78)]">{pillar.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-[color:rgba(248,244,238,0.74)]">
                    {pillar.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                <Link to={pillar.href} className="mt-6 inline-flex items-center text-sm font-semibold text-white">
                  {pillar.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="featured-resources" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Why ABCAI feels different
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Local reality matters more than AI theatre
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              ABCAI is not trying to impress people with neon robots and empty claims. It is trying to make adoption
              feel sane, useful, and worth the effort.
            </p>

            <div className="mt-6 space-y-3">
              {LOCAL_REALITIES.map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--ink)]/82">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {SIGNATURE_QUESTIONS.map((item) => (
              <div key={item.question} className="rounded-[2rem] border border-[color:var(--line)] bg-white/85 p-6">
                <div className="flex items-center gap-3">
                  <MessageSquareQuote className="h-5 w-5 text-[color:var(--accent)]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    Can AI do this?
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--ink)]/82">{item.shortAnswer}</p>
                <div className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
                  <p>
                    <span className="font-semibold text-[color:var(--ink)]">What AI can do:</span> {item.whatAiCanDo}
                  </p>
                  <p>
                    <span className="font-semibold text-[color:var(--ink)]">Where humans matter:</span> {item.whereHumansMatter}
                  </p>
                </div>
                <p className="mt-5 text-sm font-medium text-[color:var(--accent-strong)]">{item.recommendedPath}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commercial-pathways" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Featured resources
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Structured content, not generic blog filler
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              These are the kinds of entry points that can scale into deeper guides, premium resources, workshops, and
              recurring audience value.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {FEATURED_GUIDES.map((guide) => (
              <div key={guide.title} className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                    {guide.category}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]">{guide.format}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{guide.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-[color:var(--ink)]/78">
                  {guide.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
                <Link to={guide.href} className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]">
                  Open resource
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[color:var(--line)] bg-white/80 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Commercial pathways
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                The product already points toward paid value
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              Workshops, readiness reviews, prompt packs, and implementation help should feel like natural extensions of
              the platform, not last-minute CTAs bolted onto a landing page.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {SERVICE_OFFERS.map((offer) => (
              <div key={offer.title} className="rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[color:var(--accent)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    {offer.audience}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{offer.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{offer.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-[color:var(--ink)]/78">
                  {offer.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/training"
              onClick={() => setProfile('business')}
              className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
            >
              Book training or consulting
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/prompts"
              onClick={() => setProfile('beginner')}
              className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
            >
              Browse prompt library
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ContinueJourney page="home" />
        </div>
      </section>
    </div>
  );
};
