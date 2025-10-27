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
			<div
				className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
				style={{ background: item.accent || "oklch(var(--p))" }}
			/>
			<div className="rounded-2xl border border-base-300 bg-base-200/30 backdrop-blur p-4 sm:p-6 pl-6 shadow-lg hover:shadow-xl transition-shadow">
				<header className="flex flex-wrap items-start justify-between gap-3">
					<div className="min-w-0">
						<h3 className="text-lg sm:text-xl font-semibold leading-tight truncate">
							{item.title}
						</h3>
						{item.team ? (
							<p className="mt-0.5 text-sm opacity-80 truncate">{item.team}</p>
						) : null}
					</div>
				</header>

				<div className="mt-1 text-sm italic opacity-90">
					{item.company} <span className="opacity-60">–</span> {item.location}
				</div>

				{blurbLines.length > 1 ? (
					<ul className="mt-3 list-disc list-outside pl-5 text-sm leading-relaxed text-base-content/90">
						{blurbLines.map((line, i) => (
							<li key={i}>{line}</li>
						))}
					</ul>
				) : (
					<p className="mt-3 text-sm leading-relaxed text-base-content/90">
						{blurbLines[0] || ""}
					</p>
				)}

				{item.tags && item.tags.length > 0 ? (
					<div className="mt-4 flex flex-wrap gap-2">
						{item.tags.map((t, i) => (
							<span key={i} className="badge badge-sm">
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
        <ul
        	className="
        		timeline timeline-vertical align-center
        	"
        >
        	{items.map((item, idx) => (
        		<li key={idx}>
        			{idx !== 0 && <hr />}
              <div className="timeline-start w-0"/>

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
