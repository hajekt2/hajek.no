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
description: "I tried using Claude Fable 5 for a defensive security review of our SaaS application. Even with safe framing, it refused and fell back to Opus 4.8."
---

I have been testing Anthropic's new Claude Fable 5 model and wanted to use it for something very practical: a defensive security review of our SaaS application, DocEngine.

Nothing exotic. No malware. No exploit generation. No "show me how to break into this system." Just a normal security review from the point of view of a software team trying to find risks before someone else does.

My first attempts triggered Fable 5's safety measures and the session fell back to Claude Opus 4.8.

The message was:

> Fable 5's safety measures flagged this message. They may flag safe, normal content as well. These measures let us bring Mythos-level capability in other areas sooner, and we're working to refine them. Switched to Opus 4.8.

Fair enough, I thought. Maybe my prompt was too close to offensive security language.

So I tried again, this time with a much safer framing:

> Perform a defensive security review of this SaaS application. Do not provide exploit code, weaponized payloads, persistence mechanisms, bypass instructions, or step-by-step attack execution. Focus on risk identification, secure design, OWASP-style findings, severity, affected components, and remediation guidance.

And it still triggered the failsafe.

![Claude Fable 5 safety fallback message](/assets/img/2026/fable-5-safety-fallback-opus-48.png)

According to Anthropic's own documentation, Claude Fable 5 includes additional safety classifiers. One of the categories is cyber. Anthropic also explicitly says that benign cybersecurity work can trigger these safeguards. When that happens, the request is not treated as a normal error. It is a refusal, and the recommended fallback is another Claude model, such as Opus 4.8.

The fallback appears to be the product behaving as documented rather than a random glitch.

I understand why. The same model capability that helps a developer find insecure authorization logic, weak tenant isolation, broken session handling, or dangerous file-processing paths could also help an attacker. The line between "defensive review" and "offensive enablement" is not always obvious from a prompt, especially when the task involves a real codebase and real security reasoning.

But from a software team's point of view, this creates an awkward problem.

Security review is exactly where frontier models could be extremely useful. Modern SaaS applications are full of subtle risks: authentication flows, authorization checks, API boundaries, background jobs, document processing, file uploads, secrets handling, logging, tenant separation, dependency issues. A strong model with long context and good code understanding should be a very good reviewer.

Yet the more capable the model becomes at cyber reasoning, the more likely it is to be restricted from doing the security work defenders actually need.

My first ordinary defensive review hit that boundary immediately.

There is also a product evaluation problem here. If I select Fable 5 but the answer comes from Opus 4.8, what am I evaluating? Did Fable 5 fail? Did Opus solve it? Was the fallback partial or complete? Was the original prompt refused because of a specific security concern, or just because the classifier saw enough cyber-related language?

For engineering and security workflows, the team needs to know which model produced the answer and why the requested model refused.

I would like AI providers to make this more transparent:

- show clearly which model actually produced the answer,
- expose the refusal category in the UI as well as the API,
- distinguish defensive security review from exploit development more precisely,
- allow a constrained defensive review mode for legitimate code owners,
- keep the safety boundary, but make the workflow auditable.

These safeguards have a legitimate purpose. If models like Fable 5 or Mythos-level systems can find and reason about serious vulnerabilities, unrestricted access would create obvious risks. The current defensive workflow still needs work.

If a SaaS team cannot ask for a defensive review of its own application, even with explicit instructions not to generate exploit code, then we have a usability problem. And probably a trust problem too.

Developers need a constrained defensive mode with an auditable safety boundary. Until providers expose the refusal reason and the model that produced the fallback answer, teams cannot evaluate these tools reliably for security work.

## Sources

- [Introducing Claude Fable 5 and Claude Mythos 5](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5)
- [Refusals and fallback](https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback)
- [Prompting Claude Fable 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5)
- [Project Glasswing](https://www.anthropic.com/glasswing)
