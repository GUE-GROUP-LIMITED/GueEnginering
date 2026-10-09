"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AppIcon from "@/components/ui/AppIcon";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#history", label: "History" },
  { href: "#contact", label: "Contact" },
];

export default function LtechNav() {
  const lineRef = useRef(null);
  const pinRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Dynamic import GSAP for client-side load animation
    let ctx;
    import("gsap").then(({ gsap }) => {
      ctx = gsap.context(() => {
        if (lineRef.current) {
          const path = lineRef.current;
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            opacity: 1,
          });

          const tl = gsap.timeline({ delay: 0.2 });
          tl.to(path, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power3.inOut",
          });

          if (pinRef.current) {
            tl.fromTo(
              pinRef.current,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
              "-=0.2"
            );
          }
        }
      });
    });

    return () => ctx && ctx.revert();
  }, []);

  return (
    <header className="ltech-header">
      {/* Decorative dynamic SVG line with terminal circular pin */}
      <div className="ltech-nav-line-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="ltech-nav-line-svg"
        >
          {/* 
            Line starts from top left (x:0, y:20),
            runs along top to x:520, curves down to y:60 at x:550,
            runs horizontal to x:1260,
            and terminates with the pin dot at x:1280.
          */}
          <path
            ref={lineRef}
            d="M 20 20 H 640 Q 670 20 670 48 Q 670 64 695 64 H 1380"
            stroke="var(--color-forest-dark)"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="ltech-drawn-line"
          />
          {/* Terminal Pin at right */}
          <g ref={pinRef} className="ltech-pin-node">
            <circle cx="1388" cy="64" r="7" fill="none" stroke="var(--color-forest-dark)" strokeWidth="1.4" />
            <circle cx="1388" cy="64" r="3" fill="var(--color-forest-dark)" />
          </g>
        </svg>
      </div>

      <div className="ltech-nav-inner">
        {/* Logo matching Screenshot 1 */}
        <Link href="#top" className="ltech-logo">
          <div className="ltech-logo-icon">
            <svg viewBox="0 0 28 28" fill="none" width="24" height="24" aria-hidden="true">
              {/* Isometric chevron / cube emblem matching Ltech */}
              <polygon points="6,9 14,4 14,14 6,19" fill="var(--color-forest-dark)" />
              <polygon points="14,4 22,9 22,19 14,14" fill="var(--color-forest-dark)" opacity="0.8" />
              <polygon points="6,19 14,14 22,19 14,24" fill="var(--color-forest-dark)" opacity="0.6" />
            </svg>
          </div>
          <span className="ltech-logo-text">
            <strong>GUE</strong> <em>Engineering</em>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="ltech-nav-links" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="ltech-nav-link">
              <span className="ltech-nav-label" data-text={item.label}>
                {item.label}
              </span>
            </a>
          ))}
          <a
            href="https://www.guegroup.com"
            target="_blank"
            rel="noreferrer"
            className="ltech-nav-link ltech-nav-link--group"
          >
            <span className="ltech-nav-label" data-text="Gue Group">
              Gue Group
            </span>
            <AppIcon name="external" size={13} className="inline-icon" />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="ltech-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <AppIcon name={mobileOpen ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="ltech-mobile-drawer">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="ltech-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.guegroup.com"
            target="_blank"
            rel="noreferrer"
            className="ltech-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Gue Group ↗
          </a>
          <a
            href="#contact"
            className="ltech-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
