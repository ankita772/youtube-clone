import React, { useState, useEffect } from "react";
import Header from "../component/header.js";
import VideoCard from "../component/videoCard";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Box,
  Fab,
  Zoom,
  Grid,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
//HomePage
const Homepage = (props) => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    const res = await fetch("http://localhost:5000/get-all-videos");
    const data = await res.json();
    setAllVideos(data);
  };

  // const getUniqueChannel = async (channelId) => {
  //   let fetchData = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: channelId,
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   };
  //   const res = await fetch(
  //     "http://localhost:5000/get-unique-channel",
  //     fetchData
  //   );
  //   const data = await res.json();

  //   setChannelDetail(data[0]);
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Header />
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      {/* <Topic/> */}

      <div style={{ marginInline: "2%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mt: 1 }}
        >
          {allVideos.map((cardData, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <VideoCard cardData={cardData} />
            </Grid>
          ))}
        </Grid>
      </div>

      <ScrollTop {...props}>
        <Fab color="primary" size="x-small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};
export default Homepage;
