---
layout: post
title: "Implement WebSocket to Unity WebGL via Javascript Plugin#1"
date: 2015-09-02
keywords: ",unity,unity3d,webgl,websocket,javascript"
---

<p>This guide will introduce you how to implement Unity's WebGL with WebSocket. </p>

<h3>Part1</h3>
<h4>Prepare Javascript plugin function</h4>
<p class="text-left"> 
First we will prepare the WebSocket library in javascript. <br/>
Here is my Javascript plugin for WebSocket, "MyPlugin.jslib".
</p>

{% highlight javascript %}
var MyPlugin = {
  Hello: function() {
    window.alert("Hello, world!"); //For Testing Connection
  },
  InitWebSocket: function(str) {
    //As string passed by pointer, you need to convert to string. 
    var url = Pointer_stringify(str); 
    // define WebSocket as window.websocket
    window.websokcet = new WebSocket(url); 
    window.websocket.onopen = function(evt) { 
      console.log('connected to '+url);
    }; 
    window.websocket.onclose = function(evt) { 
      console.log('disconnected '+evt.code);
    }; 
    window.websocket.onmessage = function(evt) {
      console.log('receive: '+evt.data);
      //we will call "void Receive(string msg)" from "WebSocket"(GameObject).
      SendMessage ('WebSocket', 'Receive', evt.data); 
    }; 
    window.websocket.onerror = function(evt) {
      console.log('error: '+evt.data);
    }; 
  },
  Send: function(str) {
    var msg = Pointer_stringify(str); //Same as above
    window.websocket.send(msg);
    console.log('send: '+msg);
  },
  State: function() {
    return window.websocket.readyState;
  }
};

mergeInto(LibraryManager.library, MyPlugin);
{% endhighlight %}

<p class="text-left"> 
 As you can see, we already have 4 functions (Hello,InitWebSocket,Send,State) to use in Unity. <br/>
 In the next part, I will show you how to create GameObject and Script.
</p>

Reference:
[webgl-interactingwithbrowserscripting](http://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html)
[WebSocket-echo](https://www.websocket.org/echo.html)
[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
