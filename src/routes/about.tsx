import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import aboutImg from "@/assets/about-image.jpg";
import { Target, Heart, Lightbulb, Shield } from "lucide-react";
import { aboutPageJsonLd, breadcrumbJsonLd, canonicalLink, jsonLdScript, ogMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vedanyaa Infotech — Trusted Software Development Company" },
      { name: "description", content: "Vedanyaa Infotech is a boutique software studio built on craftsmanship, transparency and long-term partnership. Meet the team behind our work." },
      { name: "keywords", content: "about Vedanyaa Infotech, software development company, ERP development team, MERN developers" },
      ...ogMeta({
        title: "About Vedanyaa Infotech",
        description: "Our story, values and how we partner with clients to ship reliable software.",
        path: "/about",
      }),
    ],
    links: [canonicalLink("/about")],
    scripts: [
      jsonLdScript(aboutPageJsonLd()),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ),
    ],
  }),
  component: AboutPage,
});


const values = [
  { icon: Target, t: "Precision", d: "We obsess over the details others overlook — from pixel alignment to query plans." },
  { icon: Heart, t: "Partnership", d: "We invest in long-term relationships, not transactions." },
  { icon: Lightbulb, t: "Curiosity", d: "We stay ahead of the curve, constantly exploring new frameworks and patterns." },
  { icon: Shield, t: "Integrity", d: "Transparent estimates, honest timelines, and code we'd be proud to sign." },
];

function AboutPage() {
  return (
    <>
      <section className="py-24 border-b border-border/60 bg-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About Us</div>
            <h1 className="font-display text-5xl md:text-7xl max-w-4xl">A small studio with a <span className="italic text-gradient-gold">big standard of craft.</span></h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant">
              <img src={aboutImg} alt="Vedanyaa team collaborating" width={1280} height={960} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl">Built by engineers who care about the work.</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Vedanyaa Infotech was founded with a simple belief: software should be elegant,
                reliable, and a genuine pleasure to use. We are a tight-knit team of senior engineers
                and designers who choose depth over volume.
              </p>
              <p>
                Across seven years we've shipped products for startups, enterprises, retailers and
                manufacturers — spanning PHP, MERN, Next.js, AI-driven apps, e-commerce and bespoke ERP.
              </p>
              <p>
                Every engagement is led by a senior engineer, not handed off. Every line of code
                is reviewed. Every milestone is demonstrated. That's how we earn — and keep — trust.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 border-t border-border/60 bg-secondary/60 dark:bg-navy-deep/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Values</div>
              <h2 className="font-display text-4xl md:text-5xl">Principles that shape <span className="italic text-gradient-gold">every project.</span></h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-border bg-card h-full hover:border-gold/30 hover:-translate-y-1 hover:shadow-elegant/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                    <v.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
