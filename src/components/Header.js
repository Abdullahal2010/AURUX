"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="wrap">
        <a href="/#home" className="logo">
          <span className="mark">
            <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="24" height="24" rx="2" stroke="#c9a227" strokeWidth="1.4" />
              <path d="M13 5L20 20H16.5L13 12.5L9.5 20H6L13 5Z" fill="#c9a227" />
            </svg>
          </span>
          AURUX
        </a>
        <div className={`navlinks${open ? " open" : ""}`} id="navlinks">
          <a href="/#services" onClick={() => setOpen(false)}>Services</a>
          <a href="/#tools" onClick={() => setOpen(false)}>Tools</a>
          <a href="/#reviews" onClick={() => setOpen(false)}>Reviews</a>
          <a href="/#hire" onClick={() => setOpen(false)}>Hire</a>
          <a href="/#ask" onClick={() => setOpen(false)}>Ask</a>
          <a href="/#about" onClick={() => setOpen(false)}>About</a>
        </div>
        <div className="navcta">
          <a href="/#auth" className="btn btn-ghost">Log in / Sign up</a>
          <button
            className="burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
