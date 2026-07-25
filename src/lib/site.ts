// src/lib/site.ts

export const siteConfig = {
  // ==========================================================
  // Basic Information
  // ==========================================================
  name: "UpgradeUX",

  legalName: "UpgradeUX",

  title: "UpgradeUX | Web Development, SEO & AI Automation Agency for Growing Businesses",

  description:
    "UpgradeUX helps businesses grow with fast, SEO-friendly websites, custom web applications, UI/UX design, WordPress development, business solutions, and AI-ready digital experiences.",

  shortDescription:
    "Modern websites built for speed, growth, and conversions.",

  url: "https://www.upgradeux.in",

  domain: "upgradeux.in",

  locale: "en_IN",

  language: "en",

  charset: "UTF-8",

  generator: "Next.js",

  applicationName: "UpgradeUX",

  creator: "Suraj Savle",

  publisher: "UpgradeUX",

  category: "Technology",

  classification: "Business Website",

  copyright: `© ${new Date().getFullYear()} UpgradeUX. All rights reserved.`,

  // ==========================================================
  // Founder
  // ==========================================================

  founder: {
    name: "Suraj Savle",
    role: "Founder & Full Stack Developer",
    url: "https://www.upgradeux.in/about",
    image: "/blog/profile/suraj-savle.jpg",
  },

  // ==========================================================
  // Contact
  // ==========================================================

  contact: {
    email: "hello@upgradeux.in", // Change later
    phone: "+91-8369213418", // Change later
    whatsapp: "+91-8369213418", // Change later
  },

  // ==========================================================
  // Address
  // ==========================================================

  address: {
    country: "India",
    countryCode: "IN",
    state: "Maharashtra",
    city: "Mumbai",
  },

  // ==========================================================
  // Branding
  // ==========================================================

  logo: "/assets/logo.png",

  logoDark: "/assets/logo.png",

  favicon: "/favicon.ico",

  appleIcon: "/apple-touch-icon.png",

  ogImage: "/social/og-image.jpg",

  twitterImage: "/social/twitter-image.jpg",

  // ==========================================================
  // Social
  // ==========================================================

  social: {
    github: "",

    linkedin: "",

    instagram: "",

    x: "",

    facebook: "",

    youtube: "",
  },

  // ==========================================================
  // Services
  // ==========================================================

  services: [
    "Custom Website Development",

    "Business Website",

    "WordPress Development",

    "Website Redesign",

    "SEO",

    "AI Visibility",

    "Business Solutions",

    "Website Maintenance",
  ],

  // ==========================================================
  // Keywords
  // ==========================================================

  keywords: [
    "Web Design Agency",
    "Web Development Agency",
    "Website Development",
    "Business Website",
    "Next.js Development",
    "React Development",
    "SEO Services",
    "WordPress Website",
    "Website Redesign",
    "Custom Website Development",
    "Landing Page Design",
    "Website Maintenance",
    "Business Solutions",
    "AI Visibility",
    "Mumbai Web Developer",
    "India Web Development",
    "UpgradeUX",
  ],

  // ==========================================================
  // Navigation
  // ==========================================================

  navigation: [
    "/",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
  ],

  // ==========================================================
  // Company Stats
  // ==========================================================

  stats: {
    founded: 2026,

    responseTime: "24 Hours",

    support: "Email & WhatsApp",

    consultation: "Free Strategy Session",
  },
} as const;

export type SiteConfig = typeof siteConfig;