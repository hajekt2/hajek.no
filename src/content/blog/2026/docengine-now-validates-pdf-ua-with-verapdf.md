---
title: "DocEngine now validates PDF/UA with veraPDF"
author: "Tomas Hajek"
pubDatetime: 2026-06-02T22:45:00+02:00
featured: false
draft: false
tags:
  - pdf
  - accessibility
  - pdf-ua
  - verapdf
  - docengine
  - ccm
description: "DocEngine now runs veraPDF after processing a document and reports PDF/UA-1 conformance, failed checks, and validation categories in the same workflow."
---

We added built-in PDF/UA validation to DocEngine because a processed PDF still needs an independent conformance check.

DocEngine is designed to post-process existing PDF documents and improve their accessibility. It analyzes document structure, enriches semantics, and helps turn visually correct PDFs into documents that are also understandable for assistive technologies.

After processing a document, DocEngine validates the result against PDF/UA-1 using veraPDF, an open-source validator for PDF/A and PDF/UA conformance.

That means validation is no longer a separate manual step done in another tool. It becomes part of the same SaaS workflow that processes the document.

## What PDF/UA validation checks

A document can look fine on screen while its machine-readable structure is incomplete or wrong.

Accessible PDFs need machine-readable structure: headings, paragraphs, tables, lists, metadata, language settings, annotations, alternative text, and a logical reading order that assistive technologies can interpret correctly.

PDF/UA, ISO 14289, provides a standards-based baseline for that structure.

For organizations producing large numbers of PDFs, including invoices, customer letters, statements, policies, reports, and archived communications, validation cannot depend on opening documents one by one in a desktop tool.

It has to fit into the production workflow.

## Validation inside the DocEngine workflow

With the new validation capability, users can see the result directly inside DocEngine after processing a PDF.

Instead of exporting the file, opening another application, running a manual validation, and interpreting raw output, they get a clear report in the same environment.

The validation view reports:

- Is the document PDF/UA compliant?
- How many checks passed?
- Were any errors found?
- Which validation categories were inspected?

![DocEngine PDF/UA validation result showing a validated PDF/UA-1 report for invoice_2024_10851.pdf with 0 errors and 2872 passed checks.](/assets/img/2026/docengine-pdf-ua-validation/docengine-verapdf-validation-result.png)

*Example validation result in DocEngine: a processed invoice is reported as PDF/UA-1 compliant, with zero errors and all 2,872 checks passing.*

Technical teams can inspect the standards-based result, while business users can see the verdict without reading the raw veraPDF report.

## From remediation to validation

A lot of accessibility tooling focuses either on remediation or on validation. In real production environments, those two things belong together.

If you improve a document but cannot verify the result, the workflow is incomplete.

If you validate a document but the validation sits outside the operational flow, teams often skip it until late in the process.

DocEngine keeps the processing and validation steps together:

1. Process the PDF
2. Validate the result
3. Inspect the report
4. Decide whether the document can move to the next stage

This repeatable sequence fits high-volume document operations better than a separate manual check performed late in the process.

## Standards-based validation

DocEngine uses **veraPDF** for the validation step.

The result comes from an open-source validator and the PDF/UA rules rather than a proprietary accessibility score.

Of course, passing PDF/UA validation is not the whole accessibility story. Human review still matters. Content clarity still matters. Color contrast, wording, and the actual usefulness of alternative text still matter.

Automated validation provides a repeatable baseline, especially when PDFs are produced at scale.

## Why validation runs inside DocEngine

Validation runs inside the same DocEngine workflow that processes the PDF.

That reduces friction for teams that want accessibility checks to be part of normal operations rather than a separate specialist task.

In practice, teams get:

- less context switching between tools,
- faster feedback after processing,
- clearer reporting for users,
- a repeatable validation step in document production.

The validator does not replace human review, and passing PDF/UA does not prove that every description or wording choice is useful. It does give the production team a reproducible result after each processed document, with the failed checks available in the same place as the output.
