import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Calendar,
  Plus,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CreateTestModal } from "@/components/admin/CreateTestModal";

const AdminDashboard = () => {
  const [isCreateTestOpen, setIsCreateTestOpen] = useState(false);

  const stats = [
    { label: "Total Students", value: "1,234", icon: Users, color: "text-primary", change: "+12%" },
    { label: "Active Tests", value: "23", icon: BookOpen, color: "text-green-600", change: "+5%" },
    { label: "Avg. Score", value: "84%", icon: TrendingUp, color: "text-blue-600", change: "+3%" },
    { label: "Completion Rate", value: "92%", icon: CheckCircle, color: "text-green-600", change: "+8%" }
  ];

  const recentTests = [
    {
      id: 1,
      title: "Mathematics Midterm",
      subject: "Mathematics",
      students: 45,
      completed: 42,
      avgScore: 78,
      status: "active",
      dueDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Science Quiz",
      subject: "Physics", 
      students: 38,
      completed: 35,
      avgScore: 85,
      status: "active",
      dueDate: "2024-01-18"
    },
    {
      id: 3,
      title: "History Assignment",
      subject: "History",
      students: 52,
      completed: 52,
      avgScore: 82,
      status: "completed",
      dueDate: "2024-01-12"
    }
  ];

  const studentPerformance = [
    { name: "Sarah Johnson", score: 95, tests: 12, improvement: "+5%" },
    { name: "Mike Chen", score: 89, tests: 11, improvement: "+3%" },
    { name: "Emma Davis", score: 92, tests: 10, improvement: "+8%" },
    { name: "Alex Rodriguez", score: 87, tests: 12, improvement: "+2%" },
    { name: "Lisa Wang", score: 94, tests: 11, improvement: "+6%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CM</span>
                </div>
                <span className="font-heading text-xl font-bold text-foreground">ClassMate</span>
              </Link>
              <div className="hidden md:block h-6 w-px bg-border"></div>
              <h1 className="font-heading text-lg md:text-2xl font-bold text-foreground">Admin Dashboard</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button className="btn-hero flex-1 md:flex-none" onClick={() => setIsCreateTestOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Create Test
              </Button>
              <Link to="/signin" className="flex-1 md:flex-none">
                <Button variant="outline" className="w-full">Sign Out</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Welcome */}
        <div className="mb-6">
          <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-1">
            Welcome back, Dr. Anderson! 👋
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Manage your tests, track student progress, and analyze performance metrics.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:scale-[1.02] transition">
              <CardContent className="p-4 flex flex-col justify-between h-full">
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-lg md:text-2xl font-bold">{stat.value}</p>
                <div className="flex items-center justify-between mt-2">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  <Badge variant="secondary">{stat.change}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="tests" className="space-y-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full overflow-x-auto">
            <TabsTrigger value="tests">Tests</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Tests */}
          <TabsContent value="tests" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left side - Tests */}
              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span>Test Management</span>
                      </div>
                      <Button size="sm" className="btn-hero" onClick={() => setIsCreateTestOpen(true)}>
                        <Plus className="h-4 w-4 mr-2" /> New Test
                      </Button>
                    </CardTitle>
                    <CardDescription>Manage your active and completed tests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTests.map((test) => (
                        <div key={test.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${test.status === "completed" ? "bg-green-100" : "bg-blue-100"}`}>
                              {test.status === "completed" ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : (
                                <Clock className="h-5 w-5 text-blue-600" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-semibold truncate">{test.title}</h4>
                              <p className="text-xs text-muted-foreground">{test.subject}</p>
                              <div className="flex flex-wrap gap-2 mt-1 text-xs text-muted-foreground">
                                <span>{test.completed}/{test.students} completed</span>
                                <span>Avg: {test.avgScore}%</span>
                                <span>Due: {test.dueDate}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={test.status === "completed" ? "secondary" : "default"}>{test.status}</Badge>
                            <Button size="sm" variant="outline" onClick={() => alert(`Manage ${test.title}`)}>
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right side - Quick Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full btn-hero" onClick={() => setIsCreateTestOpen(true)}>
                      <Plus className="h-4 w-4 mr-2" /> Create New Test
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => alert("Import Questions feature coming soon!")}>
                      <FileText className="h-4 w-4 mr-2" /> Import Questions
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => alert("Reports feature coming soon!")}>
                      <BarChart3 className="h-4 w-4 mr-2" /> View Reports
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => alert("Send Announcement feature coming soon!")}>
                      <MessageSquare className="h-4 w-4 mr-2" /> Send Announcement
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" /> Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-yellow-50 border rounded-lg">
                      <p className="text-sm font-medium">Test Deadline</p>
                      <p className="text-xs text-muted-foreground">Math Midterm due in 2 days</p>
                    </div>
                    <div className="p-3 bg-blue-50 border rounded-lg">
                      <p className="text-sm font-medium">New Submissions</p>
                      <p className="text-xs text-muted-foreground">5 new test submissions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Students */}
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> Student Performance
                </CardTitle>
                <CardDescription>Track and analyze student progress</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {studentPerformance.map((student, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {student.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">{student.tests} tests completed</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-semibold">{student.score}%</p>
                        <p className="text-xs text-green-600">{student.improvement}</p>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => alert(`Details for ${student.name}`)}>
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" /> Performance Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                  Charts coming soon...
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" /> Trend Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                  Charts coming soon...
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" /> Platform Settings
                </CardTitle>
                <CardDescription>Configure platform preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-1">Test Configuration</h4>
                  <p className="text-sm text-muted-foreground mb-2">Set default test parameters</p>
                  <Button variant="outline" onClick={() => alert("Test Config coming soon!")}>Configure</Button>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-1">User Management</h4>
                  <p className="text-sm text-muted-foreground mb-2">Manage student accounts</p>
                  <Button variant="outline" onClick={() => alert("User Management coming soon!")}>Manage Users</Button>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-1">Notifications</h4>
                  <p className="text-sm text-muted-foreground mb-2">Configure alerts and notifications</p>
                  <Button variant="outline" onClick={() => alert("Notifications coming soon!")}>Set Notifications</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <CreateTestModal open={isCreateTestOpen} onOpenChange={setIsCreateTestOpen} />
    </div>
  );
};

export default AdminDashboard;
