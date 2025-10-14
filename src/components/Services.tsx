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
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-foreground cursor-pointer"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-foreground text-background w-fit rounded-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
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
