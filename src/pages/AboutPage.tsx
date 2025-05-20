
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const AboutPage = () => {
  return (
    <div className="container py-12">
      <AnimatedSection animation="float-up" className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">About OpenJudge</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          A learning-oriented code evaluation platform built for transparency
        </p>
        
        <div className="prose dark:prose-invert max-w-none">
          <AnimatedSection animation="fade-in" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              For most computer science students, platforms like LeetCode have become an essential part of learning to code. But traditional online judges often hide test cases and simply return "Wrong Answer" without helpful feedback, making it difficult for beginners to understand their mistakes and learn effectively.
            </p>
            <p>
              OpenJudge was born from a simple question: how can we build a code evaluation platform that puts education first? Our mission is to create a transparent, learning-focused environment where users can see all test cases—including edge cases—and receive detailed, step-by-step feedback that explains where their code went wrong and how to fix it.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="reveal-left" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Educational Philosophy</h2>
            <p>
              We believe that the best way to learn is through transparency and constructive feedback. Unlike platforms that treat coding as a competitive sport with hidden challenges, we emphasize understanding over simply "passing" tests.
            </p>
            <p>
              When you submit your code on OpenJudge, you'll see exactly which test cases it passed and which it failed, along with expected outputs, actual outputs, and explanations. This approach turns debugging into a valuable learning experience rather than a frustrating guessing game.
            </p>
            <div className="my-8 bg-muted p-6 rounded-lg border border-border">
              <blockquote className="italic border-l-4 border-primary pl-4">
                "We don't just want you to solve problems—we want you to understand the solutions and grow as a programmer."
              </blockquote>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="reveal-right" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Platform Features</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-foreground">Transparent Test Cases:</strong> All test cases are visible, helping you understand expected inputs and outputs.
              </li>
              <li>
                <strong className="text-foreground">Language Selection:</strong> Practice in multiple programming languages, with syntax-specific hints and guidance.
              </li>
              <li>
                <strong className="text-foreground">Auto-Save:</strong> Your code is automatically saved as you work, so you never lose progress.
              </li>
              <li>
                <strong className="text-foreground">Learning Hints:</strong> Get optional hints for each problem to guide your thinking process.
              </li>
              <li>
                <strong className="text-foreground">Personalization:</strong> Problems are recommended based on your language preferences and skill level.
              </li>
            </ul>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p>
              OpenJudge was created by a team of computer science educators and students who were frustrated with the limitations of existing coding platforms. We combined our experience in education, software development, and UI/UX design to create a platform that truly serves learners.
            </p>
            <p>
              We're constantly improving OpenJudge based on user feedback and educational research. Our team is committed to creating the most effective learning environment for programmers at all stages of their journey.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="float-up" className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-6">
              Ready to start learning in a more transparent, educational environment? Join OpenJudge today and experience a new way to practice coding.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/login">
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/problems">
                  Explore Problems
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
