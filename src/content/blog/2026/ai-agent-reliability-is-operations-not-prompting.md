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
description: "An agent should prove what it completed, report failures, and record the lesson so the same mistake does not return next week."
---

Most AI agent failures I see come back to two missing rules: never accept "done" without proof, and record repeated mistakes in the instructions.

Many agent setups still behave like an enthusiastic intern without a checklist. The agent says it finished, but nobody checks the output count, failed items, or files. Nobody records why it failed last time. The same failure returns next week.

No prompt can replace those operational checks.

For completion, I want this evidence:

- input count,
- success count,
- failure count,
- remaining count,
- output location,
- at least one spot check,
- tests or verification when possible.

If the task was to convert 200 files and 197 succeeded, that is not "done". It is "197 succeeded, 3 failed, here are the failed paths, here is the next action".

Agents also need memory. If a command fails because of a strange flag, record it. If a deployment check runs before DNS settles, record it. If the user corrects a preference, update the instructions.

This starts to look like running a small operations team. Checklists, runbooks, logs, postmortems, and a clear definition of done belong in the agent system.

Prompting still matters. I trust the agent when it can prove what it did and avoid the same mistake next time.
