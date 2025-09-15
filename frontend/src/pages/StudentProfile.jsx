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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
              <Link to="/student-dashboard" className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ET</span>
                </div>
                <span className="font-heading text-lg sm:text-xl font-bold text-foreground hidden sm:block">EduTest</span>
              </Link>
              <div className="h-6 w-px bg-border hidden sm:block"></div>
              <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground truncate">My Profile</h1>
            </div>
            <Link to="/student-dashboard" className="flex-shrink-0">
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-none">
          {/* Profile Overview */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Profile Card */}
            <Card className="card-premium overflow-hidden">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                      <AvatarImage src={profileData.avatar} />
                      <AvatarFallback className="text-xl sm:text-2xl bg-primary/10 text-primary font-heading">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 shadow-lg">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1">{profileData.name}</h2>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base break-all">{profileData.email}</p>
                  <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">Joined {profileData.joinDate}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">{profileData.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Overview */}
            <Card className="card-premium">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-base sm:text-lg">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                      <div className={`text-lg sm:text-xl font-bold font-heading ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="card-premium">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg font-heading">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-info flex-shrink-0" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3 animate-fade-in">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <achievement.icon className={`h-3 w-3 sm:h-4 sm:w-4 ${achievement.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-foreground leading-tight">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Tabs defaultValue="profile" className="space-y-4 sm:space-y-6">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                <TabsTrigger value="profile" className="text-xs sm:text-sm py-2 px-2 sm:px-4">Profile</TabsTrigger>
                <TabsTrigger value="security" className="text-xs sm:text-sm py-2 px-2 sm:px-4">Security</TabsTrigger>
                <TabsTrigger value="settings" className="text-xs sm:text-sm py-2 px-2 sm:px-4">Settings</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-4 sm:space-y-6">
                <Card className="card-premium overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <CardTitle className="flex items-center space-x-2 text-base sm:text-lg font-heading">
                          <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          <span>Personal Information</span>
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm mt-1">
                          Update your personal details and bio
                        </CardDescription>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                        className="flex-shrink-0 text-xs sm:text-sm"
                      >
                        <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        {isEditing ? 'Cancel' : 'Edit'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-xs sm:text-sm font-medium">Full Name</Label>
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            disabled={!isEditing}
                            className="text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-xs sm:text-sm font-medium">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            disabled={!isEditing}
                            className="text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-xs sm:text-sm font-medium">Phone</Label>
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            disabled={!isEditing}
                            className="text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-xs sm:text-sm font-medium">Location</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                            disabled={!isEditing}
                            className="text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio" className="text-xs sm:text-sm font-medium">Bio</Label>
                        <Textarea
                          id="bio"
                          value={profileData.bio}
                          onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                          disabled={!isEditing}
                          rows={3}
                          className="text-sm resize-none"
                        />
                      </div>
                      
                      {isEditing && (
                        <div className="flex justify-end pt-2">
                          <Button onClick={handleSaveProfile} disabled={isLoading} className="btn-hero text-sm">
                            {isLoading ? (
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                                <span>Saving...</span>
                              </div>
                            ) : (
                              <>
                                <Save className="h-4 w-4 mr-2" />
                                <span className="hidden sm:inline">Save Changes</span>
                                <span className="sm:hidden">Save</span>
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
              <TabsContent value="security" className="space-y-4 sm:space-y-6">
                <Card className="card-premium overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg font-heading">
                      <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                      <span>Change Password</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm mt-1">
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password" className="text-xs sm:text-sm font-medium">Current Password</Label>
                        <Input
                          id="current-password"
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="text-xs sm:text-sm font-medium">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-xs sm:text-sm font-medium">Confirm New Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                          className="text-sm"
                        />
                      </div>
                      <div className="flex justify-end pt-2">
                        <Button onClick={handlePasswordChange} disabled={isLoading} className="btn-hero text-sm">
                          {isLoading ? (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                              <span>Updating...</span>
                            </div>
                          ) : (
                            <>
                              <Shield className="h-4 w-4 mr-2" />
                              <span className="hidden sm:inline">Update Password</span>
                              <span className="sm:hidden">Update</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-4 sm:space-y-6">
                <Card className="card-premium overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg font-heading">
                      <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                      <span>Notifications</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm mt-1">
                      Manage your notification preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="p-3 sm:p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-2">Email Notifications</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                          Receive email updates about test schedules and results
                        </p>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">Configure</Button>
                      </div>
                      
                      <div className="p-3 sm:p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-2">Push Notifications</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                          Get real-time notifications on your device
                        </p>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">Configure</Button>
                      </div>

                      <div className="p-3 sm:p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-heading text-sm sm:text-base font-semibold text-foreground mb-2">Privacy Settings</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                          Control who can see your profile and achievements
                        </p>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">Manage Privacy</Button>
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