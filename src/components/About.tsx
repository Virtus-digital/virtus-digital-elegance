import { Award, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              {t('about.desc1')}
            </p>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              {t('about.desc2')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground font-medium">{t('about.projects')}</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">30+</div>
                <div className="text-sm text-muted-foreground font-medium">{t('about.clients')}</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground font-medium">{t('about.experience')}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-primary/10">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('about.award')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about.award.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-primary/10">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('about.team')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about.team.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card/30 border border-primary/10">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{t('about.delivery')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about.delivery.desc')}</p>
                </div>
              </div>
            </div>

            {/* New About Content */}
            <div className="mt-16 space-y-12">
              {/* Who We Are */}
              <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {t('aboutus.who')}
                </h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {t('aboutus.who.desc')}
                </p>
              </div>

              {/* Our Evolution */}
              <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {t('aboutus.evolution.title')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">2010</div>
                    <p className="text-lg text-foreground/90">{t('aboutus.evolution.2010')}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">2022</div>
                    <p className="text-lg text-foreground/90">{t('aboutus.evolution.2022')}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">2024</div>
                    <p className="text-lg text-foreground/90">{t('aboutus.evolution.2024')}</p>
                  </div>
                </div>
              </div>

              {/* Our Expertise */}
              <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {t('aboutus.expertise.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-lg text-foreground/90">{t('aboutus.expertise.1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-lg text-foreground/90">{t('aboutus.expertise.2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-lg text-foreground/90">{t('aboutus.expertise.3')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <p className="text-lg text-foreground/90">{t('aboutus.expertise.4')}</p>
                  </div>
                </div>
              </div>

              {/* Our Principle */}
              <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t('aboutus.principle')}
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">Build with Virtue.</p>
                <p className="text-lg text-foreground/90">
                  {t('aboutus.principle.desc')}
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t('aboutus.mission')}
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {t('aboutus.mission.desc')}
                  </p>
                </div>
                <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t('aboutus.vision')}
                  </h3>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {t('aboutus.vision.desc')}
                  </p>
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
