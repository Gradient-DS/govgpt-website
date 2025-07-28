import { Button } from "@/components/ui/button";
import { EmailCapture } from "./EmailCapture";
import { ChevronDown, Play, Shield, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    demoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(27, 54, 93, 0.9), rgba(27, 54, 93, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-accent/30">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Exclusief voor de Publieke Sector</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hét veilige alternatief
            <span className="block text-accent">voor ChatGPT</span>
            <span className="block">exclusief voor de publieke sector</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Soevereine, generatieve AI die 100% voldoet aan publieke waarden, wetgeving en ethische normen.
            <span className="block mt-2 text-lg text-white/80">
              Beschikbaar in elke vorm: SaaS, on-prem, open of closed source – altijd veilig, altijd soeverein, altijd eigenaar van je eigen data.
            </span>
          </p>

          {/* Extra message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-white/20">
            <p className="text-white/90 text-center">
              <strong>Altijd inclusief uitgebreide training en nazorg</strong>, zodat organisaties verantwoord en maximaal profiteren van AI.
            </p>
          </div>

          {/* USP badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 text-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
              <Shield className="h-4 w-4" />
              100% NL/EU data-opslag
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
              <Users className="h-4 w-4" />
              DPIA/FRIA compliant
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
              <Zap className="h-4 w-4" />
              AI Act & ISO 27001
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
              <Shield className="h-4 w-4" />
              Geen vendor lock-in
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
              <Users className="h-4 w-4" />
              SaaS of on-premise
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
              <Zap className="h-4 w-4" />
              Training & nazorg
            </div>
          </div>

          {/* Urgency message */}
          <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto border border-accent/30">
            <p className="text-white text-center font-medium">
              ⚡ Door de grote vraag werken we met een wachtlijst. Slechts enkele plekken voor pilots, selectie bijna rond.
            </p>
          </div>

          {/* Email capture */}
          <div className="mb-8">
            <EmailCapture variant="hero" placeholder="je.naam@organisatie.nl" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
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
            <a
              href="#contact"
              className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              Vraag info →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};