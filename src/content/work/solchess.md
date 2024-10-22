---
title: "SolChess (Epam Coolest Projects Hungary 2022 Winner)"
description: "A decentralized multiplayer chess platform on the Solana blockchain, featuring real-time gameplay and blockchain-based game validation."
pubDate: "Jul 15 2022"
heroImage: "/work/solchess/solchess_demo.webm"
isHighlight: true
technologies: ["Next.js", "Solana Blockchain", "Web3.js"]
---

# Technologies Used

- **React.js**
- **Solana Blockchain**
- **Web3.js**

## Overview

**SolChess** is a decentralized, multiplayer chess platform built on the Solana blockchain. The project was designed to showcase the potential of blockchain for real-time multiplayer gaming. Users can challenge opponents to a game of chess, track their wins and losses, and manage game data securely, with Solana primarily serving for user authentication.

## Challenges & Solutions

A key challenge was integrating the Solana blockchain for authentication with the React frontend. I utilized **Web3.js** to handle wallet connections and ensure secure user sign-ins through their Solana wallets. While the game data is managed off-chain for performance, I had to ensure that user identities were securely verified and that each player’s moves were validated in real-time. Managing state in a multiplayer game across different users was another complex aspect, which I managed using **React Context API**.

## Unique Features

- **Real-time multiplayer gameplay** using WebSocket for seamless interactions.
- **Secure user authentication** via Solana wallets to verify player identities.
- A **wallet integration feature** allowing users to connect their Solana wallet to initiate a game and track their stats.

## GitHub Repository

The source code is available on GitHub: [SolChess Repository](https://github.com/Elod-T/_SolChess).

## What I Learned

Through this project, I gained significant experience in implementing user authentication with blockchain technology in web applications. I also improved my skills in managing real-time interactions and handling state in a decentralized environment.
