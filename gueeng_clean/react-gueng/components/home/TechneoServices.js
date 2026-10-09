"use client";

import React, { useState } from "react";
import AppIcon from "@/components/ui/AppIcon";
import {
  SoftwareSpotSvg,
  AISpotSvg,
  SaasSpotSvg,
  CloudSpotSvg,
  TrainingSpotSvg,
  ConsultingSpotSvg,
} from "@/components/illustrations/ServiceSpotSvgs";

const categories = [
  {
    id: "software",
    title: "Software Development",
    iconName: "software",
    spotSvg: SoftwareSpotSvg,
    description:
      "Custom web applications, internal tools, and APIs built with modern frameworks and a focus on maintainability.",
    points: [
      "Modern Web Applications (Next.js, React, Node.js)",
      "Enterprise Backend APIs & Database Architecture",
      "Internal Business Tooling & Admin Portals",
      "High Code Quality with Rigorous Testing",
    ],
  },
  {
    id: "ai",
    title: "AI-Powered Automation",
    iconName: "ai",
    spotSvg: AISpotSvg,
    description:
      "Workflow automation, AI agent integrations, and process automation that reduce manual effort for growing teams.",
    points: [
      "Custom AI Agents & Workflow Orchestration",
      "Automated Document Processing & Extraction",
      "Customer Service & Chatbot Integrations",
      "Data Pipeline & System Automation",
    ],
  },
  {
    id: "saas",
    title: "SaaS & Open-Source Solutions",
    iconName: "saas",
    spotSvg: SaasSpotSvg,
    description:
      "Design and build of SaaS products and contribution to open-source tooling from architecture through to launch.",
    points: [
      "Multi-Tenant SaaS Architecture Design",
      "Subscription Billing & Payment Gateways",
      "Open-Source Tooling & Library Development",
      "End-to-End Product Roadmap Delivery",
    ],
  },
  {
    id: "cloud",
    title: "DevOps & Cloud Engineering",
    iconName: "cloud",
    spotSvg: CloudSpotSvg,
    description:
      "CI/CD pipelines, cloud infrastructure setup, and deployment automation for teams that need to ship reliably.",
    points: [
      "Cloud Infrastructure Setup (AWS, Azure, Vercel)",
      "Automated CI/CD Deployment Pipelines",
      "Docker Containerization & Orchestration",
      "24/7 Monitoring, Uptime & Disaster Recovery",
    ],
  },
  {
    id: "training",
    title: "IT Training",
    iconName: "training",
    spotSvg: TrainingSpotSvg,
    description:
      "Practical, hands-on technical training for developers and teams across software development, tooling, and best practices.",
    points: [
      "Hands-On Full-Stack Development Bootcamps",
      "Cloud & DevOps Engineering Workshops",
      "AI & Automation Tooling Mastery",
      "Corporate Team Upskilling & Technical Mentorship",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    iconName: "consulting",
    spotSvg: ConsultingSpotSvg,
    description:
      "Architecture review, technology selection, and hands-on guidance for teams navigating technical decisions.",
    points: [
      "System Architecture & Scalability Audits",
      "Technology Stack & Vendor Selection",
      "Security Best Practices & CAMA Compliance",
      "Delivery Recovery & Codebase Modernization",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Scope the Problem",
    description:
      "We start by understanding what you actually need, not a generic template solution.",
    iconName: "scope",
  },
  {
    step: "02",
    title: "Design & Build",
    description:
      "Architecture decisions made for your scale, not someone else's. Code built to be maintained.",
    iconName: "design",
    isActive: true,
  },
  {
    step: "03",
    title: "Test & Refine",
    description:
      "Real testing and real feedback loops before anything reaches production.",
    iconName: "test",
  },
  {
    step: "04",
    title: "Ship & Support",
    description:
      "Deployment, documentation, and ongoing support. Delivery does not stop at handover.",
    iconName: "ship",
  },
];

export default function TechneoServices() {
  const [activeCategoryId, setActiveCategoryId] = useState("software");
  const activeCategory =
    categories.find((c) => c.id === activeCategoryId) || categories[0];
  const ActiveSpotComponent = activeCategory.spotSvg;

  return (
    <section id="services" className="techneo-services-section">
      <div className="techneo-container">
        {/* ================================================================
            PART 1: INDUSTRY / SERVICE CATEGORY PILL SELECTOR (Screenshot 2)
            ================================================================ */}
        <div className="techneo-services-header">
          <div className="techneo-services-header-text">
            <h2 className="techneo-serif-title">
              Built for Business. Across All Industries.
            </h2>
            <p className="techneo-lead-copy">
              We combine innovation with reliability to deliver IT solutions that scale
              with your business. Practical, delivery-focused technology services from a
              single automation script to a full production platform.
            </p>
          </div>
        </div>

        {/* Pill Category Tabs (Screenshot 2 exact language) */}
        <div className="techneo-pills-row" role="tablist" aria-label="Service categories">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`techneo-pill-btn ${isActive ? "techneo-pill-btn--active" : ""}`}
                onClick={() => setActiveCategoryId(cat.id)}
              >
                <AppIcon name={cat.iconName} size={16} className="techneo-pill-icon" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Card */}
        <div className="techneo-active-service-card">
          <div className="techneo-active-service-copy">
            <div className="techneo-active-service-badge">
              <AppIcon name={activeCategory.iconName} size={15} />
              <span>{activeCategory.title}</span>
            </div>
            <h3>{activeCategory.title}</h3>
            <p>{activeCategory.description}</p>
            <ul className="techneo-active-service-points">
              {activeCategory.points.map((pt) => (
                <li key={pt}>
                  <AppIcon name="check" size={15} className="techneo-check-icon" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="techneo-active-service-cta">
              <a href="#contact" className="techneo-dark-pill-cta">
                <span>Start a Project</span>
                <AppIcon name="arrow" size={15} />
              </a>
            </div>
          </div>
          <div className="techneo-active-service-visual" aria-hidden="true">
            <ActiveSpotComponent className="techneo-service-spot-art" />
          </div>
        </div>

        {/* ================================================================
            PART 2: STEP BY STEP STEPPER (Screenshot 2 exact language)
            ================================================================ */}
        <div className="techneo-stepper-block">
          <div className="techneo-stepper-header">
            <div>
              <p className="techneo-kicker">How We Work</p>
              <h3 className="techneo-serif-title techneo-serif-title--sm">
                Simplifying IT, Step by Step
              </h3>
            </div>
            <a href="#contact" className="techneo-dark-pill-cta">
              <span>Start Your Project</span>
              <AppIcon name="arrow" size={15} />
            </a>
          </div>

          {/* Connected Stepper Line & Nodes */}
          <div className="techneo-stepper-nodes-row">
            <div className="techneo-stepper-line" aria-hidden="true" />
            {processSteps.map((step) => (
              <div
                key={step.step}
                className={`techneo-stepper-node ${step.isActive ? "techneo-stepper-node--active" : ""}`}
              >
                <div className="techneo-stepper-node-circle">
                  <span>{step.step}</span>
                  {step.isActive && <div className="techneo-node-indicator" />}
                </div>
              </div>
            ))}
          </div>

          {/* Stepper Cards Row */}
          <div className="techneo-stepper-cards-grid">
            {processSteps.map((step) => {
              const isDarkActive = step.isActive;
              return (
                <div
                  key={step.step}
                  className={`techneo-step-card ${isDarkActive ? "techneo-step-card--active-dark" : "techneo-step-card--light"}`}
                >
                  <div className="techneo-step-card-head">
                    <span className="techneo-step-number">{step.step}</span>
                    <AppIcon name={step.iconName} size={18} />
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
