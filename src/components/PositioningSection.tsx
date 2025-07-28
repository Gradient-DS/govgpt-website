import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Globe } from "lucide-react";

export const PositioningSection = () => {
  return (
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Positionering & Onze Aanpak
          </h2>
          <Card className="shadow-card max-w-4xl mx-auto bg-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 mx-auto">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                GovGPT is een onafhankelijke, publieke AI-oplossing
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Afgestemd op publieke waarden en democratische normen. Specifiek ontwikkeld voor (semi-)publieke organisaties.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Compliance gegarandeerd:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Common Ground</li>
                    <li>• HAVEN</li>
                    <li>• NDS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Wetgeving & standaarden:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• DPIA/FRIA</li>
                    <li>• AI Act</li>
                    <li>• ISO 27001</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};