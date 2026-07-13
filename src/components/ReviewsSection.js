"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { handleSpotlightMove } from "@/lib/spotlight";

const reviews = [
  {
    stars: "★★★★★",
    quote:
      "They didn't just hand us a model and disappear. AURUX kept hosting it, kept monitoring it, and answered every call.",
    initials: "RH",
    name: "Rahim H.",
    role: "Operations Lead, retail logistics",
  },
  {
    stars: "★★★★★",
    quote:
      "Having the AI team and the infrastructure team be the same people meant nothing ever got stuck in a handoff.",
    initials: "SA",
    name: "Sadia A.",
    role: "Founder, edtech startup",
  },
  {
    stars: "★★★★☆",
    quote:
      "Fast to respond, straightforward about timelines, and upfront when something wasn't going to work.",
    initials: "TK",
    name: "Tanvir K.",
    role: "CTO, fintech",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews">
      <div className="wrap">
        <RevealOnScroll>
          <div className="section-head">
            <div className="eyebrow">Reviews</div>
            <h2>What early partners are saying.</h2>
            <p>Sample feedback shown for this demo — real client reviews will replace these.</p>
          </div>
        </RevealOnScroll>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <RevealOnScroll key={r.initials} delay={i * 90} as="div">
              <div className="review-card spotlight-card" onMouseMove={handleSpotlightMove}>
                <div className="stars">{r.stars}</div>
                <p>&quot;{r.quote}&quot;</p>
                <div className="review-person">
                  <div className="avatar">{r.initials}</div>
                  <div>
                    <b>{r.name}</b>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
