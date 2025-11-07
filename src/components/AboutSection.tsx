import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-cacao-light via-cacao to-cacao-light">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4 animate-fade-in">
            Kebweb
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="space-y-6 mb-10 text-lg text-cream-dark animate-fade-in [animation-delay:200ms]">
          <p className="leading-relaxed">
            Nous créons des expériences numériques sur mesure pour les marques qui veulent marquer les esprits.
          </p>
          <p className="leading-relaxed">
            Sites web, outils de gestion, prototypes 3D — notre seule limite, c'est votre imagination.
          </p>
        </div>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:400ms] group"
          onClick={() => window.location.href = "mailto:contact@kebweb.com"}
        >
          <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Parlons de votre projet
        </Button>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2025 Kebweb. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
