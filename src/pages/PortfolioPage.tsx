import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "ERM Rent a Car",
    client: "ERM",
    category: "Web Development",
    goal: "Rental booking website with fleet showcase and online reservation",
    result: "+42% booking conversions after launch",
    duration: "3 months",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/erm.png",
    url: "https://ermrentacar.com/",
    description: "A comprehensive car rental platform featuring real-time fleet availability, seamless booking system, and integrated payment processing. The modern interface and optimized user journey resulted in significant conversion improvements."
  },
  {
    id: 2,
    title: "Ravenalab",
    client: "Travel Agency",
    category: "Digital Marketing",
    goal: "Travel packages, destination pages and lead capture",
    result: "3x increase in qualified inquiries",
    duration: "4 months",
    technologies: ["WordPress", "SEO", "Google Ads", "Analytics"],
    image: "/ravena.png",
    url: "https://ravenalab.com/",
    description: "Complete digital transformation for a travel agency, including website redesign, SEO optimization, and targeted advertising campaigns. The strategic approach tripled the number of quality leads within the first quarter."
  },
  {
    id: 3,
    title: "Fertina IVF",
    client: "Fertility Clinic",
    category: "Healthcare Web Design",
    goal: "Clinic website with services, success stories and appointment request",
    result: "+65% appointment requests month-over-month",
    duration: "2 months",
    technologies: ["React", "Next.js", "Tailwind CSS", "CRM Integration"],
    image: "/fertina.png",
    url: "https://dev2.fertinaivf.com/",
    description: "Sensitive and professional website design for a fertility clinic, emphasizing trust and expertise. Features include detailed service pages, patient testimonials, and a seamless appointment booking system integrated with their CRM."
  }
];

const PortfolioPage = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#0b0f19] via-[#0d1320] to-[#0b0f19] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="page-title mb-4">
              {t('portfolio.page.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
              {t('portfolio.page.subtitle')}<span className="text-blue-400 font-semibold">{t('portfolio.page.subtitle.bold')}</span>{t('portfolio.page.subtitle2')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
              <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">700+</div>
                <div className="text-xs text-gray-400">{t('portfolio.stats.projects')}</div>
              </div>
              <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-xs text-gray-400">{t('portfolio.stats.satisfaction')}</div>
              </div>
              <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <div className="text-2xl font-bold text-primary mb-1">150%</div>
                <div className="text-xs text-gray-400">{t('portfolio.stats.roi')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group border-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-[280px] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-base pt-6">
              <div className="space-y-6">
                {/* Project Image */}
                <img
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full rounded-lg border-2 border-primary/20"
                />

                {/* Project Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-primary" />
                        <strong className="text-primary text-sm">{t('portfolio.dialog.client')}</strong>
                      </div>
                      <span className="text-white">{selectedProject?.client}</span>
                    </div>
                    
                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <strong className="text-primary text-sm">{t('portfolio.dialog.duration')}</strong>
                      </div>
                      <span className="text-white">{selectedProject?.duration}</span>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <strong className="text-primary text-sm">{t('portfolio.dialog.result')}</strong>
                      </div>
                      <span className="text-white">{selectedProject?.result}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="p-6 bg-secondary/30 rounded-lg border border-primary/20">
                    <strong className="text-primary block mb-3">{t('portfolio.dialog.description')}</strong>
                    <p className="text-gray-300 leading-relaxed">{selectedProject?.description}</p>
                  </div>

                  {/* Goal */}
                  <div className="p-6 bg-secondary/30 rounded-lg border border-primary/20">
                    <strong className="text-primary block mb-3">{t('portfolio.dialog.goal')}</strong>
                    <p className="text-gray-300">{selectedProject?.goal}</p>
                  </div>

                  {/* Technologies */}
                  <div className="p-6 bg-secondary/30 rounded-lg border border-primary/20">
                    <strong className="text-primary block mb-3">{t('portfolio.dialog.technologies')}</strong>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject?.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/40">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {selectedProject?.url && (
                    <div className="pt-4">
                      <Button asChild className="gap-2 w-full md:w-auto">
                        <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                          {t('portfolio.dialog.visit')}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('portfolio.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('portfolio.cta.subtitle')}
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="min-w-[200px]"
            onClick={() => window.location.href = '/contact'}
          >
            {t('portfolio.cta.button')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;

