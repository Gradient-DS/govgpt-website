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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium">🇪🇺 Europa's Digitale Soevereiniteit • Nu of Nooit</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            GovGPT: Soevereine
            <span className="block text-accent">Generatieve AI</span>
            <span className="block">voor de Overheid</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Open-source. Veilig. In Nederland. Volledig compliant.
            <span className="block mt-2 text-lg text-white/80">
              De ChatGPT-ervaring die overheden nodig hebben, zonder de risico's.
            </span>
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Shield className="h-4 w-4" />
              EU AI Act Ready
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Users className="h-4 w-4" />
              ISO 27001 Compliant
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <Zap className="h-4 w-4" />
              On-premise mogelijk
            </div>
          </div>

          {/* Email capture */}
          <div className="mb-8">
            <EmailCapture variant="hero" placeholder="je.naam@organisatie.nl" />
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToDemo}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="h-5 w-5" />
              Bekijk de demo
            </Button>
            <a
              href="#contact"
              className="text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              Of plan een gesprek →
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