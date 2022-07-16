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
