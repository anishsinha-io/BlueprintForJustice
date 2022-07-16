"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mail_controller_1 = require("../controllers/mail-controller");
var router = (0, express_1.Router)();
router.route("/signup").post(mail_controller_1.addUserToMailingList);
router.route("/contact").post(mail_controller_1.sendContactForm);
exports.default = router;
