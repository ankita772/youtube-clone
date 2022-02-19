import * as React from "react";
import ReactPlayer from "react-player";
import Header from "../component/header.js";
import VideoSuggestionList from "../component/videoSuggestionList.js";
import {
  AppBar,
  CssBaseline,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  Avatar,
  FormControl,
  Input,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
const Videopage = () => {
  const { id } = useParams();
  const [uniqueUrl, setUniqueUrl] = React.useState("");
  React.useEffect(() => {
    fetchVideoDetails();
  });

  const fetchVideoDetails = async () => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        _id: id,
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
    console.log("url is: ", videoDetails);
  };

  const videoDetails = () => (
    <>
      <Grid container sx={{ display: "flex", mb: 2 }}>
        <Grid xs={12} md={4} lg={4} sx={{ display: "flex" }}>
          <Box sx={{ fontSize: 14 }}>100k</Box>
          <Box sx={{ fontSize: 14, ml: 1 }}>• 1 year ago</Box>
        </Grid>
        <Grid
          xs={12}
          md={8}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: { xs: 2, sm: 0, md: 0, lg: 0 },
            mb: { xs: 2, md: 0, lg: 0 },
            fontSize: { xs: 5 },
          }}
        >
          <Button startIcon={<ThumbUpAltIcon />}>Like</Button>
          <Button startIcon={<ThumbDownAltIcon />}>Dislike</Button>
          <Button startIcon={<ShareIcon />}>Share</Button>
          <Button startIcon={<SaveAltIcon />}>Save</Button>
        </Grid>
      </Grid>
    </>
  );
  const myCommentSection = () => (
    <>
      <Grid container>
        <Grid xs={12} sx={{ display: "flex", mt: 2, mr: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <FormControl fullWidth sx={{ ml: 2 }} variant="standard">
            <Input
              id="standard-adornment-amount"
              placeholder="Add a public comment"
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
  const othersCommentSection = () => (
    <>
      <Grid container>
        <Grid xs={12} sx={{ display: "flex", mt: 5, mb: 3, mr: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <div style={{ marginLeft: "2%" }}>
            <div style={{ display: "flex" }}>
              <Box sx={{ fontSize: "12px", fontWeight: "bold" }}>Ankita</Box>
              <Box sx={{ fontSize: "12px", ml: 1 }}>2 months ago</Box>
            </div>
            <Typography sx={{ fontSize: { xs: "8px", md: "15px" }, mt: 1 }}>
              it is a comment line.it is a comment line.it is a comment line.it
              is a comment line.it is a comment line.it is a comment line.it is
              a comment line.it is a comment line
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );

  const commentAccordion = () => (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {myCommentSection()}
          </AccordionSummary>
          <AccordionDetails>{othersCommentSection()}</AccordionDetails>
        </Accordion>
      </div>
    </>
  );

  const videoDescription = () => (
    <>
      <Grid container>
        <Grid xs={8} sm={10} md={10} sx={{ display: "flex", mt: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <div style={{ marginLeft: "2%" }}>
            <Box sx={{ fontSize: "15px", fontWeight: "bold" }}>
              Gate smashers
            </Box>
            <Box sx={{ fontSize: "10px" }}>668k subscribers</Box>
            <Box sx={{ fontSize: { xs: "8px", md: "15px" }, mt: 2, mb: 2 }}>
              this is video Description .this is video Description . this is
              video Description . this is video Description .this is video
              Description .this is video Description .
            </Box>
          </div>
        </Grid>
        <Grid xs={4} sm={2} md={2} sx={{ mt: 2 }}>
          <Button variant="contained">Subscribe</Button>
        </Grid>
      </Grid>
    </>
  );

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
            // https://youtu.be/-w3H6WUN1mU
            height="26rem"
            width="100%"
            controls
          />
          <Typography
            component="div"
            sx={{ fontSize: 18, fontWeight: "bold", mt: 2 }}
          >
            Bankers algorithm
          </Typography>
          {videoDetails()}
          <Divider />
          {videoDescription()}
          <Divider />

          {myCommentSection()}
          {othersCommentSection()}
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <VideoSuggestionList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Videopage;
