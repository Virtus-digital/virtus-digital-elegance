import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0b0f19]/98 backdrop-blur-md shadow-lg shadow-primary/20 border-b border-blue-500/30" 
          : "bg-[#0b0f19]/90 backdrop-blur-md border-b border-blue-500/20"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                isActive('/') 
                  ? 'text-primary after:w-full' 
                  : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-base font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                isActive('/services') 
                  ? 'text-primary after:w-full' 
                  : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
              }`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`text-base font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                isActive('/portfolio') 
                  ? 'text-primary after:w-full' 
                  : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                isActive('/about') 
                  ? 'text-primary after:w-full' 
                  : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`text-base font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 ${
                isActive('/blog') 
                  ? 'text-primary after:w-full' 
                  : 'text-gray-300 hover:text-primary after:w-0 hover:after:w-full'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-medium hover:from-primary/90 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
