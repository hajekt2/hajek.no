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
description: "UA1.dev checks PDFs against PDF/UA-1 in a web interface or through a JSON API for CI, scripts, and agents."
---

I launched [UA1.dev](https://ua1.dev), a PDF/UA-1 validator for humans, CI pipelines, and AI agents.

I wanted the same standards-based check available to a person in a browser and to an automated pipeline.

## Why PDF/UA validation matters

A lot of important communication still arrives as PDF. In banking, insurance, healthcare, pensions, and public services, these documents explain rights, obligations, money, health, and decisions.

If assistive technology cannot read the PDF properly, the service is not accessible.

PDF/UA-1, formally ISO 14289-1, defines a baseline for accessible PDF structure. It does not cover every accessibility question, but it gives teams a concrete result to check.

One manual check at the end does not scale across large document sets.

## What UA1.dev does

[UA1.dev](https://ua1.dev) currently provides three things:

- a simple drag-and-drop web validator for quick PDF/UA-1 checks,
- an API at `api.ua1.dev` for scripts, CI pipelines, and integrations,
- an agent skill published on [ClawHub](https://clawhub.com/skills/ua1-validator-agent).

In the web UI, you drop a PDF, get a verdict, inspect the findings, and download the JSON report.

The API returns stable JSON, supports a compact response mode, and exposes explicit error codes, request IDs, and rate-limit headers.

A CI job or agent can run the same check with one request:

```bash
curl -sS -X POST "https://api.ua1.dev/api/validate?format=compact" \
  -F "file=@document.pdf"
```

The caller can read the verdict from the compact response and stop a release when validation fails.

## Why I made it agent-ready

Agents need tools with clear contracts. A vague answer is not enough when the result decides whether a build fails or a document pipeline continues.

For agents, the useful properties are operational:

- predictable input,
- predictable output,
- stable errors,
- clear limits,
- easy verification.

The agent calls the validator, reads structured output, and acts on the result. It does not guess whether the PDF passed.

## The CCM connection

My background is Customer Communication Management, including document composition, transformation, accessibility, delivery, and production infrastructure.

In that work, checking one final PDF by hand proves little. Organizations have templates, batch jobs, composition engines, archives, print streams, integrations, and release processes. Validation needs to run close to where documents are created and changed.

UA1.dev works as a standalone check and as one validation step inside a larger document production workflow.

## Current state

The current version supports PDF/UA-1 validation using veraPDF under the hood.

Useful links:

- [UA1.dev web validator](https://ua1.dev)
- [Agent quickstart](https://ua1.dev/agents)
- [UA1 Validator Agent on ClawHub](https://clawhub.com/skills/ua1-validator-agent)
- [Public agent skill repository](https://github.com/hajekt2/ua1-validator-agent-skill)

The service is narrow on purpose. I would rather maintain one validator with a clear contract than add unrelated features.

## Planned improvements

The next improvements are probably:

- clearer validation reports,
- more CI examples,
- better documentation for API usage,
- examples for agent workflows,
- better explanations of common PDF/UA failures,
- eventually, connections to remediation and post-composition accessibility workflows.

Later, I want to connect validation with remediation and document production. The pass, fail, and error contract must stay clear.
