import { Megaphone, Share2, Target, Code } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "Digital Advertising",
    description: "Strategic campaigns that reach your audience across all digital channels with precision and impact. We leverage data-driven insights to maximize ROI and create compelling narratives that convert.",
    details: "Google Ads • Facebook Ads • Display Campaigns • Video Marketing • Retargeting",
    icon: Megaphone,
  },
  {
    title: "Social Media Management",
    description: "Building engaged communities and amplifying your brand voice across social platforms. From content creation to community management, we handle it all.",
    details: "Content Strategy • Community Management • Influencer Marketing • Analytics & Reporting",
    icon: Share2,
  },
  {
    title: "Brand Strategy & Identity",
    description: "Crafting memorable brand experiences that resonate with your target audience. We create cohesive brand identities that stand out in crowded markets.",
    details: "Brand Positioning • Visual Identity • Brand Guidelines • Messaging Strategy",
    icon: Target,
  },
  {
    title: "Web & App Development",
    description: "Creating beautiful, functional digital products that drive results and delight users. Our development team brings designs to life with clean, scalable code.",
    details: "Web Applications • Mobile Apps • E-commerce • Progressive Web Apps • API Integration",
    icon: Code,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="relative">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group w-full border-2 border-border/50 rounded-2xl bg-card/90 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 -mt-6 first:mt-0 group-data-[state=open]:mt-0"
                >
                  <AccordionTrigger className="px-8 py-8 hover:no-underline [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-primary [&[data-state=open]]:to-blue-600 [&[data-state=open]]:text-primary-foreground transition-all duration-500">
                    <div className="flex items-center gap-6 w-full">
                      <div className="flex items-center gap-6 flex-1">
                        <div className="p-4 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-xl shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-left">{service.title}</h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="pt-6 space-y-4">
                      <div className="pl-24 space-y-4">
                        <p className="text-lg text-foreground/90 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="pt-4 mt-4 border-t border-primary/20">
                          <p className="text-sm font-semibold text-primary mb-2">Key Services:</p>
                          <p className="text-base text-muted-foreground">
                            {service.details}
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
