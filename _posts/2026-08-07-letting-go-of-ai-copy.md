---
layout: post
title: "Letting go of AI copy"
date: 2026-08-07
categories: ai-dev
---

After many bad experiences with AI copy, I'm going to return to hand writing these both for my own learning and perhaps as an acknowledgement that I don't want to be reading AI output, even though the blog posts were my own writing often TTS formatted into markdown. 
One of the worst experiences was when posting on Reddit with an admittedly half-assed marketing post for BoundRift where the first comment was anti AI-slop and the post just bombed from there. The hivemind sentiment against AI usage is strong, compounded with the dogpiling culture of reddit made for a post that was quickly removed.

## Workflow Developments
I've been experimenting with a lot of different tooling in my agentic workflows - most recently using cmux for remote sessions on an always on laptop using the Claude Code app on my phone to interact. It's been good until my laptop shuts off or I need to restart. I think I need to do some sandboxing so processes don't sprawl forcing a machine restart, not sure how to handle that right now.
In terms of actual agents, I've been trying out pstack from Lauren at Cursor and it has noticeably sped up output, at the cost of increased context usage. 

## New Projects
I started a new project to experiment with pstack, a climbing training application where I'm figuring out a new form of development. The app itself is hosted on railway with the same github hooks to auto deploy except right now it only has my own data for climbing training.
The goal with this application is less so to make an interface (although I do want a usable interface for my own climbing training) but rather to fine tune an algorithm to prescribe my own climbing training over time. I seeded the deterministic non-LLM model for climbing training prescription with widely available climbing and training periodization literature and am now going through multiple human in the loop turns to figure out what kind of input, adjustments, and suggestions make sense to develop a coherent climbing training program.
Much of this is based off of Runna who apparently is using a similar approach of starting with hand crafted base plans and using load management and feedback calculations to adjust to individual user's real training.
I also started making a plugin for cmux to track my own token usage and organization, although it's not fully developed yet. I think the future projects in the next section will shape what features I actually want in this plugin moving forward.

## What's Next
There is a lot I haven't looked at - I acknowledge I have been living mostly in Claude Code and warping most of my workflows to conform to the Claude CLI, but there is so much around harnesses and evals that I want to explore. Alongside the harnesses with the release of things like Kimi K3 and DeepSeek's new models, there seem to be high performance cost effective models that can be used on an API basis with similar quality (I want to test that myself).
On that note, I want to look more into request routing, setting up my own access to these other models, and evaluating the comparative outputs between the different models. 
Software factories and long horizon coding tasks are things I also want to look into - will report back if I ever get to these.

Cheers - Louis
