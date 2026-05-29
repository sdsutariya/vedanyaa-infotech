import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { X, i as Menu, M as Mail, h as MapPin, l as Settings2, F as FileText, k as ServerCog, L as Layers, R as Rocket, e as CodeXml, p as Sparkles, o as ShoppingBag, B as BrainCircuit, q as Sun, j as Moon } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-zukIKbdF.css";
function getInitial() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function ThemeToggle() {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    setTheme(getInitial());
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-foreground hover:text-gold hover:border-gold/60 transition-colors",
      children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" })
    }
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-11 h-11 rounded-xl bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--gold-soft)] flex items-center justify-center shadow-gold overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 32 32", className: "w-7 h-7", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 6 L16 26 L27 6", stroke: "white", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "26", r: "2.4", fill: "white" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold text-foreground tracking-tight", children: "Vedanyaa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.3em] uppercase text-gold font-medium", children: "Infotech" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          className: "text-sm uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors relative",
          activeProps: { className: "text-gold" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center px-5 py-2.5 rounded-md border border-gold/50 text-gold text-sm uppercase tracking-wider hover:bg-gold hover:text-primary-foreground transition-all",
            children: "Get Quote"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-foreground", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "md:hidden overflow-hidden border-t border-border/60 bg-card",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col p-6 gap-4", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            onClick: () => setOpen(false),
            className: "text-sm uppercase tracking-wider text-muted-foreground hover:text-gold",
            children: l.label
          },
          l.to
        )) })
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/60 bg-secondary/70 dark:bg-navy-deep/40 text-foreground mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-md bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-navy-deep font-bold", children: "V" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: "Vedanyaa Infotech" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.25em] uppercase text-gold", children: "Crafted Code · Crafted Trust" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-md leading-relaxed", children: "A boutique software studio engineering reliable web, MERN, Next.js, AI-driven apps and custom ERP solutions for ambitious businesses worldwide." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm uppercase tracking-widest text-gold mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-gold", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-gold", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "hover:text-gold", children: "Portfolio" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-gold", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm uppercase tracking-widest text-gold mb-4", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-gold mt-0.5" }),
            " info.vedanyaa@gmail.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-gold mt-0.5" }),
            " India · Remote Worldwide"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Vedanyaa Infotech. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "tracking-widest uppercase", children: "Engineered with Precision" })
    ] }) })
  ] });
}
const rawUrl = "https://vedanyaa.com";
const SITE = {
  name: "Vedanyaa Infotech",
  url: rawUrl.replace(/\/$/, ""),
  email: "info.vedanyaa@gmail.com",
  locale: "en_US",
  description: "Vedanyaa Infotech is a trusted software development company building PHP, MERN, Next.js, AI-driven apps, e-commerce platforms and custom ERP solutions for global clients."
};
function absoluteUrl(path) {
  if (!path || path === "/") return SITE.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}
