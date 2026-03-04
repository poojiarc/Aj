import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentHero]}
              alt="Luxury Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-gradient-gold animate-glow-pulse">Transform</span>{" "}
              <span className="text-foreground">Your Space Into a</span>{" "}
              <span className="text-gradient-gold">Dream Home</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg">
              We create stunning interiors that reflect your personality and elevate your lifestyle with timeless elegance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <Link to="/portfolio">
                  Explore Our Work <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="gold-outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50">
                <Star className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-2xl font-bold text-foreground">300+</span>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-xl px-5 py-3 border border-border/50">
                <Star className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-2xl font-bold text-foreground">15+</span>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-primary text-sm font-medium tracking-widest uppercase">About Us</span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
                Quality Interiors, <span className="text-gradient-gold">Honestly Delivered</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are an experienced interior design and execution team focused on creating well-crafted, custom wooden interiors and complete home interior solutions for everyday living. With 15+ years and 300+ completed projects, we create interiors that look beautiful and feel easy to live in.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="bg-card rounded-xl p-6 border border-border/50 glitter-border">
                  <h3 className="font-display text-xl text-primary mb-3">Why Choose Us</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li>✦ 100% branded materials</li>
                    <li>✦ 15-year warranty on plywood</li>
                    <li>✦ 3D design approval before execution</li>
                    <li>✦ On-time delivery with 30-day handover</li>
                    <li>✦ 5 years of free service support</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border/50 glitter-border">
                  <h3 className="font-display text-xl text-primary mb-3">Our Promise</h3>
                  <p className="text-sm text-muted-foreground text-left leading-relaxed">
                    Designed with care, crafted with quality, and priced honestly—so your home feels right from day one. Dedicated project resource from start to handover.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Services</span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
                Our Interior Design <span className="text-gradient-gold">Services</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Transform your space with our comprehensive interior design solutions. From concept to completion, we bring your vision to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/services">View All Services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 md:py-28 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Get In Touch</span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4 mb-6">
                Ready to <span className="text-gradient-gold">Design Your Dream?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your vision and create something extraordinary together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    <Phone className="w-4 h-4" /> Contact Us
                  </Link>
                </Button>
                <Button variant="gold-outline" size="lg" asChild>
                  <a href="https://wa.me/917989259900" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
