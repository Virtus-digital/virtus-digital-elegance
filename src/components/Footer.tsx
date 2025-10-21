import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  const services = [
    "Digital Advertising",
    "Social Media Management",
    "Brand Strategy",
    "Web Development",
    "SEO & Content",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0a0e17] border-t border-blue-500/20">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent mb-3">
                Virtus Digital
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming visions into digital reality with creativity, precision, and innovation.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-primary/10 border border-blue-500/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-primary/10 border border-blue-500/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-primary/10 border border-blue-500/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="X (Twitter)"
              >
                <svg className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="group flex items-center text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    <span className="text-sm">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:hello@virtusdigital.com" className="text-sm hover:underline">
                  hello@virtusdigital.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 group hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+1234567890" className="text-sm hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm">
                  123 Digital Avenue<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Virtus Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
