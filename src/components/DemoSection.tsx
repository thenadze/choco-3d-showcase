import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const DemoSection = () => {
  const viewerRef = useRef<any>(null);
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  useEffect(() => {
    // Load model-viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleUnwrap = () => {
    const viewerContainer = viewerRef.current;
    if (viewerContainer) {
      const viewer = viewerContainer.querySelector('model-viewer') as any;
      if (viewer) {
        viewer.animationName = "Unwrap";
        viewer.play();
        setIsUnwrapped(true);
      }
    }
  };

  return (
    <section id="demo-section" className="py-20 px-6 bg-cacao-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Découvrez notre prototype interactif
          </h2>
          <p className="text-xl text-cream-dark italic">
            "J'ai une tablette de chocolat que tu n'as pas."
          </p>
        </div>

        <div className="choco-3d-viewer max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-2xl">
            <div 
              ref={viewerRef}
              dangerouslySetInnerHTML={{
                __html: `<model-viewer
                  src="/models/tablette.glb"
                  camera-controls
                  auto-rotate
                  autoplay
                  shadow-intensity="1"
                  style="width:100%;height:500px;border-radius:1rem;background:hsl(var(--muted));"
                ></model-viewer>`
              }}
            />
            
            <div className="text-center mt-6">
              <Button
                onClick={handleUnwrap}
                disabled={isUnwrapped}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUnwrapped ? "Emballage retiré" : "Retirer l'emballage"}
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <p className="text-sm">
              Utilisez votre souris pour faire tourner la tablette • Faites défiler pour zoomer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
