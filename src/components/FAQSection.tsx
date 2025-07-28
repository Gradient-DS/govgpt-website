import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Kan ik kiezen hoe ik GovGPT uitrol?",
      answer: "Ja: SaaS, on-prem, open/closed source - u kiest wat bij uw organisatie past."
    },
    {
      question: "Blijf ik eigenaar van mijn data?",
      answer: "Ja, u behoudt volledige eigendom en controle over uw data. Geen external processing zonder toestemming."
    },
    {
      question: "Hoe veilig is het?",
      answer: "Volledig compliant met DPIA/FRIA, EU AI Act, GDPR, ISO 27001 en overheidsstandaarden zoals Common Ground en HAVEN."
    },
    {
      question: "Krijg ik begeleiding?",
      answer: "Ja, altijd inclusief uitgebreide training en nazorg. Wij zorgen ervoor dat uw organisatie maximaal profiteert van AI."
    },
    {
      question: "Wat zijn de kosten?",
      answer: "Transparant en concurrerend prijsmodel. Neem contact op voor een offerte op maat voor uw organisatie."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Veelgestelde <span className="text-accent">Vragen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Antwoorden op de meest gestelde vragen over GovGPT
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-card hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-accent rounded-full">
                      <HelpCircle className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training emphasis */}
        <Card className="shadow-card max-w-2xl mx-auto mt-12 bg-accent/10 border-accent/20">
          <CardContent className="p-6 text-center">
            <p className="text-accent font-medium">
              💡 Onthoud: <strong>Training & nazorg standaard inbegrepen</strong> bij alle GovGPT-pakketten
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};