import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">What We Do</span>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mt-4">
                Our Interior Design <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Transform your space with our comprehensive interior design solutions. From concept to completion, we bring your vision to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
