import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmailCapture } from "./EmailCapture";
import { Users, Clock, Star } from "lucide-react";

export const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Wil je GovGPT inzetten in <span className="text-accent">jouw organisatie</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schrijf je vrijblijvend in en ontvang als eerste toegang.
          </p>
        </div>

        <Card className="shadow-card max-w-2xl mx-auto bg-accent/5 border-accent/20">
          <CardContent className="p-8 text-center">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-3">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <p className="text-sm font-medium text-card-foreground">Wachtlijst</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-card-foreground">Intensieve begeleiding</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-3">
                  <Clock className="h-6 w-6 text-secondary-foreground" />
                </div>
                <p className="text-sm font-medium text-card-foreground">Early adopters</p>
              </div>
            </div>

            <div className="mb-6">
              <EmailCapture variant="section" placeholder="je.naam@organisatie.nl" />
            </div>
            
            <p className="text-accent font-medium">
              💡 Exclusieve toegang voor pilotpartners
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};