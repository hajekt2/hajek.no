---
title: "The review bottleneck is the new software bottleneck"
author: "Tomas Hajek"
pubDatetime: 2026-06-18T16:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - coding-agents
  - software-development
  - engineering
  - architecture
  - code-review
description: "AI agents increase code output faster than teams increase review capacity. The constraint moves to understanding, verification, and ownership."
---

AI coding agents can scaffold features, refactor files, add tests, migrate APIs, generate configuration, and open a pull request before a team has finished discussing the implications.

Someone still has to understand what changed. That work usually lands with a senior developer, tech lead, or architect who must validate the behavior, check the architecture, and decide whether the team wants to maintain the result.

Code generation has become faster than comprehension.

## Generated code still becomes owned code

A quickly generated patch is not the same as delivered software.

A coding agent can produce a large diff in minutes. The team may own the result for years, including every incident, edge case, security problem, performance issue, and future refactoring.

If an agent creates 800 lines of code, a senior engineer may need to reconstruct the reasoning behind those lines:

- Why was this design chosen?
- Which assumptions are hidden in the implementation?
- What are the failure modes?
- Does this fit the existing architecture?
- Are the tests proving behavior or just confirming the implementation?
- Is this code simple enough that someone else can safely change it later?

Compilation does not answer any of those questions.

## The review burden is real

AWS has written about the problem using systems thinking: when AI assistants speed up coding, bottlenecks shift elsewhere in the value stream. One of their examples is pull request review queues, where senior developers become overloaded reviewing AI-generated code that is syntactically correct but raises architectural questions.

The 2025 Stack Overflow Developer Survey found that 84% of respondents used or planned to use AI tools, and 51% of professional developers used them daily. Trust lagged behind adoption: 46% distrusted AI output accuracy while 33% trusted it. The biggest frustration, reported by 66%, was that AI solutions are "almost right, but not quite". Another 45% said debugging AI-generated code takes more time.

AI is useful enough to produce work, but not reliable enough to remove verification.

Jellyfish found the same pattern in pull request data. Higher AI adoption correlated with both more throughput and larger pull requests. Moving from 0% to 100% AI adoption corresponded to PRs growing from 74.8 to 88.4 additions on average, an 18.2% increase. Their interpretation is balanced: bigger PRs may contain more thorough handling and documentation, but they may also be more complex and harder to maintain.

METR's 2025 study adds a useful cold shower. In their randomized trial with experienced open-source developers working on real issues in large repositories, developers were 19% slower when allowed to use early-2025 AI tools, even though they expected to be faster. That does not mean AI makes developers slower in general. The study is narrower than that. But it is strong evidence that in mature codebases, the cost of understanding, steering, correcting, and verifying AI output can eat the apparent speed gain.

DORA's 2025 report measures AI-assisted development at the system level instead of reducing it to individual typing speed or local task completion. An agent-generated patch creates value only when the organization can safely absorb, verify, operate, and maintain the increased flow of changes.

Together, these results show why teams should measure delivery at the system level rather than count generated code or completed local tasks.

## Senior people become the constraint

Multiple developers and agents can produce changes in parallel. Architectural judgment does not scale at the same rate.

A senior reviewer checks whether the implementation respects boundaries, whether the error handling matches operational reality, whether the data model is drifting, and whether a simple business rule is becoming a framework.

This is exhausting because it requires holding the existing system, the proposed change, the business context, and the future maintenance cost in your head at the same time.

AI makes this harder when it produces plausible code without a clear design trail.

With agent-generated code, the human author may not understand every line or remember the tradeoffs behind it. The reviewer then has to inspect the patch and determine whether its nominal owner understands it well enough to support it.

## The slope toward vibe coding

When agents produce changes faster than you can review them, the natural response is to trust the tests, skim the diff, and move on. Sometimes that is reasonable. For low-risk code, internal tools, prototypes, or well-contained changes, full manual review of every line may be wasteful.

The risk begins when a team merges code it does not understand because the demo works and the agent sounded confident.

Vibe coding is fine for experiments, learning, and throwaway prototypes. It becomes dangerous when the same review standard reaches production systems.

You can ship without understanding for a while. But the debt accumulates in places where tests are weak, requirements are fuzzy, and architecture matters. Eventually someone has to debug it. Usually under time pressure. Usually the same senior people who were already overloaded.

