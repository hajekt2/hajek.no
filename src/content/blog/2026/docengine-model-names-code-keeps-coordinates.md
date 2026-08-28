---
title: "The model names things, the code keeps the coordinates"
author: "Tomas Hajek"
pubDatetime: 2026-08-24T12:00:00+02:00
draft: false
tags:
  - ai
  - accessibility
  - pdf-ua
  - docengine
  - ccm
description: "We tried drafting accessibility templates without an LLM first. What shipped gives the model meaning but never a coordinate."
---

I opened the generated template in the designer (the editor where templates are built) and saw FAKTURA merged with the payment instruction text sitting at the same height. One block. Marked H1, the main header of the document.

A screen reader would announce payment instructions as the title of the document. Completely wrong.

The deterministic version came first, and on purpose: cluster lines into rows, detect column splits, promote headings from font size and position. All rules, no model.

The failure was not one bad threshold. Move a threshold to fix one document and another breaks.

So we flipped the design. Rules stay for geometry; a model gets asked for judgment only. Upload a sample PDF, get a draft accessibility template back, and review it before anything becomes real.

DocEngine makes an existing PDF accessible by applying a template to it. The template tells the engine where sections start, which text is a heading, how a table splits into columns, and which document variant applies.

PDF/UA, the accessibility standard, names what a compliant document needs: machine-readable headings, table headers, reading order, alternative text. Miss them and the document looks fine on screen while failing the person listening to it.

Without a draft, someone builds that template by hand for every new document type: font sizes, column splits, section boundaries, field positions. Slow, precise work.

## Code owns every coordinate

Here is the whole pipeline:

1. Parse the sample PDF into elements with bounding boxes.
2. Cluster its lines into a condensed summary: text, position, font size, weight. Nothing else goes in.
3. Render every page as an image at 150 DPI.
4. Send summary and images to the model in one structured-output call whose schema accepts only semantic fields: template name, language, roles, hierarchy, table regions.
5. Write each decision back onto its source element and compute the exact coordinates there.

A ten-page bank statement with 16,876 elements condenses into a prompt small enough for one call.

One admission: pages go in as images too. Early prototypes sent images alone and performed worse; image plus text summary tested better. The model sees the page. Box placement stays in code.

Every node also gets a confidence score computed by the code, not asked of the model. It is additive: 0.45 base, plus 0.20 for a table, plus 0.15 for a heading and again if it sits in the top fifth of the page, capped at 0.99. Anything below 0.60 goes to review, and nothing becomes a template until a designer has been through it.

## What the model does that rules cannot

A date label sits next to a value. Rules see two text elements that happen to share a y-coordinate. The model knows what an invoice is, so it knows the label goes with the value next to it. The same knowledge names sections, picks heading levels, and pairs fields the way the document type implies.

Rules match geometry. The semantic decisions went to the model.

## The objection

The obvious objection: end-to-end auto-tagging products exist. Give the model the whole PDF and skip the plumbing.

Provenance answers that one. When the model places the boxes, a layout decision and a guess look identical, and the designer reviewing the draft cannot tell a measured coordinate from an invented one by looking. Writing every decision back onto real elements keeps the answer boring: all of them did.

The second objection attacks the hybrid itself: if rules lost, why keep half the system deterministic? Economics answers it. A template is written once and applied to every future document of that type, so one reviewed draft amortizes across everything the system produces.

The hybrid costs more engineering than either extreme. It buys drafts you can review instead of output you have to audit.

## Where it still breaks

No frame lines between rows and columns, mixed values, empty fields, merged cells. Worst case I have seen: two columns merged into one, so a listener hears two values run together that do not belong together.

Scanned PDFs are not supported at all yet.

And the output is called a draft on purpose. Usually what comes back needs small fixes, quick to make in the designer. A designer still designs the template; the draft just starts it.

## Decide what the model may never own

Model picks get revised every release. Two boundary rules have survived them so far: coordinates stay with the code, and the model never grades its own work.

When it holds, nobody hears a payment instruction announced as the title of their letter.

The model names things. The code keeps every coordinate.
