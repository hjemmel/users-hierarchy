import HttpException from "../middlewares/http.exception";
import { NOT_FOUND } from "http-status-codes";

class RoleNotFoundException extends HttpException {
    constructor() {
        super(NOT_FOUND, "Role not Found");
    }
}

export default RoleNotFoundException;
