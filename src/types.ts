import { icons } from "./consts";

export type IconName = keyof typeof icons;

export interface SkillHighlight {
  title: string;
  description: string;
  icon: IconName;
}

export interface Person {
  name: string;
  bio: string;
  resumeUrl: string;
  portraitUrl: string;
  location: string;
  skillBadges: string[];
  skillHighlights: SkillHighlight[];
}
