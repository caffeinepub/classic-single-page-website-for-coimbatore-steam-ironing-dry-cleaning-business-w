import { SiX, SiFacebook, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-3">Premium Laundry Care</h3>
            <p className="text-sm text-muted-foreground">
              Professional steam ironing, dry cleaning, and garment care services in Coimbatore, Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Services
              </a>
              <a
                href="#why-choose-us"
                onClick={(e) => handleNavClick(e, '#why-choose-us')}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, '#gallery')}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
            © {currentYear}. Built with <Heart size={14} className="text-accent fill-accent" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
