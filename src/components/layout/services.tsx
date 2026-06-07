"use client";

import React from "react";

import Main from "./services/Main";
import DynamicWebsite from "./services/DynamicWebsite";
import AutomationShowcase from "./services/AutomationShowcase";
import DigitalMarketing from "./services/DigitalMarketing";

const Services = () => {
  return (
    <section className="relative w-full">
      {/* SECTION 1 */}
      <div className="sticky top-0 h-screen bg-foreground">
        <Main />
      </div>

      {/* SECTION 2 */}
      <DynamicWebsite />

      {/* SECTION 3 */}
      <AutomationShowcase />

      <DigitalMarketing />
    </section>
  );
};

export default Services;
