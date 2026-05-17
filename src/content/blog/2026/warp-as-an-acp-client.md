---
title: "Warp as an ACP Client"
author: "Tomas Hajek"
pubDatetime: 2026-05-17T17:37:00+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - software-development
  - warp
  - acp
description: "An experimental prototype of Warp running as an Agent Client Protocol client, separating the terminal UX from the user-owned agent runtime."
---

I recently spent some time experimenting with Warp's newly open-source codebase. The result is a small experimental prototype: **Warp running as an Agent Client Protocol (ACP) client**.

The basic idea is simple:

Warp already has many of the things I want from an agentic terminal or ADE: a good conversation UI, terminal integration, command approvals, diffs, history, and a native developer workflow.

But the intelligence does not necessarily have to be owned by Warp itself.

In this prototype, Warp can connect to a local ACP-compatible agent runtime, such as OpenCode or a Codex-style ACP wrapper. Warp acts as the client UI, while the external agent process handles the actual agent logic.

<video controls preload="metadata" style="width: 100%; border-radius: 0.5rem; margin: 2rem 0;" src="https://github.com/user-attachments/assets/f328f672-4998-4d23-b924-e2a63a345a36">
  <a href="https://github.com/user-attachments/assets/f328f672-4998-4d23-b924-e2a63a345a36">Watch the demo video</a>
</video>

That means the agent runtime can own things like:

- model access
- provider subscriptions
- API keys
- local model configuration
- MCP and tool setup
- provider-specific behavior

Warp, meanwhile, stays focused on what it is very good at: being the terminal-native user experience around the agent.

## Why this matters

A lot of current AI developer tooling is tightly coupled to one hosted backend. That is convenient, and for many users it is probably the right default.

But for more technical users, teams, and companies, I think this coupling becomes limiting.

There are good reasons to separate:

- the UX layer
- the agent runtime
- the model/provider relationship
- the tool and permission boundary
- local/private configuration such as credentials and MCP servers

If the UI and the runtime are separate, users can choose the frontend experience they like without being locked into one specific backend, provider subscription, or hosted agent implementation.

This is where ACP becomes interesting. It gives us a cleaner protocol boundary between an agent client and an agent runtime.

## What the prototype does

In my fork, Warp can launch and talk to configured ACP agents over local stdio using JSON-RPC.

The prototype includes:

- ACP initialization and session creation
- prompt forwarding from Warp to an external ACP agent
- streaming ACP output back into Warp's agent conversation/history model
- seeded local agent commands for OpenCode and Codex-style ACP runtimes
- early plumbing for explicit MCP server forwarding
- protocol-level smoke tests with OpenCode ACP and a Codex ACP wrapper

The important part is that this is not just terminal scrollback scraping. ACP is treated as a protocol path, and the streamed agent response is rendered back into Warp's agent history.

## Security and ownership

The prototype is intentionally local-first.

ACP agents are launched as local processes. Model credentials stay with the configured agent runtime, not inside Warp. MCP forwarding should be explicit and allowlist-based, rather than automatically exposing every configured tool server to every agent.

File, terminal, diff, and permission requests should remain gated by Warp's existing approval model.

That boundary is important. If agentic terminals are going to become serious developer environments, users need to understand which component owns execution, credentials, tools, and approvals.

## Status

This is only an experimental fork/prototype, not an official Warp release and not affiliated with or endorsed by Warp.

I have it running with local ACP-compatible agents and streaming output back into Warp's agent history. The next useful step would be feedback from the Warp open-source community on whether this architecture fits the direction they want ACP support to take.

Repository: <https://github.com/hajekt2/warp>

I think this direction is worth exploring: agentic terminals where the terminal/ADE provides the user experience, but the agent runtime remains user-owned and replaceable.
