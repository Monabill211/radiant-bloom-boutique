const BeautyQuote = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{
      background: "linear-gradient(135deg, hsl(350 50% 92%) 0%, hsl(40 55% 90%) 100%)",
    }}>
      {/* Floating decorations */}
      <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-primary/10 animate-float" />
      <div className="absolute left-10 bottom-10 h-20 w-20 rounded-full bg-accent/15 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute right-1/4 bottom-1/4 h-16 w-16 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Beauty Philosophy</p>
        <blockquote className="mx-auto max-w-2xl font-serif text-2xl font-medium italic leading-relaxed text-foreground md:text-4xl">
          "Beauty begins the moment you decide to be yourself."
        </blockquote>
        <p className="mt-6 text-muted-foreground tracking-wide">— Coco Chanel</p>
      </div>
    </section>
  );
};

export default BeautyQuote;
