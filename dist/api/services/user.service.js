"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_notfound_exception_1 = __importDefault(require("./user.notfound.exception"));
const role_notfound_exception_1 = __importDefault(require("./role.notfound.exception"));
class UserService {
    constructor() {
        this.roles = null;
        this.users = null;
        this.subRoles = {};
    }
    setRoles(roles) {
        this.roles = roles;
        // initialize the sub roles, creating kind of HashMap
        this.subRoles = roles.reduce((subRole, role) => {
            subRole[role.Id] = Object.assign(Object.assign({}, role), { subRoles: [] });
            return subRole;
        }, {});
        //Loop the roles
        for (const role of roles) {
            let parent = role.Parent;
            while (parent !== 0) {
                const subRole = this.subRoles[parent];
                subRole.subRoles.push(role.Id);
                parent = subRole.Parent;
            }
        }
    }
    setUsers(users) {
        this.validateRoles();
        // validate if users have valid roles
        users.forEach((item) => {
            if (!this.users) {
                this.users = [];
            }
            if (!this.roles.find((role) => role.Id === item.Role)) {
                throw new role_notfound_exception_1.default();
            }
            this.users.push(item);
        });
        this.users = users;
    }
    validateRoles() {
        if (!this.roles || this.roles.length === 0) {
            throw new role_notfound_exception_1.default();
        }
    }
    getSubOrdinates(id) {
        if (!this.users) {
            throw new user_notfound_exception_1.default();
        }
        this.validateRoles();
        const user = this.users.find((item) => item.Id === id);
        if (!user) {
            throw new user_notfound_exception_1.default();
        }
        const subRoles = this.subRoles[user.Role].subRoles;
        //return empty if there is no roles
        if (subRoles.length === 0) {
            return [];
        }
        return this.users.filter((user) => {
            return subRoles.indexOf(user.Role) > -1;
        });
    }
}
exports.UserService = UserService;
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map