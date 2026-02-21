import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../../content/siteContent';

export function ContactSection() {
  const sanitizedPhone = businessInfo.phone.replace(/\s+/g, '');

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Contact us for professional garment care services in Coimbatore
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
                    <a
                      href={`tel:${sanitizedPhone}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Location</h3>
                    <p className="text-muted-foreground">{businessInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {businessInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-10 border border-primary/20 flex flex-col justify-center shadow-warm">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-foreground">Ready to Experience Premium Care?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {businessInfo.servicesNote}
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${sanitizedPhone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-warm hover:shadow-xl"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-all shadow-elegant hover:shadow-xl"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
