---
title: "Reorganizing a password manager with AI without exposing secrets"
author: "Tomas Hajek"
pubDatetime: 2026-02-16T18:12:53+01:00
featured: false
draft: false
tags:
  - ai
  - security
  - automation
  - data-migration
description: "I used AI for semantic classification of password manager metadata, while keeping secrets out of the model and rehydrating deterministically by ID."
---

I reorganized 1,388 items in my password manager using AI, without exposing secrets to the model.

That last part is the only reason the experiment was acceptable.

The basic pattern was:

```text
sanitize metadata -> classify with AI -> review uncertain cases -> rehydrate by stable item ID
```

The model never needed the passwords. It did not need TOTP secrets, recovery codes, notes, or anything sensitive. For classification, metadata was enough: item titles, URLs, rough category hints, and stable IDs.

The stable ID is important. AI can help decide that "github.com" belongs under Development or that a bank login belongs under Finance, but I do not want the model producing the final vault. I want code to do that part. Deterministic code. Boring code. Code that maps a reviewed classification back to the original item by ID.

That separation made the workflow feel safe enough:

1. split data first,
2. send only sanitized metadata for classification,
3. keep secrets local,
4. review uncertain results,
5. merge back deterministically.

The result was useful. Uncertain classifications dropped from 891 to 485, a 45.6% reduction. More importantly, the process was reproducible. I could inspect what the model suggested before anything touched the real data.

This is the pattern I trust for sensitive AI work.

Use AI for semantic mapping. Use code for safety, determinism, and final writes.

If you mix those responsibilities, you get a clever demo and a security headache. If you separate them, you get something that can actually be used.
