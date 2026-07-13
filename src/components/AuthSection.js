"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import MagneticButton from "@/components/MagneticButton";
import { handleSpotlightMove } from "@/lib/spotlight";

export default function AuthSection() {
  const [tab, setTab] = useState("login");
  const [status, setStatus] = useState(
    "DEMO MODE — forms are not yet connected to a live backend"
  );

  // TODO(real auth): replace these two handlers with next-auth's signIn()
  // and a real POST to /api/register once MongoDB + NextAuth are wired up.
  function handleLogin(e) {
    e.preventDefault();
    setStatus("DEMO MODE — log in received (no backend connected yet)");
  }

  function handleSignup(e) {
    e.preventDefault();
    setStatus("DEMO MODE — account request received (no backend connected yet)");
  }

  return (
    <section id="auth">
      <div className="wrap auth-shell">
        <RevealOnScroll as="div" className="auth-copy">
          <div className="eyebrow">Account</div>
          <h2>One account, the whole farm.</h2>
          <p>
            Track project requests, see infrastructure status, and message
            your AURUX team from a single dashboard.
          </p>
          <ul className="auth-points">
            <li>See live status of your hosted models and servers</li>
            <li>Message your assigned engineering team directly</li>
            <li>Review invoices, contracts, and project timelines</li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll as="div" delay={120}>
        <div className="auth-card spotlight-card" onMouseMove={handleSpotlightMove}>
          <div className="tabs">
            <button
              className={`tab${tab === "login" ? " active" : ""}`}
              onClick={() => setTab("login")}
              type="button"
            >
              Log in
            </button>
            <button
              className={`tab${tab === "signup" ? " active" : ""}`}
              onClick={() => setTab("signup")}
              type="button"
            >
              Sign up
            </button>
          </div>

          <form
            className={`auth-form${tab === "login" ? " active" : ""}`}
            onSubmit={handleLogin}
          >
            <div className="field">
              <label htmlFor="login-email">EMAIL</label>
              <input id="login-email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="login-pass">PASSWORD</label>
              <input id="login-pass" type="password" placeholder="••••••••" required />
            </div>
            <MagneticButton className="magnetic-block"><button className="btn btn-gold submit-btn" type="submit">Log in</button></MagneticButton>
            <p className="form-note">
              No account yet?{" "}
              <a onClick={() => setTab("signup")}>Sign up instead</a>
            </p>
          </form>

          <form
            className={`auth-form${tab === "signup" ? " active" : ""}`}
            onSubmit={handleSignup}
          >
            <div className="field">
              <label htmlFor="signup-name">FULL NAME</label>
              <input id="signup-name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="field">
              <label htmlFor="signup-email">EMAIL</label>
              <input id="signup-email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="signup-pass">PASSWORD</label>
              <input id="signup-pass" type="password" placeholder="••••••••" required />
            </div>
            <MagneticButton className="magnetic-block"><button className="btn btn-gold submit-btn" type="submit">Create account</button></MagneticButton>
            <p className="form-note">
              Already with us? <a onClick={() => setTab("login")}>Log in instead</a>
            </p>
          </form>

          <p className="demo-flag">{status}</p>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
