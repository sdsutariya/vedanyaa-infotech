import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, L as Link } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { X, i as Menu, M as Mail, P as Phone, h as MapPin, q as Sun, j as Moon } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-UFNKj0qb.css";
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
            " hello@vedanyaa.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-gold mt-0.5" }),
            " +91 98765 43210"
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
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please try again or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router.invalidate();
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
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vedanyaa Infotech — Software & ERP Development" },
      { name: "twitter:description", content: "Boutique software studio engineering reliable digital products." },
      { name: "twitter:image", content: "/favicon.png" }
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vedanyaa Infotech",
          url: "/",
          logo: "/favicon.png",
          description: "Software development company specializing in PHP, MERN, Next.js, Nest.js, AI-driven applications, e-commerce and custom ERP.",
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            email: "hello@vedanyaa.com",
            contactType: "customer support",
            areaServed: "Worldwide"
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Vedanyaa Infotech",
          url: "/"
        })
      }
    ]
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
const BASE_URL = "";
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
            `    <loc>${BASE_URL}${e.path}</loc>`,
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
const $$splitComponentImporter$4 = () => import("./services-CSFyJ3CC.mjs");
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
    }, {
      property: "og:title",
      content: "Services — Vedanyaa Infotech"
    }, {
      property: "og:description",
      content: "End-to-end web, AI and ERP engineering services for ambitious businesses."
    }, {
      property: "og:url",
      content: "/services"
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
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
    }, {
      property: "og:title",
      content: "Portfolio — Vedanyaa Infotech"
    }, {
      property: "og:description",
      content: "Selected work across ERP, e-commerce, AI and web platforms."
    }, {
      property: "og:url",
      content: "/portfolio"
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/portfolio"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-B14V251M.mjs");
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
    }, {
      property: "og:title",
      content: "Contact Vedanyaa Infotech"
    }, {
      property: "og:description",
      content: "Let's discuss your project — free consultation, clear estimates."
    }, {
      property: "og:url",
      content: "/contact"
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
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
    }, {
      property: "og:title",
      content: "About Vedanyaa Infotech"
    }, {
      property: "og:description",
      content: "Our story, values and how we partner with clients to ship reliable software."
    }, {
      property: "og:url",
      content: "/about"
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-k36EOzlR.mjs");
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
    }, {
      property: "og:title",
      content: "Vedanyaa Infotech — Software, ERP & Web Development Company"
    }, {
      property: "og:description",
      content: "Boutique software studio engineering reliable digital products — MERN, Next.js, AI, e-commerce, ERP."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Vedanyaa Infotech",
        description: "Software development company specializing in MERN, Next.js, AI-driven apps, e-commerce and custom ERP.",
        url: "/",
        areaServed: "Worldwide",
        serviceType: ["Web Development", "ERP Development", "MERN Stack", "Next.js Development", "AI Applications", "E-commerce Development"]
      })
    }]
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
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
