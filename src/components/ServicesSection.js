"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { handleSpotlightMove } from "@/lib/spotlight";

const services = [
  {
    tag: "WEB",
    title: "Web Design & Web Development",
    desc: "Fast, responsive websites and web apps — designed and coded in-house, built to actually convert.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="8.5" x2="21" y2="8.5" />
        <circle cx="6.3" cy="6.3" r="0.5" fill="currentColor" />
        <circle cx="8.6" cy="6.3" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: "MARKETING",
    title: "Digital Marketing & Advertising",
    desc: "Campaigns across search, social, and paid media, planned around real growth targets, not vanity metrics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 10v4h4l6 4V6l-6 4H3z" />
        <path d="M17.5 8.5a5 5 0 010 7" />
      </svg>
    ),
  },
  {
    tag: "PRODUCT",
    title: "Digital Product Design",
    desc: "From concept to launch — apps, platforms, and digital tools shaped around how people will actually use them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
        <path d="M3 7l9 5 9-5M12 12v9" />
      </svg>
    ),
  },
  {
    tag: "CREATIVE",
    title: "Ad Making",
    desc: "Scroll-stopping video and static ad creative, cut and produced for the platforms your audience is actually on.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    tag: "BRANDING",
    title: "Brand Logo, Banners & Posters",
    desc: "Smart, premium brand identity — logos, banners, posters, and everything that carries your look.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
  {
    tag: "AI",
    title: "AI Integration",
    desc: "Wiring AI directly into your existing tools and workflows, so it fits the way your team already works.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="wrap">
        <RevealOnScroll>
          <div className="section-head">
            <div className="eyebrow">Services</div>
            <h2>Everything from your first sketch to a running AI agent.</h2>
            <p>Design, development, marketing, and AI — built and hosted end to end by the AURUX team.</p>
          </div>
        </RevealOnScroll>

        <div className="services-grid">
          {services.map((s, i) => (
            <RevealOnScroll key={s.tag} delay={i * 70} as="div">
              <div className="service-card spotlight-card" onMouseMove={handleSpotlightMove}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-tag">{s.tag}</span>
              </div>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={services.length * 70} as="div">
            <div className="service-card featured spotlight-card" onMouseMove={handleSpotlightMove}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="4" y="7" width="16" height="11" rx="3" />
                  <circle cx="9" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
                  <circle cx="15" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
                  <path d="M12 3v4" />
                  <circle cx="12" cy="3" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div className="service-copy">
                <h3>Custom GPTs &amp; Copilot Agent Creation</h3>
                <p>
                  We design and build custom GPTs and Copilot agents trained
                  on your business — answering questions, automating tasks,
                  and plugging straight into the tools you already use.
                </p>
                <span className="service-tag">AI AGENTS</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
