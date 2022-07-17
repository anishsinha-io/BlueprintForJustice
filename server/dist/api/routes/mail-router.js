"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mail_controller_1 = require("../controllers/mail-controller");
var router = (0, express_1.Router)();
router.route("/signup").post(mail_controller_1.addUserToMailingList);
router.route("/contact").post(mail_controller_1.sendContactForm);
exports.default = router;
