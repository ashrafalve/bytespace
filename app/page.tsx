import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedBrands from "./components/TrustedBrands";
import CoursesSection from "./components/CoursesSection";
import GrowthSection from "./components/GrowthSection";
import CreatorCTA from "./components/CreatorCTA";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Section 1: Hero */}
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>

      {/* Section 2: Trusted Brands */}
      <TrustedBrands />

      {/* Section 3: Courses + Learning Paths */}
      <CoursesSection />

      {/* Section 4: Growth / Professional Path + Manage Courses */}
      <GrowthSection />

      {/* Section 5: Creator CTA */}
      <CreatorCTA />

      {/* Section 6: Testimonials */}
      <TestimonialsSection />

      {/* Section 7: Footer */}
      <Footer />
    </main>
  );
}
