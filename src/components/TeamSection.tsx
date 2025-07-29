import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Daan Witte",
      role: "Head of Strategy & Operations",
      description: "Strategie en operationele excellentie",
      drijfveer: "Publieke waarden centraal in AI-ontwikkeling",
      linkedin: "https://www.linkedin.com/in/daan-witte-650684184/",
      image: "👨‍💼"
    },
    {
      name: "Lex Lubbers", 
      role: "Head of Product",
      description: "Product ontwikkeling en gebruikerservaring",
      drijfveer: "Intuïtieve AI-tools voor complexe overheidstaken",
      linkedin: "https://www.linkedin.com/in/lex-lubbers/",
      image: "👨‍💻"
    },
    {
      name: "Kees van den Tempel",
      role: "Advisor - Netwerk & Adoptie",
      description: "Uitgebreide overheidsrelaties en adoptiestrategieën",
      drijfveer: "Verbinding tussen technologie en overheidsbehoeften",
      linkedin: "https://www.linkedin.com/in/keesvandentempel/",
      image: "🤝"
    },
    {
      name: "Daniel Verloop",
      role: "Advisor - Strategie",
      description: "Strategische visie en marktbenadering",
      drijfveer: "Duurzame technologische vooruitgang voor de publieke sector",
      linkedin: "https://www.linkedin.com/in/danielverloop",
      image: "🎯"
    },
    {
      name: "Aran Arunakiri",
      role: "AI Architect",
      description: "AI-architectuur en machine learning expertise",
      drijfveer: "Veilige en betrouwbare AI-systemen",
      linkedin: "https://www.linkedin.com/in/aran-arunakiri-9058831a/",
      image: "🧠"
    },
    {
      name: "Eduard Bakouev",
      role: "Security Specialist",
      description: "Cybersecurity en compliance expert",
      drijfveer: "Onwrikbare beveiliging voor kritieke systemen",
      linkedin: "https://www.linkedin.com/in/eduard-bakouev-282824112/",
      image: "🔐"
    },
    {
      name: "Stefanie Wenting",
      role: "Operations",
      description: "Operationele processen en kwaliteitsborging",
      drijfveer: "Excellente uitvoering en klanttevredenheid",
      linkedin: "https://www.linkedin.com/in/stefanie-wenting/",
      image: "⚙️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gebouwd met een <span className="text-accent">ervaren team</span>
          </h2>
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
                <p className="text-sm text-muted-foreground mb-2">
                  {member.description}
                </p>
                <p className="text-xs text-accent mb-4 italic">
                  "{member.drijfveer}"
                </p>
                
                {/* LinkedIn link */}
                <div className="flex justify-center">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Infrastructure partner */}
        <div className="text-center mb-8">
          <Card className="shadow-card max-w-2xl mx-auto bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Powered by <a href="https://ubiops.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">UbiOps</a>
              </h3>
              <p className="text-muted-foreground">
                Enterprise-ready infrastructuur met bewezen expertise in de publieke sector
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};