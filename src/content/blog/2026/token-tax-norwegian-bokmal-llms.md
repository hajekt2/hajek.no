---
title: "The token tax of Norwegian Bokmål in LLMs"
author: "Tomas Hajek"
pubDatetime: 2026-05-05T09:00:00+02:00
featured: true
draft: false
tags:
  - ai
  - llm
  - tokenization
  - norwegian
description: "A small experiment comparing English and Norwegian Bokmål token counts for the same official government text."
---

I did a small experiment on the token cost of Norwegian Bokmål in LLMs.

The question was simple:

> If the same text exists in English and Norwegian, how different is the token count?

I used the official Norwegian government text *National Strategy for Artificial Intelligence* and compared the English and Norwegian Bokmål versions of the same foreword.

The Norwegian version was slightly shorter:

![Infographic showing Norwegian Bokmål uses 37% to 68% more tokens than English for the same text.](/assets/img/2026/token-tax-norwegian-bokmal-llms/linkedin-token-tax-1.jpg)

- EN: 3,165 characters
- NO: 3,065 characters

It still used more tokens:

- OpenAI `cl100k_base`: +67.5%
- OpenAI `o200k_base`: +37.4%
- Claude Sonnet 4.6: +60.6%
- Gemini 2.5 Pro: +44.1%

That surprised me.

The reason is not that Norwegian is somehow "bad" for AI. It is mostly tokenizer compression.

Common English words and phrases are often encoded more compactly by these tokenizers.

Norwegian has compound words, inflections, and characters like æ, ø, å. Those can fragment into more token pieces.

![Side-by-side tokenizer comparison showing an English phrase uses 2 tokens while a Norwegian compound uses 9.](/assets/img/2026/token-tax-norwegian-bokmal-llms/linkedin-token-tax-2.jpg)

For normal chat, this probably does not matter much.

For large contexts, RAG pipelines, coding agents, document processing, summarization, and batch jobs, it can matter quite a lot.

For this sample, the Norwegian text carried the same meaning in slightly fewer characters but required 37-68% more tokens. I would like to run the same comparison on Czech next.

The repo with the experiment is here:

<https://github.com/hajekt2/token-tax-norway>
