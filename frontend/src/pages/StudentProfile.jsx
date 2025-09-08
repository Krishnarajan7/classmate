import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Settings, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  TrendingUp,
  BookOpen,
  Save,
  Edit,
  Camera,
  Lock,
  Bell,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Computer Science student with a passion for learning and technology.",
    joinDate: "September 2023",
    avatar: "/placeholder.svg"
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const achievements = [
    { name: "Perfect Score", description: "Achieved 100% on Chemistry Lab", date: "Jan 8, 2024", icon: Award, color: "text-success" },
    { name: "Improvement Star", description: "15% score improvement this week", date: "Jan 5, 2024", icon: TrendingUp, color: "text-primary" },
    { name: "Quick Learner", description: "Completed 5 tests in a row", date: "Dec 28, 2023", icon: BookOpen, color: "text-info" },
  ];

  const stats = [
    { label: "Tests Completed", value: "42", color: "text-success" },
    { label: "Average Score", value: "88%", color: "text-primary" },
    { label: "Achievements", value: "12", color: "text-info" },
    { label: "Study Hours", value: "156", color: "text-warning" }
  ];

  const handleSaveProfile = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Profile updated!",
      description: "Your profile information has been saved successfully.",
    });
    
    setIsLoading(false);
    setIsEditing(false);
  };

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "New password and confirmation don't match.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Password updated!",
      description: "Your password has been changed successfully.",
    });
    
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/student-dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">CM</span>
                </div>
                <span className="font-heading text-xl font-bold text-foreground">ClassMate</span>
              </Link>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="font-heading text-2xl font-bold text-foreground">My Profile</h1>
            </div>
            <Link to="/student-dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={profileData.avatar} />
                      <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-1">{profileData.name}</h2>
                  <p className="text-muted-foreground mb-4">{profileData.email}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Joined {profileData.joinDate}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{profileData.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Overview */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-info" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-fade-in">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <achievement.icon className={`h-4 w-4 ${achievement.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card className="card-premium">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <User className="h-5 w-5 text-primary" />
                          <span>Personal Information</span>
                        </CardTitle>
                        <CardDescription>
                          Update your personal details and bio
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        {isEditing ? 'Cancel' : 'Edit'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={profileData.bio}
                          onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                          disabled={!isEditing}
                          rows={3}
                        />
                      </div>
                      
                      {isEditing && (
                        <div className="flex justify-end">
                          <Button onClick={handleSaveProfile} disabled={isLoading} className="btn-hero">
                            {isLoading ? (
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                                <span>Saving...</span>
                              </div>
                            ) : (
                              <>
                                <Save className="h-4 w-4 mr-2" />
                                Save Changes
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lock className="h-5 w-5 text-primary" />
                      <span>Change Password</span>
                    </CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                          id="current-password"
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                        />
                      </div>
                      <Button onClick={handlePasswordChange} disabled={isLoading} className="btn-hero">
                        {isLoading ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                            <span>Updating...</span>
                          </div>
                        ) : (
                          <>
                            <Shield className="h-4 w-4 mr-2" />
                            Update Password
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card className="card-premium">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-primary" />
                      <span>Notifications</span>
                    </CardTitle>
                    <CardDescription>
                      Manage your notification preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Receive email updates about test schedules and results
                        </p>
                        <Button variant="outline">Configure</Button>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Push Notifications</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Get real-time notifications on your device
                        </p>
                        <Button variant="outline">Configure</Button>
                      </div>

                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Privacy Settings</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Control who can see your profile and achievements
                        </p>
                        <Button variant="outline">Manage Privacy</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;