---
layout: post
title: "Codex frustrations and the tool invocation problem"
date: 2026-05-27
categories: ai-dev
tags: [boundrift]
---

Today was mostly friction, which is useful in its own way.

## Trying Codex for PR review

The plan was to use ChatGPT's Codex to get a second set of eyes on a pull request — the cross-agent review idea I'd been thinking about since the manual ferrying session earlier this week. In practice it was a nightmare to get working. I had to authenticate to GitHub, configure which projects I wanted it to work with, and then when I actually tried to invoke something against GitHub, it tried to use the GitHub CLI instead of the direct connection I'd already configured. It didn't work, and the setup overhead made the whole thing feel like it cost more than it was worth.

## Agents and tool confusion

That experience connected to something I've been noticing more broadly across all the agents I'm using: they get confused about how to invoke tools. Whether it's something that needs to run locally, a script, or an MCP connection, the choice between them often feels arbitrary. Claude ran into the same thing when I tried to use a plugin from the marketplace — it spent five attempts trying to invoke it through Python in both bash and PowerShell before eventually finding the path where it was actually installed. Codex did the equivalent with the GitHub CLI.

I don't know yet whether this is a fundamental limitation of how these agents reason about their environment, a configuration problem on my end, or something in between. But it's a consistent enough pattern across different tools that I want to understand it better rather than just working around it each time.

## What I was actually building

While the tooling was fighting me, the actual work on the game analytics project went surprisingly well. It seems like I can take an entire analytics feature set and get it to a reasonable state in close to one shot with Claude. That's impressive and also a little unsettling — the barrier to replicating something like this keeps dropping, which makes it harder to feel like any particular implementation has much differentiation. More is not always better, but the speed is real.

## What's next

I want to find a cleaner workflow for the cross-agent review idea before abandoning it. The value of having one model critique another's work is still there in theory — I just need a setup where the overhead doesn't eat the benefit. That's what I'm going to try to work out tomorrow.
