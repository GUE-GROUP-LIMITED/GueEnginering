"use client";

import React from "react";

export function History2020Svg({ className = "" }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" className={`milestone-svg ${className}`} aria-hidden="true">
      {/* 2020 Foundation: Code Terminal & Desk */}
      <polygon points="70,50 115,75 70,100 25,75" fill="#dcf7aa" stroke="#193824" strokeWidth="1.8" />
      <polygon points="25,75 70,100 70,116 25,91" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
      <polygon points="70,100 115,75 115,91 70,116" fill="#5d9d4a" stroke="#193824" strokeWidth="1.8" />

      {/* Terminal Screen */}
      <polygon points="50,42 90,20 90,58 50,80" fill="#0e2a1b" stroke="#193824" strokeWidth="1.8" />
      <line x1="58" y1="48" x2="82" y2="35" stroke="#f4f58c" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="58" y1="58" x2="75" y2="49" stroke="#cbf38c" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="95" cy="80" r="4" fill="#f4f58c" stroke="#193824" strokeWidth="1" />
    </svg>
  );
}

export function History2024Svg({ className = "" }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" className={`milestone-svg ${className}`} aria-hidden="true">
      {/* 2024 Group Holding Network */}
      <polygon points="70,45 118,70 70,95 22,70" fill="#cbf38c" stroke="#193824" strokeWidth="1.8" />
      <polygon points="22,70 70,95 70,112 22,87" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
      <polygon points="70,95 118,70 118,87 70,112" fill="#5d9d4a" stroke="#193824" strokeWidth="1.8" />

      {/* Group Global Sphere Node */}
      <circle cx="70" cy="55" r="18" fill="#eafcd0" stroke="#193824" strokeWidth="1.8" />
      <ellipse cx="70" cy="55" rx="18" ry="7" stroke="#193824" strokeWidth="1.2" fill="none" />
      <line x1="70" y1="37" x2="70" y2="73" stroke="#193824" strokeWidth="1.2" />

      {/* Connecting Sub-Nodes (Holding architecture) */}
      <circle cx="38" cy="45" r="5" fill="#f4f58c" stroke="#193824" strokeWidth="1.2" />
      <circle cx="102" cy="45" r="5" fill="#f4f58c" stroke="#193824" strokeWidth="1.2" />
      <line x1="70" y1="42" x2="38" y2="45" stroke="#193824" strokeWidth="1.2" strokeDasharray="2 2" />
      <line x1="70" y1="42" x2="102" y2="45" stroke="#193824" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

export function History2025Svg({ className = "" }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" className={`milestone-svg ${className}`} aria-hidden="true">
      {/* 2025 GUE Engineering Limited Incorporated Tower */}
      <polygon points="70,30 110,52 70,74 30,52" fill="#dcf7aa" stroke="#193824" strokeWidth="1.8" />
      <polygon points="30,52 70,74 70,115 30,93" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
      <polygon points="70,74 110,52 110,93 70,115" fill="#5d9d4a" stroke="#193824" strokeWidth="1.8" />

      {/* Incorporated Shield / Emblem */}
      <polygon points="70,42 90,53 70,64 50,53" fill="#0e2a1b" stroke="#193824" strokeWidth="1.5" />
      <polygon points="70,46 84,53 70,60 56,53" fill="#f4f58c" />
      {/* Tower Antenna */}
      <line x1="70" y1="30" x2="70" y2="12" stroke="#193824" strokeWidth="2" strokeLinecap="round" />
      <circle cx="70" cy="10" r="3" fill="#f4f58c" stroke="#193824" strokeWidth="1.2" />
    </svg>
  );
}
