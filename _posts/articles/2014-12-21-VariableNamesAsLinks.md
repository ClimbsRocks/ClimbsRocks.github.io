---
layout: article
title: "Thinking of Variable Names As Links"
date: 2014-12-22
categories: articles
modified:
excerpt:
tags: []
image:
  feature: pointingHandFull.jpg
  teaser: pointingHand422x250.jpg
  thumb:
toc: true
share: false
---

##Pointing Multiple Links To The Same Page    

Say you have a favorite Wikipedia page- my current one is the [San Francisco Bike Coalition](http://en.wikipedia.org/wiki/San_Francisco_Bicycle_Coalition).

[`My Favorite Page`](http://en.wikipedia.org/wiki/San_Francisco_Bicycle_Coalition)

You can easily create a link to it. In fact, you can create [several different links](http://en.wikipedia.org/wiki/San_Francisco_Bicycle_Coalition) that all point to [the same page](http://en.wikipedia.org/wiki/San_Francisco_Bicycle_Coalition).     
     
You'd probably expect that when you click on any of the links you have pointing to the Bike Coalition, they would all take you to the same page. You'd be right! 
     
And then, because you're an awesome web citizen and you believe in contributing to the open source movement, you change something on that page. Let's say you increase the coalitions's `membership count` by 1.     
     
When you click any of those links you've created, they'll all take you to the same page, and that page now includes the updated `membership count`.    
   
Maybe at some point you'll get tired of the Bike Coalition, and want to point one of your links to a new site. Let's change [`My Favorite Page`](http://strava.com) to now point to a [biking app you're addicted to](http://strava.com).    
   
Do you expect all your other links that are pointing to the Bike Coalition to still take you to the Bike Coalition? Of course!     
   
This seems an obvious point, so why am I writing a whole blog post about it?     
   
##Javascript variables are just like links     
   
Each variable is just a link, pointing to some 'webpage'. That 'webpage' can hold anything as complex as a database, or as simple as a single letter. It doesn't matter what that 'website' holds, each variable is just a link to the place where the data is actually stored. The variable itself does not store any data, just as a link to a webpage points you to the webpage, the link itself doesn't store the entire webpage.    
   
Now you make a change to an object that many variables point to (increasing the `membership count` for the Bike Coalition). It doesn't matter which variable you access the object with, you'll get the same 'webpage' regardless, and that object will have the increased `membership count`.     
   
When you decide to point one of your variables to something new, it's the same as changing which website you point a link to. Changing the `My Favorite Page` link to point to the biking app will in no way change the website for the Bike Coalition. All the other links that point to the Bike Coalition will still point to the Bike Coalition. Variables are the same way.     
   
##Don't feel bad screwing this up a few times    
   
Despite being a deceptively simple concept, the way variables behave will likely screw you up a few times. As long as you think of variables as links that send you somewhere else to access the 'website' or object you're accessing, you'll be thinking of this problem the right way.     
   
   
Disclaimer: if you're the 1% of the popultation that thinks of links in terms of edge caching and multi-threaded DNS resolution, roll back your understanding of how links work to the way a layman would think of them. 

