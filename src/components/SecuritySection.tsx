import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Lock, FileCheck, Server, Eye } from "lucide-react";

export const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Globe,
      title: "🇪🇺 Gehost in Nederland",
      description: "Alle data blijft binnen Nederlandse en EU-grenzen"
    },
    {
      icon: Shield,
      title: "ISO 27001 Infrastructuur",
      description: "Hoogste internationale beveiligingsstandaarden"
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "Volledige naleving van Europese privacywetgeving"
    },
    {
      icon: FileCheck,
      title: "EU AI Act Ready",
      description: "Voorbereid op toekomstige AI-regelgeving"
    },
    {
      icon: Server,
      title: "Geen Data-opslag",
      description: "Zonder expliciete toestemming en controle"
    },
    {
      icon: Eye,
      title: "Volledige Transparantie",
      description: "Open-source code en audit trails"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Veiligheid & <span className="text-accent">Compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GovGPT voldoet aan de hoogste beveiligings- en compliance-eisen. 
            Ontworpen door en voor de publieke sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="shadow-card hover-scale bg-card border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Powered by UbiOps */}
        <div className="text-center">
          <Card className="shadow-card max-w-md mx-auto bg-secondary/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">U</span>
                </div>
                <span className="text-lg font-semibold">Powered by UbiOps</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Gebouwd op het vertrouwde UbiOps platform voor 
                enterprise-grade AI deployment en security.
              </p>
              <a 
                href="https://ubiops.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                Meer over UbiOps →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};