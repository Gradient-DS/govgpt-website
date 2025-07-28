import { Separator } from "@/components/ui/separator";
import { Github, Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">GovGPT</h3>
            <p className="text-muted-foreground mb-4">
              Veilige, soevereine AI-oplossingen voor de Nederlandse publieke sector.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 info@govgpt.nl</p>
              <p>📞 +31 6 16011582</p>
              <p>🏢 LinkedIn: @govgptofficial</p>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Partners</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                UbiOps - Infrastructure
              </li>
              <li className="text-muted-foreground">
                Gradient Data Science
              </li>
            </ul>
          </div>

          {/* Legal & compliance */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Legal & Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Statement
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Toegankelijkheid
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Contactgegevens beschikbaar
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>© 2024 GovGPT. Alle rechten voorbehouden.</p>
          </div>
          <div className="flex items-center gap-2">
            <span>🇳🇱</span>
            <span>Proudly made in the Netherlands</span>
          </div>
        </div>
      </div>
    </footer>
  );
};