---
title: "Astro Out Proxy"
description: "A JavaScript library that enhances user navigation by displaying confirmation prompts before users leave an Astro website via external links."
pubDate: "Jul 22 2023"
heroImage: "/work/astro-out-proxy/astro-out-proxy.webp"
isHighlight: true
technologies: ["Astro", "Javascript", "Vercel"]
---

# Technologies Used

- **Astro**
- **JavaScript**
- **Vercel**

## Overview

**Astro Out Proxy** is a JavaScript library designed to enhance user navigation by displaying a confirmation prompt before users leave the website when clicking on an external link. This feature is especially useful for e-commerce, government, or banking websites, where user retention is critical, or legal obligations require a warning before leaving the platform. Astro Out Proxy seamlessly integrates into Astro projects, making it a powerful tool for improving user experience and preventing accidental navigation.

## My Journey with Astro

Initially, I loved the Astro framework for its innovative approach to static site generation. I then had the opportunity to work on developing **Incremental Static Regeneration (ISR)**, which has since been merged into the framework. This experience deepened my appreciation for Astro, inspiring me to create the Astro Out Proxy package to further enhance user navigation.

## Challenges & Solutions

The primary challenge was to develop a lightweight and flexible solution that could be easily integrated into existing Astro websites without disrupting performance. The library needed to handle external links during both build-time and development while maintaining a simple API for developers. I implemented a customizable proxy route system with built-in options for developers to control the behavior of external link handling, including a simple way to bypass certain links and allow exceptions.

In addition, I designed the library to be compatible with Incremental Static Regeneration (ISR) to ensure efficient handling of dynamic content.

## Unique Features

- **Customizable confirmation prompts:** The default warning message can be personalized to suit the branding and UX requirements of any application.
- **Seamless integration:** Easily integrates into any Astro project using the `astro-add` tool or manual setup.
- **Supports both development and production environments:** Includes an `OutLinkDevModeComponent` for development environments and handles build-time external link rewrites automatically.
- **Custom UI:** Offers out-of-the-box designs for the warning prompt, with the option to implement a fully custom UI to match the website’s aesthetic.

## Live Demo

Try out the live demo of Astro Out Proxy [here](https://astro-out-proxy.vercel.app/).

## GitHub Repository

View the source code on GitHub: [Astro Out Proxy Repository](https://github.com/Elod-T/astro-out-proxy).

## What I Learned

This project deepened my understanding of how proxy systems can be effectively used in web applications, especially in static and server-rendered environments like Astro. Additionally, I gained valuable insights into enhancing user experience by creating features that add functional security layers while maintaining performance. Developing for both build-time and runtime environments was an interesting challenge, and it sharpened my skills in balancing functionality with efficiency in modern static site generators.
