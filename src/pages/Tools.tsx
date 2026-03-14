import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ExternalLink, Search, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { COMPARISONS, TOOLS } from '../constants';
import { cn } from '../lib/utils';

export const Tools = () => {
  const [search, setSearch] = React.useState('');
  const [selectedUseCase, setSelectedUseCase] = React.useState('All use cases');

  const useCases = ['All use cases', ...new Set(TOOLS.map((tool) => tool.useCase))];

  const filteredTools = TOOLS.filter((tool) => {
    const query = search.toLowerCase();
    const matchesSearch =
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.bestFor.toLowerCase().includes(query) ||
      tool.useCase.toLowerCase().includes(query);
    const matchesUseCase = selectedUseCase === 'All use cases' || tool.useCase === selectedUseCase;

    return matchesSearch && matchesUseCase;
  });

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>Choose AI tools | ABCAI</title>
        <meta
          name="description"
          content="Choose AI tools by real use case, pricing, fit, and tradeoffs instead of hype-driven lists."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="choose"
          quickNav={{
            title: 'Jump through the tool decision flow',
            items: [
              { id: 'tool-comparisons', label: 'Head-to-head', description: 'See the fast comparisons for common tool debates.' },
              { id: 'tool-directory', label: 'Tool directory', description: 'Skip to the searchable list and start filtering.' },
              { id: 'tool-next-move', label: 'Next move', description: 'Jump to what comes after tool choice.' },
            ],
          }}
        />

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Choose
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">Choose tools by job, not hype.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              The AI tool market is crowded and noisy. ABCAI compares tools in plain English so you can decide based on
              use case, budget, team fit, and where the hidden cost lives.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[color:var(--accent)]" />
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">Three rules for tool decisions</h2>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'Define the task before choosing the tool.',
                'Prefer one tool that covers real work over five overlapping subscriptions.',
                'Ask what review, privacy, and setup cost comes with the tool.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="tool-comparisons" className="mt-12 rounded-[2.5rem] bg-[color:var(--ink)] px-6 py-10 text-[color:var(--paper)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                Head-to-head
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Fast decisions for common tool debates
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:rgba(248,244,238,0.72)]">
              These are decision shortcuts, not absolute truths. The best tool is the one that fits the work and the
              team using it.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {COMPARISONS.map((comparison) => (
              <div key={comparison.category} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.48)]">
                  {comparison.category}
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:rgba(248,244,238,0.82)]">{comparison.decision}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[comparison.toolA, comparison.toolB].map((tool) => (
                    <div key={tool.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <h3 className="text-lg font-semibold">{tool.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                        {tool.strength}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[color:rgba(248,244,238,0.72)]">{tool.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tool-directory" className="mt-16">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" />
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by tool, use case, or what you need help with"
                  className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[color:var(--accent)]"
                />
              </div>
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                <div className="inline-flex items-center rounded-full border border-[color:var(--line)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Use case
                </div>
                {useCases.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedUseCase(item)}
                    className={cn(
                      'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium',
                      selectedUseCase === item
                        ? 'bg-[color:var(--ink)] text-[color:var(--paper)]'
                        : 'bg-[color:var(--surface-strong)] text-[color:var(--ink)] hover:bg-[color:var(--surface)]'
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                      {tool.useCase}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{tool.name}</h2>
                  </div>
                  <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--ink)]/72">
                    {tool.pricing}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{tool.description}</p>
                <div className="mt-5 rounded-2xl bg-[color:var(--surface-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/82">
                  <span className="font-semibold">Best for:</span> {tool.bestFor}
                </div>
                <div className="mt-4 text-sm leading-6 text-[color:var(--ink)]/78">
                  <span className="font-semibold">Why it fits:</span> {tool.fit}
                </div>
                <div className="mt-3 text-sm leading-6 text-[color:var(--accent-strong)]">
                  <span className="font-semibold">Watch out for:</span> {tool.caution}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    {tool.category}
                  </span>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[color:var(--accent-strong)]"
                  >
                    Visit tool
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="mt-8 rounded-[2rem] border border-dashed border-[color:var(--line-strong)] bg-white/70 p-8 text-center">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">No tools matched that filter.</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                Try a different use case, or search for the job you want done instead of the tool name.
              </p>
            </div>
          )}
        </section>

        <section id="tool-next-move" className="mt-16 rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                Next move
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                After tool choice, focus on usage quality
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
              Buying the tool is the easy part. The harder part is prompting well, defining good outputs, and keeping
              review responsibility visible.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/prompts"
              className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3.5 text-sm font-semibold text-[color:var(--paper)] hover:bg-[color:var(--accent-strong)]"
            >
              Browse prompt library
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center rounded-full border border-[color:var(--line-strong)] bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
            >
              Get team help choosing a stack
            </Link>
          </div>
        </section>

        <ContinueJourney page="choose" />
      </div>
    </div>
  );
};
