import { Router } from "express";

import { validateLinks } from "../controllers/resources-controller";

const router = Router();

router.route("/validate-links").get(validateLinks);

export default router;
