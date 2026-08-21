---
title: "Reliable AI agents need operational proof"
author: "Tomas Hajek"
pubDatetime: 2026-03-02T09:30:26+01:00
featured: false
draft: false
tags:
  - ai
  - agents
  - operations
  - reliability
description: "An agent should prove what it completed, report what failed, and preserve the lesson so the same failure does not return next week."
---

Most AI agent failures I see trace back to two missing rules. Never accept "done" without proof, and turn repeated mistakes into permanent instructions.

That sounds obvious, but many agent setups still behave like a very enthusiastic intern with no checklist. The agent says it finished. Nobody checks the output count. Nobody checks the failed items. Nobody checks whether the files exist. Nobody records why it failed last time. Then everyone is surprised when the same failure appears again next week.

No prompt can replace those operational checks.

For completion, I want boring evidence:

- input count,
- success count,
- failure count,
- remaining count,
- output location,
- at least one spot check,
- tests or verification when possible.

If the task was to convert 200 files and 197 succeeded, that is not "done". It is "197 succeeded, 3 failed, here are the failed paths, here is the next action".

Agents also need institutional learning. If a command fails because a tool has a weird flag, record it. If a deployment check runs before DNS settles, record it. If the user corrects a preference, update the instructions. Without that memory, the agent improvises through the same failure again.

At that point, agent reliability starts to resemble the work of running a small operations team.

That makes checklists, runbooks, logs, postmortems, and clear definitions of done part of the agent system. Prompting still matters, but reliability depends on whether the agent can prove what it did and avoid repeating the same mistake.
