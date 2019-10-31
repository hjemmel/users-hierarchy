"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const os_1 = __importDefault(require("os"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const openapi_1 = __importDefault(require("./openapi"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const logger_1 = __importDefault(require("./logger"));
const app = express_1.default();
class ExpressServer {
    constructor() {
        const root = path_1.default.normalize(__dirname + "/../..");
        app.set("appPath", root + "client");
        app.use(body_parser_1.default.json({ limit: process.env.REQUEST_LIMIT || "100kb" }));
        app.use(body_parser_1.default.urlencoded({
            extended: true,
            limit: process.env.REQUEST_LIMIT || "100kb"
        }));
        app.use(cookie_parser_1.default(process.env.SESSION_SECRET));
        app.use(express_1.default.static(`${root}/public`));
        const options = {
            explorer: true,
            swaggerOptions: {
                url: process.env.OPENAPI_SPEC || "/spec"
            }
        };
        app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(null, options));
    }
    router(routes) {
        openapi_1.default(app, routes);
        return this;
    }
    listen(p = process.env.PORT) {
        const welcome = (port) => () => logger_1.default.info(`up and running in ${process.env.NODE_ENV ||
            "development"} @: ${os_1.default.hostname()} on port: ${port}}`);
        http_1.default.createServer(app).listen(p, welcome(p));
        return app;
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=server.js.map