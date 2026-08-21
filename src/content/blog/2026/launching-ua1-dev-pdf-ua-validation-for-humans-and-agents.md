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
description: "UA1.dev checks PDFs against PDF/UA-1 through a web interface or a JSON API that CI pipelines, scripts, and agents can call."
---

I launched [UA1.dev](https://ua1.dev), a PDF/UA-1 validator for humans, CI pipelines, and AI agents.

I built it to make standards-based PDF accessibility checks available in both manual and automated workflows.

## Why PDF/UA validation matters

A lot of important communication still arrives as PDF: letters, decisions, invoices, policies, forms, statements, reports, and archived documents. In banking, insurance, healthcare, pensions, and public services, those documents are not decorative. They explain rights, obligations, money, health, and decisions that affect real people.

If a PDF cannot be read properly with assistive technology, the service behind it is not really accessible.

PDF/UA-1, formally ISO 14289-1, is one of the practical standards used to define accessible PDF structure. It is not the whole accessibility story, but it gives teams a concrete baseline to validate against.

Validation is still often treated as a manual end-of-process checkbox, which does not scale across large document sets.

## What UA1.dev does

[UA1.dev](https://ua1.dev) currently provides three things:

- a simple drag-and-drop web validator for quick PDF/UA-1 checks,
- an API at `api.ua1.dev` for scripts, CI pipelines, and integrations,
- an agent skill published on [ClawHub](https://clawhub.com/skills/ua1-validator-agent).

The web UI is deliberately simple: drop a PDF, get a verdict, inspect findings, and download the JSON report.

The API returns stable JSON, supports a compact response mode, and exposes explicit error codes, request IDs, and rate-limit headers.

A CI job or agent can run the same check with one request:

```bash
curl -sS -X POST "https://api.ua1.dev/api/validate?format=compact" \
  -F "file=@document.pdf"
```

The caller can read the verdict from the compact response and stop a release when validation fails.

## Why I made it agent-ready

AI agents are becoming useful for software delivery and operations, but they need reliable tools around them. A vague natural-language answer is not enough when you want to fail a build, check a generated document, or decide whether a document pipeline can continue.

For agents, the useful properties are operational:

- predictable input,
- predictable output,
- stable errors,
- clear limits,
- easy verification.

An agent should call the validator, read structured output, and act on the result instead of guessing whether a PDF passed.

## The CCM connection

My background is Customer Communication Management: document composition, transformation, accessibility, delivery, and the infrastructure around those systems.

In that world, accessibility cannot be solved only by checking one final PDF by hand. Real organizations have templates, batch jobs, composition engines, archives, print streams, integrations, and release processes. They need repeatable validation close to where documents are created and changed.

UA1.dev works as a standalone check and as one validation step inside a larger document production workflow.

## Current state

The current version supports PDF/UA-1 validation using veraPDF under the hood.

Useful links:

- [UA1.dev web validator](https://ua1.dev)
- [Agent quickstart](https://ua1.dev/agents)
- [UA1 Validator Agent on ClawHub](https://clawhub.com/skills/ua1-validator-agent)
- [Public agent skill repository](https://github.com/hajekt2/ua1-validator-agent-skill)

The service is intentionally narrow for now. I would rather maintain one validator with a clear contract than add unrelated features before the basic workflow is dependable.

## Planned improvements

The next useful improvements are probably:

- clearer validation reports,
- more CI examples,
- better documentation for API usage,
- examples for agent workflows,
- better explanations of common PDF/UA failures,
- eventually, connections to remediation and post-composition accessibility workflows.

The longer-term work is to connect validation with remediation and document production without weakening the clear pass, fail, and error contract that automation depends on.
