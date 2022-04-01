import React from "react";
import Leftbar from "./leftbar";
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Typography, InputBase, Drawer } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";

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

const HeaderIconList = ({
  leftbar,
  toggleDrawer,
  handleSearch,
  handleFilter,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, color: "black" }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
        <Drawer anchor="left" open={leftbar} onKeyDown={toggleDrawer(false)}>
          {/* <Leftbar onKeyDown={toggleDrawer} onClick={toggleDrawer} /> */}
          <Leftbar toggleDrawer={toggleDrawer} />
        </Drawer>
      </IconButton>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => navigate("/")}
      >
        <YouTubeIcon
          sx={{
            fontSize: { xs: "20px", sm: "30px", md: "40px" },
            color: "red",
          }}
        />
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
      </IconButton>
      <Search sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "black" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search YouTube"
          inputProps={{ "aria-label": "search" }}
          onKeyPress={handleSearch}
          onChange={handleFilter}
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
    </>
  );
};

export default HeaderIconList;
