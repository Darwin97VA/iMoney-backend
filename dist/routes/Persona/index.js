"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATH_INICIAL_CORREO = void 0;
var express_1 = require("express");
var persona_1 = require("../../controller/persona");
var router = express_1.Router();
exports.PATH_INICIAL_CORREO = '/confirmar-registro';
var PATH_CONFIR_EMAIL = exports.PATH_INICIAL_CORREO + '/:token';
router.post('/entrar', persona_1.login);
router.post('/registro', persona_1.registro);
router.get(PATH_CONFIR_EMAIL, persona_1.confirmMail);
exports.default = router;
