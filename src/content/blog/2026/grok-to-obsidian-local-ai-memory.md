---
title: "From Grok to Obsidian: owning my AI memory"
author: "Tomas Hajek"
pubDatetime: 2026-02-26T21:45:35+01:00
authorTwitter: hajekt21
featured: false
draft: false
tags:
  - ai
  - openclaw
  - obsidian
  - data-ownership
description: "X exported my tweets and media, but not 1,174 Grok conversations. I built a workflow to keep that history in local Markdown."
---

I asked for my AI history. I got my tweets and media, but not my Grok conversations.

That annoyed me, so I built an [export path](https://github.com/hajekt2/x-grok-to-obsidian).

The workflow is simple:

```text
Grok on X -> capture conversation data -> Markdown -> Obsidian
```

My local private agent can use the files, and I can inspect, search, version, or delete them myself.

The first run moved 1,174 conversations into local/private notes.

The archive contains ideas, decisions, half-written plans, code discussions, debugging sessions, and sometimes the only explanation of why I made a decision. That is personal infrastructure, not disposable chat history.

Leaving it trapped inside one platform is a bad default.

I want a memory layer I control:

- exportable,
- searchable,
- local-first,
- readable without a special app,
- usable by my own agent,
- easy to back up,
- easy to delete.

The archive uses Markdown, so it stays readable without Obsidian. Obsidian is a good interface over the plain files.

If a system helps me think, build, and decide, I should be able to take that history with me.

The Markdown archive still works when I change the interface, agent, or model.
