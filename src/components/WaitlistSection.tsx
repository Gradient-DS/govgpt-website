import { EmailCapture } from "./EmailCapture";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Clock, Star } from "lucide-react";

export const WaitlistSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Wil je <span className="text-accent">GovGPT</span> inzetten in jouw organisatie?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schrijf je vrijblijvend in en ontvang als eerste toegang tot GovGPT. 
              Geen verplichtingen, wel alle voordelen van early access.
            </p>
          </div>

          <Card className="shadow-card max-w-2xl mx-auto mb-12 bg-card border-2">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Krijg vroege toegang
                </h3>
                <EmailCapture 
                  variant="section" 
                  placeholder="je.naam@gemeente.nl" 
                />
              </div>
              
              <div className="text-sm text-muted-foreground">
                Door je aan te melden ga je akkoord met onze{" "}
                <a href="#" className="text-primary hover:underline">privacyverklaring</a>
                {" "}en{" "}
                <a href="#" className="text-primary hover:underline">algemene voorwaarden</a>.
              </div>
            </CardContent>
          </Card>

          {/* Waitlist benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Early Access</h3>
                <p className="text-sm text-muted-foreground">
                  Eerste toegang tot nieuwe features en updates
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Prioriteit Support</h3>
                <p className="text-sm text-muted-foreground">
                  Directe lijn naar ons expert team voor vragen
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Advies op Maat</h3>
                <p className="text-sm text-muted-foreground">
                  Persoonlijk advies voor implementatie in jouw organisatie
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">
              <span className="font-semibold text-primary">200+</span> professionals uit de publieke sector
            </p>
            <p className="text-sm text-muted-foreground">
              zijn je al voorgegaan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};