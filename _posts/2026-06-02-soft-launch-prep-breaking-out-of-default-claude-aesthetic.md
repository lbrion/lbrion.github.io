---
layout: post
title: "Soft launch prep: breaking out of the default Claude aesthetic"
date: 2026-06-02
categories: ai-dev
---

A heads-down building day, mostly in the zone on features and data manipulation. Rift Stats is getting close to something I'd feel comfortable showing people.

## Getting ready for a soft launch

The plan is to show it to friends in the card game community first and get feedback before pushing it out more widely through social media. Before I do that I want to do a pass on caching and data transmission costs — it's a hobby project and I don't want to find out the hard way that casual usage from a small group is expensive at scale. That pass is more about being deliberate before it's in the wild than expecting anything to be broken.

## Breaking out of the default aesthetic

One thing I've been doing alongside the feature work is a UI pass with a specific goal: stop looking like a site that was built with ui-ux-pro-max and left at the defaults. The tell that bothers me most right now is the color scheme — the default purple shows up everywhere and it's become recognizable enough that I notice it on other sites. I want to put in the attention to detail that most generated sites skip past their initial prompt.

I don't think the goal is a completely bespoke design from scratch. A lot of sites use the same React component libraries and that's fine — the components aren't the problem. It's the absence of the small decisions that comes after: color choices, spacing adjustments, the things that signal someone actually looked at it and made a call. My impression is that most generated sites don't go back and make those calls, and I want Rift Stats to be different in that way even if the underlying components are familiar.

I've been using Claude's Brainstorming Preview feature to help with this, which turned out to be more useful than I expected. It was good for quickly validating directions I was already considering rather than generating options from nowhere — seeing a few visual interpretations side by side made it easier to make a decision and move on rather than staying abstract about it.
