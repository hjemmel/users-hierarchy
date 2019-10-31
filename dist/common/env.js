"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const env = process.env.NODE_ENV;
const envPath = path_1.default.resolve(process.cwd(), `.env.${env}`);
const defaultEnvPath = path_1.default.resolve(process.cwd(), ".env");
dotenv_1.default.config({ path: fs_1.default.existsSync(envPath) ? envPath : defaultEnvPath });
//# sourceMappingURL=env.js.map