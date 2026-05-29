import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as services } from "./services-DXlM-ABb.mjs";
import { R as Reveal } from "./Reveal-Def4au4x.mjs";
import { F as FloatingOrbs } from "./FloatingOrbs-DtkNFnNw.mjs";
import { C as Check, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 border-b border-border/60 bg-hero overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
          "Engineering services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "tailored to your ambition." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-muted-foreground text-lg", children: "A focused offering of nine disciplines, each delivered with the same attention to detail, security and craft." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 space-y-10", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid md:grid-cols-12 gap-10 p-10 md:p-14 rounded-2xl border border-border bg-card hover:border-gold/40 hover:-translate-y-1 hover:shadow-elegant transition-all duration-500 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-7 h-7 text-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-2", children: s.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: s.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 gap-3", children: s.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5 text-gold" }) }),
          p
        ] }, p)) })
      ] })
    ] }) }, s.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 lg:px-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Have a project in mind?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Tell us about your goals. We'll send back a clear roadmap and estimate." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all duration-300", children: [
        "Request a Proposal ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }) }) })
  ] });
}
export {
  ServicesPage as component
};
