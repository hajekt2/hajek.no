---
title: "The token tax of Norwegian Bokmål in LLMs"
author: "Tomas Hajek"
pubDatetime: 2026-05-05T09:00:00+02:00
featured: false
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

The Norwegian version was actually slightly shorter:

- EN: 3,165 characters
- NO: 3,065 characters

But it still used significantly more tokens:

- OpenAI `cl100k_base`: +67.5%
- OpenAI `o200k_base`: +37.4%
- Claude Sonnet 4.6: +60.6%
- Gemini 2.5 Pro: +44.1%

That surprised me.

The reason is not that Norwegian is somehow "bad" for AI. It is mostly tokenizer compression.

English is represented much more heavily in tokenizer training data, so common English words and phrases are often encoded more compactly.

Norwegian has compound words, inflections, and characters like æ, ø, å. Those can fragment into more token pieces.

For normal chat, this probably does not matter much.

For large contexts, RAG pipelines, coding agents, document processing, summarization, and batch jobs, it can matter quite a lot.

Same meaning.

Slightly fewer characters.

37-68% more tokens.

Curious if anyone has measured this for other languages. My guess is Czech compounds will be similar too.

The repo with the experiment is here:

<https://github.com/hajekt2/token-tax-norway>
