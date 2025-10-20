import { Megaphone, Share2, Target, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 cursor-pointer transition-all duration-500 hover:border-foreground hover:shadow-2xl hover:-translate-y-3 animate-fade-in bg-gradient-to-br from-card to-card/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <CardHeader className="relative z-10">
                  <div className="mb-4 p-3 bg-foreground text-background w-fit rounded-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base transition-all duration-300 group-hover:text-foreground/80">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
