---
layout: post
title: "Building with AI: Day One"
date: 2026-05-16
categories: ai-dev
---

This site exists because I want somewhere to think out loud about what I'm learning — specifically, about building software with AI agents. Today was the first real session and it was a good reminder of why critical thinking matters even when (especially when) you're delegating to an AI.

## What I actually built today

The goal was simple: replace a static biography HTML page with a Jekyll blog hosted on GitHub Pages. Jekyll is GitHub's native static site generator, which means you push Markdown files and GitHub builds and serves them automatically — no CI/CD pipeline to manage. Good fit.

The agent scaffolded the whole thing: `_config.yml`, a Gemfile, an about page, a first post, `.gitignore` updates. It worked. But then the home page wasn't rendering while `/about` was. That gap — one page working, one not — is actually useful signal. It told me the build itself was succeeding and Pages was serving from the right branch. The problem was specific to the `home` layout.

Two things were wrong:

**1. `minima: skin: dark` in `_config.yml`**
The agent added this for dark mode styling. Reasonable intent, but GitHub Pages ships Minima 2.5.1. The `skin` feature was introduced in Minima 3.x. On 2.5.1 it's silently ignored — no build error, just does nothing. Without understanding that GitHub Pages pins specific gem versions, this looks like it should work.

**2. Empty `index.md` body**
Minima's `home` layout renders a post list if there are posts, and your page content otherwise. With no posts and no body text, the page renders just the site header and footer with nothing between — visually indistinguishable from a loading failure.

The fix was straightforward once diagnosed: remove the incompatible skin config, add a line of placeholder text. But the point is that I caught it by reasoning about *why* one page worked and the other didn't, not by blindly rerunning until something changed.

That's the habit I want to build: understand each commit before it lands.

## Things I want to explore

**Multi-session workflows.** I'm also spinning up a data analysis project on Riftbound (a card game) in parallel. That project — pulling card data, doing matchup analysis, maybe some ML — is a better candidate for multi-session coding than this blog. I want to figure out how to hand off context between sessions without losing state, and how to structure a project so parallel agents don't step on each other.

**Tools, skills, and AI customization.** I'm using Claude Code mostly out of the box right now. There are custom skills, hooks, MCP servers, and config options I haven't touched. My sense is that the defaults are good enough to start, but as I build more complex projects the right configurations will compound. Worth spending a session just mapping the options.

**Token usage optimization.** As sessions multiply, so does cost. I haven't felt this yet but I will. The obvious levers: keep context tight (don't rehash history the model doesn't need), use plan mode to front-load reasoning before coding, and structure projects so agents work on well-isolated pieces. I should track usage across projects and see where it's actually going before optimizing prematurely.

**Mobile workflows.** The end goal here is being able to prompt an agent from my phone, have it build and test, and review results — no laptop in the loop. I don't know what that looks like yet in practice: which parts of the review loop require a real screen, whether there are mobile-friendly ways to inspect diffs or check CI. Something to work toward.

## The meta-point

The thing I keep coming back to: AI agents are fast but they're not infallible, and the failure modes are often subtle. The Minima version mismatch is a good example — the agent knew Jekyll, knew Minima, but didn't have perfect knowledge of which version GitHub Pages pins. That's a real constraint that lived in the gap between what the agent knows generally and what's true in this specific environment.

The skill isn't prompting. It's knowing enough to recognize when the output is wrong, and why.
