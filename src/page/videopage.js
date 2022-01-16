import * as React from "react";
import ReactPlayer from "react-player";
import Header from "../component/header.js";
import VideoSuggestionList from "../component/videoSuggestionList.js";
import { AppBar, CssBaseline, Grid, Typography, Box } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const Videopage = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Header />
      </AppBar>

      <Grid
        container
        sx={{ mt: { xs: 0, md: 12 } }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={12} md={7} lg={7} sx={{ ml: { xs: 0, md: 5 } }}>
          <ReactPlayer
            url="https://youtu.be/-w3H6WUN1mU"
            height="26rem"
            width="100%"
            controls
            playing
          />
          <Typography component="div" sx={{ fontSize: 18, mt: 2 }}>
            Bankers algorithm
          </Typography>
          <div style={{ display: "flex", marginTop: "2%" }}>
            <Box sx={{ fontSize: 14 }}>100k</Box>
            <Box sx={{ fontSize: 14, ml: 1 }}>• 1 year ago</Box>
            <div style={{ marginleft: "50px" }}>
              <ThumbUpAltIcon />
              <ThumbDownAltIcon />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <VideoSuggestionList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Videopage;
