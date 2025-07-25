import { Button } from "@/components/ui/button";
import { EmailCapture } from "./EmailCapture";
import { Mail, Phone, Github } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Samen maken we AI
            <span className="block text-accent">verantwoord en veilig</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Sluit je aan bij de voorlopers in verantwoorde AI voor de overheid. 
            Start vandaag met GovGPT en zet de eerste stap naar veilige digitalisering.
          </p>

          {/* Email capture */}
          <div className="mb-12">
            <div className="max-w-md mx-auto mb-6">
              <EmailCapture variant="hero" placeholder="je.naam@overheid.nl" />
            </div>
            <p className="text-white/80 text-sm">
              Ontvang updates over ontwikkelingen en vroege toegang
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm min-w-[200px]"
            >
              <Phone className="h-5 w-5" />
              Contact opnemen
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm min-w-[200px]"
            >
              <Github className="h-5 w-5" />
              GitHub Repository
            </Button>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-6 text-center text-white/80">
            <div>
              <Mail className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm">
                <a href="mailto:info@govgpt.nl" className="hover:text-white transition-colors">
                  info@govgpt.nl
                </a>
              </p>
            </div>
            <div>
              <Phone className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm">
                <a href="tel:+31201234567" className="hover:text-white transition-colors">
                  +31 (0)20 123 45 67
                </a>
              </p>
            </div>
            <div>
              <Github className="h-6 w-6 mx-auto mb-2" />
              <p className="text-sm">
                <a href="https://github.com/govgpt" className="hover:text-white transition-colors">
                  github.com/govgpt
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};