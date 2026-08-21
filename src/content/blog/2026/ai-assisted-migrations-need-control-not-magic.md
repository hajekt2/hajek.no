---
title: "A safe pattern for AI-assisted migrations"
author: "Tomas Hajek"
pubDatetime: 2026-04-11T09:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - data-migration
  - document-management
  - ccm
description: "Use AI for uncertain classification and mapping, deterministic code for final writes, and human review where the consequences are hard to reverse."
---

A migration becomes safer when each part of the workflow has a clear owner.

I arrived at this pattern while reorganizing 1,388 password-manager entries. The model received sanitized metadata for classification, while secrets stayed local. Deterministic code applied the reviewed result to the original item through its stable ID.

The pipeline was:

```text
sanitize -> classify -> refine -> manual override if needed -> rehydrate
```

After one refinement pass, uncertain items dropped from 891 to 485, a 45.6% reduction. The model reduced the manual classification queue, but it never wrote directly to the vault.

Document and content migrations have the same basic stages. Teams classify source material, map it to the target model, transform it, verify the result, and handle exceptions. The data volume and business consequences are much larger, but the ownership boundary can remain the same.

At XPER Consulting, we have delivered several document and content migrations. AI can help with classification, mapping, transformation, and exception handling, especially where rigid rules leave a large uncertain middle. It should not hide how the migration changed the data.

The responsibilities should stay separate:

- use AI for semantic judgment,
- use deterministic code for final writes,
- use human review where uncertainty or risk is high,
- keep evidence for what changed and why.

This division leaves the migration team in control of security, quality, and every final write.
