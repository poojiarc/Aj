import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Service Not Found</h1>
          <Button variant="gold" asChild>
            <Link to="/services"><ArrowLeft className="w-4 h-4" /> Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Button variant="gold-outline" asChild className="mb-8">
              <Link to="/services"><ArrowLeft className="w-4 h-4" /> Back to Services</Link>
            </Button>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ScrollReveal>
              <div className="rounded-xl overflow-hidden border border-border/50 glow-gold">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <span className="text-primary text-sm font-medium tracking-widest uppercase">{service.category}</span>
                <h1 className="font-display text-3xl md:text-5xl text-foreground mt-2 mb-4">
                  <span className="text-gradient-gold">{service.title}</span>
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.fullDesc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl text-foreground mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button variant="hero" className="mt-8" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
