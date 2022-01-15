import * as React from "react";
import ReactPlayer from "react-player";
import { Grid, Typography, ButtonBase } from "@mui/material";

import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const videoOpt = () => (
  <Grid container spacing={2}>
    <Grid item>
      <ButtonBase sx={{ width: 128, height: 128 }}>
        <Img
          alt="complex"
          src="https://i.ytimg.com/vi/7gMLNiEz3nw/hqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBLA5uG8DDgm8gYYCGSL8k5Uapr2A"
        />
      </ButtonBase>
    </Grid>
    <Grid item xs={12} sm container sx={{ mt: 5 }}>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography variant="body2" gutterBottom>
            Full resolution 1920x1080 • JPEG
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: 1030114
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

const VideoSuggestionList = () => {
  return (
    <React.Fragment>
      {videoOpt()}
      {videoOpt()}
      {videoOpt()}
      {videoOpt()}
      {videoOpt()}
      {videoOpt()}
      {videoOpt()}
      {videoOpt()}
      {videoOpt()}
    </React.Fragment>
  );
};
export default VideoSuggestionList;
