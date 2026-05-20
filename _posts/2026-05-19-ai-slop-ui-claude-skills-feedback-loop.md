---
layout: post
title: "AI slop UI, Claude skills, and finding the right feedback loop"
date: 2026-05-19
categories: ai-dev
---

A short but productive day. I made a few small bug fixes on the PWA through the mobile workflow, and then switched focus to the frontend quality problem I'd been thinking about since yesterday.

## Claude Code in the terminal

One small change worth noting: I installed Claude Code directly in the terminal today instead of using the Windows Claude application I'd been running on desktop. No dramatic difference yet, but it feels like a more natural fit for the kind of work I'm doing and I expect it'll matter more as the projects get more complex.

## Experimenting with frontend skills

The UI problem I identified yesterday — that generated frontends have a recognizable, assembled-not-designed quality — sent me toward Claude's frontend skills today. The results were interesting. Using a skill oriented toward frontend UI does noticeably shift the output away from the worst of the AI slop aesthetic, but not entirely out of it. There's a more refined version of the same problem: the output is better, but it still has a discernible pattern to it once you know what you're looking at. It's a different flavor of the same tell.

That's not a reason to abandon the approach, but it does tell me that skills alone aren't going to solve this. I'm going to look at whether there are skills more specifically tailored to PWAs, since the generic frontend output might just not be the right starting point for what I'm building.

## Desktop vs. mobile development

I'm also recalibrating my thinking on the mobile-only workflow. There's genuine value in being able to iterate from my phone — I proved that over the last couple of days — but the feedback loop is slower than working on a machine. For the kind of tight iteration that UI work requires, desktop is faster. I think the right model is desktop as the primary environment with mobile as a real option when I'm away from a desk, rather than trying to make mobile the default.

## What's next

Two things I want to dig into: finding a skill or scaffolding approach that produces better PWA output specifically, and understanding what testing and verification automation looks like when agents are doing most of the building. That second one feels important — if I'm not writing the code myself, I need some other mechanism to catch problems before they land, and I haven't thought carefully enough about what that looks like yet.
