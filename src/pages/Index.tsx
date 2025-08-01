import { Navigation } from "@/components/Navigation";
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
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="why-govgpt">
        <WhyNotChatGPTSection />
      </div>
      <div id="demo">
        <DemoSection />
      </div>
      <div id="waitlist">
        <WaitlistSection />
      </div>
      <UseCasesSection />
      <div id="team">
        <TeamSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <FinalCTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
