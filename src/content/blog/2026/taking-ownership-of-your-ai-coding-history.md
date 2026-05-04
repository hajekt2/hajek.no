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
description: "AI coding assistant history is becoming valuable development memory. Developers should be able to export it, inspect it, archive it, and reuse it responsibly."
---

Over the last couple of years, AI coding assistants have become part of my daily development workflow.

Tools like Cursor, Claude Code, Codex, Windsurf, Trae, Continue, Gemini CLI, and OpenCode are no longer just "chatbots next to the editor". They are becoming an active part of how software is designed, debugged, refactored, and documented.

But there is one interesting problem:

Most of the useful interaction history stays locked inside each tool.

Every prompt, every assistant answer, every code suggestion, every diff, every tool call, every debugging session — all of that becomes a detailed record of how you work with software. It is not just chat history. It is a development memory.

That memory can be valuable for many reasons:

- understanding how you actually use AI tools,
- reviewing architectural and coding decisions,
- building a personal knowledge base,
- analyzing productivity patterns,
- preserving important project context,
- creating datasets for personal experiments,
- potentially fine-tuning or evaluating future coding agents,
- keeping control over data that you generated yourself.

I recently found an interesting open-source project by irb0gie:

[0xSero/ai-data-extraction](https://github.com/0xSero/ai-data-extraction)

The project extracts local conversation and coding-agent data from several AI development tools, including Cursor, Claude Code, Codex, Windsurf, Trae, Continue, Gemini CLI, and OpenCode.

It can extract things like:

- user prompts,
- assistant responses,
- code context,
- file paths and selected snippets,
- suggested edits and diffs,
- tool calls and execution results,
- timestamps and metadata,
- model and project information, where available.

This is exactly the kind of tooling I think developers will need more of.

If AI becomes part of the development process, then the history of that collaboration should not be invisible, inaccessible, or tied to one specific vendor. Developers should be able to export it, inspect it, archive it, and reuse it responsibly.

The original project worked well for macOS and Linux-style environments, but I wanted it to work properly on Windows too. Many developers use these tools on Windows, and the relevant data is often stored in different places, such as `%APPDATA%` and `%LOCALAPPDATA%`.

So I created a fork with Windows support:

[hajekt2/ai-data-extraction](https://github.com/hajekt2/ai-data-extraction)

The fork adds Windows-friendly extraction support, including a PowerShell script for running the full extraction flow.

There is also an important privacy warning here.

The extracted data may contain sensitive information:

- proprietary source code,
- API keys or tokens,
- internal project names,
- personal file paths,
- private conversations,
- customer or company data.

So this is not something you should blindly upload or commit anywhere. Treat the output as sensitive. Scan it for secrets, review it manually, and sanitize it before sharing.

Still, I think this direction is important.

As developers, we are producing more and more valuable context through our interactions with AI tools. That context should belong to us. We should be able to move it between tools, learn from it, and use it as part of our own long-term engineering memory.

Original project:
[0xSero/ai-data-extraction](https://github.com/0xSero/ai-data-extraction)

My Windows-compatible fork:
[hajekt2/ai-data-extraction](https://github.com/hajekt2/ai-data-extraction)
