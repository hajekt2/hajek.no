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
description: "OpenClaw helped investigate and fix its own bug. The agent shortened the path to a reviewed patch, while humans kept control."
---

I found a bug in OpenClaw and asked OpenClaw to investigate it. It helped produce the fix and pull request. Peter merged it, and I am fairly sure an agent helped on that side too.

It was one bug, one investigation, one fix, and a merge.

Normally, software is passive. It can fail, log, crash, or maybe show an error message. Then a human has to collect context, search the codebase, form a theory, patch the thing, and shepherd the fix through review.

With an agent in the loop, the software can help with its own repair. It behaves more like a junior developer that can read logs, inspect files, run tests, and track the changes.

The human decides what is wrong, what risk is acceptable, and whether the fix is good enough. The agent lowers the cost of getting from "something is off" to a patch with evidence.

I do not buy the usual idea of systems repairing themselves in production. There is too much context and too many ways to make the incident worse.

Software that helps investigate and correct itself while a human stays in control is useful now. OpenClaw shortened the path from a reported problem to a reviewed patch without owning the merge decision.
