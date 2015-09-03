---
layout: post
title: "Implement WebSocket to Unity WebGL via Javascript Plugin#1"
date: 2015-09-02
keywords: ",unity,unity3d,webgl,websocket,javascript"
---

This guide will introduce you how to implement Unity's WebGL with WebSocket...

<h3>Part1</h3>
<h4>Prepare Javascript plugin function</h4>
<p class="text-left"> 
First we will prepare the WebSocket library in javascript. <br/>
Here is my Javascript plugin for WebSocket, "MyPlugin.jslib".
</p>

<script src="https://gist.github.com/auycro/3b00e3c05b26d284ec77.js"></script>

<p class="text-left"> 
 As you can see, we already have 4 functions (Hello,InitWebSocket,Send,State) to use in Unity. <br/>
 In the next part, I will show you how to create GameObject and Script.
</p>

Reference:
[webgl-interactingwithbrowserscripting](http://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html)
[WebSocket-echo](https://www.websocket.org/echo.html)
[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
