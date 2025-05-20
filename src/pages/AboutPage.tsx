
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Code, Users, BookOpen, Globe, Github, MessageSquare, Zap, Shield, Star, Trophy, BookMarked, Laptop } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const AboutPage = () => {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <AnimatedSection animation="float-up" className="max-w-4xl mx-auto">
        <div className="relative mb-16 text-center">
          {/* Background Decoration */}
          <div className="absolute -z-10 inset-0">
            <div className="absolute top-1/3 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-center relative">
            About <span className="animated-gradient-text">OpenJudge</span>
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-8">
            A learning-oriented code evaluation platform built for transparency
          </p>
          
          <div className="flex justify-center">
            <div className="glass-card inline-flex px-6 py-3 rounded-full">
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Open Source</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">10K+ Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">500+ Problems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <AnimatedSection animation="fade-in" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              Our Mission
            </h2>
            
            <div className="glass-card p-6 rounded-xl mb-6">
              <p>
                For most computer science students, platforms like LeetCode have become an essential part of learning to code. But traditional online judges often hide test cases and simply return "Wrong Answer" without helpful feedback, making it difficult for beginners to understand their mistakes and learn effectively.
              </p>
            </div>
            
            <p>
              OpenJudge was born from a simple question: how can we build a code evaluation platform that puts education first? Our mission is to create a transparent, learning-focused environment where users can see all test cases—including edge cases—and receive detailed, step-by-step feedback that explains where their code went wrong and how to fix it.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground text-sm">Full visibility into test cases and expected outputs</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Education First</h3>
                <p className="text-muted-foreground text-sm">Explanatory feedback designed to help you learn</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Practical Skills</h3>
                <p className="text-muted-foreground text-sm">Industry-relevant problem sets and approaches</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="reveal-left" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              Educational Philosophy
            </h2>
            <p>
              We believe that the best way to learn is through transparency and constructive feedback. Unlike platforms that treat coding as a competitive sport with hidden challenges, we emphasize understanding over simply "passing" tests.
            </p>
            <p>
              When you submit your code on OpenJudge, you'll see exactly which test cases it passed and which it failed, along with expected outputs, actual outputs, and explanations. This approach turns debugging into a valuable learning experience rather than a frustrating guessing game.
            </p>
            <div className="my-8 glass-card p-6 rounded-xl border border-primary/20">
              <blockquote className="italic border-l-4 border-primary pl-4">
                "We don't just want you to solve problems—we want you to understand the solutions and grow as a programmer."
              </blockquote>
            </div>
            
            <div className="rounded-xl overflow-hidden glass-card mt-10">
              <div className="grid md:grid-cols-2">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Learning Through Visibility</h3>
                  <p className="text-muted-foreground mb-4">
                    Our transparent approach to test cases means you'll never waste time guessing what inputs are being tested.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>See all test inputs and expected outputs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Understand edge cases before you start coding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Learn debugging through visible test comparison</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/20 p-6 font-code">
                  <div className="text-sm opacity-70 mb-2"># Example Test Case Visibility</div>
                  <pre className="text-xs">
                    <code>
{`Input:
nums = [3, 3], target = 6

Expected Output:
[0, 1]

Your Output:
[0, 1]

Status: ✅ Passed

Edge Case Input:
nums = [], target = 0

Expected Output:
[]

Your Output:
[0]

Status: ❌ Failed
Explanation: Your code doesn't check for empty arrays`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="reveal-right" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mr-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              Platform Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Beginners</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <div>
                      <strong className="text-foreground block">Transparent Test Cases:</strong>
                      <span className="text-muted-foreground text-sm">All test cases are visible, helping you understand expected inputs and outputs.</span>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <div>
                      <strong className="text-foreground block">Learning Hints:</strong>
                      <span className="text-muted-foreground text-sm">Get optional hints for each problem to guide your thinking process.</span>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <div>
                      <strong className="text-foreground block">Auto-Save:</strong>
                      <span className="text-muted-foreground text-sm">Your code is automatically saved as you work, so you never lose progress.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Advanced Users</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <div>
                      <strong className="text-foreground block">Language Selection:</strong>
                      <span className="text-muted-foreground text-sm">Practice in multiple programming languages, with syntax-specific hints.</span>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <div>
                      <strong className="text-foreground block">Personalization:</strong>
                      <span className="text-muted-foreground text-sm">Problems are recommended based on your language preferences and skill level.</span>
                    </div>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <div>
                      <strong className="text-foreground block">Performance Analytics:</strong>
                      <span className="text-muted-foreground text-sm">Track your improvement across different problem categories and languages.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
          
          {/* NEW SECTION: How It Works */}
          <AnimatedSection animation="fade-in" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mr-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              How OpenJudge Works
            </h2>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Choose a Problem</h3>
                    <p className="text-muted-foreground">
                      Browse our extensive collection of problems, filtered by difficulty, topic, and language. 
                      All problems include detailed descriptions and examples to get you started.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Write Your Solution</h3>
                    <p className="text-muted-foreground">
                      Use our browser-based IDE to write code in your preferred language. 
                      The IDE includes syntax highlighting, auto-completion, and other helpful features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Test Against Visible Cases</h3>
                    <p className="text-muted-foreground">
                      Unlike other platforms, all test cases are visible to you from the beginning. 
                      Run your code against these cases to see exactly how it behaves.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Submit and Review</h3>
                    <p className="text-muted-foreground">
                      Submit your solution when you're ready. You'll receive detailed feedback on each test case, 
                      including explanations for any failures. All test cases remain visible, even the "hidden" ones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="rounded-full w-8 h-8 bg-primary/20 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Learn and Improve</h3>
                    <p className="text-muted-foreground">
                      Review our provided solution explanations and community solutions to deepen your understanding. 
                      Track your progress and identify areas for improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* NEW SECTION: Comparison with Other Platforms */}
          <AnimatedSection animation="reveal-left" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              Why Choose OpenJudge
            </h2>
            
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-6 bg-primary/5">
                <h3 className="text-lg font-bold mb-2">How We Compare</h3>
                <p className="text-muted-foreground">
                  OpenJudge is designed with education in mind, not just competition or assessment.
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-muted">
                      <th className="py-3 px-4 text-left">Feature</th>
                      <th className="py-3 px-4 text-center">OpenJudge</th>
                      <th className="py-3 px-4 text-center">Traditional Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-muted">
                      <td className="py-3 px-4">Test Case Visibility</td>
                      <td className="py-3 px-4 text-center text-green-400 font-medium">
                        <div className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          All Visible
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">Limited/Hidden</td>
                    </tr>
                    <tr className="border-b border-muted">
                      <td className="py-3 px-4">Failure Feedback</td>
                      <td className="py-3 px-4 text-center text-green-400 font-medium">
                        <div className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Detailed Explanations
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">Pass/Fail Only</td>
                    </tr>
                    <tr className="border-b border-muted">
                      <td className="py-3 px-4">Hints System</td>
                      <td className="py-3 px-4 text-center text-green-400 font-medium">
                        <div className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Progressive Hints
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">Minimal or None</td>
                    </tr>
                    <tr className="border-b border-muted">
                      <td className="py-3 px-4">Educational Focus</td>
                      <td className="py-3 px-4 text-center text-green-400 font-medium">
                        <div className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Primary Goal
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">Secondary Goal</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Community Solutions</td>
                      <td className="py-3 px-4 text-center text-green-400 font-medium">
                        <div className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          With Explanations
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">Limited/Premium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              Our Team
            </h2>
            <div className="glass-card p-6 rounded-xl">
              <p>
                OpenJudge was created by a team of computer science educators and students who were frustrated with the limitations of existing coding platforms. We combined our experience in education, software development, and UI/UX design to create a platform that truly serves learners.
              </p>
              <p className="mt-4">
                We're constantly improving OpenJudge based on user feedback and educational research. Our team is committed to creating the most effective learning environment for programmers at all stages of their journey.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center mt-10">
              <div className="glass-card p-6 rounded-xl w-64 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Lisa Chen</h3>
                <p className="text-muted-foreground text-sm">Lead Developer</p>
              </div>
              <div className="glass-card p-6 rounded-xl w-64 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Dr. Michael Singh</h3>
                <p className="text-muted-foreground text-sm">Educational Director</p>
              </div>
              <div className="glass-card p-6 rounded-xl w-64 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Alex Johnson</h3>
                <p className="text-muted-foreground text-sm">Problem Curator</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* NEW SECTION: Success Stories */}
          <AnimatedSection animation="float-up" className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mr-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              Success Stories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Laptop className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">CS Student to Google Engineer</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4 py-1">
                  "Using OpenJudge's transparent approach to problem-solving completely changed my interview preparation. 
                  I was able to understand patterns in test cases that other platforms kept hidden. This helped me land my 
                  dream job at Google."
                </blockquote>
                <p className="mt-3 text-right font-medium">— Jamie Park, Software Engineer</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <BookMarked className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Bootcamp Success Story</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4 py-1">
                  "As a bootcamp instructor, I've seen a dramatic improvement in my students' understanding since switching 
                  to OpenJudge. The visible test cases and detailed feedback help learners build a much deeper understanding 
                  of algorithms."
                </blockquote>
                <p className="mt-3 text-right font-medium">— Dr. Taylor Rodriguez, Bootcamp Lead</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="float-up" className="text-center mt-20">
            <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Ready to start learning in a more transparent, educational environment? Join OpenJudge today and experience a new way to practice coding.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="neon-border">
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
            
            <div className="mt-16 flex justify-center">
              <div className="glass-card rounded-full px-8 py-4 inline-flex items-center space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <Github className="h-5 w-5 mr-1" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <Globe className="h-5 w-5 mr-1" />
                  <span>Community</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>Discord</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
