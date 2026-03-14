import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, Code2, Layers3, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { BUILD_PRINCIPLES, BUILD_STARTERS, BUILD_TRACKS } from '../constants';

const trackIcons = [Workflow, Code2, Layers3, Workflow];

export const RolePaths = () => {
  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>Build with AI | ABCAI</title>
        <meta
          name="description"
          content="Build AI workflows, internal tools, and lightweight products with tighter scope and better engineering discipline."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="build"
          quickNav={{
            title: 'Jump through the build path',
            items: [
              { id: 'build-tracks', label: 'Build tracks', description: 'See the paths for operators, developers, teams, and founders.' },
              { id: 'build-principles', label: 'Principles and starters', description: 'Jump to the rules and project ideas worth keeping.' },
              { id: 'build-support', label: 'Bring in help', description: 'Go to the support section when the build actually matters.' },
            ],
          }}
        />

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Build
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Build with AI without building nonsense.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              This section is for technical teams, operators, and ambitious builders. The goal is not to make something
              that demos well for 30 seconds. The goal is to build something useful, testable, and maintainable.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">What strong AI building looks like</h2>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'One clear use case with a visible owner.',
                'Prompt logic, app logic, and tool boundaries kept separate.',
                'Evaluation, review, and failure handling treated as first-class work.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="build-tracks" className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {BUILD_TRACKS.map((track, index) => {
            const Icon = trackIcons[index] ?? Workflow;

            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6"
              >
                <Icon className="h-7 w-7 text-[color:var(--accent)]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  {track.audience}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{track.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{track.summary}</p>
                <div className="mt-5 space-y-2">
                  {track.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 text-sm text-[color:var(--ink)]/78">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </section>

        <section id="build-principles" className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[color:var(--ink)] p-6 text-[color:var(--paper)] sm:p-8">
            <h2 className="text-3xl font-semibold tracking-[-0.05em]">Build principles that keep you honest</h2>
            <div className="mt-6 space-y-4">
              {BUILD_PRINCIPLES.map((principle) => (
                <div key={principle} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-[color:rgba(248,244,238,0.8)]">
                  {principle}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <h2 className="text-3xl font-semibold tracking-[-0.05em]">Starter projects worth shipping</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BUILD_STARTERS.map((starter) => (
                <div key={starter} className="rounded-2xl bg-[color:var(--surface-strong)] p-5 text-sm leading-6 text-[color:var(--ink)]/82">
                  {starter}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="build-support" className="mt-16 rounded-[2.5rem] border border-[color:var(--line)] bg-white p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                When to bring in help
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                If the build matters, treat it like product and engineering work
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
                The trap is building an impressive demo that collapses when data, permissions, edge cases, and users show
                up. ABCAI can help teams scope the right project, choose the right stack, and avoid fake agent drama.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/training"
                  className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
                >
                  Get build support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/readiness-test"
                  className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
                >
                  Check readiness first
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Common build traps</h3>
              <div className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--ink)]/82">
                {[
                  'Starting with agents before the single-step workflow works.',
                  'Skipping evaluation because the demo output looked good once.',
                  'Mixing up app state, prompt templates, and tool execution logic.',
                  'Letting the model touch sensitive data without a clear boundary.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--line)] bg-white px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContinueJourney page="build" />
      </div>
    </div>
  );
};
