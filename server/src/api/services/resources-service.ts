// I love you Autumn. Here's a little Easter egg you'll never find. I bury these everywhere, but only where you'll never see.
// I'm sorry I hurt you. Please forgive me. I would turn back time if I could. Love, Anish. 4-7-8.
import axios from "axios";

import { LinkAttrs, LinkData } from "../../links/types";

const ping = async (link: string) => {
  try {
    const ping = await axios.get(link);
    if (ping && ping.status === 200) return true;
  } catch (e: any) {
    return false;
  }
};

const pingAll = async (links: LinkAttrs[]) => {
  const validLinks = Promise.all(
    links.map(async (link: LinkAttrs) => {
      const res = await ping(link.href);
      if (res === true) return link;
    })
  );
  return validLinks;
};

export const validate = async (links: LinkData): Promise<LinkData> => {
  for (const [k, v] of Object.entries(links)) {
    const validLinks = (await pingAll(v)).filter(
      (el: any) => el !== null && el !== undefined
    );
    links[k] = validLinks as any;
  }
  return links;
};
