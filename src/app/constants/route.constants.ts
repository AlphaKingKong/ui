import { Modules, RoleTypes } from "../constants/role.constants";

export const staticRoutes = {
  unAuthenticatedRoutes: {
    login: "/auth/login",
    forgotPassword: "/auth/change-password",
    changePassword: "/auth/change-password",
    resetPasswordUrl: "auth/reset-password"
  },
  authenticatedRoutes: {
    superAdminDashboard: "/super-admin/dashboard",
    adminDashboard: "/admin/dashboard",
    settings: "/admin/settings",
    campaignDetailedReport: "/admin/campaign-snapshot",
    adminCampaignOverview: "/admin/campaign-overview",
    vendorSnapshotInAdmin: "/admin/vendor-snapshot",
    a_reports: "/admin/reports",
    c_reports: "/campaign_manager/reports",
    v_reports: "/vendor/reports",
    acn_reports: "/account/reports",
    d_reports: "/delivery-team/reports",
    a_old_reports: "/admin/old-reports",
    c_old_reports: "/campaign_manager/old-reports",
    v_old_reports: "/vendor/old-reports",
    acn_old_reports: "/account/old-reports",
    d_old_reports: "/delivery-team/old-reports",
    deliveryManagerDashboard: "/delivery-team/dashboard",
    deliveryManagerReports: "/delivery-team/reports",
    deliveryManagerOldReports: "/delivery-team/old-reports",
    deliveryManagerCampaignSnapshot: "/delivery-team/campaign-snapshot",
    deliveryManagerVendorSnapshot: "/delivery-team/vendor-snapshot",
    deliveryManagerOverview: "/delivery-team/campaign-overview",
    delivieryManagerHelp: "/delivery-team/help",
    delivieryManagerUserNotifications: "/delivery-team/user-notifications",
    leadDatabase: "/admin/lead-database",
    masterTemplate: "/admin/mastertemplate",
    userManagement: "/admin/user-management",
    campaigns: "/admin/campaigns",
    help: "/admin/help",
    userNotifications: "/admin/user-notifications",
    vendorDashboard: "/vendor/dashboard",
    vendorHelp: "/vendor/help",
    vendorUserNotifications: "/vendor/user-notifications",
    vendorSnapshot: "/vendor/vendor-snapshot",
    vendorCampaignOverview: "/vendor/campaign-overview",
    accountDashboard: "/account/dashboard",
    accountHelp: "/account/help",
    accountUserNotifications: "/account/user-notifications",
    accountSnapshot: "/account/account-snapshot",
    accountCampaignOverview: "/account/campaign-overview",
    campaignManagerDashboard: "/campaign_manager/dashboard",
    campaignManagerUserManagement: "/campaign_manager/user-management",
    campaignManagerLeadDatabase: "/campaign_manager/lead-database",
    campaignManagerHelp: "/campaign_manager/help",
    campaignManagerUserNotifications: "/campaign_manager/user-notifications",
    campaignManagerMasterTemplate: "/campaign_manager/mastertemplate",
    campaignManagerOverview: "/campaign_manager/campaigns",
    campaignManagerCampaignOverview: "/campaign_manager/campaign-overview",
  }
};

export const ModuleRoutes = [

  {
    module: Modules.super_admin,
    route: 'dashboard',
    roles: [RoleTypes.superAdmin, RoleTypes.admin],
    label: "Dashboard"
  },
  {
    module: Modules.super_admin,
    route: 'user-management',
    roles: [RoleTypes.superAdmin, RoleTypes.admin],
    label: "Users"
  }
];
