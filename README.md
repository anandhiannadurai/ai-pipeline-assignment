# AI Pipeline Optimization Assignment

## Project Overview

This project was completed as part of an internship assignment. The objective was to optimize an AI pipeline by reducing token usage, document a debugging approach, and set up a basic CI workflow using GitHub Actions.

The project is implemented using Node.js and JavaScript.

---

## Folder Structure

```
ai-pipeline-assignment/
│
├── src/
│   ├── pipeline.js
│   ├── optimizedPipeline.js
│   └── tokenCounter.js
│
├── tests/
│   └── pipeline.test.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── debug_notes.md
├── package.json
├── README.md
└── .gitignore
```

---

# Part 1 - Token Optimization

## Original Pipeline

The original pipeline builds a prompt using:

- System instructions
- Chat history
- User profile
- Current user query

Since all the available information is included, the prompt becomes larger, which increases the number of tokens used.

## Optimization 1 - Reduce Chat History

Instead of sending the complete conversation, the optimized pipeline keeps only the most recent messages that are useful for the current request.

**Benefit**
- Reduces token usage.
- Makes the request faster.

**Trade-off**
- Older conversation context may not be available.

---

## Optimization 2 - Reduce User Context

Instead of sending the complete user profile, only the information needed for the current request is included.

**Benefit**
- Smaller prompt size.
- Lower processing cost.

**Trade-off**
- Less personalization for the response.

---

## Token Comparison

| Pipeline | Estimated Tokens |
|----------|-----------------:|
| Original | 94 |
| Optimized | 51 |
| Tokens Saved | 43 |

**Note:** Token count is estimated using a simple character-based approach for demonstration purposes.

---

# Part 2 - Debugging Process

To debug the AI pipeline, I followed these steps:

1. Reproduced the issue.
2. Checked logs and outputs.
3. Verified the input data.
4. Tested each part of the pipeline separately.
5. Identified the root cause.
6. Applied the fix.
7. Tested the solution again.

Detailed notes are available in **debug_notes.md**.

---

# Part 3 - CI/CD

GitHub Actions is used to automate testing.

Whenever code is pushed to the repository or a pull request is created, the workflow:

- Installs project dependencies.
- Runs the test cases.
- Reports whether the build passes or fails.

---

# Deployment

If this project were deployed, the process would be:

1. Push the latest code to GitHub.
2. Run automated tests.
3. Deploy only if all tests pass.

---

# Secrets Management

Sensitive information such as API keys should not be stored directly in the source code.

In a real project, they should be stored using GitHub Secrets or environment variables.

---

# Rollback Strategy

If a deployment fails:

- Roll back to the previous working version.
- Identify the cause of the failure.
- Fix the issue.
- Run tests again before deploying.

---

# How to Run the Project

Install dependencies:

```bash
npm install
```

Run the token comparison:

```bash
node src/tokenCounter.js
```

Run the test cases:

```bash
npm test
```

---

# Technologies Used

- JavaScript
- Node.js
- Jest
- GitHub Actions

---

# Author

Anandhi 