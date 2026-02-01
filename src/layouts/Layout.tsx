import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeModeContext } from "../providers/ThemeModeProvider";

const drawerWidth = 240;

export default function Layout() {
  const contextValue = useContext(ThemeModeContext);
  const { isDark, setIsDark } = contextValue!;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
          <Switch
            checked={isDark}
            onChange={() => setIsDark((prev) => !prev)}
            icon={<WbSunnyRoundedIcon />}
            checkedIcon={<DarkModeRoundedIcon />}
            sx={{
              width: 75,
              "& .MuiSwitch-switchBase.Mui-checked": {
                transform: "translateX(28px)",
              },
              "& .MuiSwitch-track": {
                height: 25,
                borderRadius: 11,
                opacity: 1,
              },
              "& .MuiSwitch-thumb": {
                width: 18,
                height: 18,
              },
              "& .MuiSwitch-switchBase": {
                padding: 1.5,
              },
            }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItemButton component={NavLink} to="/" end>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={NavLink} to="/counter">
            <ListItemText primary="Counter" />
          </ListItemButton>
          <ListItemButton component={NavLink} to="/hero">
            <ListItemText primary="Heroes" />
          </ListItemButton>
          <ListItemButton component={NavLink} to="/about">
            <ListItemText primary="About" />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
