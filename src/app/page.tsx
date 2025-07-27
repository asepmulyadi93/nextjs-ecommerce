import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeHeroSection from "@/components/HomeHeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HomeHeroSection />
      </main>
      <Footer />
    </div>
  );
}
