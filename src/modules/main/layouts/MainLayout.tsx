import React, { useContext } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Paper,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { AuthContext } from "@/stores/AuthContext";
import { logoPinheiroPNG } from "@/utils/functions";
//import { logoUnimed } from "@/utils/functions";


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
          background: "linear-gradient(to right, #000000, #003366)",
          // borderBottomLeftRadius: 16,
          // borderBottomRightRadius: 16,
        }}
      >
        <Toolbar>
          <Box
            component="img"
            src={logoPinheiroPNG}
            alt="Logo"
            sx={{ height: 40, mr: 5 }} 
          />
          {/* <Box
            component="img"
            src={logoUnimed} 
            alt="Logo"
            sx={{ height: 42, mr: 1 }}
          /> */}

          
          <Typography variant="h5" noWrap>
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
