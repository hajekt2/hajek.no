---
title: "Warp as an ACP client"
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

I spent some time experimenting with Warp's newly open-source codebase and built a small prototype of Warp running as an Agent Client Protocol, or ACP, client.

The basic idea is simple:

Warp already has many of the things I want from an agentic terminal or ADE: a good conversation UI, terminal integration, command approvals, diffs, history, and a native developer workflow.

The agent runtime does not have to be owned by Warp itself.

In this prototype, Warp can connect to a local ACP-compatible agent runtime, such as OpenCode or a Codex-style ACP wrapper. Warp acts as the client UI, while the external agent process handles the actual agent logic.

<video controls preload="metadata" playsinline style="width: 100%; border-radius: 0.5rem; margin: 2rem 0;">
  <source src="/videos/warp-acp-demo.mp4" type="video/mp4" />
  <a href="/videos/warp-acp-demo.mp4">Watch the demo video</a>
</video>

That means the agent runtime can own things like:

- model access
- provider subscriptions
- API keys
- local model configuration
- MCP and tool setup
- provider-specific behavior

Warp provides the terminal-native interface around the agent.

## Separating the interface and runtime

A lot of current AI developer tooling is tightly coupled to one hosted backend. That is convenient, and for many users it is probably the right default.

For technical users, teams, and companies, this coupling can limit provider choice and control over credentials or tools.

There are good reasons to separate:

- the UX layer
- the agent runtime
- the model/provider relationship
- the tool and permission boundary
- local/private configuration such as credentials and MCP servers

If the UI and the runtime are separate, users can choose the frontend experience they like without being locked into one specific backend, provider subscription, or hosted agent implementation.

ACP defines the protocol boundary between the agent client and runtime.

## What the prototype does

In my fork, Warp can launch and talk to configured ACP agents over local stdio using JSON-RPC.

The prototype includes:

- ACP initialization and session creation
- prompt forwarding from Warp to an external ACP agent
- streaming ACP output back into Warp's agent conversation/history model
- seeded local agent commands for OpenCode and Codex-style ACP runtimes
- early plumbing for explicit MCP server forwarding
- protocol-level smoke tests with OpenCode ACP and a Codex ACP wrapper

The prototype uses ACP as a protocol path rather than scraping terminal scrollback. Warp renders the streamed response into its existing agent history.

## Security and ownership

The prototype is intentionally local-first.

ACP agents are launched as local processes. Model credentials stay with the configured agent runtime, not inside Warp. MCP forwarding should be explicit and allowlist-based, rather than automatically exposing every configured tool server to every agent.

File, terminal, diff, and permission requests should remain gated by Warp's existing approval model.

Users need to be able to see which component owns execution, credentials, tools, and approvals.

## Status

This is only an experimental fork/prototype, not an official Warp release and not affiliated with or endorsed by Warp.

The prototype runs local ACP-compatible agents and streams their output into Warp's agent history. The next step is to find out whether the Warp open-source community wants ACP support to use this architecture.

Repository: <https://github.com/hajekt2/warp>

The fork demonstrates that Warp can provide the terminal interface while a local, replaceable runtime owns the agent logic and model credentials.
