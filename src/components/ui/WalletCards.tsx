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
  animationDelay: string;
  bottom: string;
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
    number: "5524 9910 4242",
    displayNumber: "**** 4242",
    color: "#635bff",
    animationDelay: "0.1s",
    bottom: "90px",
    zIndex: 10,
  },
  {
    id: "wise",
    name: "Wise",
    holder: "STUDIO LLC",
    number: "9012 4432 8810",
    displayNumber: "**** 8810",
    color: "#9bd86a",
    animationDelay: "0.2s",
    bottom: "65px",
    zIndex: 20,
  },
  {
    id: "paypal",
    name: "PayPal",
    holder: "hello@work.com",
    number: "3312 0045 0094",
    displayNumber: "**** 0094",
    color: "#ffffff",
    textColor: "#003087",
    animationDelay: "0.3s",
    bottom: "40px",
    zIndex: 30,
  },
];

// ============================================================================
// Subcomponents
// ============================================================================

const EyeIcon: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`absolute top-0 left-0 stroke-[#3be60b] transition-all duration-300 ${
      isVisible ? "opacity-100 scale-110" : "opacity-100 scale-100"
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
  <svg className="w-full h-full" viewBox="0 0 280 160" fill="none">
    <path
      d="M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 240 25 C 255 25, 260 10, 270 10 C 275 10, 280 10, 280 20 L 280 120 C 280 155, 260 160, 240 160 L 40 160 C 20 160, 0 155, 0 120 Z"
      fill="#1e341e"
    />
    <path
      d="M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 240 29 C 253 29, 257 16, 265 16 C 268 16, 272 16, 272 22 L 272 120 C 272 150, 255 152, 240 152 L 40 152 C 25 152, 8 152, 8 120 Z"
      stroke="#3d5635"
      strokeWidth="1.5"
      strokeDasharray="6 4"
    />
  </svg>
);

const Card: React.FC<{ data: CardData; isWalletHovered: boolean }> = ({
  data,
  isWalletHovered,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCardTransform = () => {
    if (!isWalletHovered) return "";
    if (isHovered) {
      return "translate-y-[-60px] scale-105 rotate-0";
    }
    switch (data.id) {
      case "stripe":
        return "translate-y-[-75px] -rotate-3";
      case "wise":
        return "translate-y-[-45px] rotate-2";
      case "paypal":
        return "translate-y-[-10px]";
      default:
        return "";
    }
  };

  return (
    <div
      className={`absolute w-[260px] h-[140px] left-[10px] rounded-2xl p-[18px] text-${
        data.textColor ? "[" + data.textColor + "]" : "white"
      } shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_-4px_15px_rgba(0,0,0,0.1)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] animate-[slideIntoPocket_0.8s_cubic-bezier(0.2,0.8,0.2,1)_backwards] hover:!z-[100]`}
      style={{
        bottom: data.bottom,
        zIndex: data.zIndex,
        background: data.color,
        animationDelay: data.animationDelay,
        transform: getCardTransform(),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-center text-sm uppercase tracking-[1px]">
          <span>
            {data.id === "paypal" ? (
              <>
                Pay<b style={{ color: "#0079C1" }}>Pal</b>
              </>
            ) : (
              data.name
            )}
          </span>
          <div
            className={`w-8 h-6 rounded border border-white/10 ${
              data.id === "paypal" ? "bg-black/5" : "bg-white/20"
            }`}
          />
        </div>

        <div className="flex justify-between items-end">
          <div>
            <span className="text-[8px] opacity-70 uppercase block mb-0.5">
              {data.id === "paypal" ? "Email" : "Holder"}
            </span>
            <span className="text-[10px] font-medium">{data.holder}</span>
          </div>
          <div className="text-right">
            <span className="text-base tracking-[2px]">{data.displayNumber}</span>
            <span
              className={`text-sm tracking-[1px] font-mono ${
                isHovered ? "block" : "hidden"
              }`}
            >
              {data.number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export default function WalletCards() {
  const [isWalletHovered, setIsWalletHovered] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-[400px] p-10">
      <div
        className="relative w-[280px] h-[230px] cursor-pointer perspective-[1000px] flex justify-center items-end transition-transform duration-300 hover:-translate-y-1 group"
        onMouseEnter={() => setIsWalletHovered(true)}
        onMouseLeave={() => setIsWalletHovered(false)}
      >
        {/* Wallet Back */}
        <div className="absolute bottom-0 w-[280px] h-[200px] bg-[#1e341e] rounded-[22px_22px_60px_60px] z-[5] shadow-[inset_0_25px_35px_rgba(0,0,0,0.4),inset_0_5px_15px_rgba(0,0,0,0.5)]" />

        {/* Cards */}
        {CARDS.map((cardData) => (
          <Card
            key={cardData.id}
            data={cardData}
            isWalletHovered={isWalletHovered}
          />
        ))}

        {/* Pocket */}
        <div className="absolute bottom-0 w-[280px] h-[160px] z-40 drop-shadow-[0_15px_25px_rgba(20,40,20,0.4)]">
          <PocketSVG />
          <div className="absolute top-[45px] w-full text-center z-50 flex flex-col items-center gap-2">
            <div className="relative h-6 w-full">
              <span className="text-[#839e7b] text-2xl tracking-[4px] transition-opacity duration-300 group-hover:opacity-0">
                ******
              </span>
              <span
                className={`absolute top-0 left-1/2 -translate-x-1/2 text-[#a7c59e] text-2xl font-semibold transition-all duration-300 ${
                  isWalletHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2.5"
                }`}
              >
                $12,450.00
              </span>
            </div>
            <div className="text-[#698263] text-xs font-medium">Total Balance</div>
            <div
              className={`mt-2 h-5 w-5 relative transition-opacity duration-300 ${
                isWalletHovered ? "opacity-100" : "opacity-30"
              }`}
            >
              <EyeIcon isVisible={isWalletHovered} />
            </div>
          </div>
        </div>

        {/* Hint Text */}
        <div className="absolute -bottom-[30px] italic text-[#003087] text-sm font-semibold underline">
          Hover to see Balance
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes slideIntoPocket {
          0% {
            transform: translateY(-100px);
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