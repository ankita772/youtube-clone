import * as React from 'react';
import Header from "../component/header.js";
import Topic from "../component/topic.js";
import VideoSuggestion from "../component/videoSuggestion.js";
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Box,
  Fab,
  Zoom
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ScrollTop(props) {
  const { children, window } = props;
  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
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

const Homepage=(props)=>{
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Header/>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      
        <Topic/>
        <VideoSuggestion/>
      
      <ScrollTop {...props}>
        <Fab color="primary" size="x-small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
export default Homepage;
