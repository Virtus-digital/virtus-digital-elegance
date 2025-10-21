import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Zap, Heart, Target, TrendingUp, CheckCircle2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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

const testimonials = [
  {
    name: "Jessica Martinez",
    role: "CEO, TechStart Inc.",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    content: "Virtus Digital transformed our online presence completely. Their strategic approach and attention to detail resulted in a 300% increase in qualified leads within just 3 months. Highly recommended!",
    rating: 5
  },
  {
    name: "Robert Thompson",
    role: "Marketing Director, GrowthCo",
    company: "GrowthCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    content: "Working with Virtus has been a game-changer. Their team's expertise in digital advertising helped us achieve ROI we never thought possible. Professional, responsive, and results-driven.",
    rating: 5
  },
  {
    name: "Amanda Lee",
    role: "Founder, StyleHub",
    company: "StyleHub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    content: "The website they built for us is not just beautiful—it's a conversion machine. Our online sales have doubled, and customer feedback has been overwhelmingly positive. Thank you, Virtus!",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "VP of Sales, MegaCorp",
    company: "MegaCorp",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    content: "Exceptional service from start to finish. The team at Virtus understood our vision and delivered beyond expectations. Our brand has never looked better, and the results speak for themselves.",
    rating: 5
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0b0f19] via-[#0d1320] to-[#0b0f19] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.page.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              {t('about.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.page.desc1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.page.desc2')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">700+</div>
              <div className="text-sm text-gray-400 font-medium">{t('about.stats.projects')}</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-400 font-medium">{t('about.stats.clients')}</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">5+</div>
              <div className="text-sm text-gray-400 font-medium">{t('about.stats.experience')}</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-gray-400 font-medium">{t('about.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.values.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 bg-primary/20 rounded-xl mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{t(value.titleKey)}</h3>
                    <p className="text-sm text-gray-400">{t(value.descKey)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.process.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('about.process.subtitle')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="text-6xl font-bold text-primary/20">{item.step}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 bg-primary/20 rounded-lg">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{t(item.titleKey)}</h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">{t(item.descKey)}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-sm text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              {t('about.testimonials.page.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('about.testimonials.page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('about.cta.page.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('about.cta.page.subtitle')}
          </p>
          <button 
            className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            {t('about.cta.page.button')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

