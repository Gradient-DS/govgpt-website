import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Shield,
  Users,
  CheckCircle2,
  Globe,
  BrainCog
} from "lucide-react";

export const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "EU AI Act is van kracht",
      description: "Organisaties moeten NU iets doen om compliant te blijven"
    },
    {
      icon: Shield,
      title: "ChatGPT verboden in overheden",
      description: "Vanwege security- en datarisico’s bij verwerking van overheidsdata"
    },
    {
      icon: Users,
      title: "Personeelstekorten",
      description: "Vragen om slimme digitale ondersteuning en efficiënte processen"
    }
  ];

  const solutionPoints = [
    {
      icon: CheckCircle2,
      title: "Compliant by design",
      description: "Voldoet direct aan EU AI Act, GDPR en ISO 27001, zonder omwegen of achterafplakwerk"
    },
    {
      icon: Globe,
      title: "Flexibel en soeverein",
      description: "Open-source, 100% soeverein en zonder vendor lock-in, inzetbaar als SaaS of volledig on-premise"
    },
    {
      icon: BrainCog,
      title: "Mensgerichte AI met Chain of Craft™",
      description:
        "Onze unieke aanpak versterkt menselijk denken met bronvermelding, reflectiemomenten en verantwoording op elke stap"
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

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card key={index} className="shadow-card hover-scale border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <problem.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              GovGPT is <span className="text-accent">de oplossing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alle voordelen van moderne AI, zonder de nadelen. Speciaal ontworpen voor de publieke sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutionPoints.map((point, index) => (
              <Card key={index} className="shadow-card hover-scale bg-card">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                    <point.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};