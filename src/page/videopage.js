import * as React from 'react';
import ReactPlayer from 'react-player'
import Header from "../component/header.js";
import VideoSuggestionList from '../component/videoSuggestionList.js';
import {
  Box,
  AppBar,
  CssBaseline,
  Paper,
  Grid,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Videopage=(props)=>{
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Header className="nav"/>
      </AppBar>

{/* <div className='parent'>
        <div className='videoContainer'>
          <div> */}
          <ReactPlayer
          url="https://youtu.be/-w3H6WUN1mU"
          controls 
          className="videoPlayer"     
          />
          {/* </div> */}
          
          <span>
          jkjfkdjkdjkdjhdkjcjhjhjhcjhcjhs nhghgfdffdfdsfd dsdsaferetrytuyiui nnnnnnnnlkjijki jhghgftsdrdrdtr
              hghghghkhjh jjhbjhbhhghghghggg
          </span>
              
         {/* </div> */}
        {/* <div className='videoSuggestionListContainer'> */}
          
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
        {/* </div>
        </div> */}
    </React.Fragment>
  );
}
export default Videopage;

