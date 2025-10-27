import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Zap, Heart, Target, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "10+ years in digital design and brand strategy"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Full-stack expert with passion for clean code"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Data-driven marketer specializing in growth"
  },
  {
    name: "David Kim",
    role: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Creating intuitive experiences that users love"
  }
];

const getProcess = (t: (key: string) => string) => [
  {
    step: "01",
    titleKey: "about.process.1.title",
    descKey: "about.process.1.desc",
    icon: Target
  },
  {
    step: "02",
    titleKey: "about.process.2.title",
    descKey: "about.process.2.desc",
    icon: TrendingUp
  },
  {
    step: "03",
    titleKey: "about.process.3.title",
    descKey: "about.process.3.desc",
    icon: Zap
  },
  {
    step: "04",
    titleKey: "about.process.4.title",
    descKey: "about.process.4.desc",
    icon: CheckCircle2
  }
];

const getValues = (t: (key: string) => string) => [
  {
    titleKey: "about.value.innovation",
    descKey: "about.value.innovation.desc",
    icon: Zap
  },
  {
    titleKey: "about.value.excellence",
    descKey: "about.value.excellence.desc",
    icon: Award
  },
  {
    titleKey: "about.value.collaboration",
    descKey: "about.value.collaboration.desc",
    icon: Users
  },
  {
    titleKey: "about.value.passion",
    descKey: "about.value.passion.desc",
    icon: Heart
  }
];

const AboutPage = () => {
  const { t } = useLanguage();
  const process = getProcess(t);
  const values = getValues(t);
  
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.page.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              {t('about.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {t('about.page.desc1')}
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('about.page.desc2')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">700+</div>
                <div className="text-sm text-gray-400 font-medium">{t('about.stats.projects')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-400 font-medium">{t('about.stats.clients')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-400 font-medium">{t('about.stats.experience')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-400 font-medium">{t('about.stats.satisfaction')}</div>
              </div>
            </div>

            {/* About Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Who We Are */}
              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('aboutus.who')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('aboutus.who.desc')}
                  </p>
                </CardContent>
              </Card>

              {/* Our Principle */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('aboutus.principle')}
                  </h3>
                  <p className="text-primary font-semibold mb-4">Build with Virtue.</p>
                  <p className="text-gray-300">
                    {t('aboutus.principle.desc')}
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('aboutus.mission')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('aboutus.mission.desc')}
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t('aboutus.vision')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('aboutus.vision.desc')}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Evolution Timeline */}
            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 mb-16">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {t('aboutus.evolution.title')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <p className="text-gray-300">{t('aboutus.evolution.2010')}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <p className="text-gray-300">{t('aboutus.evolution.2022')}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <p className="text-gray-300">{t('aboutus.evolution.2024')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expertise */}
            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {t('aboutus.expertise.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-gray-300">{t('aboutus.expertise.1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-gray-300">{t('aboutus.expertise.2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-gray-300">{t('aboutus.expertise.3')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-gray-300">{t('aboutus.expertise.4')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.process.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              {t('about.process.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="text-4xl font-bold text-primary/20">{item.step}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{t(item.titleKey)}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{t(item.descKey)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.team.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-4 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-3 border-4 border-primary/20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-sm text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('about.cta.page.title')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('about.cta.page.subtitle')}
          </p>
          <button 
            className="about-cta-btn px-6 py-3 text-base font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#171c26' }}
            onClick={() => window.location.href = '/contact'}
          >
            <span className="flex items-center gap-2">
              {t('about.cta.page.button')}
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

