import React from "react";
import { ExperienceItem } from "./ExperienceTimeline";

export function ExperienceEntry({ item }: { item: ExperienceItem }) {
  const blurbLines = item.blurb
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="group grid grid-cols-[140px_1fr] gap-6 py-8 px-6 rounded-xl border-t border-white/5 hover:border-white/0 hover:bg-white/5 transition-all duration-200 cursor-default group-hover/list:opacity-40 hover:!opacity-100">
      <div className="pt-1 text-xs font-semibold text-neutral-500 uppercase tracking-wider leading-snug">
        {item.date}
      </div>

      <div>
        <h3 className="font-semibold text-neutral-200 leading-tight">
          {item.title}
          {" · "}
          <span className="text-neutral-300">{item.company}</span>
        </h3>

        {item.team?.trim() ? (
          <p className="text-sm text-neutral-500 mt-0.5">{item.team}</p>
        ) : null}

        {item.location ? (
          <p className="text-xs text-neutral-600 mt-0.5">{item.location}</p>
        ) : null}

        <div className="mt-3 text-sm text-neutral-400 leading-relaxed space-y-2">
          {blurbLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {item.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
