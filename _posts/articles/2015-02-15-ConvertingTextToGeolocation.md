---
layout: article
title: "Text to Geolocation"
date: 2015-02-15
categories: articles
modified:
excerpt: "How to turn plain text into geocoordinates"
tags: [geolocation, geocoding, gazetteer, lat/long, latitude and longitude, gps coordinates, NLP]
image:
  feature: 
  teaser: map-pin1253x158.jpeg
  thumb:
toc: true
share: true
comments: true
---

##Why is it so hard to parse text into lat/long coordinates?
It seems like such a simple thing- let your user type in whatever they want for their location (NYC, New York City, New York, NY, etc.), and just turn it into GPS coordinates for your own purposes. There's even an entire category of tools dedicated to this: gazetteers. 

##Tools to help you turn unstructured text into latitude and longitude
1. Unlock Places- they reference several different gazetteer resources, and provide you with many options. However, they were inaccurate for my main use cases. 
2. Google Maps API- this one worked really well! Google clearly has a lot of mapping and NLP expertise and puts it to use here. However, they limit you to 2500 API queries per day. And I'm working with a dataset with over 100k places. 
3. Google Earth- Generally quite accurate. Can do batch processing of a dataset and then export the resulting KML file. However, when I gave it a dataset of 35,000 places, it only returned 6,600 back to me. I have no idea what happened to the other 29,000. Hopefully they've just discovered an alternat universe that's even better than ours (with easier geocoding!).
4. Google Fusion Tables- They do a great job geocoding your data. They claim to only do 2500 per day, but they processed through far more than that in my dataset. However, they don't let you export the lat/long data they've created for you. But they are useful later on below for converting from .kml files to .csv files once you already have gps coordinates. 
5. There are a ton of other options available here: http://en.wikipedia.org/wiki/List_of_geocoding_systems
6. Some languages like Ruby and PHP have geocoding libraries built for them. 
7. Follow my process below- it's surprisingly straightforward. 

##My method for turning location strings into geolocation:
1. Download all the places data, and have available in a csv file. 
2. Sort by most active places to make sure we can focus our energies accurately. 
3. Create a pro membership to BatchGeo. You can cancel at anytime within your first 30 days. Or, you can do this in increments of 250 for free. 
4. Upload csv file to BatchGeo. The first row must be the header. 
5. Click on the Validate & Set Options button. 
6. Set Country to whichever is most accurate- in my case, the data set was worldwide, so I chose International up at the top of this dropdown list. 
7. Make sure that the 'address' field is the location field, even if it's not an address. 
8. Click on the 'Show Advanced Options' button
9. Put the ID field in the 'Title' column. This ensures it will appear in your exports. This is the only field that will show up by default using this process. Getting other fields to show up will require custom parsing. However, if you use the ID field, you can easily join this new data back in with the existing data. 
10. Make Map
11. Save & Continue
12. The options for saving the map don't have any bearing on the outcome unless privacy and sharing matter to you.
13. On the map page, scroll down to the bottom of the page. It's not always obvious- use the scroll bar to the right of the page to avoid just scrolling to Antarctica. 
14. Click the Download KML file link. 
15. Now you have a file in KML format, with the ID and the new lat/long data! However, the .kml file extension is designed for mapping software, not for analytics or database software. So let's convert it to a csv. You can manually change the file extension to '.xml', but this only partway works. The much easier approach is below. 
16. Open Google Fusion Tables. You don't need to know anything about Fusion Tables. If you haven't used them before: 
  A. Go to Google Drive
  B. Click the New button
  C. At the bottom of this dropdown list, click More
  D. Click on Connect More Apps
  E. Connect the Fusion Tables app
  F. Follow this same process again, and you'll now find Fusion Table under the 'More' dropdown now. 
17. Select the file (from your computer)
18. Wait a minute while it loads.
19. File -> Download, then just make sure it saves as a csv. 
20. Open in your favorite (lightweight) text editor, and do a find/replace for all the xml-like formatting around the actual lat/long numbers.
21. Voila! You now have a csv file with IDs and new lat/long coordinates!