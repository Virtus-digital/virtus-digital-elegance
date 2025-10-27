import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getProjects = (t: (key: string) => string) => [
  {
    id: 1,
    titleKey: "project.erm.title",
    clientKey: "project.erm.client",
    goalKey: "project.erm.goal",
    resultKey: "project.erm.result",
    image: "/erm.png",
    url: "https://ermrentacar.com/",
  },
  {
    id: 2,
    titleKey: "project.ravena.title",
    clientKey: "project.ravena.client",
    goalKey: "project.ravena.goal",
    resultKey: "project.ravena.result",
    image: "/ravena.png",
    url: "https://ravenalab.com/",
  },
  {
    id: 3,
    titleKey: "project.fertina.title",
    clientKey: "project.fertina.client",
    goalKey: "project.fertina.goal",
    resultKey: "project.fertina.result",
    image: "/fertina.png",
    url: "https://dev2.fertinaivf.com/",
  },
];

const Portfolio = () => {
  const { t } = useLanguage();
  const projects = getProjects(t);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-14 px-4">
          <h2 className="section-title mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('portfolio.subtitle')}<span className="text-primary font-semibold">{t('portfolio.subtitle.bold')}</span>{t('portfolio.subtitle2')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {projects.map((project) => (
            <Card key={project.id} className="group border-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="p-0">
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative image-standard">
                    <img src={project.image} alt={t(project.titleKey)} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{t(project.titleKey)}</h3>
                      <p className="text-xs sm:text-sm text-blue-300">{t(project.clientKey)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-card border-2 border-primary/30 mx-4">
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {selectedProject && t(selectedProject.titleKey)}
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base pt-4 sm:pt-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3 sm:p-4 bg-secondary/30 rounded-lg border border-primary/20">
                      <strong className="text-primary block mb-2 text-sm sm:text-base">{t('portfolio.client')}</strong>
                      <span className="text-foreground text-sm sm:text-base">{selectedProject && t(selectedProject.clientKey)}</span>
                    </div>
                    <div className="p-3 sm:p-4 bg-secondary/30 rounded-lg border border-primary/20">
                      <strong className="text-primary block mb-2 text-sm sm:text-base">{t('portfolio.result')}</strong>
                      <span className="text-foreground text-sm sm:text-base">{selectedProject && t(selectedProject.resultKey)}</span>
                    </div>

                  </div>
                  <div className="p-3 sm:p-4 bg-secondary/30 rounded-lg border border-primary/20">
                    <strong className="text-primary block mb-2 text-sm sm:text-base">{t('portfolio.goal')}</strong>
                    <span className="text-foreground text-sm sm:text-base">{selectedProject && t(selectedProject.goalKey)}</span>
                  </div>
                  <img
                    src={selectedProject?.image}
                    alt={selectedProject && t(selectedProject.titleKey)}
                    className="w-full rounded-lg mt-4 sm:mt-6 border-2 border-primary/20"
                  />
                  {selectedProject?.url && (
                    <div className="pt-3 sm:pt-4">
                      <Button asChild className="gap-2 w-full sm:w-auto">
                        <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                          {t('portfolio.visit')}
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
      </div>
    </section>
  );
};

export default Portfolio;

