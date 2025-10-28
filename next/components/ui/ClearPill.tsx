import React, { ReactNode } from "react";

export function ClearPill({
    href,
    children,
    icon,
    ariaLabel,
}: {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
    ariaLabel?: string;
}) {
    return (
        <a
            href={href}
            aria-label={ariaLabel}
            target="_blank"
            rel="noreferrer"
            className="
                group relative inline-flex items-center gap-2
                rounded-xl
                px-4 sm:px-5 py-2.5
                cursor-pointer select-none
                border border-white/10
                text-white
                text-[clamp(0.7rem,1.5vw,1rem)]
                transition
                bg-[linear-gradient(180deg,#1a1a1a_0%,#101010_100%)]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_6px_16px_rgba(0,0,0,0.35)]
                hover:border-emerald-400/60
                hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_10px_28px_-12px_rgba(16,185,129,0.30)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-400/60
            "
        >
            <span
                className="
                pointer-events-none absolute inset-0 rounded-xl
                before:content-[''] before:absolute before:inset-x-1 before:top-0.5
                before:h-1/2 before:rounded-[0.75rem]
                before:bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0))]
                before:opacity-60
                "
            />
            {icon ? <span className="relative">{icon}</span> : null}
            <span className="relative">{children}</span>
        </a>

    );
}
