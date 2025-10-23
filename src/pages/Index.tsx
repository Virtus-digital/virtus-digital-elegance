import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel3D from "@/components/3DCarousel";
import BannerSlider from "@/components/BannerSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Users, Award, Monitor, Code2, Search, Megaphone, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredServices = [
    {
      titleKey: "service.digital-marketing.title",
      taglineKey: "service.digital-marketing.desc",
      descKey: "service.digital-marketing.details",
      icon: Megaphone,
    },
    {
      titleKey: "service.web-dev.title",
      taglineKey: "service.web-dev.desc",
      descKey: "service.web-dev.details",
      icon: Monitor,
    },
    {
      titleKey: "service.custom-software.title",
      taglineKey: "service.custom-software.desc",
      descKey: "service.custom-software.details",
      icon: Code2,
    },
    {
      titleKey: "service.seo.title",
      taglineKey: "service.seo.desc",
      descKey: "service.seo.details",
      icon: Search,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex(prev => prev === -1 ? featuredServices.length - 1 : (prev - 1 + featuredServices.length) % featuredServices.length);
      }
      if (e.key === "ArrowRight") {
        setActiveIndex(prev => prev === -1 ? 0 : (prev + 1) % featuredServices.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [featuredServices.length]);

  const setActiveSlide = (index: number) => {
    if (activeIndex === index && index !== 0) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = activeIndex === -1 ? 0 : (activeIndex + 1) % featuredServices.length;
    setActiveSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = activeIndex === -1 ? featuredServices.length - 1 : (activeIndex - 1 + featuredServices.length) % featuredServices.length;
    setActiveSlide(prevIndex);
  };

  const portfolioPreview = [
    {
      id: 1,
      titleKey: "project.erm.title",
      image: "/erm.png",
      mobileImage: "/erm-mobil.png",
      url: "https://ermrentacar.com/",
    },
    {
      id: 2,
      titleKey: "project.ravena.title",
      image: "/ravena.png",
      mobileImage: "/ravena-mobil.png",
      url: "https://ravenalab.com/",
    },
    {
      id: 3,
      titleKey: "project.fertina.title",
      image: "/fertina.png",
      mobileImage: "/fertina-mobil.png",
      url: "https://dev2.fertinaivf.com/",
    },
    {
      id: 4,
      titleKey: "project.virtus.title",
      image: "/fertina.png",
      mobileImage: "/fertina-mobil.png",
      url: "https://virtusdigital.com/",
    },
    {
      id: 5,
      titleKey: "project.creative.title",
      image: "/ravena.png",
      mobileImage: "/ravena-mobil.png",
      url: "https://creativesolutions.com/",
    },
    {
      id: 6,
      titleKey: "project.tech.title",
      image: "/erm.png",
      mobileImage: "/erm-mobil.png",
      url: "https://techinnovations.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <Navbar />
      
      {/* Banner Slider */}
      <BannerSlider />

      {/* New Homepage Section */}
      <section className="py-16 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {t('homepage.new.title')}
            </h2>
            <p className="text-lg md:text-xl text-primary font-semibold mb-6">
              {t('homepage.new.subtitle')}
            </p>
            
            <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
              <p>{t('homepage.new.desc1')}</p>
              <p>{t('homepage.new.desc2')}</p>
            </div>
            
            <div className="mt-8">
              <Link to="/about">
                <Button className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white rounded-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
                  {t('homepage.new.button')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Accordion Slider Design */}
      <section id="services" className="section-padding bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden section-divider">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              {t('index.services.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
              {t('index.services.subtitle1')}
            </p>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              {t('index.services.subtitle2')}
            </p>
          </div>

          {/* Accordion Slider Section */}
          <div className="max-w-4xl mx-auto sm:max-w-5xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                En İyi Yaptığımız İşler
              </div>
            </div>

            <div className="relative min-h-[180px] sm:h-[300px] md:h-[450px] overflow-visible md:overflow-hidden rounded-xl shadow-2xl">
              <div className="flex h-full flex-col md:flex-row">
                {featuredServices.map((service, index) => {
                  const isActive = activeIndex === index;
                  
                  return (
                    <div
                      key={index}
                      className={`relative cursor-pointer transition-all duration-800 cubic-bezier(0.4, 0, 0.2, 1) rounded-lg ${
                        isActive ? 'flex-[2.5] sm:flex-[2] md:flex-[2] min-h-[160px] sm:min-h-[200px] md:min-h-[250px]' : 'flex-1 min-h-[50px] sm:min-h-[70px] md:min-h-[80px]'
                      }`}
                      onClick={() => setActiveSlide(index)}
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url('/${index + 1}-banner.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
                      
                      {/* Content */}
                      <div className={`relative z-10 h-full flex flex-col justify-center sm:justify-end md:justify-end p-1.5 sm:p-3 md:p-4 transition-all duration-800 cubic-bezier(0.4, 0, 0.2, 1) ${
                        isActive ? 'pt-4 pb-2 sm:pt-6 sm:pb-3 md:pt-6 md:pb-8' : 'pt-2 pb-1 sm:pt-4 sm:pb-2 md:pt-4 md:pb-4'
                      }`}>
                        {/* Title for closed cards - positioned vertically on left */}
                        <div className={`absolute left-1 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${
                          isActive ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        }`}>
                          <h3 className="text-[10px] sm:text-sm md:text-base font-normal text-white/80" style={{ 
                            writingMode: 'vertical-rl',
                            textOrientation: 'mixed',
                            transform: 'rotate(180deg)',
                            lineHeight: '1.2'
                          }}>
                            {t(service.titleKey)}
                          </h3>
                        </div>
                        {/* Service number */}
                        <div className={`absolute top-0.5 sm:top-3 md:top-4 right-2 sm:left-3 md:left-4 text-sm sm:text-2xl md:text-4xl font-light text-primary/60 transition-all duration-800 cubic-bezier(0.4, 0, 0.2, 1) ${
                          isActive ? 'top-0.5 sm:top-2 md:top-3 text-xs sm:text-xl md:text-2xl' : ''
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        {/* Service title - only show when active */}
                        <div className={`transition-all duration-1200 ease-out ${
                          isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4 scale-95'
                        }`}>
                          <h3 className={`text-xs sm:text-base md:text-lg font-bold text-white transition-all duration-1200 ease-out ${
                            isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4 scale-95'
                          }`} style={{ 
                            transitionDelay: isActive ? '0.2s' : '0s', 
                            marginLeft: '1rem sm:1.5rem'
                          }}>
                            {t(service.titleKey)}
                          </h3>
                        </div>

                        {/* Service description */}
                        <div className={`transition-all duration-1000 ease-out ${
                          isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                        }`}>
                          <p className={`text-xs sm:text-xs md:text-sm text-gray-300 mb-1 sm:mb-2 md:mb-3 leading-relaxed transition-all duration-1000 ease-out ${
                            isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                          }`} style={{ transitionDelay: isActive ? '0.2s' : '0s', marginLeft: '1rem sm:1.5rem' }}>
                            {t(service.taglineKey)}
                          </p>
                          
                          {/* Service details */}
                          <div className={`space-y-1 sm:space-y-1 md:space-y-2 mb-2 sm:mb-2 md:mb-3 transition-all duration-1000 ease-out ${
                            isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                          }`} style={{ transitionDelay: isActive ? '0.4s' : '0s', marginLeft: '1rem sm:1.5rem' }}>
                            <div className="py-0.5 border-b border-primary/20">
                              <span className="text-xs text-gray-400">Detaylar:</span>
                              <p className="text-xs sm:text-xs md:text-sm text-white mt-0.5 leading-relaxed">{t(service.descKey)}</p>
                            </div>
                          </div>

                          {/* Performance badges */}
                          <div className={`flex flex-wrap gap-1 sm:gap-1 md:gap-2 mb-1 transition-all duration-1000 ease-out ${
                            isActive ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                          }`} style={{ transitionDelay: isActive ? '0.6s' : '0s', marginLeft: '1rem sm:1.5rem' }}>
                            <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-primary/10 rounded-full text-xs font-medium">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full"></div>
                              <span className="hidden sm:inline">Profesyonel</span>
                              <span className="sm:hidden">Pro</span>
                            </div>
                            <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-primary/10 rounded-full text-xs font-medium">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full"></div>
                              <span className="hidden sm:inline">Güvenilir</span>
                              <span className="sm:hidden">Güv</span>
                            </div>
                            <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-primary/10 rounded-full text-xs font-medium">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full"></div>
                              <span className="hidden sm:inline">Sonuç Odaklı</span>
                              <span className="sm:hidden">Sonuç</span>
                            </div>
                          </div>
                        </div>

                        {/* Add button */}
                        <div className="absolute bottom-0.5 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-2 h-2 sm:w-5 sm:h-5 border-2 border-primary rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white">
                          <div className="w-1 h-0.5 sm:w-2 sm:h-0.5 bg-primary"></div>
                          <div className="w-0.5 h-1 sm:w-0.5 sm:h-2 bg-primary absolute"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center fade-in-up mt-12">
            <p className="text-base text-gray-300 mb-6 max-w-xl mx-auto">
              {t('index.services.more')}
            </p>
            <Button size="default" asChild className="btn-primary group">
              <Link to="/services">
                {t('index.services.explore')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview with 3D Carousel */}
      <section className="section-padding bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden section-divider">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              {t('index.portfolio.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
              {t('index.portfolio.subtitle1')}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t('index.portfolio.subtitle2')}
            </p>
          </div>

          {/* 3D Carousel Container */}
          <div className="relative mb-16">
            <div className="carousel-3d-container">
              <Carousel3D 
                items={portfolioPreview}
                radius={380}
                autoRotate={true}
                rotateSpeed={-60}
                itemWidth={280}
                itemHeight={170}
                mobileItemWidth={180}
                mobileItemHeight={240}
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('index.portfolio.more')}
            </p>
            <Button size="lg" asChild className="group">
              <Link to="/portfolio">
                {t('index.portfolio.view')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Text Heavy */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                {t('index.why.title')}
              </h2>
              <p className="text-lg md:text-xl text-white/90 font-semibold leading-relaxed mb-6">
                {t('index.why.subtitle')}
              </p>
            </div>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Award className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {t('index.why.award.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t('index.why.award.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {t('index.why.team.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t('index.why.team.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {t('index.why.results.title')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {t('index.why.results.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                {t('index.why.more')} <span className="text-blue-400 font-semibold">{t('index.why.more.bold')}</span>
              </p>
              <Button size="default" variant="outline" asChild className="group border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <Link to="/about">
                  {t('index.why.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden section-divider">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              {t('index.testimonials.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('index.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                name: "Jessica Martinez",
                role: "CEO, TechStart Inc.",
                content: "Virtus Digital transformed our online presence completely. Their strategic approach resulted in a 300% increase in qualified leads within just 3 months.",
                rating: 5
              },
              {
                name: "Robert Thompson",
                role: "Marketing Director, GrowthCo",
                content: "Working with Virtus has been a game-changer. Their expertise in digital advertising helped us achieve ROI we never thought possible.",
                rating: 5
              },
              {
                name: "Amanda Lee",
                role: "Founder, StyleHub",
                content: "The website they built is not just beautiful—it's a conversion machine. Our online sales have doubled, and customer feedback has been overwhelmingly positive.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="glass-strong rounded-2xl p-6 card-hover transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 italic text-sm">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-white text-base">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              {t('index.testimonials.more')}
            </p>
            <Button size="default" asChild className="btn-secondary group">
              <Link to="/about">
                {t('index.testimonials.cta')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('index.cta.title')}
          </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('index.cta.subtitle')}
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="default" 
                className="bg-primary text-white hover:bg-primary/90 hover:text-white min-w-[180px] h-12 text-base font-semibold group shadow-xl"
              asChild
            >
                <Link to="/contact">
                  {t('index.cta.start')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
            <Button 
              size="default" 
              variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[180px] h-12 text-base font-semibold group"
              asChild
            >
                <Link to="/portfolio">
                  {t('index.cta.view')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
