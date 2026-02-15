import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAdd = (product: (typeof products)[0]) => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    toast({ title: "Added to cart", description: `${product.name} has been added.` });
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">Our Products</p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Featured Collection
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-border bg-background p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-4"
            >
              <div className="relative mb-3 overflow-hidden rounded-xl aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{product.category}</p>
                <h3 className="font-serif text-sm font-semibold text-foreground md:text-base">{product.name}</h3>
                <p className="text-lg font-bold text-primary">${product.price}</p>
              </div>
              <Button
                onClick={() => handleAdd(product)}
                className="mt-3 w-full rounded-full text-xs md:text-sm"
                size="sm"
              >
                <ShoppingBag className="mr-1 h-3.5 w-3.5" /> Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
