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
description: "The same government foreword used 37.4% to 67.5% more tokens in Norwegian Bokmål than in English, despite fewer characters."
---

I compared the token cost of the same government text in English and Norwegian Bokmål.

The question was:

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

I expected a smaller difference.

The reason is tokenizer compression. Common English words and phrases are often encoded more compactly. Norwegian compound words, inflections, and characters such as æ, ø, and å can split into more pieces.

![Side-by-side tokenizer comparison showing an English phrase uses 2 tokens while a Norwegian compound uses 9.](/assets/img/2026/token-tax-norwegian-bokmal-llms/linkedin-token-tax-2.jpg)

For normal chat, this probably does not matter much. It can matter in large contexts, RAG pipelines, coding agents, document processing, and batch jobs.

In this sample, Norwegian used slightly fewer characters and 37.4% to 67.5% more tokens. I want to run the same comparison on Czech next.

The repo with the experiment is here:

<https://github.com/hajekt2/token-tax-norway>
