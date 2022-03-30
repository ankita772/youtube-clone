import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Notification from "../component/notification";
import {
  AppBar,
  CssBaseline,
  Grid,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Header,
  AddComment,
  Comment,
  VideoDescription,
  VideoDetails,
  ListedVideo,
} from "../component";
import { useSelector } from "react-redux";

const Videopage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const authdetails = useSelector((state) => state.auth);
  const [videoInfo, setVideoInfo] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  // const [clickedLike, setClickedLike] = useState(false);
  useEffect(() => {
    fetchVideoDetails();
    getAllVideos();
  }, [id]);

  //get details of a particular video
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
    getAllComments(videoDetails[0]._id);
    setVideoInfo(videoDetails[0]);
  };

  //get all video details

  const getAllVideos = async () => {
    const res = await fetch("http://localhost:5000/get-all-videos");
    const data = await res.json();
    setAllVideos(data);
  };

  //click video from listedVideo
  const handleClick = (id) => {
    navigate(`/videopage/${id}`);
  };

  //update like when clicked like button
  const handleUpdateLike = async (videoId) => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        id: videoId,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + authdetails.token,
      }),
    };
    if (authdetails.token) {
      const res = await fetch("http://localhost:5000/update-like", fetchData);
      const data = await res.json();
      fetchVideoDetails();
    } else {
      setSnackbar({
        open: true,
        severity: "error",
        message: "user does not log in",
      });
    }
  };

  // //update dislike when clicked dislike button
  // const handleUpdateDislike = async (videoId) => {
  //   let fetchData = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: videoId,
  //
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   };
  //   const res = await fetch("http://localhost:5000/update-dislike", fetchData);
  //   const data = await res.json();
  //   fetchVideoDetails();
  //   console.log(data);
  // };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = async () => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        videoId: videoInfo._id,
        message: comment,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + authdetails.token,
      }),
    };
    const res = await fetch("http://localhost:5000/add-comment", fetchData);
    const data = await res.json();
    console.log(data);
    getAllComments(videoInfo._id);
    setComment("");
  };

  const getAllComments = async (videoId) => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        videoId: videoId,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + authdetails.token,
      }),
    };
    const res = await fetch(
      "http://localhost:5000/get-all-comments",
      fetchData
    );
    const data = await res.json();
    console.log(data);
    setAllComments(data);
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

          <VideoDetails
            videoInfo={videoInfo}
            handleUpdateLike={handleUpdateLike}
            //handleUpdateDislike={handleUpdateDislike}
          />
          <Divider />
          <VideoDescription videoInfo={videoInfo} />
          <Divider />

          <AddComment
            comment={comment}
            handleComment={handleComment}
            handleAddComment={handleAddComment}
          />

          <Accordion sx={{ mt: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              read all comments ..........
            </AccordionSummary>
            <AccordionDetails>
              {allComments.map((object) => (
                <Comment object={object} />
              ))}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          {allVideos.map((cardData, index) => (
            <ListedVideo
              cardData={cardData}
              handleClick={handleClick}
              key={index}
            />
          ))}
        </Grid>
      </Grid>
      <Notification
        open={snackbar.open}
        vertical="top"
        horizontal="right"
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={() => {
          setSnackbar({ ...snackbar, open: false });
        }}
      />
    </React.Fragment>
  );
};
export default Videopage;
