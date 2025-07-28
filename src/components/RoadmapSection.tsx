import { Card, CardContent } from "@/components/ui/card";
import { Search, Zap, Users, BookOpen, Globe } from "lucide-react";

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
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Roadmap / <span className="text-accent">Toekomstige Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Roadmap – Samen innoveren
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roadmapItems.slice(0, 3).map((item, index) => (
            <Card key={index} className="shadow-card hover-scale bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {roadmapItems.slice(3).map((item, index) => (
            <Card key={index + 3} className="shadow-card hover-scale bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* User involvement */}
        <Card className="shadow-card max-w-2xl mx-auto bg-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
              Uw stem telt
            </h3>
            <p className="text-muted-foreground">
              Gebruikers kunnen meedenken & prioriteren. Samen bepalen we de richting van GovGPT.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};