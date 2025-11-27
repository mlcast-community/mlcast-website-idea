import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Features />
      <Community />
      <GetStarted />
      <Footer />
    </main>
  );
};

export default Index;
