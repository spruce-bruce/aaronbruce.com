---
title: "TDD Doesn't Force Good Design"
publishDate: "August 28, 2023"
description: "I think the simple claim that TDD improves design isn't strictly true, and turns some people away from automated testing."
tags: ["quality"]
coverImage:
  src: "./header.jpg"
  alt: "A guy holding a laptop up yelling at it"
---
---
I love automated testing, and I'm a very big proponent of TDD with unit tests, but I have a couple nits to pick with my fellow test automation proponents. The claim that automated testing and TDD forces you to produce better designed systems isn't strictly true, and I think the claim sans-nuance does some damage to the movement.

## The Claim: Testing Improves Design

The claim follows a logic like this: in order to write automated tests, your systems will need to be designed to be testable. All of the design techniques and principles you'll need to use to make your code testable are the same techniques and principles you'd use to design your system to have low coupling and generally good separation of concerns.

TDD is a design tool, and it's the best way to create rapid feedback loops about the quality of your design. I do think that TDD is the best tool we have to help us produce well designed, loosely coupled system.

## The Problem

The problem with the claim is simply the fact that you don't have to write "testable code" in order to test your code. Especially in languages like javascript you can do a lot with mocking frameworks and dependency orchestration to make bad code work. Testing doesn't _force_ good design, it enables it, and it only works if you know how to detect the signals that your code is poorly designed.

I experienced this first hand when I first started learning to do TDD with unit tests. We had a badly designed system and we adopted a unit testing strategy that said every class needed to be tested independently from every other class. Testing this system was _hard_. It was a lot of effort with mocks and dependency wrangling to exercise our classes, and it produced brittle tests that never added any value in terms of the quality of the overall system.

We were writing bad tests in a badly designed system and having a horrible time. The conclusion we came to was that this testing thing was for the birds. It was slowing us down and not really adding any benefit. Get rid of it.

In my work I encounter testing skeptics all of the time, and I find that their experience is often a mirror of my own. They tried it and found that it just felt like a miserable grind. Rather than tackling the culprit - the poor design of their systems - they gave up. Just like I did.

## Testing can be done badly

The message I had received was "testing improves quality" and "this is how you do testing". There wasn't much room for nuance, and when it didn't deliver the results I was promised, it was easy to be skeptical of testing. I had tried it and verified irrefutably that I didn't get positve outcomes. It was 4 or so more years before I tried it again, this time after having done a considerable amount of reading on the subject.

Armed with the proper nuance, I had learned to read the signals. 

- If testing your code is hard it means your code needs to be factored better. Stop what you're doing and fix the design so that testing is easy again. 
- Mocking is usually a smell. 
- And above all else, like anything else it takes time and practice to be good at testing.

TDD is a design tool, and it's challenging to master good design. Therefore, it's challenging to master good testing.

---
Header photo by <a href="https://unsplash.com/@bermixstudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bermix Studio</a> on <a href="https://unsplash.com/photos/wbc8MlFbuZU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  