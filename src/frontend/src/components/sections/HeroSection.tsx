import { Phone, MessageCircle, Sparkles, Award, Clock } from 'lucide-react';
import { businessInfo, heroContent } from '../../content/siteContent';

export function HeroSection() {
  const sanitizedPhone = businessInfo.phone.replace(/\s+/g, '');

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-vibrant.dim_1920x1080.png"
          alt="Professional steam ironing and dry cleaning service"
          className="w-full h-full object-cover"
        />
        {/* Blue gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-500/80 to-blue-700/85" />
        {/* Additional subtle pattern overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full mb-6 shadow-elegant">
              <Sparkles className="text-blue-600" size={18} />
              <p className="text-sm md:text-base font-semibold text-blue-600">
                {heroContent.welcomeLine.split('–')[0].trim()}
              </p>
            </div>

            {/* Main Headline with Enhanced Typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-[1.1] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              {heroContent.headline}
            </h1>

            {/* Subtext with Better Contrast */}
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] max-w-2xl">
              {heroContent.subtext}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-10 text-white/90">
              <div className="flex items-center gap-2">
                <Award className="text-white" size={20} />
                <span className="text-sm md:text-base font-medium drop-shadow-md">Expert Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-white" size={20} />
                <span className="text-sm md:text-base font-medium drop-shadow-md">Quick Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-white" size={20} />
                <span className="text-sm md:text-base font-medium drop-shadow-md">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons with Enhanced Styling */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${sanitizedPhone}`}
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-white/95 transition-all shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 min-h-[64px] border-2 border-white/20"
              >
                <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white rounded-2xl font-bold text-lg hover:bg-accent/90 transition-all shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 min-h-[64px] border-2 border-white/20"
              >
                <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                WhatsApp Us
              </a>
            </div>

            {/* Additional Info Badge */}
            <div className="mt-8 inline-block">
              <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-elegant">
                <p className="text-sm md:text-base text-foreground font-medium">
                  📍 Serving Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Steam Iron Image */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <img
                src="/assets/generated/steam-iron.dim_300x300.png"
                alt="Steam iron"
                className="w-64 h-64 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
}
