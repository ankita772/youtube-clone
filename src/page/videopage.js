import * as React from "react";
import ReactPlayer from "react-player";
import Header from "../component/header.js";
import VideoSuggestionList from "../component/videoSuggestionList.js";
import { AppBar, CssBaseline } from "@mui/material";

const Videopage = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Header />
      </AppBar>

      <div className="parent">
        <div className="videoContainer">
          <div>
            <ReactPlayer
              url="https://youtu.be/-w3H6WUN1mU"
              width="100%"
              height="28rem"
              controls
              className="videoPlayer"
            />
          </div>

          <span>
            jkjfkdjkdjkdjhdkjcjhjhjhcjhcjhs nhghgfdffdfdsfd dsdsaferetrytuyiui
            nnnnnnnnlkjijki jhghgftsdrdrdtr hghghghkhjh jjhbjhbhhghghghggg
          </span>
        </div>
        <div className="videoSuggestionListContainer">
          <VideoSuggestionList />
          <VideoSuggestionList />
          <VideoSuggestionList />
          <VideoSuggestionList />
          <VideoSuggestionList />
          <VideoSuggestionList />
          <VideoSuggestionList />
          <VideoSuggestionList />
          <VideoSuggestionList />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Videopage;
