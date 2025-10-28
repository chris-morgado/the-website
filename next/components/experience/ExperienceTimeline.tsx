import React, { ReactNode } from "react";

export type ExperienceItem = {
	icon?: ReactNode;
	date: string; 
	title: string; 
	team?: string; 
	company: string; 
	location: string;
	blurb: string; 
	tags?: string[]; 
	accent?: string; 
};

function TimelineCard({ item }: { item: ExperienceItem }) {
	const blurbLines = item.blurb.split(/\r?\n/).map(s => s.trim()).filter(Boolean);

	return (
		<div className="relative w-full max-w-3xl">
			<div
				className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
				style={{ background: item.accent || "rgb(16 185 129)" /* emerald-500 */ }}
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
				{/* Date */}
				<time
					className="shrink-0 text-[clamp(0.65rem,1.2vw,1rem)] whitespace-nowrap m-0 leading-none text-neutral-400"
					title={item.date}
				>
					{item.date}
				</time>

				<header className="grid grid-cols-[1fr_auto] items-baseline gap-x-3">
					<h3 className="m-0 font-semibold leading-tight text-[clamp(1rem,1.5vw,2.6rem)] text-neutral-100">
						{item.title}
					</h3>
				</header>

				{/* Team is gone if not given */}
				{item.team?.trim() ? (
					<div className="text-[clamp(0.65rem,1.2vw,1rem)] text-neutral-400">{item.team}</div>
				) : null}

				{/* Company — spacer — Location */}
				<div className="mt-1 italic text-[clamp(.6rem,1.25vw,.95rem)] flex items-baseline gap-2">
					<span className="text-neutral-300">{item.company}</span>
					<span className="flex-1" aria-hidden="true" />
					<span className="text-neutral-500">{item.location}</span>
				</div>

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
				{item.tags?.length ? (
					<div className="mt-4 flex flex-wrap gap-2">
						{item.tags.map((t, i) => (
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

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
	return (
		<div className="w-full flex justify-start px-4 sm:px-6 lg:px-8">
			<div className="w-full flex justify-center">
				<ul className="timeline timeline-vertical align-center">
					{items.map((item, idx) => (
						<li key={idx}>
							{idx !== 0 && <hr />}
							<div className="timeline-start w-0" />

							{/* timeline line + icon */}
							<div className="timeline-middle">
								{item.icon ? (
									<div className="h-5 w-5 text-emerald-400">{item.icon}</div>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="rgb(16 185 129)"
										className="h-5 w-5 text-emerald-400"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</div>

							<div className="timeline-end w-full">
								<TimelineCard item={item} />
							</div>

							{idx !== items.length - 1 && <hr />}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
