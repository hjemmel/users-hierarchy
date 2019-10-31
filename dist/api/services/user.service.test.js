"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
const user_notfound_exception_1 = __importDefault(require("./user.notfound.exception"));
const role_notfound_exception_1 = __importDefault(require("./role.notfound.exception"));
describe("UserService", () => {
    let service;
    beforeEach(() => {
        service = new user_service_1.UserService();
    });
    const roles = [
        {
            Id: 1,
            Name: "System Administrator",
            Parent: 0
        },
        {
            Id: 2,
            Name: "Location Manager",
            Parent: 1
        },
        {
            Id: 3,
            Name: "Supervisor",
            Parent: 2
        },
        {
            Id: 4,
            Name: "Employee",
            Parent: 3
        },
        {
            Id: 5,
            Name: "Trainer",
            Parent: 3
        }
    ];
    const users = [
        {
            Id: 1,
            Name: "Adam Admin",
            Role: 1
        },
        {
            Id: 2,
            Name: "Emily Employee",
            Role: 4
        },
        {
            Id: 3,
            Name: "Sam Supervisor",
            Role: 3
        },
        {
            Id: 4,
            Name: "Mary Manager",
            Role: 2
        },
        {
            Id: 5,
            Name: "Steve Trainer",
            Role: 5
        }
    ];
    it("Should set the roles", () => {
        service.setRoles(roles);
        expect(service.roles).toBe(roles);
    });
    it("Should set the User", () => {
        service.setRoles(roles);
        service.setUsers(users);
        expect(service.users).toBe(users);
    });
    it("Should set roles before users", () => {
        expect(() => service.setUsers(users)).toThrow(role_notfound_exception_1.default);
    });
    it("Should set user roles should exist in roles", () => {
        service.setRoles(roles);
        const noRoleUser = [
            {
                Id: 1,
                Name: "Adam Admin",
                Role: 10
            }
        ];
        expect(() => service.setUsers(noRoleUser)).toThrow(role_notfound_exception_1.default);
    });
    it("Should getSubordinates of a given user", () => {
        service.setRoles(roles);
        service.setUsers(users);
        expect(service.getSubOrdinates(3)).toStrictEqual([
            { Id: 2, Name: "Emily Employee", Role: 4 },
            { Id: 5, Name: "Steve Trainer", Role: 5 }
        ]);
    });
    it("Should check if user was not found", () => {
        service.setRoles(roles);
        service.setUsers(users);
        expect(() => service.getSubOrdinates(10)).toThrow(user_notfound_exception_1.default);
    });
    it("Should check if users were set", () => {
        service.setRoles(roles);
        expect(() => service.getSubOrdinates(2)).toThrow(user_notfound_exception_1.default);
    });
    it("Should check if roles were set", () => {
        service.setRoles(roles);
        service.setUsers(users);
        service.setRoles([]);
        expect(() => service.getSubOrdinates(2)).toThrow(role_notfound_exception_1.default);
    });
    it("Should check if users has no subordinate", () => {
        service.setRoles(roles);
        service.setUsers(users);
        expect(service.getSubOrdinates(5)).toHaveLength(0);
    });
});
//# sourceMappingURL=user.service.test.js.map