import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { AppBar, CssBaseline, Grid, Typography, Divider } from "@mui/material";

import {
  Header,
  AddComment,
  Comment,
  VideoDescription,
  VideoDetails,
  ListedVideo,
} from "../component";

const Videopage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoInfo, setVideoInfo] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetchVideoDetails();
    getAllVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVideoDetails = async () => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    const res = await fetch(
      "http://localhost:5000/get-video-details",
      fetchData
    );
    const videoDetails = await res.json();
    setVideoInfo(videoDetails[0]);
  };

  //filtering

  const getAllVideos = async () => {
    const res = await fetch("http://localhost:5000/get-all-videos");
    const data = await res.json();
    setAllVideos(data);
    console.log(data);
  };

  const handleClick = (id) => {
    navigate(`/videopage/${id}`);
    fetchVideoDetails();
  };

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
            url={videoInfo.url}
            height="26rem"
            width="100%"
            controls
          />
          <Typography
            component="div"
            sx={{ fontSize: 18, fontWeight: "bold", mt: 2 }}
          >
            {videoInfo.title}
          </Typography>

          <VideoDetails videoInfo={videoInfo} />
          <Divider />
          <VideoDescription videoInfo={videoInfo} />
          <Divider />

          <AddComment />
          <Comment />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          {allVideos.map((cardData) => (
            <ListedVideo cardData={cardData} handleClick={handleClick} />
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Videopage;
