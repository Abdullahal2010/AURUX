import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuthSection from "@/components/AuthSection";
import ServicesSection from "@/components/ServicesSection";
import ToolsSection from "@/components/ToolsSection";
import ReviewsSection from "@/components/ReviewsSection";
import HireSection from "@/components/HireSection";
import AskSection from "@/components/AskSection";
import AboutSection from "@/components/AboutSection";
import LandingFooter from "@/components/LandingFooter";
import RobotMascot from "@/components/RobotMascot";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AuthSection />
      <ServicesSection />
      <ToolsSection />
      <ReviewsSection />
      <HireSection />
      <AskSection />
      <AboutSection />
      <LandingFooter />
      <RobotMascot />
    </>
  );
}
