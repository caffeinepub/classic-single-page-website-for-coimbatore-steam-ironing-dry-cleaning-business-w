import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
