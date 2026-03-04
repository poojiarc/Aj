import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-gradient-gold mb-4">AJ Interiors</h3>
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
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
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
              {["Modular Kitchens", "Bedroom Interiors", "Living Room", "Wardrobes", "Pooja Rooms", "Home Office"].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s}
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
                <span>79892 59900 | 91820 43953</span>
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
