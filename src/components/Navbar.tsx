import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Check, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TR, GB, IT, RO } from "country-flag-icons/react/3x2";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Dil seçenekleri ve bayrakları
  const languageOptions = [
    { code: 'tr', name: 'Türkçe', flag: TR },
    { code: 'en', name: 'English', flag: GB },
    { code: 'it', name: 'Italiano', flag: IT },
    { code: 'ro', name: 'Română', flag: RO },
  ] as const;

  // Seçili dilin bilgilerini bul
  const currentLanguage = languageOptions.find(lang => lang.code === language) || languageOptions[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isHome = location.pathname === '/';
  const showSolidNav = isScrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolidNav
            ? "bg-[#0b0f19]/95 backdrop-blur-md shadow-lg shadow-primary/20 border-b border-blue-500/30"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 ml-4">
              <Link to="/" aria-label="Virtus Digital Home" className="block">
                <img
                  src="/logo_4.png"
                  alt="Virtus Digital"
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain select-none"
                  draggable={false}
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`text-base font-medium transition-colors relative [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                  isActive('/') 
                    ? 'text-primary after:w-full' 
                    : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/services"
                className={`text-base font-medium transition-colors relative [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                  isActive('/services') 
                    ? 'text-primary after:w-full' 
                    : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
                }`}
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/portfolio"
                className={`text-base font-medium transition-colors relative [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                  isActive('/portfolio') 
                    ? 'text-primary after:w-full' 
                    : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
                }`}
              >
                {t('nav.portfolio')}
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium transition-colors relative [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                  isActive('/about') 
                    ? 'text-primary after:w-full' 
                    : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/blog"
                className={`text-base font-medium transition-colors relative [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                  isActive('/blog') 
                    ? 'text-primary after:w-full' 
                    : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
                }`}
              >
                {t('nav.blog')}
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-medium hover:from-primary/90 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
              >
                {t('nav.contact')}
              </Link>
            </div>
            
            {/* Desktop Language Switcher */}
            <div className="hidden lg:flex flex-shrink-0 mr-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300 text-sm">
                    <currentLanguage.flag className="h-4 w-6" />
                    <span className="uppercase">{language}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.code}
                      onClick={() => setLanguage(option.code)}
                      className="cursor-pointer"
                    >
                      <span className="flex items-center justify-between w-full">
                        <span className="flex items-center gap-2">
                          <option.flag className="h-4 w-6" />
                          {option.name}
                        </span>
                        {language === option.code && <Check className="h-4 w-4 text-primary" />}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-4 mr-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300 text-xs sm:text-sm">
                    <currentLanguage.flag className="h-3 w-4 sm:h-4 sm:w-6" />
                    <span className="uppercase hidden sm:inline">{language}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.code}
                      onClick={() => setLanguage(option.code)}
                      className="cursor-pointer"
                    >
                      <span className="flex items-center justify-between w-full">
                        <span className="flex items-center gap-2">
                          <option.flag className="h-4 w-6" />
                          {option.name}
                        </span>
                        {language === option.code && <Check className="h-4 w-4 text-primary" />}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-[#0b0f19]/98 backdrop-blur-md border-l border-blue-500/30 shadow-2xl">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-lg sm:text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
              
              <nav className="space-y-3 sm:space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    isActive('/') 
                      ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                      : 'text-gray-300 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    isActive('/services') 
                      ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                      : 'text-gray-300 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {t('nav.services')}
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    isActive('/portfolio') 
                      ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                      : 'text-gray-300 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {t('nav.portfolio')}
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    isActive('/about') 
                      ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                      : 'text-gray-300 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    isActive('/blog') 
                      ? 'bg-primary/20 text-primary border-l-4 border-primary' 
                      : 'text-gray-300 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {t('nav.blog')}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-medium hover:from-primary/90 hover:to-blue-700 transition-all duration-300 text-center mt-4 sm:mt-6 text-sm sm:text-base"
                >
                  {t('nav.contact')}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
