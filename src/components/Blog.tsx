import { Calendar } from "lucide-react";
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
  },
  {
    title: "Building a Social Media Strategy That Works",
    date: "March 10, 2025",
    excerpt: "Learn how to create engaging content and build meaningful connections with your audience.",
    image: blog2,
  },
  {
    title: "Brand Identity: More Than Just a Logo",
    date: "March 5, 2025",
    excerpt: "Discover why comprehensive brand identity goes beyond visual design to create lasting impact.",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, trends, and strategies from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-all duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl hover:text-muted-foreground transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto">
                  Read More →
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
