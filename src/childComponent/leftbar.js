import React from "react";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Leftbar = ({ toggleDrawer }) => {
  return (
    <>
      <Box sx={{ width: 220 }} role="presentation">
        <List>
          <ListItem button key="Menubar">
            <ListItemIcon>
              <IconButton onClick={toggleDrawer(false)}>
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
            </ListItemIcon>
            <ListItemIcon>
              <YouTubeIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText primary="YouTube" />
          </ListItem>
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="Explore">
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button key="Subscriptions">
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText primary="Subscriptions" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Library">
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Library" />
          </ListItem>
          <ListItem button key="History">
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button key="Video">
            <ListItemIcon>
              <OndemandVideoIcon />
            </ListItemIcon>
            <ListItemText primary="Your video" />
          </ListItem>
          <ListItem button key="WatchLater">
            <ListItemIcon>
              <WatchLaterIcon />
            </ListItemIcon>

            <ListItemText primary="Watch later" />
          </ListItem>

          <ListItem button key="LikeVideos">
            <ListItemIcon>
              <ThumbUpAltIcon />
            </ListItemIcon>
            <ListItemText primary="Like videos" />
          </ListItem>
          <ListItem button key="ShowMore">
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
            <ListItemText primary="Show more" />`
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default Leftbar;
