import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../../content/siteContent';

export function ContactSection() {
  return (
    <section id="contact">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us for professional garment care services in Coimbatore
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
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

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">{businessInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {businessInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-8 border border-accent/20 flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Ready to Experience Premium Care?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {businessInfo.servicesNote}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  <MessageCircle size={18} />
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
