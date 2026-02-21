import { Sparkles, Droplet, Eraser, Scissors, Shirt } from 'lucide-react';
import { services } from '../../content/siteContent';

const icons = [Sparkles, Droplet, Eraser, Scissors, Shirt];

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive garment care solutions for all your laundry and dry cleaning needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-warm transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
