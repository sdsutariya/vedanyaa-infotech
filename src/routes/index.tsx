import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Users, Clock, ShieldCheck, CheckCircle2, Zap, Globe, Lock, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { services } from "@/data/services";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { TechMarquee } from "@/components/TechMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedanyaa Infotech — Premium Web, MERN, Next.js & ERP Development Company" },
      { name: "description", content: "Vedanyaa Infotech is a trusted software studio delivering PHP, MERN, Next.js, AI-driven apps, e-commerce and custom ERP solutions for businesses worldwide." },
      { name: "keywords", content: "software development company, ERP development company, MERN stack development, Next.js development, AI driven applications, e-commerce development, custom ERP, Vedanyaa Infotech" },
      { property: "og:title", content: "Vedanyaa Infotech — Software, ERP & Web Development Company" },
      { property: "og:description", content: "Boutique software studio engineering reliable digital products — MERN, Next.js, AI, e-commerce, ERP." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Vedanyaa Infotech",
        description: "Software development company specializing in MERN, Next.js, AI-driven apps, e-commerce and custom ERP.",
        url: "/",
        areaServed: "Worldwide",
        serviceType: ["Web Development", "ERP Development", "MERN Stack", "Next.js Development", "AI Applications", "E-commerce Development"],
      }),
    }],
  }),
  component: Home,
});

const stats = [
  { icon: Award, value: "120", label: "Projects Delivered" },
  { icon: Users, value: "60", label: "Global Clients" },
  { icon: Clock, value: "7", label: "Years of Craft" },
  { icon: ShieldCheck, value: "99", label: "Client Retention" },
];

const trustSignals = [
  { icon: Zap, title: "Lightning Fast Delivery", desc: "Agile sprints with weekly demos." },
  { icon: Lock, title: "Enterprise Security", desc: "OWASP-aligned, role-based access." },
  { icon: Globe, title: "Global Collaboration", desc: "Remote-first, timezone-friendly." },
  { icon: Code2, title: "Clean Code Guarantee", desc: "TypeScript, linted, documented." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-[0.08] dark:opacity-30" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        </div>
        <FloatingOrbs />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12 items-center w-full relative z-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs uppercase tracking-[0.25em] text-gold mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" /> Crafting Digital Excellence
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground"
            >
              We architect
              <span className="block italic text-gradient-gold">timeless software.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
            >
              Vedanyaa Infotech is a boutique software studio engineering elegant web platforms,
              MERN & Next.js applications, e-commerce experiences, and custom ERP systems
              for businesses that demand more than ordinary.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider font-medium hover:shadow-gold transition-all duration-300">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-sm uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition-all duration-300">
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Hero visual — animated rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.5 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-gold/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-gold/15 border-dashed"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-gold/20"
              />
              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-card to-muted border border-border flex items-center justify-center shadow-elegant">
                <div className="text-center">
                  <div className="font-display text-7xl text-gradient-gold">V</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.4em] text-gold">Est. Excellence</div>
                </div>
              </div>
              {/* Floating dots on rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-gold" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/70" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 divider-gold" />
      </section>

      {/* STATS */}
      <section className="border-b border-border/60 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center md:text-left group">
                <s.icon className="w-6 h-6 text-gold mb-3 mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
                <div className="font-display text-4xl md:text-5xl text-gradient-gold">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH MARQUEE */}
      <TechMarquee />

      {/* SERVICES */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What We Do</div>
              <h2 className="font-display text-4xl md:text-6xl">A complete suite of <span className="italic text-gradient-gold">digital craftsmanship</span></h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                From bespoke ERP systems to lightning-fast e-commerce, our work blends engineering rigor with classic design sensibilities.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full p-8 rounded-2xl border border-border bg-card relative overflow-hidden hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-500 shadow-elegant/30 hover:shadow-elegant">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), oklch(0.45 0.18 268 / 0.12), transparent 40%)"
                    }}
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-7 group-hover:bg-gold group-hover:border-gold transition-all duration-300 group-hover:shadow-gold/30">
                      <s.icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-display text-2xl mb-3 text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.points.slice(0, 3).map((pt) => (
                        <span key={pt} className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 border-t border-border/60 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Vedanyaa</div>
              <h2 className="font-display text-4xl md:text-5xl">Built on trust. <span className="italic text-gradient-gold">Engineered to last.</span></h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl border border-border bg-card text-center group hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant/30">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <t.icon className="w-6 h-6 text-gold group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 border-t border-border/60 bg-secondary/60 dark:bg-navy-deep/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Process</div>
              <h2 className="font-display text-4xl md:text-5xl">Methodical. Transparent. <span className="italic text-gradient-gold">Refined.</span></h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Discover", d: "We listen deeply — understanding your business, audience and goals before writing a single line of code." },
              { n: "02", t: "Design", d: "Wireframes, prototypes and elegant UI tailored to your brand voice." },
              { n: "03", t: "Engineer", d: "Clean architecture, agile sprints, weekly demos and code you can be proud of." },
              { n: "04", t: "Elevate", d: "Launch, monitor, iterate. We stay with you as a long-term technology partner." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="relative p-8 rounded-xl border border-border bg-card h-full shadow-elegant/30 hover:border-gold/20 transition-all duration-300">
                  <div className="font-display text-5xl text-gradient-gold mb-4">{p.n}</div>
                  <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gold/40 to-transparent" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, oklch(0.45 0.18 268), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.62 0.15 165), transparent 50%)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 mb-8">
              <span className="font-display text-3xl text-gold">&ldquo;</span>
            </div>
            <p className="font-display text-2xl md:text-3xl leading-relaxed italic text-foreground">
              Vedanyaa delivered our ERP platform on time, on budget, and with a level of polish
              we hadn't seen from other vendors. They feel like an extension of our own team.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center">
                <span className="font-display text-sm text-primary-foreground font-bold">D</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-foreground">Director</div>
                <div className="text-xs uppercase tracking-widest text-gold">Manufacturing Group</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-3xl p-12 md:p-20 border border-gold/30 bg-gradient-to-br from-navy via-card to-navy-deep overflow-hidden">
              <div className="absolute inset-0 shimmer opacity-30" />
              {/* Animated gradient orbs inside CTA */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30" style={{ background: "radial-gradient(circle, oklch(0.45 0.18 268 / 0.5), transparent 70%)", animation: "floatOrb 8s ease-in-out infinite" }} />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, oklch(0.62 0.15 165 / 0.4), transparent 70%)", animation: "floatOrb 10s ease-in-out infinite 2s" }} />

              <div className="relative grid md:grid-cols-3 gap-10 items-center z-10">
                <div className="md:col-span-2">
                  <h2 className="font-display text-4xl md:text-5xl">Ready to build something <span className="italic text-gradient-gold">extraordinary?</span></h2>
                  <p className="mt-4 text-muted-foreground text-lg">Let's discuss your project. Free consultation, transparent estimate.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Free Consultation", "NDA Available", "24h Response"].map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-gold/30 text-gold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:justify-self-end">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all duration-300">
                    Begin the Conversation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
