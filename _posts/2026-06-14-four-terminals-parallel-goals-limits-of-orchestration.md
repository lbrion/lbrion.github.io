---
layout: post
title: "Four terminals, parallel goals, and the limits of orchestration"
date: 2026-06-14
categories: ai-dev
---

The pace of development has accelerated noticeably since upgrading my Claude plan and leaning into Fable's /goal function. The past few days have been some of the most productive of this whole project, and also the ones where I've started to feel the edges of what I can actually manage.

## Parallel terminals and worktrees

I started with two terminals running in parallel and worked my way up to four, each one running its own goal loop on a different feature. The progress on the site has been significant - significant enough that I'm finding myself actually using it for things I'm curious about, which feels like a meaningful threshold to cross. When you start reaching for your own tool because it's useful rather than because you're testing it, something has clicked.

The mental overhead is real though. Context switching between four active terminals is genuinely difficult, and the /goal function helps but doesn't eliminate it. What I'm finding is that the ceiling isn't token limits or model capability - it's my ability to keep track of what each loop is doing and whether it's heading somewhere useful. I wish there were a way to pin the last user prompt to each terminal so I could glance at the state without having to scroll back and reconstruct it. Right now I'm carrying that context in my head, which is fine at three terminals and starts to strain at four.

## Getting better at context management

One thing that's helping is being more deliberate about the .claude configuration files. I've been using them to document how the agent should approach specific workflows - the UI validation process I've been refining, git workflows, patterns that have worked well enough to be worth repeating. Encoding those in configuration rather than re-explaining them each session is making the loops more consistent and reducing the amount of correction I have to do mid-goal. It's a small thing but it compounds.

I'm also thinking more carefully about approval load. The number of confirmation prompts across four terminals adds up, and I want to find a way to reduce it - either by prompting in directions that rely on pre-approved commands, or by finding some other mechanism. That's the next workflow problem to solve.

## Social media tooling and BoundRift

The project is getting a name: BoundRift, formerly Rift Stats. Alongside the core analytics features, I've been extending the Claude sessions to include social media and image generation tooling - the same pattern I used to pull live data updates, applied to producing shareable visual content from the data.

The image generation piece is interesting to me beyond just this project. I want it to eventually serve as a visual validation harness - a way to generate and inspect UI output across any project, not just BoundRift. That kind of reusable tooling is something I want to build toward rather than recreating from scratch each time.

## Development now versus then

Stepping back: the way I'm working now is completely different from how I worked in school. Not just faster - structurally different. The orchestration questions I'm dealing with, the context management problems, the tradeoffs between supervised and unsupervised loops - none of that existed in the same way. The skills that matter have shifted, and product sense and knowing what to build feels increasingly like the scarce resource. The agent can iterate on a goal; it still needs someone to decide what the goal should be and whether the result is good enough.
