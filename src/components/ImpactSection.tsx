import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Euro, Target } from "lucide-react";

export const ImpactSection = () => {
  const impactStats = [
    {
      icon: Euro,
      number: "€440M",
      description: "Realistisch bereikbare markt in Nederlandse publieke sector (2030)"
    },
    {
      icon: TrendingUp,
      number: "15-20%",
      description: "Productiviteitssprong mogelijk met GenAI in de overheid"
    },
    {
      icon: Users,
      number: "255K-465K",
      description: "Voltijdbanen equivalent aan extra productie in publieke sector"
    },
    {
      icon: Target,
      number: "2030",
      description: "Europa als internationale referentiepunt voor democratische tech"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            De Impact: <span className="text-accent">Mondiale Leider</span> in Democratische Technologie
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GovGPT heeft het potentieel om Europa te transformeren tot het internationale referentiepunt 
            voor democratische technologie en digitaal bestuur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="shadow-card hover-scale text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-card bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Economische Impact
              </h3>
              <p className="text-muted-foreground mb-4">
                De markt voor AI-oplossingen in de Nederlandse publieke sector is aanzienlijk. 
                GovGPT kan een productiviteitssprong van 15-20% realiseren.
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-primary font-medium">
                  Elke geïnvesteerde euro blijft zoveel mogelijk binnen Europa en 
                  vloeit terug in onderzoek, banen en verdere innovatie.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Democratische Waarden
              </h3>
              <p className="text-muted-foreground mb-4">
                Door vast te houden aan digitale soevereiniteit, inclusie, ethiek en transparantie, 
                zetten we de standaard voor overheidsAI.
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-accent font-medium">
                  "We bouwen niet tegen Big Tech; we bouwen het democratische alternatief."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};