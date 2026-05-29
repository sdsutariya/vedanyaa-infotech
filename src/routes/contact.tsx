import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vedanyaa Infotech — Hire Our Software & ERP Team" },
      {
        name: "description",
        content:
          "Contact Vedanyaa Infotech to discuss your software, ERP, MERN, Next.js, AI or e-commerce project. Free consultation and clear estimates.",
      },
      {
        name: "keywords",
        content:
          "contact Vedanyaa Infotech, hire software developers, hire ERP developers, project consultation",
      },
      { property: "og:title", content: "Contact Vedanyaa Infotech" },
      {
        property: "og:description",
        content: "Let's discuss your project — free consultation, clear estimates.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative py-24 border-b border-border/60 bg-hero overflow-hidden">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Contact</div>
            <h1 className="font-display text-5xl md:text-7xl max-w-4xl">
              Let's build something{" "}
              <span className="italic text-gradient-gold">remarkable together.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
              Share a few details about your project and we'll respond within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-3xl mb-8">Reach out directly</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@vedanyaa.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Location", value: "India · Serving Globally" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                      {c.label}
                    </div>
                    <div className="mt-1 font-display text-lg">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-xl border border-gold/30 bg-gold/5">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
                Response Promise
              </div>
              <p className="text-sm text-muted-foreground">
                Every enquiry is reviewed by a senior engineer and answered within 24 hours.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="p-8 md:p-10 rounded-2xl border border-border bg-card backdrop-blur"
            >
              {sent ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-14 h-14 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-3xl">Thank you.</h3>
                  <p className="mt-3 text-muted-foreground">
                    We've received your message and will reply within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Your Name" name="name" required />
                    <Field label="Email Address" name="email" type="email" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Company" name="company" />
                    <Field
                      label="Service of Interest"
                      name="service"
                      placeholder="e.g. Custom ERP"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.25em] text-gold mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-background/60 border border-border focus:border-gold focus:outline-none transition-colors text-foreground"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-primary-foreground text-sm uppercase tracking-wider hover:shadow-gold transition-all duration-300"
                  >
                    Send Message{" "}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-gold mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-md bg-background/60 border border-border focus:border-gold focus:outline-none transition-colors text-foreground"
      />
    </div>
  );
}
