---
title: "AI agent reliability is operations, not prompting"
author: "Tomas Hajek"
pubDatetime: 2026-03-02T09:30:26+01:00
featured: false
draft: false
tags:
  - ai
  - agents
  - operations
  - reliability
description: "Most agent failures are not solved by prettier prompts. They are solved by verification and institutional learning."
---

Most AI agent failures I see come from two missing rules.

First: never accept "done" without proof.

Second: every mistake should become a permanent rule.

That sounds obvious, but many agent setups still behave like a very enthusiastic intern with no checklist. The agent says it finished. Nobody checks the output count. Nobody checks the failed items. Nobody checks whether the files exist. Nobody records why it failed last time. Then everyone is surprised when the same failure appears again next week.

The fix is not a magic prompt. It is operations.

For completion, I want boring evidence:

- input count,
- success count,
- failure count,
- remaining count,
- output location,
- at least one spot check,
- tests or verification when possible.

If the task was to convert 200 files and 197 succeeded, that is not "done". It is "197 succeeded, 3 failed, here are the failed paths, here is the next action".

The second rule matters even more. Agents need institutional learning. If a command fails because a tool has a weird flag, write it down. If a deployment breaks because DNS takes time, write it down. If the user corrects a preference, write it down. Otherwise the system has no memory. It is just improvising forever.

This is where agent reliability starts to look less like prompt engineering and more like running a small operations team.

Checklists. Runbooks. Logs. Postmortems. Durable rules. Clear definitions of done.

Prompting still matters, but it is not the foundation. The foundation is whether the agent can prove what it did and avoid repeating the same mistake.
