/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
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
import { useDispatch, useSelector } from "react-redux";
import { notificationService } from "../Redux/Actions";
import ShareModal from "../component/Modal";

const Videopage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authdetails = useSelector((state) => state.auth);
  const [shareModalOpen, setShareModal] = useState(false);
  const [videoInfo, setVideoInfo] = useState({});
  const [allVideos, setAllVideos] = useState([]);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  console.log(snackbar);
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
      "https://youtubeclone2.herokuapp.com/get-video-details",
      fetchData
    );
    const videoDetails = await res.json();
    getAllComments(videoDetails[0]._id);
    setVideoInfo(videoDetails[0]);
  };

  //get all video details

  const getAllVideos = async () => {
    const res = await fetch(
      "https://youtubeclone2.herokuapp.com/get-all-videos"
    );
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
      const res = await fetch(
        "https://youtubeclone2.herokuapp.com/update-like",
        fetchData
      );
      await res.json();
      fetchVideoDetails();
    } else {
      dispatch(
        notificationService({
          message: "User is not logged in",
          severity: "error",
        })
      );
    }
  };

  //update dislike when clicked dislike button
  const handleUpdateDislike = async (videoId) => {
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
      const res = await fetch(
        "https://youtubeclone2.herokuapp.com/update-dislike",
        fetchData
      );
      await res.json();
      fetchVideoDetails();
    } else {
      setSnackbar({
        open: true,
        severity: "error",
        message: "user does not log in",
      });
    }
  };

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
    if (authdetails.token) {
      const res = await fetch(
        "https://youtubeclone2.herokuapp.com/add-comment",
        fetchData
      );
      await res.json();
      getAllComments(videoInfo._id);
      setComment("");
    } else {
      setSnackbar({
        open: true,
        severity: "error",
        message: "user does not log in",
      });
    }
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
      "https://youtubeclone2.herokuapp.com/get-all-comments",
      fetchData
    );
    const data = await res.json();
    console.log(data);
    setAllComments(data);
  };

  const handleShare = () => {
    setShareModal(true);
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
            handleUpdateDislike={handleUpdateDislike}
            handleShare={handleShare}
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
      <ShareModal
        shareModalOpen={shareModalOpen}
        setShareModal={setShareModal}
        videoUrl={videoInfo.url}
      />
    </React.Fragment>
  );
};
export default Videopage;
