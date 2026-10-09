"use client";

import React, { useEffect } from "react";

/**
 * MotionManager Component
 * Centralizes all GSAP ScrollTrigger animations, easings, and parallax scrubbing:
 * - Zoom-on-scroll for Hero Tower (1 -> 1.5)
 * - Parallax depth for hero layers (cloud, satellite, tower)
 * - Heading masked text reveals on scroll
 * - Card staggers across sections
 * - About workstation card scale-from-0.8 & border-radius morph
 * - Stepper line fill & Timeline node illumination
 */
export default function MotionManager() {
  useEffect(() => {
    let ctx;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // ================================================================
          // 1. HERO PARALLAX & ZOOM-ON-SCROLL
          // ================================================================
          const heroSection = document.querySelector(".ltech-hero-section");
          const heroTower = document.querySelector(".hero-isometric-svg");
          const heroHeadline = document.querySelector(".ltech-hero-headline");
          const heroParagraph = document.querySelector(".ltech-hero-paragraph");
          const heroButton = document.querySelector(".ltech-explore-button");
          const heroCloud = document.querySelector(".hero-cloud-group");
          const heroSatellite = document.querySelector(".hero-satellite-group");

          if (heroSection && heroTower) {
            // Scrub timeline as user scrolls out of the hero
            const heroTl = gsap.timeline({
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 0.8,
              },
            });

            // Tower zooms from 1 to 1.45
            heroTl.to(
              heroTower,
              {
                scale: 1.45,
                transformOrigin: "center center",
                ease: "power2.inOut",
              },
              0
            );

            // Cloud drifts faster (1.25x parallax)
            if (heroCloud) {
              heroTl.to(
                heroCloud,
                {
                  y: -90,
                  x: 30,
                  ease: "none",
                },
                0
              );
            }

            // Satellite moves at a different speed (0.8x parallax)
            if (heroSatellite) {
              heroTl.to(
                heroSatellite,
                {
                  y: 40,
                  x: -20,
                  ease: "none",
                },
                0
              );
            }

            // Left copy gently translates and fades up
            if (heroHeadline && heroParagraph && heroButton) {
              heroTl.to(
                [heroHeadline, heroParagraph, heroButton],
                {
                  y: -60,
                  opacity: 0.2,
                  stagger: 0.05,
                  ease: "power2.out",
                },
                0
              );
            }
          }

          // ================================================================
          // 2. HEADINGS REVEAL ON SCROLL
          // ================================================================
          const headings = document.querySelectorAll(
            ".techneo-serif-title, .techneo-about-left h2, .techneo-history-header h2"
          );
          headings.forEach((heading) => {
            gsap.fromTo(
              heading,
              { y: 36, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 88%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });

          // ================================================================
          // 3. ABOUT WORKSTATION CARD: SCALE-FROM-0.8 + RADIUS MORPH
          // ================================================================
          const workstationCard = document.querySelector(".techneo-workstation-card");
          if (workstationCard) {
            gsap.fromTo(
              workstationCard,
              {
                scale: 0.82,
                borderRadius: "48px",
                opacity: 0.7,
              },
              {
                scale: 1,
                borderRadius: "24px",
                opacity: 1,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                  trigger: workstationCard,
                  start: "top 82%",
                  end: "top 40%",
                  scrub: 0.6,
                },
              }
            );
          }

          // ================================================================
          // 4. STEPPER LINE FILL ON SCROLL
          // ================================================================
          const stepperLine = document.querySelector(".techneo-stepper-line");
          if (stepperLine) {
            gsap.fromTo(
              stepperLine,
              { scaleX: 0, transformOrigin: "left center" },
              {
                scaleX: 1,
                duration: 1.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: stepperLine,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // ================================================================
          // 5. TESTIMONIAL CARDS STAGGER
          // ================================================================
          const testimonialCards = document.querySelectorAll(".techneo-testimonial-card");
          if (testimonialCards.length > 0) {
            gsap.fromTo(
              testimonialCards,
              { y: 40, opacity: 0, scale: 0.96 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: testimonialCards[0],
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }

          // ================================================================
          // 6. HISTORY TIMELINE NODES LIGHT UP IN SEQUENCE
          // ================================================================
          const timelineCards = document.querySelectorAll(".techneo-timeline-card-item");
          timelineCards.forEach((item) => {
            const dot = item.querySelector(".techneo-timeline-node-dot");
            const card = item.querySelector(".techneo-timeline-card");

            if (dot && card) {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top 78%",
                  toggleActions: "play none none reverse",
                },
              });

              tl.fromTo(
                dot,
                { scale: 0.4, opacity: 0.4 },
                { scale: 1.2, opacity: 1, duration: 0.4, ease: "back.out(2)" }
              ).to(dot, { scale: 1, duration: 0.2 });

              tl.fromTo(
                card,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                "-=0.3"
              );
            }
          });

          // ================================================================
          // 7. SELECTED WORK PROJECTS CARDS STAGGER
          // ================================================================
          const projectCards = document.querySelectorAll(".techneo-project-card");
          if (projectCards.length > 0) {
            gsap.fromTo(
              projectCards,
              { y: 35, opacity: 0, scale: 0.97 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: projectCards[0],
                  start: "top 85%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });
      }
    );

    return () => ctx && ctx.revert();
  }, []);

  return null;
}
