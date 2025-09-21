import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Brain,
  Award,
  Users,
  BookOpen
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Innomatics</h1>
                <p className="text-xs text-muted-foreground -mt-1">Research Labs</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Innomatics Research Labs is a pioneer in "Transforming Careers and Lives" 
              of individuals in the Digital Space by providing advanced training on 
              cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open("https://www.innomatics.in/", "_blank")}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open("https://www.innomatics.in/", "_blank")}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open("https://www.innomatics.in/", "_blank")}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open("https://www.innomatics.in/", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open("https://www.innomatics.in/", "_blank")}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Popular Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary" />
              Popular Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Science with Python
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Machine Learning & AI
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Full Stack Web Development
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Cybersecurity & Ethical Hacking
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary" />
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews & Testimonials
                </a>
              </li>
              <li>
                <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Contact Info
            </h3>
            <div className="space-y-4">
              {/* Kukatpally Branch */}
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Kukatpally</h4>
                <p className="text-sm text-muted-foreground">
                  #205, 2nd Floor, Fortune Signature, Near JNTU Metro Station, 
                  Kukatpally, Hyderabad, Telangana 500085
                </p>
              </div>
              
              {/* Gachibowli Branch */}
              <div className="space-y-2">
                <h4 className="font-medium text-primary">Gachibowli</h4>
                <p className="text-sm text-muted-foreground">
                  2nd Floor, Leeway, BP Raju Marg, Opp. Sarath City Capital Mall, 
                  Gachibowli, Hyderabad
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">+91-9951666670</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">+91-9951666674</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">info@innomatics.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mb-12">
          <div className="bg-accent/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary" />
              Certifications & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>NASSCOM FutureSkills Prime Registered Business Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>IBM Authorized Training Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Times Excellence Award 2019-2020 for Best Data Science Institute</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Innomatics Research Labs. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;