import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import QuoteForm from "@/components/QuoteForm";
import CompaniesSection from "@/components/CompaniesSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <QuoteForm />
        <CompaniesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
