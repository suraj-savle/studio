"use client";

import React from "react";

// ============================================================================
// Animated Contact Button Component
// ============================================================================

export default function ContactButton() {
  return (
    <button className="contact-button group relative cursor-pointer border-none rounded-[24px] p-0 m-0 text-center font-semibold text-base tracking-[0.02em] leading-[1.5] text-white bg-gradient-to-br from-[#ffd215] to-[#fff172] shadow-[0_0_14px_rgba(255,223,87,0.5)] before:content-[''] before:pointer-events-none before:absolute before:z-[3] before:left-0 before:top-0 before:right-0 before:bottom-0 before:rounded-[24px] before:shadow-[inset_0_3px_12px_rgba(255,223,52,0.9),inset_0_-3px_4px_rgba(255,250,215,0.8)] hover:[--duration:1400ms]">
      <div className="wrapper relative overflow-hidden rounded-[24px] min-w-[132px] px-8 py-3 [-webkit-mask-image:-webkit-radial-gradient(white,black)]">
        <span className="relative z-[1]">Contact Us</span>
        
        {/* Animated Circles */}
        {[...Array(12)].map((_, i) => {
          const circleNum = i + 1;
          let classes = "absolute left-0 top-0 w-10 h-10 rounded-full blur-[var(--blur,8px)]";
          
          // Set background colors based on circle number
          if ([1, 9, 10].includes(circleNum)) {
            classes += " bg-[rgba(255,232,26,0.7)]";
          } else if ([3, 4].includes(circleNum)) {
            classes += " bg-[#1a23ff]";
          } else if ([5, 6].includes(circleNum)) {
            classes += " bg-[#e21bda]";
          } else {
            classes += " bg-[rgba(255,163,26,0.7)]";
          }

          // Set blur for specific circles
          if ([3, 4].includes(circleNum)) {
            classes += " [--blur:14px]";
          } else if ([5, 6].includes(circleNum)) {
            classes += " [--blur:16px]";
          } else if ([2, 7, 8, 11, 12].includes(circleNum)) {
            classes += " [--blur:12px]";
          }

          // Set animation
          classes += ` animate-[${getAnimationName(circleNum)}_var(--duration,7s)_linear_infinite]`;
          
          // Set initial position
          const style = getCircleStyle(circleNum);
          
          return (
            <div
              key={i}
              className={classes}
              style={style}
            />
          );
        })}
      </div>
    </button>
  );
}

// ============================================================================
// Helper Functions
// ============================================================================

function getAnimationName(num: number): string {
  return `circle-${num}`;
}

function getCircleStyle(num: number): React.CSSProperties {
  const positions: Record<number, { x: string; y: string }> = {
    1: { x: "0px", y: "-40px" },
    2: { x: "92px", y: "8px" },
    3: { x: "-12px", y: "-12px" },
    4: { x: "80px", y: "-12px" },
    5: { x: "12px", y: "-4px" },
    6: { x: "56px", y: "16px" },
    7: { x: "8px", y: "28px" },
    8: { x: "28px", y: "-4px" },
    9: { x: "20px", y: "-12px" },
    10: { x: "64px", y: "16px" },
    11: { x: "4px", y: "4px" },
    12: { x: "52px", y: "4px" },
  };

  const pos = positions[num];
  return {
    transform: `translate(${pos.x}, ${pos.y}) translateZ(0)`,
  };
}

// ============================================================================
// Global Styles (for keyframe animations)
// ============================================================================

const styles = `
  @keyframes circle-1 {
    33% { transform: translate(0px, 16px) translateZ(0); }
    66% { transform: translate(12px, 64px) translateZ(0); }
  }
  @keyframes circle-2 {
    33% { transform: translate(80px, -10px) translateZ(0); }
    66% { transform: translate(72px, -48px) translateZ(0); }
  }
  @keyframes circle-3 {
    33% { transform: translate(20px, 12px) translateZ(0); }
    66% { transform: translate(12px, 4px) translateZ(0); }
  }
  @keyframes circle-4 {
    33% { transform: translate(76px, -12px) translateZ(0); }
    66% { transform: translate(112px, -8px) translateZ(0); }
  }
  @keyframes circle-5 {
    33% { transform: translate(84px, 28px) translateZ(0); }
    66% { transform: translate(40px, -32px) translateZ(0); }
  }
  @keyframes circle-6 {
    33% { transform: translate(28px, -16px) translateZ(0); }
    66% { transform: translate(76px, -56px) translateZ(0); }
  }
  @keyframes circle-7 {
    33% { transform: translate(8px, 28px) translateZ(0); }
    66% { transform: translate(20px, -60px) translateZ(0); }
  }
  @keyframes circle-8 {
    33% { transform: translate(32px, -4px) translateZ(0); }
    66% { transform: translate(56px, -20px) translateZ(0); }
  }
  @keyframes circle-9 {
    33% { transform: translate(20px, -12px) translateZ(0); }
    66% { transform: translate(80px, -8px) translateZ(0); }
  }
  @keyframes circle-10 {
    33% { transform: translate(68px, 20px) translateZ(0); }
    66% { transform: translate(100px, 28px) translateZ(0); }
  }
  @keyframes circle-11 {
    33% { transform: translate(4px, 4px) translateZ(0); }
    66% { transform: translate(68px, 20px) translateZ(0); }
  }
  @keyframes circle-12 {
    33% { transform: translate(56px, 0px) translateZ(0); }
    66% { transform: translate(60px, -32px) translateZ(0); }
  }
`;

// Add styles to document head
if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}