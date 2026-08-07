---
layout: post
title: "Cloudflare, card galleries, and 1000 DAU"
date: 2026-06-21
categories: ai-dev
---

Two big days worth capturing together.

## Cloudflare CDN and R2 for image serving

The next phase of BoundRift is moving toward affiliate monetization through card galleries and deck lists linking out to TCGPlayer. To do that I needed a way to serve card images reliably and cheaply, and Cloudflare's R2 buckets were the right fit - object storage with built-in CDN caching, and a free tier I don't expect to outgrow any time soon. If I do, it would mean enough users that the value is clearly there.

With image serving sorted I built out the card gallery. Deck lists are next, along with ways to share and store them both on the site and externally to social media. That sharing surface feels important for growth - people posting their decks and linking back is a distribution channel that doesn't require me to do anything.

Alongside the new features I've been doing constant cleanup passes. A few things I tackled: synchronous page rendering that was slowing things down, which I converted to get a roughly 50% improvement in event load times; just-in-time event hydration to handle events that get created in the system right before they happen rather than weeks out; match tracking UI improvements; and a general reshuffling of features into an order that makes more sense. Moving fast creates debt and I'm trying to pay it down in parallel rather than letting it accumulate.

Seeing random visitors show up organically has been gratifying. Finding value in your own tool is one thing - seeing strangers use it is another.

## 1000 DAU

BoundRift crossed 1000 daily active users today, driven by a large regional tournament. Reddit and SEO have been doing quiet work and it showed.

The caveat I keep in mind is that ecosystem projects for games are inherently fragile - the game has to stay healthy, the community has to stay engaged, and a lot of things outside my control have to keep going right. So I'm not treating this as a signal to change the nature of the project. It's still a hobby project and keeping that framing feels important.

What it does feel like is product market fit - people finding something useful and coming back for it. There are incumbents in this space and I'm watching them try to adapt, but the refinement I've put into BoundRift is real and I think feature completeness will do more work than aggressive marketing. The constraint I'm watching is not stretching too thin. The product surface is already large and I'd rather do fewer things well than lose the quality that's brought people here.

The part I keep coming back to is what this feels like personally. I've spent six years in product and executive roles, and somewhere in that time I stopped feeling like an engineer. Working on BoundRift has brought that back - the technical problem solving, the full stack ownership, learning DevOps and cost optimization not because someone assigned it but because I need it. Optimizing the software to run faster and cheaper while watching real users benefit from it is satisfying in a way that's different from anything I've done in a leadership role.

Part of what makes it feel different is the absence of VC expectations. There's no pressure to grow at a specific rate or justify the roadmap to anyone. I'm building things I'm excited about for users who are excited to use them, and that feedback loop is its own reward.
