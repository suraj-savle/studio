"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TbX } from "react-icons/tb";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const hasInteracted = localStorage.getItem("upgradeux_cookie_consent");
    if (!hasInteracted) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentPayload = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("upgradeux_cookie_consent", JSON.stringify(consentPayload));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const consentPayload = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("upgradeux_cookie_consent", JSON.stringify(consentPayload));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("upgradeux_cookie_consent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-0 sm:right-5 z-50 w-full max-w-sm mx-auto px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="w-full bg-white/95 backdrop-blur-md border border-zinc-200/80 rounded-2xl shadow-xl shadow-zinc-950/5 p-5 sm:p-6 relative overflow-hidden">
        
        {/* Top Header Segment */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <Image src="/cookie.png" alt="Cookie Icon" width={24} height={24} />
            <div>
              <h3 className="text-xs font-bold text-zinc-950 tracking-tight">Cookie Preferences</h3>
              <p className="text-[10px] text-zinc-500">Manage how we use cookies.</p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
            aria-label="Close cookie preferences"
          >
            <TbX className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Panel Display Toggle */}
        {!showPreferences ? (
          <>
            {/* Standard Overview Mode */}
            <p className="text-[11px] text-zinc-500 leading-relaxed mb-4">
              We use cookies to keep our website secure, improve performance, analyze website traffic, and enhance your browsing experience. You can change your preferences at any time. Read our{" "}
              <a href="/privacy-policy" className="text-[#4DB2E0] hover:underline font-semibold">
                Privacy Policy
              </a>.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-col gap-1.5 w-full">
              <button
                onClick={handleAcceptAll}
                className="w-full py-2 px-3 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-[11px] transition-all active:scale-[0.98]"
              >
                Accept All
              </button>
              <div className="grid grid-cols-2 gap-1.5 w-full">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="py-2 px-1.5 bg-zinc-100 hover:bg-zinc-200/70 border border-zinc-200 text-zinc-800 rounded-xl text-[10px] transition-all"
                >
                  Customize
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="py-2 px-1.5 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-500 rounded-xl text-[10px] transition-all"
                >
                  Reject Non-Essential
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Granular Preference Tuning Panel */}
            <div className="space-y-2.5 my-4">
              {/* Essential */}
              <div className="flex items-center justify-between p-2.5 bg-zinc-50 rounded-xl border border-zinc-100">
                <div className="max-w-[80%]">
                  <p className="text-xs font-bold text-zinc-800">Essential Cookies</p>
                  <p className="text-[10px] text-zinc-400 leading-tight">Required for the website to function properly. They cannot be disabled.</p>
                </div>
                <span className="text-[9px] font-bold text-zinc-400 uppercase bg-zinc-200/50 px-1.5 py-0.5 rounded">Always On</span>
              </div>

              {/* Analytics */}
              <label className="flex items-center justify-between p-2.5 bg-white hover:bg-zinc-50/50 rounded-xl border border-zinc-100 cursor-pointer transition-colors group">
                <div className="max-w-[80%]">
                  <p className="text-xs font-bold text-zinc-800 group-hover:text-[#4DB2E0] transition-colors">Analytics Cookies</p>
                  <p className="text-[10px] text-zinc-400 leading-tight">Help us understand how visitors use our website so we can improve performance and user experience.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 text-[#4DB2E0] border-zinc-300 rounded focus:ring-[#4DB2E0] cursor-pointer"
                />
              </label>

              {/* Marketing */}
              <label className="flex items-center justify-between p-2.5 bg-white hover:bg-zinc-50/50 rounded-xl border border-zinc-100 cursor-pointer transition-colors group">
                <div className="max-w-[80%]">
                  <p className="text-xs font-bold text-zinc-800 group-hover:text-[#4DB2E0] transition-colors">Marketing Cookies</p>
                  <p className="text-[10px] text-zinc-400 leading-tight">Used to show relevant ads and measure the effectiveness of our marketing campaigns.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="w-4 h-4 text-[#4DB2E0] border-zinc-300 rounded focus:ring-[#4DB2E0] cursor-pointer"
                />
              </label>
            </div>

            {/* Save & Back Button Grid */}
            <div className="flex items-center gap-2 w-full pt-1">
              <button
                onClick={handleSavePreferences}
                className="flex-1 py-2 px-4 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-xs font-bold transition-all"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="py-2 px-4 bg-zinc-100 text-zinc-600 hover:text-zinc-900 rounded-xl text-xs font-semibold transition-all"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}