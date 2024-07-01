import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { SectionForm } from "@/components/SectionForm";
import { SectionGallery } from "@/components/SectionGallery";
import { SectionGift } from "@/components/SectionGift";
import { SectionItinerary } from "@/components/SectionItinerary";
import { SectionOurStory } from "@/components/SectionOurStory";
import { SectionRecommendations } from "@/components/SectionRecommendations";
import { SectionRules } from "@/components/SectionRules";

export default function Home() {
  return (
    <div className="container bg-[#F2F2F2] z-[-20]">
      <NavBar />
      <Hero />
      <SectionOurStory />
      <SectionItinerary />
      <SectionRules />
      <SectionGift />
      <SectionGallery />
      <SectionForm />
      <SectionRecommendations />
      <Footer />
    </div>
  );
}
