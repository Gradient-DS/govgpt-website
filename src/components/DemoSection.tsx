import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink, Zap, Users, Shield } from "lucide-react";

export const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ervaar GovGPT <span className="text-accent">in actie</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card overflow-hidden">
            <CardContent className="p-0">
              {/* Video placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4 hover-scale cursor-pointer">
                    <Play className="h-10 w-10 text-primary-foreground ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    GovGPT Demo Video
                  </h3>
                  <p className="text-muted-foreground">
                    2 minuten: Interface, features en beveiligingsmogelijkheden
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};