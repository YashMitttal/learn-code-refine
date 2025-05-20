
export const sampleProblem = {
  id: "sample-problem",
  title: "Sample Problem: Two Sum",
  description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  
  You can return the answer in any order.`,
  difficulty: "Easy",
  tags: ["Arrays", "Hash Table"],
  examples: [
    {
      input: "nums = [2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
    },
    {
      input: "nums = [3, 2, 4], target = 6",
      output: "[1, 2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
    },
    {
      input: "nums = [3, 3], target = 6",
      output: "[0, 1]",
      explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
    }
  ],
  languages: ["Python", "Java", "JavaScript"],
  lastAttempt: {
    date: "2023-05-20",
    status: "Attempted",
    language: "Python"
  },
  testResults: [
    {
      id: 1,
      name: "Basic Test Case",
      input: "nums = [2, 7, 11, 15], target = 9",
      expected: "[0, 1]",
      output: "[0, 1]",
      passed: true,
    },
    {
      id: 2,
      name: "Empty Array",
      input: "nums = [], target = 0",
      expected: "[]",
      output: "[]",
      passed: true,
    },
    {
      id: 3,
      name: "Single Element",
      input: "nums = [5], target = 5",
      expected: "[]",
      output: "[0, 0]",
      passed: false,
      explanation: "Your function returns the same index twice, but we need two different indices that add up to the target.",
    },
    {
      id: 4,
      name: "No Solution",
      input: "nums = [1, 2, 3], target = 7",
      expected: "[]",
      output: "[]",
      passed: true,
    },
    {
      id: 5,
      name: "Duplicate Numbers",
      input: "nums = [3, 3], target = 6",
      expected: "[0, 1]",
      output: "[0, 1]",
      passed: true,
    },
  ]
};

export const updateSampleProblemStatus = () => {
  // In a real app, this would be handled by an API call
  const updatedProblem = {
    ...sampleProblem,
    lastAttempt: {
      date: new Date().toISOString().split('T')[0],
      status: "Completed",
      language: "Python"
    }
  };
  
  localStorage.setItem("sampleProblemStatus", JSON.stringify(updatedProblem.lastAttempt));
  return updatedProblem;
};

export const getSampleProblemStatus = () => {
  const savedStatus = localStorage.getItem("sampleProblemStatus");
  if (savedStatus) {
    return {
      ...sampleProblem,
      lastAttempt: JSON.parse(savedStatus)
    };
  }
  return sampleProblem;
};
