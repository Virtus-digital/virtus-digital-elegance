import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "-1s" }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "-1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "-1s" }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 sm:mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">{t('hero.badge')}</span>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {t('hero.subtitle')}
        </h2>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-up leading-tight px-2" style={{ animationDelay: "0.2s" }}>
          {t('hero.title1')}
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            {t('hero.title2')}
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-up leading-relaxed px-2" style={{ animationDelay: "0.4s" }}>
          {t('hero.description1')}
          <br />
          <span className="text-primary font-semibold">{t('hero.description2')}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-up px-2" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            variant="hero"
            onClick={() => scrollToSection("portfolio")}
            className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
          >
            {t('hero.cta1')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center bg-background/60 backdrop-blur-sm shadow-lg shadow-primary/30">
          <ChevronDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
