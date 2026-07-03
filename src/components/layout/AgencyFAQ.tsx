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

  const handleToggle = (index: number) => {
    const isOpening = activeIndex !== index;
    
    // 1. Close current active panel if it exists
    if (activeIndex !== null) {
      const closingIndex = activeIndex;
      gsap.killTweensOf([answerRefs.current[closingIndex], contentRefs.current[closingIndex]]);
      
      const closeTl = gsap.timeline();
      closeTl.to(contentRefs.current[closingIndex], {
        y: -10,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      }).to(answerRefs.current[closingIndex], {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power3.inOut",
      }, "-=0.15");
    }

    // 2. Update state index target
    setActiveIndex(isOpening ? index : null);

    // 3. Open target panel if requested action is expanding
    if (isOpening) {
      gsap.killTweensOf([answerRefs.current[index], contentRefs.current[index]]);
      
      const openTl = gsap.timeline();
      openTl.to(answerRefs.current[index], {
        height: "auto",
        opacity: 1,
        duration: 0.45,
        ease: "power3.inOut",
      }).fromTo(contentRefs.current[index],
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          force3D: true,
        },
        "-=0.2"
      );
    }
  };

  return (
    <section className="text-zinc-950 py-12 sm:py-24 px-6 md:px-12 font-sans bg-white selection:bg-zinc-900/10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center mb-10 md:mb-20 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-zinc-950 leading-[1.1]">
              Frequently Asked
              <br />
              <span className="text-zinc-900">Questions</span>
            </h2>
          </div>
          <p className="text-sm text-zinc-700 max-w-sm ">
            Have questions about our services, processes, or technologies? Here
            are the answers to the most common inquiries we receive from our
            clients.
          </p>
        </div>

        {/* FAQ Accordion Grid Layout */}
        <div className="border-t border-zinc-200">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={item.id}
                className="group border-b border-zinc-200 will-change-[transform,opacity]"
              >
                {/* Accordion Interactive Header Triggers Toggle on Click */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-start justify-between py-6 md:py-8 cursor-pointer text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 md:gap-8 flex-1">
                    {/* Question Number Identifier */}
                    <span
                      className={`text-sm sm:font-medium transition-colors duration-300 ${
                        isOpen ? "text-zinc-950" : "text-zinc-300"
                      }`}
                    >
                      {item.id}
                    </span>

                    {/* Question Headline text */}
                    <h3
                      className={`text-sm md:text-2xl sm:font-medium transition-colors duration-300 ${
                        isOpen ? "text-zinc-950" : "text-zinc-600 group-hover:text-zinc-950"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>
                </button>

                {/* Answer Hidden Animated Mask Box */}
                <div
                  ref={(el) => {
                    answerRefs.current[index] = el;
                  }}
                  className="h-0 opacity-0 overflow-hidden transform-gpu"
                >
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="pb-6 md:pb-8 pl-9 md:pl-14 pr-4 transform-gpu"
                  >
                    <div className="max-w-3xl">
                      <p className="text-zinc-500 text-sm md:text-base sm:font-medium">
                        {item.answer}
                      </p>

                      {/* Explicit Action Call internally placed within final card node */}
                      {index === faqData.length - 1 && (
                        <div className="mt-6 pt-6 border-t border-zinc-100">
                          <a
                            href="/free-consulting"
                            className="text-zinc-950 text-xs tracking-wider inline-flex items-center gap-2 group/btn transition-all duration-300"
                          >
                            <span>Schedule a consultation</span>
                            <svg
                              className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}