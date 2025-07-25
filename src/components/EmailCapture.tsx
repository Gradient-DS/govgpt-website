import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface EmailCaptureProps {
  variant?: "hero" | "section";
  placeholder?: string;
}

export const EmailCapture = ({ variant = "section", placeholder = "Voer je e-mailadres in" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Ongeldig e-mailadres",
        description: "Voer een geldig e-mailadres in.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Aanmelding succesvol!",
      description: "Je bent toegevoegd aan de wachtlijst voor GovGPT.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 ${isHero ? "flex-col sm:flex-row" : "flex-row"} max-w-md mx-auto`}>
      <div className="flex-1">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${isHero ? "h-12 text-base" : "h-10"} border-2 focus:border-primary`}
          required
        />
      </div>
      <Button
        type="submit"
        variant={isHero ? "hero" : "cta"}
        size={isHero ? "lg" : "default"}
        disabled={isSubmitting}
        className={isHero ? "h-12 px-8" : ""}
      >
        <Mail className="h-4 w-4" />
        {isSubmitting ? "Aanmelden..." : "Aanmelden"}
      </Button>
    </form>
  );
};