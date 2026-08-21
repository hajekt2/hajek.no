---
title: "Accessible PDFs are no longer optional"
author: "Tomas Hajek"
pubDatetime: 2025-12-02T09:00:00+01:00
featured: false
draft: false
tags:
  - accessibility
  - pdf
  - ccm
  - docengine
description: "Checking one PDF by hand proves little. Accessibility has to work across templates, production, validation, exceptions, and archives."
---

For many organizations, a PDF is the final connection between a system and a person. It may contain an insurance decision, a pension statement, an invoice, or a medical letter.

A PDF can look correct on screen and still be unusable with assistive technology. The visual layout does not tell a screen reader which text is a heading, how a table is structured, what order to read the page in, or whether an image carries information.

The European Accessibility Act has made this harder to postpone. But the engineering problem is larger than compliance. Organizations need to produce accessible documents every day, across many templates and large batch runs.

Checking one PDF by hand proves very little about the next thousand.

## Accessibility belongs in production

Most document environments already have years of machinery around them: composition systems, templates, business rules, print streams, archives, legacy integrations, and manual checks. Replacing all of it is rarely realistic.

Accessibility has to fit into that production chain. Teams need to control semantic structure, reading order, alternative text, document language, and validation. They also need to record exceptions and know exactly which output entered the archive.

The process should answer concrete questions. Did the template produce the expected structure? Did the document pass a standards-based validator? Which checks failed? Can the team reproduce the result after the next template change?

## Where DocEngine fits

[XPER DocEngine](https://xperconsulting.no/docengine) works on this production problem. It analyzes existing PDFs, adds accessibility structure, regenerates the document, and validates the output. Human review still matters for wording, useful alternative text, and cases where the correct structure needs judgment.

The checks should run close to document production. Then teams can repeat them and stop inaccessible files before they reach customers or archives.
