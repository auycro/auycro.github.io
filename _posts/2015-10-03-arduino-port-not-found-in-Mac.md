---
layout: post
title: "Launches Site"
date: 2015-10-03
keywords: ""
---

Arduino, port not found in Mac...

<p> Last week, I just bought [Arduino](https://www.arduino.cc/). And then, I followed this [tutorial](https://www.arduino.cc/en/Guide/MacOSX) to test device, which connect and run simple program on it.</p>

<p> From the tutorial, you need to choose your Arduino port. In my case, I have only to port like this.

<img src="{{ site.url }}/assets/20151003-1.png" class="img-responsive" >

<p> Then I compileed source, uploaded to Arduino and found error like the picture below</p> 

<img src="{{ site.url }}/assets/20151003-2.png" class="img-responsive" >

<p> After google the problem, it was a driver problem in MacOSX with Arduino. If you also encounter the problem like me, you can try the same solution here.</p>

1. install the CH340 driver (choose the *.pkg file) [link](https://github.com/Makeblock-official/3DPrinter/tree/master/Makeblock%203D%20printer/Arduino%20drivers) <br/>
2. Run command : sudo nvram boot-args="kext-dev-mode=1" <br/>
3. Reboot <br/>
PS. I was connected Arduino when follow this instruction.

<p> Bravo!! My Mac already found Arduino port. Now, it's time for say helo to Arduino :)</P>

<img src="{{ site.url }}/assets/20151003-3.png" class="img-responsive" >	

