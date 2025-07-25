import { HeroSection } from "@/components/HeroSection";
import { UrgencySection } from "@/components/UrgencySection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { DemoSection } from "@/components/DemoSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { ImpactSection } from "@/components/ImpactSection";
import { SecuritySection } from "@/components/SecuritySection";
import { TeamSection } from "@/components/TeamSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UrgencySection />
      <ProblemSolutionSection />
      <DemoSection />
      <WaitlistSection />
      <ImpactSection />
      <SecuritySection />
      <TeamSection />
      <RoadmapSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
