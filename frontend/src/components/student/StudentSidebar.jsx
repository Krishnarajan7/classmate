import { useState } from "react"
import { 
  Home,
  BarChart3, 
  Clock, 
  CalendarDays,
  User,
  Settings,
  Award,
  TrendingUp,
  LogOut,
  BookOpen
} from "lucide-react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const mainNavItems = [
  { title: "Dashboard", url: "/student-dashboard", icon: Home, section: "overview" },
  { title: "Analytics", url: "/student-dashboard?tab=analytics", icon: BarChart3, section: "overview" },
  { title: "Overall Performance", url: "/student-dashboard?tab=performance", icon: TrendingUp, section: "overview" },
]

const testNavItems = [
  { title: "Upcoming Tests", url: "/student-dashboard?tab=upcoming", icon: Clock, section: "tests" },
  { title: "Recent Tests", url: "/student-dashboard?tab=recent", icon: CalendarDays, section: "tests" },
  { title: "Browse Tests", url: "/student-dashboard?tab=browse", icon: BookOpen, section: "tests" },
]

const profileNavItems = [
  { title: "My Profile", url: "/student-profile", icon: User, section: "profile" },
  { title: "Achievements", url: "/student-dashboard?tab=achievements", icon: Award, section: "profile" },
  { title: "Settings", url: "/student-dashboard?tab=settings", icon: Settings, section: "profile" },
]

export function StudentSidebar() {
  const { state, setOpenMobile, isMobile } = useSidebar()
  const collapsed = state === "collapsed"
  const location = useLocation()
  const navigate = useNavigate()
  const [showSignOutDialog, setShowSignOutDialog] = useState(false)
  
  const currentPath = location.pathname + location.search
  
  const isActive = (url) => {
    if (url === "/student-dashboard" && location.pathname === "/student-dashboard" && !location.search) {
      return true
    }
    return currentPath === url
  }

  const getNavCls = (url) =>
    isActive(url) 
      ? "bg-primary text-primary-foreground font-medium" 
      : "hover:bg-accent hover:text-accent-foreground"

  const handleSignOut = () => {
    // Add any cleanup logic here
    navigate("/signin")
    setShowSignOutDialog(false)
  }

  const handleNavigation = (url) => {
    navigate(url);
    // Close mobile sidebar when navigating
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse">
            <span className="text-primary-foreground font-bold text-lg">ET</span>
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduTest
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Student Portal</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Overview Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
            Overview
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`${getNavCls(item.url)} transition-all duration-200 hover-scale rounded-lg`}
                      onClick={() => isMobile && setOpenMobile(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tests Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
            Tests
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {testNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`${getNavCls(item.url)} transition-all duration-200 hover-scale rounded-lg`}
                      onClick={() => isMobile && setOpenMobile(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Profile Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
            Profile
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {profileNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`${getNavCls(item.url)} transition-all duration-200 hover-scale rounded-lg`}
                      onClick={() => isMobile && setOpenMobile(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        {/* User Profile Card - Only show when not collapsed */}
        {!collapsed && (
          <div className="mb-4 p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground truncate">Alex Johnson</p>
                <p className="text-xs text-muted-foreground truncate">Grade 12 Student</p>
              </div>
            </div>
          </div>
        )}

        <AlertDialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              className={`w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 transition-all duration-200 hover-scale rounded-lg ${
                collapsed ? "px-2" : ""
              }`}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span className="ml-2 font-medium">Sign Out</span>}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to sign out?</AlertDialogTitle>
              <AlertDialogDescription>
                You will be redirected to the sign-in page and will need to log in again to access your dashboard.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleSignOut} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Sign Out
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SidebarFooter>
    </Sidebar>
  )
}