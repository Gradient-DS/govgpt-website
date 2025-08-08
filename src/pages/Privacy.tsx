import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Back button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar homepage
          </Link>
        </div>

        {/* Privacy Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Privacy Statement
            </h1>
            <p className="text-xl text-muted-foreground">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>
          </div>

          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Introductie</h2>
                <p className="text-muted-foreground mb-6">
                  GovGPT ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen van uw persoonlijke gegevens. 
                  Deze privacy statement legt uit hoe wij uw gegevens verzamelen, gebruiken en beschermen wanneer u onze diensten gebruikt.
                </p>

                <h2 className="text-2xl font-semibold text-primary mb-4">2. Wie zijn wij?</h2>
                <p className="text-muted-foreground mb-6">
                  GovGPT is een veilige, soevereine AI-oplossing specifiek ontwikkeld voor de Nederlandse publieke sector. 
                  Wij zijn gevestigd in Nederland en voldoen aan alle Nederlandse en Europese privacywetgeving.
                </p>

                <h2 className="text-2xl font-semibold text-primary mb-4">3. Welke gegevens verzamelen wij?</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">3.1 Contactgegevens</h3>
                    <p className="text-muted-foreground">
                      Wanneer u contact met ons opneemt of zich aanmeldt voor onze diensten, kunnen wij de volgende gegevens verzamelen:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Naam en contactgegevens</li>
                      <li>Organisatie-informatie</li>
                      <li>Communicatiegeschiedenis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">3.2 Gebruiksgegevens</h3>
                    <p className="text-muted-foreground">
                      Bij gebruik van onze diensten kunnen wij anonieme gebruiksstatistieken verzamelen om onze diensten te verbeteren.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold text-primary mb-4">4. Hoe gebruiken wij uw gegevens?</h2>
                <p className="text-muted-foreground mb-6">
                  Wij gebruiken uw gegevens uitsluitend voor:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                  <li>Het leveren van onze diensten</li>
                  <li>Het onderhouden van contact met u</li>
                  <li>Het verbeteren van onze diensten</li>
                  <li>Het voldoen aan wettelijke verplichtingen</li>
                </ul>

                <h2 className="text-2xl font-semibold text-primary mb-4">5. Gegevensopslag en -beveiliging</h2>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    <strong>100% Nederlandse/EU opslag:</strong> Alle gegevens worden opgeslagen binnen de Europese Unie, 
                    voornamelijk in Nederland, in overeenstemming met de AVG/GDPR.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Beveiliging:</strong> Wij implementeren strenge beveiligingsmaatregelen, inclusief:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Versleuteling van gegevens in rust en tijdens transport</li>
                    <li>Toegangscontrole en authenticatie</li>
                    <li>Regelmatige beveiligingsaudits</li>
                    <li>Compliance met ISO 27001, EU AI Act en andere relevante standaarden</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-semibold text-primary mb-4">6. Uw rechten</h2>
                <p className="text-muted-foreground mb-6">
                  U heeft de volgende rechten met betrekking tot uw gegevens:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                  <li>Recht op inzage in uw gegevens</li>
                  <li>Recht op rectificatie van onjuiste gegevens</li>
                  <li>Recht op verwijdering van uw gegevens</li>
                  <li>Recht op beperking van de verwerking</li>
                  <li>Recht op dataportabiliteit</li>
                  <li>Recht om bezwaar te maken tegen verwerking</li>
                </ul>

                <h2 className="text-2xl font-semibold text-primary mb-4">7. Gegevensdeling</h2>
                <p className="text-muted-foreground mb-6">
                  Wij delen uw gegevens niet met derden, behalve:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
                  <li>Wanneer dit wettelijk verplicht is</li>
                  <li>Met uw uitdrukkelijke toestemming</li>
                  <li>Met onze betrouwbare partners (UbiOps, Gradient Data Science) voor technische ondersteuning</li>
                </ul>

                <h2 className="text-2xl font-semibold text-primary mb-4">8. Bewaartermijn</h2>
                <p className="text-muted-foreground mb-6">
                  Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, 
                  of zoals vereist door wetgeving. Over het algemeen bewaren wij gegevens maximaal 7 jaar na het einde van onze dienstverlening.
                </p>

                <h2 className="text-2xl font-semibold text-primary mb-4">9. Cookies en tracking</h2>
                <p className="text-muted-foreground mb-6">
                  Onze website gebruikt alleen essentiële cookies voor de werking van de site. 
                  Wij gebruiken geen tracking cookies of analytics zonder uw toestemming.
                </p>

                <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact</h2>
                <p className="text-muted-foreground mb-6">
                  Voor vragen over deze privacy statement of uw gegevens kunt u contact met ons opnemen:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-muted-foreground">
                    <strong>GovGPT</strong><br />
                    Email: <a href="mailto:info@govgpt.nl" className="text-primary hover:underline">info@govgpt.nl</a><br />
                    Telefoon: <a href="tel:+31612345678" className="text-primary hover:underline">+31 6 12345678</a><br />
                    LinkedIn: <a href="https://www.linkedin.com/company/govgptofficial" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn GovGPT</a>
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-primary mb-4">11. Wijzigingen</h2>
                <p className="text-muted-foreground mb-6">
                  Wij kunnen deze privacy statement van tijd tot tijd bijwerken. Belangrijke wijzigingen zullen aan u worden gecommuniceerd 
                  via email of via een melding op onze website.
                </p>

                <div className="border-t pt-6 mt-8">
                  <p className="text-sm text-muted-foreground">
                    Deze privacy statement is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR) 
                    en andere toepasselijke Nederlandse en Europese privacywetgeving.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}; 