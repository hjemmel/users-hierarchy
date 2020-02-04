import { Request, Response, NextFunction } from "express";
import HttpException from "./http.exception";
import { INTERNAL_SERVER_ERROR } from "http-status-codes";

export default function errorHandler(
    error: HttpException,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) {
    const status = error.status || INTERNAL_SERVER_ERROR;
    const message = error.message || "Something went wrong";
    res.status(status).json({ message });
}
