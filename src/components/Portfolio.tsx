import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
// use public placeholder path directly

const projects = [
  {
    id: 1,
    title: "ERM Rent a Car",
    client: "ERM",
    goal: "Rental booking website with fleet showcase and online reservation",
    result: "+42% booking conversions after launch",
    image: "/erm.png",
    url: "https://ermrentacar.com/",
  },
  {
    id: 2,
    title: "Ravenalab",
    client: "Travel Agency",
    goal: "Travel packages, destination pages and lead capture",
    result: "3x increase in qualified inquiries",
    image: "/ravena.png",
    url: "https://ravenalab.com/",
  },
  {
    id: 3,
    title: "Fertina IVF",
    client: "Fertility Clinic",
    goal: "Clinic website with services, success stories and appointment request",
    result: "+65% appointment requests month-over-month",
    image: "/fertina.png",
    url: "https://dev2.fertinaivf.com/",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help more than <span className="text-primary font-semibold">700+ brands</span> worldwide increase their
            turnover with high-performing websites and digital experiences.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group border-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="p-0">
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-[280px]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-blue-300">{project.client}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-card border-2 border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {selectedProject?.title}
              </DialogTitle>
              <DialogDescription className="text-base pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/20">
                      <strong className="text-primary block mb-2">Client</strong>
                      <span className="text-foreground">{selectedProject?.client}</span>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/20">
                      <strong className="text-primary block mb-2">Result</strong>
                      <span className="text-foreground">{selectedProject?.result}</span>
                    </div>

                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg border border-primary/20">
                    <strong className="text-primary block mb-2">Project Goal</strong>
                    <span className="text-foreground">{selectedProject?.goal}</span>
                  </div>
                  <img
                    src={selectedProject?.image}
                    alt={selectedProject?.title}
                    className="w-full rounded-lg mt-6 border-2 border-primary/20"
                  />
                  {selectedProject?.url && (
                    <div className="pt-4">
                      <Button asChild className="gap-2">
                        <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                          Visit Website
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

