---
layout: post
title: "golang knight's tour problem with warnsdorff"
date: 2022-02-12
keywords: ",golang,algorithm,warnsdorff,knight tour"
---

https://github.com/auycro/golang-knight-travel

```
$ go run cmd/main.go warnsdoff random
Board Init: 8/8/6N1/8/8/8/8/8
   +------------------------+
 8 | .  .  .  .  .  .  .  . |
 7 | .  .  .  .  .  .  .  . |
 6 | .  .  .  .  .  .  N  . |
 5 | .  .  .  .  .  .  .  . |
 4 | .  .  .  .  .  .  .  . |
 3 | .  .  .  .  .  .  .  . |
 2 | .  .  .  .  .  .  .  . |
 1 | .  .  .  .  .  .  .  . |
   +------------------------+
     a  b  c  d  e  f  g  h
move: h8
   +------------------------+
 8 | .  .  .  .  .  .  .  N |
 7 | .  .  .  .  .  .  .  . |
 6 | .  .  .  .  .  .  X  . |
 5 | .  .  .  .  .  .  .  . |
 4 | .  .  .  .  .  .  .  . |
 3 | .  .  .  .  .  .  .  . |
 2 | .  .  .  .  .  .  .  . |
 1 | .  .  .  .  .  .  .  . |
   +------------------------+
     a  b  c  d  e  f  g  h
move: f7
   +------------------------+
 8 | .  .  .  .  .  .  .  X |
 7 | .  .  .  .  .  N  .  . |
 6 | .  .  .  .  .  .  X  . |
 5 | .  .  .  .  .  .  .  . |
 4 | .  .  .  .  .  .  .  . |
 3 | .  .  .  .  .  .  .  . |
 2 | .  .  .  .  .  .  .  . |
 1 | .  .  .  .  .  .  .  . |
   +------------------------+
     a  b  c  d  e  f  g  h
...
...
...
move: e3
   +------------------------+
 8 | X  X  X  X  X  X  X  X |
 7 | X  X  X  X  X  X  X  X |
 6 | X  X  X  X  X  X  X  X |
 5 | X  X  X  X  X  X  X  X |
 4 | X  X  X  X  X  X  X  X |
 3 | X  X  X  X  N  X  X  X |
 2 | X  X  X  X  X  X  X  X |
 1 | X  X  X  X  X  X  X  X |
   +------------------------+
     a  b  c  d  e  f  g  h
```
