"use client";

import React, { useEffect, useRef, useState } from "react";
import AppIcon from "@/components/ui/AppIcon";

/**
 * ScrubbedTowerEvolution Component
 * ============================================================================
 * Implements a 300vh pinned scroll-scrubbed interactive section.
 *
 * MODES SUPPORTED:
 * 1. Default (Generative Canvas/SVG Mode):
 *    Draws the isometric tech tower evolving smoothly from a blueprint wireframe
 *    (with schematic grid, annotations, and wire traces) into a full-color production
 *    isometric scene as the user scrubs through scroll progress.
 *
 * 2. Video Scrub Mode (Drop-in):
 *    Drop your MP4 file into `/public/scrub.mp4` and pass `videoSrc="/scrub.mp4"`.
 *    ScrollTrigger will automatically map scroll progress to `video.currentTime`.
 *
 * 3. Canvas Frame Sequence Mode (Drop-in):
 *    Drop pre-rendered webp frames into `/public/scrub/frame_0001.webp` ...
 *    and pass `frameSequence={{ pattern: "/scrub/frame_%04d.webp", count: 120 }}`.
 * ============================================================================
 */
export default function ScrubbedTowerEvolution({
  videoSrc = null,
  frameSequence = null,
}) {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState("01. Blueprint Schematics");

  useEffect(() => {
    let ctx;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: stickyRef.current,
            scrub: 0.8,
            onUpdate: (self) => {
              const p = self.progress;
              setScrollProgress(p);

              // Update Phase Label
              if (p < 0.35) {
                setActivePhase("01. Blueprint Schematics & Wireframe");
              } else if (p < 0.7) {
                setActivePhase("02. Structural Integration & Assembly");
              } else {
                setActivePhase("03. Production System & Live Cloud Sync");
              }

              // Mode 1: Video Scrub (if video provided)
              if (videoRef.current && videoRef.current.duration) {
                videoRef.current.currentTime = p * videoRef.current.duration;
              }

              // Mode 2: Generative Canvas Blueprint -> Render
              if (canvasRef.current && !videoSrc) {
                drawBlueprintEvolution(canvasRef.current, p);
              }
            },
          });
        }, containerRef);
      }
    );

    return () => ctx && ctx.revert();
  }, [videoSrc]);

  // Initial canvas draw
  useEffect(() => {
    if (canvasRef.current && !videoSrc) {
      drawBlueprintEvolution(canvasRef.current, 0);
    }
  }, [videoSrc]);

  /**
   * Generative Canvas Drawing Function
   * Evolves from Blueprint (cyan/white lines on dark grid) to Full Monochrome Green Isometric Scene.
   */
  const drawBlueprintEvolution = (canvas, p) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const centerX = w * 0.5;
    const centerY = h * 0.52;

    // 1. Grid Background (intensity fades as progress reaches 1)
    ctx.save();
    ctx.strokeStyle = `rgba(25, 56, 36, ${Math.max(0.04, 0.25 * (1 - p))})`;
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.restore();

    // 2. Blueprint Schematic Circles & Compass
    if (p < 0.75) {
      const blueprintAlpha = Math.max(0, 1 - p * 1.3);
      ctx.save();
      ctx.strokeStyle = `rgba(25, 56, 36, ${blueprintAlpha * 0.6})`;
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 220 + p * 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Isometric 30-degree helper projection
    const iso = (ix, iy, iz) => {
      const screenX = centerX + (ix - iy) * 0.866;
      const screenY = centerY + (ix + iy) * 0.5 - iz;
      return [screenX, screenY];
    };

    // Helper: Draw isometric box with blueprint or shaded fills
    const drawIsoBox = (x, y, z, dx, dy, dz, colorTop, colorLeft, colorRight) => {
      const p000 = iso(x, y, z);
      const p100 = iso(x + dx, y, z);
      const p110 = iso(x + dx, y + dy, z);
      const p010 = iso(x, y + dy, z);
      const p001 = iso(x, y, z + dz);
      const p1001 = iso(x + dx, y, z + dz);
      const p111 = iso(x + dx, y + dy, z + dz);
      const p011 = iso(x, y + dy, z + dz);

      // Top Face
      ctx.beginPath();
      ctx.moveTo(p001[0], p001[1]);
      ctx.lineTo(p1001[0], p1001[1]);
      ctx.lineTo(p111[0], p111[1]);
      ctx.lineTo(p011[0], p011[1]);
      ctx.closePath();
      if (p > 0.3) {
        ctx.fillStyle = colorTop;
        ctx.globalAlpha = Math.min(1, (p - 0.2) * 1.4);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "#193824";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Left Face
      ctx.beginPath();
      ctx.moveTo(p000[0], p000[1]);
      ctx.lineTo(p001[0], p001[1]);
      ctx.lineTo(p011[0], p011[1]);
      ctx.lineTo(p010[0], p010[1]);
      ctx.closePath();
      if (p > 0.3) {
        ctx.fillStyle = colorLeft;
        ctx.globalAlpha = Math.min(1, (p - 0.2) * 1.4);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "#193824";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Right Face
      ctx.beginPath();
      ctx.moveTo(p010[0], p010[1]);
      ctx.lineTo(p011[0], p011[1]);
      ctx.lineTo(p111[0], p111[1]);
      ctx.lineTo(p110[0], p110[1]);
      ctx.closePath();
      if (p > 0.3) {
        ctx.fillStyle = colorRight;
        ctx.globalAlpha = Math.min(1, (p - 0.2) * 1.4);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "#193824";
      ctx.lineWidth = 1.8;
      ctx.stroke();
    };

    // Calculate vertical floor explosions/settles based on progress
    // At p = 0, floors are exploded apart vertically (exploded schematic view!)
    // As p -> 1, floors reassemble smoothly into solid unified tower.
    const explodeOffset = (1 - Math.min(1, p * 1.2)) * 60;

    // Floor 0: Foundation
    drawIsoBox(
      -100, -100, -50,
      200, 200, 45,
      "#cbf38c", "#8ecf5f", "#6ab13f"
    );

    // Floor 1: Server Matrix (moves down as p increases)
    const f1_z = 0 + explodeOffset * 0.8;
    drawIsoBox(
      -85, -85, f1_z,
      170, 170, 50,
      "#d4f79c", "#9dd868", "#70b745"
    );

    // Floor 2: Microchips & Pipelines (moves down as p increases)
    const f2_z = 60 + explodeOffset * 1.6;
    drawIsoBox(
      -70, -70, f2_z,
      140, 140, 50,
      "#dcf7aa", "#9dd868", "#70b745"
    );

    // Floor 3: Glass Dome Terrace (moves down as p increases)
    const f3_z = 120 + explodeOffset * 2.4;
    drawIsoBox(
      -50, -50, f3_z,
      100, 100, 40,
      "#eafcd0", "#a2de72", "#78bd4a"
    );

    // Top Dome Arc
    const domePt = iso(0, 0, f3_z + 40);
    ctx.save();
    ctx.beginPath();
    ctx.arc(domePt[0], domePt[1], 46, Math.PI, 0);
    ctx.strokeStyle = "#193824";
    ctx.lineWidth = 2.2;
    if (p > 0.4) {
      ctx.fillStyle = `rgba(235, 255, 215, ${Math.min(0.65, p * 0.7)})`;
      ctx.fill();
    }
    ctx.stroke();
    ctx.restore();

    // Blueprint Callout Markers & Dimension Lines (active during p < 0.6)
    if (p < 0.6) {
      const calloutAlpha = Math.max(0, 1 - p * 1.7);
      ctx.save();
      ctx.strokeStyle = `rgba(25, 56, 36, ${calloutAlpha * 0.8})`;
      ctx.fillStyle = `rgba(25, 56, 36, ${calloutAlpha * 0.9})`;
      ctx.font = "600 11px var(--font-mono, monospace)";
      ctx.setLineDash([3, 3]);

      // Callout 1: Foundation
      const c1 = iso(100, 0, -30);
      ctx.beginPath();
      ctx.moveTo(c1[0], c1[1]);
      ctx.lineTo(c1[0] + 60, c1[1] - 20);
      ctx.stroke();
      ctx.fillText("[01] FOUNDATION SLAB", c1[0] + 68, c1[1] - 16);

      // Callout 2: Server Cluster
      const c2 = iso(-85, 0, f1_z + 25);
      ctx.beginPath();
      ctx.moveTo(c2[0], c2[1]);
      ctx.lineTo(c2[0] - 60, c2[1] - 20);
      ctx.stroke();
      ctx.fillText("[02] SERVER MATRIX", c2[0] - 180, c2[1] - 16);

      // Callout 3: Dome
      const c3 = domePt;
      ctx.beginPath();
      ctx.moveTo(c3[0] + 35, c3[1] - 30);
      ctx.lineTo(c3[0] + 90, c3[1] - 50);
      ctx.stroke();
      ctx.fillText("[03] GEODESIC DOME", c3[0] + 98, c3[1] - 46);

      ctx.restore();
    }
  };

  return (
    <section ref={containerRef} className="scrubbed-tower-section">
      <div ref={stickyRef} className="scrubbed-sticky-stage">
        {/* Top Control Overlay */}
        <div className="scrubbed-header-overlay">
          <div className="scrubbed-header-content">
            <span className="scrubbed-kicker">
              <AppIcon name="sparkle" size={14} />
              <span>Interactive Architecture</span>
            </span>
            <h2 className="scrubbed-title">
              From Blueprint to Production System
            </h2>
            <p className="scrubbed-sub">
              Scroll to scrub through the assembly of our engineering infrastructure.
            </p>
          </div>

          {/* Scrub Progress & Phase Indicator */}
          <div className="scrubbed-progress-card">
            <div className="scrubbed-phase-label">
              <span className="scrubbed-pulse-dot" />
              <strong>{activePhase}</strong>
            </div>
            <div className="scrubbed-progress-track">
              <div
                className="scrubbed-progress-fill"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <div className="scrubbed-progress-metrics">
              <span>0% Wireframe</span>
              <span>{(scrollProgress * 100).toFixed(0)}% Scrolled</span>
              <span>100% Production</span>
            </div>
          </div>
        </div>

        {/* Central Visualization Stage */}
        <div className="scrubbed-canvas-wrap">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              playsInline
              preload="auto"
              className="scrubbed-video-element"
            />
          ) : (
            <canvas
              ref={canvasRef}
              width={960}
              height={640}
              className="scrubbed-canvas-element"
            />
          )}
        </div>

        {/* Bottom Documentation & Customization Tooltip */}
        <div className="scrubbed-footer-hint">
          <AppIcon name="cog" size={14} />
          <span>
            Modular Scrub Component: Replace with your MP4 (`/public/scrub.mp4`) or
            frame sequence by passing `videoSrc` or `frameSequence`.
          </span>
        </div>
      </div>
    </section>
  );
}
