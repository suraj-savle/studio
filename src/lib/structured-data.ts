import { siteConfig } from "./site";

const baseUrl = siteConfig.url;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": `${baseUrl}/#organization`,

    name: "UpgradeUX",

    alternateName: [
      "Upgrade UX",
      "UpgradeUX Agency",
      "UpgradeUX Web Design Agency",
    ],

    legalName: "UpgradeUX",

    url: baseUrl,

    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
    },

    image: `${baseUrl}${siteConfig.ogImage}`,

    description: siteConfig.description,

    email: siteConfig.contact.email,

    telephone: siteConfig.contact.phone,

    foundingDate: "2026",

    founder: {
      "@type": "Person",
      name: "Suraj Savle",
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Maharashtra",
    },

    sameAs: [
      "https://www.linkedin.com/in/surajsavle",
      "https://www.instagram.com/upgradeux",
      "https://x.com/upgradeuxagency",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": `${baseUrl}/#website`,

    url: baseUrl,

    name: "UpgradeUX",

    alternateName: "Upgrade UX",

    description: siteConfig.description,

    inLanguage: "en",

    publisher: {
      "@id": `${baseUrl}/#organization`,
    },

    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}



export function personSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "Person",

    "@id": `${baseUrl}/#founder`,

    name: "Suraj Savle",

    url: siteConfig.founder.url,

    image: `${baseUrl}${siteConfig.founder.image}`,

    worksFor: {
      "@id": `${baseUrl}/#organization`,
    },
  };
}

interface ServiceProps {
  name: string;
  description: string;
  url: string;
}

export function serviceSchema({
  name,
  description,
  url,
}: ServiceProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: name,

    name,

    description,

    url,

    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };
}

interface Question {
  question: string;
  answer: string;
}

export function faqSchema(questions: Question[]) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: questions.map((q) => ({
      "@type": "Question",

      name: q.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: q.answer,
      },
    })),
  };
}

interface BlogArticle {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}

export function articleSchema(article: BlogArticle) {
  return {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: article.title,

    description: article.description,

    image: `${baseUrl}${article.image}`,

    url: article.url,

    datePublished: article.datePublished,

    dateModified: article.dateModified ?? article.datePublished,

    author: {
      "@type": "Person",
      name: siteConfig.founder.name,
    },

    publisher: {
      "@type": "Organization",

      name: siteConfig.name,

      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}${siteConfig.logo}`,
      },
    },

    mainEntityOfPage: article.url,
  };
}

interface WebPageProps {
  title: string;
  description: string;
  url: string;
}

export function webpageSchema({
  title,
  description,
  url,
}: WebPageProps) {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${url}#webpage`,

    url,

    name: title,

    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },

    about: {
      "@id": `${baseUrl}/#organization`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/social/og-image.jpg`,
    },

    description,

    inLanguage: "en",
  };
}