---
title: "Hard Means Expensive"
publishDate: "August 16, 2023"
description: "Use this mental model of software systems to translate quality priorities into business priorities."
tags: ["management", "quality"]
---

---

Expensive == Slow == Difficult. These are all proxies for one another. Think of them as synonyms almost. Your system is expensive if it's difficult to work on. A feature is expensive if it takes a long time to build.

It might not feel like a major revelation, and it shouldn't be, but I advise new engineering leaders to adopt this model to help them communicate with their management, and I use this model when I speak with executives to explain investments in non-functional qualities of systems.

## Expensive

Our biggest cost in software engineering is almost always the salaries of the people building the software. Nobody ever really told me that explicitly, but it's true. Even when it's not literally our biggest cost, it's still usually up there. Left to their own devices, non-technical executives will manage the cost of software in a pretty patholocal way. For more on that, learn about [cost accounting](https://anthonysciamanna.com/2019/03/23/the-cost-of-cost-center-software-development.html).

## Slow

So if paying developers is costly, then developers' time is valuable. If something takes longer to do, then it's more expensive. That's probably fairly obvious, but there's an important next logical step that I don't often see made: low quality systems cost more.

If you're a fan of [Continuous Delivery](https://continuousdelivery.com/), [DORA](https://dora.dev), or [Dave Farley](https://www.youtube.com/@ContinuousDelivery) you probably know what I'm getting at already. It takes longer to modify systems and modules that are poorly designed. To use a phrase from [Martin Fowler](https://martinfowler.com/bliki/TechnicalDebt.html), Healthy systems accumulate "deficiencies in internal quality" over time that make changes to those systems slower. Worse yet, many systems are designed poorly from the very beginning.

## Difficult

Unfortunately, speed is a lagging indicator. If you're a developer one of the most important signals you should pay attention to is how easy or hard something is to change. If you ask a developer to talk through the parts of their system that are difficult to work on, they will be able to produce an absolute unit of a _list_ of stuff. They will be able to rank those challenges from hardest to easiest.

If a system, subsystem or feature is hard to change, then **it takes longer to change it** and therefore it's **more expensive**. Lower quality systems are harder to change, therefore the cost of ownership for lower quality systems is higher.

## Using the Model

**Expensive == Slow == Difficult**

Development teams should be able to spend 20% of their time on improving their systems by making it easier to work on them. You can justify this work by explaining that it's cost saving AND time saving simultaneously!

If you're talking to the CFO, explain that if you invest in making it easier to work on systems then the ROI for those systems will be higher. If you're talking to the Director of Product, explain that investing in the internal quality of the system will make fast delivery a sustainable feature of that system.
