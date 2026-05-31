"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, MessageSquare, MessageCircle, Bot } from "lucide-react";
import { IconBrandInstagram } from "@tabler/icons-react";

const automationShowcase = [
  {
    num: "01",
    tag: "WHATSAPP",
    title: "WhatsApp Message Automation",
    description:
      "Architecting programmatic broadcast layers, instant template responses, and live web-hook delivery pipelines.",
  },
  {
    num: "02",
    tag: "INSTAGRAM",
    title: "Instagram Auto-Chat Routing",
    description:
      "Streamline DM engagement structures by triggering automated conversation nodes from profile interactions.",
  },
  {
    num: "03",
    tag: "CORE INFRASTRUCTURE",
    title: "N8N Workflow Automation",
    description:
      "Deep backend database syncing and API orchestration connecting critical software stacks natively.",
  },
  {
    num: "04",
    tag: "INTELLIGENT AGENTS",
    title: "Custom Chatbot Integration",
    description:
      "Deploying high-performance LLM engines capable of processing real-time system tasks and user execution context.",
  },
];

function AutomationShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-foreground text-[#18181B] flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden selection:bg-[#18181B] selection:text-[#f5f5f0]">
      
      {/* HEADER SECTION: Responsive Typographic Alignment */}
      <div className="w-full flex items-center justify-center mx-auto mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-[4rem] leading-[0.95] tracking-[-0.05em] font-medium text-black">
          AUTOMATION SERVICES
        </h2>
      </div>

      {/* LOWER SECTION: Fluid Responsive Shelf Expanders */}
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        {automationShowcase.map((card, index) => {
          const isHovered = hoveredIdx === index;
          
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setHoveredIdx(isHovered ? null : index)} // Mobile tap friendly tracking container
              className="w-full border-b border-black/10 first:border-t flex flex-col cursor-default py-6 sm:py-10 relative group transition-colors duration-300 hover:bg-white/[0.25] px-2 sm:px-4"
            >
              <div className="w-full flex flex-row items-center justify-between gap-4 relative z-10">
                
                {/* Left Side Layout Grouping */}
                <div className="flex items-center gap-4 sm:gap-12 md:gap-20">
                  <span className="text-xs font-mono tracking-widest text-[#71717A] min-w-[20px] sm:min-w-[24px]">
                    {card.num}
                  </span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 lg:gap-10">
                    <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.03em] text-black transition-transform duration-300 sm:group-hover:translate-x-1">
                      {card.title}
                    </h3>
                    <span className="text-[8px] font-mono tracking-widest text-[#71717A] border border-black/10 px-1.5 py-0.5 max-w-max bg-black/[0.01]">
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* Right Side Indicator */}
                <div className="block">
                  <motion.div
                    animate={{ rotate: isHovered ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-[#71717A] group-hover:text-black shrink-0 p-1"
                  >
                    <Plus size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </div>

              {/* Dynamic Expandable Sub-Panel */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isHovered ? "auto" : 0, 
                  opacity: isHovered ? 1 : 0 
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden relative z-10"
              >
                <div className="pl-9 sm:pl-16 md:pl-[104px] pr-2 sm:pr-4 pt-3 pb-1 max-w-3xl">
                  <p className="text-xs sm:text-[14px] text-[#71717A] font-light leading-relaxed tracking-normal">
                    {card.description}
                  </p>
                </div>
              </motion.div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

export default AutomationShowcase;