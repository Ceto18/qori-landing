"use client";

import { LandingFooter } from "./LandingFooter";
import { LandingNavbar } from "./LandingNavbar";

import { BenefitsSection } from "./sections/BenefitsSection";
import { BusinessInfoSection } from "./sections/BusinessInfoSection";
import { FinalCTASection } from "./sections/FinalCTASection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PlansSection } from "./sections/PlansSection";
import { ProblemSection } from "./sections/ProblemSection";
import { SolutionSection } from "./sections/SolutionSection";

export function QoriLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PlansSection />
        <HowItWorksSection />
        <BenefitsSection />
        <BusinessInfoSection />
        <FinalCTASection />
      </main>

      <LandingFooter />
    </div>
  );
}