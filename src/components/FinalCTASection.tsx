import { Button } from "@/components/ui/button";
import { EmailCapture } from "./EmailCapture";
import { Mail, Phone, Linkedin } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contact
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Klaar om te starten met veilige, soevereine AI voor uw organisatie?
          </p>

          {/* Pilot block */}
          <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto mb-8 border border-accent/30 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Word pilotpartner</h3>
            <EmailCapture variant="hero" placeholder="je.naam@organisatie.nl" />
            <div className="flex justify-center mt-6">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Meer informatie over pilots
              </Button>
            </div>
          </div>

          {/* Combined contact block */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-white text-center">Of neem contact op</h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Contact reasons */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <h4 className="font-semibold text-white mb-1 text-sm">Plan demo</h4>
                  <p className="text-white/80 text-xs">Bekijk GovGPT in actie</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <h4 className="font-semibold text-white mb-1 text-sm">Vraag informatie</h4>
                  <p className="text-white/80 text-xs">Meer weten over implementatie</p>
                </div>
              </div>
              
              {/* Contact info */}
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="flex justify-center items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 text-white" />
                    <a href="mailto:info@govgpt.nl" className="text-white/90 hover:text-accent transition-colors text-sm">
                      info@govgpt.nl
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-white" />
                    <a href="tel:+31616011582" className="text-white/90 hover:text-accent transition-colors text-sm">
                      +31 6 16011582
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-3 w-3 text-white" />
                    <a href="https://www.linkedin.com/company/govgptofficial" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-accent transition-colors text-sm">
                      LinkedIn GovGPT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};