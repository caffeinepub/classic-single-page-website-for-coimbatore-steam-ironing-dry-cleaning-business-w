import { Shield, Award, DollarSign, Heart, Clock, Eye } from 'lucide-react';
import { whyChooseUs } from '../../content/siteContent';

const icons = [Shield, Award, DollarSign, Heart, Clock, Eye];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by Coimbatore families for quality, care, and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.title}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
