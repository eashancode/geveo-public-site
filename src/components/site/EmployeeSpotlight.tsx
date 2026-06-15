import React, { useEffect, useRef, useState } from "react";

type Slide = {
  name: string;
  role: string;
  since: string;
  quote: string;
  badges: string[];
  image: string;
  alt: string;
};

const SLIDE_DELAY = 6000;

const slides: Slide[] = [
  {
    name: "Michael Perera",
    role: "Senior Software Engineer",
    since: "At Geveo since 2016",
    quote:
      "At Geveo, I've had the opportunity to architect enterprise solutions, mentor engineers, and work directly with international clients.",
    badges: ["8+ Years Experience", "Enterprise Solutions", "Team Mentor"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    alt: "Michael Perera, Senior Software Engineer",
  },
  {
    name: "Sarah Ahmed",
    role: "Cloud Engineer",
    since: "At Geveo since 2019",
    quote:
      "The supportive culture and continuous learning opportunities have helped me grow both technically and professionally.",
    badges: ["Microsoft Certified", "Global Projects", "Cloud Specialist"],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    alt: "Sarah Ahmed, Cloud Engineer",
  },
  {
    name: "Kavindu Silva",
    role: "Software Engineering Intern",
    since: "Intern since 2024",
    quote:
      "From day one I was contributing to real projects and learning directly from experienced engineers.",
    badges: ["Real Client Projects", "Mentorship Program", "Career Growth"],
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    alt: "Kavindu Silva, Software Engineering Intern",
  },
  {
    name: "James Fernando",
    role: "Technical Lead",
    since: "At Geveo since 2012",
    quote:
      "What makes Geveo special is the balance between technical excellence, collaboration and meaningful impact.",
    badges: ["Solution Architecture", "Team Leadership", "Global Delivery"],
    image:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=900&q=80",
    alt: "James Fernando, Technical Lead",
  },
];

export default function EmployeeSpotlight() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DELAY);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="employee-spotlight rounded-3xl overflow-hidden p-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="es-inner rounded-2xl p-6">
        {slides.map((s, i) => (
          <div
            key={s.name}
            className={`es-slide ${i === index ? "es-active" : ""}`}
            aria-hidden={i !== index}
          >
            <div className="es-grid">
              <div className="es-left">
                <div className="es-profile-wrap">
                  <img src={s.image} alt={s.alt} className="es-profile" loading="lazy" />
                </div>
              </div>

              <div className="es-right">
                <div className="es-header">
                  <div className="es-name">{s.name}</div>
                  <div className="es-role">{s.role}</div>
                  <div className="es-tenure">{s.since}</div>
                </div>
              </div>
            </div>

            <div className="es-quote-card">
              <blockquote className="es-quote">“{s.quote}”</blockquote>
              <div className="es-badges" aria-hidden={false}>
                {s.badges.map((b) => (
                  <div key={b} className="es-badge">
                    ✓ {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="es-progress">
          {slides.map((_, i) => (
            <div key={i} className={`es-dot ${i === index ? "es-dot-active" : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
