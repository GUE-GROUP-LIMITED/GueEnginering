"use client";

import React from "react";

export function SoftwareSpotSvg({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`spot-svg ${className}`} aria-hidden="true">
      {/* Isometric Pedestal */}
      <polygon points="60,35 95,55 60,75 25,55" fill="#dcf7aa" stroke="#193824" strokeWidth="1.5" />
      <polygon points="25,55 60,75 60,88 25,68" fill="#8ecf5f" stroke="#193824" strokeWidth="1.5" />
      <polygon points="60,75 95,55 95,68 60,88" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />
      {/* Code Window */}
      <polygon points="45,30 75,13 75,45 45,62" fill="#0e2a1b" stroke="#193824" strokeWidth="1.5" />
      <line x1="50" y1="36" x2="68" y2="26" stroke="#f4f58c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50" y1="44" x2="62" y2="37" stroke="#cbf38c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="55" y1="50" x2="70" y2="42" stroke="#cbf38c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AISpotSvg({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`spot-svg ${className}`} aria-hidden="true">
      {/* Neural Core */}
      <polygon points="60,28 88,44 60,60 32,44" fill="#cbf38c" stroke="#193824" strokeWidth="1.5" />
      <polygon points="32,44 60,60 60,76 32,60" fill="#9dd868" stroke="#193824" strokeWidth="1.5" />
      <polygon points="60,60 88,44 88,60 60,76" fill="#6ab13f" stroke="#193824" strokeWidth="1.5" />
      {/* Floating Node Connections */}
      <circle cx="60" cy="44" r="5" fill="#f4f58c" stroke="#193824" strokeWidth="1.5" />
      <circle cx="30" cy="28" r="3.5" fill="#193824" />
      <circle cx="90" cy="28" r="3.5" fill="#193824" />
      <circle cx="60" cy="94" r="3.5" fill="#193824" />
      <line x1="60" y1="44" x2="30" y2="28" stroke="#193824" strokeWidth="1.2" strokeDasharray="3 2" />
      <line x1="60" y1="44" x2="90" y2="28" stroke="#193824" strokeWidth="1.2" strokeDasharray="3 2" />
      <line x1="60" y1="76" x2="60" y2="94" stroke="#193824" strokeWidth="1.2" strokeDasharray="3 2" />
    </svg>
  );
}

export function SaasSpotSvg({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`spot-svg ${className}`} aria-hidden="true">
      {/* Stacked Containers */}
      <polygon points="60,20 85,34 60,48 35,34" fill="#dcf7aa" stroke="#193824" strokeWidth="1.5" />
      <polygon points="35,34 60,48 60,60 35,46" fill="#8ecf5f" stroke="#193824" strokeWidth="1.5" />
      <polygon points="60,48 85,34 85,46 60,60" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />

      <polygon points="60,54 95,74 60,94 25,74" fill="#cbf38c" stroke="#193824" strokeWidth="1.5" />
      <polygon points="25,74 60,94 60,104 25,84" fill="#8ecf5f" stroke="#193824" strokeWidth="1.5" />
      <polygon points="60,94 95,74 95,84 60,104" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />
      <circle cx="60" cy="74" r="3.5" fill="#f4f58c" stroke="#193824" strokeWidth="1" />
    </svg>
  );
}

export function CloudSpotSvg({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`spot-svg ${className}`} aria-hidden="true">
      {/* Server Base */}
      <polygon points="60,55 95,75 60,95 25,75" fill="#cbf38c" stroke="#193824" strokeWidth="1.5" />
      <polygon points="25,75 60,95 60,105 25,85" fill="#8ecf5f" stroke="#193824" strokeWidth="1.5" />
      <polygon points="60,95 95,75 95,85 60,105" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />
      {/* Cloud Above */}
      <path
        d="M 45 42 C 40 32, 54 24, 64 27 C 72 20, 85 24, 88 34 C 95 38, 92 48, 84 50 C 78 52, 48 52, 45 42 Z"
        fill="#eafcd0"
        stroke="#193824"
        strokeWidth="1.6"
      />
      <line x1="60" y1="52" x2="60" y2="68" stroke="#193824" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

export function TrainingSpotSvg({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`spot-svg ${className}`} aria-hidden="true">
      {/* Digital Podium & Graduation Cap */}
      <polygon points="60,40 90,56 60,72 30,56" fill="#dcf7aa" stroke="#193824" strokeWidth="1.5" />
      <polygon points="30,56 60,72 60,90 30,74" fill="#8ecf5f" stroke="#193824" strokeWidth="1.5" />
      <polygon points="60,72 90,56 90,74 60,90" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />
      {/* Stylized Mortarboard */}
      <polygon points="60,18 85,28 60,38 35,28" fill="#0e2a1b" stroke="#193824" strokeWidth="1.5" />
      <path d="M 85 28 L 88 42 L 85 46" stroke="#f4f58c" strokeWidth="1.5" />
    </svg>
  );
}

export function ConsultingSpotSvg({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`spot-svg ${className}`} aria-hidden="true">
      {/* Blueprint Grid + Compass */}
      <polygon points="60,35 96,55 60,75 24,55" fill="#cbf38c" stroke="#193824" strokeWidth="1.5" />
      <polygon points="24,55 60,75 60,86 24,66" fill="#8ecf5f" stroke="#193824" strokeWidth="1.5" />
      <polygon points="60,75 96,55 96,66 60,86" fill="#5d9d4a" stroke="#193824" strokeWidth="1.5" />
      {/* Ruler Lines */}
      <line x1="40" y1="48" x2="52" y2="41" stroke="#193824" strokeWidth="1.2" />
      <line x1="48" y1="58" x2="68" y2="47" stroke="#193824" strokeWidth="1.2" />
      {/* Compass Needle */}
      <circle cx="60" cy="55" r="14" stroke="#193824" strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
      <polygon points="60,44 64,55 60,66 56,55" fill="#f4f58c" stroke="#193824" strokeWidth="1" />
    </svg>
  );
}
