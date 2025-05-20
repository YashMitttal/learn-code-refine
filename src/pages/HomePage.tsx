
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, CheckCircle, Brain, BarChart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const HomePage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="animated-gradient-text">Learn to Code</span> with
              <span className="block mt-2">Complete Transparency</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12">
              A coding platform that doesn't hide test cases, but teaches you through them.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 rounded-full"
                asChild
              >
                <Link to="/problems">
                  Start Coding <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 rounded-full"
                onClick={scrollToFeatures}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract shapes background */}
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-codepurple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[20%] -left-[20%] w-[60%] h-[60%] bg-codeblue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <AnimatedSection animation="float-up" className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl animate-code-pulse">
              <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm">Example Problem</span>
              </div>
              <div className="grid md:grid-cols-2 divide-x divide-gray-700">
                <div className="bg-gray-900 text-gray-100 p-4 font-code text-sm">
                  <div className="text-codepurple-400 mb-4"># Problem: Two Sum</div>
                  <div className="mb-2 text-codeblue-300">def two_sum(nums, target):</div>
                  <div className="pl-4 mb-2 text-gray-300">"""</div>
                  <div className="pl-4 mb-2 text-gray-300">Find indices of two numbers that add up to target</div>
                  <div className="pl-4 mb-2 text-gray-300">"""</div>
                  <div className="pl-4 mb-2">seen = {}</div>
                  <div className="pl-4 mb-2">for i, num in enumerate(nums):</div>
                  <div className="pl-8 mb-2">complement = target - num</div>
                  <div className="pl-8 mb-2">if complement in seen:</div>
                  <div className="pl-12 mb-2 text-codeteal-300">return [seen[complement], i]</div>
                  <div className="pl-8 mb-2">seen[num] = i</div>
                  <div className="pl-4 mb-2 text-codeteal-300">return []  # No solution found</div>
                </div>
                <div className="bg-gray-800 p-4 font-code text-sm">
                  <div className="text-codeblue-400 mb-4"># Visual Test Cases</div>
                  <div className="mb-4">
                    <div className="text-gray-300 mb-1">Input:</div>
                    <div className="pl-4 text-codepurple-300 mb-1">nums = [2, 7, 11, 15]</div>
                    <div className="pl-4 text-codepurple-300 mb-1">target = 9</div>
                    <div className="text-codeteal-400 mt-2 mb-1">Expected: [0, 1]</div>
                    <div className="text-green-400">✓ Passed</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-gray-300 mb-1">Input:</div>
                    <div className="pl-4 text-codepurple-300 mb-1">nums = [3, 2, 4]</div>
                    <div className="pl-4 text-codepurple-300 mb-1">target = 6</div>
                    <div className="text-codeteal-400 mt-2 mb-1">Expected: [1, 2]</div>
                    <div className="text-green-400">✓ Passed</div>
                  </div>
                  <div className="text-gray-400 italic mt-4">All test cases visible for learning!</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why OpenJudge is Different</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're reimagining how code platforms should work, with a focus on learning and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="float-up" delay="0ms" className="card bg-card shadow-md rounded-xl p-8">
              <CheckCircle className="h-12 w-12 text-codeblue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparent Testing</h3>
              <p className="text-muted-foreground">
                All test cases are visible, including edge cases, so you can understand exactly what your code needs to handle.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="float-up" delay="200ms" className="card bg-card shadow-md rounded-xl p-8">
              <Brain className="h-12 w-12 text-codepurple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Educational Focus</h3>
              <p className="text-muted-foreground">
                Detailed explanations and learning hints help build understanding, not just passing tests.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="float-up" delay="400ms" className="card bg-card shadow-md rounded-xl p-8">
              <Code className="h-12 w-12 text-codeteal-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Beginner Friendly</h3>
              <p className="text-muted-foreground">
                Personalized problem recommendations based on the languages you're comfortable with.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="float-up" delay="600ms" className="card bg-card shadow-md rounded-xl p-8">
              <BarChart className="h-12 w-12 text-codeblue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Track your improvement over time with detailed statistics and performance insights.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="float-up" delay="800ms" className="card bg-card shadow-md rounded-xl p-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-codepurple-600 mb-4">
                <path d="M14 4c0-1.1.9-2 2-2" />
                <path d="M14 12V4" />
                <path d="M18 2h-6" />
                <path d="M18 10c3 0 4 2 4 3c0 1.5-2 3-4 3m-6 0c-3 0-4-2-4-3c0-1.5 2-3 4-3" />
                <path d="M18 22c-3 0-4-2-4-3c0-1.5 2-3 4-3m-6 0c3 0 4 2 4 3c0 1.5-2 3-4 3" />
                <path d="M18 19.5c.5 0 1-.1 1.5-.4" />
                <path d="M6.5 8.5c-.5.3-1 .8-1 1.5" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Multiple Languages</h3>
              <p className="text-muted-foreground">
                Practice in both Python and Java, with language-specific hints and feedback.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="float-up" delay="1000ms" className="card bg-card shadow-md rounded-xl p-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-codeteal-600 mb-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Auto-Save Code</h3>
              <p className="text-muted-foreground">
                Never lose your progress with automatic code saving as you work on problems.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection animation="fade-in" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of learners and improve your coding skills with transparent, educational challenges.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 rounded-full"
              asChild
            >
              <Link to="/login">
                Create Free Account
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
