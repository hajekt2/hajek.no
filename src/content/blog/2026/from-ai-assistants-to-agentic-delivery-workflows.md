---
title: "From AI assistants to agentic delivery workflows"
author: "Tomas Hajek"
pubDatetime: 2026-04-18T09:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - software-delivery
  - docengine
description: "The next step for our DocEngine work is a shared issue-to-PR process with repository instructions, automated checks, and explicit human approval."
---

At XPER Consulting, tools such as Codex, Claude Code, and OpenCode already help individual developers. Each person can investigate code, draft a patch, and run tests faster.

For DocEngine, I want to connect that local assistance to a shared delivery process. An issue should carry enough context for an agent to work in the repository, run the expected checks, and prepare a pull request that another person can review.

I use five levels to describe the progression:

1. AI assistant per developer
2. Shared context and repository instructions
3. Workflow-based agents around issues and PRs
4. Coordinated specialized agents
5. Self-correcting autonomous delivery loops

Our practical target is Level 3, where the agent participates in the delivery flow:

- issue-driven work,
- shared repository instructions,
- automated checks,
- draft PR creation,
- human review and approval.

This creates shared expectations around where work starts, what "done" means, which checks must pass, and who approves the result. The model remains replaceable because the process lives in the repository and delivery system.

The questions I care about are operational:

- Where does the agent get context?
- What artifacts does it produce?
- How is quality verified?
- How does the team review and reject work?
- How does the system learn from mistakes?

Answers to those questions determine whether agents improve the team workflow or only help individuals produce code faster.
