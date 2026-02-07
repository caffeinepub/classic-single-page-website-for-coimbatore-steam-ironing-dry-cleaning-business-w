import { Sparkles, Droplet, Eraser, Scissors, Shirt } from 'lucide-react';
import { services } from '../../content/siteContent';

const icons = [Sparkles, Droplet, Eraser, Scissors, Shirt];

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive garment care solutions for all your laundry and dry cleaning needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-elegant transition-shadow border border-border"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
