import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, ChevronDown, Megaphone, Share2, Target, Code, ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredServices = [
    {
      title: "Digital Advertising",
      tagline: "Strategic campaigns that convert",
      description: "Strategic campaigns that reach your audience across all digital channels with precision and impact. We leverage data-driven insights to maximize ROI and create compelling narratives that convert.",
      icon: Megaphone,
    },
    {
      title: "Social Media Management",
      tagline: "Build engaged communities",
      description: "Building engaged communities and amplifying your brand voice across social platforms. From content creation to community management, we handle it all with strategic precision.",
      icon: Share2,
    },
    {
      title: "Brand Strategy",
      tagline: "Craft memorable experiences",
      description: "Crafting memorable brand experiences that resonate with your audience. We create cohesive brand identities that stand out in crowded markets and drive customer loyalty.",
      icon: Target,
    },
    {
      title: "Web Development",
      tagline: "Beautiful, functional products",
      description: "Creating beautiful, functional digital products that drive results and delight users. Our development team brings designs to life with clean, scalable code.",
      icon: Code,
    },
  ];

  const portfolioPreview = [
    {
      title: "ERM Rent a Car",
      client: "ERM",
      result: "+42% conversions",
      image: "/erm.png",
    },
    {
      title: "Ravenalab",
      client: "Travel Agency",
      result: "3x inquiries",
      image: "/ravena.png",
    },
    {
      title: "Fertina IVF",
      client: "Fertility Clinic",
      result: "+65% appointments",
      image: "/fertina.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <Navbar />
      
      {/* Hero Section - Enhanced */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "4s" }}></div>
          
          {/* Dense star field - hundreds of animated particles */}
          {/* Row 1 */}
          <div className="absolute top-[5%] left-[2%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "0.5s" }}></div>
          <div className="absolute top-[5%] left-[8%] w-2 h-2 bg-blue-300/70 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "1.2s" }}></div>
          <div className="absolute top-[5%] left-[15%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-3" style={{ animationDuration: "6s", animationDelay: "2.8s" }}></div>
          <div className="absolute top-[5%] left-[22%] w-1 h-1 bg-blue-400/60 rounded-full animate-starfall-4" style={{ animationDuration: "10s", animationDelay: "0.1s" }}></div>
          <div className="absolute top-[5%] left-[28%] w-2 h-2 bg-blue-300/50 rounded-full animate-starfall-5" style={{ animationDuration: "14s", animationDelay: "3.5s" }}></div>
          <div className="absolute top-[5%] left-[35%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[5%] left-[42%] w-1 h-1 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-[5%] left-[48%] w-2 h-2 bg-blue-300/40 rounded-full animate-starfall-3" style={{ animationDuration: "11s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[5%] left-[55%] w-1 h-1 bg-blue-500/60 rounded-full animate-starfall-4" style={{ animationDuration: "13s", animationDelay: "4.2s" }}></div>
          <div className="absolute top-[5%] left-[62%] w-1 h-1 bg-blue-400/90 rounded-full animate-starfall-5" style={{ animationDuration: "5s", animationDelay: "0.7s" }}></div>
          <div className="absolute top-[5%] left-[68%] w-2 h-2 bg-blue-300/30 rounded-full animate-starfall-2" style={{ animationDuration: "15s", animationDelay: "1.5s" }}></div>
          <div className="absolute top-[5%] left-[75%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "3.1s" }}></div>
          <div className="absolute top-[5%] left-[82%] w-1 h-1 bg-blue-400/50 rounded-full animate-starfall-3" style={{ animationDuration: "6.5s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[5%] left-[88%] w-2 h-2 bg-blue-300/85 rounded-full animate-starfall-4" style={{ animationDuration: "12.5s", animationDelay: "2.4s" }}></div>
          <div className="absolute top-[5%] left-[95%] w-1 h-1 bg-blue-500/40 rounded-full animate-starfall-5" style={{ animationDuration: "9.5s", animationDelay: "1.1s" }}></div>
          
          {/* Row 2 */}
          <div className="absolute top-[12%] left-[5%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "2.3s" }}></div>
          <div className="absolute top-[12%] left-[12%] w-1 h-1 bg-blue-400/50 rounded-full animate-starfall-3" style={{ animationDuration: "7.5s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[12%] left-[18%] w-2 h-2 bg-blue-300/80 rounded-full animate-starfall-4" style={{ animationDuration: "13s", animationDelay: "1.7s" }}></div>
          <div className="absolute top-[12%] left-[25%] w-1 h-1 bg-blue-500/60 rounded-full animate-starfall-5" style={{ animationDuration: "9s", animationDelay: "3.2s" }}></div>
          <div className="absolute top-[12%] left-[32%] w-1 h-1 bg-blue-400/90 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "0.4s" }}></div>
          <div className="absolute top-[12%] left-[38%] w-2 h-2 bg-blue-300/30 rounded-full animate-starfall-2" style={{ animationDuration: "14.5s", animationDelay: "2.9s" }}></div>
          <div className="absolute top-[12%] left-[45%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-3" style={{ animationDuration: "8s", animationDelay: "1.3s" }}></div>
          <div className="absolute top-[12%] left-[52%] w-1 h-1 bg-blue-400/40 rounded-full animate-starfall-4" style={{ animationDuration: "12s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[12%] left-[58%] w-2 h-2 bg-blue-300/70 rounded-full animate-starfall-5" style={{ animationDuration: "10.5s", animationDelay: "3.8s" }}></div>
          <div className="absolute top-[12%] left-[65%] w-1 h-1 bg-blue-500/50 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "1.9s" }}></div>
          <div className="absolute top-[12%] left-[72%] w-1 h-1 bg-blue-400/85 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "2.7s" }}></div>
          <div className="absolute top-[12%] left-[78%] w-2 h-2 bg-blue-300/45 rounded-full animate-starfall-3" style={{ animationDuration: "11.5s", animationDelay: "0.2s" }}></div>
          <div className="absolute top-[12%] left-[85%] w-1 h-1 bg-blue-500/75 rounded-full animate-starfall-4" style={{ animationDuration: "9.5s", animationDelay: "4.1s" }}></div>
          <div className="absolute top-[12%] left-[92%] w-1 h-1 bg-blue-400/35 rounded-full animate-starfall-5" style={{ animationDuration: "8.5s", animationDelay: "1.4s" }}></div>
          
          {/* Row 3 */}
          <div className="absolute top-[18%] left-[3%] w-2 h-2 bg-blue-300/60 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "1.6s" }}></div>
          <div className="absolute top-[18%] left-[10%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "3.4s" }}></div>
          <div className="absolute top-[18%] left-[16%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-3" style={{ animationDuration: "13s", animationDelay: "0.5s" }}></div>
          <div className="absolute top-[18%] left-[23%] w-2 h-2 bg-blue-300/40 rounded-full animate-starfall-4" style={{ animationDuration: "8.5s", animationDelay: "2.2s" }}></div>
          <div className="absolute top-[18%] left-[30%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-5" style={{ animationDuration: "11.5s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[18%] left-[36%] w-1 h-1 bg-blue-400/50 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[18%] left-[43%] w-2 h-2 bg-blue-300/75 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "3.7s" }}></div>
          <div className="absolute top-[18%] left-[50%] w-1 h-1 bg-blue-500/60 rounded-full animate-starfall-3" style={{ animationDuration: "9s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-[18%] left-[56%] w-1 h-1 bg-blue-400/85 rounded-full animate-starfall-4" style={{ animationDuration: "5.5s", animationDelay: "2.6s" }}></div>
          <div className="absolute top-[18%] left-[63%] w-2 h-2 bg-blue-300/35 rounded-full animate-starfall-5" style={{ animationDuration: "12s", animationDelay: "1.1s" }}></div>
          <div className="absolute top-[18%] left-[70%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "4.3s" }}></div>
          <div className="absolute top-[18%] left-[76%] w-1 h-1 bg-blue-400/45 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "0.7s" }}></div>
          <div className="absolute top-[18%] left-[83%] w-2 h-2 bg-blue-300/65 rounded-full animate-starfall-3" style={{ animationDuration: "10.5s", animationDelay: "2.8s" }}></div>
          <div className="absolute top-[18%] left-[90%] w-1 h-1 bg-blue-500/55 rounded-full animate-starfall-4" style={{ animationDuration: "6.5s", animationDelay: "1.4s" }}></div>
          <div className="absolute top-[18%] left-[97%] w-1 h-1 bg-blue-400/90 rounded-full animate-starfall-5" style={{ animationDuration: "13.5s", animationDelay: "3.2s" }}></div>
          
          {/* Row 4 */}
          <div className="absolute top-[25%] left-[1%] w-1 h-1 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[25%] left-[7%] w-1 h-1 bg-blue-500/50 rounded-full animate-starfall-3" style={{ animationDuration: "11s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[25%] left-[14%] w-2 h-2 bg-blue-300/80 rounded-full animate-starfall-4" style={{ animationDuration: "6s", animationDelay: "3.5s" }}></div>
          <div className="absolute top-[25%] left-[21%] w-1 h-1 bg-blue-400/60 rounded-full animate-starfall-5" style={{ animationDuration: "9.5s", animationDelay: "1.3s" }}></div>
          <div className="absolute top-[25%] left-[27%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-1" style={{ animationDuration: "7s", animationDelay: "0.4s" }}></div>
          <div className="absolute top-[25%] left-[34%] w-2 h-2 bg-blue-300/30 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "2.7s" }}></div>
          <div className="absolute top-[25%] left-[41%] w-1 h-1 bg-blue-400/85 rounded-full animate-starfall-3" style={{ animationDuration: "5.5s", animationDelay: "1.9s" }}></div>
          <div className="absolute top-[25%] left-[47%] w-1 h-1 bg-blue-500/40 rounded-full animate-starfall-4" style={{ animationDuration: "10s", animationDelay: "3.8s" }}></div>
          <div className="absolute top-[25%] left-[54%] w-2 h-2 bg-blue-300/70 rounded-full animate-starfall-5" style={{ animationDuration: "12.5s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[25%] left-[61%] w-1 h-1 bg-blue-400/55 rounded-full animate-starfall-1" style={{ animationDuration: "8.5s", animationDelay: "2.4s" }}></div>
          <div className="absolute top-[25%] left-[67%] w-1 h-1 bg-blue-500/75 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "1.7s" }}></div>
          <div className="absolute top-[25%] left-[74%] w-2 h-2 bg-blue-300/45 rounded-full animate-starfall-3" style={{ animationDuration: "14.5s", animationDelay: "3.1s" }}></div>
          <div className="absolute top-[25%] left-[81%] w-1 h-1 bg-blue-400/65 rounded-full animate-starfall-4" style={{ animationDuration: "9s", animationDelay: "0.2s" }}></div>
          <div className="absolute top-[25%] left-[87%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-5" style={{ animationDuration: "7.5s", animationDelay: "2.9s" }}></div>
          <div className="absolute top-[25%] left-[94%] w-2 h-2 bg-blue-300/50 rounded-full animate-starfall-1" style={{ animationDuration: "11.5s", animationDelay: "1.5s" }}></div>
          
          {/* Row 5 */}
          <div className="absolute top-[32%] left-[4%] w-2 h-2 bg-blue-500/60 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "1.2s" }}></div>
          <div className="absolute top-[32%] left-[11%] w-1 h-1 bg-blue-300/70 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "3.6s" }}></div>
          <div className="absolute top-[32%] left-[17%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "0.7s" }}></div>
          <div className="absolute top-[32%] left-[24%] w-2 h-2 bg-blue-500/40 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "2.3s" }}></div>
          <div className="absolute top-[32%] left-[31%] w-1 h-1 bg-blue-300/90 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[32%] left-[37%] w-1 h-1 bg-blue-400/50 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "0.4s" }}></div>
          <div className="absolute top-[32%] left-[44%] w-2 h-2 bg-blue-500/75 rounded-full animate-starfall-2" style={{ animationDuration: "13.5s", animationDelay: "3.2s" }}></div>
          <div className="absolute top-[32%] left-[51%] w-1 h-1 bg-blue-300/35 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[32%] left-[57%] w-1 h-1 bg-blue-400/85 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[32%] left-[64%] w-2 h-2 bg-blue-500/55 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "2.8s" }}></div>
          <div className="absolute top-[32%] left-[71%] w-1 h-1 bg-blue-300/65 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "1.5s" }}></div>
          <div className="absolute top-[32%] left-[77%] w-1 h-1 bg-blue-400/45 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "3.9s" }}></div>
          <div className="absolute top-[32%] left-[84%] w-2 h-2 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-[32%] left-[91%] w-1 h-1 bg-blue-300/55 rounded-full animate-starfall-2" style={{ animationDuration: "9.5s", animationDelay: "2.6s" }}></div>
          <div className="absolute top-[32%] left-[98%] w-1 h-1 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "1.7s" }}></div>
          
          {/* Row 6 */}
          <div className="absolute top-[38%] left-[2%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "2.4s" }}></div>
          <div className="absolute top-[38%] left-[9%] w-1 h-1 bg-blue-500/60 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[38%] left-[15%] w-2 h-2 bg-blue-300/50 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "3.1s" }}></div>
          <div className="absolute top-[38%] left-[22%] w-1 h-1 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "1.3s" }}></div>
          <div className="absolute top-[38%] left-[29%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "2.7s" }}></div>
          <div className="absolute top-[38%] left-[35%] w-2 h-2 bg-blue-300/30 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[38%] left-[42%] w-1 h-1 bg-blue-400/85 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "3.4s" }}></div>
          <div className="absolute top-[38%] left-[48%] w-1 h-1 bg-blue-500/40 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "1.9s" }}></div>
          <div className="absolute top-[38%] left-[55%] w-2 h-2 bg-blue-300/75 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "0.2s" }}></div>
          <div className="absolute top-[38%] left-[62%] w-1 h-1 bg-blue-400/55 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "2.9s" }}></div>
          <div className="absolute top-[38%] left-[68%] w-1 h-1 bg-blue-500/65 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "1.6s" }}></div>
          <div className="absolute top-[38%] left-[75%] w-2 h-2 bg-blue-300/45 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "3.7s" }}></div>
          <div className="absolute top-[38%] left-[82%] w-1 h-1 bg-blue-400/60 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "0.5s" }}></div>
          <div className="absolute top-[38%] left-[88%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "10.5s", animationDelay: "2.2s" }}></div>
          <div className="absolute top-[38%] left-[95%] w-2 h-2 bg-blue-300/35 rounded-full animate-starfall-2" style={{ animationDuration: "9.5s", animationDelay: "1.1s" }}></div>
          
          {/* Row 7 */}
          <div className="absolute top-[45%] left-[6%] w-2 h-2 bg-blue-300/70 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "1.4s" }}></div>
          <div className="absolute top-[45%] left-[13%] w-1 h-1 bg-blue-500/50 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "3.2s" }}></div>
          <div className="absolute top-[45%] left-[19%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[45%] left-[26%] w-2 h-2 bg-blue-300/40 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[45%] left-[33%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-[45%] left-[39%] w-1 h-1 bg-blue-400/60 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "2.8s" }}></div>
          <div className="absolute top-[45%] left-[46%] w-2 h-2 bg-blue-300/85 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "1.7s" }}></div>
          <div className="absolute top-[45%] left-[53%] w-1 h-1 bg-blue-500/35 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "3.6s" }}></div>
          <div className="absolute top-[45%] left-[59%] w-1 h-1 bg-blue-400/75 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[45%] left-[66%] w-2 h-2 bg-blue-300/55 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "2.4s" }}></div>
          <div className="absolute top-[45%] left-[73%] w-1 h-1 bg-blue-500/65 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "1.1s" }}></div>
          <div className="absolute top-[45%] left-[79%] w-1 h-1 bg-blue-400/45 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "3.3s" }}></div>
          <div className="absolute top-[45%] left-[86%] w-2 h-2 bg-blue-300/80 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[45%] left-[93%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-2" style={{ animationDuration: "9.5s", animationDelay: "2.6s" }}></div>
          
          {/* Row 8 */}
          <div className="absolute top-[52%] left-[3%] w-1 h-1 bg-blue-500/60 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "2.3s" }}></div>
          <div className="absolute top-[52%] left-[10%] w-1 h-1 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "0.7s" }}></div>
          <div className="absolute top-[52%] left-[16%] w-2 h-2 bg-blue-300/50 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "3.1s" }}></div>
          <div className="absolute top-[52%] left-[23%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[52%] left-[30%] w-1 h-1 bg-blue-400/40 rounded-full animate-starfall-2" style={{ animationDuration: "10.5s", animationDelay: "0.4s" }}></div>
          <div className="absolute top-[52%] left-[36%] w-2 h-2 bg-blue-300/75 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "2.6s" }}></div>
          <div className="absolute top-[52%] left-[43%] w-1 h-1 bg-blue-500/55 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "1.2s" }}></div>
          <div className="absolute top-[52%] left-[50%] w-1 h-1 bg-blue-400/85 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "3.4s" }}></div>
          <div className="absolute top-[52%] left-[56%] w-2 h-2 bg-blue-300/30 rounded-full animate-starfall-2" style={{ animationDuration: "13.5s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[52%] left-[63%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[52%] left-[69%] w-1 h-1 bg-blue-400/60 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "1.5s" }}></div>
          <div className="absolute top-[52%] left-[76%] w-2 h-2 bg-blue-300/45 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "3.7s" }}></div>
          <div className="absolute top-[52%] left-[83%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "0.2s" }}></div>
          <div className="absolute top-[52%] left-[89%] w-1 h-1 bg-blue-400/35 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "2.8s" }}></div>
          <div className="absolute top-[52%] left-[96%] w-2 h-2 bg-blue-300/65 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "1.6s" }}></div>
          
          {/* Row 9 */}
          <div className="absolute top-[58%] left-[5%] w-2 h-2 bg-blue-400/50 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "1.3s" }}></div>
          <div className="absolute top-[58%] left-[12%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "3.5s" }}></div>
          <div className="absolute top-[58%] left-[18%] w-1 h-1 bg-blue-300/60 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[58%] left-[25%] w-2 h-2 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "2.2s" }}></div>
          <div className="absolute top-[58%] left-[32%] w-1 h-1 bg-blue-500/40 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "1.7s" }}></div>
          <div className="absolute top-[58%] left-[38%] w-1 h-1 bg-blue-300/85 rounded-full animate-starfall-2" style={{ animationDuration: "12.5s", animationDelay: "0.4s" }}></div>
          <div className="absolute top-[58%] left-[45%] w-2 h-2 bg-blue-400/55 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "3.1s" }}></div>
          <div className="absolute top-[58%] left-[52%] w-1 h-1 bg-blue-500/75 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "1.9s" }}></div>
          <div className="absolute top-[58%] left-[58%] w-1 h-1 bg-blue-300/35 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "2.6s" }}></div>
          <div className="absolute top-[58%] left-[65%] w-2 h-2 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[58%] left-[72%] w-1 h-1 bg-blue-500/65 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "3.3s" }}></div>
          <div className="absolute top-[58%] left-[78%] w-1 h-1 bg-blue-300/45 rounded-full animate-starfall-2" style={{ animationDuration: "10.5s", animationDelay: "1.1s" }}></div>
          <div className="absolute top-[58%] left-[85%] w-2 h-2 bg-blue-400/90 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "2.9s" }}></div>
          <div className="absolute top-[58%] left-[92%] w-1 h-1 bg-blue-500/50 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "0.2s" }}></div>
          
          {/* Row 10 */}
          <div className="absolute top-[65%] left-[1%] w-1 h-1 bg-blue-300/70 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[65%] left-[8%] w-1 h-1 bg-blue-500/60 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[65%] left-[14%] w-2 h-2 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "3.2s" }}></div>
          <div className="absolute top-[65%] left-[21%] w-1 h-1 bg-blue-300/50 rounded-full animate-starfall-2" style={{ animationDuration: "9.5s", animationDelay: "1.4s" }}></div>
          <div className="absolute top-[65%] left-[28%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-[65%] left-[34%] w-2 h-2 bg-blue-400/30 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "2.7s" }}></div>
          <div className="absolute top-[65%] left-[41%] w-1 h-1 bg-blue-300/75 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[65%] left-[47%] w-1 h-1 bg-blue-500/45 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "3.6s" }}></div>
          <div className="absolute top-[65%] left-[54%] w-2 h-2 bg-blue-400/65 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[65%] left-[61%] w-1 h-1 bg-blue-300/55 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "2.4s" }}></div>
          <div className="absolute top-[65%] left-[67%] w-1 h-1 bg-blue-500/85 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "1.7s" }}></div>
          <div className="absolute top-[65%] left-[74%] w-2 h-2 bg-blue-400/40 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "3.1s" }}></div>
          <div className="absolute top-[65%] left-[81%] w-1 h-1 bg-blue-300/80 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[65%] left-[87%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "2.5s" }}></div>
          <div className="absolute top-[65%] left-[94%] w-2 h-2 bg-blue-400/35 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "1.2s" }}></div>
          
          {/* Row 11 */}
          <div className="absolute top-[72%] left-[4%] w-2 h-2 bg-blue-500/55 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "1.6s" }}></div>
          <div className="absolute top-[72%] left-[11%] w-1 h-1 bg-blue-300/65 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "3.3s" }}></div>
          <div className="absolute top-[72%] left-[17%] w-1 h-1 bg-blue-400/75 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "0.5s" }}></div>
          <div className="absolute top-[72%] left-[24%] w-2 h-2 bg-blue-500/40 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "2.2s" }}></div>
          <div className="absolute top-[72%] left-[31%] w-1 h-1 bg-blue-300/85 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[72%] left-[37%] w-1 h-1 bg-blue-400/50 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[72%] left-[44%] w-2 h-2 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "3.7s" }}></div>
          <div className="absolute top-[72%] left-[51%] w-1 h-1 bg-blue-300/35 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "2.4s" }}></div>
          <div className="absolute top-[72%] left-[57%] w-1 h-1 bg-blue-400/90 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "0.7s" }}></div>
          <div className="absolute top-[72%] left-[64%] w-2 h-2 bg-blue-500/60 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "1.3s" }}></div>
          <div className="absolute top-[72%] left-[71%] w-1 h-1 bg-blue-300/45 rounded-full animate-starfall-2" style={{ animationDuration: "9.5s", animationDelay: "3.1s" }}></div>
          <div className="absolute top-[72%] left-[77%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "0.2s" }}></div>
          <div className="absolute top-[72%] left-[84%] w-2 h-2 bg-blue-500/30 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "2.8s" }}></div>
          <div className="absolute top-[72%] left-[91%] w-1 h-1 bg-blue-300/75 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "1.5s" }}></div>
          <div className="absolute top-[72%] left-[98%] w-1 h-1 bg-blue-400/65 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "0.4s" }}></div>
          
          {/* Row 12 */}
          <div className="absolute top-[78%] left-[2%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "2.5s" }}></div>
          <div className="absolute top-[78%] left-[9%] w-1 h-1 bg-blue-500/50 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[78%] left-[15%] w-2 h-2 bg-blue-300/70 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "3.4s" }}></div>
          <div className="absolute top-[78%] left-[22%] w-1 h-1 bg-blue-400/60 rounded-full animate-starfall-2" style={{ animationDuration: "9.5s", animationDelay: "1.7s" }}></div>
          <div className="absolute top-[78%] left-[29%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-[78%] left-[35%] w-2 h-2 bg-blue-300/40 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "2.9s" }}></div>
          <div className="absolute top-[78%] left-[42%] w-1 h-1 bg-blue-400/85 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "1.9s" }}></div>
          <div className="absolute top-[78%] left-[48%] w-1 h-1 bg-blue-500/35 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "3.6s" }}></div>
          <div className="absolute top-[78%] left-[55%] w-2 h-2 bg-blue-300/75 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[78%] left-[62%] w-1 h-1 bg-blue-400/55 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "2.3s" }}></div>
          <div className="absolute top-[78%] left-[68%] w-1 h-1 bg-blue-500/65 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[78%] left-[75%] w-2 h-2 bg-blue-300/45 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "3.2s" }}></div>
          <div className="absolute top-[78%] left-[82%] w-1 h-1 bg-blue-400/80 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[78%] left-[88%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "2.6s" }}></div>
          <div className="absolute top-[78%] left-[95%] w-2 h-2 bg-blue-300/50 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "1.2s" }}></div>
          
          {/* Row 13 */}
          <div className="absolute top-[85%] left-[6%] w-2 h-2 bg-blue-300/60 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "1.4s" }}></div>
          <div className="absolute top-[85%] left-[13%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "3.6s" }}></div>
          <div className="absolute top-[85%] left-[19%] w-1 h-1 bg-blue-400/40 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "0.7s" }}></div>
          <div className="absolute top-[85%] left-[26%] w-2 h-2 bg-blue-300/85 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "2.3s" }}></div>
          <div className="absolute top-[85%] left-[33%] w-1 h-1 bg-blue-500/50 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "1.9s" }}></div>
          <div className="absolute top-[85%] left-[39%] w-1 h-1 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "0.4s" }}></div>
          <div className="absolute top-[85%] left-[46%] w-2 h-2 bg-blue-300/35 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "3.8s" }}></div>
          <div className="absolute top-[85%] left-[53%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "2.6s" }}></div>
          <div className="absolute top-[85%] left-[59%] w-1 h-1 bg-blue-400/45 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[85%] left-[66%] w-2 h-2 bg-blue-300/75 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[85%] left-[73%] w-1 h-1 bg-blue-500/65 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "3.4s" }}></div>
          <div className="absolute top-[85%] left-[79%] w-1 h-1 bg-blue-400/55 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "1.6s" }}></div>
          <div className="absolute top-[85%] left-[86%] w-2 h-2 bg-blue-300/80 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "0.2s" }}></div>
          <div className="absolute top-[85%] left-[93%] w-1 h-1 bg-blue-500/40 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "2.9s" }}></div>
          
          {/* Row 14 */}
          <div className="absolute top-[92%] left-[3%] w-1 h-1 bg-blue-500/70 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "2.2s" }}></div>
          <div className="absolute top-[92%] left-[10%] w-1 h-1 bg-blue-400/50 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "0.9s" }}></div>
          <div className="absolute top-[92%] left-[16%] w-2 h-2 bg-blue-300/80 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "3.3s" }}></div>
          <div className="absolute top-[92%] left-[23%] w-1 h-1 bg-blue-500/60 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "1.8s" }}></div>
          <div className="absolute top-[92%] left-[30%] w-1 h-1 bg-blue-400/90 rounded-full animate-starfall-2" style={{ animationDuration: "10.5s", animationDelay: "0.5s" }}></div>
          <div className="absolute top-[92%] left-[36%] w-2 h-2 bg-blue-300/30 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "2.7s" }}></div>
          <div className="absolute top-[92%] left-[43%] w-1 h-1 bg-blue-500/85 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "1.3s" }}></div>
          <div className="absolute top-[92%] left-[50%] w-1 h-1 bg-blue-400/40 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "3.5s" }}></div>
          <div className="absolute top-[92%] left-[56%] w-2 h-2 bg-blue-300/70 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "0.6s" }}></div>
          <div className="absolute top-[92%] left-[63%] w-1 h-1 bg-blue-500/55 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "2.4s" }}></div>
          <div className="absolute top-[92%] left-[69%] w-1 h-1 bg-blue-400/75 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "1.6s" }}></div>
          <div className="absolute top-[92%] left-[76%] w-2 h-2 bg-blue-300/45 rounded-full animate-starfall-2" style={{ animationDuration: "14s", animationDelay: "3.7s" }}></div>
          <div className="absolute top-[92%] left-[83%] w-1 h-1 bg-blue-500/80 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-[92%] left-[89%] w-1 h-1 bg-blue-400/35 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "2.8s" }}></div>
          <div className="absolute top-[92%] left-[96%] w-2 h-2 bg-blue-300/65 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "1.7s" }}></div>
          
          {/* Row 15 */}
          <div className="absolute top-[98%] left-[5%] w-2 h-2 bg-blue-400/55 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "1.5s" }}></div>
          <div className="absolute top-[98%] left-[12%] w-1 h-1 bg-blue-500/75 rounded-full animate-starfall-2" style={{ animationDuration: "7s", animationDelay: "3.4s" }}></div>
          <div className="absolute top-[98%] left-[18%] w-1 h-1 bg-blue-300/45 rounded-full animate-starfall-2" style={{ animationDuration: "11s", animationDelay: "0.8s" }}></div>
          <div className="absolute top-[98%] left-[25%] w-2 h-2 bg-blue-400/85 rounded-full animate-starfall-2" style={{ animationDuration: "8.5s", animationDelay: "2.3s" }}></div>
          <div className="absolute top-[98%] left-[32%] w-1 h-1 bg-blue-500/50 rounded-full animate-starfall-2" style={{ animationDuration: "6s", animationDelay: "1.9s" }}></div>
          <div className="absolute top-[98%] left-[38%] w-1 h-1 bg-blue-300/80 rounded-full animate-starfall-2" style={{ animationDuration: "12s", animationDelay: "0.4s" }}></div>
          <div className="absolute top-[98%] left-[45%] w-2 h-2 bg-blue-400/35 rounded-full animate-starfall-2" style={{ animationDuration: "9s", animationDelay: "3.6s" }}></div>
          <div className="absolute top-[98%] left-[52%] w-1 h-1 bg-blue-500/90 rounded-full animate-starfall-2" style={{ animationDuration: "5.5s", animationDelay: "2.7s" }}></div>
          <div className="absolute top-[98%] left-[58%] w-1 h-1 bg-blue-300/60 rounded-full animate-starfall-2" style={{ animationDuration: "13s", animationDelay: "0.7s" }}></div>
          <div className="absolute top-[98%] left-[65%] w-2 h-2 bg-blue-400/70 rounded-full animate-starfall-2" style={{ animationDuration: "7.5s", animationDelay: "2.1s" }}></div>
          <div className="absolute top-[98%] left-[72%] w-1 h-1 bg-blue-500/40 rounded-full animate-starfall-2" style={{ animationDuration: "10s", animationDelay: "3.3s" }}></div>
          <div className="absolute top-[98%] left-[78%] w-1 h-1 bg-blue-300/85 rounded-full animate-starfall-2" style={{ animationDuration: "6.5s", animationDelay: "1.6s" }}></div>
          <div className="absolute top-[98%] left-[85%] w-2 h-2 bg-blue-400/65 rounded-full animate-starfall-2" style={{ animationDuration: "11.5s", animationDelay: "0.2s" }}></div>
          <div className="absolute top-[98%] left-[92%] w-1 h-1 bg-blue-500/55 rounded-full animate-starfall-2" style={{ animationDuration: "8s", animationDelay: "2.9s" }}></div>
        </div>


        {/* Content */}
        <div className="relative z-10 container-custom text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
                We Create Digital
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-gradient">
                Experiences That Connect
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: "0.4s" }}>
              Transform your vision into digital reality with strategic design, cutting-edge development, and data-driven marketing that delivers measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button
                size="lg"
                className="btn-primary min-w-[220px] h-14 text-lg font-semibold group"
                onClick={() => scrollToSection("services")}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="btn-secondary min-w-[220px] h-14 text-lg font-semibold group"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-14 h-14 border-2 border-primary/50 rounded-full flex items-center justify-center glass hover:border-primary hover:scale-110 transition-all duration-300 cursor-pointer group">
            <ChevronDown className="w-6 h-6 text-primary group-hover:text-primary-foreground animate-bounce" />
          </div>
        </div>
      </section>


      {/* Services Preview with Enhanced Design */}
      <section id="services" className="section-padding bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden section-divider">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              What We Do Best
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
              We don't just build websites or run ads. We craft comprehensive digital strategies that transform how your audience perceives and interacts with your brand.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From initial concept to final execution, we're with you every step of the way—turning challenges into opportunities and ideas into measurable results.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <Accordion type="multiple" className="space-y-4">
              {featuredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={`service-${index}`}
                    className="group relative glass-strong rounded-2xl overflow-hidden hover:border-primary/50 card-hover transition-all duration-500 fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger className="px-8 py-8 hover:no-underline [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-primary/5 [&[data-state=open]]:to-blue-600/5 transition-all duration-500">
                      <div className="flex items-center gap-8 w-full">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 group-data-[state=open]:opacity-40 transition-all duration-500"></div>
                          <div className="relative p-5 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-2 group-data-[state=open]:scale-110 group-data-[state=open]:rotate-3 transition-all duration-500">
                            <Icon className="h-8 w-8" />
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-blue-400 font-medium">
                            {service.tagline}
                          </p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-8">
                      <div className="pt-6 pl-24">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Button size="sm" variant="link" className="text-primary p-0 h-auto font-semibold" asChild>
                          <Link to="/services">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="text-center fade-in-up">
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              And that's just the beginning. We offer 8+ specialized services designed to cover every aspect of your digital presence.
            </p>
            <Button size="lg" asChild className="btn-primary group">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden section-divider">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              Success Stories That Speak
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
              Numbers don't lie. We've helped over 700 brands worldwide transform their digital presence and achieve remarkable growth. Here are some of our proudest moments.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Each project is a partnership. Each success is shared. Let's write your success story next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {portfolioPreview.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl glass-strong hover:border-primary/50 card-hover transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-blue-300">{project.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              These are just 3 of our 700+ successful projects. Each one represents a unique challenge, a creative solution, and a satisfied client.
            </p>
            <Button size="lg" asChild className="group">
              <Link to="/portfolio">
                See Our Complete Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Text Heavy */}
      <section className="py-32 bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                Why We're Different
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 font-semibold leading-relaxed mb-8">
                We're not just another digital agency. We're storytellers, problem-solvers, and growth hackers rolled into one.
              </p>
            </div>

            <div className="space-y-12 mb-16">
              <div className="flex items-start gap-6 group animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Award className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    Award-Winning Excellence
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our work speaks for itself. We've been recognized by industry leaders for our innovative approaches to digital marketing, design thinking, and data-driven strategies. But awards are just the cherry on top—what really matters is the impact we create for your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Users className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    A Team That Actually Cares
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We're not a faceless corporation. We're a passionate team of creatives, strategists, developers, and marketers who genuinely care about your success. Your wins are our wins. Your challenges become our missions. We're in this together, from day one to launch day and beyond.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    Results You Can Measure
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Pretty designs are great, but they mean nothing without results. That's why everything we do is backed by data, tested rigorously, and optimized continuously. We don't just promise growth—we deliver it, track it, and prove it with real metrics that matter to your bottom line.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 rounded-2xl p-12 border-2 border-primary/20">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                Want to know more about our team, our process, and what makes us tick? <span className="text-blue-400 font-semibold">We'd love to share our story with you.</span>
              </p>
              <Button size="lg" variant="outline" asChild className="group border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <Link to="/about">
                  Meet the Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-[#0b0f19] via-[#0d1320] to-[#0b0f19] relative overflow-hidden section-divider">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute top-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "3s" }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what real business owners have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                name: "Jessica Martinez",
                role: "CEO, TechStart Inc.",
                content: "Virtus Digital transformed our online presence completely. Their strategic approach resulted in a 300% increase in qualified leads within just 3 months.",
                rating: 5
              },
              {
                name: "Robert Thompson",
                role: "Marketing Director, GrowthCo",
                content: "Working with Virtus has been a game-changer. Their expertise in digital advertising helped us achieve ROI we never thought possible.",
                rating: 5
              },
              {
                name: "Amanda Lee",
                role: "Founder, StyleHub",
                content: "The website they built is not just beautiful—it's a conversion machine. Our online sales have doubled, and customer feedback has been overwhelmingly positive.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="glass-strong rounded-2xl p-8 card-hover transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              These are just a few of our success stories. We've helped hundreds of businesses achieve similar—and even better—results. From startups to established enterprises, our clients consistently report dramatic improvements in their digital performance.
            </p>
            <Button size="lg" asChild className="btn-secondary group">
              <Link to="/about">
                Read More Success Stories
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-starfall-2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-starfall-2" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your business goals and drive real results. Join 700+ successful brands who trust us with their digital transformation.
          </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
                className="bg-primary text-white hover:bg-primary/90 hover:text-white min-w-[220px] h-14 text-lg font-semibold group shadow-xl"
              asChild
            >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[220px] h-14 text-lg font-semibold group"
              asChild
            >
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
