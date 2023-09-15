---
title: "What is a Unit Test"
publishDate: "September 15, 2023"
description: "It seems like no two people define unit testing the same, but shared understanding is necessary for productive discourse"
tags: ["testing"]
# coverImage:
#   src: "./header.jpg"
#   alt: "A pile of messy binders"
---

---

No topic sparks debate quite like the topic of testing. We all have our preferred techniques and often quite strong opinions about the Right Way to test our code, and as a result the subject of test automation can get pretty heated and degrade into uselessness.

One recurring issue I've noticed in these debates is that people rarely have a shared understanding about what they're discussing. You'll find two people debating the value of unit tests who are each clearly talking about different kinds of tests. In an attempt to help folks online, and in my own work, here are the definitions of "unit testing" that I've encountered.

## Unit Tests Test the Smallest Unit

Unit tests are strictly about one class or one function. With this strict definition you'll find that tests sometimes have to work pretty hard to isolate units of code. 

At its best this puts pressure on the designers of systems to prefer pure functions with immutable data structures. At its worst this method of testing requires a significant amount of work to mock dependencies in order to purely test tiny isolated units.

I often find that the folks to prefer to use integration tests over unit tests are using this "very small" definition of unit test.

## Unit Tests are Fast

In his book "Working Effectively With Legacy Code" Michael Feathers proposed this definition of unit test.

> Unit tests run fast. If they don’t run fast they aren’t unit tests. Other kinds of tests often masquerade as unit tests. A test is not a unit test if:
>
> It talks to a database
>
> It communicates across a network
>
> It touches the file system.
>
> You have to do special things to your environment (such as editing configuration files) to run it.

This is how I prefer to define unit tests. With this method of testing you don't worry so much about isolating classes or functions from one another, but instead you give yourself permission to test them in concert. Some unit tests are still very small, but some unit tests cover a couple classes and how they interact together.

This definition is troublesome, though, because it defines unit tests by what they _don't do_, and it leads to some debate. These days we have in memory databases and other methods to make tests that DO depend on the network or a database much faster. Do those get to qualify as unit tests now? Personally, my answer is "no", but others will disagree.

## Unit tests test a single REST endpoint

Adherents to the other two definitions of unit test may find it surprising to hear that these people exist, but this is actually quite a common belief. 

With this definition unit tests are usually interacting with a database, but you might find that the database itself is mocked in some way or another. These tests do test quite a large surface area, especially compared with the smallest unit tests.

I find that people who only do this kind of testing will be writing their tests after coding up their endpoints, but it is possible and beneficial to code test-first with these api tests.

## Closing Thoughts

Hopefully, your takeaway from this piece is simply that there's a huge amount of variation in the way people define terms in our industry. If you want to have a useful discussion with folks on the subject of unit testing you first have to determine which definition of unit testing they subscribe to.

One important closing thought I want to share is that whatever you call them, all 3 of the kinds of tests I documented in this post are useful. A well tested codebase should probably be using a testing strategy that incorporates all three of these test types to some degree.

Some further reading: 
- [Martin Fowler's piece on the subject](https://martinfowler.com/articles/2021-test-shapes.html)
- [My post about test automation strategy](https://synapsestudios.com/learn/test-automation-strategy/)