import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Linkedin } from "lucide-react";

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
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@govgpt.nl" className="hover:text-primary transition-colors">
                  info@govgpt.nl
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+31616011582" className="hover:text-primary transition-colors">
                  +31 6 16011582
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/company/govgptofficial" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn GovGPT
                </a>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Partners</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                UbiOps
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
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Statement
                </a>
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