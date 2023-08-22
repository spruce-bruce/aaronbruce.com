---
title: "Engineering Leaders are Responsible for Quality"
publishDate: "August 21, 2023"
description: "Engineering leaders and developers are responsible for securing budget for quality improvements"
tags: ["management", "quality"]
---
---
"We can't fix it. They won't let us take the time to work on fixing things."

It's a tale as old as time. Engineers feel chained to their creaky, aging systems, and feel helpless to do anything about it. I have a great deal of sympathy for the devs fighting in the trenches, shaking their fists at the business that never listens.

However, at this point in my career I tend to look to engineering departments to solve this problem for themselves, and I've seen a lot of engineering departments failing to do so. Let me explain.

## "The Business" Doesn't Understand Tech

This is a chief complaint for engineers and engineering leaders. Non-technical stakeholders just don't get it, and they're the ones that control budgets and demand progress on visible features with unreasonable deadliens.

As a result, there's pressure from "the business" to only work on features. Engineering leaders approach CFOs with hat in hand and ask for permission to slow down a little bit and add automated testing, or improve the internal quality of some unsexy feature. "No", they say scroogily, and we engineers learn to live with it. Work around the quality issues as systems get worse and worse over time and calcify into uselessness.

The key insight that I like to share with other engineers is simply that _of course_ they don't understand. It's unreasonable for us to behave as if they _should_.

## Advocating for the Investment in Quality is Our Responsibility

[Deficiencies in internal quality](https://martinfowler.com/bliki/TechnicalDebt.html) build up over time and make it hard to change software systems. Engineers and engineering managers are intimately familiar with the pain that tech debt causes, and how much that pain increases over time as it's left unaddressed.

One of the primary responsibilities for engineering leaders is to advocate for the importance of quality in software systems, and reserving time to address quality, with your non-technical collaborators.

## Don't Ask For Permission

A cook doesn't ask for permission to keep their station clean during their shift, nor do they ask permission to clean their station up after their shift. Like all metaphors it's imperfect, but software developers should keep things clean by default. They should adopt the boyscout rule and leave code cleaner than how they found it.

One common problem I see is developers offering a low quality option to stakeholders. That conversation will go like this: 

"Well we can get that done in a day, but it'll force us to reuse this component we're trying to decomission. If we do it right it'll take longer."

Non-technical stakeholders do not, and can not, have context for a decision like that. They can't properly weigh the cost associated with the quick fix and, therefore, they will always underestimate it. Stop giving low quality options to people who can't responsibly make those decisions.

That doesn't mean there's no room to compromise in order to get things out sooner, but the engineers need to take responsibility for the eventual quality of the system. When it's urgent, here's one way you might talk about this same change:

"It'll take us a couple of days to complete that work, but we can have it functioning in production within the first day."

## For Everything Else, Reserve Time

Some quality improvements can't be made as part of daily feature work. There's only so much that the boyscout rule can do for you. For those bigger projects it's important to reserve time. Adding autoamted testing to a system that's only ever been tested manually isn't going to be done unless the engineering team can reserve time for it. However, engineering teams **should not** be expected to justify each improvement on a case by case basis to non-technical stakeholders. The rule of thumb is that teams should reserve about 20% of their time for doing quality improvement work like this.

If a company is not reserving time to pay down tech debt or to work on other quality improvements, I look to engineering leadership to make it happen. It can not, and will not, happen if you sit and wait for the non-technical folks to just do the right thing. Advocate for the time you need.

## Closing Thoughts

Software development is a complicated discipline, and engineers should be expected to take the time to build things well by default. In order to do that they need the support from engineering leadership organization wide.

It may not literally true that engineering management is always to blame when a compnay isn't investing in the health of its software, but I always look there first when I'm working with organizations that don't.