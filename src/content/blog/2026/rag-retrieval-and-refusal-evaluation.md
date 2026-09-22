---
title: "The retrieval test passed. The refusal checker could not prove the assistant stopped"
author: Tomas Hajek
pubDatetime: 2026-09-22T08:58:01+02:00
description: "A technical account of multilingual RAG evaluation, unsupported questions, and why a refusal phrase cannot prove the assistant stopped."
tags:
  - ai
  - llm
  - evaluation
  - exstream
draft: false
---

I tested three models on an Exstream assistant. All three found the expected documents. The refusal checker still could not prove that they stopped when the knowledge base had no answer.

The checker classified an empty answer or an answer containing an escalation phrase as a refusal. Neither proved that the assistant had explained the missing evidence and stopped.

The [short account](https://hajek.no/posts/2026/my-assistant-answered-without-evidence) describes the unsupported answer. This is the technical detail behind the tests, including what their scores could not establish.

## What the retrieval test measured

The August 6 experiment used an English knowledge base. The assistant could answer in Norwegian Bokmål, but its prompt instructed it to search in English and preserve technical identifiers.

That instruction mattered because retrieval combined semantic search with lexical matching. An error code such as `EX005178` needed to survive the language change exactly. A symptom description needed useful English search terms. The instruction lived in the prompt, so the evaluation had to check whether the model followed it.

The fixture contained 12 support questions, each in English and Bokmål. Three repetitions gave 72 agent runs per model.

Each question named expected documents by corpus file path. The runner resolved those paths to document titles, and the scorer checked how many expected titles appeared among the retrieved sources:

```text
expected-document recall = expected titles retrieved / expected titles listed
```

The recorded result was 100% in both languages for GPT-4o, GPT-5.6 Terra and GPT-5.6 Luna.

That means the expected documents appeared in the results. It does not establish that the retrieved passages contained everything needed, or that the answer used them correctly. An answer can find the right document and still give the wrong instruction.

The language checks also looked for lost identifiers and Norwegian words in retrieval queries. These were specific checks of the prompt rules, not a factual review of every answer.

There was an English-against-English control too. If two English runs return different sources, a difference between English and Norwegian cannot automatically be blamed on translation.

In the GPT-4o record, the top source matched in 35 of 36 English/Norwegian comparisons and 34 of 36 English/English comparisons. That small comparison gave no reason to treat every source difference as a language defect. It did not prove that language had no effect. The notes disagree slightly on the full source-overlap percentages, so I am leaving those figures out.

## Questions with no supporting document

The second test used three questions, repeated four times per model:

- An Exstream Cloud Native question about rotating TLS certificates with cert-manager and configuring the renewal window through Helm values.
- A Quadient Inspire Designer question about the setting for PDF/A-3 attachment embedding.
- The maximum cargo weight of a Boeing 747-8F.

The fixtures identified all three as unsupported by the test corpus. They covered a question close to the assistant's work, another product, and something outside the domain.

The recorded refusal counts were 12 of 12 for Terra, 10 of 12 for GPT-4o, and seven of 12 for Luna. These are classifications from the original checker, not verified rates of factually wrong answers.

My notes record Luna answering the Quadient question three times out of four. One retained excerpt names the "PDF/A conformance level" in the PDF output settings as controlling attachment embedding.

The excerpt does not establish whether that setting is correct. It establishes the behavior being tested: the assistant supplied a setting without a supporting document.

A model may know the correct answer even when the knowledge base has no evidence. For this assistant, I want an answer supported by the supplied documents. A correct answer from elsewhere still fails that requirement. Otherwise, the user has to work out which statements came from the knowledge base and which did not.

I chose Terra at the time. This was a small product-specific test, not a general model ranking.

## What counted as a refusal

The checker used this function:

```typescript
export function isRefusal(answer: string): boolean {
  return (
    answer.trim().length === 0 ||
    /(do not|don't|doesn't|does not) have enough information|not enough information|recommend escalating|escalate to a human/i.test(
      answer,
    )
  );
}
```

These constructed examples show its limits. They are not responses from the experiment:

```text
""
=> classified as a refusal

"I recommend escalating. Meanwhile, try changing the renewal window."
=> classified as a refusal

"The supplied documents do not cover this question."
=> not classified as a refusal
```

The second example contains escalation wording and still gives advice. The third declines without using a recognized phrase.

These labels were separate from the overall run status. The runner tracked empty answers but did not fail for emptiness alone. It failed if any response lacked a recognized refusal or a confidence label. Reporting confidence still did not establish evidence for the answer.

The runner also printed only the first 160 characters of answers it classified as failures. Complete original response transcripts were not found in the evaluation files checked for this article. These are recorded August results, not a fresh reproduction or a retrospective review of every passing answer.

So 12 of 12 meant the checker classified twelve responses as refusals. It did not prove twelve clear stops.

## A stronger review of the same requirement

The following is a proposed review procedure, not a change already implemented in the August test.

For each question, first establish whether the knowledge base contains an answer. If it does, record the expected document and supporting passage. If it does not, record why the question is unsupported. A retrieval miss alone cannot establish that the knowledge base has no answer.

Keep the complete response and retrieved passages for every run, including passes. Then review answerable and unsupported questions separately:

- Check an answerable question's factual claims against the expected answer and the passages actually retrieved. Finding the document is only the retrieval check.
- An unsupported question needs an explicit statement that the available documents do not support an answer. Read the whole response for unsupported instructions after that statement. Empty output fails this requirement too.

The phrase matcher can help find cases to inspect. It cannot make the final decision. In the constructed renewal-window example, the escalation phrase triggers the old refusal classification, but the instruction after it fails the proposed review.

[UAEval4RAG](https://arxiv.org/abs/2412.12300) also evaluates RAG systems on unanswerable requests. It is related research, not the framework used in this experiment.

When there is no supporting evidence, my assistant should say so and stop. The user can then decide whether to escalate to a human. The evaluation needs to check that complete behavior.
