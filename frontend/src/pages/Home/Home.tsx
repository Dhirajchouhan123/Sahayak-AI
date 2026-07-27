import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Workspace from "@/components/workspace/Workspace";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* AI Workspace */}
      <Workspace />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

       {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;