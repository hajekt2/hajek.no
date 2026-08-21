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
description: "I use AI for uncertain classification, deterministic code for final writes, and human review when a mistake is hard to reverse."
---

I trust an AI-assisted migration when each step has a clear owner.

I arrived at this pattern while reorganizing 1,388 password-manager entries. The model received sanitized metadata for classification, while secrets stayed local. Deterministic code applied the reviewed result to the original item through its stable ID.

The pipeline was:

```text
sanitize -> classify -> refine -> manual override if needed -> rehydrate
```

After one refinement pass, uncertain items dropped from 891 to 485, a 45.6% reduction. The model reduced the manual queue, but it never wrote to the vault.

Document and content migrations follow the same pattern. Teams classify the source, map it to the target, transform it, verify the result, and handle exceptions. The volume and consequences are larger, but the ownership boundary can stay the same.

At XPER Consulting, we have delivered several document and content migrations. AI helps where fixed rules leave a large uncertain middle. It should never hide how the migration changed the data.

The responsibilities should stay separate:

- use AI for semantic judgment,
- use deterministic code for final writes,
- use human review where uncertainty or risk is high,
- keep evidence for what changed and why.

The migration team stays in control of security, quality, and every final write.
