import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Home, Info, Image, Wrench, BedDouble, Sofa, DoorOpen, Lamp, Briefcase, ChefHat } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AJ Interiors" className="h-12 rounded" />
              <h3 className="font-display text-2xl text-gradient-gold">AJ Interiors</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Design Your Dream. Premium interiors crafted with care, quality, and honest pricing.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/1KmVaNSYYQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/ajinteriors.in?igsh=aHlmYzR4YXhwbGVu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home", icon: Home },
                { to: "/about", label: "About Us", icon: Info },
                { to: "/portfolio", label: "Portfolio", icon: Image },
                { to: "/contact", label: "Contact", icon: Phone },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="w-3.5 h-3.5 text-primary/70" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Modular Kitchens", icon: ChefHat },
                { label: "Bedroom Interiors", icon: BedDouble },
                { label: "Living Room", icon: Sofa },
                { label: "Wardrobes", icon: DoorOpen },
                { label: "Pooja Rooms", icon: Lamp },
                { label: "Home Office", icon: Briefcase },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <s.icon className="w-3.5 h-3.5 text-primary/70" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>+91 79892 59900 | +91 91820 43953</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>poojimedabayina@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Plot No.01, Om Sai Nagar Road No. 12, Satyanarayana Colony, Rampally Road, Nagaram, Keesara, Malkajgiri-500083</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider my-8" />

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-destructive">❤</span> by{" "}
            <a
              href="https://staffarc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              StaffArc
            </a>
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2026 AJ Interiors – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
