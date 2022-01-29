import * as React from "react";
import { useNavigate } from "react-router-dom";
import bird from "../assets/bird.jpeg";
import Leftbar from "../childComponent/leftbar";
import AccountList from "../childComponent/accountList";
import Signup from "../childComponent/signup";
import Signin from "../childComponent/signin";
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
  Drawer,
  Avatar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MicIcon from "@mui/icons-material/Mic";

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
  const navigate = useNavigate();
  const [isSignin, setIsSignin] = React.useState(false);
  const [openAccountList, setOpenAccountList] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [leftbar, setLeftBar] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenAccountList(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    setOpenAccountList(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/searchingVideosPage");
    }
  };

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeftBar(isOpen);
  };
  const menuId = "primary-search-account-menu";
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
        <IconButton sx={{ ml: 1 }} onClick={handleProfileMenuOpen}>
          <Avatar alt="Cindy Baker" src={bird} />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const preSignin = () => (
    <Box sx={{ display: "flex", mr: 2 }}>
      <Signup />
      <Signin completeSignin={setIsSignin} />
    </Box>
  );

  const afterSignin = () => (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        justifyContent: "space-evenly",
      }}
    >
      <IconButton size="large" color="inherit" aria-label="videoCall">
        <VideoCallIcon sx={{ color: "black" }} />
      </IconButton>

      <IconButton size="large" color="inherit" aria-label="gridView">
        <GridViewIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="notification"
      >
        <NotificationsNoneIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton sx={{ ml: 1 }} onClick={handleProfileMenuOpen}>
        <Avatar alt="candy bekar" src={bird} />
      </IconButton>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer anchor="left" open={leftbar} onClose={toggleDrawer(false)}>
              <Leftbar
                onKeyDown={toggleDrawer(false)}
                onClick={toggleDrawer(false)}
              />
            </Drawer>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <YouTubeIcon
              sx={{
                fontSize: { xs: "20px", sm: "30px", md: "40px" },
                color: "red",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              color: "black",
              mr: 2,
            }}
          >
            YouTube
          </Typography>
          <Search sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search YouTube"
              inputProps={{ "aria-label": "search" }}
              onKeyPress={handleSearch}
              sx={{ color: "black", boxShadow: "0.2px 0.2px 5px grey inset" }}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="mic"
            sx={{ mr: 2, display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <MicIcon sx={{ color: "black" }} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          {isSignin === true ? afterSignin() : preSignin()}
          {isSignin === false ? (
            ""
          ) : (
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                sx={{ color: "black" }}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {openAccountList === true ? (
        <AccountList
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          menuId={menuId}
          handleMenuClose={handleMenuClose}
          setIsSignin={setIsSignin}
          setOpenAccountList={setOpenAccountList}
        />
      ) : (
        ""
      )}
    </Box>
  );
}
