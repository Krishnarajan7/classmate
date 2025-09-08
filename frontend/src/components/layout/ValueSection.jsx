import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Settings, 
  BarChart3, 
  Calendar, 
  Users, 
  BookOpen,
  Clock,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const ValueSection = () => {
  const studentFeatures = [
    {
      icon: BookOpen,
      title: "Smart Test Interface",
      description: "Clean, distraction-free testing environment with auto-save and progress tracking."
    },
    {
      icon: Clock,
      title: "Real-time Feedback",
      description: "Instant results and detailed performance analytics to help you improve."
    },
    {
      icon: Award,
      title: "Achievement Tracking",
      description: "Monitor your progress with comprehensive dashboards and personalized insights."
    }
  ];

  const adminFeatures = [
    {
      icon: Settings,
      title: "Test Management",
      description: "Create, edit, and organize tests with our intuitive management system."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into student performance with comprehensive reporting tools."
    },
    {
      icon: Calendar,
      title: "Scheduling Tools",
      description: "Efficient scheduling and automated notifications for seamless test administration."
    }
  ];

  return (
    <section id="features" className="section-spacing bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Modern Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed specifically for students and administrators to excel in educational testing.
          </p>
        </div>

        {/* Students Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground">For Students</h3>
              </div>
              
              <div className="space-y-6">
                {studentFeatures.map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/signin">
                <Button className="btn-hero mt-6">
                  Student Dashboard
                </Button>
              </Link>
            </div>

            <div className="card-premium p-8 bg-gradient-subtle">
              <div className="aspect-video bg-success/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <GraduationCap className="h-16 w-16 text-success mx-auto mb-4" />
                  <p className="text-muted-foreground">Student Interface Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Administrators Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="card-premium p-8 bg-gradient-subtle">
                <div className="aspect-video bg-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Admin Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground">For Administrators</h3>
              </div>
              
              <div className="space-y-6">
                {adminFeatures.map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/signin">
                <Button className="btn-hero mt-6">
                  Admin Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;