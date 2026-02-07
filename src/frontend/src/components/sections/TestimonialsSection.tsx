import { Quote } from 'lucide-react';
import { testimonials } from '../../content/siteContent';

export function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by local families and businesses across Coimbatore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-sm border border-border relative"
            >
              <Quote className="text-accent/20 absolute top-4 right-4" size={40} />
              <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
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
