"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resolutions = [
  "8K (4320p)",
  "4K (2160p)",
  "2K / QHD (1440p)",
  "Full HD (1080p)",
  "HD (720p)",
  "SD (480p)",
  "360p",
  "240p",
  "144p",
];

const audioFormats = [
  "MP3 — 320kbps",
  "MP3 — 192kbps",
  "MP3 — 128kbps",
  "M4A (AAC)",
  "WAV (lossless)",
  "FLAC (lossless)",
];

const platforms = ["YouTube", "Facebook", "TikTok", "Instagram", "X / Twitter", "Vimeo"];

export default function MediaDownloaderPage() {
  const [url, setUrl] = useState("");
  const [preview, setPreview] = useState(null);
  const [mode, setMode] = useState("video");
  const [resolution, setResolution] = useState(resolutions[3]);
  const [audioFormat, setAudioFormat] = useState(audioFormats[0]);
  const [status, setStatus] = useState("");
  const [extStatus, setExtStatus] = useState("");

  function handleFetch(e) {
    e.preventDefault();
    if (!url.trim()) return;
    // DEMO: no real request is made — this just simulates finding a video.
    setPreview({
      title: "Sample video title (demo preview)",
      duration: "4:12",
      source: guessSource(url),
    });
    setStatus("");
  }

  function guessSource(u) {
    const lower = u.toLowerCase();
    if (lower.includes("youtube") || lower.includes("youtu.be")) return "YouTube";
    if (lower.includes("facebook") || lower.includes("fb.watch")) return "Facebook";
    if (lower.includes("tiktok")) return "TikTok";
    if (lower.includes("instagram")) return "Instagram";
    if (lower.includes("twitter") || lower.includes("x.com")) return "X / Twitter";
    if (lower.includes("vimeo")) return "Vimeo";
    return "Unknown source";
  }

  function handleDownload(e) {
    e.preventDefault();
    setStatus(
      mode === "video"
        ? `DEMO — would download at ${resolution}. No file is actually generated yet.`
        : `DEMO — would download as ${audioFormat}. No file is actually generated yet.`
    );
  }

  function handleExtensionClick(e) {
    e.preventDefault();
    setExtStatus("DEMO — the browser extension isn't built yet. This is a placeholder button.");
  }

  return (
    <>
      <Header />
      <section className="dl-page" role="main">
        <div className="wrap">
          <div className="dl-head">
            <div className="eyebrow">Tools · Media Downloader</div>
            <h1>Download video or audio from almost anywhere.</h1>
            <p>
              Paste a link from YouTube, Facebook, TikTok, and more — pick a
              resolution or an audio format, and download. This page is a
              working preview of the interface; the actual download step is
              a demo for now.
            </p>
            <div className="dl-platforms" aria-label="Supported platforms">
              {platforms.map((p) => (
                <span className="dl-platform-badge" key={p}><b>{p}</b></span>
              ))}
              <span className="dl-platform-badge">and more</span>
            </div>
          </div>

          {/* URL input + preview */}
          <div className="dl-card">
            <h2>1. Paste a video link</h2>
            <p className="dl-card-sub">We&apos;ll detect the source and load a preview.</p>
            <form className="dl-url-row" onSubmit={handleFetch}>
              <label htmlFor="dl-url" style={visuallyHidden}>
                Video URL
              </label>
              <input
                id="dl-url"
                type="url"
                inputMode="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                aria-describedby="dl-url-hint"
              />
              <button type="submit" className="btn btn-gold">Fetch video</button>
            </form>
            <p id="dl-url-hint" style={{ ...visuallyHidden }}>
              Paste a link from YouTube, Facebook, TikTok, Instagram, X, or Vimeo, then press Fetch video.
            </p>

            {preview && (
              <div className="dl-preview" role="status" aria-live="polite">
                <div className="dl-thumb" aria-hidden="true">Thumbnail preview</div>
                <div className="dl-preview-info">
                  <h3>{preview.title}</h3>
                  <p>Detected source: {preview.source} · Duration: {preview.duration}</p>
                  <p className="dl-meta">DEMO PREVIEW — not a real video</p>
                </div>
              </div>
            )}
          </div>

          {/* Format + download */}
          <div className="dl-card">
            <h2>2. Choose a format</h2>
            <p className="dl-card-sub">Download as video at any resolution, or extract audio only.</p>

            <div className="dl-mode-tabs" role="tablist" aria-label="Download format">
              <button
                type="button"
                role="tab"
                aria-selected={mode === "video"}
                className="dl-mode-tab"
                onClick={() => setMode("video")}
              >
                Video
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "audio"}
                className="dl-mode-tab"
                onClick={() => setMode("audio")}
              >
                Audio only
              </button>
            </div>

            <form onSubmit={handleDownload}>
              <div className="dl-options-grid">
                {mode === "video" ? (
                  <div className="field">
                    <label htmlFor="dl-resolution">RESOLUTION</label>
                    <select
                      id="dl-resolution"
                      value={resolution}
                      onChange={(e) => setResolution(e.target.value)}
                    >
                      {resolutions.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="field">
                    <label htmlFor="dl-audio-format">AUDIO FORMAT</label>
                    <select
                      id="dl-audio-format"
                      value={audioFormat}
                      onChange={(e) => setAudioFormat(e.target.value)}
                    >
                      {audioFormats.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-gold">
                Download {mode === "video" ? "video" : "audio"}
              </button>
              <div className={`dl-status${status ? " show" : ""}`} role="status" aria-live="polite">
                {status && <>✓ {status}</>}
              </div>
            </form>

            <p className="dl-note">
              Only download content you own or have the right to use.
              Respect copyright and each platform&apos;s terms of service.
            </p>
          </div>

          {/* Extension */}
          <div className="dl-card dl-ext-card">
            <div className="dl-ext-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                <circle cx="12" cy="12" r="6" />
              </svg>
            </div>
            <div className="dl-ext-copy">
              <h2>Get the browser extension</h2>
              <p>Download straight from any video page with one click — no need to copy and paste a link.</p>
            </div>
            <button type="button" className="btn btn-ghost" onClick={handleExtensionClick}>
              Add extension
            </button>
          </div>
          {extStatus && (
            <p className="dl-status show" role="status" aria-live="polite" style={{ marginTop: "-12px" }}>
              ✓ {extStatus}
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

const visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};
