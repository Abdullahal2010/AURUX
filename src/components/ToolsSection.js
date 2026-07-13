"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import MagneticButton from "@/components/MagneticButton";
import { handleSpotlightMove } from "@/lib/spotlight";

const tools = [
  {
    id: "media-recorder",
    title: "Media Recorder",
    desc: "A free in-browser studio for camera, screen, and audio capture, with quick photo/video/audio editing built in.",
    tag: "LIVE TOOL",
    available: true,
    href: "/tools/media-studio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    id: "downloader",
    title: "Media Downloader",
    desc: "Paste a YouTube, Facebook, or TikTok link and download it as video (any resolution) or audio.",
    tag: "PREVIEW",
    available: true,
    href: "/tools/media-downloader",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M5 19h14" />
      </svg>
    ),
  },
  {
    id: "chat",
    title: "All-in-One Chat Platform",
    desc: "One inbox for messages across your favorite chat apps and channels, so nothing gets missed.",
    tag: "COMING SOON",
    available: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 11.5a8.5 8.5 0 01-12.4 7.6L3 20l1.1-5.4A8.5 8.5 0 1121 11.5z" />
      </svg>
    ),
  },
];

export default function ToolsSection() {
  const [shown, setShown] = useState({});

  function handleStub(e, id) {
    e.preventDefault();
    setShown((prev) => ({ ...prev, [id]: true }));
  }

  return (
    <section id="tools">
      <div className="wrap">
        <RevealOnScroll>
          <div className="section-head">
            <div className="eyebrow">Tools</div>
            <h2>Free tools we built along the way.</h2>
            <p>Small in-browser utilities from the AURUX team — no account needed to try them.</p>
          </div>
        </RevealOnScroll>

        <div className="tools-grid">
          {tools.map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 80} as="div">
              <div className="tool-card spotlight-card" onMouseMove={handleSpotlightMove}>
                <div className="service-icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <span className={`tool-tag${t.available ? " available" : ""}`}>{t.tag}</span>
                {t.available ? (
                  <MagneticButton>
                    <a href={t.href} className="btn btn-gold tool-btn">Launch tool</a>
                  </MagneticButton>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-ghost tool-btn"
                      onClick={(e) => handleStub(e, t.id)}
                    >
                      Launch tool
                    </button>
                    <p className={`tool-note${shown[t.id] ? " show" : ""}`}>
                      DEMO — this tool is a placeholder card and isn&apos;t built yet.
                    </p>
                  </>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
