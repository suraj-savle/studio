"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { TbShieldLock, TbSettings, TbX, TbCheck } from "react-icons/tb";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Consent Tracking State Nodes
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: true,
    marketing: false,
  });

  // Verify prior consent parameters upon initial DOM mount
  useEffect(() => {
    const hasInteracted = localStorage.getItem("upgradeux_cookie_consent");
    if (!hasInteracted) {
      // Small semantic delay to allow core viewport components to mount smoothly
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentPayload = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem(
      "upgradeux_cookie_consent",
      JSON.stringify(consentPayload),
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "upgradeux_cookie_consent",
      JSON.stringify(preferences),
    );
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleDeclineAll = () => {
    const consentPayload = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem(
      "upgradeux_cookie_consent",
      JSON.stringify(consentPayload),
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-0 sm:right-5 z-50 w-full max-w-sm mx-auto px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="w-full bg-white/95 backdrop-blur-md border border-zinc-200/80 rounded-2xl shadow-xl shadow-zinc-950/5 p-5 sm:p-6  relative overflow-hidden">
        {/* Top Header Segment */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div>
            <Image
              src="/cookie.png"
              alt="Cookie Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="flex-1 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div>
                <h3 className="text-xs font-bold text-zinc-950 tracking-tight">
                  Cookie Preferences
                </h3>
                <p className="text-[10px] text-zinc-500">
                  Choose how we use cookies on this website.
                </p>
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
        </div>

        {/* Dynamic Panel Display Toggle */}
        {!showPreferences ? (
          <>
            {/* Standard Overview Mode */}
            <p className="text-[10px] text-zinc-500 leading-relaxed mb-1">
              We use cookies to keep our website secure, improve performance,
              understand how visitors use our site, and enhance your browsing
              experience. You can accept all cookies, reject optional cookies,
              or manage your preferences at any time. Read our{" "}
              <a
                href="/privacy-policy"
                className="text-[#4DB2E0] hover:underline font-medium"
              >
                Privacy Policy
              </a>{" "}
              to learn more.
            </p>

            {/* Primary Action Button Cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 py-2 px-1 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-[10px]  shadow-xs transition-all active:scale-[0.98]"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="w-full sm:flex-1 py-2 px-1 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-[10px]  shadow-xs transition-all active:scale-[0.98]"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleDeclineAll}
                className="w-full sm:flex-1 py-2 px-1 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 rounded-xl text-[10px] tracking-wider transition-all active:scale-[0.98]"
              >
                Reject Optional Cookies
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Granular Preference Tuning Panel */}
            <div className="space-y-3 my-4  overflow-y-auto pr-1">
              {/* Necessary Flag Node */}
              <div className="flex items-center justify-between p-2.5 bg-zinc-50 rounded-xl border border-zinc-100">
                <div className="max-w-[75%]">
                  <p className="text-xs font-bold text-zinc-800">
                    Essential Cookies
                  </p>
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    These cookies are required for the website to function
                    properly. They cannot be disabled.
                  </p>
                </div>
              </div>

              {/* Analytics Tracking Checkbox */}
              <label className="flex items-center justify-between p-2.5 bg-white hover:bg-zinc-50 rounded-xl border border-zinc-100 cursor-pointer transition-colors group">
                <div className="max-w-[75%]">
                  <p className="text-xs font-bold text-zinc-800 group-hover:text-[#0000004f] transition-colors">
                    Analytics Cookies
                  </p>
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    Help us understand how visitors interact with our website so
                    we can improve performance, usability, and overall
                    experience.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      analytics: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-[#00000051] border-zinc-300 rounded focus:ring-[#00000079] cursor-pointer"
                />
              </label>

              {/* Marketing Tracking Checkbox */}
              <label className="flex items-center justify-between p-2.5 bg-white hover:bg-zinc-50 rounded-xl border border-zinc-100 cursor-pointer transition-colors group">
                <div className="max-w-[75%]">
                  <p className="text-xs font-bold text-zinc-800 group-hover:text-[#0000004e] transition-colors">
                    Marketing Cookies
                  </p>
                  <p className="text-[10px] text-zinc-400 leading-tight">
                    Used to deliver relevant content and advertisements, and to
                    measure the effectiveness of our marketing campaigns.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      marketing: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-[#00000053] border-zinc-300 rounded focus:ring-[#00000073] cursor-pointer"
                />
              </label>
            </div>

            {/* Save & Back Button Grid */}
            <div className="flex items-center gap-2 w-full pt-2">
              <button
                onClick={handleSavePreferences}
                className="flex-1 py-2 px-4 bg-zinc-950 hover:bg-zinc-900 text-white rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Save Preferences</span>
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="py-2 px-4 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-500 hover:text-zinc-800 rounded-xl text-xs transition-all"
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
