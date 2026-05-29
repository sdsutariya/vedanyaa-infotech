import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-Def4au4x.mjs";
import { a as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const projects = [{
  tag: "ERP",
  title: "Manufacturing Operations Suite",
  desc: "End-to-end ERP for a 200-employee manufacturer — inventory, HR, finance, BI dashboards.",
  stack: ["Next.js", "Nest.js", "PostgreSQL"]
}, {
  tag: "E-Commerce",
  title: "Luxury Fashion Marketplace",
  desc: "Headless commerce platform with multi-vendor support and 1.2M+ SKUs.",
  stack: ["MERN", "Shopify", "Stripe"]
}, {
  tag: "AI",
  title: "AI Concierge for Boutique Hotels",
  desc: "GenAI-powered booking assistant with multilingual chat and personalised offers.",
  stack: ["Next.js", "OpenAI", "RAG"]
}, {
  tag: "Custom ERP",
  title: "Logistics Control Tower",
  desc: "Real-time fleet and shipment tracking with role-based dashboards.",
  stack: ["React", "Node", "MongoDB"]
}, {
  tag: "Corporate",
  title: "Financial Advisory Firm",
  desc: "Award-worthy editorial site with thought-leadership CMS.",
  stack: ["Next.js", "Sanity", "Tailwind"]
}, {
  tag: "PHP",
  title: "Healthcare Portal",
  desc: "HIPAA-aware patient portal with appointment workflows and billing.",
  stack: ["Laravel", "MySQL", "Vue"]
}];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 border-b border-border/60 bg-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
        "Selected work, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "crafted with intent." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-muted-foreground text-lg", children: "A sampling of recent engagements across industries and technology stacks." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative p-10 rounded-2xl border border-border bg-card h-full hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-elegant transition-all duration-500 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-4", children: p.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-3", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: p.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-muted-foreground", children: s }, s)) })
    ] }) }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Your project could be next." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all", children: "Start a Conversation" })
    ] }) }) })
  ] });
}
export {
  Portfolio as component
};
