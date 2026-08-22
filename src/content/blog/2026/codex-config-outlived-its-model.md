---
title: "The config line that outlived its model"
author: "Tomas Hajek"
pubDatetime: 2026-08-23T10:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - codex
  - tokens
  - engineering
description: "I burned 39% of a weekly Codex quota in four and a half hours. A context-window override I set during GPT-5.5 was still in my config."
---

I burned 39% of a weekly Codex quota in four and a half hours, and none of it was a bug.

That was Tuesday. 51% at 18:32, 90% at 23:00. Nine concurrent sessions at peak across three workspaces, nothing stuck in a loop, nothing retrying. It was all work I meant to run.

What stopped me was not money. I was going to run out of week, so I paused it and went to sleep.

The next day I reconstructed where it went. Codex writes one JSONL file per session, and every model response records its own token counts, so the whole afternoon was sitting on disk.

1,491 of my 3,065 requests were over 272,000 input tokens.

Above that line the request is repriced at 2x input and 1.5x output. Not the tokens above the line. The whole request.

A month earlier, on 18 July, OpenAI had cut the context window that Codex reports for GPT-5.6 from 372,000 down to 272,000. The same number. Auto-compaction fires at a percentage of the reported window, so the smaller window should have compacted my sessions sooner and kept every request under the price line.

My config overrode it. `model_context_window = 1000000`, with `model_auto_compact_token_limit = 900000`. Sessions peaked at 611,000.

I set those lines myself. Opus has a million-token window, I read that Codex could do the same, so I switched it on. That was during GPT-5.5, which never pushed a session near that line. GPT-5.6 does. The model changed underneath the setting and the setting did not.

The setting was mine. The 272,000 line was not. It took both to make that afternoon cost what it did.

Most Codex limit complaints this week point at OpenAI. I only know why my own meter moved, and it moved because of two lines I typed into `~/.codex/config.toml` a model version ago. If you never set `model_context_window`, the changelog is your answer and this post is not about you. If you did set it, go and look at what you set it to, and when.

Both override lines are commented out now. I have not run a comparable afternoon since, so I do not know yet what that saves.
