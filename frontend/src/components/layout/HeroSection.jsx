import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const features = [
    "Seamless test management",
    "Real-time analytics",
    "Secure & reliable platform"
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Active Students" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Shield, value: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-info/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Your
              <span className="text-gradient-primary block">Educational Testing</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-fade-in-delayed">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Streamline assessments with our premium testing platform. Built for modern education with powerful analytics and seamless user experience.
            </p>
          </div>

          {/* Features List */}
          <div className="animate-fade-in-delayed flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/signin">
              <Button size="lg" className="btn-hero group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/signin">
              <Button size="lg" variant="outline" className="btn-ghost-premium">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in-delayed card-premium p-6 text-center"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;