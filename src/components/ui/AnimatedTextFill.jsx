import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedTextFill = () => {
  const textSpanRef = useRef(null);
  const fillTextRef = useRef(null);

  useEffect(() => {
    const target = textSpanRef.current;
    const triggerElement = fillTextRef.current;

    // Check if element exists and user prefers motion
    if (target && triggerElement && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.to(target, {
        backgroundSize: "200% 200%",
        ease: "none",
        scrollTrigger: {
          trigger: triggerElement,
          start: "top 80%",
          end: "bottom 35%",
          scrub: true
        }
      });
    }

    // Cleanup ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-[200vh] py-[3vh] px-[6vw] pb-[30vh] gap-[30vh] flex items-center justify-center flex-col font-space-grotesk">
      {/* SVG Icon */}
      <svg 
        width="42px" 
        height="42px" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        color="#000000"
      >
        <path 
          d="M12 3L12 21M12 21L20.5 12.5M12 21L3.5 12.5" 
          stroke="#fff" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      {/* Hero Section */}
      <section className="max-w-[980px]">
        <p ref={fillTextRef} className="m-0 text-[clamp(22px,4vw,48px)] font-semibold leading-[1.15] tracking-[-0.01em] text-wrap-pretty font-syne">
          <span 
            ref={textSpanRef}
            className="bg-clip-text text-transparent bg-no-repeat inline will-change-[background-size]"
            style={{
              backgroundColor: "#3f434a",
              backgroundImage: "linear-gradient(135deg, #f3f4f6 50%, #3f434a 60%)",
              backgroundPosition: "0 0",
              backgroundSize: "0% 200%"
            }}
          >
            We don't just build interfaces; we choreograph pixels. Static design is a photograph, but this is a performance. Every scroll is a keystroke, every pixel is deliberate, and motion is the only language that truly translates across every device. You are painting with code.
          </span>
        </p>
      </section>

      {/* Credit Link */}
      <a 
        className="fixed left-1/2 bottom-[18px] -translate-x-1/2 text-[12px] tracking-[0.08em] uppercase no-underline py-2 px-[10px] rounded-full transition-colors duration-200 hover:text-[#f3f4f6]"
        href="http://madebybeings.com" 
        target="_blank" 
        rel="noopener"
        style={{
          color: "color-mix(in srgb, #f3f4f6 70%, transparent)",
          background: "color-mix(in srgb, #0b0c0f 70%, transparent)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)"
        }}
      >
        Made By Beings
      </a>
    </main>
  );
};

export default AnimatedTextFill;