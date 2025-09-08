import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/layout/HeroSection";
import ValueSection from "@/components/layout/ValueSection";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/chat/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <Navigation />
      <HeroSection />
      <ValueSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
