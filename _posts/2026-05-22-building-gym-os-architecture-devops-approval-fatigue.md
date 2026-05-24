---
layout: post
title: "Building Gym OS: real architecture, real DevOps, real approval fatigue"
date: 2026-05-22
categories: ai-dev
---

Today was the first day that felt less like tinkering and more like building something with actual scope. I've been calling it Gym OS — software for managing a gym, a domain I know well enough to have real opinions about. I had a plan drafted from the night before and spent the day executing on it.

## A more complex Railway deployment

The Railway setup today was meaningfully more involved than anything I'd done before — two separate frontends, one for staff and one for members, both connected to a shared PostgreSQL database. Getting that architecture deployed meant dealing with DevOps questions that go beyond what Claude Code handles in the terminal: environment configuration, service relationships, how the pieces talk to each other across Railway's infrastructure. It's the kind of work that doesn't show up cleanly in a chat session but takes real time to get right.

## Approval fatigue on mobile

The mobile workflow hit a wall today, and I think I understand why. The remote Claude Code session generated a lot of chained outputs — test runs in particular — and each one required an approval. In practice that meant I was spending most of my time tapping through confirmations rather than actually reviewing anything meaningful. It felt like clicking next on an incremental game.

The frustrating part is that a lot of those approvals were for test runs that could have just written output to a file for me to review later, rather than piping it somewhere that triggers another permission prompt. I got through it, but it's a workflow problem I want to solve before the next session rather than just tolerate.

## Tests I haven't verified yet

The agent wrote a set of tests and health checks as part of the build, which I need to actually read. For all I know some of them are just returning true regardless of the state of the service — that's the kind of thing that looks like coverage and isn't. Verifying those by hand is on the list, and it's a good example of why I can't just treat agent output as correct because it ran without errors. The code compiles and the tests pass, but that's not the same as the tests being meaningful.

## Watching software get built fast

Coming from a background of writing code by hand, the pace is genuinely strange to witness. The architecture I put together today — separate frontends, a real database, health checks, unit tests — would have taken days to weeks depending on how carefully it was being built. Watching an agent scaffold that in a session, even accounting for the approval friction and the verification work still ahead, is a different experience than I expected.

It doesn't make the verification less important. If anything it makes it more important, because the volume of generated code outpaces what I can carefully read in the same session. But it does change what's possible as a solo developer, and I keep coming back to the same thought: this is a tool worth learning well, because the gap between someone who uses it deliberately and someone who doesn't is only going to grow.
