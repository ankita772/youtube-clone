/* eslint-disable react-hooks/exhaustive-deps */
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
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MoreIcon from "@mui/icons-material/MoreVert";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions";

const Header = () => {
  const navigate = useNavigate();
  const authDetails = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isSignin, setIsSignin] = useState(false);
  const [openListAfterSignin, setOpenListAfterSignin] = useState(false);
  const [openAccountList, setOpenAccountList] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [leftbar, setLeftBar] = useState(false);
  const [allVideos, setAllVideos] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [open, setOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  console.log(openAccountList);
  useEffect(() => {
    if (authDetails.token) {
      setIsSignin(true);
    } else {
      setIsSignin(false);
      handleMenuClose();
    }
    getAllVideos();
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

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setLeftBar(isOpen);
    console.log("ankita");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/searchingVideosPage");
    }
  };
  const handleFilter = (e) => {
    const data = e.target.value;
    console.log(allVideos);
    const filter = allVideos.filter((value) => {
      return value.title.toLowerCase().includes(data.toLowerCase());
    });
    console.log("filtre", filter);
    if (data === "") {
      setFilterData([]);
    } else {
      setFilterData(filter);
    }
  };
  const getAllVideos = async () => {
    const res = await fetch(
      "https://youtubeclone2.herokuapp.com/get-all-videos"
    );
    const data = await res.json();
    setAllVideos(data);
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

  const handleSignOut = () => {
    console.log("herer");
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <HeaderIconList
            leftbar={leftbar}
            toggleDrawer={toggleDrawer}
            handleSearch={handleSearch}
            handleFilter={handleFilter}
            open={open}
            setOpen={setOpen}
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

      <AccountList
        // anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        menuId={menuId}
        handleMenuClose={handleMenuClose}
        setIsSignin={setIsSignin}
        setOpenAccountList={setOpenAccountList}
        setOpenListAfterSignin={setOpenListAfterSignin}
        handleSignOut={handleSignOut}
      />

      {filterData.length !== 0 ? (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            boxShadow: 5,
            overflow: "auto",
            maxHeight: 300,
          }}
        >
          {filterData.map((value, index) => (
            <ListItem>
              <ListItemButton
                onClick={() => {
                  navigate(`/videopage/${value._id}`);
                  setFilterData([]);
                }}
              >
                <ListItemText sx={{ color: "black" }} primary={value.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Box>
  );
};
export default Header;
