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
description: "For DocEngine, I want a shared issue-to-PR process with repository instructions, automated checks, and explicit human approval."
---

At XPER Consulting, Codex, Claude Code, and OpenCode already help individual developers investigate code, draft patches, and run tests.

For DocEngine, I want that help connected to a shared delivery process. An issue should contain enough context for an agent to work in the repository, run the expected checks, and prepare a pull request for review.

I use five levels to describe the progression:

1. AI assistant per developer
2. Shared context and repository instructions
3. Workflow-based agents around issues and PRs
4. Coordinated specialized agents
5. Self-correcting autonomous delivery loops

Our target is Level 3:

- issue-driven work,
- shared repository instructions,
- automated checks,
- pull request creation,
- human review and approval.

This defines where work starts, what "done" means, which checks must pass, and who approves the result. The model stays replaceable because the process lives in the repository and delivery system.

The questions I care about are operational:

- Where does the agent get context?
- What artifacts does it produce?
- How is quality verified?
- How does the team review and reject work?
- How does the system learn from mistakes?

Those answers determine whether agents improve delivery or only help individuals produce code faster.
