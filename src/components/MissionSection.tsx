import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users } from "lucide-react";

export const MissionSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Maatschappelijke missie
          </h2>
        </div>

        <Card className="shadow-card max-w-4xl mx-auto bg-card">
          <CardContent className="p-12 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Ethiek
                </h3>
                <p className="text-muted-foreground text-sm">
                  Democratische waarden centraal
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Publieke waarden
                </h3>
                <p className="text-muted-foreground text-sm">
                  Transparantie en verantwoording
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Controle
                </h3>
                <p className="text-muted-foreground text-sm">
                  Democratische controle behouden
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
              Ethiek, publieke waarden en controle centraal.
            </h3>
            <p className="text-lg text-muted-foreground">
              Samen met gebruikers bouwen we aan een betere publieke AI-oplossing.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};