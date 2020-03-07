import HttpException from "../middlewares/http.exception";
import { NOT_FOUND } from "http-status-codes";

class UserNotFoundException extends HttpException {
    constructor() {
        super(NOT_FOUND, "User not Found");
    }
}

export default UserNotFoundException;
