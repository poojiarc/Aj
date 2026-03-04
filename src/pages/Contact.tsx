import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ConsultationModal from "@/components/ConsultationModal";

const Contact = () => {
  const [showConsultation, setShowConsultation] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}.\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(`https://wa.me/917989259900?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Get In Touch</span>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mt-4">
                Contact <span className="text-gradient-gold">Us</span>
              </h1>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Phone,
                title: "Call Us",
                lines: ["79892 59900", "91820 43953"],
                href: "tel:+917989259900",
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["poojimedabayina@gmail.com"],
                href: "mailto:poojimedabayina@gmail.com",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                lines: ["Plot No.01, Om Sai Nagar Road No. 12", "Nagaram, Keesara, Malkajgiri-500083"],
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                lines: ["Chat with us instantly"],
                href: "https://wa.me/917989259900",
              },
            ].map((info, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 border border-border/50 text-center glitter-border h-full">
                  <info.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-display text-lg text-foreground mb-2">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://www.facebook.com/share/1KmVaNSYYQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-accent transition-all text-sm">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href="https://www.instagram.com/ajinteriors.in?igsh=aHlmYzR4YXhwbGVu" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-accent transition-all text-sm">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Send Message Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Send Us a <span className="text-gradient-gold">Message</span>
              </h2>
              <p className="text-muted-foreground mt-2">We'll get back to you as soon as possible</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSendMessage} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <Button variant="gold" className="w-full" type="submit">
                <Send className="w-4 h-4" /> Send via WhatsApp
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Book Consultation CTA */}
      <section className="py-16 md:py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Book a <span className="text-gradient-gold">Free Consultation</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Schedule a personalized session with our design experts to discuss your dream interiors.
            </p>
            <Button variant="hero" onClick={() => setShowConsultation(true)}>
              Book Free Consultation
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <ConsultationModal open={showConsultation} onClose={() => setShowConsultation(false)} />
    </div>
  );
};

export default Contact;
