import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, Check, Globe, Zap, Users, Lock, HeadphonesIcon, Flag, UserCheck, Layers, BookOpen } from "lucide-react";

export const WhyNotChatGPTSection = () => {
  const govgptBenefits = [
    "100% soeverein",
    "Volledig compliant met EU AI Act, AVG en WCAG",
    "Menselijke regie centraal",
    "Geen vendor lock-in",
    "Specifiek voor de publieke sector"
  ];

  const usps = [
    {
      icon: Flag,
      title: "100% soeverein",
      description: "Nederlandse data-opslag en logging met volledige controle over jouw data. Alle taalmodellen draaien in Nederland en alle informatie blijft binnen Nederlandse grenzen."
    },
    {
      icon: Shield,
      title: "Compliant met EU AI Act, AVG en WCAG",
      description: "Volledig compliant met Europese en Nederlandse wetgeving, ontwikkeld volgens Common Ground en HAVEN standaarden. Toegankelijkheid en privacy zijn vanaf het begin ingebouwd in elke functionaliteit."
    },
    {
      icon: UserCheck,
      title: "Menselijke regie centraal",
      description: "Transparante bronvermelding en human-in-the-loop AI stimuleren kritisch denken. AI ondersteunt bij beslissingen, maar de menselijke controle en verantwoordelijkheid blijven altijd centraal."
    },
    {
      icon: Globe,
      title: "Geen vendor lock-in",
      description: "Platform en model agnostisch met open-source mogelijkheden voor maximale flexibiliteit. U behoudt altijd de vrijheid om te kiezen en te wisselen tussen verschillende oplossingen."
    },
    {
      icon: Layers,
      title: "Functionaliteiten gericht op de publieke sector",
      description: "Prompt library voor overheden en overheidsagents die specifiek zijn ontwikkeld voor publieke processen. Continue updates en aanpassingen op basis van feedback uit de praktijk."
    },
    {
      icon: BookOpen,
      title: "Training en begeleiding",
      description: "Voor optimale adoptie bieden wij uitgebreide training aan voor organisaties. Support is standaard inbegrepen zonder meerprijs."
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
                <li>❌ Gebrek aan datasoevereiniteit</li>
                <li>❌ Onvoldoende naleving van wet- en regelgeving</li>
                <li>❌ Weinig transparantie of menselijke regie</li>
                <li>❌ Vendor lock-in</li>
                <li>❌ Algemene oplossingen, niet toegespitst op de overheid</li>
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