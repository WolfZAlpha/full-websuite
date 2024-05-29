"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server/routes/auth.ts
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = (0, express_1.Router)();
router.post('/register', auth_1.register);
router.post('/login', auth_1.login);
exports.default = router;
