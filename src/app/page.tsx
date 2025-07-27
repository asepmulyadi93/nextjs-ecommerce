import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeHeroSection from "@/components/HomeHeroSection";
import CategoryAndProductsSection from "@/components/CategoryAndProductsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeHeroSection />
        {/* <CategoryAndProductsSection /> */}
        <CategoryAndProductsSection />
      </main>
      <Footer />
    </div>
  );
}
