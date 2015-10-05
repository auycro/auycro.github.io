---
layout: post
title: "Arduino with nodejs"
date: 2015-10-04
keywords: ",Arduino,NodeJS,Blink"
---

This tutorial is about [NodeJS](https://nodejs.org/en/) with [Arduino](https://www.arduino.cc/)....

You can learn how to use Arduino to send and receive data with NodeJS here.
In this tutorial, I assume that you hae some experience with NodeJs and also try npm a little before.

<br/>
1. First, I will start from NodeJS. This tutorial, I use ['SerialPort'](https://www.npmjs.com/package/serialport) in NodeJS to connect with Arduino. Then, please install SerialPort module in your project by the following command
```shell
 npm install serialport
```
<br/>
2. Create NodeJS script. 
<script src="https://gist.github.com/auycro/71210f1787be4c228e8e.js"></script>
<br/>
3. Then I will go to Arduino script.
<script src="https://gist.github.com/auycro/66ad03add77505ba442c.js"></script>
<br/>
4. Let's test your Arduino :)
<img src="{{ site.url }}/assets/20151004-1.png" class="img-responsive" >
<br/>

Reference:
1. [SerialPort](https://www.npmjs.com/package/serialport)
2. [Arduino's Serial.print()](https://www.arduino.cc/en/Serial/Print)
