import { Button } from "@/components/ui/button";
import { EmailCapture } from "./EmailCapture";
import { Play, Shield, Users, Zap, Database, CheckCircle, Globe, GraduationCap } from "lucide-react";

export const HeroSection = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    demoSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPilot = () => {
    const pilotSection = document.getElementById("waitlist");
    pilotSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            GovGPT: Hét veilige alternatief voor ChatGPT
            <span className="block text-accent">gericht op de publieke sector</span>
          </h1>

          {/* USP badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-base max-w-5xl mx-auto">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-3 min-h-[56px] justify-center">
              <Database className="h-4 w-4" />
              100% NL/EU data-opslag
            </div>

            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-3 min-h-[56px] justify-center">
              <Shield className="h-4 w-4" />
              EU AI Act & DPIA compliant
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-3 min-h-[56px] justify-center">
              <CheckCircle className="h-4 w-4" />
              Common Ground & HAVEN
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-3 min-h-[56px] justify-center">
              <Globe className="h-4 w-4" />
              Geen vendor lock-in
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-3 min-h-[56px] justify-center">
              <Users className="h-4 w-4" />
              SaaS of on-premise
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-3 min-h-[56px] justify-center">
              <GraduationCap className="h-4 w-4" />
              Training & nazorg
            </div>
          </div>

          {/* Urgency message */}
          <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-accent/30">
            <p className="text-white text-center font-medium">
              ⚡ Door de grote vraag werken we met een wachtlijst. Slechts enkele plekken voor pilots, selectie bijna rond.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToPilot}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
            >
              Word pilotpartner
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToDemo}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="h-5 w-5" />
              Bekijk demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              Vraag informatie aan
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
};