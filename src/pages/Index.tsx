import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import HRAdminPanel from "@/components/HRAdminPanel";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [showHRPanel, setShowHRPanel] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleHRLogin = () => {
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setShowHRPanel(true);
  };

  const handleBackToMain = () => {
    setShowHRPanel(false);
  };

  // Show HR Admin Panel if logged in
  if (showHRPanel) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleBackToMain}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            ← Back to Main Site
          </button>
        </div>
        <HRAdminPanel />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onHRLogin={handleHRLogin} />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <Footer />
      
      {/* HR Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
};

export default Index;
