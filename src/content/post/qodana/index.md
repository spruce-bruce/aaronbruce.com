---
title: "Qodana: Trialing Static Analysis from Jetbrains"
publishDate: "August 10, 2023"
description: "I've been trialing qodana for a couple of weeks and here are my thoughts."
tags: ["tools", "CI"]
coverImage:
  src: "./qodana-cover.png"
  alt: "Qodana Cloud Report"
---

## Qodana

Qodana is a new code quality tool built by the folks over at JetBrains. They just [announced in July](https://blog.jetbrains.com/qodana/2023/07/qodana-is-out-of-preview-with-first-class-jetbrains-ide-integration/) that it is publicly available. I have a lot of respect for the JetBrains folks, so I've been spending some time trying it out.

## Pricing

The most compelling this about Qodana is the simple and relatively cheap pricing model. Their "ultimate" tier is $5 per active contributor a month. They have a free community edition, but that [doesn't support typescript or javascript](https://www.jetbrains.com/help/qodana/pricing.html) so it's not useful to me.

## Running Your First Scan

Because it's JetBrains we expect a pretty tight integration with their IDEs. It does seem that Qodana will probably shine the most for folks who are already using their suite of tools. It does seem like their preferred first experience is to run a "local" scan [right in your JetBrains IDE](https://www.jetbrains.com/help/qodana/quick-start.html#quickstart-run-in-ide).

I don't really use JetBrains IDEs, but they have a pretty easy to use [CLI tool](https://www.jetbrains.com/help/qodana/quick-start.html#quickstart-run-using-cli), so that's what I used.

When your scan is complete it starts a local webserver that hosts your results.

## Integration with CI (Github Actions)

I believe very strongly that any quality automation must be enforced by CI tooling. If you have some linting, formatting or other quality rules to enforce the ONLY way to enforce them is with CI tooling. Quality checks failing should break your build.

Qodana makes it pretty easy to do that. I use Github Actions, and integrating qodana scans into my checks was fairly easy all told. I did have a problem [getting data into their cloud platform](https://youtrack.jetbrains.com/issue/QD-6600/Project-still-waiting-for-data-after-successful-run-in-CI), but that's another story.

## My issues

I had some issues ranging from minor to major getting Qodana set up and running in my project(s). I filed them in the public Qodana youtrack so you can read them if you're interested. You can judge for yourself how much was my fault versus theirs, but if you ask me I think there's missing documentation and UX that, if present, would have prevented me from getting hung up on this stuff for weeks.

- [Couldn't create my projects in qodana cloud when I first signed up](https://youtrack.jetbrains.com/issue/QD-6560/Error-creating-team-during-free-trial)
- [Dumb GHA config error that took me forever to solve](https://youtrack.jetbrains.com/issue/QD-6797/Qodana-failing-in-CI-on-simple-java-spring-project)
- [Misconfiguration prevented results from being uploaded to Qodana cloud.](https://youtrack.jetbrains.com/issue/QD-6600/Project-still-waiting-for-data-after-successful-run-in-CI) I still don't understand what I did wrong here. The fix was simple, but I don't know yet how I was supposed to know on my own to do it.
- [I don't like this error and I couldn't figure out how to suppress it.](https://youtrack.jetbrains.com/issue/QD-6768/It-is-not-a-problem-Unused-constructor-constructor)
