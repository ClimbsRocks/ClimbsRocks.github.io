---
layout: article
title: "Flux for a smaller app"
date: 2015-02-12
categories: articles
modified:
excerpt: "How to not be overwhelmed by Flux in a smaller app"
tags: [React, ReactJS, React.js, tutorial, learning, pick up, list, video, introduction]
image:
  feature: 
  teaser: getting-to-know-flux422x213.jpg
  thumb:
toc: true
share: true
comments: true
---

##Flux is aweseome!

I'm a huge fan of React, and the Flux architecture makes it super obvious how data is flowing through the app. 

If you follow the Flux architecture, you're unlikely to have bugs you can't track down, or behavior you can't explain. It's easy for people to jump in and write code immediately upon picking up the codebase. We recently built a project in React using Flux, handed it off to a whole new team, and within 3 days they were able to add significant new functionality to it. It's that easy to follow and understand. 

However, we did one thing wrong: we followed the entire freaking Flux architecture for a pretty small app. 

##Don't use all of it for small apps
For a small app, all you really need are the Views, a Dispatcher, and a Store. 

We added in all kinds of needless complexity by following the full Flux architecture. 

We learned a lot from doing this, and I now understand Flux much better. But it was total overkill. Here are a two things that make sense for a larger app but don't make as much sense for a smaller app:

1. Constants- In a larger app, these make sure you're speaking a consistent language across your entire codebase. Since we can send in actions from the server, the view, and other parts of our app, having a single store of Constants makes sure they're all aligned. It prevents you from using tableName in one place, and tablename in another. However, when you only have a dozen or so actions, and you don't have dozens of developers on it, this is overkill and adds needless complexity. 

2. appActions and appDispatcher- These become redundant. We built out all our logic in our appActions, and then our appDispatcher existed solely as a middleman doing the exact same thing each time. It accomplished nothing other than letting us follow the Flux architecture to the letter. If you're building a small app, with only one Store, I'd recommend building all your logic into the Dispatcher and doing away with appActions. 

##Focus in on only the Views, Dispatcher, and Store
You still get all the great benefits of the Flux architecture that makes React so easy to use and understand, without any of the needless complexity. When I first looked at the codebase after my partner laid it out this way, I was confused why we had so many files that did nothing other the shuttle data from one place to another. Or why we had a Constants file which just listed the same actions we were already using. 

If you're building a smaller app, save yourself some trouble (and make it easier for others to understand what your app is doing), by staying focused on the intent behind Flux, rather than the full letter of it. 

Use your Views, a Dispatcher, and a Store. You'll have an awesome app using Flux and React that's simpler to create and easier to understand. 