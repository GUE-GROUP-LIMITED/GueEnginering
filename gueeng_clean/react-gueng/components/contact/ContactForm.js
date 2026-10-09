"use client";

import { useState } from "react";
import AppIcon from "@/components/ui/AppIcon";

const initialState = {
  state: "idle",
  message: "",
};

export default function ContactForm() {
  const [result, setResult] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      setIsSubmitting(true);
      setResult(initialState);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setResult({
          state: "error",
          message: data.error || "Unable to submit inquiry right now.",
        });
        return;
      }

      form.reset();
      setResult({
        state: "success",
        message: data.message || "Inquiry submitted successfully. Our team will contact you within 24 hours.",
      });
    } catch {
      setResult({
        state: "error",
        message: "Unable to submit inquiry right now. Please try again shortly or email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="techneo-contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field for bot protection */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="techneo-form-honeypot"
        aria-hidden="true"
      />

      {/* Form Card Header */}
      <div className="techneo-form-card-header">
        <div className="techneo-form-badge">
          <span className="techneo-pulse-dot" aria-hidden="true" />
          <span>Direct Engineering Intake</span>
        </div>
        <h3 className="techneo-form-card-title">Start Your Project Brief</h3>
        <p className="techneo-form-card-subtitle">
          Direct transmission to our engineering leads. Response guaranteed within 24 hours.
        </p>
      </div>

      <div className="techneo-form-fields-grid">
        <div className="techneo-field-group">
          <label htmlFor="name" className="techneo-field-label">
            Full Name <span className="techneo-req-mark">*</span>
          </label>
          <div className="techneo-input-wrap">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. Alex Adeyemi"
              required
              minLength={2}
              className="techneo-text-input"
            />
          </div>
        </div>

        <div className="techneo-field-group">
          <label htmlFor="email" className="techneo-field-label">
            Email Address <span className="techneo-req-mark">*</span>
          </label>
          <div className="techneo-input-wrap">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="alex@company.com"
              required
              className="techneo-text-input"
            />
          </div>
        </div>

        <div className="techneo-field-group">
          <label htmlFor="phone" className="techneo-field-label">
            Phone / WhatsApp
          </label>
          <div className="techneo-input-wrap">
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+234 (0) 904 115 7068"
              className="techneo-text-input"
            />
          </div>
        </div>

        <div className="techneo-field-group">
          <label htmlFor="service" className="techneo-field-label">
            Primary Engagement <span className="techneo-req-mark">*</span>
          </label>
          <div className="techneo-select-wrap">
            <select
              id="service"
              name="service"
              defaultValue="Software Development"
              required
              className="techneo-select-input"
            >
              <option value="Software Development">Software Development</option>
              <option value="AI Automation">AI Automation & Machine Learning</option>
              <option value="SaaS & Open-Source">SaaS & Open-Source Engineering</option>
              <option value="DevOps & Cloud Engineering">DevOps & Cloud Infrastructure</option>
              <option value="IT Training">IT Training & Talent Enablement</option>
              <option value="Technical Consulting">Technical Advisory & Consulting</option>
            </select>
            <div className="techneo-select-chevron" aria-hidden="true">
              <AppIcon name="chevronDown" size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="techneo-field-group techneo-field-group--full">
        <label htmlFor="message" className="techneo-field-label">
          Project Brief & Scope <span className="techneo-req-mark">*</span>
        </label>
        <div className="techneo-textarea-wrap">
          <textarea
            id="message"
            name="message"
            rows={5}
            minLength={20}
            maxLength={3000}
            placeholder="Outline the technical problem, business objectives, existing architecture, and target timeline..."
            required
            className="techneo-textarea-input"
          />
        </div>
      </div>

      <div className="techneo-form-actions">
        <button
          type="submit"
          className="techneo-form-submit-btn"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Transmitting..." : "Send Project Inquiry"}</span>
          <AppIcon
            name={isSubmitting ? "cog" : "arrowRight"}
            size={18}
            className={`techneo-btn-icon ${isSubmitting ? "spinning" : ""}`}
          />
        </button>

        <div className="techneo-form-security-note">
          <AppIcon name="lock" size={14} />
          <span>Encrypted transmission · Direct engineering review</span>
        </div>
      </div>

      {result.message ? (
        <div
          className={`techneo-form-status-banner techneo-form-status--${result.state}`}
          role={result.state === "error" ? "alert" : "status"}
        >
          <AppIcon
            name={result.state === "success" ? "check" : "close"}
            size={18}
            className="techneo-status-icon"
          />
          <span>{result.message}</span>
        </div>
      ) : null}

      <p className="techneo-form-footer-note">
        For immediate high-priority escalation, contact{" "}
        <a href="mailto:hello@gueengineering.com">hello@gueengineering.com</a> or{" "}
        <a href="tel:+2349041157068">+234 904 115 7068</a>.
      </p>
    </form>
  );
}
