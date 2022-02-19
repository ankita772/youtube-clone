import React, { useEffect } from "react";
import VideoCard from "./videoCard";
import { Grid } from "@mui/material";

const cardRow = (videosData) => (
  <div style={{ marginInline: "2%" }}>
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ mt: 1 }}
    >
      {videosData.map((cardData) => (
        <Grid item xs={12} sm={6} md={3}>
          <VideoCard cardData={cardData} />
        </Grid>
      ))}
    </Grid>
  </div>
);
const VideoSuggestion = () => {
  const [videosData, setVideosData] = React.useState([]);
  useEffect(() => {
    dataOfVideos();
  }, []);

  const dataOfVideos = async () => {
    const res = await fetch("http://localhost:5000/get-videos");
    const data = await res.json();
    setVideosData(data);
    console.log(data);
  };

  // let fetchData = {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: new Headers({
  //     'Content-Type': 'application/json; charset=UTF-8'
  //   })
  // }

  return <React.Fragment>{cardRow(videosData)}</React.Fragment>;
};
export default VideoSuggestion;
