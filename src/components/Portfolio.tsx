import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    id: 1,
    title: "Tech Startup Launch",
    client: "InnovateTech",
    goal: "Launch a new SaaS platform with a complete digital presence",
    result: "300% increase in sign-ups within first month",
    image: portfolio1,
  },
  {
    id: 2,
    title: "Fashion Brand Rebrand",
    client: "Luxe Apparel",
    goal: "Modernize brand identity and expand digital reach",
    result: "150% growth in online sales, 200k+ new followers",
    image: portfolio2,
  },
  {
    id: 3,
    title: "Real Estate Campaign",
    client: "Premium Properties",
    goal: "Create high-end marketing materials and digital strategy",
    result: "40% faster property sales, 500+ qualified leads",
    image: portfolio3,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Success stories from brands we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-background p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-base pt-4">
                <div className="space-y-4">
                  <div>
                    <strong className="text-foreground">Client:</strong> {selectedProject?.client}
                  </div>
                  <div>
                    <strong className="text-foreground">Goal:</strong> {selectedProject?.goal}
                  </div>
                  <div>
                    <strong className="text-foreground">Result:</strong> {selectedProject?.result}
                  </div>
                  <img
                    src={selectedProject?.image}
                    alt={selectedProject?.title}
                    className="w-full rounded-lg mt-4"
                  />
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
