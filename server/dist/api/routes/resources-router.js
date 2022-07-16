"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var resources_controller_1 = require("../controllers/resources-controller");
var router = (0, express_1.Router)();
router.route("/validate-links").get(resources_controller_1.validateLinks);
exports.default = router;
