import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, FileCheck } from "lucide-react";
import innomaticsLogo from "@/assets/innomatics-logo.png";

interface HeaderProps {
  onHRLogin?: () => void;
}

const Header = ({ onHRLogin }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeCheck = () => {
    window.open("https://app.resumesranker.com/", "_blank");
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={innomaticsLogo} alt="Innomatics Research Labs" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Innomatics</h1>
              <p className="text-xs text-muted-foreground -mt-1">Research Labs</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={onHRLogin}>
              <Users className="w-4 h-4 mr-2" />
              HR Team
            </Button>
            <Button variant="resume" size="sm" onClick={handleResumeCheck}>
              <FileCheck className="w-4 h-4 mr-2" />
              Check Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Courses</a>
              <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" onClick={onHRLogin}>
                  <Users className="w-4 h-4 mr-2" />
                  HR Team
                </Button>
                <Button variant="resume" size="sm" onClick={handleResumeCheck}>
                  <FileCheck className="w-4 h-4 mr-2" />
                  Check Resume
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;