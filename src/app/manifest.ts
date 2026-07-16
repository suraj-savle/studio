import type { MetadataRoute } from "next";

const APP_NAME = "UpgradeUX";
const APP_DESCRIPTION =
  "UpgradeUX is a modern web design and development agency helping businesses grow with fast, SEO-friendly websites, custom web applications, business solutions, and AI-ready digital experiences.";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",

    name: APP_NAME,

    short_name: "UpgradeUX",

    description: APP_DESCRIPTION,

    start_url: "/",

    scope: "/",

    display: "standalone",

    display_override: [
      "window-controls-overlay",
      "standalone",
      "minimal-ui",
    ],

    orientation: "portrait",

    background_color: "#FFFFFF",

    theme_color: "#4DB2E0",

    lang: "en",

    dir: "ltr",

    categories: [
      "business",
      "technology",
      "productivity",
      "design",
      "developer",
    ],

    prefer_related_applications: false,

    launch_handler: {
      client_mode: ["navigate-existing", "auto"],
    },

    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcuts: [
      {
        name: "Our Services",
        short_name: "Services",
        description: "Explore our web development and design services.",
        url: "/services",
      },
      {
        name: "View Portfolio",
        short_name: "Portfolio",
        description: "See our latest projects and case studies.",
        url: "/portfolio",
      },
      {
        name: "Book Consultation",
        short_name: "Consultation",
        description: "Schedule a free business strategy session.",
        url: "/free-consultation",
      },
      {
        name: "Contact Us",
        short_name: "Contact",
        description: "Get in touch with UpgradeUX.",
        url: "/contact",
      },
    ],
  };
}