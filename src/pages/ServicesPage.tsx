import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Megaphone, Share2, Code2, Search, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const getAllServices = (t: (key: string) => string) => [
  {
    titleKey: "service.digital-marketing.title",
    descKey: "service.digital-marketing.desc",
    detailsKey: "service.digital-marketing.details",
    icon: Megaphone,
    features: (lang: string) => lang === 'tr' ? [
      "Google Ads (Arama, Görüntülü, YouTube, Alışveriş)",
      "Meta Reklamları (Facebook & Instagram)",
      "TikTok Reklamları",
      "LinkedIn Reklamları",
      "Kampanya Stratejisi & Planlama",
      "ROI Optimizasyonu"
    ] : [
      "Google Ads (Search, Display, YouTube, Shopping)",
      "Meta Ads (Facebook & Instagram)",
      "TikTok Ads",
      "LinkedIn Ads",
      "Campaign Strategy & Planning",
      "ROI Optimization"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    titleKey: "service.web-dev.title",
    descKey: "service.web-dev.desc",
    detailsKey: "service.web-dev.details",
    icon: Monitor,
    features: (lang: string) => lang === 'tr' ? [
      "WordPress Siteler",
      "E-Ticaret (OpenCart, WooCommerce, Shopify)",
      "No-Code / Low-Code (Wix, Squarespace)",
      "Özel Kodlu Siteler",
      "Yönetim Panelleri",
      "Mobil Uyumlu & SEO Dostu"
    ] : [
      "WordPress Sites",
      "E-Commerce (OpenCart, WooCommerce, Shopify)",
      "No-Code / Low-Code (Wix, Squarespace)",
      "Custom Coded Sites",
      "Admin Panels",
      "Mobile Responsive & SEO Friendly"
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop"
  },
  {
    titleKey: "service.custom-software.title",
    descKey: "service.custom-software.desc",
    detailsKey: "service.custom-software.details",
    icon: Code2,
    features: (lang: string) => lang === 'tr' ? [
      "CRM & ERP Sistemleri",
      "Stok ve Envanter Yönetimi",
      "Özel CMS",
      "Rezervasyon / Randevu Sistemleri",
      "3. Parti Entegrasyonlar",
      "Ölçeklenebilir Altyapı"
    ] : [
      "CRM & ERP Systems",
      "Stock and Inventory Management",
      "Custom CMS",
      "Reservation / Appointment Systems",
      "3rd Party Integrations",
      "Scalable Infrastructure"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
  },
  {
    titleKey: "service.seo.title",
    descKey: "service.seo.desc",
    detailsKey: "service.seo.details",
    icon: Search,
    features: (lang: string) => lang === 'tr' ? [
      "On-page & Teknik SEO",
      "Anahtar Kelime Analizi",
      "Rakip Analizi",
      "Yerel SEO",
      "İçerik Optimizasyonu",
      "Backlink Stratejisi"
    ] : [
      "On-page & Technical SEO",
      "Keyword Analysis",
      "Competitor Analysis",
      "Local SEO",
      "Content Optimization",
      "Backlink Strategy"
    ],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop"
  },
  {
    titleKey: "service.social-media.title",
    descKey: "service.social-media.desc",
    detailsKey: "service.social-media.details",
    icon: Share2,
    features: (lang: string) => lang === 'tr' ? [
      "Aylık İçerik Planlama",
      "Görsel Tasarım & Video",
      "Reels & Hikaye Prodüksiyon",
      "YouTube & TikTok Video",
      "Yorum & Mesaj Takibi",
      "Performans Raporlama"
    ] : [
      "Monthly Content Planning",
      "Visual Design & Video",
      "Reels & Story Production",
      "YouTube & TikTok Video",
      "Comment & Message Tracking",
      "Performance Reporting"
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
  }
];

const ServicesPage = () => {
  const { t, language } = useLanguage();
  const allServices = getAllServices(t);
  
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
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              {t('services.subtitle')}
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
                          alt={t(service.titleKey)}
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
                          <h3 className="text-3xl font-bold text-white">{t(service.titleKey)}</h3>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                          {t(service.descKey)}
                        </p>

                        <div className="mb-6">
                          <p className="text-sm font-semibold text-blue-400 mb-3">{t('services.what-we-offer')}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {service.features(language).map((feature, idx) => (
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
                          {t('services.get-started')}
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
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="min-w-[200px]"
            onClick={() => window.location.href = '/contact'}
          >
            {t('cta.button')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

