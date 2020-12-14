---
layout: post
title: "Lesson 2: Read, Write, Edit and Quit"
keywords: ""
permalink: /vi_memo/
---

TBD

| Command | Use case |
|--------------------|-----------|
| :r {file}          | read all in {file} |
| :r !head -5 {file}  | read top 5 lines from {file} |
| :r !tail -10 {file} | read last 10 lines from {file} |
| :w       | write to exists file |
| :w {file} | write to {file} |
| :q!      | quit w/o save   |
| :10,20 w {file}    | write line 10-20 to {file}  |