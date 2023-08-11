---
title: "Qodana: Trialing Static Analysis from Jetbrains"
publishDate: "August 10, 2023"
description: "I've been trialing qodana for a couple of weeks and here are my thoughts."
tags: ["tools", "CI"]
---

## Qodana

Qodana is a new code quality tool built by the folks over at JetBrains. They just [announced in July](https://blog.jetbrains.com/qodana/2023/07/qodana-is-out-of-preview-with-first-class-jetbrains-ide-integration/) that it is publicly available. I have a lot of respect for the JetBrains folks, so I've been spending some time trying it out.

### Pricing

The most compelling this about Qodana is the simple and relatively cheap pricing model. Their "ultimate" tier is $5 per active contributor a month. They have a free community edition, but that [doesn't support typescript or javascript](https://www.jetbrains.com/help/qodana/pricing.html) so it's not useful to me.

### My issues

- https://youtrack.jetbrains.com/issue/QD-6560/Error-creating-team-during-free-trial
- https://youtrack.jetbrains.com/issue/QD-6797/Qodana-failing-in-CI-on-simple-java-spring-project
- https://youtrack.jetbrains.com/issue/QD-6600/Project-still-waiting-for-data-after-successful-run-in-CI
- https://youtrack.jetbrains.com/issue/QD-6768/It-is-not-a-problem-Unused-constructor-constructor
