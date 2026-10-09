"use client";

import React from "react";

export default function HeroIsometricScene({ className = "" }) {
  return (
    <svg
      viewBox="0 0 760 760"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hero-isometric-svg ${className}`}
      aria-label="Isometric AI and Cloud Technology Tower Illustration"
      role="img"
    >
      <defs>
        {/* Soft shadow gradients */}
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e3fed1" />
          <stop offset="100%" stopColor="#c5efa0" />
        </linearGradient>

        <linearGradient id="domeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(235, 255, 215, 0.65)" />
          <stop offset="100%" stopColor="rgba(195, 235, 160, 0.15)" />
        </linearGradient>

        <linearGradient id="glassReflection" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.75)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0)" />
        </linearGradient>
      </defs>

      {/* ====================================================================
          CONNECTING WIRES & CONDUITS
          ==================================================================== */}
      <g id="wires" stroke="#193824" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Wire from satellite building to cloud */}
        <path id="wire-satellite-cloud" d="M380 500 V440 H405 V370" />
        {/* Wire from cloud to central tower */}
        <path id="wire-cloud-tower" d="M420 370 H445 V480 H480" />
        {/* Routing wire along ground */}
        <path id="wire-ground" d="M330 560 H350 V600 H470 V550 H510" />
        {/* Branch wire */}
        <path id="wire-branch" d="M410 440 V490 H460" />
      </g>

      {/* ====================================================================
          FLOATING CLOUD (Upper Left)
          ==================================================================== */}
      <g id="cloud" className="hero-cloud-group">
        {/* Cloud shadow */}
        <ellipse cx="390" cy="460" rx="45" ry="12" fill="rgba(25, 56, 36, 0.08)" />

        {/* Cloud body */}
        <path
          d="M 375 320 
             C 365 300, 390 280, 415 285 
             C 430 265, 465 268, 480 290 
             C 505 292, 518 318, 508 340 
             C 520 355, 510 380, 490 385 
             C 475 390, 380 390, 365 375 
             C 345 360, 355 330, 375 320 Z"
          fill="url(#cloudGrad)"
          stroke="#193824"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Cylinder gauge on cloud */}
        <g id="cloud-gauge">
          <ellipse cx="438" cy="336" rx="22" ry="32" fill="#8ecf5f" stroke="#193824" strokeWidth="2" />
          <ellipse cx="438" cy="336" rx="14" ry="20" fill="#cbf38c" stroke="#193824" strokeWidth="1.6" />
          <path d="M 438 316 L 438 356" stroke="#193824" strokeWidth="1.8" />
          <circle cx="438" cy="336" r="3.5" fill="#193824" />
          <rect x="424" y="340" width="16" height="18" rx="4" fill="#a2de72" stroke="#193824" strokeWidth="1.8" transform="rotate(-25 432 349)" />
        </g>
      </g>

      {/* ====================================================================
          SATELLITE SUBSTATION / TRANSFORMER BUILDING (Bottom Left)
          ==================================================================== */}
      <g id="satellite" className="hero-satellite-group">
        {/* Base shadow */}
        <polygon points="320,580 405,530 435,550 350,600" fill="rgba(25, 56, 36, 0.12)" />

        {/* Building Top Face */}
        <polygon
          points="350,470 410,435 410,435 350,470"
          fill="#dcf7aa"
        />
        <polygon
          points="350,470 405,438 375,420 320,452"
          fill="#dcf7aa"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Solar / Vent Grid on Satellite Roof */}
        <polygon
          points="355,455 385,438 370,430 340,447"
          fill="#193824"
        />
        <polygon
          points="353,452 380,437 368,430 341,445"
          fill="#5d9d4a"
          stroke="#193824"
          strokeWidth="1.2"
        />

        {/* Building Left Face */}
        <polygon
          points="320,452 350,470 350,560 320,542"
          fill="#9dd868"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Building Right Face */}
        <polygon
          points="350,470 405,438 405,528 350,560"
          fill="#78bd4a"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Door and Access Slot */}
        <polygon
          points="328,500 344,510 344,550 328,540"
          fill="#193824"
        />
        <polygon
          points="331,506 341,512 341,546 331,540"
          fill="#478129"
        />

        {/* Cooling Vent Lines on Right Face */}
        <line x1="365" y1="510" x2="365" y2="538" stroke="#193824" strokeWidth="2" strokeLinecap="round" />
        <line x1="375" y1="504" x2="375" y2="532" stroke="#193824" strokeWidth="2" strokeLinecap="round" />
        <line x1="385" y1="498" x2="385" y2="526" stroke="#193824" strokeWidth="2" strokeLinecap="round" />
        <line x1="395" y1="492" x2="395" y2="520" stroke="#193824" strokeWidth="2" strokeLinecap="round" />

        {/* LED Indicator Dots */}
        <circle cx="370" cy="466" r="2.5" fill="#f4f58c" stroke="#193824" strokeWidth="1" />
        <circle cx="380" cy="460" r="2.5" fill="#f4f58c" stroke="#193824" strokeWidth="1" />
      </g>

      {/* ====================================================================
          CENTRAL TOWER FOUNDATION & GROUND LEVEL (Floor 0)
          ==================================================================== */}
      <g id="tower-base" className="hero-tower-floor">
        {/* Main Base Block */}
        {/* Top Face */}
        <polygon
          points="540,580 670,505 570,447 440,522"
          fill="#cbf38c"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Left Face */}
        <polygon
          points="440,522 540,580 540,660 440,602"
          fill="#8ecf5f"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Right Face */}
        <polygon
          points="540,580 670,505 670,585 540,660"
          fill="#6ab13f"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Large Geometric Block Inset (Front Face) */}
        <polygon
          points="560,590 640,544 640,624 560,670"
          fill="#193824"
          opacity="0.9"
        />
        <polygon
          points="570,600 630,565 630,618 570,653"
          fill="#8ecf5f"
          stroke="#193824"
          strokeWidth="1.8"
        />
        <polygon
          points="585,615 615,598 615,626 585,643"
          fill="#dcf7aa"
          stroke="#193824"
          strokeWidth="1.8"
        />

        {/* Small Terminal Module on right base */}
        <polygon points="630,520 675,494 675,520 630,546" fill="#193824" stroke="#193824" strokeWidth="1.6" />
        <rect x="640" y="524" width="22" height="6" rx="2" fill="#cbf38c" />
      </g>

      {/* ====================================================================
          TOWER LEVEL 1: SERVER RACKS, MICROCHIP & VENT FANS
          ==================================================================== */}
      <g id="tower-floor-1" className="hero-tower-floor">
        {/* Main Floor 1 Slab */}
        <polygon
          points="510,480 640,405 560,359 430,434"
          fill="#d4f79c"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="430,434 510,480 510,540 430,494"
          fill="#9dd868"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="510,480 640,405 640,465 510,540"
          fill="#70b745"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* MICROCHIP (CPU with Heat Spreader & Traces) */}
        <g id="chip" className="hero-chip-group">
          {/* Chip base */}
          <polygon
            points="510,410 545,390 525,378 490,398"
            fill="#193824"
          />
          <polygon
            points="510,405 540,388 525,379 495,396"
            fill="#a2de72"
            stroke="#193824"
            strokeWidth="1.6"
          />
          {/* Golden Die */}
          <polygon
            points="512,398 530,388 522,383 504,393"
            fill="#f4f58c"
            stroke="#193824"
            strokeWidth="1.2"
          />
          {/* Circuit Traces */}
          <line x1="540" y1="392" x2="560" y2="403" stroke="#193824" strokeWidth="1.5" />
          <line x1="535" y1="384" x2="555" y2="395" stroke="#193824" strokeWidth="1.5" />
          <line x1="500" y1="404" x2="480" y2="415" stroke="#193824" strokeWidth="1.5" />
        </g>

        {/* VENTILATION FAN 1 (Left Module) */}
        <g id="fan-1" className="hero-fan-module">
          <rect x="460" y="475" width="46" height="46" rx="8" fill="#cbf38c" stroke="#193824" strokeWidth="2" />
          <circle cx="483" cy="498" r="17" fill="#193824" />
          <circle cx="483" cy="498" r="14" fill="#a2de72" stroke="#193824" strokeWidth="1.5" />
          {/* Spinning Fan Blades */}
          <g id="fan-blades-1" className="hero-fan-blades">
            <path
              d="M 483 498 Q 492 485 483 484 Q 480 492 483 498 Z"
              fill="#193824"
            />
            <path
              d="M 483 498 Q 496 507 495 511 Q 487 508 483 498 Z"
              fill="#193824"
            />
            <path
              d="M 483 498 Q 470 503 471 499 Q 477 492 483 498 Z"
              fill="#193824"
            />
            <circle cx="483" cy="498" r="3.5" fill="#f4f58c" stroke="#193824" strokeWidth="1" />
          </g>
        </g>

        {/* VENTILATION FAN 2 (Right Module) */}
        <g id="fan-2" className="hero-fan-module">
          <rect x="575" y="420" width="42" height="42" rx="8" fill="#cbf38c" stroke="#193824" strokeWidth="2" />
          <circle cx="596" cy="441" r="15" fill="#193824" />
          <circle cx="596" cy="441" r="12" fill="#a2de72" stroke="#193824" strokeWidth="1.5" />
          <g id="fan-blades-2" className="hero-fan-blades">
            <path
              d="M 596 441 Q 604 429 596 428 Q 593 435 596 441 Z"
              fill="#193824"
            />
            <path
              d="M 596 441 Q 608 449 607 453 Q 600 450 596 441 Z"
              fill="#193824"
            />
            <path
              d="M 596 441 Q 584 446 585 442 Q 590 435 596 441 Z"
              fill="#193824"
            />
            <circle cx="596" cy="441" r="3" fill="#f4f58c" stroke="#193824" strokeWidth="1" />
          </g>
        </g>

        {/* Industrial Dial / Valve */}
        <circle cx="546" cy="478" r="9" fill="#dcf7aa" stroke="#193824" strokeWidth="2" />
        <line x1="546" y1="472" x2="546" y2="484" stroke="#193824" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* ====================================================================
          TOWER LEVEL 2: INDUSTRIAL PIPES & MODULAR OFFICES
          ==================================================================== */}
      <g id="tower-floor-2" className="hero-tower-floor">
        {/* Core block */}
        <polygon
          points="515,360 625,296 555,256 445,320"
          fill="#dcf7aa"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="445,320 515,360 515,410 445,370"
          fill="#9dd868"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="515,360 625,296 625,346 515,410"
          fill="#70b745"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Ribbon Windows on left side */}
        <polygon points="455,335 480,350 480,366 455,351" fill="#193824" />
        <polygon points="485,352 505,364 505,380 485,368" fill="#193824" />

        {/* Modular Stack Block (Center) */}
        <polygon points="505,330 550,304 535,295 490,321" fill="#cbf38c" stroke="#193824" strokeWidth="1.8" />
        <polygon points="490,321 505,330 505,352 490,343" fill="#8ecf5f" stroke="#193824" strokeWidth="1.8" />
        <polygon points="505,330 550,304 550,326 505,352" fill="#6ab13f" stroke="#193824" strokeWidth="1.8" />

        {/* CURVED INDUSTRIAL PIPES (Down the side) */}
        <g id="pipes" stroke="#193824" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Pipe 1 */}
          <path d="M 570 300 Q 640 280 645 340 V 380 Q 645 420 580 410" />
          {/* Pipe 2 */}
          <path d="M 560 290 Q 655 270 660 335 V 385 Q 660 435 570 420" />
          {/* Pipe 3 */}
          <path d="M 550 280 Q 670 260 675 330 V 390 Q 675 450 560 430" />
        </g>
      </g>

      {/* ====================================================================
          TOWER LEVEL 3 & GLASS DOME (Top Level)
          ==================================================================== */}
      <g id="tower-floor-3" className="hero-tower-floor">
        {/* Top platform terrace */}
        <polygon
          points="510,240 600,188 540,154 450,206"
          fill="#eafcd0"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="450,206 510,240 510,265 450,231"
          fill="#a2de72"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="510,240 600,188 600,213 510,265"
          fill="#78bd4a"
          stroke="#193824"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Penthouse structure inside dome */}
        <polygon points="475,190 505,207 505,245 475,228" fill="#6ab13f" stroke="#193824" strokeWidth="1.8" />
        <polygon points="505,207 540,187 540,225 505,245" fill="#589f33" stroke="#193824" strokeWidth="1.8" />
        <polygon points="475,190 510,170 540,187 505,207" fill="#dcf7aa" stroke="#193824" strokeWidth="1.8" />
        {/* Windows on penthouse */}
        <rect x="482" y="200" width="6" height="14" fill="#193824" />
        <rect x="492" y="205" width="6" height="14" fill="#193824" />

        {/* Secondary small rooftop unit */}
        <polygon points="530,172 560,155 580,167 550,184" fill="#cbf38c" stroke="#193824" strokeWidth="1.6" />
        <polygon points="550,184 580,167 580,182 550,199" fill="#589f33" stroke="#193824" strokeWidth="1.6" />

        {/* Antenna / Communication Mast */}
        <line x1="500" y1="170" x2="500" y2="135" stroke="#193824" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="500" cy="133" r="3.5" fill="#f4f58c" stroke="#193824" strokeWidth="1.5" />
        {/* Antenna wire to rooftop */}
        <path d="M 500 148 L 525 174" stroke="#193824" strokeWidth="1.2" />

        {/* ==================================================================
            GEODESIC / GLASS DOME
            ================================================================== */}
        <g id="tower-dome" className="hero-dome-group">
          {/* Dome Outer Glass Arc */}
          <path
            d="M 445 220 
               C 445 100, 595 100, 595 200"
            fill="url(#domeGrad)"
            stroke="#193824"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Dome Interior Ribs (Arch lines) */}
          <path
            d="M 485 230 C 485 125, 570 125, 570 205"
            stroke="#193824"
            strokeWidth="1.4"
            strokeDasharray="4 2"
            fill="none"
            opacity="0.75"
          />
          <path
            d="M 460 215 C 460 140, 540 140, 585 190"
            stroke="#193824"
            strokeWidth="1.4"
            fill="none"
            opacity="0.55"
          />

          {/* Glass Highlights / Sheen */}
          <path
            d="M 470 185 C 475 130, 515 115, 535 115"
            stroke="url(#glassReflection)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
}
