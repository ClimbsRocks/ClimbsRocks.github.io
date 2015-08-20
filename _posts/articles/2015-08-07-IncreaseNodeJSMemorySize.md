---
layout: article
title: "Increasing Node.js memory limits"
date: 2015-08-07
categories: articles
modified:
excerpt: "How do I get Node more memory?"
tags: 
image:
  feature: serverBanksOriginal.jpg
  teaser: serverBanksThumb.jpeg
  thumb:
toc: true
share: true
comments: true
---
Playing around with some big data and flummoxed by an unexpected node memory limit? 

By default, node limits itself to 1.76 GB on 64 bit machines. You can bump this up to a theoretically unlimited amount, though various versions of the docs will claim therwise. 

``FATAL ERROR: CALL_AND_RETRY_2 Allocation failed - process out of memory
Abort trap: 6``

There's an easy fix! 

Just use the ``--max_old_space_size=<size>`` command. 

Size, according to the docs is a number in megabytes. So, ``node --max_old_space_size=4096 myAwesomeServer.js`` should give you a running node instance that can take up to GB of memory. 

That said, I've definitely seen other machines play by a different set of rules where size is a number in bytes, so if you're getting unexpected behavior, try increasing our size by several orders of magnitude. 

I've bumped this up dramatically, and had a node process that's doing machine learning take up 28GB of memory. Admittedly, my machine only has 8GB of physical RAM, so it's oing all kinds of contortions to make this happen by using disk, compression, etc. I would not advise that you do the same, but it is interesting to see how your hardware dapts and copes with the demands of your software.

As another reference point, TJ Holowaychuk frequently uses [15GB node memory limits](https://twitter.com/tjholowaychuk/status/480753206301966336).

Have fun spinning up large node instances!
