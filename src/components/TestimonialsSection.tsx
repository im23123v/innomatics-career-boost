import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, User, Briefcase, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Sindhuja",
    role: "Data Scientist",
    company: "Microsoft",
    location: "Hyderabad",
    rating: 5,
    text: "Innomatics is one of the best places to gain knowledge on data science and also get certified through IBM which can help in getting the right jobs from top companies. Tutors will teach you with real-time examples to understand the concepts in an easy way. Special thanks to Vaibav Sir who taught each concept very clearly.",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Vamshi Raj",
    role: "Machine Learning Engineer", 
    company: "Amazon",
    location: "Bengaluru",
    rating: 5,
    text: "Innomatics Research Labs is the Best platform to transform our career, here I have gained knowledge on Data science through hands-on projects and real-time examples. The trainers are very supportive and help to understand concepts clearly. Highly recommend for career transformation.",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Priya Sharma",
    role: "AI Research Scientist",
    company: "Google",
    location: "Pune",
    rating: 5,
    text: "The AI and Machine Learning course at Innomatics completely transformed my career. The curriculum is industry-relevant and the hands-on approach helped me land my dream job. The mentorship and support throughout the journey was exceptional.",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    company: "Flipkart",
    location: "Hyderabad",
    rating: 5,
    text: "I switched from a non-tech background to web development through Innomatics. The structured curriculum, practical projects, and job assistance program helped me secure a position at a top tech company. Forever grateful to the team!",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Anita Reddy",
    role: "Cybersecurity Analyst",
    company: "Infosys",
    location: "Chennai",
    rating: 5,
    text: "The cybersecurity program at Innomatics provided me with in-depth knowledge and practical skills. The ethical hacking and penetration testing modules were particularly valuable. Now I'm working as a security analyst at a Fortune 500 company.",
    image: "/api/placeholder/60/60"
  },
  {
    name: "Karthik Reddy",
    role: "Mobile App Developer",
    company: "Paytm",
    location: "Noida",
    rating: 5,
    text: "The React Native course helped me transition from web development to mobile app development. The instructors were knowledgeable and the projects we built gave me confidence to apply for mobile developer roles. Highly satisfied with the learning experience.",
    image: "/api/placeholder/60/60"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Students Say</span>
            <br />
            About Their Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Innomatics Research Labs has transformed careers and lives 
            of thousands of professionals across various domains.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase className="w-3 h-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                  </div>
                  <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Innomatics by the Numbers
            </h3>
            <p className="text-muted-foreground text-lg">
              Our impact on students' careers speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Industry Recognition</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Add company logos or recognitions here */}
            <Badge variant="outline" className="px-6 py-3 text-lg">
              NASSCOM FutureSkills Prime
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg">
              IBM Certified Training Partner
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg">
              Times Excellence Award 2019-2020
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;