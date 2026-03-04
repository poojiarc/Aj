import { Check, Award, Shield, Clock, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import logo from "@/assets/logo.jpg";

const whyChooseUs = [
  "100% branded materials – from plywood to fittings",
  "15-year warranty on plywood",
  "Superior quality and lasting finish",
  "Fully customized wooden interiors",
  "Smart space and storage-focused designs",
  "3D design approval before execution",
  "Transparent pricing and clear communication",
  "Dedicated project resource from start to handover",
  "On-time delivery with 30-day handover*",
  "5 years of free service support",
];

const About = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <img src={logo} alt="AJ Interiors" className="h-20 mx-auto mb-6 rounded-lg" />
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                About <span className="text-gradient-gold">AJ Interiors</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are an experienced interior design and execution team focused on creating well-crafted, custom wooden interiors and complete home interior solutions for everyday living. With 15+ years and 300+ completed projects, we create interiors that look beautiful and feel easy to live in.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through careful planning, quality materials, fair pricing, and smooth collaboration, we bring spaces to life that are practical, lasting, and quietly become part of your story.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Heart, value: "300+", label: "Projects Completed" },
              { icon: Shield, value: "100%", label: "Branded Materials" },
              { icon: Clock, value: "5 Yrs", label: "Free Support" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center bg-card rounded-xl p-6 border border-border/50 glitter-border">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient-gold font-display">{stat.value}</div>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Why Choose Us</span>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-8">
                  Why Homeowners <span className="text-gradient-gold">Trust Us</span>
                </h2>
                <ul className="space-y-4">
                  {whyChooseUs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-card rounded-xl p-8 border border-border/50 glitter-border flex flex-col justify-center">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Promise</span>
                <h2 className="font-display text-3xl text-foreground mt-4 mb-6">
                  <span className="text-gradient-gold">Our Promise</span> to You
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-elegant">
                  Designed with care, crafted with quality, and priced honestly—so your home feels right from day one.
                </p>

                <div className="section-divider my-6" />

                <h3 className="font-display text-xl text-foreground mb-4">Our Services Include</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  {[
                    "Kitchen Interiors", "Office & Commercial Interiors",
                    "Wardrobes", "False Ceiling Works",
                    "Living Room Interiors", "Painting Works",
                    "Bedroom Interiors", "Custom Woodwork & Carpentry",
                    "TV Units", "Flooring Works",
                  ].map((s) => (
                    <span key={s} className="flex items-center gap-2">
                      <span className="text-primary">✦</span> {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
