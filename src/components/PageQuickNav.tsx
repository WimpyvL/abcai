import { MoveDownRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

interface PageQuickNavItem {
  id: string;
  label: string;
  description: string;
}

interface PageQuickNavProps {
  label?: string;
  title: string;
  items: PageQuickNavItem[];
}

export const PageQuickNav = ({ label = 'Quick jumps', title, items }: PageQuickNavProps) => (
  <section className="mb-12 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 sm:p-6">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">{label}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{title}</h2>
      </div>
      <p className="max-w-xl text-sm leading-6 text-[color:var(--muted)]">
        Jump straight to the part you want without losing the flow of the page.
      </p>
    </div>

    <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToSection(item.id)}
          className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-4 text-left hover:border-[color:var(--accent)] hover:bg-[color:var(--surface)]"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-[color:var(--ink)]">{item.label}</span>
            <MoveDownRight className="h-4 w-4 text-[color:var(--accent-strong)]" />
          </div>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.description}</p>
        </button>
      ))}
    </div>
  </section>
);
