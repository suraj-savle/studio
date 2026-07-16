import { siteConfig } from "./site";

const baseUrl = siteConfig.url;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.name,
    legalName: siteConfig.legalName,

    url: baseUrl,

    logo: `${baseUrl}${siteConfig.logo}`,

    image: `${baseUrl}${siteConfig.ogImage}`,

    description: siteConfig.description,

    email: siteConfig.contact.email,

    telephone: siteConfig.contact.phone,

    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      image: `${baseUrl}${siteConfig.founder.image}`,
    },

    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressRegion: siteConfig.address.state,
      addressLocality: siteConfig.address.city,
    },

    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: siteConfig.name,

    url: baseUrl,

    description: siteConfig.description,

    inLanguage: siteConfig.language,

    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
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

    name: siteConfig.founder.name,

    jobTitle: siteConfig.founder.role,

    image: `${baseUrl}${siteConfig.founder.image}`,

    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },

    url: siteConfig.founder.url,
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

    name: title,

    description,

    url,

    inLanguage: siteConfig.language,

    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: baseUrl,
    },
  };
}