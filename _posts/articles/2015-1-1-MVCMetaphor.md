---
layout: article
title: How Does Backbone or Any Other MVC Framework Work?
date: 2015-1-1
categories: articles
modified:
excerpt: A new way of thinking about all the pieces
tags: []
image:
  feature: WebOfConnectionsHalf.jpg
  teaser: WebOfConnections422x250.jpg
  thumb:
toc: true
share: true
comments: true
---
##Two key components: behavior of each class, and relationships

There are two key parts to Backbone or any other MVC framework:

1. The function of each Class in isolation (our Model, our View, and our Controller)
2. The relationships between different Classes and within each Class

The part that often gets skipped, is explicitly going through the relationships. Each relationship is different, so unless you go through them all explicitly, it's easy to get overwhelmed, or to not realize all the different forms these relationships take. 

This post will focus on the relationships between each Class, and will explore the functionality of each Class through that lens. 

##A new metaphor for explaining MVC frameworks
**Models are our soldiers**. They're the ones who are actually out in foreign lands, on the ground, getting info. They hold the important stuff (the guns, or data). 

**Collections are our generals**. They control an entire column of soldiers. They can set rules for all of them to follow. Generals create order for their soldiers. Generals organize their individual soldiers so each soldier isn't just alone out in the world, unattached, but rather, is a part of something that makes more sense and is more useful than that soldier would ever be on its own. 

**Views are reporters**. Reporters spend all day staring at generals and soldiers and waiting for something to happen to them. Once a reporter sees a change, they write a report (html) about the current state of things and ship it off for others to see. 


##Relationships

This gets more interesting when thinking about the relationships between soldiers, generals, and reporters. It’s easy to get overwhelmed because there are just so many different kinds of relationships. However, each one is pretty basic by itself, so we’ll just go through each one individually. 

##Reporters' Relationship with Models and Collections
Each reporter is embedded with only one general. It wouldn't make any sense for them to be embedded with two generals at once (kinda hard to be in Iraq and Washington, D.C. simultaneously). Generals aren't tied to any specific reporter. They can have a reporter from CNN and the NYT watching them at the same time. Likewise, generals aren't allowed to seek out a reporter. They're not allowed to go hunting through bylines and trying to find email addresses and willy nilly trying to seek out a reporter to send information to. They just go about their job and if a reporter is watching, cool, but the general does not go out of their way to talk to the reporters or interact with them. Generals lay out the protocol for how they will release information, and then basically ignore reporters. It's the reporter's job to pay attention to the general, not the other way around. 

##Reporters' Relationship with Other Reporters
Reporters have a very traditional org structure. Think old school NYT, not new school bloggers. Your bureau chief tells you what to do, and you go do it. If you're a reporter, you don't take your news update and put it directly on the front page of the NYT. You funnel your article (html) up to your bureau chief. Your bureau chief then bundles together the information he's getting from all of his reporters, packages it, and then sends it along to his boss, the editor. The editor then does some additional formatting and tweaking for the articles, then chooses where to put them on the newspaper (DOM). 

Similarly, reporters can have interns. If a reporter is in the middle of writing an article, and needs a series of charts for the article, they can just call up an intern (subviews) and have the charts (html elements) made for them. 

Reporters and interns don't have any say up the chain. An intern can't tell a reporter what article to write, just as a reporter can't tell a bureau chief which articles to pass on to the editor. But, occasionally reporters sleep with their bureau chiefs and get access they're not supposed to. If you think in terms of data structures, **reporters (views) are a tree structure**, with a strictly enforced hierarchy of parent-child relationships.  

##Soldiers' Relationships with Other Soldiers
Soldiers, on the other hand, have all kinds of crazy relationships between themselves. You've got your friends you went to high school with who are flung throughout the military, the guys you went to basic training with, that dude who took all your money at poker, and the MP who totally saved your butt that one night. There are no hard and fast rules for how infantrymen are connected. They're data stores, and data can be connected in all kinds of weird ways. In terms of a data structure, **infantrymen (models) are a graph structure**, with connections branching out all over the place. 

##Soldiers' Relationships with Collections and Views
Soldiers aren’t allowed to have any relationships with views. They just dispassionately go about their jobs, and don’t care whether a reporter is keeping track or not. 

Soldiers can take orders from generals (collections). They can even take orders from multiple different generals (be a part of multiple collections). In return, generals have an obligation to listen to their soldiers. If a soldier raises their hand and says something (triggers an event), all of that soldiers’ generals hear it.

##Generals' Relationships with Other Generals
Generals (collections) follow more of a mentorship model. They operate on their own with their own spheres. Say, one general is given command of the force in Baghdad. She operates completely independently within Baghdad, making all of her own decisions because that's within her realm of expertise. But as soon as someone comes to her and asks her something beyond her realm, she has to delegate that up the chain to her boss (prototypical inheritance). Her boss then makes the decision, and passes that back down to her for her to relay out. Each general can have only one boss. **Generals form classes and subclasses in prototypical inheritance style.** 

Generals (collections) also have a really cool ability: if you tell them what kind of soldier (model) they control, they can magically turn every recruit they're given into that type of soldier. Say they're a mounted cavalry division (they ride horses). They'll turn every single recruit you give them into a piece of cavalry, with all the training and equipment (default values, methods) the recruit needs to be a cavalry unit. The coolest part is, generals will do this automatically if you specify which type of soldier they command (`{model: cavalry}`). You don't need to tell them to do this, they do it automatically. 

##tl;dr: 
**Models are like soldiers: they hold all the important stuff (data), and they can have any relationships between themselves they desire (graph structure). It is their job to make any changes to themselves known (trigger an event). It is not their job to make sure someone’s listening to that event.**

**Views are like reporters: They are assigned to just stare at one soldier, listen for when something changes, and then format that information (html) and send it up the chain (tree structure) to someone else who decides where it goes in the newspaper (DOM).**

**Collections are like generals: they command a large force of the same type of unit (soldiers, or models). They operate independently within their own realms, but delegate up the chain for decisions outside of their own realm (prototypical inheritance).**


If you try to give a reporter a gun, or a soldier a notepad, things can get pretty messy, so let each of them focus on doing the job they're good at. 
