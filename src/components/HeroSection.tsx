import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, FileCheck, Users, Sparkles } from "lucide-react";
import VoiceAssistant from "@/components/VoiceAssistant";

const HeroSection = () => {
  const handleChatWithAI = () => {
    window.open("https://innomatics-ai.zapier.app", "_blank");
  };

  const handleCheckResume = () => {
    window.open("https://app.resumesranker.com/", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-accent/50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">AI-Powered Resume Analysis</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Transform Your Career</span>
            <br />
            <span className="text-foreground">with AI-Powered</span>
            <br />
            <span className="text-primary">Resume Analysis</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Discover how well your resume matches job requirements with our advanced AI technology. 
            Get personalized recommendations and boost your career prospects today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" onClick={handleCheckResume}>
              <FileCheck className="w-6 h-6 mr-3" />
              Check Your Resume Relevance
            </Button>
            
            <Button variant="chat" size="xl" onClick={handleChatWithAI}>
              <MessageCircle className="w-6 h-6 mr-3" />
              Chat with Innomatics AI
            </Button>
          </div>

          {/* Voice AI Integration */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-16 border border-border animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-primary mr-3" />
              Experience AI Voice Assistance
            </h3>
            <p className="text-muted-foreground mb-6">
              Interact with our advanced AI assistant using natural voice commands. 
              Get instant guidance on career development and resume optimization.
            </p>
            
            {/* 11Labs Voice Widget Container */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <VoiceAssistant />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Resumes Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Career Transformations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;