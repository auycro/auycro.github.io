---
layout: post
title: "Vagrant showing nothing when using MinGW"
date: 2017-11-20
keywords: ",Vagrant,MinGW,Window,Terminal,Blank"
---

Last week I upgrade from Windows7 to Windows10, then re-installing vagrant.
I found a problem, which there is no terminal result (blank result) when login to vm by `vagrant ssh`.

Fortunately, there is the same issue in this [Link](https://github.com/hashicorp/vagrant/issues/9143).
To solving, just type in this command:
```
$ export VAGRANT_PREFER_SYSTEM_BIN=1
```

Then, login again to check it by yourself :)
