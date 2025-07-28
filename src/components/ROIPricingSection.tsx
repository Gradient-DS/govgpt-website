import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

export const ROIPricingSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Meer controle, compliance & maatwerk",
      description: "Dan alternatieven zoals Copilot/ChatGPT"
    },
    {
      icon: Clock,
      title: "Snellere verwerking, minder werkdruk",
      description: "Significante tijdsbesparing per medewerker"
    },
    {
      icon: Users,
      title: "Snellere onboarding",
      description: "Nieuwe medewerkers sneller productief"
    },
    {
      icon: BarChart3,
      title: "Hogere tevredenheid & tijdswinst",
      description: "Bewezen in gebruikersrapportages"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ROI & <span className="text-accent">Prijs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Concurrerend geprijsd, maximale waarde
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover-scale">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
                  <benefit.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};