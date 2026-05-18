---
layout: post
title: "Data pipelines, a committed .env, and a new writing tool"
date: 2026-05-17
categories: ai-dev
---

I took yesterday off sick, so today was about getting back into it. Most of the session went into the Riftbound stats project — a card game data analysis side project I'm running in parallel with the blog — but I also set up something new for the writing workflow itself.

## The Riftbound project takes shape

The goal for today was getting real data flowing. That meant package installs and environment setup outside of Claude, which I've done before in other contexts but am figuring out the right rhythm for here. My hope is it's mostly a one-time cost per project rather than something I'm wrestling with every session.

Once the environment was sorted, I hit the classic mistake: a `.env` file committed to the repo. I caught it, removed it from git history, and moved on — a good reminder that the basics still apply even when you're working fast with an agent helping you.

From there things went well. Claude helped me identify public endpoints on the UVS website to pull the data I needed, which was the kind of research help that would have taken me much longer to do manually. I set up PostgreSQL locally and worked through a schema that fit the shape of the data, then ingested results from the first six Riftbound regional qualifiers. By the end of the session I had working visualizations across all of them: leaderboards, legend composition breakdowns, winrate matrices, and player tracking across events. It's a good chunk of data to work with.

## A tool for writing about the work

The other thing I set up today is what's producing this post. I started a dedicated Claude session that acts as a running journal — I drop notes in throughout the day, and at the end it synthesizes them into a blog post. The idea is to close the loop between building and writing without it feeling like a separate task.

Part of why I want to keep writing these posts, even if nobody reads them, is that I'm conscious of a pattern I keep hearing about: people leaning on AI so heavily that they can't understand or debug their own code without it. The writing is meant to be a counterweight to that — a way to force myself to actually understand what I'm doing, not just watch an agent do it. Whether it works that way in practice is something I'll find out over time.

## What's next

The Riftbound project is in a good state to expand — I want to pull in data from more events and then start on more interesting analysis. I'm also curious to try Claude's design tools for the visualization layer.

On the workflow side, I want to see if I can extend this writing tool to do something more useful at the end of each session: look at what I've been working on and suggest what I should learn about or explore next, rather than just summarizing what happened.
