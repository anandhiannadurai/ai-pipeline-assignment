// optimizedPipeline.js

function buildOptimizedPrompt() {
  const systemInstructions = `
You are an AI assistant.
Answer clearly and accurately.
`;

  const chatHistory = [
    "User: Hi",
    "Assistant: Hello!",
    "User: Tell me about AI.",
    "Assistant: AI stands for Artificial Intelligence.",
    "User: Explain machine learning.",
    "Assistant: Machine learning is a branch of AI."
  ];

  // Optimization 1: Keep only the latest two messages
  const recentChat = chatHistory.slice(-2).join("\n");

  const userProfile = {
    name: "Anandhi",
    role: "Student",
    interest: "Full Stack Development"
  };

  // Optimization 2: Keep only relevant user information
  const relevantProfile = `Role: ${userProfile.role}`;

  const currentQuery = "Explain the benefits of AI in education.";

  return `
${systemInstructions}

${recentChat}

${relevantProfile}

${currentQuery}
`;
}

module.exports = { buildOptimizedPrompt };