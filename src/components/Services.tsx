import { Megaphone, Share2, Target, Code, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "Digital Advertising",
    description: "Strategic campaigns that reach your audience across all digital channels with precision and impact.",
    icon: Megaphone,
  },
  {
    title: "Social Media Management",
    description: "Building engaged communities and amplifying your brand voice across social platforms.",
    icon: Share2,
  },
  {
    title: "Brand Strategy & Identity",
    description: "Crafting memorable brand experiences that resonate with your target audience.",
    icon: Target,
  },
  {
    title: "Web & App Development",
    description: "Creating beautiful, functional digital products that drive results and delight users.",
    icon: Code,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border-2 rounded-lg bg-card overflow-hidden hover:border-foreground transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-6 hover:no-underline [&[data-state=open]]:bg-foreground [&[data-state=open]]:text-background transition-all duration-500">
                    <div className="flex items-center gap-6 w-full">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 text-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300 group-data-[state=open]:bg-background group-data-[state=open]:text-foreground">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-4 flex-1">
                        <div className="p-3 bg-foreground text-background rounded-md group-hover:scale-110 transition-transform duration-300 group-data-[state=open]:bg-background group-data-[state=open]:text-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-left">{service.title}</h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-20 pt-4 border-l-2 border-foreground/20 ml-6">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
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
