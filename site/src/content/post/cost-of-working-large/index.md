---
title: "The Cost of Working Large"
publishDate: "August 27, 2023"
description: "Working on large features ties up capital in unfinished work. Break down work to reduce risk."
tags: ["management"]
coverImage:
  src: "./header.jpg"
  alt: "Forklift parked in a warehouse in front of shelves full of inventory."
---
---

In software and product engineering working in small steps is always better. It's unfortunately common that the teams I encounter are rarely very effective at breaking down their work. For this post I want to focus on just one reason that working large is bad: unfinished work costs money to produce, but doesn't provide any value until it's finished and in the hands of users.

## Unfinished Work is Inventory

In business school, students learn about the risk of tying up too much capital in inventory. For those unfamiliar, imagine you're opening a small business. You've invented a cool new kind of remote control drone and you know it'll fly off the shelves. It costs you $30.00 to produce one, and you'll be able to sell them for $100. You've begged and scraped and you've managed to get together $100,000 to start your business. With $100,000 you can afford to manufacture just over 3,000 units, but if you did that you'd have no money left over for marketing or shipping. When you have a lot of capital tied up in inventory you're making a risky assumption. You're making a bet that your manufacturing process isn't defective, that the market will be strong and remain strong, and that there won't be any unexpected costs. Having too much inventory makes you inflexible.

Inventory is exacly the right way to think about unfinished work in software. The risks and bets are all the same. In manufacturing they reduce the need to have inventory with [Just in Time](https://en.wikipedia.org/wiki/Lean_manufacturing) manufacturing. In software we have product thinking and [Continuous Deliver](https://continuousdelivery.com/). Businesses that tie up large amounts of capital in unfinished work are taking risks and reducing their ability to resopnd to changes in the market.

## Example 1: $20,000

To illustrate this effect, imagine a team that works on ideas for their product in 4 sequential stages before they're completed. Those stages are Analysis, Design, Development and Testing. For the sake of simplicity we'll say that every stage costs the same per day, and set that cost at $1,000. We'll also say that each stage takes two days. If the team is fully utilized then we'll have **$20,000** tied up in work that isn't yet earning any kind of return. Assuming we remain fully utilized we'll always have **$20,000** tied up in unfinished work.

Step through the example:
<iframe src="https://link.excalidraw.com/p/readonly/22kzu6KZkpvbZdKRN2Wn" width="100%" height="400px" style="border: none;"></iframe>

## Example 2: Same work, $10,000

In this example all the conditions are the same, except the team has split each work item into two equal parts. As a result, each work item now only spends a day in each stage of the process. _Now_ when the team is fully utilized we'll only ever have **$10,000** tied up in unfinished work.

Step through the example:
<iframe src="https://link.excalidraw.com/p/readonly/nAPS9QXfrB36PiunTkUr" width="100%" height="400px" style="border: none;"></iframe>

---
Header photo by <a href="https://unsplash.com/@petrebels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Petrebels</a> on <a href="https://unsplash.com/photos/JwMGy1h-JsY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## In Closing

Break work into small bits, and deliver each bit as soon as you can in order to reduce the cost associated with unfinished work. Smaller than you think. This is hardly revolutionary stuff. I first learned to treat unfinished work as inventory from Mary and Tom Poppendieck in their extremely important work **Implementing Lean Software Development**.

> The inventory of software development is partially done work. The objective is to move from the start of work on a system to integrated, tested, documented deployable code in a single, rapid flow. The only way to accomplish this is to divide work into small batches, or iterations.

<cite>Implementing Lean Software Development, 2006</cite>

In future posts we can talk about why the cost isn't even the most important reason to break your product work into smaller bits. Or, you can read [Many More Much Smaller Steps](https://www.geepawhill.org/2021/09/29/many-more-much-smaller-steps-first-sketch/), which is better than whatever I'm likely to write anyway.