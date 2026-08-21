---
title: "Designing workspaces for AI agents"
author: "Tomas Hajek"
pubDatetime: 2026-04-28T05:56:47+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - product
  - interface
description: "Chat works well for commands, but longer agent tasks also need persistent state, purpose-built views, audit history, and rollback."
---

Chat is useful. I use it every day. But I do not think chat is the final interface for AI agents.

Most agents still live inside fixed surfaces: a chat window, a terminal, a web app, or a messaging thread. That works surprisingly well for commands and short feedback loops. Ask a question, get an answer. Ask for a file edit, get a diff. Ask it to run a command, get logs back.

But real work usually wants more than a transcript.

If I ask an agent to compare data, I do not want a paragraph pretending to be a spreadsheet. I want a table, a chart, or a small inspection tool. If I ask it to monitor something, I want a dashboard. If I ask it to organize a project, I probably need notes, cards, timelines, files, and a way to see what changed.

The product shape I want is closer to this:

```text
agent + dynamic workspace + generated widgets + persistent state + rollback
```

The software should shape the working view around the task instead of forcing every result back into a transcript.

A workspace could be as simple as an agent creating a temporary table to classify 200 items, keeping the user's decisions, then turning the result into a repeatable script. It could also create a review panel for a document migration or connect a checklist to the files, logs, and commands that prove each item is done.

The UI becomes part of the conversation.

Software that changes its own working environment can also break it. Undo, audit history, permissions, sandboxing, and recovery therefore belong in the design from the start.

Chat remains a good command layer. The workspace should hold the state, artifacts, decisions, and recovery controls that a long-running task produces.