const faqs = [
  {
    question: "What services does Vedanyaa Infotech offer?",
    answer: "Vedanyaa Infotech offers custom ERP solutions, corporate websites, React + Node web apps, MERN stack development, Next.js and Nest.js applications, PHP development (Laravel and CodeIgniter), AI-powered web experiences, e-commerce websites, and AI-driven automation including RAG pipelines and workflow automation."
  },
  {
    question: "Who builds custom ERP systems in India?",
    answer: "Vedanyaa Infotech builds custom ERP systems for businesses in India and worldwide. Our ERP solutions cover inventory, POS, HR, payroll, finance, CRM, analytics, and role-based access — tailored to each client's workflow."
  },
  {
    question: "Does Vedanyaa Infotech do MERN stack development?",
    answer: "Yes. Vedanyaa Infotech specializes in MERN stack development using MongoDB, Express, React, and Node.js. We deliver production-grade applications with reactive front-ends, REST APIs, MongoDB schemas, and real-time features."
  },
  {
    question: "Does Vedanyaa build Next.js and Nest.js applications?",
    answer: "Yes. Vedanyaa Infotech builds enterprise-grade applications with SSR-ready Next.js front-ends and type-safe Nest.js back-ends, including microservices, TypeScript end-to-end, and edge deployment."
  },
  {
    question: "Can Vedanyaa Infotech build AI-driven applications?",
    answer: "Yes. Vedanyaa Infotech develops AI-powered web experiences and AI-driven automation — including generative AI chat, smart search, personalised content, vector embeddings, RAG pipelines, custom LLM apps, and workflow automation."
  },
  {
    question: "Does Vedanyaa develop e-commerce websites?",
    answer: "Yes. Vedanyaa Infotech builds conversion-focused e-commerce stores on Shopify, WooCommerce, Magento, and custom MERN stacks, with secure payment gateways, inventory sync, and analytics."
  },
  {
    question: "How do I hire Vedanyaa Infotech for a software project?",
    answer: "Contact Vedanyaa Infotech at info.vedanyaa@gmail.com or visit vedanyaa.com/contact. Share your project goals and we respond within one business day with a free consultation, clear roadmap, and transparent estimate."
  },
  {
    question: "Where is Vedanyaa Infotech located and who do they serve?",
    answer: "Vedanyaa Infotech is based in India and serves clients globally on a remote-first basis. We partner with startups, enterprises, retailers, and manufacturers worldwide."
  },
  {
    question: "What technologies does Vedanyaa Infotech use?",
    answer: "Vedanyaa Infotech works with PHP (Laravel, CodeIgniter), React, Node.js, TypeScript, MongoDB, Express, Next.js, Nest.js, TanStack, AI/LLM integrations, Shopify, WooCommerce, and cloud deployment platforms."
  },
  {
    question: "Why choose Vedanyaa Infotech for software development?",
    answer: "Vedanyaa Infotech is a boutique software studio with seven years of experience, 120+ projects delivered, and a focus on clean architecture, transparent timelines, OWASP-aligned security, and long-term client partnerships."
  }
];
const services = [
  {
    slug: "custom-erp",
    icon: Settings2,
    title: "Custom ERP Solutions",
    tag: "Operational Excellence",
    desc: "Tailored ERP systems that automate inventory, HR, finance, CRM and analytics — engineered around your unique workflow.",
    points: ["Inventory & POS", "HR & Payroll", "Finance & Reports", "Role-based access"]
  },
  {
    slug: "corporate-websites",
    icon: FileText,
    title: "Informative & Corporate Sites",
    tag: "Brand First",
    desc: "Elegant static and corporate websites that build trust, communicate clearly, and convert visitors into loyal clients.",
    points: ["Brand storytelling", "Lightning fast", "SEO foundations", "CMS friendly"]
  },
  {
    slug: "react-node-web-apps",
    icon: ServerCog,
    title: "Web Apps · React + Node",
    tag: "Full-Stack Engineering",
    desc: "Production-grade web applications with React front-ends and Node.js back-ends — secure, scalable and beautifully crafted.",
    points: ["React + TypeScript", "Node.js APIs", "Auth & RBAC", "Cloud deploy"]
  },
  {
    slug: "mern-stack",
    icon: Layers,
    title: "MERN Stack Development",
    tag: "Full-Stack JavaScript",
    desc: "Modern, reactive applications powered by MongoDB, Express, React and Node.js — smooth UX with rock-solid backends.",
    points: ["React & Redux", "Node & Express APIs", "MongoDB schemas", "Realtime features"]
  },
  {
    slug: "nextjs-nestjs",
    icon: Rocket,
    title: "Next.js & Nest.js Apps",
    tag: "Enterprise Grade",
    desc: "SSR-ready Next.js front-ends with type-safe Nest.js back-ends — microservices, edge deployment and DX that scales.",
    points: ["SSR / SSG / ISR", "Nest.js microservices", "TypeScript end-to-end", "Edge deployment"]
  },
  {
    slug: "php-development",
    icon: CodeXml,
    title: "PHP Development",
    tag: "Backend Mastery",
    desc: "Robust, secure and scalable PHP applications — from custom CMSs to high-performance APIs in Laravel and CodeIgniter.",
    points: ["Laravel & CodeIgniter", "RESTful APIs", "Legacy modernization", "Performance tuning"]
  },
  {
    slug: "ai-web-experiences",
    icon: Sparkles,
    title: "AI-Powered Web Experiences",
    tag: "Next-Gen Interfaces",
    desc: "Modern websites enhanced with generative AI — smart search, personalised content, AI assistants and conversational UX baked in.",
    points: ["GenAI chat & search", "Personalised content", "Vector embeddings", "Realtime UX"]
  },
  {
    slug: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Websites",
    tag: "Built to Sell",
    desc: "Conversion-focused online stores on Shopify, WooCommerce, Magento and custom MERN — secure payments, rich analytics.",
    points: ["Shopify & Woo", "Payment gateways", "Inventory sync", "Conversion design"]
  },
  {
    slug: "ai-automation",
    icon: BrainCircuit,
    title: "AI-Driven Automation",
    tag: "Intelligent Systems",
    desc: "Custom AI agents, RAG pipelines and workflow automation that eliminate repetitive work and unlock smarter decisions.",
    points: ["AI agents & RAG", "Workflow automation", "Custom LLM apps", "Data pipelines"]
  }
];
function canonicalLink(path) {
  return { rel: "canonical", href: absoluteUrl(path) };
}
function ogMeta({
  title,
  description,
  path
}) {
  return [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: absoluteUrl(path) },
    { property: "og:type", content: "website" },
    { property: "og:image", content: absoluteUrl("/favicon.png") }
  ];
}
function jsonLdScript(data) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/favicon.png"),
    description: SITE.description,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "customer support",
      areaServed: "Worldwide"
    }
  };
}
function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url
  };
}
function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: "Software development company specializing in MERN, Next.js, AI-driven apps, e-commerce and custom ERP.",
    url: SITE.url,
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "ERP Development",
      "MERN Stack",
      "Next.js Development",
      "AI Applications",
      "E-commerce Development"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}/services#${s.slug}`,
          name: s.title,
          description: s.desc,
          provider: { "@type": "Organization", name: SITE.name }
        }
      }))
    }
  };
}
function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vedanyaa Infotech Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE.url}/services#${s.slug}`,
        name: s.title,
        description: s.desc,
        provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
        areaServed: "Worldwide"
      }
    }))
  };
}
function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  };
}
function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE.name}`,
    url: absoluteUrl("/about"),
    description: "Vedanyaa Infotech is a boutique software studio built on craftsmanship, transparency and long-term partnership.",
    mainEntity: { "@type": "Organization", name: SITE.name, url: SITE.url }
  };
}
function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE.name}`,
    url: absoluteUrl("/contact"),
    description: `Contact ${SITE.name} for software, ERP, MERN, Next.js, AI or e-commerce projects.`
  };
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-8xl font-display text-gradient-gold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-display text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for has drifted off the map." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "inline-flex items-center px-5 py-2.5 rounded-md bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:opacity-90", children: "Return Home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please try again or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "px-5 py-2.5 rounded-md bg-gold text-primary-foreground text-sm uppercase tracking-wider", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "px-5 py-2.5 rounded-md border border-border text-sm uppercase tracking-wider", children: "Home" })
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vedanyaa Infotech — Premium Software, ERP & Web Development Company" },
      { name: "description", content: "Vedanyaa Infotech is a trusted software development company building PHP, MERN, Next.js, AI-driven apps, e-commerce platforms and custom ERP solutions for global clients." },
      { name: "author", content: "Vedanyaa Infotech" },
      { name: "keywords", content: "Vedanyaa Infotech, software development company, ERP development, MERN stack, Next.js, Nest.js, PHP development, AI-driven applications, e-commerce development, custom software, web development India" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#4338ca" },
      { property: "og:site_name", content: "Vedanyaa Infotech" },
      { property: "og:title", content: "Vedanyaa Infotech — Premium Software, ERP & Web Development Company" },
      { property: "og:description", content: "Trusted partner for MERN, Next.js, AI-driven apps, e-commerce and custom ERP development." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: SITE.locale },
      { property: "og:image", content: absoluteUrl("/favicon.png") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vedanyaa Infotech — Software & ERP Development" },
      { name: "twitter:description", content: "Boutique software studio engineering reliable digital products." },
      { name: "twitter:image", content: absoluteUrl("/favicon.png") }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" }
    ],
    scripts: [jsonLdScript(organizationJsonLd()), jsonLdScript(websiteJsonLd())]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
const themeInitScript = `(() => { try { const t = localStorage.getItem('theme'); if (t === 'dark') document.documentElement.classList.add('dark'); } catch(e) {} })();`;
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { dangerouslySetInnerHTML: { __html: themeInitScript } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${absoluteUrl(e.path)}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./services-BCPqJALc.mjs");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — PHP, MERN, Next.js, AI & ERP Development | Vedanyaa Infotech"
    }, {
      name: "description",
      content: "Explore Vedanyaa Infotech's services: PHP, MERN, Next.js, Nest.js, AI-driven apps, e-commerce, corporate websites and custom ERP development."
    }, {
      name: "keywords",
      content: "PHP development services, MERN stack services, Next.js development, AI development services, ERP development services, e-commerce development"
    }, ...ogMeta({
      title: "Services — Vedanyaa Infotech",
      description: "End-to-end web, AI and ERP engineering services for ambitious businesses.",
      path: "/services"
    })],
    links: [canonicalLink("/services")],
    scripts: [jsonLdScript(servicesItemListJsonLd()), jsonLdScript(faqPageJsonLd()), jsonLdScript(breadcrumbJsonLd([{
      name: "Home",
      path: "/"
    }, {
      name: "Services",
      path: "/services"
    }]))]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./portfolio-Drq9ecbO.mjs");
