"use client";

import React, { useEffect, useRef } from "react";

export default function SmoothScrollProvider({ children }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenisInstance = null;

    if (!prefersReducedMotion) {
      import("lenis").then(({ default: Lenis }) => {
        lenisInstance = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        function raf(time) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      }).catch(() => {
        // Fallback gracefully if Lenis fails
      });
    }

    // Cursor tracking on desktop
    const isDesktop = window.innerWidth > 834;
    const handleMouseMove = (e) => {
      if (cursorRef.current && isDesktop) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      if (cursorRef.current && isDesktop) {
        const target = e.target.closest("a, button, [role='button'], input, select, textarea, .pill-interactive");
        if (target) {
          cursorRef.current.classList.add("custom-cursor--hover");
        } else {
          cursorRef.current.classList.remove("custom-cursor--hover");
        }
      }
    };

    if (isDesktop && !prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      {children}
    </>
  );
}
