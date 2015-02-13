Create a Google BigQuery account
Create a project
Sign up for an account. Currently they're offering a 60 day free trial account, with $300 worth of credits. This is great because it lets you play around with whatever you want, without worrying about having to pay for it if you accidentally screw things up. It also lets you get a sense of how expensive different things are. Want to run a huge query without limits? Great, do it in your first few weeks, see how much it costs, and adjust from there!
Find the data you want to connect to (GitHub, in our case)
Create a query. It's nearly SQL. You've got this :) 5a. Parameters for query: A. allow large- BigQuery limits returned table size to ~240MB compressed unless you check this. If you want large results, you will not be able to cache the results, you must specify a table name to put the results into B. Flatten Results- still not too sure about this one. C. Priority- interactive means run immediately, but faces bandwidth restraints if you're kicking off a bunch of simultaneous queries. Batch will likely run within minutes (guaranteed within 3 hours), but has no bandwidth restraints if you're running a bunch at once.
You can export to csv if it's a small enough result set. 6 (Real one). Create a data set within your project.
Create a table in that dataset (if you specify a table that doesn't exist already, a new one with that name will be created for you).
Initialize Google Cloud Storage within the console.
Create a 'bucket' on google cloud storage.
Click on the arrow in the table name in BigQuery within your project, and click on export table
in the "gs//" field, add in your bucket name. It's smart enough to do all the other linking for you.
If your data is under 1GB, just specify the file name. If your data is over 1GB, specify the file name and add an asterisk at the end. This will allow BigQuery to split the table into multiple files under 1GB with automatic file numbering.
From there, if you click on the file name in gs, it will download the file as a csv.
Create a database somewhere that can store all the data. Ours will be a MySql database, hosted locally.
Import the data into your database.
Create a program to iterate through the data, summing it up as you'd like. Wait, but I can do this in BigQuery.