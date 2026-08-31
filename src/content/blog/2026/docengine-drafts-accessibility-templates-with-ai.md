---
title: "DocEngine now drafts accessibility templates with AI"
author: "Tomas Hajek"
pubDatetime: 2026-08-28T15:00:00+02:00
draft: false
tags:
  - ai
  - accessibility
  - pdf-ua
  - docengine
  - ccm
description: "Upload a sample PDF, get a drafted accessibility template. Available today in DocEngine, with two non-negotiables built in."
---

Most accessibility vendors open with a demo. Ours opens with your PDF. Upload one sample, and DocEngine drafts the accessibility template from it. Available today.

A template is the tagged master document the engine uses to generate PDF/UA output. Until now, someone built it by hand for every new document type: font sizes, column splits, section boundaries, field positions. Slow, precise work. A reviewed draft amortizes across later documents of that type; when the type changes shape, a designer looks again.

Inside the draft flow, an LLM decides what things are: template name, document language, semantic roles, heading hierarchy, which regions are tables. The code keeps every coordinate. If you have read [how we built this](/posts/2026/docengine-model-names-code-keeps-coordinates/), you know the boundary. This post is about what to demand before trusting any AI accessibility feature.

## Two things to demand

**A human review gate.** Every draft carries a confidence score per element; anything below 0.60 is flagged. Ask a vendor what happens under their threshold. The right answer names a person who reads the flagged drafts before anything reaches production. "The AI is very accurate" is not an answer.

**A validation loop.** After DocEngine processes a document, [veraPDF](https://verapdf.org) validates the result against PDF/UA-1 inside the same workflow, and you see the report: failed checks and fixes, not a green tick. Ask any vendor for that report on your own sample, not a screenshot of a passing run on theirs.

Plenty of AI accessibility features are demos wearing product clothes. Demand those two from any vendor. If the answer is a demo, walk.

## One honest limit

Scanned PDFs are not supported yet. The draft flow handles born-digital documents.

## Where to see it

[DocEngine](https://xperconsulting.no/docengine) converts standard PDFs to PDF/UA and now drafts the templates that make it fast. Book a demo and bring your worst PDF. Even the scanned one. We will name what it cannot do before you ask.
