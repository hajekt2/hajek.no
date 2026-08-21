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
description: "A 14-hour Codex run showed why long agent tasks need a clear finish line, reviewable evidence, and a queue that can accept unfinished work."
---

I recently let Codex work on one goal for more than 14 hours. It read files, made changes, got stuck, tried another approach, ran validation, summarized progress, and continued.

The workflow held well enough to be useful, but not well enough to leave unattended. The run changed how I think about long agent tasks. The agent loop is a worker. A queue should control what it works on, what counts as complete, and where unfinished work goes next.

## A loop needs a queue

Agent loops, Ralph loops, goal mode, autopilot mode, and other long-running patterns share the same basic idea. The agent plans, acts, checks, adjusts, and continues until a goal is complete.

That is a real pattern. It works better than ordinary chat for many tasks because software work is naturally iterative. You try something, tests fail, you inspect the failure, you change direction, and you try again.

The trap is treating the running agent as the unit of work. Starting a loop and waiting for it to converge gives the process weak boundaries.

There is a queue of bugs, features, cleanup tasks, incidents, review comments, migration steps, test failures, security findings, documentation gaps, and product ideas. Humans pull items from the queue. CI systems pull items from the queue. Support teams add items to the queue. Product managers reorder the queue. Reviewers push items back into the queue when the evidence is not good enough.

The queue records and orders the work. The loop handles one item.

## What the 14-hour run taught me

A long run exposes constraints that a short demo can hide:

- the task definition must be precise,
- the agent needs good instructions,
- validation commands must be cheap and repeatable,
- progress needs to be logged,
- and the final result must be reviewable by a human.

A 14-hour run can produce a lot of output. That is both the benefit and the danger. If the result is one huge pile of changes with no trail of reasoning, then the agent has not really delivered software. It has delivered a review problem.

AI makes code generation cheaper. It does not automatically make understanding cheaper. In fact, if we are careless, it makes understanding more expensive because more code enters the system faster than humans can absorb it.

The useful outcome is one well-defined item moved through the queue with enough evidence for a human to accept, reject, or redirect it.

## How an item moves through the queue

A task may begin with exploration to confirm the bug, locate the code, estimate the risk, and define a likely fix. That investigation can produce a better-scoped implementation item. An agent implements it, CI checks it, another agent may review it, and a human decides whether the evidence supports a merge.

The agent does not replace the process. It becomes another worker in the process.

A rejected or incomplete change returns to the queue with new information. The agent does not need to stay alive forever because the queue preserves the state of the work.

## Goal mode needs a definition of done

Long-running goal mode is only useful when the goal is concrete.

"Improve the app," "fix all accessibility problems," and "make the codebase better" are wishes rather than executable goals.

A useful goal looks more like this:

- implement this specific behavior,
- preserve these compatibility constraints,
- modify only these areas unless justified,
- run these validation commands,
- produce a summary of changed files,
- list known risks,
- stop when these checks pass,
- ask for help if this class of blocker appears.

The longer the agent runs, the more important this becomes. A five-minute task can survive a vague prompt. A 14-hour task cannot.

Without a definition of done, the agent will keep finding nearby work. Some of that work may be useful. Some may be noise. Some may be actively harmful because it expands scope and makes review harder.

The agent needs a finish line, and the system needs a way to return unfinished work to the queue.

## The queue also protects senior attention

Senior attention is the scarce resource in AI-assisted development.

If agents make it possible to produce five times more pull requests, but every pull request still requires the same senior engineer to reconstruct the design from scratch, then the team has not solved delivery. It has moved the bottleneck.

Queues help because they make review selective and structured.

Not every queue item needs the same level of human attention. Some changes are low-risk and can be mostly machine-verified. Some require architectural review. Some require product judgment. Some should never have been started.

That classification should happen before and after agent work.

Before delegation, the team decides whether the task is safe for an agent. Afterward, the evidence determines how much human review it needs.

Agent workflows should mature through better routing:

- small mechanical fixes go through automated gates,
- medium changes get agent review plus human sampling,
- architectural changes require explicit human review,
- unclear tasks go to exploration before implementation,
- risky tasks are split before any coding starts.

This routing is ordinary queue management applied to software delivery.

## The operating model

Long-running agents are useful workers inside an engineering system. The queue defines their tasks, automated checks provide evidence, and human judgment remains the ownership boundary.

The duration of the 14-hour run matters less than whether its result can be understood, verified, reviewed, and safely merged.
