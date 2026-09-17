---
title: "Our shared agent workflow now includes review and repair"
author: "Tomas Hajek"
pubDatetime: 2026-09-17T13:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - software-delivery
  - openhands
description: "Our OpenHands-based cloud environment centralizes agent configuration and repeats review and fixes before human approval."
ogImage: "https://hajek.no/assets/img/2026/agentic-maturity-levels.jpeg"
---

We now run an [OpenHands](https://github.com/OpenHands/OpenHands)-based agent environment in our own cloud. We have one place to change the context our agents use, their skills, and their plugins.

In [April, I wrote about moving from individual AI assistants to a shared delivery workflow](https://hajek.no/posts/2026/from-ai-assistants-to-agentic-delivery-workflows). Our target was an issue-driven process where agents could implement changes and prepare pull requests for human review.

![Five levels of agentic maturity: personal assistant, shared context, workflow agents, specialized coordination, and self-correcting loops. DocEngine is marked at Level 2, with Level 3 as the next target.](/assets/img/2026/agentic-maturity-levels.jpeg)

*Presentation slide for the five-stage framework discussed in my April 2026 post. At the time, DocEngine was at Level 2, with Level 3 as the next target.*

That process is now running. We control the agent environment and can configure agents with different specializations.

GitHub Issues is our primary entry point, although we can also start in the OpenHands interface. Before implementation, we can discuss the task with the agent and agree on what it should deliver.

From there, the workflow is:

1. The agent implements the agreed task and opens a pull request.
2. It reviews the change, fixes the issues it finds, and runs that review-and-fix loop again.
3. A human reviews the resulting pull request and decides whether to merge.
4. Merging triggers automatic deployment.

We can also add tools to this environment. [no-mistakes](https://github.com/kunchenguid/no-mistakes), for example, can run validation, ask an agent to fix findings, and check again. Its [auto-fix loop](https://kunchenguid.github.io/no-mistakes/concepts/auto-fix/) has attempt limits and pauses for human decisions. It is a possible addition to our existing workflow.

The final stage I described in April was self-correcting autonomous delivery loops. Repeated review and repair gives us a working part of that stage. Approval to merge remains with us.
