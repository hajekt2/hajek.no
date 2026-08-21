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
description: "I added Windows support to a tool that exports local coding-agent history. The output is useful, but it must be treated as sensitive."
---

AI coding assistants are now part of my daily development work.

I use Cursor, Claude Code, Codex, Gemini CLI, and OpenCode for design, debugging, refactoring, tests, and documentation. Their local histories contain prompts, answers, diffs, tool calls, failures, and the discussion around a change.

Most tools keep that record in their own format. An export makes old decisions searchable and keeps the context available outside one interface.

I found an open-source project by irb0gie that exports this local history:

[0xSero/ai-data-extraction](https://github.com/0xSero/ai-data-extraction)

The project extracts local conversation and coding-agent data from several tools. Depending on the source, this includes prompts, responses, code context, file paths, diffs, tool results, timestamps, model information, and project metadata.

If AI is part of development, I want the history to be exportable and readable without one vendor's tool.

The original project worked on macOS and Linux-style environments. On Windows, the same tools store data in different locations, including `%APPDATA%` and `%LOCALAPPDATA%`.

So I created a fork with Windows support:

[hajekt2/ai-data-extraction](https://github.com/hajekt2/ai-data-extraction)

My fork adds Windows extraction paths and a PowerShell script that runs the full flow.

The privacy warning is serious.

The extracted data may contain sensitive information:

- proprietary source code,
- API keys or tokens,
- internal project names,
- personal file paths,
- private conversations,
- customer or company data.

Do not upload or commit the output without checking it. Treat it as sensitive, scan it for secrets, review it, and sanitize it before sharing.

The output belongs in the same security category as source code and development logs. Stored safely, it lets developers search old decisions and keep the record when a coding assistant changes or disappears.

Original project:
[0xSero/ai-data-extraction](https://github.com/0xSero/ai-data-extraction)

My Windows-compatible fork:
[hajekt2/ai-data-extraction](https://github.com/hajekt2/ai-data-extraction)
