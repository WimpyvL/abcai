import { useState } from 'react';
import { ChevronDown, ChevronUp, MoveDownRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import { cn } from '../lib/utils';

export interface PageQuickNavItem {
  id: string;
  label: string;
  description: string;
}

export interface PageQuickNavProps {
  label?: string;
  title: string;
  items: PageQuickNavItem[];
  className?: string;
}

export const PageQuickNav = ({ label = 'Quick jumps', title, items, className }: PageQuickNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={cn('mb-4 sm:mb-5', className)}>
      <div className="flex justify-start sm:justify-end">
        <div className="w-full sm:w-auto rounded-[1.6rem] border border-[color:var(--line)] bg-white/88 px-3 py-3 shadow-[0_10px_24px_rgba(23,33,39,0.05)] sm:rounded-full sm:px-2 sm:py-2">
          <div className="flex items-center justify-between gap-3 sm:flex-wrap sm:justify-start">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="rounded-full bg-[color:var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                {label}
              </span>
              <span className="rounded-full border border-[color:var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[color:var(--ink)]">
                {items.length} jumps
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-4 py-1.5 text-sm font-semibold text-[color:var(--ink)] hover:border-[color:var(--accent)] hover:bg-[color:var(--surface)]"
            >
              {isOpen ? 'Hide' : 'Open'}
              {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 ml-auto max-w-4xl rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-3.5 shadow-[0_18px_42px_rgba(23,33,39,0.08)] sm:mt-3 sm:rounded-[1.4rem] sm:p-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="text-base font-semibold tracking-[-0.03em] text-[color:var(--ink)]">{title}</h2>
            <p className="text-sm leading-6 text-[color:var(--muted)]">Jump straight to the part you want.</p>
          </div>

          <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-[1rem] border border-[color:var(--line)] bg-white px-4 py-3 text-left hover:border-[color:var(--accent)] hover:bg-[color:var(--surface)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-[color:var(--ink)]">{item.label}</span>
                  <MoveDownRight className="h-4 w-4 text-[color:var(--accent-strong)]" />
                </div>
                <p className="mt-1 text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
