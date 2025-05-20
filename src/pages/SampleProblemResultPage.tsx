
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertCircle, ChevronLeft, Code, RefreshCw } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { sampleProblem, updateSampleProblemStatus } from "@/data/sampleProblem";
import { useToast } from "@/hooks/use-toast";

const SampleProblemResultPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const testResults = sampleProblem.testResults;
  
  useEffect(() => {
    // Update the sample problem status when viewing results
    updateSampleProblemStatus();
  }, []);

  const passedCount = testResults.filter(test => test.passed).length;
  const totalCount = testResults.length;
  const allPassed = passedCount === totalCount;
  
  const handleRetrySubmission = () => {
    toast({
      title: "Submission in progress",
      description: "Reprocessing your solution...",
    });
    
    // Navigate to the submission page to simulate the submission process
    navigate("/submission-success");
  };
  
  return (
    <div className="container py-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/problems')} 
        className="mb-6"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Problems
      </Button>

      <AnimatedSection animation="fade-in">
        <div className="glass-card rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Sample Problem: Two Sum</h1>
              <p className="text-muted-foreground">Submission Results</p>
            </div>
            <div className={`px-4 py-2 rounded-full flex items-center ${allPassed ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
              {allPassed ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">All Tests Passed</span>
                </>
              ) : (
                <>
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">{passedCount} of {totalCount} Tests Passed</span>
                </>
              )}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-lg font-medium mb-4">Your Submission</h2>
              <div className="bg-gray-900 rounded-lg p-4 font-code text-sm overflow-auto max-h-80">
                <pre className="text-white">
                  <code>
{`def two_sum(nums, target):
    """
    Find indices of two numbers that add up to target
    """
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []  # No solution found`}
                  </code>
                </pre>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-4">Performance</h2>
              <div className="glass-card p-4 rounded-lg mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground text-sm">Time Complexity</p>
                    <p className="font-medium">O(n)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Space Complexity</p>
                    <p className="font-medium">O(n)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Runtime</p>
                    <p className="font-medium">43ms</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Memory</p>
                    <p className="font-medium">16.2MB</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Test Cases Passed</p>
                  <p className="text-sm">{passedCount}/{totalCount}</p>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(passedCount / totalCount) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-4">Test Results</h2>
            <div className="space-y-4">
              {testResults.map((test) => (
                <Card key={test.id} className={`border ${test.passed ? 'border-green-500/20' : 'border-red-500/20'} glass-card`}>
                  <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
                    <CardTitle className="text-base font-medium flex items-center">
                      {test.passed ? (
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 mr-2 text-red-500" />
                      )}
                      <span>{test.name}</span>
                    </CardTitle>
                    <Button variant="outline" size="sm" className="h-8">
                      <Code className="h-4 w-4 mr-1" /> Debug
                    </Button>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">Input:</p>
                        <pre className="bg-gray-800 p-2 rounded text-xs overflow-auto max-h-20">{test.input}</pre>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Expected Output:</p>
                        <pre className="bg-gray-800 p-2 rounded text-xs overflow-auto max-h-20">{test.expected}</pre>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Your Output:</p>
                        <pre className={`p-2 rounded text-xs overflow-auto max-h-20 ${
                          test.passed ? 'bg-green-500/10' : 'bg-red-500/10'
                        }`}>{test.output}</pre>
                      </div>
                    </div>
                    
                    {!test.passed && test.explanation && (
                      <div className="mt-4 bg-muted/30 p-3 rounded-md text-sm">
                        <p className="font-medium">Explanation:</p>
                        <p className="text-muted-foreground">{test.explanation}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Hidden Test Cases */}
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-yellow-400" />
              Hidden Test Cases (Also Visible on OpenJudge!)
            </h2>
            <div className="space-y-4">
              <Card className="border border-yellow-500/20 glass-card">
                <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    <span>Edge Case: Negative Numbers</span>
                  </CardTitle>
                  <Button variant="outline" size="sm" className="h-8">
                    <Code className="h-4 w-4 mr-1" /> Debug
                  </Button>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Input:</p>
                      <pre className="bg-gray-800 p-2 rounded text-xs overflow-auto max-h-20">nums = [-1, -2, -3, -4], target = -5</pre>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Expected Output:</p>
                      <pre className="bg-gray-800 p-2 rounded text-xs overflow-auto max-h-20">[0, 2]</pre>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Your Output:</p>
                      <pre className="p-2 rounded text-xs overflow-auto max-h-20 bg-green-500/10">[0, 2]</pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-yellow-500/20 glass-card">
                <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-base font-medium flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    <span>Edge Case: Large Numbers</span>
                  </CardTitle>
                  <Button variant="outline" size="sm" className="h-8">
                    <Code className="h-4 w-4 mr-1" /> Debug
                  </Button>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Input:</p>
                      <pre className="bg-gray-800 p-2 rounded text-xs overflow-auto max-h-20">nums = [100000, 900000, 200000], target = 300000</pre>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Expected Output:</p>
                      <pre className="bg-gray-800 p-2 rounded text-xs overflow-auto max-h-20">[0, 2]</pre>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Your Output:</p>
                      <pre className="p-2 rounded text-xs overflow-auto max-h-20 bg-green-500/10">[0, 2]</pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => navigate('/problems')}
              variant="outline"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Problems
            </Button>
            <Button onClick={handleRetrySubmission} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Retry Submission
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default SampleProblemResultPage;
