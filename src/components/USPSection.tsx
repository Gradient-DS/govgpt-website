import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Zap, Users, Lock, HeadphonesIcon, Flag, UserCheck, Layers, BookOpen } from "lucide-react";

export const USPSection = () => {
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
      title: "Specifieke functionaliteiten voor de publieke sector",
      description: "Prompt library voor overheden en overheidsagents die specifiek zijn ontwikkeld voor publieke processen. Continue updates en aanpassingen op basis van feedback uit de praktijk."
    },
    {
      icon: BookOpen,
      title: "Training en begeleiding",
      description: "Voor optimale adoptie bieden wij uitgebreide training en nazorg aan voor organisaties. Kennisoverdracht en begeleiding zijn standaard inbegrepen zonder meerprijs."
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