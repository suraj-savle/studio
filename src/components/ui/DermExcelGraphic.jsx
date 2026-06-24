"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AgencyInteractiveGraphic() {
  const containerRef = useRef(null);
  const linePathsRef = useRef([]);

  const collectPathRef = (el) => {
    if (el && !linePathsRef.current.includes(el)) {
      linePathsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. Initial Path Reveal Metrics ---
      linePathsRef.current.forEach((path) => {
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        }
      });

      // --- 2. Master Entry Animation Timeline ---
      const tl = gsap.timeline();

      tl.from(".gsap-slide-up", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".gsap-scale",
          { scale: 0, opacity: 0, duration: 1.2, ease: "back.out(1.2)" },
          "-=0.8",
        )
        .from(
          ".gsap-pop",
          {
            scale: 0,
            rotation: -30,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(2)",
          },
          "-=0.6",
        )
        .to(
          linePathsRef.current,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            stagger: { amount: 0.5, from: "center" },
          },
          "-=0.4",
        )
        .from(
          ".icon-node",
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          "-=1.2",
        )
        .from(
          ".gsap-slide-up",
          { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.8",
        );

      // --- 3. Continuous Organic Floating loops ---
      gsap.utils.toArray(".float-anim").forEach((node, i) => {
        gsap.to(node, {
          y: "-=8",
          rotation: "2",
          duration: 2.5 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });

      gsap.utils.toArray(".float-anim-alt").forEach((node, i) => {
        gsap.to(node, {
          y: "+=8",
          rotation: "-2",
          duration: 2.8 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });

      gsap.to(".float-slow", {
        y: "-=5",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // --- 4. Responsive Scroll Parallax Engine ---
      gsap.to(".graphic-stage", {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.15,
      duration: 0.3,
      ease: "back.out(2)",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={containerRef}
      className="h-fit w-full  text-[#222222] flex flex-col items-center overflow-x-hidden font-sans select-none"
    >
      {/* Main Structural Interactive Graphic Window */}
      <div className="graphic-stage relative w-full max-w-[800px] h-[450px] mt-[60px] flex justify-center items-center">
        {/* Concentric Circles Backdrop Mask */}
        <div className="gsap-scale absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-black/[0.02] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] flex justify-center items-center z-10 before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:rounded-full before:bg-black/[0.03] before:shadow-[inset_0_0_15px_rgba(0,0,0,0.05)] after:content-[''] after:absolute after:w-[100px] after:h-[100px] after:rounded-full after:bg-black/[0.04] after:shadow-[inset_0_0_10px_rgba(0,0,0,0.05)]" />

        {/* Dynamic Curved Intersections Vector Stage */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
          viewBox="0 0 800 450"
        >
          <path
            ref={collectPathRef}
            className="fill-none stroke-[#111111] stroke-[1.2] stroke-linecap-round opacity-40"
            d="M 400 225 C 250 225, 200 120, 160 120"
          />
          <path
            ref={collectPathRef}
            className="fill-none stroke-[#111111] stroke-[1.2] stroke-linecap-round opacity-40"
            d="M 400 225 C 250 225, 180 225, 120 225"
          />
          <path
            ref={collectPathRef}
            className="fill-none stroke-[#111111] stroke-[1.2] stroke-linecap-round opacity-40"
            d="M 400 225 C 250 225, 200 330, 160 330"
          />
          <path
            ref={collectPathRef}
            className="fill-none stroke-[#111111] stroke-[1.2] stroke-linecap-round opacity-40"
            d="M 400 225 C 550 225, 600 120, 640 120"
          />
          <path
            ref={collectPathRef}
            className="fill-none stroke-[#111111] stroke-[1.2] stroke-linecap-round opacity-40"
            d="M 400 225 C 550 225, 620 225, 680 225"
          />
          <path
            ref={collectPathRef}
            className="fill-none stroke-[#111111] stroke-[1.2] stroke-linecap-round opacity-40"
            d="M 400 225 C 550 225, 600 330, 640 330"
          />
        </svg>

        {/* Center Node: The Glowing Idea Core */}
        <div className="text-5xl">⚡</div>

        {/* ----------------- LEFT SYMMETRY NODE CLUSTER ----------------- */}
        {/* Interaction Node */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="icon-node float-anim absolute top-[20%] left-[15%] w-16 h-16 bg-[#1a1a1a] rounded-2xl flex justify-center items-center text-white text-2xl font-bold border border-white/5 cursor-pointer z-30 transition-[border-color] duration-300 hover:border-white/30 shadow-[10px_15px_25px_rgba(0,0,0,0.15),-5px_-5px_15px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.5)]"
        >
          <svg
            className="w-7 h-7 fill-none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v12M6 12h12" />
          </svg>
        </div>

        {/* Framing & Strategy Node */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="icon-node float-anim-alt absolute top-1/2 left-[10%] -translate-y-1/2 w-16 h-16 bg-[#1a1a1a] rounded-2xl flex justify-center items-center text-white text-2xl font-bold border border-white/5 cursor-pointer z-30 transition-[border-color] duration-300 hover:border-white/30 shadow-[10px_15px_25px_rgba(0,0,0,0.15),-5px_-5px_15px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.5)]"
        >
          <svg
            className="w-7 h-7 fill-none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l-7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          </svg>
        </div>

        {/* Development & Logic Node */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="icon-node float-anim absolute bottom-[20%] left-[15%] w-16 h-16 bg-[#1a1a1a] rounded-2xl flex justify-center items-center text-white text-xs font-mono font-bold tracking-widest border border-white/5 cursor-pointer z-30 transition-[border-color] duration-300 hover:border-white/30 shadow-[10px_15px_25px_rgba(0,0,0,0.15),-5px_-5px_15px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.5)]"
        >
          &lt;/&gt;
        </div>

        {/* ----------------- RIGHT SYMMETRY NODE CLUSTER ----------------- */}
        {/* Kinetic System Node */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="icon-node float-anim-alt absolute top-[20%] right-[15%] w-16 h-16 bg-[#1a1a1a] rounded-2xl flex justify-center items-center text-white text-2xl font-bold border border-white/5 cursor-pointer z-30 transition-[border-color] duration-300 hover:border-white/30 shadow-[10px_15px_25px_rgba(0,0,0,0.15),-5px_-5px_15px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.5)]"
        >
          <svg
            className="w-7 h-7 fill-none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>

        {/* Creative Signature Node */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="icon-node float-anim absolute top-1/2 right-[10%] -translate-y-1/2 w-16 h-16 bg-[#1a1a1a] rounded-2xl flex justify-center items-center text-white text-2xl font-bold border border-white/5 cursor-pointer z-30 transition-[border-color] duration-300 hover:border-white/30 shadow-[10px_15px_25px_rgba(0,0,0,0.15),-5px_-5px_15px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.5)]"
        >
          <span className="text-sm font-bold tracking-tighter font-mono">
            GSAP
          </span>
        </div>

        {/* Launch & Scale Node */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="icon-node float-anim-alt absolute bottom-[20%] right-[15%] w-16 h-16 bg-[#1a1a1a] rounded-2xl flex justify-center items-center text-white text-2xl font-bold border border-white/5 cursor-pointer z-30 transition-[border-color] duration-300 hover:border-white/30 shadow-[10px_15px_25px_rgba(0,0,0,0.15),-5px_-5px_15px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(255,255,255,0.15),inset_-2px_-2px_5px_rgba(0,0,0,0.5)]"
        >
          <svg
            className="w-7 h-7 fill-none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
