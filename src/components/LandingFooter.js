"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import MagneticButton from "@/components/MagneticButton";

export default function LandingFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  return (
    <footer className="landing-footer">
      <div className="wrap">
        <RevealOnScroll>
          <div className="landing-footer-grid">
            <div className="lf-brand">
              <div className="logo-mark">
                <span className="mark">
                  <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="24" height="24" rx="2" stroke="#c9a227" strokeWidth="1.4" />
                    <path d="M13 5L20 20H16.5L13 12.5L9.5 20H6L13 5Z" fill="#c9a227" />
                  </svg>
                </span>
                AURUX
              </div>
              <p>
                An AI studio and our own compute farm, under one roof —
                so what we build for you has somewhere real to run.
              </p>
              <div className="lf-socials">
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="X / Twitter">X</a>
                <a href="#" aria-label="GitHub">gh</a>
              </div>
              <div className="lf-badges">
                <span className="lf-badge">Self-hosted infrastructure</span>
                <span className="lf-badge">Next.js</span>
                <span className="lf-badge">MongoDB</span>
              </div>
            </div>

            <div className="lf-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#ask">Ask AURUX</a></li>
              </ul>
            </div>

            <div className="lf-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#hire">Hire us</a></li>
                <li><a href="mailto:hello@aurux.ai">Contact</a></li>
                <li><a href="#auth">Client login</a></li>
              </ul>
            </div>

            <div className="lf-col lf-newsletter">
              <h4>Stay in the loop</h4>
              <p style={{ color: "var(--text-dim)", fontSize: "14px", marginBottom: "14px" }}>
                Occasional notes on new tools and projects. No spam.
              </p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <MagneticButton>
                  <button type="submit" className="btn btn-gold">Subscribe</button>
                </MagneticButton>
              </form>
              {subscribed && (
                <p className="demo-flag" role="status">
                  DEMO — not connected to a real mailing list yet
                </p>
              )}
            </div>
          </div>
        </RevealOnScroll>

        <div className="landing-footer-bottom">
          <p>© 2026 AURUX — DEMO BUILD</p>
          <p>Designed &amp; grown in Chittagong</p>
        </div>
      </div>
    </footer>
  );
}
