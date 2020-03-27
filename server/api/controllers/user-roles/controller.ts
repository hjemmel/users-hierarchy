import UserService from "../../services/user.service";
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";

export class Controller {
    setUser(req: Request, res: Response): void {
        UserService.setUsers(req.body);
        res.status(HttpStatus.OK).end();
    }

    setRole(req: Request, res: Response): void {
        UserService.setRoles(req.body);
        res.status(HttpStatus.OK).end();
    }

    getSubOrdinates(req: Request, res: Response): void {
        const id = Number(req.params["id"]);
        res.status(HttpStatus.OK).json(UserService.getSubOrdinates(id)).end();
    }
}

export default new Controller();
