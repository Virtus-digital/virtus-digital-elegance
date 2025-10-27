import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Megaphone, Share2, Code2, Search, Monitor, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const getAllServices = (t: (key: string) => string) => [
  {
    titleKey: "service.digital-marketing.title",
    descKey: "service.digital-marketing.desc",
    subheadKey: "service.digital-marketing.details",
    icon: Megaphone,
    features: (lang: string) => lang === 'tr' ? [
      "Google Ads (Arama, Görüntülü, YouTube, Alışveriş)",
      "Meta, TikTok, LinkedIn Kampanyaları",
      "Gelişmiş hedefleme, yeniden pazarlama ve offline dönüşüm izleme",
      "Haftalık optimizasyon ve şeffaf raporlama"
    ] : lang === 'ro' ? [
      "Google Ads (Search, Display, YouTube, Shopping)",
      "Campanii Meta, TikTok, LinkedIn",
      "Segmentare avansată a publicului, remarketing și conversii offline",
      "Optimizare săptămânală și rapoarte transparente"
    ] : lang === 'it' ? [
      "Google Ads (Search, Display, YouTube, Shopping)",
      "Campagne Meta, TikTok, LinkedIn",
      "Segmentazione avanzata del pubblico, remarketing e conversioni offline",
      "Ottimizzazione settimanale e report trasparenti"
    ] : [
      "Google Ads (Search, Display, YouTube, Shopping)",
      "Meta, TikTok, LinkedIn Campaigns",
      "Advanced audience segmentation, remarketing & offline conversions",
      "Weekly optimization, transparent reports"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    titleKey: "service.web-dev.title",
    descKey: "service.web-dev.desc",
    subheadKey: "service.web-dev.details",
    icon: Monitor,
    features: (lang: string) => lang === 'tr' ? [
      "WordPress, WooCommerce, Shopify veya özel yazılım altyapıları",
      "Mobil öncelikli tasarım ve yüksek hız",
      "SEO uyumlu altyapı ve entegre analitik sistemleri",
      "Kullanımı kolay yönetim panelleri"
    ] : lang === 'ro' ? [
      "WordPress, WooCommerce, Shopify sau framework-uri personalizate",
      "UX orientat pe mobil și viteză excelentă de încărcare",
      "Arhitectură SEO și analitice integrate",
      "Panouri de administrare ușor de utilizat"
    ] : lang === 'it' ? [
      "WordPress, WooCommerce, Shopify o framework personalizzati",
      "Esperienza utente mobile-first e velocità di caricamento elevata",
      "Architettura SEO e analitiche integrate",
      "Pannelli di amministrazione facili da usare"
    ] : [
      "WordPress, WooCommerce, Shopify, or custom frameworks",
      "Mobile-first UX, blazing load speed",
      "SEO-ready architecture & analytics integrated",
      "Admin panels that you actually enjoy using"
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop"
  },
  {
    titleKey: "service.custom-software.title",
    descKey: "service.custom-software.desc",
    subheadKey: "service.custom-software.details",
    icon: Code2,
    features: (lang: string) => lang === 'tr' ? [
      "CRM ve ERP platformları",
      "Rezervasyon, stok ve belge takip sistemleri",
      "API ve üçüncü parti entegrasyonlar (ödeme, SMS, WhatsApp, CRM)",
      "Güvenli ve ölçeklenebilir altyapı, log sistemi"
    ] : lang === 'ro' ? [
      "Platforme CRM și ERP",
      "Sisteme de rezervare, inventar și urmărire a documentelor",
      "Integrare API și terți (plăți, SMS, WhatsApp, CRM)",
      "Arhitectură sigură și scalabilă cu jurnale de audit"
    ] : lang === 'it' ? [
      "Piattaforme CRM ed ERP",
      "Sistemi di prenotazione, inventario e tracciamento documenti",
      "Integrazioni API e di terze parti (pagamenti, SMS, WhatsApp, CRM)",
      "Architettura sicura e scalabile con log di controllo"
    ] : [
      "CRM & ERP platforms",
      "Reservation, inventory & document tracking systems",
      "API & third-party integrations (payment, SMS, WhatsApp, CRM)",
      "Secure, scalable architecture & audit logs"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
  },
  {
    titleKey: "service.seo.title",
    descKey: "service.seo.desc",
    subheadKey: "service.seo.details",
    icon: Search,
    features: (lang: string) => lang === 'tr' ? [
      "Teknik ve Sayfa İçi SEO denetimleri",
      "Anahtar kelime ve rakip analizi",
      "İçerik optimizasyonu, blog planlaması",
      "Google Haritalar görünürlüğü için yerel SEO"
    ] : lang === 'ro' ? [
      "Audituri SEO tehnice și On-Page",
      "Cercetare de cuvinte cheie și analiză concurențială",
      "Optimizare conținut și planificare blog",
      "SEO local pentru vizibilitate pe Google Maps"
    ] : lang === 'it' ? [
      "Audit SEO tecnici e On-Page",
      "Ricerca di parole chiave e analisi dei concorrenti",
      "Ottimizzazione dei contenuti e pianificazione dei blog",
      "SEO locale per la visibilità su Google Maps"
    ] : [
      "Technical & On-Page SEO audits",
      "Keyword + Competitor Research",
      "Content optimization, blog planning",
      "Local SEO for Google Maps visibility"
    ],
    image: "/2-banner.jpg"
  },
  {
    titleKey: "service.social-media.title",
    descKey: "service.social-media.desc",
    subheadKey: "service.social-media.details",
    icon: Share2,
    features: (lang: string) => lang === 'tr' ? [
      "Aylık içerik planlama ve üretim",
      "Reels, hikayeler, YouTube Shorts",
      "Topluluk yönetimi ve etkileşim",
      "Analitik takibi ve sürekli optimizasyon"
    ] : lang === 'ro' ? [
      "Planificare lunară de conținut și producție creativă",
      "Reels, stories, YouTube Shorts",
      "Management comunitate și implicarea audienței",
      "Analitice și optimizare continuă"
    ] : lang === 'it' ? [
      "Pianificazione mensile dei contenuti e produzione creativa",
      "Reels, Stories, YouTube Shorts",
      "Gestione della community e coinvolgimento del pubblico",
      "Analisi e ottimizzazione continua"
    ] : [
      "Monthly content planning & creative production",
      "Reels, stories, YouTube shorts",
      "Audience engagement & community management",
      "Analytics & continuous optimization"
    ],
    image: "/3-banner.jpg"
  },
  {
    titleKey: "service.hosting-email.title",
    descKey: "service.hosting-email.desc",
    subheadKey: "service.hosting-email.details",
    icon: Server,
    features: (lang: string) => lang === 'tr' ? [
      "Hızlı ve güvenli web hosting servisleri",
      "Profesyonel email hesapları (@firmaniz.com)",
      "SSL sertifikası ve güvenlik önlemleri",
      "7/24 teknik destek ve yedekleme"
    ] : lang === 'ro' ? [
      "Servicii de hosting web rapide și sigure",
      "Conturi de email profesionale (@compania-voastra.com)",
      "Certificat SSL și măsuri de securitate",
      "Suport tehnic 24/7 și backup"
    ] : lang === 'it' ? [
      "Servizi di hosting web veloci e sicuri",
      "Account email professionali (@vostra-azienda.com)",
      "Certificato SSL e misure di sicurezza",
      "Supporto tecnico 24/7 e backup"
    ] : [
      "Fast and secure web hosting services",
      "Professional email accounts (@yourcompany.com)",
      "SSL certificate and security measures",
      "24/7 technical support and backup"
    ],
    image: "/4-banner.jpg"
  }
];

const ServicesPage = () => {
  const { t, language } = useLanguage();
  const allServices = getAllServices(t);
  
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
              {t('services.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-12">
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
                      <div className={`relative h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <img 
                          src={service.image} 
                          alt={t(service.titleKey)}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20"></div>
                      </div>

                      {/* Content */}
                      <div className="p-3 lg:p-5 flex flex-col justify-center">
                        <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
                          <div className="p-2 lg:p-3 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-xl shadow-lg">
                            <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-white">{t(service.titleKey)}</h3>
                        </div>

                        <p className="text-xs lg:text-sm text-gray-300 leading-relaxed mb-2">
                          {t(service.descKey)}
                        </p>

                        <p className="text-xs text-gray-400 leading-relaxed mb-3">
                          {t(service.subheadKey)}
                        </p>

                        <div className="mb-3">
                          <p className="text-xs font-semibold text-blue-400 mb-2">{t('services.what-we-offer')}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            {service.features(language).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-primary"></div>
                                <span className="text-xs text-gray-400">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button 
                          variant="default" 
                          className="w-fit mt-3"
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

