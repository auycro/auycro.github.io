---
layout: post
title: "Arduino's serial port not found in MacOS"
date: 2016-10-20
keywords: ",Arduino,MacOS,Problem"
---

This will shown you how to solve the "Arduino's serial port not found in MacOS".

I was once did the tutorial to solve this problem in [this](http://auycro.github.io/blog/2015/10/03/arduino-port-not-found-in-Mac).
But after upgrade mac os, the problem was happened and cannot solve by the previous solution.
So, I fixed it by the following one:

1. Install driver [link](https://github.com/auycro/auycro.github.io/tree/master/etc/file)
2. Disable kext
  1. Reboot and press CMD+R immediately after hearing the startup sound to boot to Recovery Mode.
  2. Open Terminal, execute the following command: csrutil enable --without kext then reboot.
3. After reboot, you will find Arduino serialport in IDE.
ps. I done all of this solution with Arduino plugged.
