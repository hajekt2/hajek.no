---
title: "Fixing OpenClaw with OpenClaw"
author: "Tomas Hajek"
pubDatetime: 2026-03-09T22:49:55+01:00
featured: true
draft: false
tags:
  - openclaw
  - ai
  - agents
  - software
description: "A small bug fix felt like an early glimpse of software that can help correct itself, with a human still in the loop."
---

I found a bug in OpenClaw. Then I asked OpenClaw to investigate it. Then I used it to help produce the fix and PR. The PR got merged by Peter, and I am fairly sure an agent helped on that side too.

No fireworks. No giant benchmark. Just a bug, an investigation, a fix, and a merge.

Normally, software is passive. It can fail, log, crash, or maybe show an error message. Then a human has to collect context, search the codebase, form a theory, patch the thing, and shepherd the fix through review.

With an agent in the loop, the software stack starts to participate in its own repair. Not autonomously in the scary sense. More like a competent junior developer who can read logs, inspect files, run tests, and keep track of what changed.

The human still matters. A lot. The human decides what is actually wrong, what risk is acceptable, and whether the fix is good enough. But the agent lowers the cost of getting from "something is off" to "here is a concrete patch with evidence".

Self-healing software is usually discussed as if systems will magically repair themselves in production. I do not buy that as a default. Too many risks, too much context, too many ways to make things worse.

Software that helps investigate and correct itself with a human in control is already useful. The agent shortened the path from a reported problem to a reviewed patch without taking ownership of the decision to merge it.