const Route$3 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "Portfolio — ERP, MERN, AI & E-commerce Projects | Vedanyaa Infotech"
    }, {
      name: "description",
      content: "Selected work by Vedanyaa Infotech: custom ERP, e-commerce platforms, MERN applications, AI-driven apps and corporate websites."
    }, {
      name: "keywords",
      content: "Vedanyaa Infotech portfolio, ERP case studies, MERN projects, AI app projects, e-commerce projects"
    }, ...ogMeta({
      title: "Portfolio — Vedanyaa Infotech",
      description: "Selected work across ERP, e-commerce, AI and web platforms.",
      path: "/portfolio"
    })],
    links: [canonicalLink("/portfolio")],
    scripts: [jsonLdScript(breadcrumbJsonLd([{
      name: "Home",
      path: "/"
    }, {
      name: "Portfolio",
      path: "/portfolio"
    }]))]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-DM5ilHRv.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Vedanyaa Infotech — Hire Our Software & ERP Team"
    }, {
      name: "description",
      content: "Contact Vedanyaa Infotech to discuss your software, ERP, MERN, Next.js, AI or e-commerce project. Free consultation and clear estimates."
    }, {
      name: "keywords",
      content: "contact Vedanyaa Infotech, hire software developers, hire ERP developers, project consultation"
    }, ...ogMeta({
      title: "Contact Vedanyaa Infotech",
      description: "Let's discuss your project — free consultation, clear estimates.",
      path: "/contact"
    })],
    links: [canonicalLink("/contact")],
    scripts: [jsonLdScript(contactPageJsonLd()), jsonLdScript(breadcrumbJsonLd([{
      name: "Home",
      path: "/"
    }, {
      name: "Contact",
      path: "/contact"
    }]))]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DxD5c8aj.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Vedanyaa Infotech — Trusted Software Development Company"
    }, {
      name: "description",
      content: "Vedanyaa Infotech is a boutique software studio built on craftsmanship, transparency and long-term partnership. Meet the team behind our work."
    }, {
      name: "keywords",
      content: "about Vedanyaa Infotech, software development company, ERP development team, MERN developers"
    }, ...ogMeta({
      title: "About Vedanyaa Infotech",
      description: "Our story, values and how we partner with clients to ship reliable software.",
      path: "/about"
    })],
    links: [canonicalLink("/about")],
    scripts: [jsonLdScript(aboutPageJsonLd()), jsonLdScript(breadcrumbJsonLd([{
      name: "Home",
      path: "/"
    }, {
      name: "About",
      path: "/about"
    }]))]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CnG0sHtg.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Vedanyaa Infotech — Premium Web, MERN, Next.js & ERP Development Company"
    }, {
      name: "description",
      content: "Vedanyaa Infotech is a trusted software studio delivering PHP, MERN, Next.js, AI-driven apps, e-commerce and custom ERP solutions for businesses worldwide."
    }, {
      name: "keywords",
      content: "software development company, ERP development company, MERN stack development, Next.js development, AI driven applications, e-commerce development, custom ERP, Vedanyaa Infotech"
    }, ...ogMeta({
      title: "Vedanyaa Infotech — Software, ERP & Web Development Company",
      description: "Boutique software studio engineering reliable digital products — MERN, Next.js, AI, e-commerce, ERP.",
      path: "/"
    })],
    links: [canonicalLink("/")],
    scripts: [jsonLdScript(professionalServiceJsonLd())]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const PortfolioRoute = Route$3.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  faqs as f,
  router as r,
  services as s
};
