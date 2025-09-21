import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Clock, 
  Award,
  TrendingUp,
  FileText,
  Users,
  Star,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze your resume against job requirements with 95% accuracy.",
    badge: "AI Technology",
    color: "text-blue-600"
  },
  {
    icon: Target,
    title: "Job Matching",
    description: "Get precise matching scores for specific job roles and industries with detailed explanations.",
    badge: "Smart Matching",
    color: "text-green-600"
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Comprehensive reports showing strengths, weaknesses, and improvement areas for your resume.",
    badge: "Analytics",
    color: "text-purple-600"
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get your resume analysis results in seconds, not days. Real-time processing for immediate insights.",
    badge: "Real-time",
    color: "text-yellow-600"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Your personal information is encrypted and secure. We never share your data with third parties.",
    badge: "Secure",
    color: "text-red-600"
  },
  {
    icon: Award,
    title: "Expert Recommendations",
    description: "Receive personalized suggestions from industry experts to improve your resume effectiveness.",
    badge: "Expert Tips",
    color: "text-indigo-600"
  }
];

const stats = [
  { icon: FileText, value: "50,000+", label: "Resumes Processed" },
  { icon: Users, value: "10,000+", label: "Happy Users" },
  { icon: Star, value: "4.9/5", label: "User Rating" },
  { icon: TrendingUp, value: "85%", label: "Success Rate" }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Our Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span> for
            <br />
            Career Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive resume analysis with cutting-edge 
            technology to help you land your dream job.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-background ${feature.color} bg-opacity-10`}>
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Thousands of Professionals
            </h3>
            <p className="text-muted-foreground text-lg">
              Join our growing community of successful career changers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How It Works</h3>
            <p className="text-muted-foreground text-lg">
              Get your resume analyzed in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Resume",
                description: "Simply upload your resume in PDF or Word format to our secure platform."
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Our advanced AI analyzes your resume against job requirements and industry standards."
              },
              {
                step: "03",
                title: "Get Results",
                description: "Receive detailed insights, matching scores, and personalized improvement recommendations."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold mb-4">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-8 h-0.5 bg-border transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;