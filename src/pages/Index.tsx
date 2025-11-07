import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onScrollToDemo={scrollToDemo} />
      <div ref={demoRef}>
        <DemoSection />
      </div>
      <BenefitsSection />
      <AboutSection />
    </div>
  );
};

export default Index;
