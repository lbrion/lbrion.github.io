---
layout: post
title: "Shipping from my phone with Railway and PWAs"
date: 2026-05-18
categories: ai-dev
---

Today started with a question I've been putting off: what does DevOps actually look like for a solo developer with limited resources? I wanted to understand the reasoning behind the decisions Claude made in the initial Riftbound stats frontend, think through continuous deployment, and figure out how to make development and testing work from a phone. By the end of the day I had a working answer to at least part of that.

## Getting a mobile-first workflow off the ground

The setup I landed on is a progressive web app deployed through Railway, which is free tier for now. The workflow is simple: Railway watches a GitHub repository and rebuilds whenever there's new activity. Push a commit, get a deployment. The app surfaces through a URL I can hit from my phone, which means the whole loop — write code, push, test — can happen without sitting at a desk.

I got a "hello world" version of a personal app I wanted to build running today, which is deliberately minimal. There aren't many moving parts yet, and that's fine. What matters is that the pipeline works end to end from my phone, and it does. An added bonus was that I was able to use it in a real world scenario, and it functioned as I wanted it to, but definitely needs a lot of visual work.

## Iterating in the wild

Once the basic workflow was up, I took it out with me and did a few more iterations while out and about. It mostly worked, though I hit a caching issue where new deployments weren't loading — browsers holding onto old versions. Once I understood what was happening it was straightforward to fix, but it was a good reminder that deployment isn't just about getting the build to succeed.

The deployment cycle has a rhythm to it that reminds me of firmware engineering, where you'd kick off a compilation and data transfer and then wait. There's a similar cadence here: push, wait for Railway to build, check the result. It's not instant, but it creates natural pauses, and I can see how that rhythm might actually work in your favor when running multiple projects — you kick something off and switch to something else while it builds.

## What I want to improve next

The generated frontend works but it has rough edges, and a lot of them are the kind that are hard to pin down but immediately recognizable. There's a distinct aesthetic to LLM-generated web apps — just like there are tells in LLM-generated copywriting — and I want to understand it well enough to work against it deliberately. The code is functional but the UI doesn't feel designed, it feels assembled.

I want to spend time on this: looking at what's actually being generated, understanding where the scaffolding decisions are coming from, and figuring out whether the right fix is better prompting, different tooling, or just more hands-on iteration on the output. Getting something that feels like a real product rather than a proof of concept is the goal, and that's going to require more intentionality about the frontend layer than I've applied so far.
