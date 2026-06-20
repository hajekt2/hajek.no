---
title: "AI agents need queues, not infinite loops"
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
description: "After letting Codex run a goal for more than 14 hours, the lesson was not that agents should run forever. The useful pattern is a queue of scoped tasks, clear evidence, and human ownership at the right points."
---

I recently let Codex run a goal for more than 14 hours.

That sounds more dramatic than it felt.

It was not a single magical prompt where the machine disappeared into the cave and came back with a finished product. It was closer to watching a very persistent junior engineer work through a long task: reading files, making changes, getting stuck, trying again, validating, summarizing, and continuing.

The surprising part was not that it wrote code for a long time.

The surprising part was that the workflow almost held.

Not perfectly. Not autonomously enough that I would forget about it. But enough that it changed how I think about agentic software development.

I do not think the future is one giant agent loop that runs forever.

I think the future is queues.

## The loop idea is useful, but incomplete

There is a lot of discussion now about agent loops, Ralph loops, RALP-style loops, goal mode, autopilot mode, and long-running coding agents.

The basic idea is simple: instead of prompting an AI once, you create a loop where the agent keeps working until a goal is complete. It plans, acts, checks, adjusts, and continues.

That is a real pattern. It works better than ordinary chat for many tasks because software work is naturally iterative. You try something, tests fail, you inspect the failure, you change direction, and you try again.

That is already how good engineers work.

But there is a trap in the way people talk about loops.

A loop sounds like the unit of work is the agent itself: start the loop, keep it alive, let it run, hope it converges.

That is not how real software teams work.

Real software teams work from queues.

There is a queue of bugs, features, cleanup tasks, incidents, review comments, migration steps, test failures, security findings, documentation gaps, and product ideas. Humans pull items from the queue. CI systems pull items from the queue. Support teams add items to the queue. Product managers reorder the queue. Reviewers push items back into the queue when the evidence is not good enough.

The queue is the system.

The loop is only the worker.

## What the 14-hour run taught me

A long Codex run is useful because it exposes the shape of the work.

Short demos hide everything interesting. The agent edits a few files, the tests pass, everyone applauds. But long-running work reveals the real constraints:

- the task definition must be precise,
- the agent needs good instructions,
- validation commands must be cheap and repeatable,
- progress needs to be logged,
- and the final result must be reviewable by a human.

The important word there is reviewable.

A 14-hour run can produce a lot of output. That is both the benefit and the danger. If the result is one huge pile of changes with no trail of reasoning, then the agent has not really delivered software. It has delivered a review problem.

This connects directly to the review bottleneck.

AI makes code generation cheaper. It does not automatically make understanding cheaper. In fact, if we are careless, it makes understanding more expensive because more code enters the system faster than humans can absorb it.

So the goal cannot be: keep the loop running as long as possible.

The goal has to be: move one well-defined item through the queue with enough evidence that a human can safely accept, reject, or redirect it.

## Queues are a better mental model

A task gets picked from a queue.

It may first go through exploration: is this bug real, where is the code, what is the likely fix, what risks exist?

Then it may go back onto the queue as a better-scoped implementation task.

Then an agent may implement it.

Then CI validates it.

Then another agent may review it.

Then a human reviews the evidence.

Then it either merges, gets rejected, or goes back into the queue with new information.

That is much closer to how software delivery already works.

The agent does not replace the process. It becomes another worker in the process.

An infinite loop has weak boundaries. A queue item has strong boundaries.

Strong boundaries are what make autonomy safe.

## Goal mode needs a definition of done

Long-running goal mode is only useful when the goal is concrete.

"Improve the app" is not a goal.

"Fix all accessibility problems" is not a goal.

"Make the codebase better" is not a goal.

Those are wishes.

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

The agent needs a finish line.

The system needs a way to push unfinished work back into the queue.

## The queue also protects senior attention

The scarce resource in AI-assisted development is not typing.

It is senior attention.

If agents make it possible to produce five times more pull requests, but every pull request still requires the same senior engineer to reconstruct the design from scratch, then the team has not solved delivery. It has moved the bottleneck.

Queues help because they make review selective and structured.

Not every queue item needs the same level of human attention. Some changes are low-risk and can be mostly machine-verified. Some require architectural review. Some require product judgment. Some should never have been started.

That classification should happen before and after agent work.

Before: is this task safe to delegate?

After: did the agent produce enough evidence to trust the result?

This is where I think agent workflows will mature. Not toward "merge everything the robot writes", but toward better routing:

- small mechanical fixes go through automated gates,
- medium changes get agent review plus human sampling,
- architectural changes require explicit human review,
- unclear tasks go to exploration before implementation,
- risky tasks are split before any coding starts.

That is queue management.

It is less glamorous than an autonomous loop. It is also much closer to production engineering.

## My current conclusion

After watching long-running agents work, I am convinced they are useful.

The better framing is more practical:

Agents are workers.

The queue is the workflow.

The harness is the engineering system.

Human judgment is still the ownership boundary.

A 14-hour Codex run is impressive when it keeps moving. But the real question is not how long it ran. The real question is whether the result can be understood, verified, reviewed, and safely merged.

That is the standard I care about.

Not autonomous code generation for its own sake.
