import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink, Zap, Users, Shield } from "lucide-react";

export const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            <span className="text-accent">Pilotfase</span>
          </h2>
          
          {/* Urgency message */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <p className="text-accent font-medium">
              ⚡ Al X pilots gevuld – laatste plekken beschikbaar
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card overflow-hidden">
            <CardContent className="p-0">
              {/* Video placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4 hover-scale cursor-pointer">
                    <Play className="h-10 w-10 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    GovGPT Demo Video
                  </h3>
                  <p className="text-muted-foreground">
                    2 minuten: Interface, features en beveiligingsmogelijkheden
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pilot benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-card hover-scale">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">Toegang tot nieuwste functies</h4>
                <p className="text-muted-foreground text-sm">Eerste toegang tot alle nieuwe features</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover-scale">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">Co-creatie</h4>
                <p className="text-muted-foreground text-sm">Jouw wensen bepalen de roadmap</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card hover-scale">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">Inclusief trainingen & support</h4>
                <p className="text-muted-foreground text-sm">Ook na livegang volledig ondersteund</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="shadow-card max-w-3xl mx-auto mt-12 bg-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <p className="text-lg italic text-muted-foreground mb-4">
                "Organisaties die GovGPT al gebruiken zijn enthousiast en maken er dankbaar gebruik van."
              </p>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center mt-12 animate-slide-up">
            <div className="bg-card rounded-lg p-8 shadow-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Doe mee aan de pilotfase
              </h3>
              <p className="text-muted-foreground mb-6">
                Krijg vroege toegang en help mee met het vormgeven van de toekomst van overheidspecifieke AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Word pilotpartner
                </Button>
                <Button variant="outline" size="lg">
                  Plan demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};