import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">© 2025 Virtus Digital.</div>

          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-primary/30 hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-primary/30 hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-primary/30 hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
