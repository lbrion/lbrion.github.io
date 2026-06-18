---
layout: post
title: "Rift Stats becomes a real tool: live event querying and what that means"
date: 2026-05-29
categories: ai-dev
tags: [boundrift]
---

A productive couple of days, and ones where the project shifted in a direction I didn't fully anticipate going in.

## Terminal over desktop, and why it matters

I've settled on Claude Code in the terminal as my preferred way to work with LLM coding tools. The desktop app gives you high-level summaries — lines changed, files touched — but not much else. In the terminal I can run a split layout: Claude on one side, the editor and a local instance on the other, with approvals and output visible at the same time. That kind of context is hard to replicate in a GUI, and it makes a real difference in how much I actually understand what's happening versus just watching it happen.

I also swapped to Opus today from Sonnet. I haven't been hitting my usage caps, so the tradeoff toward quality over speed made sense to try. It felt noticeably different — more thorough in the discovery and architecture work especially.

## Data ingestion, mishaps, and what the data revealed

A lot of the past two days went into the data ingestion pipeline for Rift Stats. One of the more useful things Claude did here was help explore the endpoints themselves — inferring what URLs and parameters were available based on a small sample of responses, then building out scripts to canvas the API more broadly. That kind of exploratory reverse-engineering is tedious to do by hand and Claude handled it well.

It did make one meaningful mistake: it scoped the event filter too narrowly based on the initial subset of data I'd given it. It was filtering for registration open and registration closed events, and missing completed ones entirely — which is exactly the data I actually wanted. The initial test scrape looked plausible but was missing most of the relevant match history. Once I caught it and corrected the filter, the ingestion ran properly.

There was also a fair amount of malformed data in the raw responses, which Claude helped identify and work around. Beyond fixing errors, it also acted as a kind of informal DevOps agent — reporting on network failures during ingestion runs and helping figure out recovery paths when requests failed partway through. That was useful in a way I hadn't anticipated going in.

One side effect of pulling the full event history is that I ended up with a lot of data I didn't set out to analyze — things like event volume over time, day-of-week patterns, how activity correlates with release cycles and prerelease events. None of it was the goal, but it painted an interesting picture of how the game has grown and where the player base concentrates.

There are rate limit constraints I'm still working through, and my plan is to run continued ingestion over the weekend through remote sessions while I'm away from the computer.

## From coding tool to query interface

The more interesting thing that happened today is that the Claude Code session I've been using to build Rift Stats quietly became something else: a natural language interface into the data itself. Once the ingestion was far enough along, I started asking questions in plain language about the player base, match patterns, archetype distributions — and getting useful answers back. The data has real limits (matches are tracked at the legend level, not the deck level, so there's no card-level signal), but there's more in the archetype and player pattern data than I initially expected.

What I keep thinking about is that this kind of capability probably puts real pressure on tools like Power BI or Tableau. The barrier to querying a large dataset with natural language is much lower than building a dashboard, and the flexibility is higher. The catch is that you still need to know what questions to ask and whether the data you have can actually answer them. The LLM can't read your mind, and it can't tell you what insights matter — that's still entirely on the operator. But as a tool for getting from a question to an answer faster, it's genuinely useful.

## Live event tracking, and what it could mean competitively

The part I didn't plan for: I'm at a live Riftbound event today, and I realized I could use this in real time. The data structure I'm pulling from tags events as completed, in progress, registration open, and so on — and in-progress events update with live data as matches are reported. That means I can query the current field composition, see what legends are being played, track specific players across rounds, and understand what matchups I'm likely to face going into later rounds.

In a two-thousand-person open field that's probably not decisive. But going into a top sixty-four where you know the field composition, you can make informed decisions about what matchups you actually need to prepare for mentally — and which ones you can stop thinking about. I'd imagine a lot of serious players are already doing some version of this manually. Having it queryable in natural language just removes the friction.

Whether I publish this as a feature for other players is something I'm thinking about. There's a question of whether it's the kind of edge that should be broadly available or whether surfacing it changes the dynamic in ways that aren't entirely good. For now it's a proof of concept, and a useful one.

## Efficiency work ahead

The system works locally and the data is there, but there's a meaningful amount of optimization still to do before this is something I'd want to host properly. Caching, request limiting, and pagination are the obvious levers. Beyond that, there's derivative data I can generate in batch rather than computing on demand — ELO ratings being the main example. Recalculating a player's ELO every time their profile is rendered doesn't make sense; a daily batch update would be far cheaper and fast enough for this use case. I want to understand what the actual hosting costs look like before optimizing prematurely, but it's worth designing for it now rather than retrofitting later.
