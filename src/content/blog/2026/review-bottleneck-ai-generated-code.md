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
description: "AI agents increase code output faster than teams increase review capacity. Senior attention moves to understanding, verification, and ownership."
---

AI coding agents can scaffold a feature, refactor files, add tests, and open a pull request before the team has finished discussing the change.

Someone still has to understand it. That work usually lands with a senior developer, tech lead, or architect who validates the behavior, checks the architecture, and decides whether the team wants to maintain it.

Code generation is now faster than review.

## Generated code still becomes owned code

A generated patch is not delivered software.

An agent can produce a large diff in minutes. The team may own its incidents, edge cases, security problems, and refactoring for years.

If an agent creates 800 lines, a senior engineer may need to reconstruct why:

- Why was this design chosen?
- Which assumptions are hidden in the implementation?
- What are the failure modes?
- Does this fit the existing architecture?
- Are the tests proving behavior or just confirming the implementation?
- Is this code simple enough that someone else can safely change it later?

A green build does not answer those questions.

## The review burden is real

AWS describes the same systems problem. When AI speeds up coding, the bottleneck moves elsewhere. One example is a pull request queue where senior developers review syntactically correct code with unresolved architectural questions.

The 2025 Stack Overflow Developer Survey found that 84% of respondents used or planned to use AI tools, and 51% of professional developers used them daily. But 46% distrusted AI output accuracy while 33% trusted it. The biggest frustration, reported by 66%, was that answers were "almost right, but not quite". Another 45% said debugging AI-generated code takes more time.

The tools produce useful work, but they do not remove verification.

Jellyfish found higher AI adoption correlated with more throughput and larger pull requests. Moving from 0% to 100% adoption corresponded to PRs growing from 74.8 to 88.4 additions on average, an 18.2% increase. Bigger PRs may include better handling and documentation. They may also be harder to review and maintain.

In METR's 2025 randomized trial, experienced open-source developers were 19% slower with early-2025 AI tools, although they expected to be faster. The study does not show that AI always makes developers slower. It does show that steering and verification can consume the apparent gain in mature codebases.

DORA's 2025 report looks at AI-assisted development as a system, not individual typing speed. An agent-generated patch creates value only when the organization can verify, operate, and maintain it.

These results make code volume a poor productivity measure.

## Senior people become the constraint

Agents can produce changes in parallel. Architectural judgment does not scale at the same rate.

A senior reviewer checks boundaries, failure handling, data-model drift, and whether a simple business rule is turning into a framework.

The reviewer has to hold the existing system, proposed change, business context, and maintenance cost in mind at the same time.

Plausible code without a design trail makes that harder.

The named author may not understand every generated line or remember its tradeoffs. The reviewer then has to decide whether anybody understands the patch well enough to support it.

## The slope toward vibe coding

When agents produce changes faster than I can review them, the easy response is to trust the tests and skim the diff. For low-risk code, internal tools, prototypes, or contained changes, that may be reasonable.

The risk starts when a team merges code it does not understand because the demo works and the agent sounds confident.

Vibe coding is fine for experiments and throwaway prototypes. It is a bad review standard for production.

Code can ship without being understood for a while. The debt collects where tests are weak, requirements are unclear, and architecture matters. Somebody eventually debugs it under time pressure, usually the same senior people who were already overloaded.

## Code review has to change

Teams need different expectations for the agent and the review.

A pull request needs evidence, not only a diff.

For AI-assisted work, I want:

- the problem statement in plain language,
- the intended behavior,
- the architectural boundaries touched,
- the main alternatives considered,
- the risks and assumptions,
- the tests added or changed,
- the commands run,
- screenshots or logs where relevant,
- known limitations,
- a short explanation of why the change is safe to merge.

This gives the reviewer a design trail without forcing them to reconstruct it from the diff.

The agent should produce this evidence. If it can write the code, it can list the changed files, explain the tests, and identify risky areas. If it cannot explain the change clearly, that is a review signal.

## Smaller diffs matter more now

AI makes large diffs cheap, so small batches matter more. Faster generation should produce narrower changes, not larger pull requests.

A good workflow produces small tasks, narrow pull requests, clear acceptance criteria, and repeatable evidence.

I measure trustworthy progress, not code volume.

## Architecture becomes a review discipline

Implementation friction used to expose some architectural problems. A hard change gave people time to notice crossed boundaries.

Agents remove that friction. They can connect things that should stay separate and produce working code that damages the system structure.

Architecture needs reviewable constraints:

- module boundaries,
- dependency rules,
- API contracts,
- naming conventions,
- testing expectations,
- security requirements,
- observability standards,
- and clear examples of good local design.

Repository instructions and automated checks should enforce as many of these constraints as possible.

The next gains will come from the system around the agent: repository instructions, isolated workspaces, checkpoints, tests, observability, and review evidence.

## The new senior skill: verification design

Senior developers will still read code, but line-by-line inspection cannot be the only control. They need verification systems:

- tests that capture business behavior,
- linters and static analysis that enforce mechanical rules,
- architectural fitness functions,
- CI gates that check the boring things,
- agents that do first-pass review,
- observability that catches real-world failure,
- and pull request templates that force evidence into the open.

Human review should focus on intent, judgment, ownership, risk, and fit with the larger system.

Machines should catch formatting, missing null checks, and obvious test gaps. Senior reviewers should decide whether the change belongs in the system.

## My current rule

My rule is:

> I do not need to type every line, but I need to understand what I merge.

AI helps me explore, draft code, generate tests, review changes, and find mistakes I would miss.

The team still owns the consequences. Its capacity is the amount of code it can review, verify, and support without exhausting the people who carry the architectural judgment.

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
