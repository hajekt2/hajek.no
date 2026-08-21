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
description: "Chat works for commands. Longer agent tasks also need persistent state, task-specific views, audit history, and rollback."
---

I use chat every day, but I do not think it is the final interface for AI agents.

Most agents still live in a chat window, terminal, web app, or messaging thread. That works well for commands and short feedback loops. Ask for a file edit and get a diff. Ask it to run a command and get the logs.

Longer work needs more than a transcript.

If I ask an agent to compare data, I do not want a paragraph pretending to be a spreadsheet. I want a table or a small inspection tool. Monitoring needs a dashboard. Project work needs notes, files, decisions, and a clear diff.

The product shape I want is closer to this:

```text
agent + dynamic workspace + generated widgets + persistent state + rollback
```

The software should shape the view around the task instead of forcing every result into chat.

A workspace could be an agent creating a temporary table to classify 200 items, keeping my decisions, and turning the result into a repeatable script. It could also create a review panel for a document migration, linked to the files and logs that prove each item is done.

Software that changes its working environment can also break it. Undo, audit history, permissions, sandboxing, and recovery belong in the design from the start.

Chat remains a good command layer. The workspace should hold the state, artifacts, decisions, and recovery controls produced by a long task.
