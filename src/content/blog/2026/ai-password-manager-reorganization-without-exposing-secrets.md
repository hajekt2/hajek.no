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
description: "I used AI to classify 1,388 password-manager entries. Secrets stayed local, and deterministic code applied reviewed changes by ID."
---

I reorganized 1,388 items in my password manager using AI, without exposing secrets to the model.

Keeping the secrets local was the condition for doing it at all.

The basic pattern was:

```text
sanitize metadata -> classify with AI -> review uncertain cases -> rehydrate by stable item ID
```

The model never needed the passwords. It did not need TOTP secrets, recovery codes, notes, or anything sensitive. For classification, metadata was enough: item titles, URLs, rough category hints, and stable IDs.

The stable ID is important. AI can suggest that `github.com` belongs under Development or that a bank login belongs under Finance. I do not want it producing the final vault. Deterministic code maps each reviewed classification back to the original item by ID.

The separation was:

1. split data first,
2. send only sanitized metadata for classification,
3. keep secrets local,
4. review uncertain results,
5. merge back deterministically.

Uncertain classifications dropped from 891 to 485, a 45.6% reduction. I could inspect every suggestion before anything touched the real data.

This is the pattern I trust for sensitive AI work: AI handles the semantic mapping, and deterministic code handles the final writes. The model never gets control of the real vault.
