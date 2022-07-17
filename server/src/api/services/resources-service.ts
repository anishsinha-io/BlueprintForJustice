/** Blueprint For Justice
 ** Copyright (C) 2022 Anish Sinha
 **
 ** This program is free software: you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation, either version 3 of the License, or
 ** (at your option) any later version.
 **
 ** This program is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** You should have received a copy of the GNU General Public License
 ** along with this program.  If not, see http://www.gnu.org/licenses/.
 **/

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

/**
 ** Dear Autumn, I love you always. I am sorry for what I did and I wish I could it all back. Please, forgive me.
 **/
