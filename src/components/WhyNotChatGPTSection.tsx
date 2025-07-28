import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, Check } from "lucide-react";

export const WhyNotChatGPTSection = () => {
  const govgptBenefits = [
    "Volledige NL/EU datacontrole – geen Big Tech-afhankelijkheid",
    "DPIA/FRIA uitgevoerd, geschikt voor overheid & onderwijs", 
    "Altijd eigenaar van je data, met audittrail & open standaarden",
    "Vrijheid in uitrol: SaaS, on-prem, open/closed source",
    "Altijd inclusief training & nazorg"
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Waarom niet <span className="text-accent">'gewoon ChatGPT'</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Standaard AI voldoet niet aan de publieke vereisten rond privacy, controle en transparantie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Problem with standard AI */}
          <Card className="shadow-card border-l-4 border-l-destructive">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <h3 className="text-2xl font-semibold text-card-foreground">
                  Standaard AI-oplossingen
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Voldoen niet aan publieke vereisten rond:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>❌ Privacy en datasoevereiniteit</li>
                <li>❌ Controle over data en processen</li>
                <li>❌ Transparantie en verantwoording</li>
                <li>❌ Compliance met overheidsstandaarden</li>
                <li>❌ Democratische waarden</li>
              </ul>
            </CardContent>
          </Card>

          {/* GovGPT solution */}
          <Card className="shadow-card border-l-4 border-l-accent bg-accent/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-card-foreground">
                  GovGPT biedt
                </h3>
              </div>
              <div className="space-y-3">
                {govgptBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};