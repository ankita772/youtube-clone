import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import files
import bird from "../assets/bird.jpeg";
import AccountList from "../childComponent/accountList";
import RenderMobileMenu from "../childComponent/renderMobileMenu";
import HeaderIconList from "../childComponent/headerIconList";
import Signup from "../childComponent/signup";
import Signin from "../childComponent/signin";

//import from material ui
import { AppBar, Box, Toolbar, IconButton, Avatar } from "@mui/material";

import MoreIcon from "@mui/icons-material/MoreVert";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const authDetails = useSelector((state) => state.auth);
  const [isSignup, setIsSignup] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [openListAfterSignin, setOpenListAfterSignin] = useState(false);
  const [openAccountList, setOpenAccountList] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [leftbar, setLeftBar] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  useEffect(() => {
    if (authDetails.token) {
      setIsSignin(true);
    }
  }, [authDetails]);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    setOpenListAfterSignin(false);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    setOpenListAfterSignin(true);
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

  const PreSignin = () => (
    <Box sx={{ display: "flex", mr: 2 }}>
      <Signup />
      <Signin />
    </Box>
  );

  const AfterSignin = () => (
    <>
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
    </>
  );

  const handleSignOut = () => {};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <HeaderIconList
            leftbar={leftbar}
            toggleDrawer={toggleDrawer}
            handleSearch={handleSearch}
          />

          <Box sx={{ flexGrow: 1 }} />

          {isSignin === true ? <AfterSignin /> : <PreSignin />}
        </Toolbar>
      </AppBar>
      {openListAfterSignin === true ? (
        <RenderMobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
        />
      ) : (
        ""
      )}
      {openAccountList === true ? (
        <AccountList
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          menuId={menuId}
          handleMenuClose={handleMenuClose}
          setIsSignin={setIsSignin}
          setOpenAccountList={setOpenAccountList}
          setOpenListAfterSignin={setOpenListAfterSignin}
          handleSignOut={handleSignOut}
        />
      ) : (
        ""
      )}
    </Box>
  );
};
export default Header;
