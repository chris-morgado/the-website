"use client";

import { useState, useEffect } from "react";

interface Segment {
  text: string;
  delay: number;
  typingSpeed: number;
}

const SEGMENTS: Segment[] = [
  { text: "Hi, I'm Christine Morgado.", delay: 0, typingSpeed: 65 },
  { text: " :)", delay: 2300, typingSpeed: 200 },
];

export function TypewriterName() {
  const [progress, setProgress] = useState<number[]>(SEGMENTS.map(() => 0));
  const [currentSeg, setCurrentSeg] = useState(0);
  const [phase, setPhase] = useState<"waiting" | "typing">("waiting");
  const [done, setDone] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!done) return;
    const interval = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(interval);
  }, [done]);

  useEffect(() => {
    const seg = SEGMENTS[currentSeg];
    if (!seg) return;

    if (phase === "waiting") {
      const t = setTimeout(() => setPhase("typing"), seg.delay);
      return () => clearTimeout(t);
    }

    const typed = progress[currentSeg];

    if (typed < seg.text.length) {
      const t = setTimeout(() => {
        setProgress((prev) => {
          const next = [...prev];
          next[currentSeg] = next[currentSeg] + 1;
          return next;
        });
      }, seg.typingSpeed);
      return () => clearTimeout(t);
    }

    if (currentSeg + 1 < SEGMENTS.length) {
      setCurrentSeg((s) => s + 1);
      setPhase("waiting");
    } else {
      setDone(true);
    }
  }, [phase, currentSeg, progress]);

  const displayedText = SEGMENTS.map((seg, i) =>
    seg.text.slice(0, progress[i]),
  ).join("");

  return (
    <span>
      {displayedText}
      <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
    </span>
  );
}
