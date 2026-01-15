import { useEffect } from "react";
import FeatureStrip from "../components/sections/FeatureStrip";
import Hero from "../components/sections/Hero";
import DaycareProgram from "../components/sections/DaycareProgram";
import LearningFramework from "../components/sections/LearningFramework";
import OSHC from "../components/sections/OSHC";
import Readiness from "../components/sections/Readiness";
import BalancedDailyRhythm from "../components/sections/BalancedDailyRhythm";
import TrialProgram from "../components/sections/TrialProgram";
import WeekendThematicClasses from "../components/sections/WeekendThematicClasses";
import WhyChoose from "../components/sections/WhyChoose";
import LearningEnvironment from "../components/sections/LearningEnvironment";
import JourneySection from "../components/sections/JourneySection";
import CTAPlusFooter from "../components/sections/CTAPlusFooter";

const LandingPage = () => {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => {
      section.classList.add("reveal");
    });

    const staggerGroups = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-stagger]"),
    );
    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement)) return;
        child.classList.add("reveal-item");
        child.style.setProperty("--reveal-delay", `${index * 90}ms`);
      });
    });

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      sections.forEach((section) => section.classList.add("reveal--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal--visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FFFFFF] font-fredoka text-text">
      <Hero />
      <FeatureStrip />
      <LearningFramework />
      <Readiness />
      <DaycareProgram />
      <OSHC />
      <WeekendThematicClasses />
      <TrialProgram />
      <div className="blue-bridge">
        <WhyChoose />
        <LearningEnvironment />
      </div>
      <BalancedDailyRhythm />
      <JourneySection />
      <CTAPlusFooter />
    </div>
  );
};

export default LandingPage;
