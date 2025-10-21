import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const posts = [
  {
    title: "The Future of Digital Marketing in 2025",
    date: "March 15, 2025",
    author: "Sarah Johnson",
    readTime: "8 min read",
    excerpt: "Explore the latest trends shaping the digital marketing landscape and how brands can stay ahead of the curve in an ever-evolving digital world.",
    content: "As we move through 2025, digital marketing continues to evolve at a rapid pace. From AI-powered personalization to immersive AR experiences, brands need to stay ahead to remain competitive...",
    image: blog1,
    category: "Marketing"
  },
  {
    title: "Building a Social Media Strategy That Works",
    date: "March 10, 2025",
    author: "Emily Rodriguez",
    readTime: "6 min read",
    excerpt: "Learn how to create engaging content and build meaningful connections with your audience across all major social media platforms.",
    content: "A successful social media strategy isn't just about posting regularly—it's about creating content that resonates, engages, and converts. Here's how to build one that actually works...",
    image: blog2,
    category: "Social Media"
  },
  {
    title: "Brand Identity: More Than Just a Logo",
    date: "March 5, 2025",
    author: "Sarah Johnson",
    readTime: "7 min read",
    excerpt: "Discover why comprehensive brand identity goes beyond visual design to create lasting impact and customer loyalty.",
    content: "Your brand is more than your logo, color palette, or tagline. It's the sum of every interaction customers have with your business. Let's dive into what makes a truly memorable brand...",
    image: blog3,
    category: "Branding"
  },
  {
    title: "SEO Best Practices for 2025",
    date: "February 28, 2025",
    author: "Michael Chen",
    readTime: "10 min read",
    excerpt: "Master the latest SEO techniques and algorithm updates to boost your organic search rankings and drive quality traffic.",
    content: "Search engine optimization has evolved significantly. Core Web Vitals, E-A-T, and user experience signals are now more important than ever...",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
    category: "SEO"
  },
  {
    title: "The Power of Video Marketing",
    date: "February 20, 2025",
    author: "David Kim",
    readTime: "5 min read",
    excerpt: "Why video content is dominating digital marketing and how you can leverage it to engage your audience more effectively.",
    content: "Video consumption is at an all-time high. From short-form content on TikTok to long-form YouTube videos, discover how to harness the power of video marketing...",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
    category: "Content"
  },
  {
    title: "Email Marketing: Still Relevant in 2025",
    date: "February 15, 2025",
    author: "Emily Rodriguez",
    readTime: "6 min read",
    excerpt: "Despite new channels emerging, email marketing remains one of the highest ROI digital marketing strategies. Here's how to do it right.",
    content: "Email isn't dead—far from it. With proper segmentation, personalization, and automation, email marketing delivers an average ROI of $42 for every $1 spent...",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: "Marketing"
  }
];

const BlogPage = () => {
  const { t } = useLanguage();
  
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
              {t('blog.page.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              {t('blog.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
        <section className="py-12 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <Card className="group border-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={posts[0].image}
                        alt={posts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm text-lg px-4 py-1">
                          {t('blog.featured')}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-4" variant="outline">
                        {posts[0].category}
                      </Badge>
                      <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                        {posts[0].title}
                      </h2>
                      <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                        {posts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{posts[0].author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{posts[0].date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{posts[0].readTime}</span>
                        </div>
                      </div>
                      <Button variant="default" className="w-fit group/btn">
                        {t('blog.read-article')}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white hover:text-primary transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary group-hover:gap-2 transition-all"
                    >
                      {t('blog.read-more')} 
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('blog.newsletter.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-white/60 transition-all"
              />
              <Button 
                size="lg" 
                variant="secondary"
                className="min-w-[150px]"
              >
                {t('blog.newsletter.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;

