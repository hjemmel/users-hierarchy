interface UserRole {
    Id: number;
    Name: string;
}

export interface Role extends UserRole {
    Parent: number;
}

export interface User extends UserRole {
    Role: number;
}

interface SubRoles extends Role {
    subRoles: number[];
}

export interface SubRole {
    [key: number]: SubRoles;
}
