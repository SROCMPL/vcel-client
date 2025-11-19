import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InvestmentFocus from "@/components/home/InvestmentFocus";
import PortfolioSection from "@/components/home/PortfolioSection";
import TeamSection from "@/components/home/TeamSection";
import ThirdSectionStats from "@/components/home/ThirdSectionStats";



export default function Home() {
  return (
 <>
 <Navbar />
  <Hero
        title="Discipline. Clarity. Partnership."
        subtitle="We partner early and stay long-term, backing founders who create enduring value."
        videoSrc="/hero.mp4"
      />
      <ThirdSectionStats />
      <PortfolioSection />
       <InvestmentFocus />
       <TeamSection />
       <ContactSection />
       <Footer />
 </>
  );
}
