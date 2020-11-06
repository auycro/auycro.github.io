---
layout: post
title: "Foo Bar Baz"
date: 2020-10-26
keywords: ",interview,programming,quiz"
---

Recently, I got an opportunity to talk with a Japanese tech company.
Their idea for the business is really nice and easily to approach to other industry.

Here I gonna summarize the quiz, I got in the tech session. And how I was tackled it:

**Web Architecture Design**:
I got the documents about their system and explaining about user and system. Then It is my part to discuss architecture. I made an awful mistake by starting from the dataflow and event diagram. It cost me time, I even cannot find a way to finish it. After a while, they guide me on what they need. And it comes to the system architecture. So, I design and explain it as a micro-service. In the end, it was like the below picture. ↓↓↓↓

<img src="/assets/20201026-1.png" width="50%" />

**Programming**:
There is a sequence of numbers from 1 to 50. Please made an output by these conditions.
- If it multiplies by 3, then print "foo".
- If it contains 3, then print "bar".
- If both of those conditions are correct, then print "baz".

This is my answer.

<script src="https://gist.github.com/auycro/91476b0d316fff78c4b7d1f2d4574bea.js"></script>

Then I got a question, about what if the sequence is a big number.
umm....that time I answer them by a parallel thread. And, this problem is O(n). (As we need to check every number).

**Todo Application Design**:
As I was lucky that I start learning React recently, so an idea about component and screen design is still fresh.
I drew up a prototype and explained the components which I will use. I think about the sign in and sign up page, TodoList table, and the CRUD details. Also, I tried to add some ideas about UX and some additional fields that might be needed. Then, I explained the structure of the table with MongoDB. So we can use a feature likes non-semantic records and collections. In this part, sometimes I get stuck with some Japanese words (like 'ワイヤフレーム') and some kanji in descriptions (like '消化 or 消費' I forgot lol ).

-- End --
