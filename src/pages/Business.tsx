import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ShieldAlert, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney, JourneyCompass } from '../components/Journey';
import { PageQuickNav } from '../components/PageQuickNav';
import { IMPLEMENTATION_PHASES, SERVICE_OFFERS, USE_CASES } from '../constants';

export const Business = () => {
  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>Use AI in your business | ABCAI</title>
        <meta
          name="description"
          content="See practical AI use cases, implementation phases, and business adoption guidance for South African teams."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <JourneyCompass page="use" />
        <PageQuickNav
          title="Jump to the business layer you need"
          items={[
            { id: 'business-use-cases', label: 'Use cases', description: 'Go straight to practical examples by industry and workflow.' },
            { id: 'implementation-sequence', label: 'Implementation sequence', description: 'See the adoption order that avoids expensive nonsense.' },
            { id: 'business-cautions', label: 'What to be careful about', description: 'Jump to the privacy, review, and ownership risks.' },
            { id: 'business-support', label: 'When to get help', description: 'See when training, reviews, or support actually make sense.' },
          ]}
        />

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Use
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">Use AI where it earns its place.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              Businesses do not need more AI ideas. They need fewer, better ones. ABCAI helps owners and teams focus on
              repeatable work, realistic ROI, clear risks, and adoption that still makes sense three months later.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">What most businesses get wrong</h2>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'They buy tools before defining the workflow.',
                'They expect AI to fix a broken process instead of exposing it.',
                'They skip training and then blame the tool for weak adoption.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="business-use-cases" className="mt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Use cases
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Practical examples by business context
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              These examples focus on real team pain: admin drag, response delays, content bottlenecks, and information
              chaos.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6"
              >
                <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  {useCase.industry}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">Where AI can help</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  <span className="font-semibold text-[color:var(--ink)]">Typical problem:</span> {useCase.problem}
                </p>
                <div className="mt-5 space-y-2 text-sm text-[color:var(--ink)]/78">
                  {useCase.aiCanImprove.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/82">
                  <span className="font-semibold">Example workflow:</span> {useCase.exampleWorkflow}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {useCase.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--ink)]/72">
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-[color:var(--accent-strong)]">{useCase.caution}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="implementation-sequence" className="mt-16 rounded-[2.5rem] bg-[color:var(--ink)] px-6 py-10 text-[color:var(--paper)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                Implementation sequence
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                How sensible AI adoption usually unfolds
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:rgba(248,244,238,0.72)]">
              This sequence matters. Skipping directly to scale or automation is how teams create expensive nonsense.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {IMPLEMENTATION_PHASES.map((phase) => (
              <div key={phase.phase} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.48)]">
                  {phase.phase}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{phase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:rgba(248,244,238,0.78)]">{phase.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div id="business-cautions" className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">What to be careful about</h2>
            </div>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'Privacy and confidentiality',
                  detail: 'Public tools are not the place for sensitive client, legal, HR, or medical information unless your setup explicitly allows it.',
                },
                {
                  title: 'Hallucinations and false confidence',
                  detail: 'If the workflow can create legal, financial, or reputational damage, humans still own the final answer.',
                },
                {
                  title: 'Undefined ownership',
                  detail: 'Someone must own the workflow, the prompts, the review policy, and the success metrics.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-[color:var(--surface-strong)] p-5">
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="business-support" className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">When to move from learning to paid help</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SERVICE_OFFERS.map((offer) => (
                <div key={offer.title} className="rounded-2xl border border-[color:var(--line)] p-5">
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">{offer.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{offer.summary}</p>
                  <p className="mt-3 text-sm font-medium text-[color:var(--ink)]/82">{offer.audience}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/readiness-test"
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
              >
                Take the readiness test
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/training"
                className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
              >
                Book a workshop or review
              </Link>
            </div>
          </div>
        </section>

        <ContinueJourney page="use" />
      </div>
    </div>
  );
};
