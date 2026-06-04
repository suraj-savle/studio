"use client";
import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: ReactNode }) {
  const prefersReducedMotion = typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Lower lerp makes motion smoother; respect reduced motion preference
  const options = {
    lerp: prefersReducedMotion ? 1 : 0.08,
    duration: prefersReducedMotion ? 0 : 1.2,
    smoothWheel: true,
  };

  return <ReactLenis root options={options}>{children}</ReactLenis>;
}

export default SmoothScrolling;
