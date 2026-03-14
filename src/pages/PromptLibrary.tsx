import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Copy, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContinueJourney } from '../components/Journey';
import { PageUtilityRail } from '../components/PageUtilityRail';
import { PROMPTS } from '../constants';
import { cn } from '../lib/utils';

export const PromptLibrary = () => {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const categories = ['All', ...new Set(PROMPTS.map((prompt) => prompt.category))];

  const filteredPrompts = PROMPTS.filter((prompt) => {
    const query = search.toLowerCase();
    const matchesSearch =
      prompt.title.toLowerCase().includes(query) ||
      prompt.purpose.toLowerCase().includes(query) ||
      prompt.whenToUse.toLowerCase().includes(query) ||
      prompt.category.toLowerCase().includes(query);
    const matchesCategory = category === 'All' || prompt.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleCopy = async (id: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <Helmet>
        <title>Prompt library | ABCAI</title>
        <meta
          name="description"
          content="Use outcome-based AI prompts for sales, email, planning, support, operations, coding, and study."
        />
      </Helmet>

      <div className="mx-auto max-w-7xl">
        <PageUtilityRail
          journeyPage="prompts"
          quickNav={{
            title: 'Jump to the prompt layer you need',
            items: [
              { id: 'prompt-filters', label: 'Search and filters', description: 'Jump to the controls and narrow the library fast.' },
              { id: 'prompt-results', label: 'Prompt results', description: 'Skip straight to the working prompts.' },
              { id: 'prompt-packs', label: 'Prompt packs', description: 'Move to the team enablement and packaging section.' },
            ],
          }}
        />

        <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
              Prompts
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Prompts that produce work, not fluff.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
              This library is organized by outcome. Each prompt exists to solve a practical task, with clear inputs,
              expected outputs, and a note on how to use it without becoming dependent on guesswork.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">What makes a prompt useful</h2>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--ink)]/82">
              {[
                'It starts with a job-to-be-done, not a cool-sounding trick.',
                'It tells the model what context, format, and constraints matter.',
                'It is reviewed, adapted, and turned into a repeatable system over time.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </header>

        <section id="prompt-filters" className="mt-12 rounded-[2rem] border border-[color:var(--line)] bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted)]" />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by outcome, prompt type, or task"
                className="w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[color:var(--accent)]"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={cn(
                    'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium',
                    category === item
                      ? 'bg-[color:var(--ink)] text-[color:var(--paper)]'
                      : 'bg-[color:var(--surface-strong)] text-[color:var(--ink)] hover:bg-[color:var(--surface)]'
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="prompt-results" className="mt-8 grid gap-5 lg:grid-cols-2">
          {filteredPrompts.map((prompt, index) => (
            <motion.article
              key={prompt.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                    {prompt.category}
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{prompt.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(prompt.id, prompt.prompt)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
                >
                  {copiedId === prompt.id ? <Check className="h-4 w-4 text-[color:var(--accent-strong)]" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{prompt.purpose}</p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                    When to use it
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ink)]/82">{prompt.whenToUse}</p>
                </div>
                <div className="rounded-2xl bg-[color:var(--surface-strong)] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                    Expected output
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ink)]/82">{prompt.output}</p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  Prompt
                </p>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[color:var(--ink)]/82">{prompt.prompt}</p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  Inputs to customize
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {prompt.inputs.map((input) => (
                    <span key={input} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--ink)]/72">
                      {input}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-dashed border-[color:var(--line-strong)] p-4 text-sm leading-6 text-[color:var(--ink)]/78">
                <span className="font-semibold text-[color:var(--ink)]">Practical tip:</span> {prompt.tip}
              </div>
            </motion.article>
          ))}
        </section>

        {filteredPrompts.length === 0 && (
          <div className="mt-8 rounded-[2rem] border border-dashed border-[color:var(--line-strong)] bg-white/70 p-8 text-center">
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">No prompts matched that search.</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Try a broader category like Sales, Operations, or Planning.
            </p>
          </div>
        )}

        <section id="prompt-packs" className="mt-16 rounded-[2.5rem] bg-[color:var(--ink)] px-6 py-10 text-[color:var(--paper)] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(248,244,238,0.5)]">
                Prompt packs and team enablement
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Turn useful prompts into repeatable operating assets
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:rgba(248,244,238,0.78)]">
                The real value is not copying one prompt once. It is turning good prompts into playbooks, team standards,
                onboarding material, and repeatable workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/training"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--ink)] hover:bg-[color:var(--surface-strong)]"
                >
                  Build a team prompt pack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="mailto:hello@abcai.co.za?subject=ABCAI%20Prompt%20Pack%20Request"
                  className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Request prompt support
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">Good prompt systems include</h3>
              <div className="mt-6 space-y-3 text-sm leading-6 text-[color:rgba(248,244,238,0.78)]">
                {[
                  'A clear use case and owner',
                  'Approved inputs and data boundaries',
                  'Example outputs worth keeping',
                  'Review rules for facts, tone, and risk',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContinueJourney page="prompts" />
      </div>
    </div>
  );
};
