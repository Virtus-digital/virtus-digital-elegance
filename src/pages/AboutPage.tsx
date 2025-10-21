import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Zap, Heart, Target, TrendingUp, CheckCircle2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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

const process = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "We dive deep into your business, audience, and goals to understand what makes you unique and what your customers need.",
    icon: Target
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Based on insights, we craft a tailored strategy with clear objectives, timelines, and KPIs to measure success.",
    icon: TrendingUp
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Our creative team brings the strategy to life with stunning designs and robust development that exceeds expectations.",
    icon: Zap
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "We launch your project with precision, then continuously monitor and optimize for maximum performance and ROI.",
    icon: CheckCircle2
  }
];

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
    icon: Zap
  },
  {
    title: "Excellence",
    description: "Quality is non-negotiable. We strive for perfection in every project we undertake.",
    icon: Award
  },
  {
    title: "Collaboration",
    description: "Your success is our success. We work as partners, not just vendors.",
    icon: Users
  },
  {
    title: "Passion",
    description: "We love what we do, and it shows in the energy and creativity we bring to every project.",
    icon: Heart
  }
];

const AboutPage = () => {
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
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              We're more than a digital agency — we're your growth partner, dedicated to transforming your vision into digital reality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              At Virtus Digital, we believe in the power of digital transformation. Our team of creative strategists, designers, and developers work together to create experiences that not only look beautiful but deliver measurable results.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded on principles of creativity, precision, and innovation, we've helped hundreds of brands establish their digital presence and achieve their growth objectives. From startups to established enterprises, we bring the same level of dedication and expertise to every project.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">700+</div>
              <div className="text-sm text-gray-400 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-400 font-medium">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">5+</div>
              <div className="text-sm text-gray-400 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">98%</div>
              <div className="text-sm text-gray-400 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
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
                    <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                    <p className="text-sm text-gray-400">{value.description}</p>
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
              Our Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers results every time
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
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
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
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it — hear from those we've helped succeed
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <button 
            className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

