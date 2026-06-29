"use client";

import React, { useRef, useEffect } from "react";
import { 
  TbClock, 
  TbGift, 
  TbRocket, 
  TbHeartHandshake, 
  TbCode, 
  TbRosetteDiscountCheck,
  TbUsers,
  TbShieldCheck,
  TbStar,
  TbBrandZapier
} from "react-icons/tb";

export default function FeaturesMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: TbClock, label: "24/7 Support", color: "#3B82F6" },
    { icon: TbGift, label: "1 Months Free Support", color: "#EC4899" },
    { icon: TbHeartHandshake, label: "100% Satisfaction", color: "#22C55E" },
    { icon: TbRocket, label: "Web Vitals Optimized", color: "#8B5CF6" },
    { icon: TbCode, label: "Next.js & MERN", color: "#06B6D4" },
    { icon: TbRosetteDiscountCheck, label: "Glassmorphism Design", color: "#F59E0B" },
    { icon: TbUsers, label: "Trusted by Leaders", color: "#6366F1" },
    { icon: TbShieldCheck, label: "Security First", color: "#EF4444" },
    { icon: TbStar, label: "Client First", color: "#8B5CF6" },
    { icon: TbBrandZapier, label: "Lightning Fast", color: "#F97316" },
  ];

  const doubledFeatures = [...features, ...features, ...features];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      const contentWidth = container.scrollWidth / 3;
      if (Math.abs(position) >= contentWidth) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-7xl mx-auto py-12 overflow-hidden relative">
      {/* Subtle Background */}
      

      {/* Marquee */}
      <div className="relative z-10">
        <div 
          ref={containerRef}
          className="flex gap-8 px-4 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {doubledFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-white px-5 py-3 rounded shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-slate-200/50"
              >
                <div 
                  className="p-1.5 rounded-full"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon 
                    className="w-4 h-4" 
                    style={{ color: feature.color }}
                  />
                </div>
                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  {feature.label}
                </span>
                {index < doubledFeatures.length - 1 && (
                  <div className="w-1 h-1 rounded-full bg-slate-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}