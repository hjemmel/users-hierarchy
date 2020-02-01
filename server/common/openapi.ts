import path from "path";
import express, { Application } from "express";
import errorHandler from "../api/middlewares/error.handler";
import { OpenApiValidator } from "express-openapi-validator/dist";

export default function openapi(
    app: Application,
    routes: (app: Application) => void
) {
    const apiSpec = path.join(__dirname, "api.yml");
    app.use(process.env.OPENAPI_SPEC || "/spec", express.static(apiSpec));

    new OpenApiValidator({
        apiSpec
    }).install(app);

    routes(app);
    app.use(errorHandler);
}
