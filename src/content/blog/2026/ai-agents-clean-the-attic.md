---
title: "AI agents are useful for old software backlogs"
author: "Tomas Hajek"
pubDatetime: 2026-04-27T22:24:08+02:00
featured: true
draft: false
tags:
  - ai
  - agents
  - software-maintenance
  - engineering
description: "Agents can inspect stale bugs, duplicate issues, old PRs, and half-finished ideas without getting bored. The decision still needs evidence."
---

A lot of useful agent work is cleaning old software backlogs. It is less exciting than building an app from scratch, but deciding what still matters can save more time.

Old bugs. Duplicate issues. Stale PRs. Half-finished ideas. Broken documentation. TODOs that survived three rewrites and nobody remembers why.

Humans avoid this cleanup because the reward is poor. You can spend an hour reading old context only to learn that somebody fixed the bug two years ago.

Agents do not get bored by that work.

A good agent can read the old issue, inspect the current code, search related commits, check whether the behavior still exists, and propose one of a few actions:

- still valid, keep it open,
- duplicate, link and close,
- fixed already, close with evidence,
- unclear, ask a human one specific question,
- risky, leave it alone.

I do not want an agent closing tickets because it sounds confident. I want the files checked, commands run, current behavior observed, links found, and decision recorded.

An agent can bring forgotten work to the point where a human can make a quick decision. I care about the evidence behind that decision, not the number of tickets it closed.
