import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import sKitchen from "@/assets/service-kitchen.jpg";
import sLiving from "@/assets/service-living.jpg";
import sBedroom from "@/assets/service-bedroom.jpg";

const portfolioItems = [
  { image: p1, title: "Luxury Dining Room", category: "Dining" },
  { image: hero1, title: "Modern Living Room", category: "Living Room" },
  { image: p2, title: "Premium Bathroom", category: "Bathroom" },
  { image: sKitchen, title: "Modular Kitchen", category: "Kitchen" },
  { image: p3, title: "Elegant Foyer", category: "Entrance" },
  { image: hero2, title: "Designer Bedroom", category: "Bedroom" },
  { image: p4, title: "False Ceiling Design", category: "Ceiling" },
  { image: sLiving, title: "Contemporary Living", category: "Living Room" },
  { image: p5, title: "Walk-in Closet", category: "Wardrobe" },
  { image: hero3, title: "Luxury Kitchen", category: "Kitchen" },
  { image: p6, title: "Executive Study", category: "Study" },
  { image: sBedroom, title: "Master Bedroom", category: "Bedroom" },
];

const Portfolio = () => {
  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Work</span>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mt-4">
                Our <span className="text-gradient-gold">Portfolio</span>
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Explore our recent projects and see how we transform spaces into extraordinary environments
              </p>
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl border border-border/30 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <div>
                    <span className="text-xs text-primary">{item.category}</span>
                    <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
