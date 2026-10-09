"use client";

import React, { useEffect, useRef } from "react";
import HeroIsometricScene from "@/components/illustrations/HeroIsometricScene";

export default function LtechHero() {
  const heroRef = useRef(null);
  const headlineLine1Ref = useRef(null);
  const headlineLine2Ref = useRef(null);
  const headlineLine3Ref = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const illustrationWrapRef = useRef(null);

  useEffect(() => {
    let ctx;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("gsap").then(({ gsap }) => {
      ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          // Reduced motion: gentle instantaneous fade
          gsap.set(
            [
              headlineLine1Ref.current,
              headlineLine2Ref.current,
              headlineLine3Ref.current,
              paragraphRef.current,
              buttonRef.current,
              illustrationWrapRef.current,
            ],
            { opacity: 1, y: 0 }
          );
          return;
        }

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // 1. Initial hidden state for masked lines
        gsap.set(
          [headlineLine1Ref.current, headlineLine2Ref.current, headlineLine3Ref.current],
          { y: "115%", rotateX: 20, opacity: 0 }
        );
        gsap.set(paragraphRef.current, { y: 24, opacity: 0 });
        gsap.set(buttonRef.current, { scale: 0.9, opacity: 0 });

        // 2. Tower floors initial assembly offsets
        const towerBase = illustrationWrapRef.current?.querySelector("#tower-base");
        const floor1 = illustrationWrapRef.current?.querySelector("#tower-floor-1");
        const floor2 = illustrationWrapRef.current?.querySelector("#tower-floor-2");
        const floor3 = illustrationWrapRef.current?.querySelector("#tower-floor-3");
        const cloud = illustrationWrapRef.current?.querySelector("#cloud");
        const satellite = illustrationWrapRef.current?.querySelector("#satellite");
        const wires = illustrationWrapRef.current?.querySelectorAll("#wires path");

        if (towerBase && floor1 && floor2 && floor3) {
          gsap.set(towerBase, { y: 60, opacity: 0 });
          gsap.set(floor1, { y: 90, opacity: 0 });
          gsap.set(floor2, { y: 120, opacity: 0 });
          gsap.set(floor3, { y: 150, opacity: 0 });
        }
        if (satellite) gsap.set(satellite, { x: -40, opacity: 0 });
        if (cloud) gsap.set(cloud, { y: -30, opacity: 0 });

        if (wires) {
          wires.forEach((wire) => {
            const length = wire.getTotalLength ? wire.getTotalLength() : 200;
            gsap.set(wire, { strokeDasharray: length, strokeDashoffset: length });
          });
        }

        // Timeline execution (starts right as nav line finishes draw)
        tl.delay(0.35);

        // 3. Headline masked reveal line-by-line
        tl.to(
          [headlineLine1Ref.current, headlineLine2Ref.current, headlineLine3Ref.current],
          {
            y: "0%",
            rotateX: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.15,
            ease: "power4.out",
          }
        );

        // 4. Paragraph & button stagger in
        tl.to(
          paragraphRef.current,
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
        tl.to(
          buttonRef.current,
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.8)" },
          "-=0.4"
        );

        // 5. Isometric tower assemble floor-by-floor with elastic settle
        if (towerBase) {
          tl.to(
            towerBase,
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.8"
          );
        }
        if (floor1) {
          tl.to(
            floor1,
            { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
            "-=0.65"
          );
        }
        if (floor2) {
          tl.to(
            floor2,
            { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
            "-=0.65"
          );
        }
        if (floor3) {
          tl.to(
            floor3,
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            "-=0.65"
          );
        }
        if (satellite) {
          tl.to(
            satellite,
            { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            "-=0.6"
          );
        }
        if (cloud) {
          tl.to(
            cloud,
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
          );
        }

        // 6. Connecting wires draw
        if (wires) {
          tl.to(
            wires,
            { strokeDashoffset: 0, duration: 1.2, stagger: 0.1, ease: "power2.inOut" },
            "-=0.5"
          );
        }
      }, heroRef);
    });

    return () => ctx && ctx.revert();
  }, []);

  // Magnetic button hover effect (subtle, max 12px)
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const btn = buttonRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <section ref={heroRef} className="ltech-hero-section">
      <div className="ltech-hero-container">
        {/* Left Column: 3-Line Serif Headline, Copy, Outlined Explore Button */}
        <div className="ltech-hero-left">
          <div className="ltech-hero-eyebrow" aria-label="Company registration details">
            Nigeria · GUE Engineering Limited · RC 8342226
          </div>

          <h1 className="ltech-hero-headline" aria-label="Software, AI Automation & Cloud Engineering Built Right.">
            <span className="ltech-headline-line-mask">
              <span ref={headlineLine1Ref} className="ltech-headline-line">
                Software, AI Automation
              </span>
            </span>
            <span className="ltech-headline-line-mask">
              <span ref={headlineLine2Ref} className="ltech-headline-line">
                & Cloud Engineering
              </span>
            </span>
            <span className="ltech-headline-line-mask">
              <span ref={headlineLine3Ref} className="ltech-headline-line">
                Built Right.
              </span>
            </span>
          </h1>

          <p ref={paragraphRef} className="ltech-hero-paragraph">
            Experience the future of urban connectivity with our cutting-edge AI technology,
            revolutionizing city communications for a smarter, more efficient tomorrow.
          </p>

          <div className="ltech-hero-actions">
            <a
              ref={buttonRef}
              href="#about"
              className="ltech-explore-button"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              aria-label="Explore GUE Engineering services and background"
            >
              <span className="ltech-explore-button-text">Explore</span>
              <span className="ltech-explore-button-wipe" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: Isometric Vector Scene */}
        <div ref={illustrationWrapRef} className="ltech-hero-right">
          <HeroIsometricScene />
        </div>
      </div>
    </section>
  );
}
