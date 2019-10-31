"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_1 = __importDefault(require("../middlewares/http.exception"));
const http_status_codes_1 = require("http-status-codes");
class UserNotFoundException extends http_exception_1.default {
    constructor() {
        super(http_status_codes_1.NOT_FOUND, "User not Found");
    }
}
exports.default = UserNotFoundException;
//# sourceMappingURL=user.notfound.exception.js.map