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
description: "An AI interface should create a table, dashboard, or task board when chat is the wrong way to inspect the work."
---

Most AI agents still live in a chat window, terminal, messaging app, or fixed web interface. They can answer questions, edit files, and run commands, but the interface stays the same.

I think the agent should create the view needed for the current task.

A summary can stay as text. A data comparison should become a table. Monitoring needs a dashboard, and project work may need a small task board.

Those views can be part of the interaction instead of separate applications built in advance.

We are used to this model:

```text
fixed app UI + chatbot bolted on top
```

Another model is:

```text
agent + dynamic workspace + generated widgets + persistent state + rollback
```

The agent shapes the working environment around the task instead of forcing every result through chat.

Software that changes its own interface can break it. Undo, audit history, permissions, sandboxing, and recovery need to be part of the design.

Chat still works for commands and discussion. The generated workspace should hold the state and controls that would otherwise be squeezed into prose.
