---
title: "Space Invaders with motion controls"
description: "A new take on the classical game, now with motion controls!"
pubDate: "Sep 25 2022"
heroImage: "/work/space-invaders/hero.webp"
isHighlight: true
technologies: ["React.js", "TensorFlow"]
---

# Overview

This project is a modern take on the classic **Space Invaders** game, built entirely with **React.js** and **WebGL**. The key innovation is the integration of **TensorFlow.js** for motion control, which allows players to interact with the game using their body movements. By raising and lowering their arms, players can control the in-game spaceship, providing a fully immersive and interactive experience.

## Challenges & Solutions

One of the biggest challenges was incorporating **TensorFlow.js** in a way that wouldn’t hinder the game’s performance. I used **pose detection models** to track the player's movements in real-time and made optimizations to ensure the game ran smoothly across different devices. I also implemented **Redux** for state management, ensuring the game's various states (player health, score, etc.) were efficiently handled and updated.

## Unique Features

- **Real-time motion control** using the player’s webcam.
- Smooth **WebGL rendering**, allowing for complex animations and interactive graphics directly in the browser.
- Supports both **keyboard control** and **motion control**, making the game accessible to a wide range of players.

## What I Learned

This project deepened my understanding of **WebGL rendering** in the context of React applications. Additionally, I gained experience with **TensorFlow.js** for computer vision and machine learning in the browser, opening up new possibilities for interactive UIs.
