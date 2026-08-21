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
description: "I built a local Android SMS Gateway skill so OpenClaw can send texts, receive replies, and export inbox data over Tailscale."
---

I gave OpenClaw a phone number.

I built an [Android SMS Gateway skill](https://github.com/hajekt2/android-sms-gateway-local). An Android phone runs the gateway on my local network or Tailscale. OpenClaw can send texts, receive replies, and export inbox data through it.

This was my first OpenClaw skill. I did not want another SaaS API for a channel that an old Android phone already handles.

The setup is local on purpose. I control the phone and reach the gateway over Tailscale. Small automations do not need another cloud service when this path is enough.

Sending a text is the obvious demo. The skill is more useful between workflows:

- notify someone when a local job finishes,
- receive a short reply and continue a workflow,
- export messages for personal logging,
- connect old systems that still use SMS codes or alerts,
- build small automations around a channel people read.

An agent with SMS access should not send messages because it thinks they may help. It needs explicit user intent, permissions, and logs.

The boundary is clear: an agent I control, a phone I control, and a Tailscale connection. It does one ordinary job without another cloud service.
