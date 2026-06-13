"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const faqData = [
  {
    id: "01",
    question: "What is your typical project timeline?",
    answer:
      "Most digital products take 8-12 weeks from strategy to launch. We prioritize quality over speed, ensuring every pixel and interaction serves a purpose. Throughout this process, we maintain transparent communication and provide weekly progress updates to ensure alignment with your goals.",
  },
  {
    id: "02",
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. We view ourselves as partners, not vendors. We offer monthly evolution sprints to keep your platform scaling with your user base. Our support includes regular performance audits, security updates, feature enhancements, and 24/7 emergency maintenance.",
  },
  {
    id: "03",
    question: "How do you handle branding and UI/UX?",
    answer:
      "Our process is research-driven. We start with 'The Why' before moving to wireframes, ensuring the visual identity aligns with business goals. We conduct user research, create interactive prototypes, and iterate based on feedback before any code is written.",
  },
  {
    id: "04",
    question: "What technologies do you specialize in?",
    answer:
      "We are experts in Next.js, GSAP, and Tailwind for the front-end, paired with headless CMS solutions like Sanity or Strapi for flexibility. Our backend expertise includes Node.js, Python, and cloud platforms like AWS and Vercel for optimal performance.",
  },
  {
    id: "05",
    question: "How do you measure project success?",
    answer:
      "We define key performance indicators (KPIs) at the start of every project based on your business objectives. Metrics include user engagement, conversion rates, page load times, and overall ROI. We provide detailed analytics dashboards and monthly performance reports.",
  },
  {
    id: "06",
    question: "Can you work with existing designs or systems?",
    answer:
      "Yes, we regularly collaborate with in-house design teams or integrate with existing CMS platforms. Our flexible approach allows us to adapt to your current tech stack while providing recommendations for improvement where beneficial.",
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
    <section className="bg-foreground text-primary py-24 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
              Frequently Asked
              <br />
              <span className="text-secondary">Questions</span>
            </h2>
          </div>
          <p className="max-w-md text-secondary text-base leading-relaxed border-l-2 border-primary/20 pl-6">
            Transparency is the foundation of our partnership. If you have other
            questions, feel free to reach out directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-primary/10">
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
                    className={`text-xl md:text-2xl lg:text-3xl font-medium tracking-tight transition-colors duration-300 ${
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
                          Schedule a consultation
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

        {/* Footer Contact Section */}
        <div className="mt-20 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h3 className="text-xl font-medium text-primary mb-2">
                Still have questions?
              </h3>
              <p className="text-secondary text-sm">
                We're here to help you with any inquiries
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 bg-primary text-foreground rounded-lg font-medium transition-all duration-300 hover:opacity-90">
                Contact Us
              </button>
              <button className="px-6 py-2.5 border border-primary/20 text-primary rounded-lg font-medium transition-all duration-300 hover:bg-primary/5">
                Schedule Call
              </button>
            </div>
          </div>
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
