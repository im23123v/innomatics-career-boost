import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Brain, 
  Database, 
  Globe, 
  Smartphone,
  BarChart3,
  Lock,
  Cpu,
  ArrowRight,
  Clock,
  Users,
  Award,
  Star
} from "lucide-react";

const domainCourses = {
  "Data Science": [
    {
      title: "Advanced Data Science with Python",
      duration: "6 months",
      level: "Beginner to Advanced",
      students: "2,500+",
      rating: "4.9",
      price: "₹45,000",
      description: "Comprehensive program covering Python, Machine Learning, Deep Learning, and AI with hands-on projects.",
      skills: ["Python", "Machine Learning", "Deep Learning", "Statistics", "Data Visualization"],
      icon: BarChart3,
      popular: true
    },
    {
      title: "Machine Learning & AI Specialist",
      duration: "8 months", 
      level: "Intermediate",
      students: "1,800+",
      rating: "4.8",
      price: "₹55,000",
      description: "Master advanced ML algorithms, neural networks, and AI applications with industry projects.",
      skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "MLOps"],
      icon: Brain
    },
    {
      title: "Data Analytics Foundation",
      duration: "3 months",
      level: "Beginner",
      students: "3,200+", 
      rating: "4.7",
      price: "₹25,000",
      description: "Perfect starting point for data analytics career with Excel, SQL, Python basics and visualization.",
      skills: ["Excel", "SQL", "Python Basics", "Tableau", "Power BI"],
      icon: Database
    }
  ],
  "Web Development": [
    {
      title: "Full Stack Web Development",
      duration: "6 months",
      level: "Beginner to Advanced", 
      students: "2,100+",
      rating: "4.8",
      price: "₹40,000",
      description: "Complete web development program covering both frontend and backend technologies.",
      skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
      icon: Globe,
      popular: true
    },
    {
      title: "Frontend Development Mastery",
      duration: "4 months",
      level: "Beginner",
      students: "1,900+",
      rating: "4.7", 
      price: "₹30,000",
      description: "Master modern frontend development with React, JavaScript, and responsive design.",
      skills: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Responsive Design"],
      icon: Code
    },
    {
      title: "Backend Development Professional",
      duration: "5 months",
      level: "Intermediate",
      students: "1,400+",
      rating: "4.6",
      price: "₹35,000", 
      description: "Advanced backend development with Node.js, databases, and cloud technologies.",
      skills: ["Node.js", "Python Django", "PostgreSQL", "AWS", "Docker"],
      icon: Database
    }
  ],
  "Mobile Development": [
    {
      title: "Android Development with Kotlin",
      duration: "5 months",
      level: "Beginner to Intermediate",
      students: "1,600+", 
      rating: "4.7",
      price: "₹38,000",
      description: "Build modern Android applications using Kotlin and latest Android development practices.",
      skills: ["Kotlin", "Android Studio", "Material Design", "Firebase", "Play Store"],
      icon: Smartphone,
      popular: true
    },
    {
      title: "React Native Cross-Platform",
      duration: "4 months",
      level: "Intermediate",
      students: "1,200+",
      rating: "4.6",
      price: "₹42,000",
      description: "Develop iOS and Android apps simultaneously using React Native framework.",
      skills: ["React Native", "JavaScript", "Mobile UI/UX", "App Store", "Push Notifications"],
      icon: Smartphone
    }
  ],
  "Cybersecurity": [
    {
      title: "Ethical Hacking & Penetration Testing",
      duration: "6 months",
      level: "Intermediate to Advanced",
      students: "800+",
      rating: "4.9",
      price: "₹50,000",
      description: "Comprehensive cybersecurity program covering ethical hacking and penetration testing.",
      skills: ["Kali Linux", "Network Security", "Web Security", "Cryptography", "Incident Response"],
      icon: Lock,
      popular: true
    },
    {
      title: "Cybersecurity Fundamentals",
      duration: "3 months",
      level: "Beginner",
      students: "1,100+",
      rating: "4.5",
      price: "₹28,000",
      description: "Essential cybersecurity concepts and practices for beginners entering the field.",
      skills: ["Network Basics", "Security Principles", "Risk Assessment", "Compliance", "Security Tools"],
      icon: Lock
    }
  ]
};

const CoursesSection = () => {
  const [selectedDomain, setSelectedDomain] = useState("Data Science");
  const domains = Object.keys(domainCourses);

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Transform Your Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Industry-Leading</span> Courses
            <br />
            for Every Domain
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive selection of courses designed by industry experts 
            to accelerate your career in technology.
          </p>
        </div>

        {/* Domain Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {domains.map((domain) => {
            const isSelected = selectedDomain === domain;
            return (
              <Button
                key={domain}
                variant={isSelected ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedDomain(domain)}
                className={`transition-all duration-300 ${
                  isSelected ? "scale-105" : "hover:scale-105"
                }`}
              >
                {domain === "Data Science" && <BarChart3 className="w-4 h-4 mr-2" />}
                {domain === "Web Development" && <Globe className="w-4 h-4 mr-2" />}
                {domain === "Mobile Development" && <Smartphone className="w-4 h-4 mr-2" />}
                {domain === "Cybersecurity" && <Lock className="w-4 h-4 mr-2" />}
                {domain}
              </Button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainCourses[selectedDomain as keyof typeof domainCourses].map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card key={index} className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-card/50 backdrop-blur-sm">
                {/* Course Header */}
                <div className="relative p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                  {course.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm">{course.description}</p>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  {/* Course Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{course.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{course.level}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">What You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full group-hover:scale-105 transition-transform duration-300">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Can't Find the Right Course?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our counselors will help you choose the perfect learning path based on 
              your career goals and current skill level.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Free Career Counseling
              </Button>
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;