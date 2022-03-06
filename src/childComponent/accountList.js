import * as React from "react";
import { getAuth, signOut } from "firebase/auth";
import Notification from "../component/notification";
import {
  Menu,
  MenuItem,
  Divider,
  Box,
  IconButton,
  Typography,
  Link,
  Avatar,
} from "@mui/material";

import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AccountList = ({
  anchorEl,
  isMenuOpen,
  menuId,
  handleMenuClose,
  setIsSignin,
  setOpenAccountList,
  setOpenListAfterSignin,
}) => {
  const auth = getAuth();
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    severity: "info",
    message: "",
  });

  const signout = () => {
    signOut(auth)
      .then(() => {
        setSnackbar({
          ...snackbar,
          open: true,
          severity: "success",
          message: "Sign out successfully Completed",
        });
        setIsSignin(false);
        setOpenAccountList(false);
        setOpenListAfterSignin(false);
        localStorage.clear();

        // Sign-out successful.
      })
      .catch((error) => {
        setSnackbar({
          ...snackbar,
          open: true,
          severity: "error",
          message: error,
        });
        // An error happened.
      });
  };
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <IconButton>
            <Avatar alt="Cindy Baker" src="" />
          </IconButton>
          <Typography component="div">
            <Box sx={{ fontSize: 12 }}>Ankita Santra</Box>
            <Box sx={{ fontSize: 10, mt: 0.6, ml: 0.3 }}>
              <Link href="#" underline="none">
                Manage your google account
              </Link>
            </Box>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <AccountBoxOutlinedIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Your channel</Typography>
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <MonetizationOnIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Membership</Typography>
        </MenuItem>

        <MenuItem onClick={signout}>
          <LogoutIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Sign Out</Typography>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleMenuClose}>
          <SettingsIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Settings</Typography>
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <TranslateIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Language</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <LanguageIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Location</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <KeyboardOutlinedIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Keyboard</Typography>
          <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <HelpOutlineOutlinedIcon />
          <Typography sx={{ fontSize: "15px", p: 1 }}>Help</Typography>

          <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
        </MenuItem>
      </Menu>
      <Notification
        open={snackbar.open}
        vertical="top"
        horizontal="center"
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={() => {
          setSnackbar({ ...snackbar, open: false });
        }}
      />
    </>
  );
};
export default AccountList;
