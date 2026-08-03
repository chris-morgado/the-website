"use client";

import { useState, useEffect } from "react";
import { TypewriterName } from "../ui/TypewriterName";
import { FadeIn } from "../ui/FadeIn";
import { ClearPill } from "../ui/ClearPill";

const GH_ICON = (
  <svg
    aria-label="GitHub logo"
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill="white"
      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>
);

const LI_ICON = (
  <svg
    aria-label="LinkedIn logo"
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path
      fill="white"
      d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
      fillRule="evenodd"
    />
  </svg>
);

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="fade-on-load min-h-screen flex flex-col justify-center px-24 max-[700px]:px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="font-bold text-[clamp(2.75rem,6vw,4.5rem)] leading-tight mb-6 w-full !text-left">
          <TypewriterName />
        </h1>

        <div
          className="transition-all duration-700"
          style={{
            opacity: scrolled ? 0 : 1,
            transform: scrolled ? "translateY(-12px)" : "translateY(0)",
            pointerEvents: scrolled ? "none" : "auto",
          }}
        >
          <div className="text-[clamp(0.85rem,1.5vw,1.05rem)] text-gray-300 space-y-4">
            <FadeIn delay={800}>
              <p>
                I'm a software engineer who loves building things, especially
                resilient, scalable distributed systems that solve real
                operational problems. I'm currently a Software Engineering
                senior at RIT, and through recent co-ops and projects I've moved
                past just writing code and into designing solutions built for
                production.
              </p>
            </FadeIn>

            <div>
              <FadeIn delay={950}>
                <p className="text-white font-semibold mb-2">
                  What I've delivered:
                </p>
              </FadeIn>
              <ul className="space-y-2 pl-5">
                <FadeIn delay={1050}>
                  <li>
                    <span className="text-white font-medium">
                      At Excellus BlueCross BlueShield:
                    </span>{" "}
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        Engineered an AI agent workflow system for medical
                        appeal automation using Python, Databricks, and
                        LangChain / LangGraph, reducing manual case review time
                        by an estimated 80%.
                      </li>
                    </ul>
                  </li>
                </FadeIn>
                <FadeIn delay={1100}>
                  <li>
                    <span className="text-white font-medium">At Honda:</span>
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        Designed and shipped a suite of 4 Android-based testing
                        and data-collection tools adopted by ~15 engineers
                        across 3 departments, cutting select test crews from 2
                        engineers to 1 and automating manual data collection
                        across vehicle test programs. (See{" "}
                        <a
                          href="/#experience"
                          className="text-white underline underline-offset-2"
                        >
                          /experience
                        </a>{" "}
                        for more details).
                      </li>
                      <li>
                        Built a Next.js/Flask dashboard that automated vehicle
                        test data reporting, reducing report generation time by
                        ~95% and eliminating manual entry.
                      </li>
                    </ul>
                  </li>
                </FadeIn>
              </ul>
            </div>

            <FadeIn delay={2000}>
              <p className="text-center text-2xl mt-14">
                I'm currently looking for New Grad Software Engineering roles
                for Summer 2027.
                <br />
                <span className="text-white font-medium">Let's connect!</span>
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={2200}>
            <div className="flex gap-3 flex-wrap mt-8 justify-center">
              <ClearPill
                href="https://github.com/christine-morgado"
                icon={GH_ICON}
              >
                GitHub
              </ClearPill>
              <ClearPill
                href="https://www.linkedin.com/in/christine-morgado/"
                icon={LI_ICON}
              >
                LinkedIn
              </ClearPill>
              <ClearPill href="/images/workinprogress.pdf">
                View Resume
              </ClearPill>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="fade-on-load absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ "--delay": "3300ms" } as React.CSSProperties}
      >
        <a
          href="#experience"
          className="flex flex-col items-center gap-2 transition-all duration-700"
          style={{
            opacity: scrolled ? 0 : 1,
            pointerEvents: scrolled ? "none" : "auto",
          }}
        >
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            scroll for more
          </span>
          <div className="bounce-y text-neutral-500">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}
