---
title: "AI agents need workspaces, not just chat windows"
author: "Tomas Hajek"
pubDatetime: 2026-04-28T05:56:47+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - product
  - interface
description: "Chat is a useful command layer for AI agents, but it is probably not the final interface. Real work needs state, structure, and rollback."
---

Chat is useful. I use it every day. But I do not think chat is the final interface for AI agents.

Most agents still live inside fixed surfaces: a chat window, a terminal, a web app, or a messaging thread. That works surprisingly well for commands and short feedback loops. Ask a question, get an answer. Ask for a file edit, get a diff. Ask it to run a command, get logs back.

But real work usually wants more than a transcript.

If I ask an agent to compare data, I do not want a paragraph pretending to be a spreadsheet. I want a table, a chart, or a small inspection tool. If I ask it to monitor something, I want a dashboard. If I ask it to organize a project, I probably need notes, cards, timelines, files, and a way to see what changed.

The interesting product shape is closer to this:

```text
agent + dynamic workspace + generated widgets + persistent state + rollback
```

Less "chatbot bolted onto an app". More "software that shapes itself around the task".

That sounds a bit grand, so let me make it boring again. A workspace could be as simple as an agent creating a temporary table to classify 200 items, keeping the user's decisions, then turning that into a repeatable script. Or creating a small review panel for a document migration. Or producing a checklist that is connected to actual files, logs, and commands instead of being dead text.

The UI becomes part of the conversation.

That also creates new problems. If software can change itself, it can also break itself. So undo, audit history, permissions, sandboxing, and recovery modes become core features. Not nice extras. Core features.

This is why I find "dynamic workspace" more interesting than "better chatbot". Chat is a good command layer, but work has shape. It has state. It has artifacts. It needs memory and structure.

The future may be less:

> chatbot inside an app

and more:

> AI building the working environment with you
