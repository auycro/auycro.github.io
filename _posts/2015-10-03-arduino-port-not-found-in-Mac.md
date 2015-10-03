---
layout: post
title: "Arduino's port not found in MacOSX"
date: 2015-10-03
keywords: ",Arduino,MaCOSX,error,port"
---

Arduino's port not found in MacOSX...

Last week, I just bought [Arduino](https://www.arduino.cc/). And then, I followed this [tutorial](https://www.arduino.cc/en/Guide/MacOSX) to test device, which connect and run simple program on it.

From the tutorial, you need to choose your Arduino port. In my case, I have only two ports like this.

<img src="{{ site.url }}/assets/20151003-1.png" class="img-responsive" >

Then I compiled source, uploaded to Arduino and found error like the picture below.

<img src="{{ site.url }}/assets/20151003-2.png" class="img-responsive" >

After google the problem, it was a driver problem in MacOSX with Arduino. If you also encounter the problem like me, you can try the same solution here. 

1. install the CH340 driver (choose the *.pkg file) [link](https://github.com/Makeblock-official/3DPrinter/tree/master/Makeblock%203D%20printer/Arduino%20drivers)
2. Run command : sudo nvram boot-args="kext-dev-mode=1"
3. Reboot

PS. I was connected Arduino when follow this instruction.

Bravo!! My Mac already found Arduino port. Now, it's time for say helo to Arduino :)

<img src="{{ site.url }}/assets/20151003-3.png" class="img-responsive" >	

