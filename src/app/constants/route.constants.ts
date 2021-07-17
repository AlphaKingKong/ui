import { Modules, RoleTypes } from "./app.constants";

export const staticRoutes = {
  unAuthenticatedRoutes: {
    login: "/auth/login"
  },
  authenticatedRoutes: {
    users: "/users/manage",
    campaigns: "/campaigns/manage",
  }
};

export const ModuleRoutes = [
  {
    module: Modules.campaigns,
    route: 'campaigns',
    roles: [RoleTypes.user, RoleTypes.superAdmin, RoleTypes.admin],
    label: "Campaigns"
  },
  {
    module: Modules.users,
    route: 'users',
    roles: [RoleTypes.superAdmin, RoleTypes.admin],
    label: "Users"
  }
];
