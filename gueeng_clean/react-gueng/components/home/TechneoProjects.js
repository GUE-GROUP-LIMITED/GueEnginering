"use client";

import React from "react";
import AppIcon from "@/components/ui/AppIcon";
import { ProjectSpotSvg } from "@/components/illustrations/ProjectSpotSvgs";

const featuredProjects = [
  {
    title: "eloheemsuites.com.ng",
    subtitle: "Hospitality Web Platform",
    description:
      "Hospitality website delivery for Eloheem Suites (Nigeria domain) with booking workflows.",
    href: "https://eloheemsuites.com.ng",
    category: "Client Delivery",
    date: "Production Live",
    spotType: "hotel",
  },
  {
    title: "gueinsight.com",
    subtitle: "Threat Intelligence Platform",
    description:
      "Subscription platform for threat intelligence, security awareness, scoring, and automated reporting.",
    href: "https://guecyber.ng",
    category: "Gue Cyber",
    date: "Enterprise Platform",
    spotType: "cyber",
  },
  {
    title: "brainsestate.com",
    subtitle: "Real Estate Portal",
    description:
      "Modern real estate platform website focused on digital property listings, speed, and visibility.",
    href: "https://brainsestate.com",
    category: "Client Delivery",
    date: "Production Live",
    spotType: "realestate",
  },
  {
    title: "youthtransformation.org",
    subtitle: "Impact & Outreach Portal",
    description:
      "Organization website supporting outreach and programme visibility across Nigeria.",
    href: "https://youthtransformation.org",
    category: "Client Delivery",
    date: "Production Live",
    spotType: "web",
  },
  {
    title: "guemoni.com",
    subtitle: "Financial Inclusion Tech",
    description:
      "Internal Gue Group technology for financial inclusion, agency banking, and service operations.",
    href: "https://guemoni.com",
    category: "Gue Group",
    date: "Fintech Platform",
    spotType: "fintech",
  },
];

export default function TechneoProjects() {
  return (
    <section className="techneo-projects-section">
      <div className="techneo-container">
        <div className="techneo-projects-top-bar">
          <div>
            <p className="techneo-kicker">What We Build</p>
            <h2 className="techneo-serif-title techneo-serif-title--sm">
              Latest in IT and Innovation
            </h2>
            <p className="techneo-lead-copy">
              A sample of client deliveries, cloud platforms, and internal Gue Group websites.
            </p>
          </div>
          <a href="#contact" className="techneo-dark-pill-cta">
            <span>Read All Projects</span>
            <AppIcon name="arrow" size={15} />
          </a>
        </div>

        {/* Horizontal Scroll / Grid of Showcase Cards (Screenshot 2 pattern) */}
        <div className="techneo-projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.title} className="techneo-project-card">
              <div className="techneo-project-thumbnail" aria-hidden="true">
                <ProjectSpotSvg type={project.spotType} />
                <span className="techneo-project-tag">{project.category}</span>
              </div>

              <div className="techneo-project-meta-row">
                <span className="techneo-meta-item">
                  <AppIcon name="user" size={14} />
                  <span>GUE Engineering</span>
                </span>
                <span className="techneo-meta-item">
                  <AppIcon name="calendar" size={14} />
                  <span>{project.date}</span>
                </span>
              </div>

              <h3 className="techneo-project-title">
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>

              <p className="techneo-project-desc">{project.description}</p>

              <div className="techneo-project-card-footer">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="techneo-project-link"
                >
                  <span>Visit Platform</span>
                  <AppIcon name="external" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
