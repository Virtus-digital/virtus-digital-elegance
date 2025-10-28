import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Instagram, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="page-title mb-4">
              {t('contact.page.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('contact.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-5">
              <Card className="border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary/20 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5">{t('contact.phone')}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm md:text-base text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary/20 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5">{t('contact.email.label')}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">hello@virtusdigital.com</p>
                      <p className="text-sm md:text-base text-muted-foreground">support@virtusdigital.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary/20 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5">{t('contact.office')}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        123 Digital Avenue<br />
                        Suite 456<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary/20 rounded-lg flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-1.5">{t('contact.hours')}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {t('contact.hours.days')}<br />
                        {t('contact.hours.time')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-5">
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-3">{t('contact.follow')}</h3>
                  <div className="flex gap-2.5">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border border-primary/30 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-border/40 bg-card/40 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <h2 className="card-title mb-2">
                    {t('contact.form.title')}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6">
                    {t('contact.form.subtitle')}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t('contact.form.name')}
                        </label>
                        <Input
                          placeholder={t('contact.form.name.placeholder')}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="input-standard"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t('contact.form.email.label')}
                        </label>
                        <Input
                          type="email"
                          placeholder={t('contact.form.email.placeholder')}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="input-standard"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t('contact.form.phone')}
                        </label>
                        <Input
                          type="tel"
                          placeholder={t('contact.form.phone.placeholder')}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="input-standard"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          {t('contact.form.subject')}
                        </label>
                        <Input
                          placeholder={t('contact.form.subject.placeholder')}
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="input-standard"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t('contact.form.message.label')}
                      </label>
                      <Textarea
                        placeholder={t('contact.form.message.placeholder')}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-40 border-primary/20 focus:border-primary bg-background/50 text-sm md:text-base"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="btn-standard w-full gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('contact.sending') : t('contact.send')}
                      <Send className="icon-standard" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-0 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="h-56 md:h-80 lg:h-96 bg-secondary/20 rounded-2xl overflow-hidden border border-border/40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977481487776!2d-122.41941492348152!3d37.774929071979546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087cdc12e9f%3A0x740dd1b4545e1b5e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1709737283945!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20"></div>

      <Footer />
    </div>
  );
};

export default ContactPage;

