import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, Zap, Users, Globe, Wrench, CheckCircle2 } from "lucide-react";

export const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "EU AI Act is van kracht",
      description: "Organisaties moeten NU iets doen om compliant te blijven"
    },
    {
      icon: Shield,
      title: "ChatGPT en Copilot verboden",
      description: "Vanwege security risico's in overheden"
    },
    {
      icon: Users,
      title: "Personeelstekorten",
      description: "Vragen om slimme ondersteuning en automatisering"
    },
    {
      icon: Globe,
      title: "Digitalisering investeringen",
      description: "Nederland investeert miljarden in digitale transformatie"
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "ChatGPT-ervaring, maar veilig",
      description: "Dezelfde gebruiksvriendelijkheid, maar dan veiliger, sneller en verantwoordelijk"
    },
    {
      icon: Globe,
      title: "100% EU-hosted",
      description: "ISO 27001-compliant infrastructuur, volledig open-source en transparant"
    },
    {
      icon: Wrench,
      title: "Flexibel inzetbaar",
      description: "Keuze tussen SaaS-oplossing of volledig on-premise implementatie"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Geen vendor lock-in",
      description: "Volledige keuzevrijheid in AI-modellen en leveranciers"
    },
    {
      icon: Users,
      title: "Chain of Craft™ aanpak",
      description: "Unieke methode voor behoud van menselijke autonomie en controle"
    },
    {
      icon: Zap,
      title: "Ervaren team",
      description: "Getraind team met jarenlange overheids-ervaring en top-partners"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Waarom veilige AI <span className="text-accent">nú</span> nodig is
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De wereld van AI verandert snel. Overheden staan voor uitdagingen die directe actie vereisen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="shadow-card hover-scale border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <problem.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              GovGPT is <span className="text-accent">de oplossing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alle voordelen van moderne AI, zonder de nadelen. Speciaal ontworpen voor de publieke sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-card hover-scale bg-card">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                    <solution.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Waarom <span className="text-accent">GovGPT</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Niet zomaar een AI-tool, maar een complete oplossing die past bij de waarden en eisen van de overheid.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover-scale bg-secondary/50">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                    <benefit.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};