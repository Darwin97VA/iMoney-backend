"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaPersona = void 0;
var mongoose_1 = require("mongoose");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.schemaPersona = new mongoose_1.Schema({
    identidad: {
        tipoDocumentoIdentidad: String,
        documentoIdentidad: String,
        foto: String,
        nacionalidad: String,
        nombres: String,
        primerApellido: String,
        segundoApellido: String,
    },
    verificado: {
        type: Boolean,
        default: false,
    },
    pep: [
        {
            cargo: String,
            organizacion: String,
        },
    ],
    correo: String,
    contraseña: String,
    usuarios: {
        propietario: [String],
        administrador: [String],
        estandar: [String],
        visitante: [String],
    },
    asignamientos: [
        {
            _id: String,
            tipo: String,
        },
    ],
    cambiosAsignamientos: [
        {
            momento: Date,
            asignamientos: [
                {
                    _id: String,
                    tipo: String,
                },
            ],
        },
    ],
    cuentas: [String],
});
exports.schemaPersona.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function () {
        var user, salt, hash, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    user = this;
                    if (!!user.isModified('contraseña')) return [3 /*break*/, 1];
                    return [2 /*return*/, next()];
                case 1: return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
                case 2:
                    salt = _a.sent();
                    return [4 /*yield*/, bcryptjs_1.default.hash(user.contraseña, salt)];
                case 3:
                    hash = _a.sent();
                    user.contraseña = hash;
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
});
exports.schemaPersona.methods.comparePassword = function (password) {
    return bcryptjs_1.default.compare(password, this.contraseña);
};
var Persona = mongoose_1.model('Person', exports.schemaPersona, 'personas');
exports.default = Persona;
