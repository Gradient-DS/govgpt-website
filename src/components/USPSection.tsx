import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Zap, Users, Lock, HeadphonesIcon } from "lucide-react";

export const USPSection = () => {
  const usps = [
    {
      icon: Globe,
      title: "100% publieke AI, data-opslag binnen EU",
      description: "Volledige controle over uw data"
    },
    {
      icon: Shield,
      title: "Compliant met AI Act, GDPR, ISO 27001",
      description: "Plus Common Ground, HAVEN, NDS"
    },
    {
      icon: Zap,
      title: "Flexibel & open: SaaS, on-prem, open of closed source",
      description: "Kies de oplossing die bij u past"
    },
    {
      icon: Lock,
      title: "Geen vendor lock-in",
      description: "Behoud altijd uw vrijheid van keuze"
    },
    {
      icon: Users,
      title: "Continue updates op basis van feedback",
      description: "Uw input bepaalt onze ontwikkeling"
    },
    {
      icon: HeadphonesIcon,
      title: "Altijd inclusief training & support",
      description: "Uitgebreide begeleiding en nazorg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            USP-blok / <span className="text-accent">Sterke Punten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Vanaf dag één:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {usps.map((usp, index) => (
            <Card key={index} className="shadow-card hover-scale">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <usp.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {usp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Exclusivity card */}
        <Card className="shadow-card max-w-2xl mx-auto bg-accent/10 border-accent/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
              Exclusiviteit
            </h3>
            <p className="text-lg text-muted-foreground">
              <strong>Wachtlijst + intensieve begeleiding</strong> voor early adopters
            </p>
            <p className="text-accent font-medium mt-2">
              Beperkte beschikbaarheid voor maximale kwaliteit
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};