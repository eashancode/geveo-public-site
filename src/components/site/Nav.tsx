import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/geveo-logo.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/solutions", label: "Solutions" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/evernode", label: "Evernode" },
  { to: "/careers", label: "Careers" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // prevent body scroll when mobile menu is open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Geveo home">
          <img src={logo} alt="Geveo" className="h-7 w-auto md:h-8" />
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) =>
              "to" in l ? (
                <Link
                  key={l.label}
                  to={l.to}
                  className="nav-link relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  activeProps={{
                    className:
                      "nav-link relative px-3 py-2 text-sm text-foreground font-medium active",
                  }}
                  activeOptions={l.to === "/" ? { exact: true } : undefined}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="nav-link relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              )
            )}
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          <a
            href="/geveo-public-site/#contact"
            className="hidden md:inline-flex group items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-1.5 text-sm font-medium shadow-green hover:shadow-[0_14px_36px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] hover:brightness-105 transition-all"
          >
            Contact Us
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-foreground/15 group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
      {/* Mobile menu panel */}
      <div className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="absolute inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="flex flex-col p-4 space-y-1">
            {links.map((l) =>
              "to" in l ? (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-base text-muted-foreground hover:text-foreground transition duration-200"
                  activeProps={{
                    className: "block px-3 py-3 text-base text-foreground font-medium",
                  }}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-base text-muted-foreground hover:text-foreground transition duration-200"
                >
                  {l.label}
                </a>
              )
            )}

            <a
              href="/geveo-public-site/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-4 pr-3 py-2 text-sm font-medium shadow-green hover:brightness-105 transition-all w-max"
            >
              Contact Us
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground/15 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
