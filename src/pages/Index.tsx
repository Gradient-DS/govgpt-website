import { HeroSection } from "@/components/HeroSection";
import { PositioningSection } from "@/components/PositioningSection";
import { WhyNotChatGPTSection } from "@/components/WhyNotChatGPTSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { USPSection } from "@/components/USPSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { DemoSection } from "@/components/DemoSection";
import { ROIPricingSection } from "@/components/ROIPricingSection";
import { TeamSection } from "@/components/TeamSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FAQSection } from "@/components/FAQSection";
import { MissionSection } from "@/components/MissionSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyNotChatGPTSection />
      <UseCasesSection />
      <USPSection />
      <WaitlistSection />
      <DemoSection />
      <ROIPricingSection />
      <TeamSection />
      <RoadmapSection />
      <FAQSection />
      <MissionSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
