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
description: "I built a prototype of Warp as an ACP client, with Warp handling the terminal UI and a local process owning the agent runtime."
---

I built a prototype of Warp running as an Agent Client Protocol, or ACP, client.

The idea is:

Warp already has the parts I want from an agentic terminal: conversation, terminal integration, command approvals, diffs, history, and a native developer workflow.

The agent runtime does not have to be owned by Warp itself.

In the prototype, Warp connects to a local ACP-compatible runtime such as OpenCode or a Codex-style ACP wrapper. Warp is the client UI, while the external process runs the agent.

<video controls preload="metadata" playsinline style="width: 100%; border-radius: 0.5rem; margin: 2rem 0;">
  <source src="/videos/warp-acp-demo.mp4" type="video/mp4" />
  <a href="/videos/warp-acp-demo.mp4">Watch the demo video</a>
</video>

The agent runtime owns:

- model access
- provider subscriptions
- API keys
- local model configuration
- MCP and tool setup
- provider-specific behavior

Warp provides the terminal interface.

## Separating the interface and runtime

Many AI developer tools are coupled to one hosted backend. That is convenient and probably the right default for many users.

For teams and technical users, it limits provider choice and control of credentials and tools.

I want to separate:

- the UX layer
- the agent runtime
- the model/provider relationship
- the tool and permission boundary
- local/private configuration such as credentials and MCP servers

With the UI and runtime separated, users can choose the frontend without being locked into one backend, subscription, or hosted agent.

ACP is the protocol boundary between them.

## What the prototype does

My fork launches configured ACP agents over local stdio and talks to them with JSON-RPC.

The prototype includes:

- ACP initialization and session creation
- prompt forwarding from Warp to an external ACP agent
- streaming ACP output back into Warp's agent conversation/history model
- seeded local agent commands for OpenCode and Codex-style ACP runtimes
- early plumbing for explicit MCP server forwarding
- protocol-level smoke tests with OpenCode ACP and a Codex ACP wrapper

The prototype uses ACP instead of scraping terminal scrollback. Warp renders the streamed response in its existing agent history.

## Security and ownership

The prototype is local-first. ACP agents run as local processes, and model credentials stay with the configured runtime. MCP forwarding should use an explicit allowlist instead of exposing every tool server to every agent.

Warp's existing approval model should still gate file, terminal, diff, and permission requests.

The UI needs to show which component owns execution, credentials, tools, and approvals.

## Status

This is an experimental fork, not an official Warp release and not endorsed by Warp.

The prototype runs local ACP agents and streams their output into Warp's history. The next question is whether the Warp open-source community wants ACP support built this way.

Repository: <https://github.com/hajekt2/warp>

The fork proves that Warp can provide the terminal interface while a local, replaceable runtime owns the agent and its credentials.
