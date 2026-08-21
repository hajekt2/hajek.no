---
title: "Taking ownership of your AI coding history"
author: "Tomas Hajek"
pubDatetime: 2026-05-19T09:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - coding-agents
  - developer-tools
  - data-ownership
  - privacy
description: "I added Windows support to a tool that exports local coding-agent history so developers can inspect, archive, sanitize, and reuse their own records."
---

Over the last couple of years, AI coding assistants have become part of my daily development workflow.

Tools such as Cursor, Claude Code, Codex, Gemini CLI, and OpenCode now participate in design, debugging, refactoring, tests, and documentation. Their local histories record prompts, answers, diffs, tool calls, failures, and the reasoning around a change.

Most tools keep that record in their own storage format. Exporting it makes architectural decisions searchable, preserves project context, and gives developers data they can inspect or reuse without staying tied to one interface.

I found an open-source project by irb0gie that exports this local history:

[0xSero/ai-data-extraction](https://github.com/0xSero/ai-data-extraction)

The project extracts local conversation and coding-agent data from several development tools. Depending on the source, that can include prompts, responses, code context, file paths, diffs, tool results, timestamps, model information, and project metadata.

If AI becomes part of the development process, then the history of that collaboration should not be invisible, inaccessible, or tied to one specific vendor. Developers should be able to export it, inspect it, archive it, and reuse it responsibly.

The original project worked on macOS and Linux-style environments. On Windows, the same tools store data in different locations, including `%APPDATA%` and `%LOCALAPPDATA%`.

So I created a fork with Windows support:

[hajekt2/ai-data-extraction](https://github.com/hajekt2/ai-data-extraction)

My fork adds Windows extraction paths and a PowerShell script that runs the full flow.

There is also an important privacy warning here.

The extracted data may contain sensitive information:

- proprietary source code,
- API keys or tokens,
- internal project names,
- personal file paths,
- private conversations,
- customer or company data.

So this is not something you should blindly upload or commit anywhere. Treat the output as sensitive. Scan it for secrets, review it manually, and sanitize it before sharing.

The output belongs in the same security category as source code and development logs. Once it is stored safely, developers can search old decisions, move history between tools, and retain the record when a coding assistant changes or disappears.

Original project:
[0xSero/ai-data-extraction](https://github.com/0xSero/ai-data-extraction)

My Windows-compatible fork:
[hajekt2/ai-data-extraction](https://github.com/hajekt2/ai-data-extraction)
