import * as React from "react";
import ReactPlayer from 'react-player'
import { styled } from '@mui/material/styles';
import {
Grid,
Typography,
ButtonBase,
} from '@mui/material';


const VideoSuggestionList=()=>{
    return(
    <>
    <div className="suggestion">
        <div>
          <ReactPlayer
          url="https://youtu.be/-w3H6WUN1mU"
          height="6rem"
          width="10rem"
          controls
          />
        </div>
        
          <span>
            kf dkfjkljlsdffl kdfjldkf fkljdlkl df,mljkljlsdffl kdfjldkf fkljdlkl df,mlkfldfkd kj jhj mjjhggh mjhkjh dfvldkfdlgkdl;
          </span>
</div>
    </>
  )
};
export default VideoSuggestionList;
    