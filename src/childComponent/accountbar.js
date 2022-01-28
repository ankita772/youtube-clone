import React from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Accountbar = ({ setAccountbarOpen }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: 280,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 280,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="center"
        >
          <Toolbar>
            <IconButton>jk</IconButton>
            <Typography component="div">
              <Box sx={{ lineHeight: 1, fontSize: 12 }}>Ankita Santra</Box>
              <Box sx={{ lineHeight: 1, fontSize: 10, mt: 0.6, ml: 0.3 }}>
                <Link href="#" underline="none">
                  Manage your google account
                </Link>
              </Box>
            </Typography>
            <IconButton sx={{ ml: 0.2 }} onClick={setAccountbarOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <Divider />
          <List>
            <ListItem button key="YourChannel">
              <ListItemIcon>
                <AccountBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Your channel" />
            </ListItem>

            <ListItem button key="Membership">
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Membership" />
            </ListItem>

            <ListItem button key="SignOut">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="Settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>

            <ListItem button key="Language">
              <ListItemIcon>
                <TranslateIcon />
              </ListItemIcon>
              <ListItemText primary="Language" />
              <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </ListItem>

            <ListItem button key="Location">
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Location" />
              <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </ListItem>

            <ListItem button key="Keyboard">
              <ListItemIcon>
                <KeyboardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Keyboard" />
            </ListItem>

            <ListItem button key="Help">
              <ListItemIcon>
                <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
};
export default Accountbar;
