import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Megaphone, Share2, Target, Code, TrendingUp, PenTool, BarChart, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const allServices = [
  {
    title: "Digital Advertising",
    description: "Strategic campaigns that reach your audience across all digital channels with precision and impact. We leverage data-driven insights to maximize ROI and create compelling narratives that convert.",
    details: "Google Ads • Facebook Ads • Display Campaigns • Video Marketing • Retargeting",
    icon: Megaphone,
    features: [
      "Campaign Strategy & Planning",
      "Ad Creative Development",
      "A/B Testing & Optimization",
      "Performance Tracking & Reporting",
      "Budget Management",
      "Conversion Rate Optimization"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Social Media Management",
    description: "Building engaged communities and amplifying your brand voice across social platforms. From content creation to community management, we handle it all.",
    details: "Content Strategy • Community Management • Influencer Marketing • Analytics & Reporting",
    icon: Share2,
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Engagement",
      "Influencer Partnerships",
      "Social Listening & Analytics",
      "Paid Social Campaigns"
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
  },
  {
    title: "Brand Strategy & Identity",
    description: "Crafting memorable brand experiences that resonate with your target audience. We create cohesive brand identities that stand out in crowded markets.",
    details: "Brand Positioning • Visual Identity • Brand Guidelines • Messaging Strategy",
    icon: Target,
    features: [
      "Brand Research & Analysis",
      "Logo & Visual Identity Design",
      "Brand Guidelines Development",
      "Messaging & Voice Definition",
      "Brand Positioning Strategy",
      "Brand Launch & Activation"
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
  },
  {
    title: "Web & App Development",
    description: "Creating beautiful, functional digital products that drive results and delight users. Our development team brings designs to life with clean, scalable code.",
    details: "Web Applications • Mobile Apps • E-commerce • Progressive Web Apps • API Integration",
    icon: Code,
    features: [
      "Custom Web Development",
      "Mobile App Development (iOS/Android)",
      "E-commerce Solutions",
      "API Integration & Development",
      "Progressive Web Apps",
      "Maintenance & Support"
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop"
  },
  {
    title: "SEO & Content Marketing",
    description: "Boost your organic visibility and attract qualified traffic through strategic SEO and compelling content that ranks and converts.",
    details: "Technical SEO • Content Strategy • Link Building • Local SEO",
    icon: TrendingUp,
    features: [
      "Technical SEO Audit & Optimization",
      "Keyword Research & Strategy",
      "Content Creation & Optimization",
      "Link Building Campaigns",
      "Local SEO Optimization",
      "SEO Performance Reporting"
    ],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop"
  },
  {
    title: "Graphic Design & Creative",
    description: "Eye-catching designs that communicate your message effectively and leave a lasting impression on your audience.",
    details: "Brand Identity • Marketing Materials • Digital Assets • Print Design",
    icon: PenTool,
    features: [
      "Brand Identity Design",
      "Marketing Collateral",
      "Social Media Graphics",
      "Infographics & Data Visualization",
      "Presentation Design",
      "Print & Packaging Design"
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
  },
  {
    title: "Analytics & Data Insights",
    description: "Turn data into actionable insights. We help you understand your customers and optimize every aspect of your digital presence.",
    details: "Google Analytics • Data Visualization • Performance Tracking • Custom Reports",
    icon: BarChart,
    features: [
      "Analytics Setup & Configuration",
      "Custom Dashboard Creation",
      "Performance Tracking",
      "Customer Journey Analysis",
      "Conversion Funnel Optimization",
      "Monthly Reporting & Insights"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with powerful automation that nurtures leads and drives conversions at scale.",
    details: "Email Marketing • Lead Nurturing • Workflow Automation • CRM Integration",
    icon: Zap,
    features: [
      "Email Marketing Campaigns",
      "Marketing Automation Setup",
      "Lead Scoring & Nurturing",
      "CRM Integration",
      "Workflow Automation",
      "Campaign Performance Analysis"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b0f19] via-[#0d1320] to-[#0b0f19] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand, engage your audience, and drive measurable results across all channels.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card 
                  key={index}
                  className="group border-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                >
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Image */}
                      <div className={`relative h-[400px] overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20"></div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-4 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-xl shadow-lg">
                            <Icon className="h-8 w-8" />
                          </div>
                          <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <p className="text-sm font-semibold text-blue-400 mb-3">What We Offer:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                <span className="text-sm text-gray-400">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button 
                          variant="default" 
                          className="w-fit mt-4"
                          onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                            } else {
                              window.location.href = '/contact';
                            }
                          }}
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="min-w-[200px]"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

