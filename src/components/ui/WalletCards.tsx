"use client";

import React, { useState } from "react";

// ============================================================================
// Types
// ============================================================================

interface CardData {
  id: string;
  name: string;
  holder: string;
  number: string;
  displayNumber: string;
  color: string;
  textColor?: string;
  borderColor?: string;
  animationDelay: string;
  bottom: number;
  zIndex: number;
}

// ============================================================================
// Constants
// ============================================================================

const CARDS: CardData[] = [
  {
    id: "stripe",
    name: "Stripe",
    holder: "ALEX SMITH",
    number: "5524 9910 4242 1982",
    displayNumber: "•••• 4242",
    color: "linear-gradient(135deg, #635bff 0%, #8075ff 100%)",
    animationDelay: "0.1s",
    bottom: 90,
    zIndex: 10,
  },
  {
    id: "wise",
    name: "Wise",
    holder: "STUDIO LLC",
    number: "9012 4432 8810 4421",
    displayNumber: "•••• 8810",
    color: "linear-gradient(135deg, #9bd86a 0%, #b2e885 100%)",
    textColor: "#141d0f",
    borderColor: "rgba(0,0,0,0.05)",
    animationDelay: "0.2s",
    bottom: 65,
    zIndex: 20,
  },
  {
    id: "paypal",
    name: "PayPal",
    holder: "hello@work.com",
    number: "3312 0045 0094 7710",
    displayNumber: "•••• 0094",
    color: "linear-gradient(135deg, #ffffff 0%, #f4f6f9 100%)",
    textColor: "#003087",
    borderColor: "rgba(0,0,0,0.1)",
    animationDelay: "0.3s",
    bottom: 40,
    zIndex: 30,
  },
];

// ============================================================================
// Subcomponents
// ============================================================================

