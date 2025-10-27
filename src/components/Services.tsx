import { useState, useEffect } from "react";
import { Megaphone, Share2, Code2, Search, Monitor, Layers, Server, Database, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const getSkills = (t: (key: string) => string) => [
  {
    titleKey: "skills.frontend",
    descKey: "skills.frontend.desc",
    icon: Layers,
  },
  {
    titleKey: "skills.backend",
    descKey: "skills.backend.desc",
    icon: Server,
  },
  {
    titleKey: "skills.data",
    descKey: "skills.data.desc",
    icon: Database,
  },
  {
    titleKey: "skills.quality",
    descKey: "skills.quality.desc",
    icon: CheckCircle2,
  },
];

const getServices = (t: (key: string) => string) => [
  {
    titleKey: "service.digital-marketing.title",
    descKey: "service.digital-marketing.desc",
    detailsKey: "service.digital-marketing.details",
    featuresKey: "service.digital-marketing.features",
    icon: Megaphone,
  },
  {
    titleKey: "service.web-dev.title",
    descKey: "service.web-dev.desc",
    detailsKey: "service.web-dev.details",
    featuresKey: "service.web-dev.features",
    icon: Monitor,
  },
  {
    titleKey: "service.custom-software.title",
    descKey: "service.custom-software.desc",
    detailsKey: "service.custom-software.details",
    featuresKey: "service.custom-software.features",
    icon: Code2,
  },
  {
    titleKey: "service.seo.title",
    descKey: "service.seo.desc",
    detailsKey: "service.seo.details",
    featuresKey: "service.seo.features",
    icon: Search,
  },
  {
    titleKey: "service.social-media.title",
    descKey: "service.social-media.desc",
    detailsKey: "service.social-media.details",
    featuresKey: "service.social-media.features",
    icon: Share2,
  },
];

const Services = () => {
  const { t } = useLanguage();
  const skills = getSkills(t);
  const services = getServices(t);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex(prev => prev === -1 ? services.length - 1 : (prev - 1 + services.length) % services.length);
      }
      if (e.key === "ArrowRight") {
        setActiveIndex(prev => prev === -1 ? 0 : (prev + 1) % services.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [services.length]);

  const setActiveSlide = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = activeIndex === -1 ? 0 : (activeIndex + 1) % services.length;
    setActiveSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = activeIndex === -1 ? services.length - 1 : (activeIndex - 1 + services.length) % services.length;
    setActiveSlide(prevIndex);
  };
  
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in px-4">
          <h2 className="section-title mb-6">
            {t('services.what-we-do')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16 md:mb-24">
          <h3 className="card-title text-center mb-8 md:mb-12 px-4">
            {t('services.skills-title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="group border-2 border-border/50 bg-card/90 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {t(skill.titleKey)}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(skill.descKey)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Accordion Slider Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              En İyi Yaptığımız İşler
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex h-full flex-col md:flex-row">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;
                
                return (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-all duration-700 ease-out ${
                      isActive ? 'flex-[2.5] md:flex-[2.5]' : 'flex-1'
                    }`}
                    onClick={() => setActiveSlide(index)}
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)`,
                    }}
                  >
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
                    
                    {/* Content */}
                    <div className={`relative z-10 h-full flex flex-col justify-end p-4 md:p-8 transition-all duration-700 ${
                      isActive ? 'pb-8 md:pb-16' : 'pb-4 md:pb-8'
                    }`}>
                      {/* Service number */}
                      <div className={`absolute top-4 md:top-8 left-4 md:left-8 text-4xl md:text-6xl font-light text-primary/60 transition-all duration-700 ${
                        isActive ? 'top-2 md:top-4 text-2xl md:text-4xl' : ''
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Service icon and title */}
                      <div className={`flex items-center gap-2 md:gap-4 mb-2 md:mb-4 transition-all duration-700 ${
                        isActive ? 'transform-none' : 'md:transform md:rotate-90 md:origin-left'
                      }`}>
                        <div className="p-2 md:p-3 bg-gradient-to-br from-primary to-blue-600 text-white rounded-xl shadow-lg">
                          <Icon className="h-4 w-4 md:h-6 md:w-6" />
                        </div>
                        <h3 className={`text-sm md:text-xl font-bold text-foreground transition-all duration-700 ${
                          isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'
                        }`}>
                          {t(service.titleKey)}
                        </h3>
                      </div>

                      {/* Service description */}
                      <div className={`transition-all duration-700 ${
                        isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'
                      }`}>
                        <p className="text-xs md:text-base text-muted-foreground mb-3 md:mb-6 leading-relaxed">
                          {t(service.descKey)}
                        </p>
                        
                        {/* Service details */}
                        <div className="space-y-2 md:space-y-3 mb-3 md:mb-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-1 md:py-2 border-b border-primary/20">
                            <span className="text-xs md:text-sm text-muted-foreground">Ana Hizmetler:</span>
                            <span className="text-xs md:text-sm font-semibold text-foreground">{t(service.detailsKey)}</span>
                          </div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-1 md:py-2 border-b border-primary/20">
                            <span className="text-xs md:text-sm text-muted-foreground">Özellikler:</span>
                            <span className="text-xs md:text-sm font-semibold text-foreground">{t(service.featuresKey)}</span>
                          </div>
                        </div>

                        {/* Performance badges */}
                        <div className="flex flex-wrap gap-2 md:gap-3">
                          <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm font-medium">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></div>
                            <span>Profesyonel</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm font-medium">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></div>
                            <span>Güvenilir</span>
                          </div>
                          <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 bg-primary/10 rounded-full text-xs md:text-sm font-medium">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></div>
                            <span>Sonuç Odaklı</span>
                          </div>
                        </div>
                      </div>

                      {/* Add button */}
                      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-6 h-6 md:w-8 md:h-8 border-2 border-primary rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white">
                        <div className="w-2 h-0.5 md:w-3 md:h-0.5 bg-primary"></div>
                        <div className="w-0.5 h-2 md:w-0.5 md:h-3 bg-primary absolute"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
