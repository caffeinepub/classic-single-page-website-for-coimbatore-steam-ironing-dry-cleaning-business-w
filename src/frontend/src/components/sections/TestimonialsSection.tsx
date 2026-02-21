import { Quote } from 'lucide-react';
import { testimonials } from '../../content/siteContent';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trusted by local families and businesses across Coimbatore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border relative hover:shadow-elegant transition-shadow duration-300"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={48} />
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-medium text-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
