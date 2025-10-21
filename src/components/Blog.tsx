import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    title: "The Future of Digital Marketing in 2025",
    date: "March 15, 2025",
    excerpt: "Explore the latest trends shaping the digital marketing landscape and how brands can stay ahead.",
    image: blog1,
    category: "Marketing"
  },
  {
    title: "Building a Social Media Strategy That Works",
    date: "March 10, 2025",
    excerpt: "Learn how to create engaging content and build meaningful connections with your audience.",
    image: blog2,
    category: "Social Media"
  },
  {
    title: "Brand Identity: More Than Just a Logo",
    date: "March 5, 2025",
    excerpt: "Discover why comprehensive brand identity goes beyond visual design to create lasting impact.",
    image: blog3,
    category: "Branding"
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, trends, and strategies from our team of experts.
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
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary group-hover:gap-2 transition-all"
                >
                  Read More 
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
