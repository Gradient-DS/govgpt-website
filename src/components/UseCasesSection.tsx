import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Search, BookOpen, MessageSquare, HelpCircle, Plus, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UseCasesSection = () => {
  const currentUseCases = [
    {
      icon: FileText,
      title: "Beleid en wetgeving doorzoeken",
      description: "Beleid, raadsinformatie en wetgeving samenvatten of doorzoeken"
    },
    {
      icon: MessageSquare,
      title: "Conceptbrieven en memo's genereren",
      description: "Conceptbrieven en memo's genereren (onder eindredactie)"
    },
    {
      icon: BookOpen,
      title: "Beleidsstukken samenvatten",
      description: "Beleidsstukken en rapporten snel samenvatten"
    },
    {
      icon: HelpCircle,
      title: "Interne kennisvragen beantwoorden",
      description: "Interne kennisvragen beantwoorden, nieuwe collega's snel inwerken"
    },
    {
      icon: Search,
      title: "Veilige kennisportaalfunctie",
      description: "Zoek en vind procedures, uitleg, beleid"
    },
    {
      icon: Plus,
      title: "En nog veel meer",
      description: "Ontdek alle mogelijkheden van GovGPT voor uw organisatie"
    }
  ];

  const futureFeatures = [
    {
      icon: Search,
      title: "Web search",
      description: "Integratie met externe bronnen"
    },
    {
      icon: Zap,
      title: "Geavanceerde zoekfuncties",
      description: "Intelligente content discovery"
    },
    {
      icon: Users,
      title: "Workflow-agents",
      description: "Geautomatiseerde processen"
    },
    {
      icon: BookOpen,
      title: "Prompt libraries voor overheidstaken",
      description: "Voorgedefinieerde templates"
    },
    {
      icon: Globe,
      title: "Integratie met andere GovTech-platforms",
      description: "Naadloze samenwerking"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Wat kun je nu al doen met <span className="text-accent">GovGPT</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentUseCases.map((useCase, index) => (
            <Card key={index} className="shadow-card hover-scale">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                  <useCase.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual separator */}
        <div className="mb-12">
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-primary mb-2">
            Wat kun je binnenkort van GovGPT verwachten?
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {futureFeatures.map((item, index) => (
            <Card key={index} className="shadow-card hover-scale bg-accent/5 border-accent/20">
              <CardContent className="p-4 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-accent rounded-full mb-3">
                  <item.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-base font-semibold mb-1 text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* User involvement */}
        <Card className="shadow-card max-w-2xl mx-auto bg-card">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">
              Uw stem telt
            </h3>
            <p className="text-muted-foreground mb-4">
              Gebruikers kunnen meedenken & prioriteren. Samen bepalen we de richting van GovGPT.
            </p>
            <Button 
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90"
            >
              Doe mee aan de pilots
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};