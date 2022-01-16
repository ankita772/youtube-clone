import * as React from "react";
import ReactPlayer from "react-player";
import Header from "../component/header.js";
import VideoSuggestionList from "../component/videoSuggestionList.js";
import { AppBar, CssBaseline, Grid, Typography, Box } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

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
          <Typography
            component="div"
            sx={{ fontSize: 18, fontWeight: "bold", mt: 2 }}
          >
            Bankers algorithm
          </Typography>
          <Grid container sx={{ display: "flex" }}>
            <Grid xs={12} md={4} lg={4} sx={{ display: "flex" }}>
              <Box sx={{ fontSize: 14 }}>100k</Box>
              <Box sx={{ fontSize: 14, ml: 1 }}>• 1 year ago</Box>
            </Grid>
            <Grid
              xs={11}
              md={4}
              lg={8}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: { xs: 2, md: 0, lg: 0 },
                mb: { xs: 2, md: 0, lg: 0 },
              }}
            >
              <ThumbUpAltIcon />
              <Typography>Like</Typography>
              <ThumbDownAltIcon />
              <Typography>Dislike</Typography>
              <ShareIcon />
              <Typography>Share</Typography>
              <SaveAltIcon />
              <Typography>Save</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <VideoSuggestionList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Videopage;
