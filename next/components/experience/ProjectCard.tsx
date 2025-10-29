import Link from "next/link";
import { ReactNode } from "react";

export type ProjectItem = {
  icon?: ReactNode;
  title: string;
  blurb: string;
  tags?: string[];
  accent?: string;
};


export const ProjectCard: React.FC<ProjectItem> = (project) => {
  return (
    <>
      <div className="project-card">


      </div>
    </>
  );
}

export function ProjectScrollCard({ project }: {project: ProjectItem}) {
  const blurbLines = project.blurb.split(/\r?\n/).map(s => s.trim()).filter(Boolean);

  return (
    <div className="relative w-full max-w-3xl">
      <div
        className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
        style={{ background: project.accent || "rgb(16 185 129)" /* emerald-500 */ }}
      />
      <div
        className="
		relative
		rounded-2xl
		border border-white/10
		bg-gradient-to-b from-[#121212] to-[#0a0a0a]
		backdrop-blur
		p-4 sm:p-6 pl-6
		shadow-[0_1px_0_0_rgba(255,255,255,0.05),0_8px_24px_-12px_rgba(0,0,0,0.6)]
		transition
		hover:border-emerald-400/70
		hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_0_24px_4px_rgba(16,185,129,0.25)]
		text-neutral-200
		cursor-default
        "
      >
        <header className="grid grid-cols-[1fr_auto] items-baseline gap-x-3">
          <h3 className="m-0 font-semibold leading-tight text-[clamp(1rem,1.5vw,2.6rem)] text-neutral-100">
            {project.title}
          </h3>
        </header>


        {blurbLines.length > 1 ? (
          <ul className="mt-3 list-disc list-outside pl-5 text-[clamp(.75rem,.95vw,.95rem)] leading-relaxed text-neutral-300">
            {blurbLines.map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        ) : (
          <p className="mt-3 leading-relaxed text-[clamp(.75rem,.95vw,.95rem)] text-neutral-300">
            {blurbLines[0] || ""}
          </p>
        )}

        {/* Tags */}
        {project.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t, i) => (
              <span
                key={i}
                className="
                  inline-flex items-center rounded-full
                  border border-white/10
                  bg-white/5
                  px-2 py-1 text-xs
                  text-neutral-300
                  hover:bg-white/10
                  transition
                "
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}   