import { Link } from "@tanstack/react-router";
import gptw from "@/assets/geveo_GPTW_new_300.png";
import { Facebook, Globe, Instagram, Linkedin, Youtube } from "lucide-react";
import { SiX } from "react-icons/si/index.js";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/geveo-australasia", Icon: Linkedin },
  { label: "YouTube", href: "http://www.youtube.com/c/GeveoAustralasia", Icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/geveo", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/geveo.au/", Icon: Instagram },
  { label: "X", href: "https://x.com/GeveoAu", Icon: SiX },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-12">
        

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <img src={gptw} alt="Geveo Great Place To Work" className="h-16 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Engineering scalable digital solutions since 2008. Built in
              Colombo. Trusted worldwide.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/evernode" className="hover:text-primary transition-colors">Evernode</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="divider-gradient my-10" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Geveo Australasia. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 font-mono tracking-[0.18em] uppercase text-[10px]">
              <Globe className="h-3 w-3 text-primary" />
              <span>Australia</span>
              <span className="opacity-40">·</span>
              <span>Singapore</span>
              <span className="opacity-40">·</span>
              <span>Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
