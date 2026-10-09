"use client";

import React from "react";
import LtechNav from "@/components/navigation/LtechNav";
import LtechHero from "@/components/home/LtechHero";
import TechneoServices from "@/components/home/TechneoServices";
import TechneoAbout from "@/components/home/TechneoAbout";
import ScrubbedTowerEvolution from "@/components/home/ScrubbedTowerEvolution";
import TechneoHistory from "@/components/home/TechneoHistory";
import TechneoProjects from "@/components/home/TechneoProjects";
import TechneoContactFooter from "@/components/home/TechneoContactFooter";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import MotionManager from "@/components/motion/MotionManager";

export default function GueEngineeringLanding() {
  return (
    <SmoothScrollProvider>
      <MotionManager />
      <div className="gue-home">
        <LtechNav />
        <main id="top">
          <LtechHero />
          <TechneoServices />
          <TechneoAbout />
          <ScrubbedTowerEvolution />
          <TechneoHistory />
          <TechneoProjects />
        </main>
        <TechneoContactFooter />
      </div>
    </SmoothScrollProvider>
  );
}
