---
layout: post
title: "Using Rift Stats live at a tournament, and where it fell short"
date: 2026-05-30
categories: ai-dev
tags: [boundrift]
---

Today was a tournament day, which meant less time building and more time actually using what I've built. That's a useful kind of test.

## Querying live data between rounds

I was able to use the natural language query interface throughout the day to pull insights from the live event data — things like which players had the easiest or hardest paths to their current record based on their opponents' standings. That kind of context isn't something you'd normally have access to mid-tournament without doing a lot of manual lookup, and having it queryable in plain language made it genuinely fast to get to.

It did influence real decisions. At one point I used it to think through whether to stay in the tournament or drop, weighing my remaining path against the field. It didn't end up mattering — a last-second disqualification retroactively changed a competitor's record and shifted things anyway — but the data was useful in the moment and I liked having it. That's a meaningful validation: the tool changed what I was thinking about, not just what I was curious about.

## Hitting session limits and an arithmetic error

The session limits hit quickly today, which makes sense — natural language data queries are token-heavy, especially when the model is doing a lot of interpretation and context-holding between questions. I burned through more than I expected just in the gaps between rounds.

More concerning was a calculation error I caught. Matches are best-of-three, so results get reported as game scores like 2-1 for a win. The model was treating that as a literal score addition — adding 2-1 to a running total — rather than counting it as a single match win. It's the kind of domain-specific encoding that's obvious once you know it and easy to get wrong if you don't. The underlying data is fine; it was the interpretation layer that slipped.

The fix is probably not a better model — it's better prompting or a structured query layer that handles the arithmetic before the model ever sees it. For the natural language interface to be reliable, I need to be more deliberate about what I'm asking the model to reason about versus what should just be computed directly.

## Rethinking model selection for different query types

The token burn today is pushing me to think more carefully about when to use Opus versus something lighter. For exploratory or interpretive queries, the quality difference probably justifies the cost. For simpler lookups — give me the current standings, how many rounds are left, what's this player's record — a less capable model or a lower effort setting would likely do just as well and cost a fraction. I want to experiment with that tomorrow and see if the quality actually holds for the simpler cases.

I've also been reading about older models getting quietly degraded after new ones release, which is something I want to keep an eye on as I build more reliance on specific model behavior. Whether that's real or perception drift is hard to tell from the outside, but it's worth being aware of as a variable.
