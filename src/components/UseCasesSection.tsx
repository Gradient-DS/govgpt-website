import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, Search, BookOpen, MessageSquare, HelpCircle } from "lucide-react";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: FileText,
      title: "Beleid en wetgeving doorzoeken of samenvatten",
      description: "Snel relevante informatie vinden in complexe documenten"
    },
    {
      icon: MessageSquare,
      title: "Memo's en brieven genereren",
      description: "Professionele communicatie op basis van uw input"
    },
    {
      icon: BookOpen,
      title: "Beleidsstukken samenvatten",
      description: "Lange documenten omzetten naar heldere samenvattingen"
    },
    {
      icon: HelpCircle,
      title: "Interne kennisvragen beantwoorden",
      description: "Direct antwoord op organisatie-specifieke vragen"
    },
    {
      icon: Users,
      title: "Nieuwe collega's snel inwerken",
      description: "Gestructureerde onboarding met AI-ondersteuning"
    },
    {
      icon: Search,
      title: "Zoekfunctie voor procedures, uitleg, beleid",
      description: "Intuïtief zoeken in uw organisatiekennis"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Wat kun je doen met <span className="text-accent">GovGPT</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => (
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

        {/* Powered by */}
        <div className="text-center">
          <p className="text-muted-foreground">
            <span className="font-medium">Powered by UbiOps</span>
          </p>
        </div>
      </div>
    </section>
  );
};