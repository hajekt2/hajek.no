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
description: "X export gave me tweets and media, but not Grok conversations. So I built a workflow to move AI history into local Markdown."
---

I asked for my AI history. I got my tweets and media, but not my Grok conversations.

That annoyed me enough to build an [exit hatch](https://github.com/hajekt2/x-grok-to-obsidian).

The workflow is simple:

```text
Grok on X -> capture conversation data -> Markdown -> Obsidian
```

From there, my local private agent can use the knowledge directly. Not through a platform memory feature I cannot inspect. Not through a black box that may or may not remember the right thing. Just files. Markdown. Local search. Git if I want it.

The first run moved 1,174 conversations into local/private notes.

That number is less important than the principle. AI chat history is becoming real personal infrastructure. It contains ideas, decisions, half-written plans, code discussions, debugging sessions, and sometimes the only explanation of why something was done a certain way.

Leaving all of that trapped inside a platform is a bad default.

I want a memory layer I control:

- exportable,
- searchable,
- local-first,
- readable without a special app,
- usable by my own agent,
- easy to back up,
- easy to delete.

Obsidian is not magic here. Markdown is the important part. Obsidian is just a good interface over plain files.

The more I use AI tools, the more I think data portability should be treated as a basic feature. If a system helps me think, build, and decide, I should be able to take that history with me.

Platform memory is convenient. Owning your memory is better.
