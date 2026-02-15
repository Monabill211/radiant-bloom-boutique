import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.classList.add("animate-fade-up");
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(30 30% 98%) 0%, hsl(350 50% 92%) 50%, hsl(40 55% 90%) 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 animate-float" />
      <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "2s" }} />

      <div ref={ref} className="container relative z-10 mx-auto px-4 text-center opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Premium Beauty Collection
        </p>
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-7xl">
          Reveal Your
          <br />
          <span className="italic text-primary">Natural Glow</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-base text-muted-foreground md:text-lg">
          Luxurious, carefully crafted cosmetics that celebrate your unique beauty. Made with the finest natural ingredients.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="rounded-full px-10 text-sm font-semibold tracking-wide">
            <a href="#products">Shop Now</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10 text-sm font-semibold tracking-wide border-foreground/20">
            <a href="#collections">Explore Collections</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
