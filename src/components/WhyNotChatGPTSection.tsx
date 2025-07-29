import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, Check, Globe, Zap, Users, Lock, HeadphonesIcon } from "lucide-react";

export const WhyNotChatGPTSection = () => {
  const govgptBenefits = [
    "Volledige NL/EU datacontrole, geen Big Tech-afhankelijkheid",
    "DPIA/FRIA uitgevoerd, geschikt voor overheid & onderwijs",
    "Altijd eigenaar van je data, met audittrail & open standaarden",
    "Vrijheid in uitrol: SaaS, on-prem, open/closed source",
    "Wij bieden training & nazorg"
  ];

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
      title: "Prompts en agents specifiek voor de overheid",
      description: "Continue updates op basis van feedback"
    },
    {
      icon: HeadphonesIcon,
      title: "Training & nazorg",
      description: "Uitgebreide begeleiding en nazorg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Waarom publieke organisaties kiezen voor <span className="text-accent">GovGPT</span>
          </h2>
        </div>

        {/* Comparison section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Problem with standard AI */}
          <Card className="shadow-card border-l-4 border-l-destructive">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <h3 className="text-2xl font-semibold text-card-foreground">
                  Traditionele AI-oplossingen voldoen niet aan
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>❌ Privacy en datasoevereiniteit</li>
                <li>❌ Controle over data en processen</li>
                <li>❌ Transparantie en verantwoording</li>
                <li>❌ Compliance met overheidsstandaarden</li>
                <li>❌ Democratische waarden</li>
              </ul>
            </CardContent>
          </Card>

          {/* GovGPT solution */}
          <Card className="shadow-card border-l-4 border-l-accent bg-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-card-foreground">
                  GovGPT biedt
                </h3>
              </div>
              <div className="space-y-3">
                {govgptBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual separator */}
        <div className="mt-12 mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* USP cards section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-2">
            Wat GovGPT uniek maakt
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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