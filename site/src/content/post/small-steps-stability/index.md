---
title: "Improve System Stability With Small Steps"
publishDate: "August 17, 2023"
description: "Sleep easier at night with more smaller changes. Many more. More than you think. And small. Smaller than you think."
tags: ["CI"]
coverImage:
  src: "./header.jpg"
  alt: "Text in a book that reads \"very tiny\" enlarged by a magnifying glass."
---
---
Stable systems fail less frequently, with less severity, and are easier to fix when they do fail. Most production failures are caused by changes. Making more, smaller, changes to production is the best way to improve stability.

## How Small

Before describing how small changes improve stability, I want to talk about what I mean when I say small,
because I don't think people often know that I mean _very small_ when I talk about this. When I'm working
on a system I want to merge and deploy, ideally to production, every 10 minutes or so.

Deploying to production 6 times an hour isn't feasible for every developer on every team, and certainly
I don't even commit at that pace literally all of the time, but small means small. The smaller the better.

I want you to stop asking **"should this be any smaller?"** and start asking **"how can I make this smaller?"**.

## Reduce Frequency of Failure

When you're working small and pushing frequently there's a funny consequence. Your change failure rate goes down
simply because you're making more changes. Pump up the denominator to improve your failure rate! This is a joke, 
but it is a real consequence of more frequent changes, your failure rate will go down simply because of the math.

But working small will reduce your overall frequency of failure, too, because working small and deploying frequently
requires you to plan your work in **stable steps**. The small changes you make are so small that you can
reason about their likely effects simply.

Testing step by step reduces the frequency of failure, too. Aided by a good [Test Automation Strategy](https://synapsestudios.com/learn/test-automation-strategy/) you can be sure that each cumulative step is safe as you go.

## Reduce Severity Of Failure

If you push a single large change, or worse, many large changes to production simultaneously the likelihood that
any failure will be more critical is higher. Larger changes have a larger surface area for failure. There
are simply more moving parts.

When you introduce multiple defects into production all at once you can't predict how they'll interact, either.
Unfortunately, it's possible that when it comes to failure the whole may be greater than the sum of the parts.

## Easier to Fix

Remember, [Hard Means Expensive](/posts/hard-is-expensive/). When they fail, small changes produce failures that
are easier to resolve. Easier means faster. 

When a production failure occurs, more often than not, the hard part is just figuring out _what broke_. If the
last change was tiny, lets say 10 lines of code, then answering "what broke?" is often times trivial. You can 
read a diff that small and, more likely than not, immediately find your culprit and get to work fixing it. And
since the blast radius is so small the fix will probably be simple and fast.

Smaller changes are also easier to roll back, or better yet revert and fix forward, than large changes. Rolling
back large changes is pretty dangerous in stateful systems. The larger your change the more likely it is that
a rollback will cause some kind of serious data inconsistency problems. When your changes are tiny you can
easily reason about the risks associated with a revert.

## Work Small

Working smaller is one of the highest leverage changes teams can make. I find a lot of skepticism on this for
some reason, and a lot of people assure me that "no this change needed to be this big" and it's just so rarely true.

Work smaller to improve system stability!

---
Header photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/photos/eIlJ2CtQezU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  