---
layout: post
title: "Cross-agent collaboration and unsupervised loops"
date: 2026-05-21
categories: ai-dev
---

Today was mostly experimental — less about shipping something and more about understanding what different workflows feel like in practice.

## Applying a UI skill to an older project

I ran the ui-ux-pro-max skill against an older project that had accumulated a lot of UI elements. A single pass did more than I expected — things are noticeably more accessible and the layout is cleaner. It's not perfect, but for a one-shot it held up well. Good to know that skill has some retroactive value on existing projects, not just greenfield ones.

## Manual cross-agent collaboration

The bulk of the day went into something I've been curious about: using multiple agents together on the same problem. I was working on a spec and routed it through Claude, Cursor, and ChatGPT in sequence — each one reviewing and building on the output of the last, with me manually ferrying the results between them. The idea is that each model has different tendencies and blind spots, so having one critique the work of another might surface things a single model would miss or confidently gloss over.

It's a reasonable theory and the output was interesting, but doing it manually is slow. I've seen implementations where this kind of loop is automated, and I understand why — the overhead of being the one shuttling context between agents adds up quickly and starts to feel like it's defeating the purpose. The next question is what automated orchestration actually looks like in practice, and whether the token cost is manageable.

## Token spend, or the lack of it

I expected usage to be a constraint by now, but I'm nowhere near it. I'm not scratching the limits on any of my subscriptions across multiple providers. That's surprising, and it reframes the question a bit — I've been thinking about token spend as a ceiling to stay under, but in practice the bottleneck seems to be elsewhere, probably in how much I can actually review and direct in a session rather than what the models can process.

That said, I'm still cautious about automated loops. An unsupervised agent running without checkpoints can spend tokens in ways that are hard to audit after the fact, and more importantly it can make decisions I haven't reviewed. Before I set up anything that runs without me in the loop, I want to understand what guardrails exist and where the failure modes are. That's the research I want to do next.
