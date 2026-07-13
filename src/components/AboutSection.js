import RevealOnScroll from "@/components/RevealOnScroll";
import { handleSpotlightMove } from "@/lib/spotlight";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="wrap contact-shell">
        <RevealOnScroll as="div" className="about-copy">
          <div className="eyebrow">About us</div>
          <h2>Started by two people who wanted to own the whole stack.</h2>
          <p>
            AURUX started as a simple frustration: every AI project we
            touched depended on infrastructure we didn&apos;t control. So we
            built our own — a compute farm we maintain ourselves, paired
            with a studio that builds directly on top of it.
          </p>
          <p>
            The name comes from &quot;aurum,&quot; gold — the idea that
            intelligence, like gold, has to be grown, refined, and tended,
            not mined and dumped on someone&apos;s desk.
          </p>
          <div className="founders">
            <div className="founder">
              <div className="avatar">AN</div>
              <div><b>Abdulla Al Noman</b><span>Founder</span></div>
            </div>
            <div className="founder">
              <div className="avatar">TE</div>
              <div><b>Tawhid E Elahi</b><span>Co-Founder</span></div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="div" delay={120}>
          <div className="contact-card spotlight-card" onMouseMove={handleSpotlightMove}>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "19px" }}>
              Why work with AURUX
            </h3>
            <ul className="auth-points">
              <li>One team owns design, build, and hosting from day one</li>
              <li>Transparent, scoped pricing — no vague retainers</li>
              <li>Get instant answers anytime through our Ask assistant</li>
            </ul>
            <a href="#ask" className="btn btn-gold" style={{ alignSelf: "flex-start" }}>
              Ask a question
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
