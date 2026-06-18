---
layout: post
title: "Deploying Rift Stats, a database refactor, and Fable's agentic loops"
date: 2026-06-11
categories: ai-dev
tags: [boundrift]
---

A few busy days covering more ground than usual — a proper Railway deployment, a database refactor, and a new model that's changing how I think about the work.

## Getting Rift Stats onto Railway

The deployment took longer than I expected, mostly because the project has grown more complex since the last time I set something up on Railway. More services, more environment configuration, more moving parts to get talking to each other. Nothing catastrophically wrong — just the accumulated surface area of a project that's been building for a few weeks. It's a good reminder that DevOps complexity scales with project complexity even when the deployment platform stays the same.

## Database refactor to cut costs

Railway charges for database storage by how much data you're holding per unit of time, which meant the schema I'd built up during development was costing more than it needed to. I did a refactor to strip out unused space — changing the schema and then running an in-place data transformation and migration locally to test it before touching the remote database. That kind of careful sequencing is something I want to keep doing: validate locally, then apply to production, rather than iterating directly on the live data.

## Fable and the agentic loop

The more interesting development from the past few days is that Claude's Mythos model is now publicly available as Fable, and I've been putting it through its paces. The /goal function is what's getting attention, and deservedly so — you give it a high-level objective and it iterates toward it, identifying feature gaps and improvements and just working through them without needing to be prompted at each step.

It's changing how the work feels. I'm less in the role of someone directing each action and more in the role of a manager or QA — setting direction, reviewing output, deciding what's good enough to keep. The quality coming out of the unsupervised loops has been passable so far, nothing I'd be embarrassed to ship after a review pass. The concern I've had throughout this whole project about not understanding my own code is still there in the background — I can imagine a scenario where something fails in a non-obvious way and tracing it through a large batch of agent-generated changes is genuinely hard. But that's a problem to manage, not a reason to avoid the tool.

What I keep coming back to is that if the agent is handling more of the implementation, then the things that remain distinctly valuable are product sense and judgment about what to build. Knowing what the right feature is, who it's for, and whether it's good enough — those feel harder to automate than the code itself.

I've also been staying up to burn through session token limits, which tells you something about how engaging this has been. I've struggled to hit my limits for most of this project, and Fable's agentic loops seem like a genuinely productive way to use that capacity with less active intervention required. The novelty of the late nights will probably wear off, but the workflow might stick.
