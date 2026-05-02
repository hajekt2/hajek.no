---
title: "AI agents are starting to clean the attic"
author: "Tomas Hajek"
pubDatetime: 2026-04-27T22:24:08+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - software-maintenance
  - engineering
description: "Some of the best agent work may be the boring cleanup: stale bugs, duplicate issues, old PRs, and half-finished ideas."
---

AI agents are not just writing code anymore. They are starting to clean the attic.

That sounds less exciting than "AI builds an app from scratch", but I think it may matter more. A lot of software work is not greenfield creation. It is deciding what still matters.

Old bugs. Duplicate issues. Stale PRs. Half-finished ideas. Broken documentation. TODOs that survived three rewrites and nobody remembers why.

Humans are bad at this kind of cleanup because it is emotionally unrewarding. You spend hours reading old context just to close something. Or you reopen a bug and discover it was fixed two years ago. Or you avoid the backlog entirely because every item feels like it might contain a trap.

Agents are useful here because they can tolerate boredom.

A good agent can read the old issue, inspect the current code, search related commits, check whether the behavior still exists, and propose one of a few actions:

- still valid, keep it open,
- duplicate, link and close,
- fixed already, close with evidence,
- unclear, ask a human one specific question,
- risky, leave it alone.

The important part is evidence. I do not want an agent randomly closing tickets because it sounds confident. I want the boring proof: files checked, commands run, current behavior observed, links found, decision recorded.

This is where agents can make software teams feel lighter. Not by replacing the hard decisions, but by dragging forgotten work back into a state where a human can make a quick call.

The attic still needs an owner. But it does not have to stay full of dust forever.
