import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BannerSlider = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner içerikleri - dil desteği ile
  const slides = [
    {
      id: 1,
      title: t('banner.slide1.title'),
      subtitle: t('banner.slide1.subtitle'),
      description: t('banner.slide1.description'),
      image: "/1-banner.jpg",
      bgColor: "from-blue-900 via-blue-800 to-blue-900",
      animationDirection: "from-right"
    },
    {
      id: 2,
      title: t('banner.slide2.title'),
      subtitle: t('banner.slide2.subtitle'),
      description: t('banner.slide2.description'),
      image: "/2-banner.jpg",
      bgColor: "from-purple-900 via-purple-800 to-purple-900",
      animationDirection: "from-left"
    },
    {
      id: 3,
      title: t('banner.slide3.title'),
      subtitle: t('banner.slide3.subtitle'),
      description: t('banner.slide3.description'),
      image: "/3-banner.jpg",
      bgColor: "from-green-900 via-green-800 to-green-900",
      animationDirection: "from-bottom"
    },
    {
      id: 4,
      title: t('banner.slide4.title'),
      subtitle: t('banner.slide4.subtitle'),
      description: t('banner.slide4.description'),
      image: "/4-banner.jpg",
      bgColor: "from-orange-900 via-orange-800 to-orange-900",
      animationDirection: "from-top"
    }
  ];

  // Otomatik slider geçişi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 saniyede bir geçiş

    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Fade Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          />
        ))}
        
        {/* Fade overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 animate-fade-overlay"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-starfall-2"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "4s" }}></div>
        
        {/* Dense star field */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>


      {/* Slider Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-8">
          {slides.map((slide, index) => {
            // Fade in effect için geçiş animasyonu
            const getAnimationClasses = () => {
              if (index === currentSlide) {
                // Aktif slide - fade in ile ortaya çıkar
                return 'opacity-100 translate-y-0 scale-100';
              } else if (index < currentSlide) {
                // Önceki slide - fade out ile kaybolur
                return 'opacity-0 translate-y-4 scale-95';
              } else {
                // Sonraki slide - hazır bekler
                return 'opacity-0 translate-y-4 scale-105';
              }
            };

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${getAnimationClasses()}`}
              >
              <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto">
                {/* Ana Başlık */}
                <h1 className="fade-in-up mb-8" style={{ animationDelay: "0.2s" }}>
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-white">
                    {slide.title}
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
                    {slide.subtitle}
                  </span>
                </h1>

                {/* Açıklama */}
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed fade-in-up max-w-2xl" style={{ animationDelay: "0.4s" }}>
                  {slide.description}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 fade-in-up" style={{ animationDelay: "0.6s" }}>
                  <Button
                    size="lg"
                    className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3 text-lg font-semibold"
                    onClick={() => scrollToSection("services")}
                  >
                    {t('banner.cta.explore')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold"
                    onClick={() => scrollToSection("contact")}
                  >
                    {t('banner.cta.start')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-400 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;
