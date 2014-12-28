---
layout: article
title: "Thinking of Variable Names As Links"
date: 2014-12-22
categories: articles
modified:
excerpt:
tags: []
image:
  feature:
  teaser:
  thumb:
toc: true
share: false
---

//Any post on speed testing must beign with disclaimers that speed testing is a combination of dark art, high science, and arguments on how the environment for the test does not accurately reflect how the technology is deployed in production environments. 

//That said, for those of us beginning on our engineering journeys, we may oftentimes want to see roughly how efficient different approaches are
//The code below will tell you how quckly a function runs when passed the argument n. 
//you can either include this in a .js file that's being loaded into the page, or toss it into the console. 

//Again, this is in no ways conclusive, but is a useful rough approximation for relative speeds as you're testing the time of different algorithms or functions


window.timeTest = function(n, callback) {
console.time('time');
var returnVal =  callback(n);
console.timeEnd('time');
return returnVal;
}


