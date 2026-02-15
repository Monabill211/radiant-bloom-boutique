import { collections } from "@/data/products";

const Collections = () => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">Our Collections</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Curated for You
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {collections.map((col) => (
            <a
              key={col.slug}
              href="#products"
              className="group relative block h-80 overflow-hidden rounded-2xl md:h-96"
            >
              <img
                src={col.image}
                alt={col.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">
                  {col.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">{col.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
