import { Application } from "express";
import userRoleRouter from "./api/controllers/user-roles/router";
export default function routes(app: Application): void {
    app.use("/api/v1/hierarchy", userRoleRouter);
}
