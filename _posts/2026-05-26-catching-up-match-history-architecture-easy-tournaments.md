---
layout: post
title: "Catching up: match history architecture and finding easy tournaments"
date: 2026-05-26
categories: ai-dev
tags: [boundrift]
---

A few days lighter than usual — some illness and weekend commitments — but not completely idle. I was able to push a few features forward on projects over the weekend without much active intervention, which is its own kind of useful data point about how far along these projects are.

## Reaching parity with an existing Riftbound fan site

Today's main focus was doing a proper feature analysis against another Riftbound fan site to understand what parity actually looks like. It's a useful exercise because it forces the question of what data you actually need versus what you're currently pulling, and the answer here is: more than I have.

To replicate the feature set I'm looking at, I'll need the full history of match data stored locally. The alternative — making a large number of live requests — isn't viable for a hobbyist project where I'm watching costs. That makes this the first time I've had to think seriously about data architecture for this project: how to store it, how to keep it updated, and how to do both cheaply. I don't have those answers yet, but framing it as an architecture problem rather than a scraping problem feels like the right starting point.

## Finding easy tournaments

One feature I did ship today: a way to identify "easy" Riftbound competitions by looking at a store's history of prior events and predicting how competitive the next one is likely to be based on past attendance. Low attendance historically tends to mean a smaller, less competitive field.

It's low signal by design — stores can only run these tournaments once per quarter, so there isn't much data per location to work with. But some signal is better than none, and it's a feature that actually changes how you'd decide which events to travel to. The longer-term version of this couples tournament difficulty with individual ELO ratings calculated from full match history, which would give a much sharper picture. That's further out and depends on getting the match data architecture right first.

## Still frustrated with Codex

I haven't gone back to Codex since the rough session earlier in the week. The tool invocation problems made it more hindrance than help, and I haven't had a good reason to fight through the setup again. I'm planning to try building some real flows with it tomorrow and see if a more structured approach changes the experience.
