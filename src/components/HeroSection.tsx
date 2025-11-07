import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToDemo: () => void;
}

const HeroSection = ({ onScrollToDemo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cacao via-cacao-light to-cacao" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-cream mb-6 animate-fade-in">
          Faites goûter votre chocolat en 3D.
        </h1>
        
        <p className="text-xl md:text-2xl text-cream-dark mb-10 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
          Tablettes interactives, emballages animés, et expériences e-commerce immersives.
        </p>
        
        <Button 
          onClick={onScrollToDemo}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:400ms]"
        >
          Voir la tablette en 3D
        </Button>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cream-dark" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
