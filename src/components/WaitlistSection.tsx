import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailCapture } from "./EmailCapture";
import { Users, Clock, Star, TrendingUp, ShieldCheck, Smile } from "lucide-react";

export const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Wil je GovGPT inzetten in <span className="text-accent">jouw organisatie</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schrijf je vrijblijvend in voor de GovGPT pilots en ontvang als eerste toegang inclusief intensieve begeleiding.
          </p>
        </div>

        {/* Aanmeldblok */}
        <Card className="shadow-xl max-w-xl mx-auto mb-12 bg-accent/10 border border-accent">
          <CardContent className="p-8 text-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold mb-2 text-card-foreground">Doe mee aan de pilots</h3>
              {/* Aanmeldveld */}
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-2">
                <EmailCapture variant="section" placeholder="je.naam@organisatie.nl" />
              </div>
              {/* Lampje en tekst */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-accent text-lg">💡</span>
                <span className="text-accent font-medium">Exclusieve toegang voor pilotpartners</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Voordelen als losse cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center">
              <Users className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-semibold mb-1 text-card-foreground">Early Access</h4>
              <p className="text-muted-foreground text-sm">Eerste toegang tot nieuwe features en updates</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center">
              <Star className="h-8 w-8 text-accent mb-2" />
              <h4 className="font-semibold mb-1 text-card-foreground">Intensieve Begeleiding</h4>
              <p className="text-muted-foreground text-sm">Persoonlijke onboarding en begeleiding door ons team</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg text-center hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center">
              <Clock className="h-8 w-8 text-secondary mb-2" />
              <h4 className="font-semibold mb-1 text-card-foreground">Advies op Maat</h4>
              <p className="text-muted-foreground text-sm">Persoonlijk advies voor implementatie in jouw organisatie</p>
            </CardContent>
          </Card>
        </div>

        {/* Urgentiecomponent */}
        <div className="mt-10 max-w-xl mx-auto">
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center shadow-lg">
            <p className="text-accent font-semibold">
              ⚡ Let op: Er zijn maar een beperkt aantal pilotplekken beschikbaar!
            </p>
          </div>
        </div>

        {/* Visual separator */}
        <div className="mt-16 mb-16">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Pricing section */}
        <div className="mt-16">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Concurrerend geprijsd, <span className="text-accent">maximale waarde</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Concurrerend geprijsd",
                description: (
                  <>
                    Concurrerend geprijsd ten opzichte van alternatieven zoals Copilot en ChatGPT. <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent underline hover:text-accent/80 transition-colors">Vraag een offerte op</button> voor een prijsinschatting op maat voor jouw organisatie.
                  </>
                )
              },
              {
                icon: ShieldCheck,
                title: "Efficiënt en compliant",
                description: "Snelle verwerking van beleid, minder werkdruk bij kennisvragen en snellere onboarding. Altijd volledig in lijn met alle relevante wet- en regelgeving."
              },
              {
                icon: Smile,
                title: "Hogere tevredenheid",
                description: "Gebruikers rapporteren aanzienlijke tijdwinst, hogere tevredenheid en een verbeterde samenwerking binnen hun organisatie."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-card p-6 w-full max-w-xs text-center border border-border min-h-[260px] flex flex-col justify-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};