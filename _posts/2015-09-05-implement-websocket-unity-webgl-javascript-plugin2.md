---
layout: post
title: "Implement WebSocket to Unity WebGL via Javascript Plugin#2"
date: 2015-09-05
keywords: ",unity,unity3d,webgl,websocket,javascript"
---

This guide will introduce you how to implement Unity's WebGL with WebSocket.
For now, we have already finish "WebSocket.jslib" in Part1.

[Part1](http://auycro.github.io/blog/2015/09/02/implement-websocket-unity-webgl-javascript-plugin1)

<h3>Part2</h3>
<h4>Create New Project in Unity</h4>
<p class="text-left"> 
First, we start with create new Unity Project, then we delete all GameObject and Camera. <br/>
After that, we need to create a GameObject name "WebSocketGameObject". <br/>
This GameObject will connect to javascript plugin. If you have different name, please make sure you to change your GameObject name.
</p>

<h4>Create C# script</h4>
<p class="text-left"> 
After that we will create the main class for Unity to use WebSocket <br/>
You can find the attached below, "WebSocket.cs". After finished it, drag and drop it into "WebSocketGameObject".
Then run the project to check that we got some buttons on the screen.
</p>

<script src="https://gist.github.com/auycro/f5a6f3944f3bdaae1aaa.js"></script>

<h4>Add Javascript Plugin to Project</h4>
<p class="text-left"> 
Then, put WebSocket.jslib file into the asset folder.
Now your project should similar to a below picture.
</p>

<img src="{{ site.url }}/assets/20150905-1.png" class="img-responsive" >

<h4>Let's Build and Try</h4>
<p class="text-left"> 
Now it's your turn to build the project and try it your self.
You can find the result in Javascript Console. Cheers!!!
</p>


<p class="text-left"> 
PS. You might need server to run your WebGL project. <br/>
For me, I use NodeJS as the webserver. you can find the detail in Reference. :)
</p>

Reference:
[webgl-interactingwithbrowserscripting](http://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html)
[simple node webserver](http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server)
