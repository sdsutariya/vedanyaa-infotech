import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — ERP, MERN, AI & E-commerce Projects | Vedanyaa Infotech" },
      {
        name: "description",
        content:
          "Selected work by Vedanyaa Infotech: custom ERP, e-commerce platforms, MERN applications, AI-driven apps and corporate websites.",
      },
      {
        name: "keywords",
        content:
          "Vedanyaa Infotech portfolio, ERP case studies, MERN projects, AI app projects, e-commerce projects",
      },
      { property: "og:title", content: "Portfolio — Vedanyaa Infotech" },
      {
        property: "og:description",
        content: "Selected work across ERP, e-commerce, AI and web platforms.",
      },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const projects = [
  {
    tag: "ERP",
    title: "Manufacturing Operations Suite",
    desc: "End-to-end ERP for a 200-employee manufacturer — inventory, HR, finance, BI dashboards.",
    stack: ["Next.js", "Nest.js", "PostgreSQL"],
  },
  {
    tag: "E-Commerce",
    title: "Luxury Fashion Marketplace",
    desc: "Headless commerce platform with multi-vendor support and 1.2M+ SKUs.",
    stack: ["MERN", "Shopify", "Stripe"],
  },
  {
    tag: "AI",
    title: "AI Concierge for Boutique Hotels",
    desc: "GenAI-powered booking assistant with multilingual chat and personalised offers.",
    stack: ["Next.js", "OpenAI", "RAG"],
  },
  {
    tag: "Custom ERP",
    title: "Logistics Control Tower",
    desc: "Real-time fleet and shipment tracking with role-based dashboards.",
    stack: ["React", "Node", "MongoDB"],
  },
  {
    tag: "Corporate",
    title: "Financial Advisory Firm",
    desc: "Award-worthy editorial site with thought-leadership CMS.",
    stack: ["Next.js", "Sanity", "Tailwind"],
  },
  {
    tag: "PHP",
    title: "Healthcare Portal",
    desc: "HIPAA-aware patient portal with appointment workflows and billing.",
    stack: ["Laravel", "MySQL", "Vue"],
  },
];

function Portfolio() {
  return (
    <>
      <section className="py-24 border-b border-border/60 bg-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Portfolio</div>
            <h1 className="font-display text-5xl md:text-7xl max-w-4xl">
              Selected work, <span className="italic text-gradient-gold">crafted with intent.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
              A sampling of recent engagements across industries and technology stacks.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="group relative p-10 rounded-2xl border border-border bg-card h-full hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-elegant transition-all duration-500 overflow-hidden">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{p.tag}</div>
                <h3 className="font-display text-3xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">Your project could be next.</h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all"
            >
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
