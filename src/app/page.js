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

// This page is fully client-interactive (chat, forms, scroll effects) and
// has no per-request data to pre-render, so there's nothing to gain from
// static generation at build time — and it's what was hanging the build.
// Rendering on-demand instead sidesteps that entirely.
export const dynamic = "force-dynamic";

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
