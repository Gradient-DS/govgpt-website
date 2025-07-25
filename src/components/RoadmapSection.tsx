import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket, Globe, Users } from "lucide-react";

export const RoadmapSection = () => {
  const phases = [
    {
      icon: Target,
      phase: "Fase 1",
      timeframe: "0-6 maanden",
      title: "Nederland als Springplank",
      description: "Lancering GovGPT.nl beta met maximale transparantie. Eerste pilotklanten via ons netwerk voor onweerlegbaar bewijs van concept.",
      highlights: ["Onmiddellijke beta lancering", "Pilotklanten activeren", "Show, don't tell benadering"]
    },
    {
      icon: Rocket,
      phase: "Fase 2", 
      timeframe: "6+ maanden",
      title: "Schaal en Europese Expansie",
      description: "Na bewezen schaalbaar model in Nederland, voorbereiding Europese expansie met Open Innovatie Marktplaats.",
      highlights: ["Europese expansie", "Open Innovatie Marktplaats", "Externe investering"]
    }
  ];

  const governanceApproach = [
    {
      icon: Users,
      title: "Gefaseerde Governance",
      description: "Start commercieel met founder control voor snelle executie, transparante overgang naar gedeelde governance op basis van mijlpalen."
    },
    {
      icon: Globe,
      title: "Democratische Legitimiteit",
      description: "Snelheid combineren met democratische waarden. Kritiek wordt omgezet in kracht door co-creatie en adviesorganen."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            De Route naar Impact: <span className="text-accent">Bouwen, Demonstreren, Leiden</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Een pragmatische en gefaseerde aanpak met een "show, don't tell" benadering 
            om Europa's digitale soevereiniteit te realiseren.
          </p>
        </div>

        {/* Phases */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {phases.map((phase, index) => (
            <Card key={index} className="shadow-card hover-scale">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <phase.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-accent">{phase.phase}</div>
                    <div className="text-sm text-muted-foreground">{phase.timeframe}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {phase.description}
                </p>
                
                <div className="space-y-2">
                  {phase.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Governance Approach */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Governance & <span className="text-accent">Democratische Waarden</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {governanceApproach.map((item, index) => (
            <Card key={index} className="shadow-card bg-secondary/30">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                  <item.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-card-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="shadow-card max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold mb-4 text-card-foreground">
                Van Kritiek naar Kracht
              </h4>
              <p className="text-muted-foreground mb-6">
                We anticiperen op weerstand en zetten deze om in kracht. Critici worden uitgenodigd 
                als co-creators op bestuursraden of adviesorganen.
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-accent font-medium">
                  "We zullen onze successen delen, coalities bouwen en Europa's digitale toekomst 
                  veiligstellen door actie, niet alleen woorden."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};