---
layout: article
title: "What is a shallow copy and why is it screwing up slice() ?"
categories: articles
modified: 2014-08-27T11:57:41-04:00
tags: 
toc: 
image:
  feature: 
  teaser: shallow_end_thumb316x250.jpeg
  thumb:
comments: 
ads: 
---

##I've gotten weird results with `Array.slice()`. What's going on? 

`slice()` returns a copy of an array. This is awesome! But there's this weird line in the MDN docs that says slice 'returns a shallow copy'. The MSDN and W3Schools docs don't mention this at all, so what in the world does this mean? 

Let's think back for a moment to [how variables work]. They're basically just links to some other place on the hard drive where the actual data is stored. 

##What hapens if there are variables in my array?

What slice does is copy over the variable, not the data that variable points to. So if you make a change to the object a variable is pointing to, the 'copied' array will still point to the object, which has now been changed. 

##Where can shallow copies get you in trouble? 

Maybe you're making a timeline of all the important things in your life- namely your age, and your favorite superheroes. 

var myFavoriteSuperheroes = ['Batman'];
var importantLifeInfo = [1,myFavoriteSuperHeroes];

Now your awesome (but somewhat noobish) mother wants to create a snapshot of the important moments in your life. She assumes she can use `slice()` to create a copy of your info for each year, and update your `favoriteSuperheroes` as she goes. 

var age1 = importantLifeInfo.slice();
myFavoriteSuperheroes.push('Teenage Mutant Ninja Turtles');
importantLifeInfo[0] = 2;

var age2 = importantLifeInfo.slice();

`console.log(age2)` will return what you expect: 
`[2,['Batman', 'Teenage Mutant Ninja Turtles']]`

But `console.log(age1)` is where people get screwed up. 

##Slice copies over variables as pointers, and does not create a copy of the data each variable points to. 

Remember myFavoriteSuperheroes is a pointer to the place on the hard drive where that data object is stored, and slice just copies over the pointer not the data object itself. Console.log(age1) will log 
[1,['Batman', 'Teenage Mutant Ninja Turtles']] 

##Ways to create a 'deep' copy that creates a copy of the data each variable points to

1. Pass in the object itself (the object literal), rather than a variable that points to the object. 
2. Recursion! 
3. Steal somebody else's recursive solution from the magical Internet
4. _.map(array, _.clone) This works if you don't have multiple levels of nesting in the array you're trying to copy (i.e., the objects pointed to by the variables in your array are not themselves full of variables) http://stackoverflow.com/questions/21003059/how-do-you-clone-an-array-of-objects-using-underscore
5. Manually nest .slice() calls inside of for loops (i.e., if you have a two level deep array of arrays, you can just use a for loop to call .slice() on each of the subarrays within the array you are trying to copy) 

Recursion is the only way to guarantee you're creating a deep copy of everything, but if you're just dealing with arrays of arrays, you can generally write a for loop quite quickly to call .slice() on each nested array. 
