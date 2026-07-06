import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UpgradeUX",
    short_name: "UpgradeUX",
    description:
      "UpgradeUX builds high-performance websites that are fast, modern, SEO-friendly, and designed to convert visitors into customers.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#4DB2E0",

    orientation: "portrait",

    lang: "en",

    categories: [
      "business",
      "technology",
      "design",
      "development",
    ],

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}