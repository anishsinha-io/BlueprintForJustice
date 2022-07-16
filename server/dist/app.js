"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var resources_router_1 = __importDefault(require("./api/routes/resources-router"));
var mail_router_1 = __importDefault(require("./api/routes/mail-router"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/resources", resources_router_1.default);
app.use("/api/mail", mail_router_1.default);
app.listen(8080, function () { return console.log("server listening on port 8080"); });
