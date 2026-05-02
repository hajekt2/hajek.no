---
title: "Giving OpenClaw a phone number"
author: "Tomas Hajek"
pubDatetime: 2026-02-05T21:53:26+01:00
featured: false
draft: false
tags:
  - openclaw
  - sms
  - automation
  - tailscale
description: "I built an Android SMS Gateway skill for OpenClaw so a local agent can send texts, receive replies, and export inbox data."
---

OpenClaw users: your lobster can have a phone number.

I built an [Android SMS Gateway skill](https://github.com/hajekt2/android-sms-gateway-local). It is simple: local Android phone, local network or Tailscale, and OpenClaw can send texts, receive replies, and export inbox data from the agent.

This was my first OpenClaw skill, and it scratched a very specific itch. Sometimes the useful automation boundary is not another SaaS API. It is the old boring channel that still reaches real people: SMS.

The setup is deliberately local. I like that. A phone you control. A gateway you can reach over Tailscale. No need to route every small automation through a cloud service if the local path is enough.

The interesting part is not just "agent sends text". That is the obvious demo.

The more useful version is workflow glue:

- notify someone when a local job finishes,
- receive a short reply and continue a workflow,
- export messages for personal logging,
- connect old systems that still use SMS codes or alerts,
- build small automations around a channel people actually read.

Of course, messaging tools need restraint. An agent with SMS access should not spray messages around because it feels helpful. Permissions, explicit user intent, and logging matter here.

But as a capability, I like it. Local agent. Local phone. Works through Tailscale. Boring in the right way.
