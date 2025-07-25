import { Separator } from "@/components/ui/separator";
import { Github, Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">GovGPT</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Soevereine, veilige en transparante AI-oplossing speciaal 
              ontwikkeld voor de Nederlandse publieke sector.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/govgpt" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@govgpt.nl" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/govgpt" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#demo" className="hover:text-primary transition-colors">Demo</a></li>
              <li><a href="#security" className="hover:text-primary transition-colors">Beveiliging</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Prijzen</a></li>
              <li><a href="#documentation" className="hover:text-primary transition-colors">Documentatie</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Juridisch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacyverklaring</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Algemene voorwaarden</a></li>
              <li><a href="#compliance" className="hover:text-primary transition-colors">Compliance</a></li>
              <li><a href="#gdpr" className="hover:text-primary transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>© 2024 GovGPT. Alle rechten voorbehouden.</p>
            <p className="mt-1">KvK: 12345678 • BTW: NL123456789B01</p>
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