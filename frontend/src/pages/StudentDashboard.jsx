import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const upcomingTests = [
    {
      id: 1,
      title: "Mathematics Midterm",
      subject: "Mathematics",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "120 minutes",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Science Quiz",
      subject: "Physics",
      date: "2024-01-18",
      time: "2:00 PM",
      duration: "60 minutes",
      status: "upcoming"
    },
    {
      id: 3,
      title: "History Assignment",
      subject: "History",
      date: "2024-01-20",
      time: "9:00 AM",
      duration: "90 minutes",
      status: "upcoming"
    }
  ];

  const completedTests = [
    {
      id: 1,
      title: "English Literature",
      score: 85,
      maxScore: 100,
      date: "2024-01-10",
      grade: "B+",
      status: "completed"
    },
    {
      id: 2,
      title: "Chemistry Lab",
      score: 92,
      maxScore: 100,
      date: "2024-01-08",
      grade: "A-",
      status: "completed"
    },
    {
      id: 3,
      title: "Biology Quiz",
      score: 78,
      maxScore: 100,
      date: "2024-01-05",
      grade: "B",
      status: "completed"
    }
  ];

  const stats = [
    { label: "Tests Completed", value: "12", icon: CheckCircle, color: "text-success" },
    { label: "Average Score", value: "85%", icon: TrendingUp, color: "text-primary" },
    { label: "Tests Upcoming", value: "3", icon: Clock, color: "text-warning" },
    { label: "Achievements", value: "8", icon: Award, color: "text-info" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">CM</span>
                </div>
                <span className="font-heading text-xl font-bold text-foreground">ClassMate</span>
              </Link>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="font-heading text-2xl font-bold text-foreground">Student Dashboard</h1>
            </div>
            <Link to="/signin">
              <Button variant="outline">Sign Out</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Welcome Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
            Welcome back, Alex! 👋
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Here's your learning progress and upcoming tests.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-premium">
              <CardContent className="p-3 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-lg md:text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-6 w-6 md:h-8 md:w-8 ${stat.color} self-end md:self-auto`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Upcoming Tests */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-warning" />
                  <span>Upcoming Tests</span>
                </CardTitle>
                <CardDescription>
                  Your scheduled tests and assignments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTests.map((test) => (
                    <div key={test.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-muted/30 rounded-lg space-y-3 md:space-y-0">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-warning" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground text-sm md:text-base">{test.title}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{test.subject}</p>
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-1 space-y-1 md:space-y-0">
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {test.date} at {test.time}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {test.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="btn-hero w-full md:w-auto">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Start Test
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Results */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Recent Results</span>
                </CardTitle>
                <CardDescription>
                  Your latest test scores and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedTests.map((test) => (
                    <div key={test.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-success" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{test.title}</h4>
                          <p className="text-sm text-muted-foreground">Completed on {test.date}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Progress value={(test.score / test.maxScore) * 100} className="w-24" />
                            <span className="text-sm font-medium text-foreground">
                              {test.score}/{test.maxScore}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        {test.grade}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Overview */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="font-medium text-foreground">78%</span>
                    </div>
                    <Progress value={78} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">This Week</span>
                      <span className="font-medium text-foreground">92%</span>
                    </div>
                    <Progress value={92} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">This Month</span>
                      <span className="font-medium text-foreground">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full btn-hero hover-scale">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Tests
                  </Button>
                  <Button variant="outline" className="w-full hover-scale">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  <Link to="/student-profile" className="w-full">
                    <Button variant="outline" className="w-full hover-scale">
                      <Calendar className="h-4 w-4 mr-2" />
                      My Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-info" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 animate-fade-in hover-scale cursor-pointer">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center animate-pulse">
                      <Award className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Perfect Score! 🎉</p>
                      <p className="text-xs text-muted-foreground">Chemistry Lab</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 animate-fade-in hover-scale cursor-pointer">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Amazing Improvement! 📈</p>
                      <p className="text-xs text-muted-foreground">+15% this week</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 animate-fade-in hover-scale cursor-pointer">
                    <div className="w-8 h-8 bg-info/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-info animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Streak Master! 🔥</p>
                      <p className="text-xs text-muted-foreground">5 tests in a row</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;