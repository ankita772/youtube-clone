import React from "react";

import Header from "../component/header.js";
import Topic from "../component/topic.js";
import VideoSuggestion from "../component/videoSuggestion.js";

const Mainpage = () => {
  return (
    <React.Fragment>
      <div className="youtubeBody">
        
          <Header />
           <Topic />
        <VideoSuggestion/>
        
      </div>
    </React.Fragment>
  );
};
export default Mainpage;
