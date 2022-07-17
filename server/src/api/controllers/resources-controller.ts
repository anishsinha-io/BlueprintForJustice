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

import { RequestHandler } from "express";

import { LinkData } from "../../links/types";

import healingLinks from "../../links/healing-links";
import legalLinks from "../../links/legal-links";
import communityLinks from "../../links/community-links";
import mediaLinks from "../../links/media-links";
import generalLinks from "../../links/general-links";
import actionLinks from "../../links/action-links";

import { validate } from "../services/resources-service";

export const validateLinks: RequestHandler = async (req, res) => {
  try {
    let validLinks: LinkData = {};
    if (req.query.resource === "healing")
      validLinks = await validate(healingLinks);
    if (req.query.resource === "legal") validLinks = await validate(legalLinks);
    if (req.query.resource === "community")
      validLinks = await validate(communityLinks);
    if (req.query.resource === "media") validLinks = await validate(mediaLinks);
    if (req.query.resource === "general")
      validLinks = await validate(generalLinks);
    if (req.query.resource === "action")
      validLinks = await validate(actionLinks);
    res.status(200).json(validLinks);
  } catch (e) {
    res
      .status(500)
      .json("internal server error: could not validate healing links");
  }
};

export const validateLegalLinks: RequestHandler = async (req, res) => {
  try {
  } catch (e) {
    res
      .status(500)
      .json("internal server error: could not validate legal links");
  }
};
