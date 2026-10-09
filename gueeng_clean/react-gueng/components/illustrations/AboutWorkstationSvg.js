"use client";

import React from "react";

export default function AboutWorkstationSvg({ className = "" }) {
  return (
    <svg
      viewBox="0 0 680 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`about-workstation-svg ${className}`}
      aria-label="Isometric Engineering Command Center & Workstation Illustration"
      role="img"
    >
      <defs>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4f58c" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#cbf38c" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="portalWindow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a2de72" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#5d9d4a" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Outer Pod / Curved Chamber Frame */}
      <path
        d="M 50 220 C 50 100, 150 40, 340 40 C 530 40, 630 100, 630 220 C 630 340, 530 400, 340 400 C 150 400, 50 340, 50 220 Z"
        fill="#0e2a1b"
        stroke="#193824"
        strokeWidth="4"
      />
      <path
        d="M 75 220 C 75 120, 165 65, 340 65 C 515 65, 605 120, 605 220 C 605 320, 515 375, 340 375 C 165 375, 75 320, 75 220 Z"
        fill="url(#portalWindow)"
        stroke="#193824"
        strokeWidth="2"
      />

      {/* Cybernetic Grid Floor */}
      <g stroke="#193824" strokeWidth="1.2" opacity="0.6">
        <line x1="140" y1="330" x2="540" y2="330" />
        <line x1="180" y1="300" x2="500" y2="300" />
        <line x1="220" y1="270" x2="460" y2="270" />
        <line x1="260" y1="360" x2="300" y2="270" />
        <line x1="340" y1="360" x2="340" y2="270" />
        <line x1="420" y1="360" x2="380" y2="270" />
      </g>

      {/* Server Rack Tower (Left background) */}
      <g id="workstation-server-rack">
        {/* Top */}
        <polygon points="170,150 220,125 250,140 200,165" fill="#dcf7aa" stroke="#193824" strokeWidth="2" />
        {/* Left Face */}
        <polygon points="170,150 200,165 200,285 170,270" fill="#8ecf5f" stroke="#193824" strokeWidth="2" />
        {/* Right Face */}
        <polygon points="200,165 250,140 250,260 200,285" fill="#5d9d4a" stroke="#193824" strokeWidth="2" />
        {/* Rack Slots */}
        <line x1="176" y1="180" x2="194" y2="189" stroke="#193824" strokeWidth="2" />
        <line x1="176" y1="200" x2="194" y2="209" stroke="#193824" strokeWidth="2" />
        <line x1="176" y1="220" x2="194" y2="229" stroke="#193824" strokeWidth="2" />
        <line x1="176" y1="240" x2="194" y2="249" stroke="#193824" strokeWidth="2" />
        {/* LED Blinking Indicators */}
        <circle cx="178" cy="172" r="2" fill="#f4f58c" />
        <circle cx="186" cy="176" r="2" fill="#f4f58c" />
        <circle cx="178" cy="192" r="2" fill="#f4f58c" />
        <circle cx="178" cy="212" r="2" fill="#f4f58c" />
      </g>

      {/* Futuristic Console Desk (Isometric) */}
      <g id="workstation-desk">
        {/* Desk Surface (Top) */}
        <polygon
          points="250,260 410,180 510,230 350,310"
          fill="#cbf38c"
          stroke="#193824"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Front Edge */}
        <polygon
          points="250,260 350,310 350,325 250,275"
          fill="#8ecf5f"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Right Edge */}
        <polygon
          points="350,310 510,230 510,245 350,325"
          fill="#5d9d4a"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Desk Pedestal Pillars */}
        <polygon points="280,290 300,300 300,345 280,335" fill="#193824" />
        <polygon points="460,250 480,260 480,305 460,295" fill="#193824" />
      </g>

      {/* Holographic Curved Displays & Code Screens */}
      <g id="workstation-screens">
        {/* Center Main Screen */}
        <polygon
          points="320,150 440,110 440,195 320,235"
          fill="url(#screenGlow)"
          stroke="#193824"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Screen Stand */}
        <line x1="380" y1="215" x2="380" y2="245" stroke="#193824" strokeWidth="4" />
        <ellipse cx="380" cy="245" rx="14" ry="7" fill="#193824" />

        {/* Code / Flow Lines on Main Screen */}
        <line x1="335" y1="165" x2="415" y2="138" stroke="#193824" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="335" y1="180" x2="395" y2="160" stroke="#193824" strokeWidth="2" strokeLinecap="round" />
        <line x1="350" y1="195" x2="425" y2="170" stroke="#193824" strokeWidth="2" strokeLinecap="round" />
        <line x1="335" y1="210" x2="385" y2="193" stroke="#193824" strokeWidth="2" strokeLinecap="round" />

        {/* Right Angled Aux Display */}
        <polygon
          points="455,135 530,172 530,235 455,198"
          fill="url(#screenGlow)"
          stroke="#193824"
          strokeWidth="2"
        />
        <line x1="470" y1="162" x2="515" y2="184" stroke="#193824" strokeWidth="1.8" />
        <line x1="470" y1="178" x2="505" y2="195" stroke="#193824" strokeWidth="1.8" />
        <circle cx="492" cy="212" r="8" fill="#f4f58c" stroke="#193824" strokeWidth="1.5" />
      </g>

      {/* Engineer Silhouette at Workstation */}
      <g id="workstation-engineer">
        {/* Ergonomic Tech Chair Backrest */}
        <path
          d="M 285 220 Q 305 210 325 220 L 325 295 L 285 295 Z"
          fill="#0e2a1b"
          stroke="#193824"
          strokeWidth="2"
        />
        {/* Head */}
        <circle cx="310" cy="190" r="14" fill="#0e2a1b" stroke="#193824" strokeWidth="2" />
        {/* Modern Hair Outline */}
        <path d="M 302 184 Q 312 174 324 186" stroke="#f4f58c" strokeWidth="2.5" fill="none" />
        {/* Torso & Arms reaching for keyboard/holoscreen */}
        <path
          d="M 296 205 L 326 205 L 340 250 L 300 250 Z"
          fill="#193824"
        />
        <path
          d="M 326 215 L 360 240 L 375 235"
          stroke="#0e2a1b"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Foliage / Plant Module (Biophilic tech element) */}
      <g id="workstation-plant">
        <polygon points="120,290 145,278 160,292 135,304" fill="#8ecf5f" stroke="#193824" strokeWidth="1.5" />
        <polygon points="120,290 135,304 135,324 120,310" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />
        <polygon points="135,304 160,292 160,312 135,324" fill="#3b722b" stroke="#193824" strokeWidth="1.5" />
        {/* Plant Leaves */}
        <path d="M 140 285 Q 130 255 145 250 Q 148 270 140 285 Z" fill="#cbf38c" stroke="#193824" strokeWidth="1.5" />
        <path d="M 145 285 Q 165 260 155 255 Q 148 270 145 285 Z" fill="#dcf7aa" stroke="#193824" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
