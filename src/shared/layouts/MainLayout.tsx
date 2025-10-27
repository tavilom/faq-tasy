import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";
import type {
  MainLayoutProps,
  MenuItem,
  UserInfo,
} from "@/types/props/MainLayoutProps";

const defaultMenuItems: MenuItem[] = [
  { label: "Página Inicial", path: "/", icon: <MenuIcon /> },
];

const defaultUser: UserInfo = {
  name: "Usuário",
  role: "Cargo",
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  title = "Sistema",
  menuItems = defaultMenuItems,
  user = defaultUser,
  drawerWidth = 260,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
        }}
      >
        <Avatar
          alt={user.name}
          src={user.avatarUrl}
          sx={{ width: 64, height: 64, mb: 1 }}
        />
        <Typography variant="subtitle1" fontWeight="bold">
          {user.name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {user.role}
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map(({ label, path, icon }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(path);
                if (isMobile) setMobileOpen(false);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#00995d",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};