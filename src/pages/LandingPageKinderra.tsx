import BadgeRow from "../components/sections/BadgeRow";
import DailyRhythm from "../components/sections/DailyRhythm";
import Environment from "../components/sections/Environment";
import FooterCTA from "../components/sections/FooterCTA";
import Hero from "../components/sections/Hero";
import Journey from "../components/sections/Journey";
import LearningFramework from "../components/sections/LearningFramework";
import Programs from "../components/sections/Programs";

const LandingPageKinderra = () => {
  return (
    <div className="min-h-screen bg-beige text-text">
      <Hero />
      <BadgeRow />
      <LearningFramework />
      <Programs />
      <Environment />
      <DailyRhythm />
      <Journey />
      <FooterCTA />
    </div>
  );
};

export default LandingPageKinderra;
