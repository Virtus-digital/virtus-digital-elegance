import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";

const Hero = () => {
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Digital Excellence Since 2020</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Virtus Digital
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.2s" }}>
          We Create Digital Experiences
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            That Connect.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: "0.4s" }}>
          Virtus Digital helps brands grow with strategy, design, and data-driven creativity.
          <br />
          <span className="text-primary font-semibold">Transform your vision into digital reality.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            variant="hero"
            onClick={() => scrollToSection("portfolio")}
            className="min-w-[200px]"
          >
            View Our Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="min-w-[200px]"
          >
            Let's Talk
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
