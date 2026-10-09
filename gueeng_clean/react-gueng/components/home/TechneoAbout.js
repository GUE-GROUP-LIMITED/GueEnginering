"use client";

import React, { useEffect, useRef, useState } from "react";
import AppIcon from "@/components/ui/AppIcon";
import AboutWorkstationSvg from "@/components/illustrations/AboutWorkstationSvg";

const corporateFacts = [
  {
    iconName: "registration",
    label: "Registration",
    value: "RC 8342226 · CAMA 2020",
    sub: "Tax ID: 2520784002292",
  },
  {
    iconName: "group",
    label: "Group Structure",
    value: "Subsidiary of Gue Group Limited",
    sub: "RC 7501599",
  },
  {
    iconName: "location",
    label: "Location",
    value: "Abuja, Federal Capital Territory",
    sub: "Nigeria",
  },
  {
    iconName: "focus",
    label: "Focus",
    value: "Software · AI Automation · DevOps",
    sub: "SaaS, Open-Source, Cloud, Training",
  },
];

const testimonials = [
  {
    quote:
      "Engineering over presentation: We focus on systems that are maintainable, testable, and operational after launch, not just attractive demos.",
    clientName: "Dennis Collis",
    clientRole: "Eloheem Suites Delivery Partner",
    rating: 5,
    stat: "99%",
  },
  {
    quote:
      "Direct accountability: Team-led delivery means technical decisions, timelines, and tradeoffs are handled with zero handoff noise.",
    clientName: "Bradley Lawlor",
    clientRole: "Technology Lead, GUE Engineering",
    rating: 5,
    stat: "99%",
  },
  {
    quote:
      "Practical modernization: We help teams modernize delivery through better architecture, automation, and cloud operations without unnecessary complexity.",
    clientName: "Stephanie Nicol",
    clientRole: "Gue Cyber Group Client",
    rating: 5,
    stat: "99%",
  },
];

export default function TechneoAbout() {
  const [yearsCount, setYearsCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let observer;
    if (counterRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const end = 5;
            const duration = 1200;
            const stepTime = Math.abs(Math.floor(duration / end));
            const timer = setInterval(() => {
              start += 1;
              setYearsCount(start);
              if (start >= end) clearInterval(timer);
            }, stepTime);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(counterRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  return (
    <section id="about" className="techneo-about-section">
      <div className="techneo-container">
        {/* ================================================================
            PART 1: SPLIT BLOCK (Heading, Copy, Stat + Workstation Card)
            ================================================================ */}
        <div className="techneo-about-split-grid">
          {/* Left Column: Heading, locked copy, stat card */}
          <div className="techneo-about-left">
            <p className="techneo-kicker">Who We Are</p>
            <h2 className="techneo-serif-title">
              Engineering-Led Technology Solutions Since 2020
            </h2>

            <div className="techneo-about-body-text">
              <p>
                <strong>GUE Engineering Limited</strong> (RC 8342226) is a privately
                incorporated Nigerian company registered under the Companies and Allied
                Matters Act 2020, and a subsidiary of{" "}
                <strong>Gue Group Limited</strong> (RC 7501599).
              </p>
              <p>
                Our objects, as set out in our Memorandum of Association, are software
                development, AI-powered automation, SaaS and open-source solutions,
                DevOps and cloud engineering, and IT training built to drive innovation,
                digital transformation, and technical excellence.
              </p>
              <p>
                We began in August 2020 as <strong>Code-Snippet Enterprise</strong> in
                Abuja, building software and delivering technical training. In March
                2025, following the establishment of Gue Group Limited as our holding
                company, we formally upgraded to a private limited liability company.
              </p>
              <p>
                Today we operate as a focused engineering team, building
                software, automating workflows with AI, and helping teams ship reliably
                on modern cloud infrastructure.
              </p>
            </div>

            {/* Stat Card + Avatar Stack (Screenshot 2 exact pattern) */}
            <div className="techneo-stat-card-row">
              <div ref={counterRef} className="techneo-stat-pill-card">
                <div className="techneo-stat-number-box">
                  <span className="techneo-stat-big-number">{yearsCount}+</span>
                  <span className="techneo-stat-big-label">Years Of Experience</span>
                </div>

                <div className="techneo-team-avatar-box">
                  <span className="techneo-team-label">We Are Awesome Team</span>
                  <div className="techneo-avatar-stack">
                    <span className="techneo-avatar-circle" title="Software Engineer">
                      <AppIcon name="user" size={14} />
                    </span>
                    <span className="techneo-avatar-circle" title="AI Architect">
                      <AppIcon name="ai" size={14} />
                    </span>
                    <span className="techneo-avatar-circle" title="Cloud Engineer">
                      <AppIcon name="cloud" size={14} />
                    </span>
                    <span className="techneo-avatar-circle techneo-avatar-circle--plus">
                      +
                    </span>
                  </div>
                </div>
              </div>

              <div className="techneo-stat-cta-wrap">
                <a href="#services" className="techneo-dark-pill-cta">
                  <span>View All Reviews</span>
                  <AppIcon name="arrow" size={15} />
                </a>
              </div>
            </div>

            {/* Corporate Registration Facts Grid */}
            <div className="techneo-facts-grid">
              {corporateFacts.map((fact) => (
                <div key={fact.label} className="techneo-fact-item">
                  <div className="techneo-fact-icon-wrap">
                    <AppIcon name={fact.iconName} size={18} />
                  </div>
                  <div className="techneo-fact-content">
                    <span className="techneo-fact-label">{fact.label}</span>
                    <strong className="techneo-fact-value">{fact.value}</strong>
                    <span className="techneo-fact-sub">{fact.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Workstation SVG Illustration Card */}
          <div className="techneo-about-right">
            <div className="techneo-workstation-card">
              <AboutWorkstationSvg />
              <div className="techneo-workstation-overlay-badge">
                <AppIcon name="sparkle" size={16} />
                <span>GUE Advanced Engineering Lab</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================
            PART 2: 3-COLUMN ROW OF TESTIMONIAL CARDS (Screenshot 2 exact pattern)
            ================================================================ */}
        <div className="techneo-testimonials-block">
          <div className="techneo-testimonials-grid">
            {testimonials.map((item, idx) => (
              <div key={idx} className="techneo-testimonial-card">
                <div className="techneo-testimonial-top">
                  <span className="techneo-quote-badge">
                    <AppIcon name="quote" size={16} />
                  </span>
                  <div className="techneo-stars-wrap" aria-label="5 out of 5 stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <AppIcon key={i} name="star" size={14} className="techneo-star-filled" />
                    ))}
                    <span className="techneo-star-count">({item.rating})</span>
                  </div>
                </div>

                <p className="techneo-testimonial-quote">"{item.quote}"</p>

                <div className="techneo-testimonial-author">
                  <div className="techneo-author-avatar">
                    <AppIcon name="user" size={18} />
                  </div>
                  <div className="techneo-author-meta">
                    <strong>{item.clientName}</strong>
                    <span>{item.clientRole}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
