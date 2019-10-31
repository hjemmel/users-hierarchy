"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).json({ message });
}
exports.default = errorHandler;
//# sourceMappingURL=error.handler.js.map