const EyeIcon: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-all duration-300 ${
      isVisible ? "text-emerald-400 scale-110" : "text-zinc-500 scale-100"
    }`}
  >
    {isVisible ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx={12} cy={12} r={3} />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx={12} cy={12} r={3} />
        <line x1={3} y1={3} x2={21} y2={21} />
      </>
    )}
  </svg>
);

const PocketSVG: React.FC = () => (
  <svg className="w-full h-full drop-shadow-[0_-8px_20px_rgba(0,0,0,0.3)]" viewBox="0 0 280 160" fill="none">
    {/* Premium Sleek Leather/Carbon Texture Wallet Front Pocket */}
    <path
      d="M 0 24 C 0 12, 6 10, 12 10 C 24 10, 30 25, 45 25 L 235 25 C 250 25, 256 10, 268 10 C 274 10, 280 12, 280 24 L 280 125 C 280 155, 255 160, 235 160 L 45 160 C 25 160, 0 155, 0 125 Z"
      fill="#18181b"
    />
    {/* Elegant Outer Contrast Stitched Border Line */}
    <path
      d="M 8 24 C 8 18, 12 16, 16 16 C 24 16, 30 29, 45 29 L 235 29 C 250 29, 256 16, 264 16 C 268 16, 272 18, 272 24 L 272 120 C 272 146, 250 152, 235 152 L 45 152 C 30 152, 8 146, 8 120 Z"
      stroke="#3f3f46"
      strokeWidth="1.25"
      strokeDasharray="5 4"
    />
  </svg>
);

interface CardProps {
  data: CardData;
  isWalletHovered: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ data, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      className={`absolute w-[260px] h-[145px] left-[10px] rounded-xl p-4 transition-all duration-500 cursor-pointer select-none
        [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
        animate-[slideIntoPocket_0.8s_cubic-bezier(0.2,0.8,0.2,1)_backwards]`}
      style={{
        bottom: `${data.bottom}px`,
        zIndex: isSelected ? 100 : (isHovered ? 90 : data.zIndex),
        background: data.color,
        animationDelay: data.animationDelay,
        color: data.textColor || "white",
        border: data.borderColor ? `1px solid ${data.borderColor}` : "1px solid rgba(255,255,255,0.15)",
        boxShadow: isSelected 
          ? "0 20px 25px -5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.2)" 
          : "inset 0 1px 1px rgba(255,255,255,0.2), 0 -4px 12px rgba(0,0,0,0.1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-between h-full relative overflow-hidden">
        {/* Decorative Subtle Ambient Card Reflection Ring */}
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

        {/* Top Row Header */}
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1">
            {data.id === "paypal" ? (
              <span>Pay<span className="text-[#0079C1] font-extrabold">Pal</span></span>
            ) : (
              data.name
            )}
          </span>
          
          {/* Hardware Micro-Chip Symbol Display Emulation */}
          <div className={`w-7 h-5 rounded-xs border opacity-80 flex flex-col justify-between p-0.5 ${
            data.id === "paypal" ? "bg-zinc-800/10 border-zinc-900/20" : "bg-white/20 border-white/20"
          }`}>
            <div className="h-[2px] w-2/3 bg-current opacity-40 rounded-xs" />
            <div className="h-[2px] w-full bg-current opacity-40 rounded-xs" />
            <div className="h-[2px] w-1/2 bg-current opacity-40 rounded-xs" />
          </div>
        </div>

        {/* Bottom Metadata Footer Details */}
        <div className="flex justify-between items-end relative z-10">
          <div>
            <span className="text-[7px] opacity-60 uppercase block font-mono tracking-tight mb-0.5">
              {data.id === "paypal" ? "Account Email" : "Card Holder"}
            </span>
            <span className="text-[10px] font-semibold tracking-wide truncate max-w-[130px] block">
              {data.holder}
            </span>
          </div>
          <div className="text-right font-mono">
            <span className="text-xs tracking-wider block transition-all duration-300">
              {isHovered || isSelected ? data.number.replace(/(.{4})/g, "$1 ") : data.displayNumber}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Export Component
// ============================================================================

export default function WalletCards() {
  const [isWalletHovered, setIsWalletHovered] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);


  return (
    <div className="flex flex-col items-center justify-center min-h-[440px] p-6 bg-transparent">
      <div
        className="relative w-[280px] h-[240px] cursor-pointer perspective-[1000px] flex justify-center items-end transition-transform duration-300 hover:-translate-y-1 group"
        onMouseEnter={() => setIsWalletHovered(true)}
        onMouseLeave={() => setIsWalletHovered(false)}
        onClick={() => setSelectedCardId(null)} // Click background container workspace area to reset selection layout state
      >
        {/* Matte Obsidian Wallet Shell Body Backplane */}
        <div className="absolute bottom-0 w-[280px] h-[205px] bg-[#202023] rounded-[22px_22px_45px_45px] z-[5] shadow-[inset_0_20px_30px_rgba(0,0,0,0.5),inset_0_2px_5px_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.4)] border border-zinc-800/40" />

        {/* Dynamic Card Layers Loop */}
        {CARDS.map((cardData) => (
          <Card
            key={cardData.id}
            data={cardData}
            isWalletHovered={isWalletHovered}
            isSelected={selectedCardId === cardData.id}
            onSelect={() => setSelectedCardId(cardData.id === selectedCardId ? null : cardData.id)}
          />
        ))}

        {/* Front Shield Overlay Leather Pocket Wrapper */}
        <div className="absolute bottom-0 w-[280px] h-[160px] z-40">
          <PocketSVG />
          
          {/* Interior Balance Value Display Stack */}
          <div className="absolute top-[42px] w-full text-center z-50 flex flex-col items-center gap-1">
            <div className="relative h-7 w-full flex items-center justify-center">
              <span className="text-zinc-500 text-xl font-medium tracking-[5px] transition-all duration-300 absolute  group-hover:scale-95">
                ••••••
              </span>
            </div>
            
            <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest opacity-80">
              Total Balance
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Scoped Style Keyframes */}
      <style jsx>{`
        @keyframes slideIntoPocket {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}