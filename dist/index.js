"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./common/env");
const server_1 = __importDefault(require("./common/server"));
const routes_1 = __importDefault(require("./routes"));
const port = parseInt(process.env.PORT);
exports.default = new server_1.default().router(routes_1.default).listen(port);
//# sourceMappingURL=index.js.map