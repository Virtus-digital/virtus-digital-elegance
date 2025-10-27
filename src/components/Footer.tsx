import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const quickLinks = [
    { nameKey: "nav.home", path: "/" },
    { nameKey: "nav.services", path: "/services" },
    { nameKey: "nav.portfolio", path: "/portfolio" },
    { nameKey: "nav.about", path: "/about" },
    { nameKey: "nav.blog", path: "/blog" },
  ];

  const services = [
    "footer.service1",
    "footer.service2",
    "footer.service3",
    "footer.service4",
    "footer.service5",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0a0e17] border-t border-blue-500/20">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent mb-3">
                Virtus Digital
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3 justify-center md:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-primary/10 border border-blue-500/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-primary/10 border border-blue-500/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-primary/10 border border-blue-500/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="X (Twitter)"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">{t('footer.quick-links')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center justify-center md:justify-start text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    <span className="text-xs sm:text-sm">{t(link.nameKey)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">{t('footer.services')}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="group flex items-center justify-center md:justify-start text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    <span className="text-xs sm:text-sm">{t(service)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">{t('footer.contact-us')}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 group hover:text-primary transition-colors justify-center md:justify-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:hello@virtusdigital.com" className="text-xs sm:text-sm hover:underline">
                  hello@virtusdigital.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 group hover:text-primary transition-colors justify-center md:justify-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+1234567890" className="text-xs sm:text-sm hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 justify-center md:justify-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-xs sm:text-sm">
                  123 Digital Avenue<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              {t('footer.rights')}
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-primary text-xs sm:text-sm transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-primary text-xs sm:text-sm transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
