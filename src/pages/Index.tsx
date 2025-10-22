import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel3D from "@/components/3DCarousel";
import BannerSlider from "@/components/BannerSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, ChevronDown, Megaphone, Share2, Target, Code, ArrowRight, Star, TrendingUp, Users, Award, Monitor, Code2, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredServices = [
    {
      titleKey: "service.digital-marketing.title",
      taglineKey: "index.service.digital.tagline",
      descKey: "service.digital-marketing.desc",
      icon: Megaphone,
    },
    {
      titleKey: "service.web-dev.title",
      taglineKey: "index.service.web.tagline",
      descKey: "service.web-dev.desc",
      icon: Monitor,
    },
    {
      titleKey: "service.custom-software.title",
      taglineKey: "index.service.software.tagline",
      descKey: "service.custom-software.desc",
      icon: Code2,
    },
    {
      titleKey: "service.seo.title",
      taglineKey: "index.service.seo.tagline",
      descKey: "service.seo.desc",
      icon: Search,
    },
  ];

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


      {/* Services Preview with Enhanced Design */}
      <section id="services" className="section-padding bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden section-divider">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              {t('index.services.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
              {t('index.services.subtitle1')}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {t('index.services.subtitle2')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <Accordion type="multiple" className="space-y-4">
              {featuredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={`service-${index}`}
                    className="group relative glass-strong rounded-2xl overflow-hidden hover:border-primary/50 card-hover transition-all duration-500 fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger className="px-8 py-8 hover:no-underline [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-primary/5 [&[data-state=open]]:to-blue-600/5 transition-all duration-500">
                      <div className="flex items-center gap-8 w-full">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 group-data-[state=open]:opacity-40 transition-all duration-500"></div>
                          <div className="relative p-5 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-2 group-data-[state=open]:scale-110 group-data-[state=open]:rotate-3 transition-all duration-500">
                            <Icon className="h-8 w-8" />
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                            {t(service.titleKey)}
                          </h3>
                          <p className="text-sm text-blue-400 font-medium">
                            {t(service.taglineKey)}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8">
                      <div className="pt-6 pl-24">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                          {t(service.descKey)}
                        </p>
                        <Button size="sm" variant="link" className="text-primary p-0 h-auto font-semibold" asChild>
                          <Link to="/services">
                            {t('index.services.learn')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="text-center fade-in-up">
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('index.services.more')}
            </p>
            <Button size="lg" asChild className="btn-primary group">
              <Link to="/services">
                {t('index.services.explore')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-32 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                {t('index.why.title')}
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 font-semibold leading-relaxed mb-8">
                {t('index.why.subtitle')}
              </p>
            </div>

            <div className="space-y-12 mb-16">
              <div className="flex items-start gap-6 group animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Award className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {t('index.why.award.title')}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t('index.why.award.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Users className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {t('index.why.team.title')}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t('index.why.team.desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {t('index.why.results.title')}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t('index.why.results.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 rounded-2xl p-12 border-2 border-primary/20">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                {t('index.why.more')} <span className="text-blue-400 font-semibold">{t('index.why.more.bold')}</span>
              </p>
              <Button size="lg" variant="outline" asChild className="group border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
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
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              {t('index.testimonials.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('index.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
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
                className="glass-strong rounded-2xl p-8 card-hover transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('index.testimonials.more')}
            </p>
            <Button size="lg" asChild className="btn-secondary group">
              <Link to="/about">
                {t('index.testimonials.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
          <div className="max-w-4xl mx-auto fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            {t('index.cta.title')}
          </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('index.cta.subtitle')}
          </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
                className="bg-primary text-white hover:bg-primary/90 hover:text-white min-w-[220px] h-14 text-lg font-semibold group shadow-xl"
              asChild
            >
                <Link to="/contact">
                  {t('index.cta.start')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[220px] h-14 text-lg font-semibold group"
              asChild
            >
                <Link to="/portfolio">
                  {t('index.cta.view')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
