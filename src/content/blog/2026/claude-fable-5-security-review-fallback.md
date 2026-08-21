---
title: "Claude Fable 5 refused my defensive security review"
author: "Tomas Hajek"
pubDatetime: 2026-06-11T15:30:00+02:00
featured: false
draft: false
tags:
  - ai
  - security
  - llm
  - docengine
  - software-development
  - product
description: "Claude Fable 5 refused a defensive review of our own SaaS application twice, including a prompt that explicitly banned exploit guidance."
---

I tried Claude Fable 5 on a defensive security review of our SaaS application, DocEngine.

I did not ask for malware, exploit code, or instructions to break into a system. I asked it to find risks in software we own.

The first prompt triggered Fable 5's safety measures, and the session fell back to Claude Opus 4.8.

The message was:

> Fable 5's safety measures flagged this message. They may flag safe, normal content as well. These measures let us bring Mythos-level capability in other areas sooner, and we're working to refine them. Switched to Opus 4.8.

I thought the prompt might have sounded too close to offensive security work, so I tried again with explicit limits:

So I tried again, this time with a much safer framing:

> Perform a defensive security review of this SaaS application. Do not provide exploit code, weaponized payloads, persistence mechanisms, bypass instructions, or step-by-step attack execution. Focus on risk identification, secure design, OWASP-style findings, severity, affected components, and remediation guidance.

It triggered the same fallback.

![Claude Fable 5 safety fallback message](/assets/img/2026/fable-5-safety-fallback-opus-48.png)

Anthropic documents additional safety classifiers in Claude Fable 5, including a cyber classifier. The documentation says benign cybersecurity work can trigger it. The request then becomes a refusal, with another model such as Opus 4.8 used as fallback.

The product appears to be behaving as documented.

I understand the reason. A model that finds insecure authorization, weak tenant isolation, broken sessions, or dangerous file processing can also help an attacker. A classifier may not know who owns the codebase.

For a software team, it creates a real problem.

Security review is one of the jobs where a strong model should help. A SaaS application has authentication, authorization, APIs, background jobs, file uploads, secrets, logs, tenant isolation, and dependencies to inspect.

My first ordinary defensive review hit the safety boundary immediately, and a second tightly constrained prompt did the same.

There is also an evaluation problem. If I select Fable 5 and Opus 4.8 answers, I am no longer testing Fable 5. I need to know whether the fallback was partial or complete and why the original request was refused.

Engineering teams need to know which model produced the answer and why the requested model refused.

I want providers to expose:

- show which model produced the answer,
- expose the refusal category in the UI as well as the API,
- better separation between defensive review and exploit development,
- allow a constrained defensive review mode for legitimate code owners,
- an audit trail for the safety decision.

The safeguards have a legitimate purpose. Unrestricted access to strong cyber reasoning creates risk. The defensive workflow still needs work.

If a SaaS team cannot review its own application after explicitly banning exploit guidance, the tool is hard to trust for security work.

I want a constrained defensive mode with an auditable safety boundary. At minimum, the product should expose the refusal reason and the model that produced the fallback answer.

## Sources

- [Introducing Claude Fable 5 and Claude Mythos 5](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5)
- [Refusals and fallback](https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback)
- [Prompting Claude Fable 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5)
- [Project Glasswing](https://www.anthropic.com/glasswing)
