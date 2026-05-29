import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as services } from "./router-UsntH5Eo.mjs";
import { R as Reveal } from "./Reveal-Def4au4x.mjs";
import { F as FloatingOrbs } from "./FloatingOrbs-DtkNFnNw.mjs";
import { m as motion, a as useMotionValue, b as useSpring, u as useInView } from "../_libs/framer-motion.mjs";
import { p as Sparkles, A as ArrowRight, b as Award, U as Users, d as Clock, n as ShieldCheck, Z as Zap, g as Lock, G as Globe, e as CodeXml, c as CircleCheck } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroBg = "/assets/hero-bg-B6AxNyL7.jpg";
function AnimatedCounter({ value, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const isPercent = value.includes("%");
  reactExports.useEffect(() => {
    if (isInView) {
      motionValue.set(numeric);
    }
  }, [isInView, motionValue, numeric]);
  reactExports.useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + (isPercent ? "%" : "+") + suffix;
      }
    });
    return unsub;
  }, [springValue, isPercent, suffix]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref });
}
const techs = [
  "React",
  "Node.js",
  "Next.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "PHP",
  "Laravel",
  "AI/ML",
  "Python",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "GraphQL",
  "Redis",
  "WordPress",
  "Shopify"
];
function TechMarquee() {
  const doubled = [...techs, ...techs];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden py-6 border-y border-border/40 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: doubled.map((tech, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "mx-8 text-sm font-medium uppercase tracking-widest text-muted-foreground/70 flex items-center gap-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-gold/50 inline-block" }),
        tech
      ]
    },
    i
  )) }) });
}
const stats = [{
  icon: Award,
  value: "120",
  label: "Projects Delivered"
}, {
  icon: Users,
  value: "60",
  label: "Global Clients"
}, {
  icon: Clock,
  value: "7",
  label: "Years of Craft"
}, {
  icon: ShieldCheck,
  value: "99",
  label: "Client Retention"
}];
const trustSignals = [{
  icon: Zap,
  title: "Lightning Fast Delivery",
  desc: "Agile sprints with weekly demos."
}, {
  icon: Lock,
  title: "Enterprise Security",
  desc: "OWASP-aligned, role-based access."
}, {
  icon: Globe,
  title: "Global Collaboration",
  desc: "Remote-first, timezone-friendly."
}, {
  icon: CodeXml,
  title: "Clean Code Guarantee",
  desc: "TypeScript, linted, documented."
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[100dvh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "", className: "w-full h-full object-cover opacity-[0.08] dark:opacity-30", width: 1920, height: 1280 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12 items-center w-full relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.6
          }, className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs uppercase tracking-[0.25em] text-gold mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
            " Crafting Digital Excellence"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
            opacity: 0,
            y: 30
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.8,
            delay: 0.1
          }, className: "font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground", children: [
            "We architect",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic text-gradient-gold", children: "timeless software." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.8,
            delay: 0.25
          }, className: "mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed", children: "Vedanyaa Infotech is a boutique software studio engineering elegant web platforms, MERN & Next.js applications, e-commerce experiences, and custom ERP systems for businesses that demand more than ordinary." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.8,
            delay: 0.4
          }, className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider font-medium hover:shadow-gold transition-all duration-300", children: [
              "Start a Project ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-sm uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition-all duration-300", children: "Explore Services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.8
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 1.2,
          delay: 0.5
        }, className: "lg:col-span-5 hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[400px] h-[400px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            rotate: 360
          }, transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }, className: "absolute inset-0 rounded-full border border-gold/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            rotate: -360
          }, transition: {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }, className: "absolute inset-4 rounded-full border border-gold/15 border-dashed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            rotate: 360
          }, transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }, className: "absolute inset-8 rounded-full border border-gold/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full bg-gradient-to-br from-card to-muted border border-border flex items-center justify-center shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl text-gradient-gold", children: "V" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-[0.4em] text-gold", children: "Est. Excellence" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
            rotate: 360
          }, transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }, className: "absolute inset-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            rotate: -360
          }, transition: {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }, className: "absolute inset-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/70" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 divider-gold" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/60 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-6 h-6 text-gold mb-3 mx-auto md:mx-0 group-hover:scale-110 transition-transform" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl md:text-5xl text-gradient-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { value: s.value }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground", children: s.label })
    ] }) }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TechMarquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-6xl", children: [
          "A complete suite of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "digital craftsmanship" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg leading-relaxed", children: "From bespoke ERP systems to lightning-fast e-commerce, our work blends engineering rigor with classic design sensibilities." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full p-8 rounded-2xl border border-border bg-card relative overflow-hidden hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-500 shadow-elegant/30 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", style: {
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), oklch(0.45 0.18 268 / 0.12), transparent 40%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-7 group-hover:bg-gold group-hover:border-gold transition-all duration-300 group-hover:shadow-gold/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-gold group-hover:text-primary-foreground transition-colors duration-300" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3 text-foreground", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: s.points.slice(0, 3).map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground", children: pt }, pt)) })
        ] })
      ] }) }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 border-t border-border/60 bg-gradient-to-b from-muted/30 to-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Why Vedanyaa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl", children: [
          "Built on trust. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "Engineered to last." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: trustSignals.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-border bg-card text-center group hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "w-6 h-6 text-gold group-hover:text-primary-foreground transition-colors" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-2", children: t.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: t.desc })
      ] }) }, t.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 border-t border-border/60 bg-secondary/60 dark:bg-navy-deep/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Our Process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl", children: [
          "Methodical. Transparent. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "Refined." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-4 gap-6", children: [{
        n: "01",
        t: "Discover",
        d: "We listen deeply — understanding your business, audience and goals before writing a single line of code."
      }, {
        n: "02",
        t: "Design",
        d: "Wireframes, prototypes and elegant UI tailored to your brand voice."
      }, {
        n: "03",
        t: "Engineer",
        d: "Clean architecture, agile sprints, weekly demos and code you can be proud of."
      }, {
        n: "04",
        t: "Elevate",
        d: "Launch, monitor, iterate. We stay with you as a long-term technology partner."
      }].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 rounded-xl border border-border bg-card h-full shadow-elegant/30 hover:border-gold/20 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-gradient-gold mb-4", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-2", children: p.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.d }),
        i < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gold/40 to-transparent" })
      ] }) }, p.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-28 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.03] pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.45 0.18 268), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.62 0.15 165), transparent 50%)"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-gold", children: "“" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl md:text-3xl leading-relaxed italic text-foreground", children: "Vedanyaa delivered our ERP platform on time, on budget, and with a level of polish we hadn't seen from other vendors. They feel like an extension of our own team." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm text-primary-foreground font-bold", children: "D" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: "Director" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-gold", children: "Manufacturing Group" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl p-12 md:p-20 border border-gold/30 bg-gradient-to-br from-navy via-card to-navy-deep overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 shimmer opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30", style: {
        background: "radial-gradient(circle, oklch(0.45 0.18 268 / 0.5), transparent 70%)",
        animation: "floatOrb 8s ease-in-out infinite"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20", style: {
        background: "radial-gradient(circle, oklch(0.62 0.15 165 / 0.4), transparent 70%)",
        animation: "floatOrb 10s ease-in-out infinite 2s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-3 gap-10 items-center z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl", children: [
            "Ready to build something ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "extraordinary?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Let's discuss your project. Free consultation, transparent estimate." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-3", children: ["Free Consultation", "NDA Available", "24h Response"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-gold/30 text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
            " ",
            tag
          ] }, tag)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:justify-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all duration-300", children: [
          "Begin the Conversation ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] }) }) }) })
  ] });
}
export {
  Home as component
};
