import { testimonials } from "@/data/products";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                    {t.avatar}
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold text-foreground">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
