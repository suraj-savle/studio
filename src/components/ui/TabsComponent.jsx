"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

const TAB_CONTENT = [
  {
    id: "teams",
    label: "Teams",
    text: "Work that moves at the speed of trust. Shared language, aligned direction, and a process that makes collaboration feel genuinely effortless."
  },
  {
    id: "founders",
    label: "Founders",
    text: "Turn early conviction into something people actually want. From rough idea to refined product — without losing what made it compelling."
  },
  {
    id: "designers",
    label: "Designers",
    text: "Craft interfaces that speak before a single word is read. Visual systems built to carry meaning across every touchpoint of a product."
  },
  {
    id: "engineers",
    label: "Engineers",
    text: "Build with precision on a foundation that scales. Architecture decisions that outlast the brief and hold up under real-world pressure."
  }
];

const DURATION = 0.4;
const STAGGER = 0.06;
const OVERLAP = "<0.24";
const Y_OFFSET = 150;

export default function KineticTabs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const splitsRef = useRef([]);
  
  const stateRef = useRef({
    activeIndex: 0,
    isAnimating: false,
    queuedIndex: null,
    timeline: null,
  });

  const collectTextRef = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      splitsRef.current.forEach(split => split.revert());

      splitsRef.current = textRefs.current.map((el) => {
        return new SplitText(el, {
          type: "lines",
          linesClass: "himaaax-split-line overflow-hidden block"
        });
      });

      // Initialize base visual layers cleanly
      textRefs.current.forEach((el, i) => {
        const split = splitsRef.current[i];
        
        if (i === stateRef.current.activeIndex) {
          gsap.set(el, { opacity: 1, pointerEvents: "auto" });
          gsap.set(split.lines, { yPercent: 0 });
        } else {
          gsap.set(el, { opacity: 0, pointerEvents: "none" });
          gsap.set(split.lines, { yPercent: Y_OFFSET });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      if (stateRef.current.timeline) stateRef.current.timeline.kill();
    };
  }, []);

  const runTransition = (nextIndex) => {
    const currentContainer = textRefs.current[stateRef.current.activeIndex];
    const nextContainer = textRefs.current[nextIndex];
    
    const currentLines = splitsRef.current[stateRef.current.activeIndex].lines;
    const nextLines = splitsRef.current[nextIndex].lines;

    // 1. Kill old timeline safely but DO NOT force-kill global element style tweens
    if (stateRef.current.timeline) stateRef.current.timeline.kill();

    // 2. Prepare incoming panel configuration immediately
    gsap.set(nextContainer, { opacity: 1, pointerEvents: "auto" });
    gsap.set(nextLines, { yPercent: Y_OFFSET });
    gsap.set(currentContainer, { pointerEvents: "none" });

    // 3. Orchestrate smooth overlapping timeline sequence
    stateRef.current.timeline = gsap.timeline({
      onComplete: () => {
        // Safe check to ensure we only turn off opacity after complete scroll out
        gsap.set(currentContainer, { opacity: 0 });
        
        stateRef.current.activeIndex = nextIndex;
        stateRef.current.isAnimating = false;

        if (stateRef.current.queuedIndex !== null && stateRef.current.queuedIndex !== stateRef.current.activeIndex) {
          const q = stateRef.current.queuedIndex;
          stateRef.current.queuedIndex = null;
          switchTab(q);
        }
      }
    });

    // Animate outbound lines down smoothly without sudden disappearing
    stateRef.current.timeline.to(currentLines, {
      yPercent: Y_OFFSET,
      duration: DURATION,
      stagger: STAGGER,
      ease: "power1.in"
    }, 0);

    // Stagger an independent container fade-out matching the exit speed
    stateRef.current.timeline.to(currentContainer, {
      opacity: 0,
      duration: DURATION + (currentLines.length * STAGGER),
      ease: "none"
    }, 0);

    // Animate inbound lines up smoothly
    stateRef.current.timeline.to(nextLines, {
      yPercent: 0,
      duration: DURATION,
      stagger: STAGGER,
      ease: "power1.out"
    }, OVERLAP);
  };

  const switchTab = (nextIndex) => {
    if (nextIndex === stateRef.current.activeIndex) return;

    if (stateRef.current.isAnimating) {
      stateRef.current.queuedIndex = nextIndex;
      return;
    }

    stateRef.current.isAnimating = true;
    setActiveIdx(nextIndex); 
    runTransition(nextIndex);
  };

  return (
    <div ref={containerRef} className="w-full min-h-screen text-zinc-900 grid place-items-center px-6 py-12 select-none">
      <div className="w-full max-w-5xl px-4 md:px-12 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {TAB_CONTENT.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => switchTab(idx)}
              className={`px-5 py-2.5 rounded-full text-base font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                activeIdx === idx
                  ? "bg-zinc-900 text-white shadow-sm"
                  : "bg-black/5 text-zinc-800 hover:bg-black/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Animation Stage */}
        <div className="relative grid grid-cols-1 items-center justify-center min-h-[250px] md:min-h-[200px]">
          {TAB_CONTENT.map((tab) => (
            <div
              key={tab.id}
              ref={collectTextRef}
              className="col-start-1 row-start-1 text-center font-bold tracking-tighter text-zinc-900 leading-[1.15] text-[1.65rem] md:text-[2.5rem] lg:text-[3rem]"
            >
              {tab.text}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}