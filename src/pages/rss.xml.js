import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const works = await getCollection("work");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: works.map((work) => ({
      ...work.data,
      link: `/work/${work.slug}/`,
    })),
  });
}
