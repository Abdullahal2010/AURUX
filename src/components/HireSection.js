"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import MagneticButton from "@/components/MagneticButton";
import { handleSpotlightMove } from "@/lib/spotlight";

export default function HireSection() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: once real backend exists, POST this to /api/hire (send an email
  // or store the lead in MongoDB) instead of just showing a demo message.
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="hire">
      <div className="wrap hire-shell">
        <RevealOnScroll as="div" className="hire-copy">
          <div className="eyebrow">Hire</div>
          <h2>Tell us what you&apos;re building.</h2>
          <p>Fill out the brief and we&apos;ll reply with a scoped plan — usually within two business days.</p>
          <ul className="hire-list">
            <li>
              <span className="hire-num">A</span>
              <div><b>We read your brief</b><span>A founder reviews every request personally before it&apos;s scoped.</span></div>
            </li>
            <li>
              <span className="hire-num">B</span>
              <div><b>You get a plan, not a pitch</b><span>Timeline, team, and cost — no vague retainers.</span></div>
            </li>
            <li>
              <span className="hire-num">C</span>
              <div><b>We build on our own farm</b><span>Development and hosting stay under one roof from day one.</span></div>
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll as="div" delay={120}>
        <div className="hire-form spotlight-card" onMouseMove={handleSpotlightMove}>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="hire-name">NAME</label>
                <input id="hire-name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="hire-email">EMAIL</label>
                <input id="hire-email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="hire-company">COMPANY (OPTIONAL)</label>
                <input id="hire-company" type="text" placeholder="Company name" />
              </div>
              <div className="field">
                <label htmlFor="hire-budget">ESTIMATED BUDGET</label>
                <select id="hire-budget">
                  <option>Under $2,000</option>
                  <option>$2,000 – $10,000</option>
                  <option>$10,000 – $50,000</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="hire-type">PROJECT TYPE</label>
                <select id="hire-type">
                  <option>Custom AI model</option>
                  <option>Compute hosting / server farm</option>
                  <option>Managed IT support</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="hire-msg">PROJECT DETAILS</label>
                <textarea id="hire-msg" rows="4" placeholder="What are you trying to build or fix?" required></textarea>
              </div>
            </div>
            <MagneticButton className="magnetic-block">
              <button className="btn btn-gold submit-btn" type="submit">Send project brief</button>
            </MagneticButton>
            <div className={`success-msg${submitted ? " show" : ""}`}>
              ✓ Brief received — this is a demo, so nothing was actually sent yet.
            </div>
          </form>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
