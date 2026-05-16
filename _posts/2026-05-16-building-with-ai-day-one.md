---
layout: post
title: "Solo-building with AI"
date: 2026-05-16
categories: ai-dev
---

This site exists because I want somewhere to think out loud about what I'm learning. That'll be a mix of things — building software with AI agents, general observations about AI, and applying ideas from other places I've encountered them. I've used AI in a professional context before, but this is different: figuring out what's possible as a single person, with no team or existing codebase to lean on. Today was the first real session and it was a good reminder of why critical thinking matters even when (especially when) you're delegating to an AI.

## What I actually built today

The goal was simple: replace a static biography page with a Jekyll blog hosted on GitHub Pages, which handles building and serving the site natively from Markdown — no CI/CD pipeline to manage.

The agent set up the scaffolding and it mostly worked, but the home page wasn't rendering while `/about` was. That asymmetry was the useful signal — if the build had failed entirely, nothing would load. So the problem was specific to the home page, not the setup as a whole. Working from that, I was able to narrow it down to two small mismatches between what the agent generated and what this specific hosting environment actually supports, and fix them.

The fix was straightforward once diagnosed. But the point is that I caught it by reasoning about *why* one page worked and the other didn't, not by blindly rerunning until something changed.

That's the habit I want to build: understand each commit before it lands.

## How this post got written

The writing loop itself is part of what I'm experimenting with. Claude drafted the initial post based on notes I gave it, then I reviewed it line by line and called out what wasn't right — tone issues, unnecessary implementation detail, sections it added that I didn't ask for. That back-and-forth is already reasonably natural on a laptop, but the end goal is to do it from my phone: dictate what I want changed, have the agent apply it, and review the diff without needing to sit at a desk. That's still further out, but today's editing session was essentially a manual version of that loop, and it worked well enough to be worth refining.

## Things I want to explore

**Multi-session workflows.** I'm also spinning up a data analysis project on Riftbound (a card game) in parallel. That project — pulling card data, doing matchup analysis, maybe some ML — is a better candidate for multi-session coding than this blog. I want to figure out how to hand off context between sessions without losing state, and how to structure a project so parallel agents don't step on each other.

**Tools, skills, and AI customization.** I'm using Claude Code mostly out of the box right now. There are custom skills, hooks, MCP servers, and config options I haven't touched. My sense is that the defaults are good enough to start, but as I build more complex projects the right configurations will compound. Worth spending a session just mapping the options.

**Token usage optimization.** As sessions multiply, so does cost. I haven't felt this yet but I will. The obvious levers: keep context tight (don't rehash history the model doesn't need), use plan mode to front-load reasoning before coding, and structure projects so agents work on well-isolated pieces. I should track usage across projects and see where it's actually going before optimizing prematurely.

**Mobile workflows.** The end goal here is being able to prompt an agent from my phone, have it build and test, and review results — no laptop in the loop. I don't know what that looks like yet in practice: which parts of the review loop require a real screen, whether there are mobile-friendly ways to inspect diffs or check CI. Something to work toward.

