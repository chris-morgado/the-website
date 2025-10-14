// components/experience/ExperienceTimeline.tsx
import { ReactNode } from "react";

type ExperienceItem = {
  icon?: ReactNode;
  date: string;
  title: string;
  team?: string;
  company: string;
  location: string;
  blurb: string;
  accent?: string;
};

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <section className="mx-auto max-w-4xl px-4">
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">Experience</h2>
        <p className="mt-3 text-neutral-400">
          My leadership and work experience over the past few years.
        </p>
      </header>

      {/* Flowbite timeline */}
      <ol className="relative border-s-2 border-neutral-700/70 ms-4 list-none">
        {items.map((it, i) => (
          <li key={i} className="mb-10 ps-8 relative">
            {/* dot on the rail */}
            <span className="absolute -start-3 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 ring-8 ring-neutral-900" />

            <time className="mb-1 block text-sm font-medium leading-none text-cyan-300/90">
              {it.date}
            </time>

            <h3 className={`text-2xl font-extrabold leading-tight ${it.accent ?? "text-emerald-400"}`}>
              {it.title}
            </h3>

            {it.team && (
              <div className="mt-1 text-[0.9rem] font-semibold uppercase tracking-wide text-neutral-300">
                {it.team}
              </div>
            )}

            <div className="text-[0.95rem] italic text-neutral-300">
              {it.company} – {it.location}
            </div>

            <p className="mt-3 max-w-[60ch] text-neutral-200">{it.blurb}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
