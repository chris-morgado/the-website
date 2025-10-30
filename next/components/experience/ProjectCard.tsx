"use client"

import Image from "next/image";
import { useRef, ReactNode } from "react";

export type ProjectItem = {
  icon?: ReactNode;
  title: string;
  blurb: string;
  image?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
  accent?: string;
};

export function ProjectScrollCard({ project }: {project: ProjectItem}) {
  const blurbLines = project.blurb.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  const modalId = `modal_${project.title.replace(/\s+/g, '_')}`;
	const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="relative w-full max-w-3xl" onClick={() => dialogRef.current?.showModal()}>
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
          cursor-pointer
        "
      >
				{project.image && (
					<div className="w-full mb-4 overflow-hidden rounded-xl">
						<Image
							src={project.image}
							alt={project.title}
							width={800}
							height={400}
							className="rounded-xl object-cover w-full h-auto"
						/>
					</div>
				)}

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

      <dialog id={modalId} className="modal">
        <div className="modal-box 
          relative
          rounded-2xl
          border border-white/10
          bg-gradient-to-b from-[#121212] to-[#0a0a0a]
          backdrop-blur
          p-4 sm:p-6 pl-6
          shadow-[0_1px_0_0_rgba(255,255,255,0.05),0_8px_24px_-12px_rgba(0,0,0,0.6)]
          text-neutral-200
          ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute border-gray-900 
            bg-gradient-to-b from-[#292929] to-[#0D0D0D]
            hover:bg-gradient-to-b hover:from-[#575757] hover:to-[#737373]
            right-2 top-2">✕</button>
          </form>
          {project.image && (
					<div className="w-full mb-4 overflow-hidden rounded-xl">
						<Image
							src={project.image}
							alt={project.title}
							width={800}
							height={400}
							className="rounded-xl object-cover w-full h-auto"
						/>
					</div>
				)}
          <h3 className="font-bold text-lg">{project.title}</h3>
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
          <p className="py-4">{project.blurb}</p>

          <div className="flex flex-wrap items-center gap-2">
            <p className=""><b>Links:</b></p>  
            {project.links?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="        
        inline-flex items-center gap-1
        rounded-full
        bg-gradient-to-b from-[#292929] to-[#0D0D0D]
        px-3 py-1.5
        text-xs font-medium text-emerald-300
        border border-white/10
        shadow-sm
        hover:from-[#444444] hover:to-[#222222]
        hover:text-emerald-300
        transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
}   