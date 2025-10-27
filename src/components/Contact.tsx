import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { t } = useLanguage();
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
        title: t('contact.success.title'),
        description: t('contact.success.desc'),
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: t('contact.error.title'),
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 px-4">
          <h2 className="section-title mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-4">
          <div className="space-y-6 md:space-y-8">
            <div className="p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
              <h3 className="card-title mb-4 md:mb-6 text-primary">{t('contact.info')}</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="p-2 md:p-3 bg-primary/20 rounded-lg">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="p-2 md:p-3 bg-primary/20 rounded-lg">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">hello@virtusdigital.com</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
              <h3 className="card-title mb-4 md:mb-6 text-primary">{t('contact.follow')}</h3>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 md:p-4 border-2 border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 md:p-4 border-2 border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 md:p-4 border-2 border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                >
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
            <div>
              <Input
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-standard"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={t('contact.email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-standard"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-32 md:min-h-40 border-primary/20 focus:border-primary bg-background/50 text-sm md:text-base"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="btn-standard w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
