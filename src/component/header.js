import * as React from "react";
import bird from "../assets/bird.jpeg";
import Accountbar from "./accountbar";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  MenuItem,
  Menu,
} from "@mui/material";

import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MicIcon from "@mui/icons-material/Mic";

import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [accountbarOpen,setaccountbarOpen]=React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleAccount=()=>{
  <Accountbar/>

  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
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
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
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
      <IconButton sx={{ml:1}}>
       <img src={bird} alt="green bird" width="30" height="30"/>
              
      </IconButton>
      </MenuItem>
    </Menu>
  );

  const [leftbar, setLeftBar] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeftBar(isOpen);
  };

  const list = () => (
    <Box
      sx={{ width: 220 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="Menubar">
          <ListItemIcon>
            <IconButton onClick={toggleDrawer(false)}>
              <MenuIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemIcon>
            <YouTubeIcon className="youtubeIcon" />
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
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer anchor="left" open={leftbar} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            Home
            Explore
            Subscriptions
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <YouTubeIcon className="youtubeIcon" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            YouTube
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search YouTube"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="mic"
            sx={{ mr: 2 }}
          >
            <MicIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } ,mr:2}}>
            <IconButton size="large" color="inherit" aria-label="videoCall">
              <VideoCallIcon />
            </IconButton>
            <IconButton size="large" color="inherit" aria-label="gridView">
              <GridViewIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="notification"
              aria-haspopup="true"
              color="inherit"
            >
              <NotificationsNoneIcon />
            </IconButton>
        <IconButton sx={{ml:1}} onClick={handleAccount}>
              
                <img src={bird} alt="green bird" width="30" height="30"/>
              
            </IconButton>
            
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
    
  );
}
