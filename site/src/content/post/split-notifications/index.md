---
title: "Splitting up Work: An Example"
publishDate: "August 30, 2023"
description: "Explore a real world example of splitting up work into bits. I take a proposal for adding notifications and break it down."
tags: ["work small"]
---

---

Learning to break down work can be challenging for teams, so I like to teach this skill with examples that I come across in my work. If you're setting out to improve this skill it's important to note that it is inherently a technical task and best done by the developers who will do the work. Non-technical POs and PMs can never expect to be proficient in this by themselves. You will find that you can get the best results when the product team members do reamin involved and collaborative in breaking down the work, though.

## Notifications

Our example system today is in the healthcare industry. This is a real example that I found in my work, though I've taken some steps to anonymize the company and the product.

The system's customers are Doctors' offices and clinics, and an important step in its' primary workflow is that it produces some reports that need to be reviewed and signed by Doctors. Doctors' offices are able to bill insurance companies once those documents are signed, and the software system charges customers for services only once those documents are signed and submitted to insurers. Suffice it to say, getting those documents signed promptly is important.

However, the doctors aren't active users of the software system. They only ever log in to sign these documents, and the documents are produced at most weekly. It benefits everyone if these documents are signed as soon as they're available, but the average wait time is 14 days.

The company hypothesized that introducing proactive notifications for the doctors would reduce the document wait time, and so they got to work coming up with a notifications system. In the course of designing the notifications system, they realized that there are other users and other system events that should trigger notifications, too. There are nurses and administrative staff who could be notified for different steps in the workflow. The design for the notifications system grew to include at least 10 more high value events that users should be notified about.

The notifications system also took into account different delivery channels, and the fact that not every user will prefer to receive all of the notifications on all of the channels. So users need to be able to receive notifications by email, SMS and pushed directly to their mobile device at a minimum. Users need to be able to choose the right delivery channel for notifications, and they need a configuration screen in order to opt out of the events they don't want to be notified about.

## Breaking it Down

The team had done all of the design for this notification system up front. They'd picked the events to notify about, the channels to deliver notifications to, and had spent some time designing the screen that would allow their users to configure their notification settings.

Splitting work effectively begins at the beginning - doing a large specification for the entire notifications system up front is already too large. So what should be done instead?

Remember the notifications system had 11 events and 3 delivery channels. Those are the perfect seams to use to split this work. Pick the event and channel that you think will be most valuable and start there. In this case I recommended the event that alerts Doctors about the documents that were ready to sign, and to deliver them via SMS. I recommended that event and channel based on what I knew about the company's users. The doctors were primarily web users who would prefer to do their document signing from their phones.

## Don't Do Big Design Up Front

The team designed the whole notifications system and they were asking for my advice on how to write stories for the development team from their planning doc. I recommended that they split it up by event and delivery channel. It was tempting for them to take that advice and produce a large batch of stories that describes the whole system and add it to the development team's backlog all at once.

What I advised them to do is to just pick one event and one channel (document ready to sign, sms) and add that to the team's backlog first. And my advice for next time was to skip the big design step. There was no need to plan it all out like that. Identify the smallest, most valuable, possible next step and do that first and get it all the way done. The single event sms notification system doesn't need a complex configuration screen, it just needs a simple opt in where doctors provide their number.

## Final Thoughts

So how are you supposed to know ahead of time what to work on?

You have to get the right people in the room early enough. Developers should be involved in the planning phases for exatly this reason. Only they can identify the best seams to break down work.

If the team had known to skip the big design do you think they would have picked the right first thing to work on, or would it have been different?

The beauty of working small is that the risk of picking the wrong thing to work on is very low. When your bets are small you can learn from your mistakes and adjust in real time, never committing to risky product decisions, it's safe to pick the suboptimal option and tweak what you do next based on what you learned from what you just delivered.
