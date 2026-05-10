import { createAccessControl } from "better-auth/plugins/access";
import { defaultStatements, adminAc, userAc,  } from "better-auth/plugins/admin/access";

// 1. Merge default statements with your custom resource "meals"
const statement = {
    user: [ "create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update" ], //all possible actions on the user resource
	  session: [ "list", "revoke", "delete" ],
    admin_dashboard: [ "view" ],
    admin_meals: [ "view", "edit", "validate", "delete" ],
    admin_devices: [ "view" ]
} as const;
export type Resource = keyof typeof statement;

const ac = createAccessControl(statement);

// 3. Define a Member role (optional, but good for inheritance)
const userRole = ac.newRole({
    user: [],
    session: [],
    admin_dashboard: [],
    admin_meals: [],
    admin_devices: []
});

// 2. Define the Admin role by merging internal admin permissions
const adminRole = ac.newRole({
    user: [ "create", "list", "set-role", "ban", "impersonate", "delete", "set-password", "get", "update" ], //default from ...adminAc.statements, shown explicitly here for security and understanding
    session: [ "list", "revoke", "delete" ], //default from ...adminAc.statements, shown explicitly here
    admin_dashboard: [ "view" ],
    admin_meals: [ "view", "edit", "validate", "delete" ],
    admin_devices: [ "view" ],
});

export const roles = {
    User: userRole,
    Admin: adminRole,
};
export type Role = keyof typeof roles;

export { ac };

export const defaultRole:Role = 'User';

/**
 * Helper to check a single role against a single permission.
 * We access the role's internal statement directly.
 */
export function hasPermission<R extends Resource>(
    roleName: Role,
    resource: R,
    permission: Action<R>
): boolean {
    const role = roles[roleName as Role];
    if (!role) return false;

    // Better-auth roles store their permissions in the .statements property
    const resourceStatements = role.statements[resource] as readonly string[] | undefined;
    
    return resourceStatements?.includes(permission) ?? false;
}

type Action<R extends Resource> = (typeof statement)[R][number];
export function hasPermissions<R extends Resource>(
    roleInput: string, 
    resource: R, 
    permissions: Action<R>[] // This allows [ "view", "edit" ] for the specific resource
): boolean {
    // 1. Handle comma-separated roles and clean whitespace
    const activeRoles = roleInput.split(',').map(r => r.trim());

    // 2. Check if ANY of the provided roles have ANY of the requested permissions
    return activeRoles.some((roleName) => {
        // Safety check: ensure the role exists in our defined roles
        if (!(roleName in roles)) return false;

        // 3. The "AnyOf" logic
        return permissions.some((permission) => {
            // Using the 'ac' instance created earlier to check permission
            // .can returns a boolean in better-auth's access plugin
            return hasPermission(roleName as Role, resource, permission);
        });
    });
}