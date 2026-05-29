import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/70 dark:bg-navy-deep/40 text-foreground mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center">
              <span className="font-display text-xl text-navy-deep font-bold">V</span>
            </div>
            <div>
              <div className="font-display text-lg">Vedanyaa Infotech</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Crafted Code · Crafted Trust</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            A boutique software studio engineering reliable web, MERN, Next.js, AI-driven apps
            and custom ERP solutions for ambitious businesses worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Mail className="w-4 h-4 text-gold mt-0.5" /> info.vedanyaa@gmail.com</li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5" /> India · Remote Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Vedanyaa Infotech. All rights reserved.</p>
          <p className="tracking-widest uppercase">Engineered with Precision</p>
        </div>
      </div>
    </footer>
  );
}
