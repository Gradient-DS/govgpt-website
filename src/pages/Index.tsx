import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { DemoSection } from "@/components/DemoSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { SecuritySection } from "@/components/SecuritySection";
import { TeamSection } from "@/components/TeamSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <DemoSection />
      <WaitlistSection />
      <SecuritySection />
      <TeamSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
