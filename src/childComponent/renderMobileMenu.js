import React from "react";
import bird from "../assets/bird.jpeg";

import { IconButton, MenuItem, Menu, Avatar } from "@mui/material";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const RenderMobileMenu = ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}) => {
  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <VideoCallIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <GridViewIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton size="large" color="inherit">
            <NotificationsNoneIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton sx={{ ml: 1 }} onClick={handleProfileMenuOpen}>
            <Avatar alt="Cindy Baker" src={bird} />
          </IconButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export default RenderMobileMenu;
