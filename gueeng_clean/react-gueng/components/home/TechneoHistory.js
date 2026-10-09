"use client";

import React from "react";
import AppIcon from "@/components/ui/AppIcon";
import {
  History2020Svg,
  History2024Svg,
  History2025Svg,
} from "@/components/illustrations/HistorySpotSvgs";

const milestones = [
  {
    year: "2020",
    company: "Code-Snippet Enterprise",
    role: "REGISTERED BUSINESS NAME · BN 3167539 · ABUJA, NIGERIA",
    description:
      "Founded in August 2020 after relocating from Makurdi to Abuja. Registered with the Corporate Affairs Commission for training in software, web development, mobile and web application development.",
    SvgComponent: History2020Svg,
  },
  {
    year: "2024",
    company: "Gue Group Limited Established",
    role: "RC 7501599 · MAY 2024",
    description:
      "Gue Group Limited incorporated as a holding company to provide structured oversight following relocation to Belgium, creating the group structure for current and future subsidiaries.",
    SvgComponent: History2024Svg,
  },
  {
    year: "2025",
    company: "GUE Engineering Limited Incorporated",
    role: "RC 8342226 · MARCH 2025",
    description:
      "Code-Snippet Enterprise formally upgraded to a private limited liability company under CAMA 2020, becoming a subsidiary of Gue Group Limited with objects covering software development, AI automation, SaaS, DevOps, and IT training.",
    SvgComponent: History2025Svg,
  },
];

export default function TechneoHistory() {
  return (
    <section id="history" className="techneo-history-section">
      <div className="techneo-container">
        <div className="techneo-history-header">
          <p className="techneo-kicker">Our History</p>
          <h2 className="techneo-serif-title">
            From Code-Snippet Enterprise to GUE Engineering Limited
          </h2>
          <p className="techneo-lead-copy">
            Five years of building, from a registered business name in Abuja to a fully
            incorporated engineering company.
          </p>
        </div>

        {/* Timeline cards in the same card/dot/line language */}
        <div className="techneo-timeline-wrapper">
          <div className="techneo-timeline-track-line" aria-hidden="true" />

          <div className="techneo-timeline-items">
            {milestones.map((item, idx) => {
              const MilestoneArt = item.SvgComponent;
              return (
                <div key={item.year} className="techneo-timeline-card-item">
                  {/* Glowing Node Dot on Timeline */}
                  <div className="techneo-timeline-node-pin">
                    <span className="techneo-timeline-node-dot" />
                    <span className="techneo-timeline-node-year">{item.year}</span>
                  </div>

                  {/* Card Content with SVG Illustration */}
                  <div className="techneo-timeline-card">
                    <div className="techneo-timeline-card-content">
                      <div className="techneo-timeline-badge">
                        <AppIcon name="calendar" size={14} />
                        <span>{item.year} Milestone</span>
                      </div>
                      <h3>{item.company}</h3>
                      <p className="techneo-timeline-role-text">{item.role}</p>
                      <p className="techneo-timeline-desc">{item.description}</p>
                    </div>

                    <div className="techneo-timeline-card-visual" aria-hidden="true">
                      <MilestoneArt />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
