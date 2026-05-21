---
layout: post
title: "Remote Claude sessions, Railway hiccups, and a new project spec"
date: 2026-05-20
categories: ai-dev
---

Today had a mix of progress and friction, which is probably the most realistic description of how most of these sessions go.

## Claude Code remote sessions

The thing I'm most happy about today: I got Claude Code remote sessions working. I started Claude Code in the terminal on my PC and connected it to the mobile app, and from there I was able to invoke skills that I couldn't access on mobile previously. That closes a gap I'd been bumping into — it means anything I can configure on my PC, including marketplace plugins and custom skills, is now available when I'm working from my phone. That's a meaningful upgrade to the mobile workflow.

I used it to kick off a UI redesign on the PWA. The terminal output says the project still loads, but since I wasn't at my computer I couldn't verify it visually — which brings me to the other thing that happened today.

## Railway pains

Railway is having some availability issues and has paused builds and deployments on the free plan. I checked their status page and they're running at around 99.6-99.7% uptime across services, which sounds good until you're the one waiting on a build. I'm not sure yet whether my currently deployed version is still serving fine or just cached on my end, but either way the new version isn't getting out.

It's a temporary roadblock and not a crisis — the code lives in GitHub so nothing is lost — but it's a reminder that the deployment platform is a dependency I don't control. I want to look at alternatives or at least understand what instant or near-instant public deployment options exist, both as a backup and because the feedback loop matters when you're iterating on UI from a phone. This seems like ominous foreshadowing of the state of software as a whole, as anecdotally many people are saying services across the board are just lowering in quality.

## Small wins on the blog

In between the bigger things I did a bit of exploration on what Jekyll can do with GitHub Pages and added an automated sitemap. It's a small thing, and I'm not actively trying to get this site discovered right now, but it's the kind of half-percent optimization that's easy to miss if you don't know to look for it. That's something I'm finding genuinely useful about having a language model available for this kind of work — where I used to go to Stack Overflow for a specific technical answer, I can now have a broader conversation about options and tradeoffs, and surface improvements I wouldn't have thought to ask about. The sitemap is a good example: I didn't set out to add one, but it came up naturally while exploring what was possible.

## A new project spec

I also started scoping a new project today, though I'm conscious of the risk of accumulating too many half-finished things. This one feels different — it's in an area where I have real subject matter expertise, and there's a chance it produces something with actual practical value rather than just being an exercise.

I had Claude generate a spec from requirements I laid out, and it's a reasonable starting point. Not everything in it reflects how I'd design it, and I'm not sure yet whether iterating over the spec with the model will sharpen it or just produce confident-sounding variations of the same decisions. I might need to mark it up manually and use that as the input for a second pass. Worth figuring out what that revision loop looks like before I start building from it.
