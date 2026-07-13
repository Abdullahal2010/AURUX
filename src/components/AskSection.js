"use client";

import { useState, useRef, useEffect } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { handleSpotlightMove } from "@/lib/spotlight";

function getReply(qRaw) {
  const q = qRaw.toLowerCase();
  if (/(service|offer|do you (do|build|make))/.test(q)) {
    return "We cover web design & development, digital marketing, digital products, ad creative, branding (logos/banners/posters), AI integration, and custom GPT / Copilot agent builds. Want details on one of these?";
  }
  if (/(price|cost|budget|how much|rate)/.test(q)) {
    return "Pricing depends on scope — most projects fall into three ranges from under $2,000 to $50,000+. The fastest way to get a real number is the Hire form above; a founder scopes every request personally.";
  }
  if (/(founder|who (made|built|started|runs)|team|owner)/.test(q)) {
    return "AURUX was founded by Abdulla Al Noman (Founder) and Tawhid E Elahi (Co-Founder). You can read more about why we started AURUX in the About section below.";
  }
  if (/(tool|downloader|chat platform|media recorder|free (tool|utilit))/.test(q)) {
    return "Check out the Tools section above — we've got a free Media Recorder (camera, screen, and audio capture, live now), plus a Resource Downloader and an All-in-One Chat Platform coming soon.";
  }
  if (/(gpt|copilot|agent|chatbot|assistant)/.test(q)) {
    return "Yes — this chat is actually a preview of that idea. We build custom GPTs and Copilot agents trained on a business's own data, so they can answer questions or automate tasks inside tools you already use.";
  }
  if (/(host|compute|server|infrastructure|farm|uptime)/.test(q)) {
    return "We host and maintain our own compute infrastructure rather than just handing off a model — that's the 'IT farm' half of AURUX. It means one team is responsible for both building and keeping things running.";
  }
  if (/(contact|reach|email|phone|talk to (a )?human)/.test(q)) {
    return "The quickest way to reach the team directly is the Hire form above — send your brief and a founder will follow up personally.";
  }
  if (/(hire|start|project|work with)/.test(q)) {
    return "Great — head to the Hire section above and send us a short brief. We usually reply with a scoped plan within two business days.";
  }
  return "I'm a scripted demo for now, so my answers are limited — but once connected to a real custom GPT I'll be able to answer anything about AURUX. Try asking about services, pricing, hosting, or our founders.";
}

const chips = [
  "What services do you offer?",
  "How much does a website cost?",
  "Who founded AURUX?",
  "Do you build custom GPTs?",
  "What free tools do you have?",
];

export default function AskSection() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I'm the AURUX assistant (demo). Ask me about our services, pricing, hosting, or team." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  function handleAsk(question) {
    if (!question.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: getReply(question) }]);
    }, 650);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAsk(input);
  }

  return (
    <section id="ask">
      <div className="wrap ask-shell">
        <RevealOnScroll as="div" className="hire-copy">
          <div className="eyebrow">Ask AURUX</div>
          <h2>Have a question? Ask our assistant directly.</h2>
          <p>
            A custom GPT trained on AURUX — our services, pricing approach,
            and process. Ask it anything before you fill out a brief.
          </p>
          <ul className="hire-list">
            <li>
              <span className="hire-num">A</span>
              <div><b>Trained on our real offerings</b><span>Answers reflect the services and process on this site.</span></div>
            </li>
            <li>
              <span className="hire-num">B</span>
              <div><b>Available anytime</b><span>No waiting on a reply — ask at 2am if you want to.</span></div>
            </li>
            <li>
              <span className="hire-num">C</span>
              <div><b>Still want a human?</b><span>It can hand you straight to the Hire form when you&apos;re ready.</span></div>
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll as="div" delay={120}>
        <div className="chat-card spotlight-card" onMouseMove={handleSpotlightMove}>
          <div className="chat-header">
            <span className="dot"></span>
            <b style={{ fontSize: "14px" }}>AURUX Assistant</b>
            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "11.5px", color: "var(--text-dim)", marginLeft: "auto" }}>
              DEMO
            </span>
          </div>
          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div className={`msg ${m.sender}`} key={i}>{m.text}</div>
            ))}
            {typing && (
              <div className="msg bot typing">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>
          <div className="chat-suggestions">
            {chips.map((c) => (
              <button type="button" className="chip" key={c} onClick={() => handleAsk(c)}>
                {c}
              </button>
            ))}
          </div>
          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask something about AURUX..."
              autoComplete="off"
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="btn btn-gold">Send</button>
          </form>
          <p className="demo-flag" style={{ margin: "0 20px 16px" }}>
            DEMO MODE — scripted preview; a live custom GPT will replace this
          </p>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
