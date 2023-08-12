---
title: "Explaining CI With an Extreme Example"
publishDate: "August 12, 2023"
description: "Using an extreme example to explain the value of Continuous Integration."
tags: ["CI"]
coverImage:
  src: "./header.jpg"
  alt: "A pile of messy binders"
---

## Defining Continuous Integration

Unfortunatly, Continuous Integration has a fuzzy definition these days. For this piece I'm using the orignal defintion. Continuous Integration requires that:

1. Everyone contributing code merges into main at least once a day. Many more times than once is better.
1. Automated tests run before and after merge.
1. If automated tests fail, and the main build is broken, then the team must stop what they're doing and fix it.

> Thus in CI developers integrate all their work into trunk (also known as mainline or master) on a regular basis (at least daily). A set of automated tests is run both before and after the merge to validate that no regressions are introduced. If these automated tests fail, the team stops what they are doing and someone fixes the problem immediately.

_- Jez Humble, [continuousdelivery.com](https://continuousdelivery.com/foundations/continuous-integration/)_

## An Extreme Example - Moving to Monorepo

In the repo for this website I decided to shift to a monorepo directory strucutre. Now instead of having my entire [astro](https://astro.build/) front end sitting in the root of the project I [moved the entire thing into a subdirectory](https://github.com/spruce-bruce/aaronbruce.com/pull/21) called `site`. This isn't the kind of thing you do every day, but using this change as an example gives me an opportunity to demonstrate the value of merging many times a day.

Imagine you're on a team of 4 developers, each with multi-day old feature branches, and one of them wants to make a change like that. Integrating a change like this into main can be a headache. In the past when I was working on teams like this and I wanted to make a change like that I'd find some synchronization point, make the change, and then ask everybody to update their branches. The older those branches are, and the bigger the nature of their changes, the harder it will be to integrate this change.

CI aims to reduce this integration pain to as close to zero as possible. Let's imagine every developer on the team is merging to main every hour, and there are no branches at all other than what is on the machines the developers are using. Integrating this change into each developer's local branch will be trivial in comparison to what it would take to merge into an old feature branch.

## The Logical Extreme

CI isn't just good because it makes large, but infrequent, changes easier. The forces at play in this example are always present. Divergent code branches cost money to produce and maintain. The longer the diverge, and the bigger they are, the more costly they are. Even if your integrations don't frequently feel that painful, these costs are still accruing - even if they're small. The logical extreme is always work in a way that reduces these costs as close to zero as possible.

Having everybody's work merged to main continuously makes that work available to the team and helps to prevent duplicating effort, or implementing inconsistent solutions to similar problems, and we're able to check that all of the code being written works with all of the code that has already been written.

This isn't the only, or even best, take on why CI is good. Check out Dave Farley's [video on Continuous Integration](https://www.youtube.com/watch?v=lXQEi1O5IOI&ab_channel=ContinuousDelivery) for more!

___

Header photo by <a href="https://unsplash.com/@lg17?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lance Grandahl</a> on <a href="https://unsplash.com/photos/nShLC-WruxQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  