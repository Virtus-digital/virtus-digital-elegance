import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">hello@virtusdigital.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-14 border-primary/20 focus:border-primary bg-background/50"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 border-primary/20 focus:border-primary bg-background/50"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-40 border-primary/20 focus:border-primary bg-background/50"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