## Code review has to change

Teams need to change what they expect from code review and from the agents producing the code.

A pull request should not merely contain a diff. It should contain evidence.

For AI-assisted work, I want to see things like:

- the problem statement in plain language,
- the intended behavior,
- the architectural boundaries touched,
- the main alternatives considered,
- the risks and assumptions,
- the tests added or changed,
- the commands run,
- screenshots or logs where relevant,
- known limitations,
- and a short explanation of why the change is safe to merge.

This evidence compresses the work for the reviewer, who should not have to reconstruct the full design from the diff.

Agents should help produce this evidence. If an agent can write the code, it can also summarize the design, list the files changed, explain the test strategy, and identify risky areas. If it cannot explain the change clearly, that is already a review signal.

## Smaller diffs matter more now

AI makes large diffs cheap, which makes small batches more important. Teams should use faster generation to produce narrower, safer changes instead of putting more code into each pull request.

A good AI-assisted workflow should produce smaller tasks, narrower pull requests, stronger tests, clear acceptance criteria, explicit design notes, and repeatable evidence.

The useful measure is trustworthy progress rather than code volume.

## Architecture becomes a review discipline

Architecture used to be partly enforced by implementation friction. If a change was hard to make, people had time to notice that it crossed boundaries or violated the design.

Agents reduce that friction. They can make sweeping changes quickly. They can connect things that should not be connected. They can produce a working implementation that quietly damages the structure of the system.

Architecture therefore needs lightweight, reviewable constraints:

- module boundaries,
- dependency rules,
- API contracts,
- naming conventions,
- testing expectations,
- security requirements,
- observability standards,
- and clear examples of good local design.

The better these constraints are encoded, the easier it becomes for both humans and agents to stay inside them.

The next productivity gains will come from engineering systems around agents: repository instructions, isolated sandboxes, checkpoints, architectural rules, automated tests, observability, and review evidence.

## The new senior skill: verification design

Senior developers will still read code, but manually inspecting every generated line cannot be the only control. They need verification systems that make code review less heroic:

- tests that capture business behavior,
- linters and static analysis that enforce mechanical rules,
- architectural fitness functions,
- CI gates that check the boring things,
- agents that do first-pass review,
- observability that catches real-world failure,
- and pull request templates that force evidence into the open.

Human review should focus on the things humans are still best at: intent, judgment, taste, ownership, risk, and fit with the larger system.

If senior people spend their time catching formatting issues, missing null checks, or obvious test gaps, the process is broken. Machines should handle that.

If senior people spend their time deciding whether a change belongs in the system at all, they are doing the work that matters.

## My current rule

My working rule is simple:

> I do not need to type every line, but I need to understand what I merge.

AI can help me move faster. It can help me explore. It can write first drafts. It can generate tests. It can review its own output. It can find mistakes I would miss.

The team still owns the consequences. The practical constraint is how much code it can review, verify, and support without exhausting the people whose judgment the system depends on.

## Sources

- AWS Executive Insights: [Measuring the Impact of AI Assistants on Software Development](https://aws.amazon.com/blogs/enterprise-strategy/measuring-the-impact-of-ai-assistants-on-software-development/)
- Stack Overflow: [2025 Developer Survey - AI](https://survey.stackoverflow.co/2025/ai)
- DORA: [State of AI-assisted Software Development 2025](https://dora.dev/research/2025/dora-report/)
- Jellyfish: [Better Code, or Just Bigger? AI-Assisted Pull Requests Are 18% Larger](https://jellyfish.co/blog/ai-assisted-pull-requests-are-18-larger/)
- METR: [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- OpenAI: [New tools for building agents](https://openai.com/index/new-tools-for-building-agents/)
- OpenAI: [Introducing Codex](https://openai.com/index/introducing-codex/)
- OpenAI: [Introducing ChatGPT agent](https://openai.com/index/introducing-chatgpt-agent/)
- Anthropic: [Claude 3.7 Sonnet and Claude Code](https://www.anthropic.com/news/claude-3-7-sonnet)
- Anthropic: [Introducing Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
- Addy Osmani: [Code Review in the Age of AI](https://addyo.substack.com/p/code-review-in-the-age-of-ai)
