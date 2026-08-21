---
title: "The next AI interface may not be a chatbot"
author: "Tomas Hajek"
pubDatetime: 2026-05-12T09:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - interface
  - product
description: "An AI interface should present a table, chart, dashboard, or task board when that is the clearest way to inspect the work."
---

Most AI agents still live inside a chat window, terminal, messaging app, or fixed web interface.

They can answer questions, call tools, edit files, run commands, and generate content.

The interface usually stays the same even when the task changes completely. I think agents should be able to create the view needed for the current work.

Ask for a summary, and you get text.

Ask to compare data, and the workspace turns into a table or chart.

Ask to monitor something, and it creates a dashboard.

Ask to organize a project, and it builds a small task board, note view, or custom workspace.

Those views can be part of the interaction instead of separate applications designed in advance.

We are used to this model:

```text
fixed app UI + chatbot bolted on top
```

Another model is:

```text
agent + dynamic workspace + generated widgets + persistent state + rollback
```

The agent can shape the working environment around the task instead of forcing every result through the same chat box.

If software can change itself, it can also break itself. So undo, audit history, permissions, sandboxing, and recovery modes become much more important.

Chat still works well for commands and discussion. A generated workspace should handle the table, chart, state, and controls that would otherwise be squeezed into prose.
