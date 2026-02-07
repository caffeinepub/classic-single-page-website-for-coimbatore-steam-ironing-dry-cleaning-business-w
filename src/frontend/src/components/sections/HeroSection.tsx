import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../content/siteContent';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-steam-iron.dim_1600x900.jpg"
          alt="Professional steam ironing service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Premium Steam Ironing & Dry Cleaning in Coimbatore
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Expert garment care services including steam ironing, dry cleaning, stain removal, darning, and traditional saree pleating. Serving Coimbatore, Tamil Nadu with professional fabric care you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-elegant"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${businessInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-elegant"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
