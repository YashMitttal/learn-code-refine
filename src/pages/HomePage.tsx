
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle, Code, FileText } from "lucide-react";

const HomePage = () => {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="py-20 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <AnimatedSection animation="fade-in">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Master Coding with <span className="text-primary">OpenJudge</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Improve your problem-solving skills with our curated collection of coding challenges. 
            Practice, learn, and compete with developers around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/problems">
                Explore Problems <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link to="/login">
                Sign Up Free
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Features Section */}
      <AnimatedSection animation="fade-in" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose OpenJudge?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to help you become a better programmer through practice and feedback.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">600+ Coding Problems</h3>
            <p className="text-muted-foreground">
              Access a diverse range of problems from easy to hard difficulty levels, covering all major algorithms and data structures.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multiple Languages</h3>
            <p className="text-muted-foreground">
              Write and test your solutions in Python, JavaScript, Java, C++, and many other popular programming languages.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Feedback</h3>
            <p className="text-muted-foreground">
              Get immediate feedback on your submissions with detailed test cases and performance metrics to help you improve.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fade-in" className="py-16">
        <div className="glass-card p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Coding?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of developers who are improving their coding skills with OpenJudge.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/problems">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
