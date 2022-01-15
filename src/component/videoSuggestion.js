import * as React from "react";
import VideoCard from "./videoCard";

import { Box, Grid } from "@mui/material";

const cardRow = () => (
  <Box>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <VideoCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <VideoCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <VideoCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <VideoCard />
      </Grid>
    </Grid>
  </Box>
);
const VideoSuggestion = () => {
  return (
    <React.Fragment>
      {cardRow()}
      {cardRow()}
      {cardRow()}
      {cardRow()}
      {cardRow()}
    </React.Fragment>
  );
};
export default VideoSuggestion;
