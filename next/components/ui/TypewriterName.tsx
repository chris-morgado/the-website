"use client";

import { useState, useEffect } from "react";

const NAME = "Hi, I'm Christine Morgado.";
const TYPING_SPEED_MS = 65;

export function TypewriterName() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length >= NAME.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(NAME.slice(0, displayed.length + 1));
    }, TYPING_SPEED_MS);
    return () => clearTimeout(t);
  }, [displayed]);

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-[3px] ml-1 align-middle bg-white ${done ? "opacity-0" : "animate-pulse"}`}
        style={{ height: "0.85em" }}
      />
    </span>
  );
}
