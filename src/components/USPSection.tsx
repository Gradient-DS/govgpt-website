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
      title: "Compliant met EU AI Act, GDPR, ISO 27001",
      description: "Plus Common Ground, HAVEN, NDS"
    },
    {
      icon: Zap,
      title: "Flexibel & open",
      description: "SaaS of On-Premise. Open- of closed-source. U kiest."
    },
    {
      icon: Lock,
      title: "Geen vendor lock-in",
      description: "Behoud altijd uw vrijheid van keuze"
    },
    {
      icon: Users,
      title: "Prompts en agents specifiek voor de overheid",
      description: "Continue updates op basis van feedback"
    },
    {
      icon: Users,
      title: "Training & nazorg",
      description: "Uitgebreide begeleiding en nazorg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Wat GovGPT</span> <span className="text-accent">uniek maakt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            GovGPT is een onafhankelijke, publieke AI-oplossing - afgestemd op publieke waarden en democratische normen. Specifiek ontwikkeld voor (semi-)publieke organisaties.
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
      </div>
    </section>
  );
};