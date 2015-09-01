---
layout: post
title: "Porting Mobile App to WebGL with Unity"
date: 2015-08-31
---

<p class="lead"> About one month of trying to convert Mobile App to WebGL with Unity, <br/>
here is pros and cons of "Porting Mobile App to WebGL with Unity" in my opinion: <br/> </p>

<h3> Pros: </h3>
<h4> 1. You don't need to create it from scratch. </h4>
<p class="text-left"> It really save my times to built the game-engine, scene-flow and dev-environment. So, you can focus what you need to do easily. </p>

<h4> 2. The core programming language is the same. </h4>
<p class="text-left"> Now I mainly use C# for both WebGL and Mobile Game (iOS and Android)!! This is so impressive. For a guy who come from Window Application like me, it really easy to learn. But anyway you still need to build some plugin for communication with native app like StorePlugin(Objective-C for iOS, Java for Android and Javascript for WebGL). </p>

<h4> 3. You can do a test only on Chrome or Firefox (or IE or Safari) </h4>
<p class="text-left"> To build a browser game, you don't need to worry about OS, Mobile-Model or Screen size that much. Based on the internet user, all you need to do is make it happen on Chrome, then Firefox and so on. </p>

<h3> Cons: </h3>
<h4> 1. You won't know what will be happen till it's error. </h4>
<p class="text-left"> First, when I was assigned to this project, the Unity5 is on the Beta version. No one knows exactly how to switch from Mobile App to WebGL. So, it's quite hard for me to scheduling time that this project could be finish. </p>

<h4> 2. The things,which run on Mobile App smoothly, it's not mean no problem with WebGL </h4>
<p class="text-left"> The limitation of using Unity WebGL is really made me headache. First, I need to convert TCP-IP Network to WebSocket, which you need to write it all by javascript!! (I tried to implement it with C# library but it's not really work when build the application.) Then, you can't use thread in WebGL so I need to rip-it off the project. It's just an example for what you need to do when you converting to WebGL. </p>

<h4> 3. Builing & Loading time </h4>
<p class="text-left"> Compare to the builing time in Mobile Application, the building time in WebGL is really really slow. For this project, I can built the Mobile-App in 5 Mins (I may need a little more if you built with xcode). For WebGL, I need 20++ mins depend on the building type. </p>

<h4> 4. Memory use </h4>
<p class="text-left"> As it run on web-browser, WebGL need a lot of memory to loading all assets to memory and running the code. It's not that easy to run everything in background because it will effect some delay on the scene. </p>

<h4> 5. It's really difficult to debug in Editor. </h4>
<p class="text-left"> Even you think that you already fix everything in Unity editor, you still meet errors in javascript console. For now, I already experienced the error about CORS, HTTPRequest, iFrame, Cache, local-storage, WebSocket.... which all of these you will meet after you built the WebGL. </p>

<p class="lead"> In conclusion... You need to prepare a lot to convert Mobile Game to the WebGL. Even, it's stil on the early stage , I think that it's still worth to try to build a game with WebGL. When you found more problems, you can learn a lot more to find the solutions. Cheers!!! </p>