import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";

export const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ervaar <span className="text-accent">GovGPT</span> in actie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zie hoe GovGPT werkt in de praktijk. Een vertrouwde interface met de beveiliging die overheden nodig hebben.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card overflow-hidden">
            <CardContent className="p-0">
              {/* Video placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4 hover-scale cursor-pointer">
                    <Play className="h-10 w-10 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    GovGPT Demo Video
                  </h3>
                  <p className="text-muted-foreground">
                    2 minuten: Interface, features en beveiligingsmogelijkheden
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold mb-2">Veilige Interface</h3>
                <p className="text-sm text-muted-foreground">
                  Bekende ChatGPT-ervaring met overheidsveiligheid
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Audit Trail</h3>
                <p className="text-sm text-muted-foreground">
                  Volledige transparantie en tracering van alle interacties
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="font-semibold mb-2">Aanpasbaar</h3>
                <p className="text-sm text-muted-foreground">
                  Configureerbaar voor elke overheidsorganisatie
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA buttons */}
          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <ExternalLink className="h-5 w-5" />
                Live demo aanvragen
              </Button>
              <Button variant="outline" size="lg">
                Technische documentatie
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Geen verplichtingen • Directe toegang • Nederlandse support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};