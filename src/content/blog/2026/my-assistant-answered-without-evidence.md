---
title: "My assistant answered a question without supporting evidence"
author: "Tomas Hajek"
pubDatetime: 2026-09-22T09:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - llm
  - evaluation
  - exstream
description: "Three models found the expected documents. Unsupported questions exposed a separate requirement: stop when the knowledge base has no answer."
---

I asked my Exstream assistant which Quadient setting controlled PDF/A-3 attachments. There was no supporting document in its knowledge base. It named a setting anyway.

This was one of the questions I used to compare three models in August. I wanted the assistant to answer from the documents I had given it, and stop when those documents could not support an answer.

The first test asked the same 12 Exstream support questions in both English and Norwegian. All three models found the expected documents. Finding them did not establish that every sentence in the resulting answers was correct, but it was a useful check of retrieval across languages.

The second test asked about things the documents did not cover. Alongside the Quadient question, I asked about Exstream certificate rotation and the cargo capacity of a Boeing 747-8F. Each question ran four times per model.

The checker marked 12 of 12 runs as refusals for GPT-5.6 Terra, 10 of 12 for GPT-4o, and seven of 12 for GPT-5.6 Luna. My notes record Luna answering the Quadient question three times out of four without a supporting document.

I chose Terra at the time. The checker matched refusal phrases and counted empty answers as refusals. A response could mention escalation and still contain unsupported advice, so the scores did not prove that every refusal was a clean stop.

Nor did the Quadient example prove that the setting was wrong. That was a separate question. Even if the answer happened to be correct, it broke the requirement I had set for this assistant.

The test should include questions the documents cannot answer. Repeat them and read every response, including those the checker marked as refusals. A refusal phrase does not prove that the model stopped, because it can still give unsupported instructions after saying it lacks information.

When there is no supporting evidence, my assistant should say so and stop. The user can then decide whether to escalate to a human.
