
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { updateSampleProblemStatus } from "@/data/sampleProblem";

const SubmissionPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Update the sample problem status when submitted
    updateSampleProblemStatus();
    
    // Automatically go to results after a delay
    const timer = setTimeout(() => {
      navigate('/sample-problem-result');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100/20 p-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Submission Received!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your code has been submitted for evaluation. Results will be available soon.
        </p>
        
        {/* Loading animation */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-4 bg-secondary rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/60 to-primary rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => navigate('/problems')}
            variant="outline"
            className="flex-1"
          >
            Return to Problems
          </Button>
          <Button 
            onClick={() => navigate('/sample-problem-result')}
            className="flex-1"
          >
            View Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
