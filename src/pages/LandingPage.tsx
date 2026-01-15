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
