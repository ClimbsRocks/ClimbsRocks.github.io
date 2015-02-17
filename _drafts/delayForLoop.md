Say you're iterating through a database and making an API call for each item in that database. 

And now let's supposed that your database is a few hundred thousand rows long. 

You probably don't want to overwhelm the nice people on the other end of the line who are just trying to give you some data. So let's delay each call by a fraction of a second to give that server a chance to respond!

##Naive Approach:
Your first thought would probably be to put a setTimeout inside of the for loop you're using to iterate through each object. 

Let's think about the execution order of this for a moment: 
It will hit the first instance of the for loop, hit your first setTimeout, queue up some code to be run in x milliseconds, and then immediately go onto the second iteration of the for loop, queueing up some other code to now be run at x+1 milliseconds. Basically, all you'll be doing is shoving the entire mass of the for loop back by the amount of time you lay out in your setTimeout. 

That's not what we want!

What we want is to delay **each iteration of the for loop for x milliseconds after the previous iteration of the for loop**.

##SetInterval Approach
Turns out there's an easy way to do this in Javascript: SetInterval. 
Just set up a counter inside your setInterval, and a quick check to see if that counter has reached the limit. Basically, you're forcing the SetInterval to act as your for loop, and also using it's built in functionality to set a delay between each iteration. 

