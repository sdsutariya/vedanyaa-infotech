import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-Def4au4x.mjs";
import { T as Target, H as Heart, f as Lightbulb, m as Shield } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const aboutImg = "/assets/about-image-Dt6l810E.jpg";
const values = [{
  icon: Target,
  t: "Precision",
  d: "We obsess over the details others overlook — from pixel alignment to query plans."
}, {
  icon: Heart,
  t: "Partnership",
  d: "We invest in long-term relationships, not transactions."
}, {
  icon: Lightbulb,
  t: "Curiosity",
  d: "We stay ahead of the curve, constantly exploring new frameworks and patterns."
}, {
  icon: Shield,
  t: "Integrity",
  d: "Transparent estimates, honest timelines, and code we'd be proud to sign."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 border-b border-border/60 bg-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "About Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
        "A small studio with a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "big standard of craft." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden border border-border shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "Vedanyaa team collaborating", width: 1280, height: 960, loading: "lazy", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.15, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl", children: "Built by engineers who care about the work." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Vedanyaa Infotech was founded with a simple belief: software should be elegant, reliable, and a genuine pleasure to use. We are a tight-knit team of senior engineers and designers who choose depth over volume." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Across seven years we've shipped products for startups, enterprises, retailers and manufacturers — spanning PHP, MERN, Next.js, AI-driven apps, e-commerce and bespoke ERP." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Every engagement is led by a senior engineer, not handed off. Every line of code is reviewed. Every milestone is demonstrated. That's how we earn — and keep — trust." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 border-t border-border/60 bg-secondary/60 dark:bg-navy-deep/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Our Values" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl", children: [
          "Principles that shape ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "every project." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-border bg-card h-full hover:border-gold/30 hover:-translate-y-1 hover:shadow-elegant/30 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "w-5 h-5 text-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: v.d })
      ] }) }, v.t)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
