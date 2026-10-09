"use client";

import React from "react";

export function ProjectSpotSvg({ type = "web", className = "" }) {
  if (type === "hotel") {
    return (
      <svg viewBox="0 0 200 130" fill="none" className={`project-spot-svg ${className}`} aria-hidden="true">
        <polygon points="100,25 155,55 100,85 45,55" fill="#dcf7aa" stroke="#193824" strokeWidth="1.8" />
        <polygon points="45,55 100,85 100,115 45,85" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
        <polygon points="100,85 155,55 155,85 100,115" fill="#5d9d4a" stroke="#193824" strokeWidth="1.8" />
        {/* Balcony / Window Rows */}
        <line x1="58" y1="68" x2="88" y2="85" stroke="#193824" strokeWidth="2.5" />
        <line x1="58" y1="78" x2="88" y2="95" stroke="#193824" strokeWidth="2.5" />
        <polygon points="112,70 142,54 142,66 112,82" fill="#0e2a1b" />
        <polygon points="112,88 142,72 142,84 112,100" fill="#0e2a1b" />
        <circle cx="100" cy="55" r="5" fill="#f4f58c" stroke="#193824" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "cyber") {
    return (
      <svg viewBox="0 0 200 130" fill="none" className={`project-spot-svg ${className}`} aria-hidden="true">
        <polygon points="100,20 150,48 100,76 50,48" fill="#cbf38c" stroke="#193824" strokeWidth="1.8" />
        <polygon points="50,48 100,76 100,110 50,82" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
        <polygon points="100,76 150,48 150,82 100,110" fill="#5d9d4a" stroke="#193824" strokeWidth="1.8" />
        {/* Shield Geometry */}
        <polygon points="100,38 126,52 100,66 74,52" fill="#0e2a1b" stroke="#193824" strokeWidth="1.5" />
        <polygon points="100,44 118,54 100,64 82,54" fill="#f4f58c" />
        <line x1="60" y1="62" x2="90" y2="78" stroke="#193824" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    );
  }

  if (type === "realestate") {
    return (
      <svg viewBox="0 0 200 130" fill="none" className={`project-spot-svg ${className}`} aria-hidden="true">
        {/* Multi-tier architectural complex */}
        <polygon points="80,30 125,55 80,80 35,55" fill="#dcf7aa" stroke="#193824" strokeWidth="1.8" />
        <polygon points="35,55 80,80 80,110 35,85" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
        <polygon points="80,80 125,55 125,85 80,110" fill="#5d9d4a" stroke="#193824" strokeWidth="1.8" />
        <polygon points="125,45 165,67 125,90 85,67" fill="#eafcd0" stroke="#193824" strokeWidth="1.5" />
        <polygon points="125,90 165,67 165,95 125,118" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />
        <circle cx="80" cy="55" r="4" fill="#f4f58c" />
      </svg>
    );
  }

  // Default web / cloud app
  return (
    <svg viewBox="0 0 200 130" fill="none" className={`project-spot-svg ${className}`} aria-hidden="true">
      <polygon points="100,25 155,55 100,85 45,55" fill="#dcf7aa" stroke="#193824" strokeWidth="1.8" />
      <polygon points="45,55 100,85 100,115 45,85" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
      <polygon points="100,85 155,55 155,85 100,115" fill="#5d9d4a" stroke="#193824" strokeWidth="1.8" />
      {/* Circuit lines */}
      <circle cx="100" cy="55" r="6" fill="#0e2a1b" stroke="#193824" strokeWidth="1.5" />
      <circle cx="100" cy="55" r="3" fill="#f4f58c" />
      <line x1="100" y1="55" x2="70" y2="40" stroke="#193824" strokeWidth="1.5" />
      <line x1="100" y1="55" x2="130" y2="40" stroke="#193824" strokeWidth="1.5" />
    </svg>
  );
}
