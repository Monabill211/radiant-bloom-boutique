import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import BeautyQuote from "@/components/BeautyQuote";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CartDrawer />
      <Hero />
      <Collections />
      <Products />
      <BeautyQuote />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
