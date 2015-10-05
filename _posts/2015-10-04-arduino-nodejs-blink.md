---
layout: post
title: "Arduino with nodejs"
date: 2015-10-04
keywords: ",Arduino,NodeJS,Blink"
---

This tutorial is about [NodeJS](https://nodejs.org/en/) with [Arduino](https://www.arduino.cc/)....

You can learn how to use Arduino to send and receive data with NodeJS here.
In this tutorial, I assume that you hae some experience with NodeJs and also try npm a little before.

1.First, I will start from NodeJS. This tutorial, I use ['SerialPort'](https://www.npmjs.com/package/serialport) in NodeJS to connect with Arduino.
Then, please install SerialPort module in your project by the following command
```shell
 npm install serialport
```

2.Create NodeJS script.
<script src="https://gist.github.com/auycro/71210f1787be4c228e8e.js"></script>

3. Then I will go to ArduinoScript side.
<script src="https://gist.github.com/auycro/66ad03add77505ba442c.js"></script>

4. Let's test your Arduino :)

Reference: <br/>
[SerialPort](https://www.npmjs.com/package/serialport)  <br/>
[Arduino's Serial.print](https://www.arduino.cc/en/Serial/Print)
