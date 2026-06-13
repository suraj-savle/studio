"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely
gsap.registerPlugin(ScrollTrigger);

export default function WillemScrollHeader() {
  const containerRef = useRef<HTMLElement | null>(null);

  const loadingLettersRef = useRef<HTMLSpanElement[]>([]);
  const imageExtrasRef = useRef<HTMLImageElement[]>([]);
  const headerLettersRef = useRef<HTMLSpanElement[]>([]);
  const interactiveLinksRef = useRef<
    (HTMLAnchorElement | HTMLParagraphElement)[]
  >([]);

  const boxRef = useRef<HTMLDivElement | null>(null);
  const growingImageRef = useRef<HTMLDivElement | null>(null);
  const headingStartRef = useRef<HTMLDivElement | null>(null);
  const headingEndRef = useRef<HTMLDivElement | null>(null);

  // Ref collectors for array elements
  const addToLoadingLetters = (el: HTMLSpanElement | null) => {
    if (el && !loadingLettersRef.current.includes(el)) {
      loadingLettersRef.current.push(el);
    }
  };

  const addToImageExtras = (el: HTMLImageElement | null) => {
    if (el && !imageExtrasRef.current.includes(el)) {
      imageExtrasRef.current.push(el);
    }
  };

  const addToHeaderLetters = (el: HTMLSpanElement | null) => {
    if (el && !headerLettersRef.current.includes(el)) {
      headerLettersRef.current.push(el);
    }
  };

  const addToInteractiveLinks = (
    el: HTMLAnchorElement | HTMLParagraphElement | null,
  ) => {
    if (el && !interactiveLinksRef.current.includes(el)) {
      interactiveLinksRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        containerRef.current?.classList.remove("invisible");
      }

      // Create the ScrollTrigger-driven timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Start when this section hits the top
          start: "top top",
          end: "+=200%", // Keeps it pinned for 2 full viewports worth of scrolling
          scrub: 1, // Smoothly links animation progress to scroll speed (1s catch-up)
          pin: true, // Locks the section in place while animating
          invalidateOnRefresh: true, // Handles responsiveness recalculations seamlessly
        },
      });

      // 1. Initial reveal: Slide up the dark letter layers
      if (loadingLettersRef.current.length) {
        tl.from(loadingLettersRef.current, {
          yPercent: 100,
          stagger: 0.05,
          duration: 1,
        });
      }

      // 2. The Split: Open the image box gap and push text aside
      if (boxRef.current) {
        tl.fromTo(
          boxRef.current,
          { width: "0em" },
          { width: "1em", duration: 1.5 },
          ">-0.2",
        );
      }
      if (growingImageRef.current) {
        tl.fromTo(
          growingImageRef.current,
          { width: "0%" },
          { width: "100%", duration: 1.5 },
          "<",
        );
      }
      if (headingStartRef.current) {
        tl.fromTo(
          headingStartRef.current,
          { x: "0em" },
          { x: "-0.05em", duration: 1.5 },
          "<",
        );
      }
      if (headingEndRef.current) {
        tl.fromTo(
          headingEndRef.current,
          { x: "0em" },
          { x: "0.05em", duration: 1.5 },
          "<",
        );
      }

      // 3. Image Flash: Rapidly cycle through the extra image layers
      if (imageExtrasRef.current.length) {
        tl.fromTo(
          imageExtrasRef.current,
          { opacity: 1 },
          { opacity: 0, duration: 0.2, ease: "none", stagger: 0.4 },
          "+=0.2",
        );
      }

      // 4. Zoom to Fullscreen: Expand layout boundaries to cover entire view
      if (growingImageRef.current) {
        tl.to(
          growingImageRef.current,
          { width: "100vw", height: "100dvh", duration: 2 },
          "+=0.2",
        );
      }
      if (boxRef.current) {
        tl.to(boxRef.current, { width: "110vw", duration: 2 }, "<");
      }

      // 5. Interface Fade-in: Reveal UI header nav links and global footer brand text
      if (headerLettersRef.current.length) {
        tl.from(
          headerLettersRef.current,
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.03,
          },
          "<+=0.5",
        );
      }
      if (interactiveLinksRef.current.length) {
        tl.from(
          interactiveLinksRef.current,
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.05,
          },
          "<",
        );
      }
    }, containerRef as React.RefObject<HTMLElement>);

    return () => ctx.revert(); // Essential cleanup to drop pinning markers on dismount
  }, []);

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'PP Neue Montreal';
          src: url('https://cdn.prod.website-files.com/6819ed8312518f61b84824df/6819ed8312518f61b84825ba_PPNeueMontreal-Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }
        .font-neue { font-family: 'PP Neue Montreal', Arial, sans-serif; }
      `}</style>

      {/* Main pinned section container */}
      <section
        ref={containerRef}
        className="invisible relative w-screen h-[100dvh] overflow-hidden "
      >
        {/* Absolute loader mask tracking layer */}
        <div className="absolute inset-0 flex items-center justify-center text-[#201d1d] overflow-hidden pointer-events-none z-10">
          <div className="relative flex justify-center text-[5.5em] md:text-[9em] lg:text-[12.5em] font-medium leading-[0.75] whitespace-nowrap">
            <div
              ref={headingStartRef}
              className="flex justify-end  overflow-hidden"
            >
              <span ref={addToLoadingLetters} className="relative block">
                W
              </span>
              <span ref={addToLoadingLetters} className="relative block">
                O
              </span>
            </div>

            <div
              ref={boxRef}
              className="relative flex flex-col items-center justify-center w-0"
            >
              <div className="relative flex items-center justify-center min-w-[1em] h-[95%]">
                <div
                  ref={growingImageRef}
                  className="absolute flex items-center justify-center w-0 h-full overflow-hidden"
                >
                  <div className="absolute w-full min-w-[1em] h-full">
                    <img
                      ref={addToImageExtras}
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-[3]"
                      src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724bc_minimalist-architecture-2.avif"
                      alt=""
                    />
                    <img
                      ref={addToImageExtras}
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-[2]"
                      src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724cf_minimalist-architecture-4.avif"
                      alt=""
                    />
                    <img
                      ref={addToImageExtras}
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-[1]"
                      src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724c5_minimalist-architecture-3.avif"
                      alt=""
                    />
                    <img
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                      src="https://cdn.prod.website-files.com/6915bbf51d482439010ee790/6915bc3ac9fe346a924724b0_minimalist-architecture-1.avif"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={headingEndRef}
              className="flex justify-start w-[1.525em] overflow-hidden"
            >
              <span ref={addToLoadingLetters} className="relative block">
                R
              </span>
              <span ref={addToLoadingLetters} className="relative block">
                K
              </span>
            </div>
          </div>
        </div>

        {/* Foreground dynamic template options UI */}
        <div className="relative flex flex-col justify-between items-center w-full min-h-[100dvh] p-6 md:p-12 z-20 pointer-events-auto">
          <div className="w-full relative">
            <nav className="relative flex overflow-hidden w-full">
              <div className="flex justify-start items-start w-[55%] md:w-1/2">
                <div className="overflow-hidden">
                  <a
                    ref={addToInteractiveLinks}
                    href="https://www.osmo.supply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block text-lg md:text-2xl leading-snug no-underline text-inherit"
                  >
                    Osmo ©
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 w-[45%] md:w-1/2">
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <div className="overflow-hidden">
                    <a
                      ref={addToInteractiveLinks}
                      href="#projects"
                      className="relative inline-block text-lg md:text-2xl leading-snug no-underline text-inherit"
                    >
                      Projects,
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <a
                      ref={addToInteractiveLinks}
                      href="#services"
                      className="relative inline-block text-lg md:text-2xl leading-snug no-underline text-inherit"
                    >
                      Services,
                    </a>
                  </div>
                  <div className="overflow-hidden">
                    <a
                      ref={addToInteractiveLinks}
                      href="#blog"
                      className="relative inline-block text-lg md:text-2xl leading-snug no-underline text-inherit"
                    >
                      Blog (13)
                    </a>
                  </div>
                </div>
                <div className="flex overflow-hidden">
                  <a
                    ref={addToInteractiveLinks}
                    href="#touch"
                    className="relative inline-block text-lg md:text-2xl leading-snug no-underline text-inherit"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex justify-between items-end w-full relative overflow-hidden">
            <div className="relative flex justify-center text-[5.5em] md:text-[9em] lg:text-[12.5em] font-medium leading-[0.75] whitespace-nowrap select-none">
              <span ref={addToHeaderLetters} className="relative block">
                W
              </span>
              <span ref={addToHeaderLetters} className="relative block">
                i
              </span>
              <span ref={addToHeaderLetters} className="relative block">
                l
              </span>
              <span ref={addToHeaderLetters} className="relative block">
                l
              </span>
              <span ref={addToHeaderLetters} className="relative block">
                e
              </span>
              <span ref={addToHeaderLetters} className="relative block">
                m
              </span>
              <span
                ref={addToHeaderLetters}
                className="relative block ml-[0.25em]"
              >
                ©
              </span>
            </div>

            <div className="hidden lg:block overflow-hidden">
              <p
                ref={addToInteractiveLinks}
                className="m-0 text-lg font-medium leading-snug text-white/60 pointer-events-auto text-center"
              >
                Resource by{" "}
                <a
                  href="https://www.osmo.supply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4f4f4] no-underline"
                >
                  Osmo
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
