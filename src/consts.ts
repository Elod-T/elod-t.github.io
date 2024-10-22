import type { Person } from "./types";

export const SITE_TITLE = "Előd Tobak | Full-Stack Developer & AI Specialist";
export const SITE_DESCRIPTION =
  "Portfolio of Előd Tobak, Full-Stack Developer specializing in performant web applications and AI solutions based in Karlsruhe, Germany.";

export const person: Person = {
  name: "Előd Tobak",
  bio: "I am a passionate developer, currently based in Karlsruhe, Germany.",
  resumeUrl:
    "https://docs.google.com/document/d/1Qp5leMXutpE97lyRFiPgz-SBT4CzIgFMOGD0mqmbpYQ/edit?usp=sharing",
  portraitUrl: "/pfp-no-bg.png",
  location: "Karlsruhe, Germany",
  skillBadges: ["Full-Stack", "UI/UX", "AI"],
  skillHighlights: [
    {
      title: "Full-Stack Development",
      description:
        "3+ years building high-performance web apps with React, Next.JS, Flask, and more.",
      icon: "code",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating user-friendly, engaging designs that optimize performance.",
      icon: "design",
    },
    {
      title: "AI & Reinforcement Learning",
      description:
        "Integrating AI and training models using reinforcement learning for smarter, adaptive applications.",
      icon: "ai",
    },
  ],
};

export const icons = {
  code: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  `,
  design: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  `,
  ai: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="6" height="6" />
      <path d="M3 12h3M18 12h3M12 3v3M12 18v3M5.636 5.636l2.121 2.121M16.243 16.243l2.121 2.121M5.636 18.364l2.121-2.121M16.243 7.757l2.121-2.121" />
    </svg>
  `,
};
