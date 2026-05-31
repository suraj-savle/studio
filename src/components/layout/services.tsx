"use client";

import React from "react";

import Main from "./services/Main";
import DynamicWebsite from "./services/DynamicWebsite";
import AutomationShowcase from "./services/AutomationShowcase";
import DigitalMarketing from "./services/DigitalMarketing";

const Services = () => {
  return (
    <section className="relative w-full bg-[#f5f5f0]">
      
      {/* SECTION 1 */}
      <div className="sticky top-0 h-screen z-10">
        <Main />
      </div>

      {/* SECTION 2 */}
      <div className="sticky top-0 h-screen z-20">
        <DynamicWebsite />
      </div>

      {/* SECTION 3 */}
      <div className="sticky top-0 h-screen z-30">
        <AutomationShowcase />
      </div>

      <div className="sticky top-0 h-screen z-30">
        <DigitalMarketing />
      </div>

    </section>
  );
};

export default Services;