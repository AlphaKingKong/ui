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
    role: RoleTypes.user,
    modules: [
      Modules.campaigns
    ]
  },
  {
    role: RoleTypes.admin,
    modules: [
      Modules.campaigns,
      Modules.users
    ]
  },
  {
    role: RoleTypes.superAdmin,
    modules: [
      Modules.campaigns,
      Modules.users
    ]
  }
];
