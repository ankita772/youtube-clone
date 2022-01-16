import * as React from "react";
import VideoCard from "./videoCard";

import { Grid } from "@mui/material";

const cardRow = () => (
  <div style={{ marginInline: "2%" }}>
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ mt: 1 }}
    >
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
  </div>
);
const VideoSuggestion = () => {
  return <React.Fragment>{cardRow()}</React.Fragment>;
};
export default VideoSuggestion;
