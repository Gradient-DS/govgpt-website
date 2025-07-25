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
      title: "Soevereine Publieke AI",
      description: "Volledig afgestemd op publieke waarden, met data-opslag binnen nationale/EU-grenzen. Volledig luchtgescheiden infrastructuur voor ongekende datasoevereiniteit."
    },
    {
      icon: CheckCircle2,
      title: "Compliance by Design",
      description: "Vanaf dag één compliant met EU AI Act, GDPR en ISO 27001. Transparante audittrails en ethische waarborgen ingebouwd."
    },
    {
      icon: Users,
      title: "Mensgericht & Cognitieve Gezondheid",
      description: "Chain of Craft™ methodologie versterkt menselijk oordeel. Anti-atrofie waarborgen behouden kritisch denken. Gebruikers behouden Override Authority."
    },
    {
      icon: Wrench,
      title: "Flexibel en Open",
      description: "Platform en model agnostisch. Ondersteunt open standaarden en voorkomt vendor lock-in. Keuze tussen closed-source en open-source LLM's."
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Transparantie & Verantwoording",
      description: "Algoritmische verklaarbaarheid en democratische verantwoording ingebouwd in de kernarchitectuur"
    },
    {
      icon: Shield,
      title: "Bewezen Track Record",
      description: "Succesvolle AI-oplossingen bij (rijks)overheden. Unieke mix van AI engineering en security architectuur"
    },
    {
      icon: Zap,
      title: "Europa's Digitale Toekomst",
      description: "Visie 2030: Europa als internationale referentiepunt voor democratische technologie en digitaal bestuur"
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
          
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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