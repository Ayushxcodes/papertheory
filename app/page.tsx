import HeroSection from "@/components/landing/HeroSection";
import LogoSection from "@/components/landing/LogoSection";
import Testimonial from "@/components/landing/Testimonial";
import HowItWorks from "@/components/landing/HowItWorks";
import Comparison from "@/components/landing/Comparison";
import Features from "@/components/landing/Features";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <HowItWorks />
      <Features />
      <Comparison />
      <Testimonial />
      <Footer />
    </>
  );
}
