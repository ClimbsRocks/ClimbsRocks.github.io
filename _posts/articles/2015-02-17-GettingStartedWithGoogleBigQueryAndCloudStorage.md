---
layout: article
title: "Getting started with Google BigQuery"
date: 2015-02-17
categories: articles
modified:
excerpt: "Going from 0 to data"
tags: [Google BigQuery, Big Data, Google Cloud, Google Cloud Storage, MySQL, Excel, Tableau, analytics, tutorial, getting started, introduction]
image:
  feature: 
  teaser: bigDataStraightAhead253x158.jpeg
  thumb:
toc: true
share: true
comments: true
---

##Big Data is awesome. I want in. 
Where to start? Well Google BigQuery is a very approachable place to start. 
1. They give you 1TB of free data processing per month
2. Free data uploads
3. Many fun datasets already available on BigQuery
4. Free credits to get started so you don't have to worry about a ginormous bill because of a learning error. 
5. Easy to use GUI or command line interface

##Getting started with BigQuery, from 0 to data
1. Create a Google BigQuery account
2. Create a project
2. Sign up for an account (yes, separate from item#1). Currently they're offering a 60 day free trial account, with $300 worth of credits. This is great because it lets you play around with whatever you want, without worrying about having to pay for it if you accidentally screw things up. It also lets you get a sense of how expensive different things are. Want to run a huge query without limits? Great, do it in your first few weeks, see how much it costs, and adjust from there!
4. Find the data you want to connect to (GitHub, in our case)
5. Create a query. It's nearly SQL. You've got this :) 
  5a. Parameters for query: 
    A. allow large- BigQuery limits returned table size to ~240MB compressed unless you check this. If you want large results, you will not be able to cache the results, you must specify a table name to put the results into 
    B. Flatten Results- still not too sure about this one. 
    C. Priority- interactive means run immediately, but faces bandwidth restraints if you're kicking off a bunch of simultaneous queries. Batch will likely run within minutes (guaranteed within 3 hours), but has no bandwidth restraints if you're running a bunch at once.
6. You can export to csv if it's a small enough result set. 
6 (More likely scenario). Create a data set within your project.
7. Create a table in that dataset (if you specify a table that doesn't exist already, a new one with that name will be created for you).
8. Initialize Google Cloud Storage within the console.
9. Create a 'bucket' on google cloud storage.
10. Click on the arrow in the table name in BigQuery within your project, and click on export table.
11. in the "gs//" field, add in your bucket name. It's smart enough to do all the other linking for you.
12. If your data is under 1GB, just specify the file name. 
12 (Hopefully this scenario!). If your data is over 1GB, specify the file name and add an asterisk at the end. This will allow BigQuery to split the table into multiple files under 1GB with automatic file numbering.
13. From there, if you click on the file name after navigating to the file in google cloud storage, it will download the file as a csv.

From there you've got plenty of options: 
  A. Put into your own db, to process through at your own leisure
  B. Access the data through BigQuery again, and process through it more quickly, but with limits in mind and a not-quite-sql syntax
  C. Upload to another cloud service to process there

##Now you've started with Big Data!
Congrats on bypassing the row limitations in Excel and Tableau. Hopefully this helps you unlock much larger datasets in a less intimidating way. 

Have fun analyzing!