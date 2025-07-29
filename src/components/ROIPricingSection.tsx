import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, ShieldCheck, Smile } from "lucide-react";

export const ROIPricingSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Concurrerend geprijsd",
      description: (
        <>
          Concurrerend geprijsd ten opzichte van alternatieven zoals Copilot en ChatGPT. <a href="#contact" className="text-accent underline">Vraag een offerte op</a> voor een prijsinschatting op maat voor jouw organisatie.
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
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Concurrerend geprijsd, <span className="text-accent">maximale waarde</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
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
    </section>
  );
};