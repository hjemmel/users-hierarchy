import { Request, Response, NextFunction } from "express";
import HttpException from "./http.exception";

export default function errorHandler(
    error: HttpException,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).json({ message });
}
