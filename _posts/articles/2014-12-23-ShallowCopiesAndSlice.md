---
layout: article
title: "What is a shallow copy and why is it screwing up slice() ?"
categories: articles
modified: 2015-01-12T11:57:41-04:00
tags: 
toc: 
image:
  feature: 
  teaser: shallowNoDivingTeaser.jpeg
  thumb:
comments: 
ads: 
---

##I've gotten weird results with `Array.slice()`. What's going on? 

`slice()` returns a copy of an array. This is awesome! But there's this weird line in the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) docs that says slice 'returns a shallow copy'. The [MSDN](http://msdn.microsoft.com/en-us/library/ie/tkcsy6fe(v=vs.94).aspx) and [W3Schools](http://www.w3schools.com/jsref/jsref_slice_array.asp) docs don't mention this at all, so what in the world does this mean? 

Let's think back for a moment to [how variables work](http://prestonparry.com/articles/VariableNamesAsLinks/). They're basically just links to some other place on the hard drive where the actual data is stored. 

##What hapens if there are variables in my array?

What slice does is copy over the variable, not the data that variable points to. Say you make a change to the object a variable is pointing to. The 'copied' array will still include a variable pointing to that same object, which has now been changed. 

**Slice copies over variables as pointers, and does not create a copy of the data each variable points to.**

##How to create a 'deep' copy

Creating a 'deep' copy means your new copy will have no linkages to the original object. The easiest to create a deep copy by far is to use JSON. 
{% highlight css linenos=table %}





var mySuperNestedArr = [myFavoriteSuperHeroesArr,myFavoriteCatGifsObj,taySwiftsEntireCatalogueObj];
var completelySeparateCopy = JSON.parse(JSON.stringify(mySuperNestedArr));
{% endhighlight %}


When you JSON.stringify a variable, it creates a whole new object. Then you can just immediately JSON.parse it, and blam, you have your totally separate copy! 

One place you'll find this particularly useful is when you want to avoid modifying objects you pass into functions as arguments.

Hope this helps!