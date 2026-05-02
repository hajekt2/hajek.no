---
title: "AI-assisted migrations need control, not magic"
author: "Tomas Hajek"
pubDatetime: 2026-04-11T09:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - data-migration
  - document-management
  - ccm
description: "AI can help with classification, mapping, and exception handling in migrations, but code and process must keep control over safety and quality."
---

A recent side project gave me a clearer view of where AI can actually help in migration work.

I used AI agents to reorganize 1,388 entries in my password manager without exposing the secrets themselves to the model.

The setup was simple in principle:

- classify metadata only,
- keep secrets private,
- merge everything back deterministically by stable item ID.

So this was not "let AI touch sensitive data and hope for the best".

It was a controlled migration pipeline:

```text
sanitize -> classify -> refine -> manual override if needed -> rehydrate
```

After one refinement pass, the number of uncertain items dropped from 891 to 485. That is a 45.6% reduction.

What I found interesting was not just the result, but the pattern:

- AI was useful for semantic mapping.
- Code was necessary for safety, determinism, and reproducibility.

That feels relevant far beyond a personal experiment.

Document and content migrations have the same shape. The data is bigger, the consequences are higher, and the edge cases are messier, but the core problem is familiar: classify, map, transform, verify, handle exceptions, and preserve trust.

It also made me think about the successful Equinor migration of a large document repository to the cloud, which later became a case study for IBM. Vidar Berge from XPER Consulting played an important role in that project.

That is a good reminder that successful migrations are never just about moving content.

They depend on architecture, process, metadata, integrations, quality control, and people who know what they are doing.

At XPER Consulting, we have already delivered several document and content migrations. What is getting interesting now is the next phase: using AI to assist with classification, mapping, transformation, and exception handling without giving up control over security or quality.

I do not think AI will replace experienced migration teams.

I do think the best migration teams will start using AI as part of the toolbox.

The right pattern is not magic. It is separation of responsibilities:

- use AI for semantic judgment,
- use deterministic code for final writes,
- use human review where uncertainty or risk is high,
- keep evidence for what changed and why.

That is how AI-assisted migrations become useful instead of reckless.
