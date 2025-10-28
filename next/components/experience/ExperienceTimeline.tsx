import React, { ReactNode } from "react";

export type ExperienceItem = {
	icon?: ReactNode;
	date: string; // e.g., "May 2025"
	title: string; // e.g., "SWE Intern"
	team?: string; // e.g., "Office Products"
	company: string; // e.g., "Microsoft"
	location: string; // e.g., "Redmond, WA"
	blurb: string; // small paragraph
	tags?: string[]; // badges
	accent?: string; // CSS color string for the left accent bar, optional
};

function TimelineCard({ item }: { item: ExperienceItem }) {
	// each non-empty newline is its own bullet
	const blurbLines = item.blurb
		.split(/\r?\n/)
		.map(s => s.trim())
		.filter(Boolean);

	return (
		<div className="relative w-full max-w-3xl">
			<div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
				style={{ background: item.accent || "oklch(var(--p))" }} />
			<div className="rounded-2xl border border-base-300 bg-base-200 backdrop-blur p-4 sm:p-6 pl-6 shadow-lg hover:shadow-xl transition-shadow text-[clamp(0.1rem,1.1vw+0.35rem,1rem)]">

				{/* Date */}
				<time className="shrink-0 text-[0.9em] whitespace-nowrap m-0 leading-none" title={item.date}>
					{item.date}
				</time>

				<div className="flex flex-wrap items-start justify-between gap-3">
					<h3 className="font-semibold leading-tight text-[1.6em] m-0">
						{item.title}
					</h3>
				</div>
				{/* render team only if non-empty after trimming */}
				{item.team?.trim() ? (
					<div className="opacity-80 text-[0.95em]">{item.team}</div>
				) : null}

				{/* Company — spacer — Location */}
				<div className="mt-1 italic opacity-90 text-[0.95em] flex items-baseline gap-2">
					<span className="">{item.company}</span>
					<span className="flex-1" />
					<span className="opacity-70">{item.location}</span>
				</div>

				{/* Resume blurb */}
				{blurbLines.length > 1 ? (
					<ul className="mt-3 list-disc list-outside pl-5 leading-relaxed text-base-content/90 text-[1em]">
						{blurbLines.map((line, i) => <li key={i}>{line}</li>)}
					</ul>
				) : (
					<p className="mt-3 leading-relaxed text-base-content/90 text-[1em]">
						{blurbLines[0] || ""}
					</p>
				)}
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
									<div className="h-5 w-5 text-primary">{item.icon}</div>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="h-5 w-5"
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
