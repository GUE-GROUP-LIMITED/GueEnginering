"use client";

import React from "react";
import AppIcon from "@/components/ui/AppIcon";
import ContactForm from "@/components/contact/ContactForm";

const groupSubsidiaries = [
  { href: "https://www.guegroup.com", label: "Gue Group Limited" },
  { href: "https://www.guecyber.ng", label: "Gue Cyber Nigeria" },
  { href: "https://www.guecyber.com", label: "Gue Cyber Belgium" },
  { href: "https://www.guemoni.com", label: "Gue Moni Limited" },
];

export default function TechneoContactFooter() {
  return (
    <>
      {/* ================================================================
          PART 1: GROUP SUBSIDIARY CARD
          ================================================================ */}
      <section className="techneo-group-section">
        <div className="techneo-container">
          <div className="techneo-group-card">
            <div className="techneo-group-icon-wrap" aria-hidden="true">
              <AppIcon name="group" size={32} />
            </div>
            <div className="techneo-group-body">
              <p className="techneo-kicker">Part of the Group</p>
              <h3 className="techneo-serif-title techneo-serif-title--sm">
                A Subsidiary of Gue Group Limited
              </h3>
              <p className="techneo-group-desc">
                GUE Engineering Limited operates under Gue Group Limited (RC 7501599),
                alongside Gue Cyber Limited (RC 8341363) in Nigeria, Gue Cyber (KBO
                1037.163.392) in Belgium, and Gue Moni Limited (RC 9853276) for financial
                inclusion services.
              </p>
              <div className="techneo-group-links-row">
                {groupSubsidiaries.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    target="_blank"
                    rel="noreferrer"
                    className="techneo-group-pill-link"
                  >
                    <span>{sub.label}</span>
                    <AppIcon name="external" size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PART 2: CONTACT & INTAKE SECTION
          ================================================================ */}
      <section id="contact" className="techneo-contact-section">
        <div className="techneo-container">
          <div className="techneo-contact-grid">
            {/* Left: Contact Info & Copy */}
            <div className="techneo-contact-left">
              <p className="techneo-kicker">Get in Touch</p>
              <h2 className="techneo-serif-title">Have a Project in Mind?</h2>
              <p className="techneo-lead-copy">
                Tell us what you are building or what is slowing your team down. We will
                tell you honestly whether we are the right engineering partner for your scope.
              </p>

              <div className="techneo-contact-meta-cards">
                <a
                  href="mailto:hello@gueengineering.com"
                  className="techneo-contact-meta-item"
                >
                  <div className="techneo-contact-meta-icon" aria-hidden="true">
                    <AppIcon name="mail" size={20} />
                  </div>
                  <div className="techneo-contact-meta-content">
                    <span className="techneo-contact-meta-label">Direct Email</span>
                    <span className="techneo-contact-meta-val">
                      hello@gueengineering.com
                    </span>
                  </div>
                  <div className="techneo-contact-meta-arrow" aria-hidden="true">
                    <AppIcon name="arrowRight" size={16} />
                  </div>
                </a>

                <a
                  href="tel:+2349041157068"
                  className="techneo-contact-meta-item"
                >
                  <div className="techneo-contact-meta-icon" aria-hidden="true">
                    <AppIcon name="profile" size={20} />
                  </div>
                  <div className="techneo-contact-meta-content">
                    <span className="techneo-contact-meta-label">Phone & WhatsApp</span>
                    <span className="techneo-contact-meta-val">
                      +234 904 115 7068
                    </span>
                  </div>
                  <div className="techneo-contact-meta-arrow" aria-hidden="true">
                    <AppIcon name="arrowRight" size={16} />
                  </div>
                </a>

                <div className="techneo-contact-meta-item">
                  <div className="techneo-contact-meta-icon" aria-hidden="true">
                    <AppIcon name="location" size={20} />
                  </div>
                  <div className="techneo-contact-meta-content">
                    <span className="techneo-contact-meta-label">Headquarters</span>
                    <span className="techneo-contact-meta-val">
                      Abuja, Federal Capital Territory, Nigeria
                    </span>
                  </div>
                </div>

                <div className="techneo-contact-sla-badge">
                  <AppIcon name="clock" size={16} />
                  <span>Guaranteed Technical Response within 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form (Redesigned) */}
            <div className="techneo-contact-right">
              <div className="techneo-contact-form-container">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PART 3: FOOTER (Unified Palette & Company Logo)
          ================================================================ */}
      <footer className="techneo-footer">
        <div className="techneo-container">
          <div className="techneo-footer-top-grid">
            <div className="techneo-footer-brand-col">
              <div className="techneo-footer-brand">
                <div className="techneo-footer-logo-mark" aria-hidden="true">
                  <img
                    src="/brand/logo.png"
                    alt="GUE Engineering logo"
                    className="techneo-footer-logo-img"
                  />
                </div>
                <strong>GUE Engineering</strong>
              </div>
              <p className="techneo-footer-tagline">
                Software · AI Automation · DevOps & Cloud Engineering · IT Training · Nigeria
              </p>
            </div>

            <div>
              <p className="techneo-footer-heading">Company</p>
              <div className="techneo-footer-links">
                <a href="#top">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#history">History</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div>
              <p className="techneo-footer-heading">Gue Group</p>
              <div className="techneo-footer-links">
                <a href="https://www.guegroup.com" target="_blank" rel="noreferrer">
                  Gue Group Limited
                </a>
                <a href="https://www.guecyber.ng" target="_blank" rel="noreferrer">
                  Gue Cyber Nigeria
                </a>
                <a href="https://www.guecyber.com" target="_blank" rel="noreferrer">
                  Gue Cyber Belgium
                </a>
                <a href="https://www.guemoni.com" target="_blank" rel="noreferrer">
                  Gue Moni Limited
                </a>
              </div>
            </div>

            <div>
              <p className="techneo-footer-heading">Get in Touch</p>
              <div className="techneo-footer-links">
                <a href="mailto:hello@gueengineering.com">hello@gueengineering.com</a>
                <a href="tel:+2349041157068">+234 904 115 7068</a>
                <a href="#contact">Start a Project</a>
              </div>
            </div>
          </div>

          <div className="techneo-footer-bottom">
            <p>
              © 2026 GUE Engineering Limited (RC 8342226) · Subsidiary of Gue Group
              Limited (RC 7501599) · Abuja, Nigeria
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
