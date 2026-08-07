"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const GH_ICON = (
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label="GitHub"
  >
    <path
      fill="currentColor"
      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
);

const LI_ICON = (
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-label="LinkedIn"
  >
    <path
      fill="currentColor"
      d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
      fillRule="evenodd"
    />
  </svg>
);

const RESUME_ICON = (
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-label="Resume"
  >
    <path
      fill="currentColor"
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
    />
  </svg>
);

export function LeftSidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="sticky top-0 h-screen w-[38%] flex flex-col justify-between py-24 pl-24 pr-12 max-[900px]:hidden">
      <div>
        <h2 className="text-3xl font-bold text-white mb-10">
          Christine Morgado
        </h2>

        <nav className="flex flex-col gap-6 mt-10">
          {NAV_ITEMS.map(({ label, href }) => {
            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 transition-colors"
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-white"
                      : "w-8 bg-neutral-600 group-hover:w-12 group-hover:bg-neutral-300"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-neutral-500 group-hover:text-neutral-300"
                  }`}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="flex gap-5 text-neutral-500">
        <a
          href="https://github.com/christine-morgado"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          {GH_ICON}
        </a>
        <a
          href="https://www.linkedin.com/in/christine-morgado/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          {LI_ICON}
        </a>
        <a
          href="/images/ChristineMorgadoResume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          {RESUME_ICON}
        </a>
      </div>
    </aside>
  );
}
