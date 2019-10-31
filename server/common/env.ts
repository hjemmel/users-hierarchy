import dotenv from "dotenv";
import fs from "fs";
import path from "path";

const env = process.env.NODE_ENV;

const envPath = path.resolve(process.cwd(), `.env.${env}`);
const defaultEnvPath = path.resolve(process.cwd(), ".env");

dotenv.config({ path: fs.existsSync(envPath) ? envPath : defaultEnvPath });
