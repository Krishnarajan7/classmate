import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Security", href: "#" },
        { label: "Updates", href: "#" },
        { label: "API Docs", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Contact Us", href: "/contact", isRoute: true },
        { label: "Community", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CM</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">ClassMate</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your educational testing experience with our premium platform. 
              Built for modern education with powerful analytics and seamless user experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/20 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ClassMate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;