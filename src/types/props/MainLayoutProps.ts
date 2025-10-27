import React from "react";

export interface MenuItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface UserInfo {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface MainLayoutProps {
  title?: string;
  menuItems?: MenuItem[];
  user?: UserInfo;
  drawerWidth?: number;
}
