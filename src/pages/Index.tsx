import { HeroSection } from "@/components/HeroSection";
import { WhyNotChatGPTSection } from "@/components/WhyNotChatGPTSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { DemoSection } from "@/components/DemoSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyNotChatGPTSection />
      <DemoSection />
      <WaitlistSection />
      <UseCasesSection />
      <TeamSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
