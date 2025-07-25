import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Daniel",
      role: "Executive Chairman",
      description: "Samenwerking & Visie",
      image: "👨‍💼"
    },
    {
      name: "Daan",
      role: "Head of Strategy & Operations",
      description: "Strategie & Uitvoering",
      image: "👨‍💻"
    },
    {
      name: "Lex",
      role: "Head of Product",
      description: "Ontwikkeling & Innovatie",
      image: "👨‍🔬"
    },
    {
      name: "Aran",
      role: "AI Architect",
      description: "Architectuur & AI",
      image: "🧠"
    },
    {
      name: "Eduard",
      role: "Security Specialist",
      description: "Beveiliging, Compliance & Infrastructuur",
      image: "🔐"
    },
    {
      name: "Pascal",
      role: "Head of Education",
      description: "Technologie & Onderwijs",
      image: "📚"
    },
    {
      name: "Kees",
      role: "Business Development",
      description: "Technologie & Overheid",
      image: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Het team achter <span className="text-accent">GovGPT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Een bewezen team met jarenlange ervaring in AI, beveiliging en de publieke sector. 
            Samen zorgen we voor verantwoorde AI-implementatie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-card hover-scale bg-card text-center">
              <CardContent className="p-6">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-1 text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.description}
                </p>
                
                {/* Social links placeholder */}
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team credentials */}
        <div className="text-center">
          <Card className="shadow-card max-w-3xl mx-auto bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Bewezen expertise
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Jaar AI-ervaring</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Overheidsprojecten</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Nederlands team</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};