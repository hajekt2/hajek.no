---
title: "An agent ran the migration. The interesting number is not the day."
author: "Tomas Hajek"
pubDatetime: 2026-11-18T02:20:00+01:00
featured: false
draft: false
tags:
  - ai
  - agents
  - infrastructure
  - migration
  - engineering
description: "A day elapsed, a few hours attended, and a hundred dollars of tokens at list prices. The comparison needs three numbers, not one."
---

On 2 September I started moving a small SaaS off a managed platform onto a host I control. On 3 September the old host was deleted.

About 24h elapsed between the first commit and the deletion.

I did not type the Ansible. The agent planned the phases, wrote the host automation, ran the cutover, and verified each step. I decided what the phases were, approved the gates, and stepped in when a report did not look right.

Three things matter: how long it took, how much of that was attended, and what the tokens would have cost.

## Elapsed time is not effort

The work included sleep, several unrelated threads running in parallel, and waiting on CI.

So the first number is a day elapsed. The useful one is the attention, and it was a few hours.

## What it would have taken me

The estimate is 5 - 10 working days for one experienced infrastructure engineer.

That is my estimate. Inventory, adopting seven DNS zones and 68 records into code, building and proving a new host, shrinking an oversized volume, migrating data, cutting over, retiring the old host. Each step carries a verification burden, and each discovery opens its own investigation.

## What the tokens cost

This part is measured. The migration consumed 484 million tokens across 124 agent sessions. Of the 482.5M input, 469.4M was cached and 13.1M was not. Output was 2.0M.

At list prices for this model class, that is about $95. Call it $100 for the migration.

The bill is also not what I paid. The work ran on a combination of local model and subscription, so the marginal cost was close to zero. The $100 is what the same work would have cost API list price.

## The column nobody quotes

Correcting the agent is what made the work.

Eight times in one day it reported a branch pushed when the branch had never reached the server. The check could not distinguish "already pushed" from "never connected", so it returned the same empty answer for both.

On cutover day all six containers reported healthy while both sites returned 503. 

Every phase had to prove something before the next one started, and the proof had to be the output of the check, not a status line. Two cutovers were aborted before the third worked. They cost almost nothing because of that rule.

## What the day bought

The move itself is checkable. Over 8000 files with zero checksum differences and identical database control files.

The volume also came down from 80 GB to 20 GB, which took the monthly charge down.

## The counterargument

Aborting a cutover twice is cheap when nobody is writing to the system. On a system with customers, the same discipline is correct and the same freedom is not available. I would not present this as a general result.

The other caveat is that the speed came from constant correction, not from the agent being right. That only works while verification stays cheaper than doing the work by hand. Where checking costs as much as the work, the day becomes a week and the comparison disappears.

## What the three numbers are worth

A day elapsed, against my estimate of five to ten working days. A few hours of attention inside that day. A hundred dollars of tokens at list prices, which I did not pay.

Those ratios only hold because checking was cheap enough to do constantly. One gate per phase, and a check that can tell success from a different state, is what turned five to ten days into one.

I am not putting a price on the human week. Rates vary too much for the number to travel, and the attended hours carry the comparison better than a rate would.

Seven zones and 68 DNS records now live in a repository. The next move starts from a file instead of from what someone remembers about a server.
