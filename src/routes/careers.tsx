import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  TrendingUp,
  BookOpen,
  Users,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import EmployeeSpotlight from "@/components/site/EmployeeSpotlight";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Geveo's high-energy engineering team" },
      {
        name: "description",
        content:
          "Join Geveo and grow with a global engineering team that delivers meaningful software, invests in learning, and values people first.",
      },
      { property: "og:title", content: "Careers at Geveo — Build with purpose" },
      {
        property: "og:description",
        content:
          "Explore opportunities at Geveo, where flexible work, professional growth and high-impact projects come together.",
      },
    ],
  }),
  component: CareersPage,
});

const BENEFITS = [
  {
    title: "Great place to grow",
    description:
      "Certified Great Place To Work®, with encouragement for certifications, learning and mentorship.",
    Icon: Sparkles,
  },
  {
    title: "Meaningful work",
    description:
      "Work on visible, industry-leading projects across enterprise, cloud, AI and digital transformation.",
    Icon: Globe2,
  },
  {
    title: "Flexible culture",
    description:
      "Flexible hours, hybrid rhythm and the freedom to deliver in a way that suits your best work.",
    Icon: Users,
  },
  {
    title: "Rewarding package",
    description:
      "Generous remuneration, health support, recognition and performance-driven growth.",
    Icon: TrendingUp,
  },
];

const FITS = [
  {
    title: "OWNERSHIP",
    description:
      "You take ideas from concept to production and see the impact of your work.",
  },
  {
    title: "CONTINUOUS LEARNING",
    description:
      "You explore new technologies, experiment often, and keep growing your craft.",
  },
  {
    title: "COLLABORATIVE CULTURE",
    description:
      "Designers, developers, QA engineers and clients work together as one team.",
  },
  {
    title: "REAL-WORLD IMPACT",
    description:
      "You build products used by real businesses solving real problems.",
  },
];

const criteria = [
  "University degree or equivalent experience relevant to the role.",
  "Strong written and verbal English skills.",
  "The right technical skills and previous experience for the position.",
  "A creative, proactive and customer-focused attitude.",
  "A proven team player who thrives in collaborative environments.",
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(50% 50% at 20% 10%, rgba(83,173,111,0.18), transparent 34%), radial-gradient(60% 50% at 85% 10%, rgba(56,140,220,0.12), transparent 34%)",
            }}
          />

          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] items-start">
              <div className="max-w-3xl">
                <div className="eyebrow inline-flex items-center gap-2 text-[#53ad6f]">
                  <Sparkles className="h-4 w-4" /> Careers at Geveo
                </div>
                <h1 className="mt-4 font-display text-4xl md:text-6xl tracking-[-0.03em] text-balance font-semibold">
                  <span className="bg-linear-to-r from-[#53AB6F] to-[#20B2AA] bg-clip-text text-transparent">Build work that matters </span>with a team that moves faster, learns harder, and cares deeply.
                </h1>
                <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-2xl">
                  We’re looking for curious engineers, designers and product builders who want more than a job they want impact, growth and a culture that supports every step.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="https://jobs.geveo.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#53ad6f] text-white px-6 py-3 text-sm font-semibold shadow-[0_18px_44px_-18px_rgba(83,173,111,0.85)] hover:bg-[#4aad74] transition"
                  >
                    View open positions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#what-you-get"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/90 px-6 py-3 text-sm font-semibold text-foreground shadow-sm hover:border-primary hover:text-primary transition"
                  >
                    See what you get
                  </a>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-border bg-surface p-7 shadow-elev">
                <EmployeeSpotlight />
              </div>
            </div>
          </div>
        </section>

        <section id="what-you-get" className="py-20 md:py-28 bg-surface border-t border-border">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <div className="eyebrow">What you get</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  A career with energy, growth and real recognition.
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty max-w-xl">
                  Geveo is built around people-first culture, visible project work and rewards that reflect the value you deliver.
                </p>
              </div>

              <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
                {BENEFITS.map(({ title, description, Icon }) => (
                  <div key={title} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#53ad6f]/10 text-[#53ad6f]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <div className="eyebrow text-[#53ad6f]">Why choose Geveo</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  Balanced ambition, creative collaboration and the confidence to ship.
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty max-w-xl">
                  We combine agile delivery with thoughtful engineering, mentoring and a supportive team. You’ll own outcomes and feel the momentum every day.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    "Certified Great Place To Work®",
                    "Flexible work backed by clear accountability.",
                    "High-touch mentoring and strong peer learning.",
                    "Meaningful projects across global customers and industries.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-border bg-surface px-4 py-4 text-sm md:text-base">
                      <CheckCircle2 className="h-5 w-5 text-[#53ad6f]" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[2rem] overflow-hidden border border-border bg-background shadow-elev">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                    alt="Collaborative team planning together"
                    className="h-full min-h-[420px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface border-y border-border">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <div className="eyebrow">Who thrives here</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  Bring your ambition, your curiosity and your collaborative energy.
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty max-w-xl">
                  We’re a growth-minded team that values impact, clarity and empathy in everything we build.
                </p>
              </div>
              <div className="lg:col-span-7 grid gap-4">
                {FITS.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-border bg-background p-6">
                    <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-[#53ad6f]">
                      
                      {item.title}
                    </div>
                    <p className="mt-4 text-lg font-semibold leading-snug">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="eyebrow">Eligibility & culture</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  Real criteria for real impact.
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty max-w-xl">
                  We want talented people who can contribute from day one, grow quickly and help raise the bar for the whole team.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-border bg-background p-6">
                  <ul className="space-y-4">
                    {criteria.map((item) => (
                      <li key={item} className="flex gap-3">
                        <div className="mt-1 text-[#53ad6f]">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <div className="eyebrow text-[#53ad6f]">Inside Geveo</div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl tracking-[-0.02em] text-balance font-semibold">
                  A quick look at our culture and how we work
                </h2>
                <p className="mt-6 text-muted-foreground text-pretty max-w-xl">
                  Hear directly from our team about projects, mentorship and how we deliver impact for customers.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-border bg-background p-4">
                  <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/WF2To5jzUHA"
                      title="Geveo — Team and Culture"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-[#0d1720] text-white">
          <div className="container-x">
            <div className="rounded-[2.5rem] border border-white/10 bg-[#111b24]/90 p-10 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.7)]">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <div className="eyebrow text-[#7dd3fc]">Ready to join</div>
                  <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
                    Apply now and start making an impact from day one.
                  </h2>
                  <p className="mt-5 text-white/70 max-w-xl text-pretty">
                    If you’re driven by excellence, learning and collaboration, we want to hear from you.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                  <a
                    href="https://jobs.geveo.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#53ad6f] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(83,173,111,0.85)] hover:bg-[#4aad74] transition"
                  >
                    View open roles
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 hover:border-[#53ad6f]/40 hover:text-white transition"
                  >
                    Learn more about Geveo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
