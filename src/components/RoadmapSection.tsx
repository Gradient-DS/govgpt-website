import { Card, CardContent } from "@/components/ui/card";
import { Search, Zap, Users, BookOpen, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RoadmapSection = () => {
  const roadmapItems = [
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Wat kun je binnenkort van <span className="text-accent">GovGPT verwachten</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {roadmapItems.map((item, index) => (
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