const { buildPrompt } = require("./pipeline");
const { buildOptimizedPrompt } = require("./optimizedPipeline");

function countTokens(text) {
  return Math.ceil(text.length / 4);
}

const originalPrompt = buildPrompt();
const optimizedPrompt = buildOptimizedPrompt();

const originalTokens = countTokens(originalPrompt);
const optimizedTokens = countTokens(optimizedPrompt);

console.log("===== Token Comparison =====");
console.log("Original Tokens :", originalTokens);
console.log("Optimized Tokens:", optimizedTokens);
console.log("Tokens Saved    :", originalTokens - optimizedTokens);