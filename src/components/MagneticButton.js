"use client";

import { useRef } from "react";

/**
 * Wraps a button/link and makes it "magnetic" — it subtly follows the
 * cursor while hovered, then springs back on mouse leave. Pure CSS
 * transition + mousemove math, no extra dependencies.
 */
export default function MagneticButton({ children, className = "", strength = 0.35 }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    if (document.documentElement.getAttribute("data-a11y-motion") === "reduced") return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }

  return (
    <span
      ref={ref}
      className={`magnetic-wrap${className ? ` ${className}` : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
}
