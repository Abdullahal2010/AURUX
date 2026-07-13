"use client";

import { useState } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const { settings, setFontScale, toggleContrast, toggleMotion, toggleFont, toggleUnderline, reset } =
    useAccessibility();

  const fontPercent = Math.round(settings.fontScale * 100);

  return (
    <div className="a11y-bar" role="region" aria-label="Accessibility settings">
      <button
        type="button"
        className="a11y-toggle"
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="a11y-toggle-icon" aria-hidden="true">♿</span>
        Accessibility
        <span className="a11y-chevron" aria-hidden="true">{open ? "▾" : "▴"}</span>
      </button>

      {open && (
        <div className="a11y-panel" id="a11y-panel">
          <div className="a11y-group">
            <span className="a11y-label">Text size</span>
            <div className="a11y-btn-row">
              <button
                type="button"
                className="a11y-btn"
                onClick={() => setFontScale(settings.fontScale - 0.1)}
                aria-label="Decrease text size"
              >
                A−
              </button>
              <span className="a11y-value" aria-live="polite">{fontPercent}%</span>
              <button
                type="button"
                className="a11y-btn"
                onClick={() => setFontScale(settings.fontScale + 0.1)}
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>
          </div>

          <div className="a11y-group">
            <span className="a11y-label">Contrast</span>
            <button
              type="button"
              className={`a11y-btn a11y-pill${settings.contrast === "high" ? " active" : ""}`}
              aria-pressed={settings.contrast === "high"}
              onClick={toggleContrast}
            >
              High contrast
            </button>
          </div>

          <div className="a11y-group">
            <span className="a11y-label">Motion</span>
            <button
              type="button"
              className={`a11y-btn a11y-pill${settings.motion === "reduced" ? " active" : ""}`}
              aria-pressed={settings.motion === "reduced"}
              onClick={toggleMotion}
            >
              Reduce motion
            </button>
          </div>

          <div className="a11y-group">
            <span className="a11y-label">Font</span>
            <button
              type="button"
              className={`a11y-btn a11y-pill${settings.font === "dyslexia" ? " active" : ""}`}
              aria-pressed={settings.font === "dyslexia"}
              onClick={toggleFont}
            >
              Readable font
            </button>
          </div>

          <div className="a11y-group">
            <span className="a11y-label">Links</span>
            <button
              type="button"
              className={`a11y-btn a11y-pill${settings.underline ? " active" : ""}`}
              aria-pressed={settings.underline}
              onClick={toggleUnderline}
            >
              Underline links
            </button>
          </div>

          <button type="button" className="a11y-reset" onClick={reset}>
            Reset all
          </button>
        </div>
      )}
    </div>
  );
}
