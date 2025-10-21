import { Award, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than a digital agency — we're your growth partner.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              At Virtus Digital, we believe in the power of digital transformation. Our team of creative strategists, designers, and developers work together to create experiences that not only look beautiful but deliver measurable results.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Founded on principles of creativity, precision, and innovation, we've helped dozens of brands establish their digital presence and achieve their growth objectives.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">30+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-primary/10">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Award-Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized for excellence in digital innovation</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-primary/10">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                  <p className="text-sm text-muted-foreground">Talented professionals dedicated to your success</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-primary/10">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">Agile processes that keep your project moving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
