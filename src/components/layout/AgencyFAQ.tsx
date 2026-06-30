"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const faqData = [
  {
    id: "01",
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope, but most websites and digital products are completed within 2–8 weeks. You'll receive regular updates throughout the process, ensuring everything stays on schedule.",
  },
  {
    id: "02",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, performance optimization, security updates, and feature enhancements to keep your website running smoothly long after launch.",
  },
  {
    id: "03",
    question: "Can you help with branding and UI/UX design?",
    answer:
      "Absolutely. We design intuitive user experiences and modern interfaces backed by research, ensuring your brand looks professional while improving usability and conversions.",
  },
  {
    id: "04",
    question: "What technologies do you use?",
    answer:
      "We build with modern technologies including Next.js, React, TypeScript, Tailwind CSS, Node.js, and headless CMS solutions to create fast, scalable, and SEO-friendly websites.",
  },
  {
    id: "05",
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer:
      "Yes. Every project is fully responsive, optimized for Core Web Vitals, and built using SEO best practices to improve visibility, speed, and user experience across all devices.",
  },
  {
    id: "06",
    question: "Can you redesign my existing website?",
    answer:
      "Definitely. Whether your website needs a visual refresh, better performance, or a complete rebuild, we can transform it into a modern, high-performing digital experience.",
  },
];

export default function AgencyFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onEnter = (index: number) => {
    setActiveIndex(index);

    // Force overwrite kills any lingering reverse animations mid-stutter
    gsap.killTweensOf([answerRefs.current[index], contentRefs.current[index]]);

    const tl = gsap.timeline();

    tl.to(answerRefs.current[index], {
      height: "auto",
      opacity: 1,
      duration: 0.55,
      ease: "power3.inOut",
    }).fromTo(
      contentRefs.current[index],
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
        force3D: true,
      },
      "-=0.3", // Clean overlap sequencing prevents a halting feel
    );
  };

  const onLeave = (index: number) => {
    gsap.killTweensOf([answerRefs.current[index], contentRefs.current[index]]);

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex((prev) => (prev === index ? null : prev));
      },
    });

    tl.to(contentRefs.current[index], {
      y: -10,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      force3D: true,
    }).to(
      answerRefs.current[index],
      {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      },
      "-=0.15",
    );
  };

  return (
    <section className="text-primary py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:mb-20 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-[1.1]">
              Frequently Asked
              <br />
              <span className="text-secondary">Questions</span>
            </h2>
          </div>
          <p className="text-sm text-secondary/80 max-w-md leading-relaxed">
            Have questions about our services, processes, or technologies? Here
            are the answers to the most common inquiries we receive from our
            clients.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="group border-b border-primary/10 will-change-[transform,opacity]"
              onMouseEnter={() => onEnter(index)}
              onMouseLeave={() => onLeave(index)}
            >
              {/* Removed transition-all duration-300 from here to prevent fighting GSAP layout state changes */}
              <div className="flex items-start justify-between py-6 md:py-8 cursor-pointer">
                <div className="flex items-start gap-4 md:gap-8 flex-1">
                  {/* Question Number */}
                  <span
                    className={`text-sm font-mono font-medium transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-primary"
                        : "text-secondary/40"
                    }`}
                  >
                    {item.id}
                  </span>

                  {/* Question Text */}
                  <h3
                    className={`text-xl md:text-2xl lg:text-2xl font-medium tracking-tight transition-colors duration-300 ${
                      activeIndex === index
                        ? "text-primary"
                        : "text-secondary/70 group-hover:text-primary/80"
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>

                {/* Expand Icon Frame */}
                <div className="relative w-8 h-8 flex items-center justify-center ml-4">
                  <div
                    className={`relative w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      activeIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <span className="absolute top-1/2 left-0 w-full h-px bg-primary/60 -translate-y-1/2" />
                    <span
                      className={`absolute top-0 left-1/2 w-px h-full bg-primary/60 -translate-x-1/2 transition-opacity duration-300 ${
                        activeIndex === index ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Answer Panel Box */}
              <div
                ref={(el: HTMLDivElement | null) => {
                  answerRefs.current[index] = el;
                }}
                className="h-0 opacity-0 overflow-hidden transform-gpu"
              >
                <div
                  ref={(el: HTMLDivElement | null) => {
                    contentRefs.current[index] = el;
                  }}
                  className="pb-6 md:pb-8 pl-12 md:pl-16 pr-4 transform-gpu"
                >
                  <div className="max-w-3xl">
                    <div className="w-12 h-px bg-primary/20 mb-4" />
                    <p className="text-secondary text-base leading-relaxed">
                      {item.answer}
                    </p>

                    {/* Optional CTA within answer */}
                    {index === faqData.length - 1 && (
                      <div className="mt-6 pt-4 border-t border-primary/10">
                        <button className="text-primary font-medium text-sm inline-flex items-center gap-2 group/btn transition-all duration-300 hover:gap-3">
                          <a href="/contact" className="text-primary font-medium text-sm inline-flex items-center gap-2 group/btn transition-all duration-300 hover:gap-3">
                            Schedule a consultation
                          </a>
                          <svg
                            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
