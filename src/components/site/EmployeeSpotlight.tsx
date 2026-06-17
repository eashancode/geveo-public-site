import React, { useEffect, useRef, useState } from "react";
import { ArrowRightCircle } from "lucide-react";
import asankaImg from "../../assets/career_spotlight/asanka.png";
import kawshiImg from "../../assets/career_spotlight/kawshi.png";
import madushiImg from "../../assets/career_spotlight/madushi.png";
import wedithaImg from "../../assets/career_spotlight/weditha.png";

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
    name: "Asanka Indrajith",
    role: "Senior Software Architect",
    since: "At Geveo since 2013",
    quote:
      "What makes Geveo unique is the ability to combine architectural excellence, collaborative leadership, and impactful technology solutions.",
    badges: ["13+ Years Experience", "Technical Leadership", "Team Mentor"],
    image: asankaImg,
    alt: "Asanka Indrajith, Senior Software Architect",
  },
  {
    name: "Kawshi Bandara",
    role: "QA Lead",
    since: "At Geveo since 2016",
    quote:
      "Quality at Geveo is more than finding defects, it’s about building confidence in every release through structured thinking and technical excellence.",
    badges: ["QA Leadership", "Automation Strategy", "Cross-Team Collaboration"],
    image: kawshiImg,
    alt: "Kawshi Bandara, QA Lead",
  },
  {
    name: "Madushi Sarathchandra",
    role: "Associate Tech Lead",
    since: "At Geveo since 2022",
    quote:
      "What makes Geveo special is empowering engineers to grow into leaders while driving high-quality, scalable software solutions.",
    badges: ["Real Client Projects", "Mentorship Program", "Career Growth"],
    image: madushiImg,
    alt: "Madushi Sarathchandra, Associate Tech Lead",
  },
  {
    name: "Weditha Vishwa",
    role: "Intern - Software Engineering",
    since: "Completed a six-month internship in 2026.",
    quote:
      "The supportive culture and continuous learning opportunities have helped me grow both technically and professionally.",
    badges: ["Emerging Talent", "Collaborative Culture", "Future Innovation"],
    image: wedithaImg,
    alt: "Weditha Vishwa, Intern - Software Engineering",
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
              <ul className="es-badges" aria-hidden={false}>
                {s.badges.map((b) => (
                  <li key={b} className="es-badge">
                    <ArrowRightCircle className="es-badge-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
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
