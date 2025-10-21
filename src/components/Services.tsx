import { Megaphone, Share2, Code2, Search, Monitor, Layers, Server, Database, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
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
  
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-in px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            {t('services.what-we-do')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-foreground px-4">
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

        <div className="max-w-4xl mx-auto px-4">
          <Accordion type="multiple" className="relative">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group w-full border-2 border-border/50 rounded-2xl bg-card/90 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 -mt-6 first:mt-0 group-data-[state=open]:mt-0"
                >
                  <AccordionTrigger className="px-4 sm:px-8 py-6 sm:py-8 hover:no-underline [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-primary [&[data-state=open]]:to-blue-600 [&[data-state=open]]:text-primary-foreground transition-all duration-500">
                    <div className="flex items-center gap-4 sm:gap-6 w-full">
                      <div className="flex items-center gap-4 sm:gap-6 flex-1">
                        <div className="p-3 sm:p-4 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-xl shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-left">{t(service.titleKey)}</h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-8 pb-6 sm:pb-8">
                    <div className="pt-4 sm:pt-6 space-y-4">
                      <div className="pl-0 sm:pl-24 space-y-4">
                        <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                          {t(service.descKey)}
                        </p>
                        <div className="pt-4 mt-4 border-t border-primary/20">
                          <p className="text-sm font-semibold text-primary mb-2">{t('services.key-services')}</p>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {t(service.detailsKey)}
                          </p>
                        </div>
                        <div className="pt-2">
                          <p className="text-xs sm:text-sm text-foreground/80 italic">
                            {t(service.featuresKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
