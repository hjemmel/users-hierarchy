"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../../services/user.service"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
class Controller {
    setUser(req, res) {
        user_service_1.default.setUsers(req.body);
        res.status(http_status_codes_1.default.OK).end();
    }
    setRole(req, res) {
        user_service_1.default.setRoles(req.body);
        res.status(http_status_codes_1.default.OK).end();
    }
    getSubOrdinates(req, res) {
        const id = Number(req.params["id"]);
        res.status(http_status_codes_1.default.OK)
            .json(user_service_1.default.getSubOrdinates(id))
            .end();
    }
}
exports.Controller = Controller;
exports.default = new Controller();
//# sourceMappingURL=controller.js.map