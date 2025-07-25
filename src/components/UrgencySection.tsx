import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Users, Globe } from "lucide-react";

export const UrgencySection = () => {
  const urgencyPoints = [
    {
      icon: Globe,
      title: "Digitale Afhankelijkheid",
      description: "Onze beste talenten, data en investeringen vloeien naar de VS. Europa verliest controle over haar digitale toekomst."
    },
    {
      icon: Users,
      title: "Personeelstekorten",
      description: "Ongekende tekorten in de publieke sector, terwijl de vraag naar diensten toeneemt door demografische druk."
    },
    {
      icon: TrendingDown,
      title: "Stagnerende Productiviteit",
      description: "De Nederlandse overheid kampt met stilstaande efficiëntie, ondanks miljarden aan digitalisering-investeringen."
    },
    {
      icon: AlertTriangle,
      title: "Geopolitieke Risico's",
      description: "De dreiging van digitale afhankelijkheid en geopolitieke spanning is existentieel voor onze soevereiniteit."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/5 to-destructive/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-destructive/10 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Vijf voor Twaalf</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Europa staat op een <span className="text-destructive">cruciaal punt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Terwijl anderen de toekomst bouwen, kunnen wij het ons niet veroorloven te wachten. 
            De tijd voor handelen is <strong>nu</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {urgencyPoints.map((point, index) => (
            <Card key={index} className="shadow-card hover-scale border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <point.icon className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="shadow-card max-w-4xl mx-auto bg-card border-destructive/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                De Gevolgen van Niets Doen
              </h3>
              <p className="text-muted-foreground mb-6">
                Zonder actie blijft Europa afhankelijk van buitenlandse AI-systemen, 
                met alle risico's voor privacy, veiligheid en democratische waarden.
              </p>
              <div className="bg-destructive/5 rounded-lg p-4">
                <p className="text-destructive font-medium">
                  "Enorme bedragen, ons beste talent en meest waardevolle data vloeien nu naar de VS. 
                  De kracht is versnipperd, wat ons afremt."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};