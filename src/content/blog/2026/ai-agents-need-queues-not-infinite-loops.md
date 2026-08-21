---
title: "What a 14-hour Codex run taught me about task queues"
author: "Tomas Hajek"
pubDatetime: 2026-06-20T01:20:00+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - codex
  - software-development
  - engineering
  - automation
description: "After a 14-hour Codex run, I want long agent tasks controlled by a queue with a clear finish line and reviewable evidence."
---

I let Codex work on one goal for more than 14 hours. It read files, made changes, got stuck, changed approach, ran validation, reported progress, and continued.

The workflow was useful, but I would not leave it unattended. I now see the agent loop as a worker. A queue should decide what it works on, what counts as complete, and where unfinished work goes next.

## A loop needs a queue

Agent loops, Ralph loops, goal mode, and autopilot all follow the same cycle. The agent plans, acts, checks, adjusts, and continues until the goal is complete.

This works better than ordinary chat for many software tasks. Tests fail, the agent inspects the failure, changes direction, and tries again.

The running agent should not be the unit of work. Starting a loop and waiting for it to converge gives the process weak boundaries.

The queue contains bugs, features, incidents, review comments, migration steps, test failures, and security findings. People and CI pull work from it. Reviewers return an item when the evidence is not good enough.

The queue records and orders the work. The loop handles one item.

## What the 14-hour run taught me

A long run exposes what a short demo hides:

- the task definition must be precise,
- the agent needs good instructions,
- validation commands must be cheap and repeatable,
- progress needs to be logged,
- and the final result must be reviewable by a human.

A 14-hour run can produce a large diff. If it has no trail of decisions and checks, the agent delivered a review problem.

AI makes code generation cheaper. Understanding can become more expensive when code enters the system faster than people can absorb it.

I want one well-defined item moved through the queue with enough evidence to accept, reject, or redirect it.

## How an item moves through the queue

A task may start with exploration to confirm the bug, locate the code, and estimate the risk. That can produce a smaller implementation item. An agent implements it, CI checks it, another agent may review it, and a human decides whether to merge.

The agent is another worker in the process.

A rejected or incomplete change returns to the queue with new information. The queue preserves the state, so the agent does not need to run forever.

## Goal mode needs a definition of done

Long-running goal mode needs a concrete goal.

"Improve the app," "fix all accessibility problems," and "make the codebase better" are not executable goals.

A useful goal looks more like this:

- implement this specific behavior,
- preserve these compatibility constraints,
- modify only these areas unless justified,
- run these validation commands,
- produce a summary of changed files,
- list known risks,
- stop when these checks pass,
- ask for help if this class of blocker appears.

A five-minute task may survive a vague prompt. A 14-hour task will expand into nearby work.

Without a definition of done, the agent keeps finding nearby work. Some of it may help, but it expands scope and makes review harder.

The agent needs a finish line. Unfinished work goes back to the queue.

## The queue also protects senior attention

Senior attention is the constraint in AI-assisted development.

If agents produce five times more pull requests and the same senior engineer must reconstruct every design, the team has moved the bottleneck.

The queue makes review selective.

Low-risk changes can be mostly machine-verified. Architectural changes need explicit review. Some tasks should never have started.

The team classifies the task before delegation. Afterward, the evidence determines how much human review it needs.

Agent workflows should mature through better routing:

- small mechanical fixes go through automated gates,
- medium changes get agent review plus human sampling,
- architectural changes require explicit human review,
- unclear tasks go to exploration before implementation,
- risky tasks are split before any coding starts.

This is ordinary queue management applied to software delivery.

## The operating model

Long-running agents are workers inside an engineering system. The queue defines the task, automated checks provide evidence, and people own the decision.

After 14 hours, I care about whether I can understand, verify, review, and safely merge the result.
