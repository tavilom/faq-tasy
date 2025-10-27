import React, { useContext } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { AuthContext } from "@/stores/AuthContext";

export const MainLayout: React.FC = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("MainLayout must be used within an AuthContextProvider");
  }



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
          <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            FAQ Tasy
          </Typography>
        </Toolbar>
      </AppBar>

      <Paper
        square
        elevation={0}
        sx={{
          flexGrow: 1,
          p: 2,
          width: "100%",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Paper>
    </Box>
  );
};
