import { Linkedin } from "lucide-react";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Daan Witte",
      role: "Head of Strategy & Operations",
      drijfveer: "Publieke waarden centraal in AI-ontwikkeling",
      linkedin: "https://www.linkedin.com/in/daan-witte-650684184/",
      image: "👨‍💼"
    },
    {
      name: "Lex Lubbers",
      role: "Head of Product",
      drijfveer: "Intuïtieve AI-tools voor complexe overheidstaken",
      linkedin: "https://www.linkedin.com/in/lex-lubbers/",
      image: "👨‍💻"
    },
    {
      name: "Daniel Verloop",
      role: "Advisor",
      drijfveer: "Duurzame technologische vooruitgang voor de publieke sector",
      linkedin: "https://www.linkedin.com/in/danielverloop",
      image: "🎯"
    },
    {
      name: "Kees van den Tempel",
      role: "Advisor",
      drijfveer: "Verbinding tussen technologie en overheidsbehoeften",
      linkedin: "https://www.linkedin.com/in/keesvandentempel/",
      image: "🤝"
    },
    {
      name: "Aran Arunakiri",
      role: "AI Architect",
      drijfveer: "Veilige en betrouwbare AI-systemen",
      linkedin: "https://www.linkedin.com/in/aran-arunakiri-9058831a/",
      image: "🧠"
    },
    {
      name: "Eduard Bakouev",
      role: "Security Specialist",
      drijfveer: "Onwrikbare beveiliging voor kritieke systemen",
      linkedin: "https://www.linkedin.com/in/eduard-bakouev-282824112/",
      image: "🔐"
    },
    {
      name: "Stefanie Wenting",
      role: "Operations",
      drijfveer: "Excellente uitvoering en klanttevredenheid",
      linkedin: "https://www.linkedin.com/in/stefanie-wenting/",
      image: "⚙️"
    },
    {
      name: "Pascal Mariany",
      role: "Lead Education",
      drijfveer: "Kennisdeling en educatie voor een geïnformeerde overheid",
      linkedin: "https://www.linkedin.com/in/pascalmariany/",
      image: "📚"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gebouwd met een <span className="text-accent">ervaren team en een missie</span>
          </h2>
        </div>

        {/* Missie beschrijving */}
        <div className="max-w-4xl mx-auto mb-12 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Ethiek, publieke waarden en controle centraal.
          </h3>
          <p className="text-lg text-muted-foreground">
            Samen met gebruikers bouwen we aan een betere publieke AI-oplossing.
          </p>
        </div>

        {/* Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 flex flex-col items-center text-center hover-scale">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-accent font-medium mb-3">{member.role}</p>
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
            </div>
          ))}
        </div>

        {/* Infrastructure partner */}
        <div className="text-center mb-8">
          <div className="max-w-2xl mx-auto p-6">
            <h3 className="text-xl font-semibold mb-2">
              Powered by <a href="https://ubiops.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">UbiOps</a>
            </h3>
            <p className="text-muted-foreground">
              Enterprise-ready infrastructuur met bewezen expertise in de publieke sector
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};