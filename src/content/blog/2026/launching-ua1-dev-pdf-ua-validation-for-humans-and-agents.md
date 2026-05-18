---
title: "Launching UA1.dev: PDF/UA validation for humans and agents"
author: "Tomas Hajek"
pubDatetime: 2026-02-05T09:00:00+01:00
featured: false
draft: false
tags:
  - accessibility
  - pdf
  - ccm
  - ai-agents
  - product
  - ua1
description: "UA1.dev is a small PDF/UA-1 validation service with a human-friendly web UI, deterministic API, and agent-ready automation path."
---

I launched [UA1.dev](https://ua1.dev), a PDF/UA-1 validator for humans, CI pipelines, and AI agents.

It is a small tool, but it sits in a problem space I care a lot about: document accessibility in real production workflows.

## Why PDF/UA validation matters

A lot of important communication still arrives as PDF: letters, decisions, invoices, policies, forms, statements, reports, and archived documents. In banking, insurance, healthcare, pensions, and public services, those documents are not decorative. They explain rights, obligations, money, health, and decisions that affect real people.

If a PDF cannot be read properly with assistive technology, the service behind it is not really accessible.

PDF/UA-1, formally ISO 14289-1, is one of the practical standards used to define accessible PDF structure. It is not the whole accessibility story, but it gives teams a concrete baseline to validate against.

The problem is that validation is still too often treated as a manual end-of-process checkbox.

That does not scale.

## What UA1.dev does

[UA1.dev](https://ua1.dev) currently provides three things:

- a simple drag-and-drop web validator for quick PDF/UA-1 checks,
- an API at `api.ua1.dev` for scripts, CI pipelines, and integrations,
- an agent skill published on [ClawHub](https://clawhub.com/skills/ua1-validator-agent).

The web UI is deliberately simple: drop a PDF, get a verdict, inspect findings, and download the JSON report.

The API is where the project becomes more interesting. It is designed to be deterministic and automation-friendly: stable JSON, compact response mode, explicit error codes, request IDs, and rate-limit headers.

That makes it usable not only from a browser, but also from CI jobs, coding agents, document pipelines, and internal tools.

## Why I made it agent-ready

AI agents are becoming useful for software delivery and operations, but they need reliable tools around them. A vague natural-language answer is not enough when you want to fail a build, check a generated document, or decide whether a document pipeline can continue.

For agents, the ideal tool is boring in the best way:

- predictable input,
- predictable output,
- stable errors,
- clear limits,
- easy verification.

That is the direction for UA1.dev. The agent should not guess whether a PDF passed. It should call the validator, read structured output, and act on the result.

## The CCM connection

My background is Customer Communication Management: document composition, transformation, accessibility, delivery, and the infrastructure around those systems.

In that world, accessibility cannot be solved only by checking one final PDF by hand. Real organizations have templates, batch jobs, composition engines, archives, print streams, integrations, and release processes. They need repeatable validation close to where documents are created and changed.

That is why I see UA1.dev as both a useful standalone tool and a small building block in a larger direction: making document quality and accessibility part of the production workflow.

## Current state

The current version supports PDF/UA-1 validation using veraPDF under the hood.

Useful links:

- [UA1.dev web validator](https://ua1.dev)
- [Agent quickstart](https://ua1.dev/agents)
- [UA1 Validator Agent on ClawHub](https://clawhub.com/skills/ua1-validator-agent)
- [Public agent skill repository](https://github.com/hajekt2/ua1-validator-agent-skill)

The service is intentionally narrow for now. That is a feature, not a limitation. I would rather have one clear tool that does one useful thing reliably than a broad platform-shaped demo that nobody can trust.

## What comes next

The next useful improvements are probably:

- clearer validation reports,
- more CI examples,
- better documentation for API usage,
- examples for agent workflows,
- better explanations of common PDF/UA failures,
- eventually, connections to remediation and post-composition accessibility workflows.

The bigger long-term question is not just “can this PDF pass validation?”

It is:

> Can we make accessible document production easier to automate, verify, and operate?

That is the problem I am interested in.
