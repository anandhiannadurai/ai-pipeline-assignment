// pipeline.js

function buildPrompt() {
  const systemInstructions = `
You are an AI assistant.
Answer clearly and accurately.
Follow company policies.
`;

  const chatHistory = `
User: Hi
Assistant: Hello!
User: Tell me about AI.
Assistant: AI stands for Artificial Intelligence.
User: Explain machine learning.
Assistant: Machine learning is a branch of AI.
`;

  const userProfile = `
Name: Anandhi
Role: Student
Interest: Full Stack Development
`;

  const currentQuery = `
Explain the benefits of AI in education.
`;

  return `
${systemInstructions}

${chatHistory}

${userProfile}

${currentQuery}
`;
}

module.exports = { buildPrompt };