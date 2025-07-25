import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Daniel Verloop",
      role: "Strategie & Visie",
      description: "Strategisch leiderschap met duidelijke visie voor soevereine AI in Europa",
      image: "👨‍💼"
    },
    {
      name: "Yannick Maltha",
      role: "Business & Partnerships",
      description: "CEO UbiOps - Enterprise-ready infrastructuur en ondernemerschap",
      image: "👨‍💻"
    },
    {
      name: "Kees van den Tempel",
      role: "Netwerk & Adoptie",
      description: "Uitgebreide overheidsrelaties en beleidsnetwerk",
      image: "🤝"
    },
    {
      name: "Aran Arunakiri",
      role: "Lead Developer & AI Architect",
      description: "Technische ruggengraat en AI-architectuur expert",
      image: "🧠"
    },
    {
      name: "Eduard Bakouev",
      role: "Security & Platform Architect",
      description: "Enterprise-grade veiligheid en platform architectuur",
      image: "🔐"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* Team credentials and partnerships */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-card bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Bewezen Expertise
              </h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <p className="text-sm text-muted-foreground">Jaar AI-ervaring</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Overheidsprojecten</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Bewezen track record met succesvolle AI-oplossingen bij (rijks)overheden. 
                Unieke mix van AI engineering, security architectuur en enterprise infrastructuur.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-secondary/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Enterprise Infrastructuur
              </h3>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">UbiOps</div>
                <p className="text-accent font-medium">Infrastructuurpartner</p>
              </div>
              <p className="text-muted-foreground text-sm">
                Vanaf dag één een professioneel en schaalbaar platform, 
                met bewezen expertise in de publieke sector en enterprise-grade veiligheid.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};