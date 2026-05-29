import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { Reveal } from "@/components/Reveal";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import {
  breadcrumbJsonLd,
  canonicalLink,
  faqPageJsonLd,
  jsonLdScript,
  ogMeta,
  servicesItemListJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PHP, MERN, Next.js, AI & ERP Development | Vedanyaa Infotech" },
      { name: "description", content: "Explore Vedanyaa Infotech's services: PHP, MERN, Next.js, Nest.js, AI-driven apps, e-commerce, corporate websites and custom ERP development." },
      { name: "keywords", content: "PHP development services, MERN stack services, Next.js development, AI development services, ERP development services, e-commerce development" },
      ...ogMeta({
        title: "Services — Vedanyaa Infotech",
        description: "End-to-end web, AI and ERP engineering services for ambitious businesses.",
        path: "/services",
      }),
    ],
    links: [canonicalLink("/services")],
    scripts: [
      jsonLdScript(servicesItemListJsonLd()),
      jsonLdScript(faqPageJsonLd()),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ),
    ],
  }),
  component: ServicesPage,
});


function ServicesPage() {
  return (
    <>
      <section className="relative py-24 border-b border-border/60 bg-hero overflow-hidden">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Services</div>
            <h1 className="font-display text-5xl md:text-7xl max-w-4xl">Engineering services <span className="italic text-gradient-gold">tailored to your ambition.</span></h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
              A focused offering of nine disciplines, each delivered with the same attention to detail, security and craft.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-10">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.05}>
              <div id={s.slug} className={`grid md:grid-cols-12 gap-10 p-10 md:p-14 rounded-2xl border border-border bg-card hover:border-gold/40 hover:-translate-y-1 hover:shadow-elegant transition-all duration-500 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:col-span-4">
                  <div className="w-16 h-16 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold transition-all">
                    <s.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{s.tag}</div>
                  <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-8 grid sm:grid-cols-2 gap-3">
                    {s.points.map((p) => (
                      <div key={p} className="flex items-center gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5 text-gold" /></span>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border/60 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl mb-12">Common questions about <span className="italic text-gradient-gold">our services</span></h2>
          </Reveal>
          <dl className="space-y-8">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div className="p-8 rounded-2xl border border-border bg-card">
                  <dt className="font-display text-xl text-foreground">{faq.question}</dt>
                  <dd className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 border-t border-border/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground text-lg">Tell us about your goals. We'll send back a clear roadmap and estimate.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all duration-300">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
