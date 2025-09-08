import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Users, ArrowRight, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (selectedRole && email && password) {
      // Simulate authentication
      if (selectedRole === "student") {
        navigate("/student-dashboard");
      } else {
        navigate("/admin-dashboard");
      }
    }
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ET</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">ClassMate</span>
            </Link>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
              Choose Your Role
            </h1>
            <p className="text-muted-foreground">
              Select how you'd like to access the platform
            </p>
          </div>

          <div className="space-y-4">
            <Card 
              className="cursor-pointer transition-all duration-300 hover:shadow-large hover:scale-105 card-premium"
              onClick={() => handleRoleSelect("student")}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Student</h3>
                    <p className="text-sm text-muted-foreground">
                      Take tests, view results, and track your progress
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer transition-all duration-300 hover:shadow-large hover:scale-105 card-premium"
              onClick={() => handleRoleSelect("admin")}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Administrator</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage tests, students, and view analytics
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md card-premium">
        <CardHeader className="text-center pb-6">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CM</span>
            </div>
            <span className="font-heading text-xl font-bold text-foreground">ClassMate</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              selectedRole === "student" ? "bg-success/10" : "bg-primary/10"
            }`}>
              {selectedRole === "student" ? (
                <GraduationCap className="h-5 w-5 text-success" />
              ) : (
                <Users className="h-5 w-5 text-primary" />
              )}
            </div>
            <div>
              <CardTitle className="text-left">
                {selectedRole === "student" ? "Student" : "Administrator"} Sign In
              </CardTitle>
            </div>
          </div>
          <CardDescription>
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full btn-hero">
              Sign In to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="mt-6">
            <Separator className="mb-4" />
            <div className="flex justify-between text-sm">
              <button 
                onClick={() => setSelectedRole(null)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                ← Change Role
              </button>
              <a 
                href="#" 
                className="text-primary hover:text-primary/90 transition-colors duration-200"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;