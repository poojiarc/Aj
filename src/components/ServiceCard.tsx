import { Link } from "react-router-dom";
import { Service } from "@/data/services";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${service.id}`}
        className="group block relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
            <p className="text-sm text-foreground/90">{service.shortDesc}</p>
          </div>
          {/* Glitter border on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-primary/40 rounded-xl" />
        </div>
        <div className="p-5">
          <span className="text-xs text-primary/80 font-medium">{service.category}</span>
          <h3 className="font-display text-lg text-foreground mt-1 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
