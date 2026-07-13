"use client";

import { useEffect, useRef, useState } from "react";

const robotLines = {
  home: "Hey there.",
  auth: "Let's get you in.",
  services: "Here's what we grow.",
  tools: "Try these for free.",
  reviews: "They liked us.",
  hire: "Let's build something.",
  ask: "Ask me anything.",
  about: "Say hello anytime.",
};

const sectionIds = ["home", "auth", "services", "tools", "reviews", "hire", "ask", "about"];

export default function RobotMascot() {
  const [currentExpr, setCurrentExpr] = useState("home");
  const [bubbleShow, setBubbleShow] = useState(false);
  const robotRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentExpr(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setBubbleShow(false);
    const raf = requestAnimationFrame(() => setBubbleShow(true));

    if (robotRef.current) {
      robotRef.current.classList.remove("bump");
      void robotRef.current.offsetWidth; // restart animation
      robotRef.current.classList.add("bump");
    }

    return () => cancelAnimationFrame(raf);
  }, [currentExpr]);

  // "tools" section reuses the "services" robot expression (no dedicated art for it)
  const exprName = currentExpr === "tools" ? "services" : currentExpr;

  return (
    <div id="robot" aria-hidden="true" ref={robotRef}>
      <div className={`robot-bubble${bubbleShow ? " show" : ""}`}>
        {robotLines[currentExpr] || ""}
      </div>
  <svg viewBox="0 0 140 176" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rg-head" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2a2f40"/>
        <stop offset="100%" stopColor="#101219"/>
      </linearGradient>
      <linearGradient id="rg-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#20232f"/>
        <stop offset="100%" stopColor="#0e1016"/>
      </linearGradient>
      <radialGradient id="rg-visor" cx="50%" cy="30%" r="80%">
        <stop offset="0%" stopColor="#1b2130"/>
        <stop offset="100%" stopColor="#040509"/>
      </radialGradient>
      <linearGradient id="rg-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f2d888"/>
        <stop offset="100%" stopColor="#c9a227"/>
      </linearGradient>
      <radialGradient id="rg-core" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff6d8"/>
        <stop offset="55%" stopColor="#e6c451"/>
        <stop offset="100%" stopColor="#c9a227" stopOpacity="0"/>
      </radialGradient>
      <filter id="rg-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="2.6" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <g className="robot-body">
      {/* shoulder stub arms */}
      <rect x="10" y="118" width="15" height="30" rx="7.5" fill="url(#rg-body)" stroke="#c9a227" strokeWidth="2"/>
      <rect x="115" y="118" width="15" height="30" rx="7.5" fill="url(#rg-body)" stroke="#c9a227" strokeWidth="2"/>
      <circle cx="30" cy="122" r="7.5" fill="url(#rg-head)" stroke="url(#rg-gold)" strokeWidth="2"/>
      <circle cx="110" cy="122" r="7.5" fill="url(#rg-head)" stroke="url(#rg-gold)" strokeWidth="2"/>

      {/* torso */}
      <rect x="32" y="114" width="76" height="52" rx="17" fill="url(#rg-body)" stroke="url(#rg-gold)" strokeWidth="2.5"/>
      {/* torso panel lines */}
      <line x1="44" y1="152" x2="60" y2="152" stroke="#c9a227" strokeWidth="1.6" opacity="0.4" strokeLinecap="round"/>
      <line x1="80" y1="152" x2="96" y2="152" stroke="#c9a227" strokeWidth="1.6" opacity="0.4" strokeLinecap="round"/>
      {/* chest core */}
      <circle cx="70" cy="136" r="14" fill="none" stroke="url(#rg-gold)" strokeWidth="1.6" opacity="0.7"/>
      <circle className="chest-core" cx="70" cy="136" r="9" fill="url(#rg-core)" filter="url(#rg-glow)"/>

      {/* neck */}
      <rect x="59" y="98" width="22" height="18" fill="url(#rg-body)" stroke="url(#rg-gold)" strokeWidth="2"/>

      {/* side ear panels */}
      <rect x="12" y="54" width="11" height="26" rx="5" fill="url(#rg-body)" stroke="url(#rg-gold)" strokeWidth="1.8"/>
      <rect x="117" y="54" width="11" height="26" rx="5" fill="url(#rg-body)" stroke="url(#rg-gold)" strokeWidth="1.8"/>
      <circle cx="17.5" cy="67" r="1.8" fill="#c9a227"/>
      <circle cx="122.5" cy="67" r="1.8" fill="#c9a227"/>

      {/* antenna */}
      <line x1="70" y1="10" x2="70" y2="32" stroke="url(#rg-gold)" strokeWidth="2.6"/>
      <circle className="antenna-core" cx="70" cy="9" r="4.6" fill="url(#rg-core)" filter="url(#rg-glow)"/>

      {/* head */}
      <rect x="22" y="32" width="96" height="70" rx="26" fill="url(#rg-head)" stroke="url(#rg-gold)" strokeWidth="2.8"/>
      {/* head sheen */}
      <ellipse cx="52" cy="46" rx="26" ry="11" fill="#ffffff" opacity="0.05"/>

      {/* visor */}
      <rect x="34" y="48" width="72" height="40" rx="18" fill="url(#rg-visor)" stroke="#3a3f52" strokeWidth="1.4"/>

      {/* ============ EXPRESSIONS (inside visor) ============ */}

      {/* HOME : calm / alert */}
      <g className={`expr${exprName === "home" ? " is-active" : ""}`} id="expr-home">
        <circle cx="54" cy="66" r="6.4" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <circle cx="86" cy="66" r="6.4" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <path d="M56 80 Q70 87 84 80" stroke="#edeae2" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
      </g>

      {/* AUTH : welcoming / wide smile */}
      <g className={`expr${exprName === "auth" ? " is-active" : ""}`} id="expr-auth">
        <circle cx="54" cy="65" r="7.6" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <circle cx="86" cy="65" r="7.6" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <path d="M52 79 Q70 93 88 79" stroke="#edeae2" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </g>

      {/* SERVICES : focused / analytical */}
      <g className={`expr${exprName === "services" ? " is-active" : ""}`} id="expr-services">
        <rect x="47" y="63" width="15" height="4.5" rx="2.2" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <rect x="78" y="63" width="15" height="4.5" rx="2.2" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <path d="M58 82 H82" stroke="#edeae2" strokeWidth="2.6" strokeLinecap="round"/>
        <circle className="think-dot" cx="108" cy="40" r="2.1" fill="#c9a227"/>
        <circle className="think-dot" cx="114" cy="35" r="1.6" fill="#c9a227"/>
        <circle className="think-dot" cx="119" cy="29" r="1.2" fill="#c9a227"/>
      </g>

      {/* REVIEWS : proud / happy */}
      <g className={`expr${exprName === "reviews" ? " is-active" : ""}`} id="expr-reviews">
        <path d="M47 67 Q54 58 61 67" stroke="url(#rg-gold)" strokeWidth="3.2" fill="none" strokeLinecap="round" filter="url(#rg-glow)"/>
        <path d="M79 67 Q86 58 93 67" stroke="url(#rg-gold)" strokeWidth="3.2" fill="none" strokeLinecap="round" filter="url(#rg-glow)"/>
        <path d="M50 80 Q70 96 90 80" stroke="#edeae2" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="30" cy="78" r="5" fill="#c9a227" opacity="0.3"/>
        <circle cx="110" cy="78" r="5" fill="#c9a227" opacity="0.3"/>
      </g>

      {/* HIRE : excited / eager */}
      <g className={`expr${exprName === "hire" ? " is-active" : ""}`} id="expr-hire">
        <circle cx="54" cy="65" r="8.2" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <circle cx="86" cy="65" r="8.2" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <circle cx="57" cy="61.5" r="2" fill="#fff"/>
        <circle cx="89" cy="61.5" r="2" fill="#fff"/>
        <ellipse cx="70" cy="86" rx="11" ry="8.5" fill="#040509" stroke="url(#rg-gold)" strokeWidth="2.4"/>
      </g>

      {/* ASK : curious / attentive */}
      <g className={`expr${exprName === "ask" ? " is-active" : ""}`} id="expr-ask">
        <circle cx="54" cy="66" r="6.4" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <circle cx="86" cy="66" r="6.4" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <path d="M47 56 Q54 51 61 56" stroke="#edeae2" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55"/>
        <path d="M79 56 Q86 51 93 56" stroke="#edeae2" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55"/>
        <ellipse cx="70" cy="83" rx="5.5" ry="6.5" fill="#040509" stroke="#edeae2" strokeWidth="2.2"/>
      </g>

      {/* ABOUT : warm / friendly */}
      <g className={`expr${exprName === "about" ? " is-active" : ""}`} id="expr-about">
        <circle cx="54" cy="66" r="6.8" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <circle cx="86" cy="66" r="6.8" fill="url(#rg-gold)" filter="url(#rg-glow)"/>
        <path d="M53 81 Q70 91 87 81" stroke="#edeae2" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="80" r="5.2" fill="#c9455a" opacity="0.28"/>
        <circle cx="108" cy="80" r="5.2" fill="#c9455a" opacity="0.28"/>
      </g>
    </g>
  </svg>
    </div>
  );
}
