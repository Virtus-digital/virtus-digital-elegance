import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const getPosts = (t: (key: string) => string) => [
  {
    titleKey: "blog.post1.title",
    dateKey: "blog.post1.date",
    excerptKey: "blog.post1.excerpt",
    categoryKey: "blog.post1.category",
    image: blog1,
  },
  {
    titleKey: "blog.post2.title",
    dateKey: "blog.post2.date",
    excerptKey: "blog.post2.excerpt",
    categoryKey: "blog.post2.category",
    image: blog2,
  },
  {
    titleKey: "blog.post3.title",
    dateKey: "blog.post3.date",
    excerptKey: "blog.post3.excerpt",
    categoryKey: "blog.post3.category",
    image: blog3,
  },
];

const Blog = () => {
  const { t } = useLanguage();
  const posts = getPosts(t);
  
  return (
    <section id="blog" className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={t(post.titleKey)}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
                    {t(post.categoryKey)}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{t(post.dateKey)}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {t(post.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 line-clamp-3">
                  {t(post.excerptKey)}
                </CardDescription>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary group-hover:gap-2 transition-all"
                >
                  {t('blog.read-more')} 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
