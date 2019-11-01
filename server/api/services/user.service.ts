import { Role, SubRole, User } from "./interfaces";
import UserNotFoundException from "./user.notfound.exception";
import RoleNotFoundException from "./role.notfound.exception";
import L from "../../common/logger";

export class UserService {
    roles: Role[] | null = null;
    users: User[] | null = null;
    subRoles: SubRole = {};

    //this method is in charge of verify the roles and create a map of roles <> subroles
    setRoles(roles: Role[]) {
        this.roles = roles;

        L.info("Setting roles");

        // initialize the sub roles, creating kind of HashMap
        this.subRoles = roles.reduce((subRole: SubRole, role) => {
            // index role with the ide and clear the subroles
            subRole[role.Id] = { ...role, subRoles: [] };

            return subRole;
        }, {});

        //Loop the roles to verify the subroles
        for (const role of roles) {
            let parent = role.Parent;

            while (parent !== 0) {
                const subRole = this.subRoles[parent];
                subRole.subRoles.push(role.Id);
                parent = subRole.Parent;
            }
        }
    }

    setUsers(users: User[]) {
        this.validateRoles();

        L.info("Setting users");

        // validate if users have valid roles
        users.forEach((item) => {
            if (!this.users) {
                this.users = [];
            }

            if (!this.roles!.find((role) => role.Id === item.Role)) {
                L.error(`Role ${item.Role} does not exist`);
                throw new RoleNotFoundException();
            }

            this.users.push(item);
        });
    }

    private validateRoles() {
        if (!this.roles || this.roles.length === 0) {
            throw new RoleNotFoundException();
        }
    }

    getSubOrdinates(id: number): User[] {
        if (!this.users) {
            throw new UserNotFoundException();
        }

        this.validateRoles();

        //try to find the user
        const user = this.users.find((item) => item.Id === id);

        if (!user) {
            throw new UserNotFoundException();
        }

        //get subroles froma  map of roles and subroles created when we set the roles
        const subRoles = this.subRoles[user.Role].subRoles;

        //return empty if there is no roles
        if (subRoles.length === 0) {
            return [];
        }

        //filter users given the roles
        return this.users.filter((user) => {
            return subRoles.indexOf(user.Role) > -1;
        });
    }
}

export default new UserService();
