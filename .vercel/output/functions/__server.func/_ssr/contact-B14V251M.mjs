import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-Def4au4x.mjs";
import { F as FloatingOrbs } from "./FloatingOrbs-DtkNFnNw.mjs";
import { M as Mail, P as Phone, h as MapPin, c as CircleCheck, S as Send } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 border-b border-border/60 bg-hero overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingOrbs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl max-w-4xl", children: [
          "Let's build something ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "remarkable together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-muted-foreground text-lg", children: "Share a few details about your project and we'll respond within one business day." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mb-8", children: "Reach out directly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [{
          icon: Mail,
          label: "Email",
          value: "hello@vedanyaa.com"
        }, {
          icon: Phone,
          label: "Phone",
          value: "+91 98765 43210"
        }, {
          icon: MapPin,
          label: "Location",
          value: "India · Serving Globally"
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-gold/30 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5 text-gold" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-gold", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-lg", children: c.value })
          ] })
        ] }, c.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 p-6 rounded-xl border border-gold/30 bg-gold/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-2", children: "Response Promise" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Every enquiry is reviewed by a senior engineer and answered within 24 hours." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "p-8 md:p-10 rounded-2xl border border-border bg-card backdrop-blur", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-14 h-14 text-gold mx-auto mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl", children: "Thank you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "We've received your message and will reply within 24 hours." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service of Interest", name: "service", placeholder: "e.g. Custom ERP" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-[0.25em] text-gold mb-2", children: "Project Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, className: "w-full px-4 py-3 rounded-md bg-background/60 border border-border focus:border-gold focus:outline-none transition-colors text-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all duration-300", children: [
          "Send Message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      ] }) }) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs uppercase tracking-[0.25em] text-gold mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, placeholder, className: "w-full px-4 py-3 rounded-md bg-background/60 border border-border focus:border-gold focus:outline-none transition-colors text-foreground" })
  ] });
}
export {
  Contact as component
};
