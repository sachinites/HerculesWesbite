import Navigation from "./_components/Navigation.tsx";
import Hero from "./_components/Hero.tsx";
import TelegramBanner from "./_components/TelegramBanner.tsx";
import Roadmap from "./_components/Roadmap.tsx";
import VideoSlider from "./_components/VideoSlider.tsx";
import InfoFlipCards from "./_components/InfoFlipCards.tsx";
import CourseCards from "./_components/CourseCards.tsx";
import FlipCards from "./_components/FlipCards.tsx";
import CompanyBanner from "./_components/CompanyBanner.tsx";
import InstructorProfile from "./_components/InstructorProfile.tsx";
import ReviewSlider from "./_components/ReviewSlider.tsx";
import Footer from "./_components/Footer.tsx";
import WhatsAppWidget from "./_components/WhatsAppWidget.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Spacer for fixed navigation */}
      <div className="h-16" />
      
      <main>
        <Hero />
        <TelegramBanner />
        <InfoFlipCards />
        <Roadmap />
        <VideoSlider />
        <CourseCards />
        <FlipCards />
        <CompanyBanner />
        <InstructorProfile />
        <ReviewSlider />
      </main>
      
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
