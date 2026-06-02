---
layout: post
title: "Knight's Fury in Itch.io"
date: 2026-06-02
keywords: ",game-dev,claude,ai-coding"
---

The idea for this game came to me while I was waiting in line at the hospital... LOL.

One tap + some luck + roguelite.

I built this entire game using AI.

Here are some things I learned:

- With a clear game mechanic, AI can help spin up a game very quickly.
- Even when the mechanics are clear, bugs always exist.
  - Progress bar shrinking unexpectedly
  - Tap button breaking when the stage changes
- When you remove something, it can break other parts of the game.
  - Example: I removed the handleToggle() function from the script, but AI forgot to remove the reference in the <div>.
- Don't embed large files (BGM, animations, etc.) directly into the HTML.
- When asking AI for screenshots or cover images, it tends to generate them rather than capture the actual game screen.
  - I even saw it try using Playwright, but the generated image was still a bit different from the real game.

You can try the game here :)

[https://auycro.itch.io/knights-fury](https://auycro.itch.io/knights-fury)

