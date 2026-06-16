import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

import shoebImage from "@/assets/shoeb.png";
import mattImage from "@/assets/Matt.jpeg";

const testimonials = [
  {
    quote:
      "Geveo was helping us modernize our platform. Their team not only understood our business goals but delivered a custom solution that exceeded expectations.",
    name: "Shoeb Mahmud",
    role: "Product manager",
    company: "Xentro",
    initials: "SM",
    image: shoebImage,
  },
  {
    quote:
      "Working with Geveo was a game-changer. They brought in deep technical expertise, innovative thinking, and a strong commitment to results.",
    name: "Matthew Morgan",
    role: "Co-Founder & CEO",
    company: "Argyle Insurance",
    initials: "MM",
    image: mattImage,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">Client voices</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-[-0.02em] text-balance">
              Trusted partnerships, built over years.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-pretty">
            What it feels like to work with senior engineers who care about
            your outcomes as much as their craft.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-14 relative overflow-hidden rounded-3xl border border-border bg-white shadow-elev">
          <div className="absolute inset-0 blueprint-bg opacity-30 [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)]" />
          <Quote className="absolute -top-4 -left-4 h-32 w-32 text-[#53ad6f]/10" strokeWidth={1} />

          <div
            className="relative flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-full p-10 md:p-16">
                <div className="flex items-center gap-1 text-[#53ad6f]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#53ad6f]" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl md:text-3xl lg:text-[34px] leading-[1.3] tracking-[-0.01em] text-balance max-w-4xl">
                  "{t.quote}"
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full border border-border bg-slate-100">
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role} · <span className="text-[#53ad6f]">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="relative flex items-center justify-center gap-2 pb-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#53ad6f]" : "w-2 bg-border hover:bg-[#53ad6f]/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "17+ yrs", v: "Engineering partnerships" },
            { k: "5+ yrs", v: "Avg. client tenure" },
            { k: "98%", v: "Client retention" },
            { k: "50+", v: "Senior engineers" },
          ].map((m) => (
            <div key={m.v} className="rounded-2xl border border-border bg-surface p-5">
              <div className="font-display text-2xl font-semibold text-[#53ad6f]">{m.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
