---
title: "Learning More About Effective Documentation"
publishDate: "August 11, 2023"
description: "Current thoughts plus a collection of resources on the subject of documentation, and how to use it effectively."
tags: ["swe", "communication"]
coverImage:
  src: "./header.jpg"
  alt: "A pile of messy binders"
---

## On the Subject of Documentation

I have never in my career worked on systems that were well documented, and I was taught to believe that less is more when it comes to documentation. I still believe that's true, but I do believe there's a lot of missing nuance if you shut down a conversation about documentation with that line. I'm worried that as an industry we've taken the rejection of documentation too far.

Effective documentation has become more interesting to me since [Synapse](https://synapsestudios.com) has both grown and gone fully remote. Especially as a manager, it's becoming more and more obvious that we need to modify our internal communication strategy to include much more written docs.

## Why?

**Sharing knowledge.** Synapse has always been awesome at learning, but we've gotten less awesome at sharing knowledge as we've grown and gone remote. I find myself in a situation where I have to pay attention to what's going on everywhere in order to make sure teams don't spend any effort relearning what another team has already figured out.

**Setting Standards.** There are a lot of technical standards and cultural norms at any organization. We used to get away with tribal information sharing for this stuff, but I'm finding that I'm having to fill in gaps more than I want. There are also many new standards now than their used to be, and some teams haven't been able to keep up.

**Planning.** I don't believe in excessive planning, but I've started to believe that some kind of technical design documentation would be useful for to implement. I don't know yet exactly what that would be, or exactly when it should be used, but I think when a team is building something then writing up some kind of light weight technical spec will be valuable in order to coordinate design efforts and receive feedback on direction.

**Pacts.** For me there's something interesting about a team maintaining some kind of charter that documents something about values and expected behaviors. This will help new team members get up to speed, but I think having these things written down help to prevent conflict when people's behaviors start to stray. I'm not really thinking about a "code of conduct" per se, but more like engineering principles. For example a team can document that they intend to practice TDD and Continuous Integration in a certain way.

**Onboarding.** This kind of documentation is pretty much a no brainer for me. Each repo or app should have written instructions on what it takes to work on it. How do you run the app for development? How do you run tests? What is the high level architecture and purpose?

## Maintaining Documentation

The reason that there is so much skepticism about documentation in the software world is because of the effort required to keep docs up to date. To me that leads me to a couple of conclusions.

1. Prefer a documentation strategy that doesn't require maintenance. Decision logs and reports are effective at this. These documents represent facts as they were when the document was written. Design documents like technical specs should fit into this category.
1. Document things that don't change frequently, and use calendar or other kinds of reminders to review these infrequently - maybe yearly. This is where organizational policies or team charters fit.
1. Be very skeptical of documenting things that change frequently. Code documentation like comment blocks fall into this category. Code should still be self-describing and relying too much on comments is very frequently a smell. This kind of documentation very frequently winds up out of date and wrong, and wrong documentation is worse than no documentation.

## Resources

I've been reading a lot of Will Larson lately, so what follows is mostly a ton of links to blog posts he's written that touch of the subject of documentation.

- https://lethain.com/discouraging-perfection/
- https://lethain.com/model-document-share/
- https://lethain.com/eng-strategies/
- https://lethain.com/good-engineering-strategy-is-boring/
- https://infraeng.dev/tech-spec/
- https://infraeng.dev/decision-log/
- https://infraeng.dev/tech-spec-review/
- https://www.idaszak.com/posts/stop-knowledge-loss/?utm_source=brevo&utm_campaign=Level%20Up%20-%20Issue%20200&utm_medium=email

---

Header photo by <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Grey</a> on <a href="https://unsplash.com/photos/tn57JI3CewI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
