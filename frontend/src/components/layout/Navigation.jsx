import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CM</span>
            </div>
            <span className="font-heading text-xl font-bold text-foreground">ClassMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost" className="font-medium">
                Sign In
              </Button>
            </Link>
            <Link to="/signin">
              <Button className="btn-hero">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden transition-transform duration-200 hover:scale-105"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              <Menu className={`h-5 w-5 transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <X className={`h-5 w-5 absolute inset-0 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full font-medium">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-hero w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;