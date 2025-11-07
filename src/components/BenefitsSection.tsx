import { Card, CardContent } from "@/components/ui/card";
import { Eye, Sparkles, ShoppingCart } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Attirer l'attention",
    description: "Captivez votre audience sur un stand avec une expérience visuelle unique et mémorable.",
  },
  {
    icon: Sparkles,
    title: "Montrer le savoir-faire",
    description: "Présentez votre artisanat de manière ludique et moderne qui valorise votre expertise.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce immersif",
    description: "Préparez le futur de la vente en ligne avec des expériences d'achat interactives.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-cacao">
      <div className="container mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream text-center mb-16">
          Pourquoi cette démonstration ?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
