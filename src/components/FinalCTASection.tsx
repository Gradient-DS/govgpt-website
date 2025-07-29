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
            <span className="text-accent">Contact</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Klaar om te starten met veilige, soevereine AI voor uw organisatie?
          </p>

          {/* Email capture */}
          <div className="mb-12">
            <div className="max-w-md mx-auto mb-6">
              <EmailCapture variant="hero" placeholder="je.naam@organisatie.nl" />
            </div>
            <p className="text-white/80 text-sm">
              Ontvang updates over ontwikkelingen en vroege toegang
            </p>
          </div>

          {/* Action buttons */}
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold"
            >
              Word pilotpartner
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              Plan demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              Vraag informatie aan
            </Button>
          </div>

          {/* Contact info */}
          <div className="text-center space-y-2">
            <p className="text-white/90 font-medium">
              Contact:
            </p>
            <p className="text-white/80">
              📧 info@govgpt.nl | 📞 +31 6 16011582
            </p>
            <p className="text-white/80">
              LinkedIn: <a href="https://www.linkedin.com/company/govgptofficial" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@govgptofficial</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};