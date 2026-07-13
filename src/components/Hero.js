"use client";

import { useEffect, useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const gridRef = useRef(null);
  const sweepRef = useRef(null);
  const glowRef = useRef(null);

  // Subtle scroll-linked parallax on the background grid/sweep layers.
  useEffect(() => {
    function reduceMotion() {
      return (
        document.documentElement.getAttribute("data-a11y-motion") === "reduced" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }

    let ticking = false;
    function onScroll() {
      if (reduceMotion()) return;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (gridRef.current) gridRef.current.style.transform = `translateY(${y * 0.12}px)`;
        if (sweepRef.current) sweepRef.current.style.transform = `translateY(${y * 0.06}px)`;
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleMouseMove(e) {
    if (document.documentElement.getAttribute("data-a11y-motion") === "reduced") return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (glowRef.current) {
      glowRef.current.style.setProperty("--gx", `${e.clientX - rect.left}px`);
      glowRef.current.style.setProperty("--gy", `${e.clientY - rect.top}px`);
    }
  }

  return (
    <section
      className="hero"
      id="home"
      style={{ borderBottom: "1px solid var(--line)" }}
      onMouseMove={handleMouseMove}
    >
      <div className="field-grid" ref={gridRef}></div>
      <div className="field-sweep" ref={sweepRef}></div>
      <div className="hero-glow" ref={glowRef}></div>
      <div className="wrap hero-inner">
        <div className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
          AI Studio &amp; Infrastructure Farm
        </div>
        <h1 className="hero-anim" style={{ animationDelay: "80ms" }}>
          We farm the infrastructure.
          <br />
          You harvest the <span className="accent">intelligence</span>.
        </h1>
        <p className="lead hero-anim" style={{ animationDelay: "160ms" }}>
          AURUX pairs a full-stack AI development studio with our own compute
          farm — so the models we build for you run on infrastructure we
          grow, tend, and control ourselves.
        </p>
        <div className="hero-actions hero-anim" style={{ animationDelay: "240ms" }}>
          <MagneticButton>
            <a href="#hire" className="btn btn-gold">Hire AURUX</a>
          </MagneticButton>
          <MagneticButton>
            <a href="#services" className="btn btn-ghost">See what we build</a>
          </MagneticButton>
        </div>
        <div className="stat-row hero-anim" style={{ animationDelay: "320ms" }}>
          <div className="stat"><b>24/7</b><span>FARM UPTIME</span></div>
          <div className="stat"><b>&lt;48H</b><span>AVG. RESPONSE TIME</span></div>
          <div className="stat"><b>100%</b><span>IN-HOUSE COMPUTE</span></div>
        </div>
      </div>
    </section>
  );
}
