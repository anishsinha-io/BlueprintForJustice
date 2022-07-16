import { Router } from "express";

import {
  addUserToMailingList,
  sendContactForm,
} from "../controllers/mail-controller";

const router = Router();

router.route("/signup").post(addUserToMailingList);
router.route("/contact").post(sendContactForm);

export default router;
